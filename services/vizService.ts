
import { GoogleGenAI } from "@google/genai";

/**
 * Executes R code by generating a corresponding high-fidelity plot image via Gemini.
 * Optimized for rapid visual response using the gemini-2.5-flash-image model.
 */
export async function executeRCode(code: string) {
  // Always initialize with process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Refined prompt for gemini-2.5-flash-image to ensure fastest high-quality response
  const prompt = `Act as an R console and graphics engine.
The student has provided this R code:
\`\`\`r
${code}
\`\`\`
Directly render the final ggplot2 visualization this code would produce. 
- Ensure high-resolution output.
- The style should look like a professional white-background publication plot (e.g., theme_minimal or theme_pubr).
- Only provide the final image.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        imageConfig: {
          aspectRatio: "4:3",
        }
      }
    });

    // Iterate through candidates and parts to find the image part
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          // Extract base64 encoded string from inlineData
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    throw new Error("Visualization could not be rendered.");
  } catch (error) {
    console.error("Plot Execution Error:", error);
    throw error;
  }
}
