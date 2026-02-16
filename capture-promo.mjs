import puppeteer from 'puppeteer';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const FRAME_DIR = '/tmp/promo-frames';
const OUTPUT = './promo-video.mp4';
const WIDTH = 1280;
const HEIGHT = 720;
const FPS = 30;

// Clean up old frames
if (fs.existsSync(FRAME_DIR)) fs.rmSync(FRAME_DIR, { recursive: true });
fs.mkdirSync(FRAME_DIR, { recursive: true });

const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: WIDTH, height: HEIGHT, deviceScaleFactor: 2 },
    args: ['--no-sandbox'],
});

const page = await browser.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 4000)); // Wait for all images

const totalHeight = await page.evaluate(() => document.body.scrollHeight);
const maxScroll = totalHeight - HEIGHT;
console.log(`Page height: ${totalHeight}px, Max scroll: ${maxScroll}px`);

// Get key section positions
const sections = await page.evaluate(() => {
    const getPos = (selector) => {
        const el = document.querySelector(selector);
        return el ? el.getBoundingClientRect().top + window.scrollY : null;
    };

    // Find sections by their heading text
    const allSections = document.querySelectorAll('section');
    const positions = {};

    allSections.forEach(sec => {
        const h2 = sec.querySelector('h2');
        if (!h2) return;
        const text = h2.textContent.trim();
        const top = sec.getBoundingClientRect().top + window.scrollY;

        if (text.includes('Who Is This Course For')) positions.whoIsThisFor = top;
        if (text.includes('Class Schedule')) positions.schedule = top;
        if (text.includes('Learning Path')) positions.curriculum = top;
        if (text.includes('Your Data Analysis Workflow')) positions.workflow = top;
        if (text.includes('Publication-Ready Figures')) positions.figures = top;
        if (text.includes('Publication-Ready Tables')) positions.tables = top;
        if (text.includes('Reproducible Research')) positions.reproducible = top;
        if (text.includes('Invest in Your Research')) positions.pricing = top;
        if (text.includes('tidyplots')) positions.tidyplots = top;
        if (text.includes('Scientific Journal')) positions.ggsci = top;
    });

    // Also get instructor section
    const instructorHeadings = document.querySelectorAll('h2');
    instructorHeadings.forEach(h => {
        if (h.textContent.includes('Instructor')) {
            positions.instructor = h.getBoundingClientRect().top + window.scrollY;
        }
    });

    return positions;
});

console.log('Detected section positions:', sections);

// Helper: center a section in viewport (offset to show section heading + content)
const centerOn = (sectionTop) => Math.max(0, Math.min(sectionTop - 80, maxScroll));

// Easing functions
function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// --- STORYTELLING TIMELINE ---
// Slower, deliberate pacing with zoom on key value propositions
const timeline = [
    // === ACT 1: HOOK (Hero) ===
    // Hold on hero — let them read the course name
    { type: 'hold', duration: 3.5, scroll: 0, zoom: 1 },
    // Gentle zoom into hero tagline
    { type: 'animate', duration: 2, scrollFrom: 0, scrollTo: 0, zoomFrom: 1, zoomTo: 1.2 },
    // Hold zoomed so they read the subtitle
    { type: 'hold', duration: 2, scroll: 0, zoom: 1.2 },
    // Zoom back out
    { type: 'animate', duration: 1.5, scrollFrom: 0, scrollTo: 0, zoomFrom: 1.2, zoomTo: 1 },

    // === ACT 2: WHO IS THIS FOR ===
    // Scroll to "Who Is This Course For"
    { type: 'animate', duration: 3, scrollFrom: 0, scrollTo: centerOn(sections.whoIsThisFor || 800), zoomFrom: 1, zoomTo: 1 },
    // Hold so they can read audience cards
    { type: 'hold', duration: 3, scroll: centerOn(sections.whoIsThisFor || 800), zoom: 1 },
    // Zoom into the cards
    { type: 'animate', duration: 1.5, scrollFrom: centerOn(sections.whoIsThisFor || 800), scrollTo: centerOn((sections.whoIsThisFor || 800) + 200), zoomFrom: 1, zoomTo: 1.15 },
    { type: 'hold', duration: 2, scroll: centerOn((sections.whoIsThisFor || 800) + 200), zoom: 1.15 },
    { type: 'animate', duration: 1, scrollFrom: centerOn((sections.whoIsThisFor || 800) + 200), scrollTo: centerOn((sections.whoIsThisFor || 800) + 200), zoomFrom: 1.15, zoomTo: 1 },

    // === ACT 3: CLASS SCHEDULE ===
    { type: 'animate', duration: 2, scrollFrom: centerOn((sections.whoIsThisFor || 800) + 200), scrollTo: centerOn(sections.schedule || 1600), zoomFrom: 1, zoomTo: 1 },
    { type: 'hold', duration: 2.5, scroll: centerOn(sections.schedule || 1600), zoom: 1 },
    // Zoom into schedule details
    { type: 'animate', duration: 1.5, scrollFrom: centerOn(sections.schedule || 1600), scrollTo: centerOn(sections.schedule || 1600), zoomFrom: 1, zoomTo: 1.2 },
    { type: 'hold', duration: 2, scroll: centerOn(sections.schedule || 1600), zoom: 1.2 },
    { type: 'animate', duration: 1, scrollFrom: centerOn(sections.schedule || 1600), scrollTo: centerOn(sections.schedule || 1600), zoomFrom: 1.2, zoomTo: 1 },

    // === ACT 4: LEARNING PATH / CURRICULUM ===
    { type: 'animate', duration: 2.5, scrollFrom: centerOn(sections.schedule || 1600), scrollTo: centerOn(sections.curriculum || 2400), zoomFrom: 1, zoomTo: 1 },
    { type: 'hold', duration: 2.5, scroll: centerOn(sections.curriculum || 2400), zoom: 1 },
    // Slow scroll through curriculum modules
    { type: 'animate', duration: 4, scrollFrom: centerOn(sections.curriculum || 2400), scrollTo: centerOn((sections.curriculum || 2400) + 600), zoomFrom: 1, zoomTo: 1 },
    { type: 'hold', duration: 1.5, scroll: centerOn((sections.curriculum || 2400) + 600), zoom: 1 },

    // === ACT 5: DATA ANALYSIS WORKFLOW (Packages) ===
    { type: 'animate', duration: 2, scrollFrom: centerOn((sections.curriculum || 2400) + 600), scrollTo: centerOn(sections.workflow || 3600), zoomFrom: 1, zoomTo: 1 },
    { type: 'hold', duration: 2.5, scroll: centerOn(sections.workflow || 3600), zoom: 1 },
    // Zoom into package icons
    { type: 'animate', duration: 1.5, scrollFrom: centerOn(sections.workflow || 3600), scrollTo: centerOn((sections.workflow || 3600) + 150), zoomFrom: 1, zoomTo: 1.15 },
    { type: 'hold', duration: 2, scroll: centerOn((sections.workflow || 3600) + 150), zoom: 1.15 },
    { type: 'animate', duration: 1, scrollFrom: centerOn((sections.workflow || 3600) + 150), scrollTo: centerOn((sections.workflow || 3600) + 150), zoomFrom: 1.15, zoomTo: 1 },

    // === ACT 6: PLOT TYPES (Publication-Ready Figures) ===
    { type: 'animate', duration: 2.5, scrollFrom: centerOn((sections.workflow || 3600) + 150), scrollTo: centerOn(sections.figures || 5000), zoomFrom: 1, zoomTo: 1 },
    { type: 'hold', duration: 2, scroll: centerOn(sections.figures || 5000), zoom: 1 },
    // Slow scroll through plot type categories
    { type: 'animate', duration: 5, scrollFrom: centerOn(sections.figures || 5000), scrollTo: centerOn((sections.figures || 5000) + 1200), zoomFrom: 1, zoomTo: 1 },
    // Zoom into a plot category
    { type: 'animate', duration: 1.5, scrollFrom: centerOn((sections.figures || 5000) + 1200), scrollTo: centerOn((sections.figures || 5000) + 800), zoomFrom: 1, zoomTo: 1.2 },
    { type: 'hold', duration: 2, scroll: centerOn((sections.figures || 5000) + 800), zoom: 1.2 },
    { type: 'animate', duration: 1, scrollFrom: centerOn((sections.figures || 5000) + 800), scrollTo: centerOn((sections.figures || 5000) + 800), zoomFrom: 1.2, zoomTo: 1 },

    // === ACT 7: PUBLICATION-READY TABLES ===
    { type: 'animate', duration: 2.5, scrollFrom: centerOn((sections.figures || 5000) + 800), scrollTo: centerOn(sections.tables || 7000), zoomFrom: 1, zoomTo: 1 },
    { type: 'hold', duration: 2.5, scroll: centerOn(sections.tables || 7000), zoom: 1 },
    // Slow scroll through GIF demos
    { type: 'animate', duration: 4, scrollFrom: centerOn(sections.tables || 7000), scrollTo: centerOn((sections.tables || 7000) + 800), zoomFrom: 1, zoomTo: 1 },
    { type: 'hold', duration: 2, scroll: centerOn((sections.tables || 7000) + 800), zoom: 1 },

    // === ACT 8: SCROLL THROUGH REMAINING SECTIONS ===
    // Reproducible Research, tidyplots, ggsci, previous cohorts, instructor
    { type: 'animate', duration: 8, scrollFrom: centerOn((sections.tables || 7000) + 800), scrollTo: centerOn(sections.pricing || maxScroll - 400), zoomFrom: 1, zoomTo: 1 },

    // === ACT 9: PRICING — THE CLOSE ===
    { type: 'hold', duration: 2, scroll: centerOn(sections.pricing || maxScroll - 400), zoom: 1 },
    // Zoom into price
    { type: 'animate', duration: 2, scrollFrom: centerOn(sections.pricing || maxScroll - 400), scrollTo: centerOn((sections.pricing || maxScroll - 400) + 100), zoomFrom: 1, zoomTo: 1.25 },
    // Hold on zoomed price — let discount sink in
    { type: 'hold', duration: 3, scroll: centerOn((sections.pricing || maxScroll - 400) + 100), zoom: 1.25 },
    // Zoom back out
    { type: 'animate', duration: 1.5, scrollFrom: centerOn((sections.pricing || maxScroll - 400) + 100), scrollTo: centerOn((sections.pricing || maxScroll - 400) + 100), zoomFrom: 1.25, zoomTo: 1 },
    // Final hold
    { type: 'hold', duration: 2, scroll: centerOn((sections.pricing || maxScroll - 400) + 100), zoom: 1 },
];

const totalDuration = timeline.reduce((a, s) => a + s.duration, 0);
const totalFrames = timeline.reduce((a, s) => a + Math.round(s.duration * FPS), 0);
console.log(`\nTotal video duration: ${totalDuration.toFixed(1)}s (${totalFrames} frames)`);

// Generate frames
let frameIndex = 0;

for (const segment of timeline) {
    const segFrames = Math.round(segment.duration * FPS);

    for (let f = 0; f < segFrames; f++) {
        const t = segFrames > 1 ? f / (segFrames - 1) : 0;
        const eased = easeInOut(t);

        let scroll, zoom;

        if (segment.type === 'hold') {
            scroll = segment.scroll;
            zoom = segment.zoom;
        } else {
            scroll = segment.scrollFrom + (segment.scrollTo - segment.scrollFrom) * eased;
            zoom = segment.zoomFrom + (segment.zoomTo - segment.zoomFrom) * eased;
        }

        await page.evaluate((s) => window.scrollTo(0, s), Math.round(scroll));

        if (zoom !== 1) {
            await page.evaluate((z) => {
                document.body.style.transformOrigin = 'center top';
                document.body.style.transform = `scale(${z})`;
            }, zoom);
        } else {
            await page.evaluate(() => {
                document.body.style.transform = '';
            });
        }

        await new Promise(r => setTimeout(r, 25));

        const framePath = path.join(FRAME_DIR, `frame_${String(frameIndex).padStart(5, '0')}.png`);
        await page.screenshot({ path: framePath });

        frameIndex++;
        if (frameIndex % 60 === 0) {
            const pct = ((frameIndex / totalFrames) * 100).toFixed(0);
            console.log(`Progress: ${pct}% (frame ${frameIndex}/${totalFrames})`);
        }
    }
}

await browser.close();
console.log(`\nTotal frames captured: ${frameIndex}`);
console.log('Encoding video with ffmpeg...');

execSync(
    `ffmpeg -y -framerate ${FPS} -i ${FRAME_DIR}/frame_%05d.png -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -vf "scale=${WIDTH * 2}:${HEIGHT * 2}" ${OUTPUT}`,
    { stdio: 'inherit' }
);

console.log(`\nPromo video saved to: ${OUTPUT}`);
fs.rmSync(FRAME_DIR, { recursive: true });
