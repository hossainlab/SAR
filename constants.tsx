import { Module, Cheatsheet } from './types';

export interface PackageInfo {
  name: string;
  description: string;
  logo: string;
}

export const TECH_STACK: PackageInfo[] = [
  { name: 'ggplot2', description: 'Grammar of Graphics', logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/ggplot2.png' },
  { name: 'dplyr', description: 'Data Manipulation', logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/dplyr.png' },
  { name: 'tidyr', description: 'Tidy Data', logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/tidyr.png' },
  { name: 'readr', description: 'Data Import', logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/readr.png' },
  { name: 'stringr', description: 'String Operations', logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/stringr.png' },
  { name: 'lubridate', description: 'Dates & Times', logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/lubridate.png' },
  { name: 'gt', description: 'Great Tables', logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/gt.png' },
  { name: 'shiny', description: 'Interactive Apps', logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/shiny.png' },
  { name: 'ggsci', description: 'Scientific Palettes', logo: 'https://raw.githubusercontent.com/nanxstats/ggsci/master/man/figures/logo.png' },
  { name: 'tidyplots', description: 'Simplified Viz', logo: 'https://tidyplots.com/reference/figures/logo.png' }
];

export const CHEATSHEETS: Cheatsheet[] = [
  { id: 'base-r', title: 'Base R', description: 'Essential base R functions for data manipulation and programming fundamentals.', filename: '01_base-r.pdf', category: 'Core R' },
  { id: 'data-transformation', title: 'Data Transformation', description: 'Transform and reshape data using dplyr verbs like filter, select, mutate, and summarize.', filename: '02_data-transformation.pdf', category: 'Data Wrangling' },
  { id: 'tidyr', title: 'tidyr', description: 'Tidy your data with pivot, nest, and other reshaping functions.', filename: '03_tidyr.pdf', category: 'Data Wrangling' },
  { id: 'gtsummary', title: 'gtsummary', description: 'Create publication-ready summary tables for clinical and analytical reports.', filename: '04_gtsummary.pdf', category: 'Tables' },
  { id: 'data-visualization', title: 'Data Visualization', description: 'Master ggplot2 for building layered, customizable data visualizations.', filename: '05_data-visualization.pdf', category: 'Visualization' },
  { id: 'data-import', title: 'Data Import', description: 'Read data from CSV, Excel, databases, and other formats into R.', filename: 'data-import.pdf', category: 'Data Wrangling' },
  { id: 'git-github', title: 'Git & GitHub', description: 'Version control workflows for reproducible research and collaboration.', filename: 'git-github.pdf', category: 'Tools' },
  { id: 'gt', title: 'gt Tables', description: 'Build beautiful, highly customizable tables for reports and presentations.', filename: 'gt.pdf', category: 'Tables' },
  { id: 'lubridate', title: 'Lubridate', description: 'Parse, manipulate, and compute with dates and times effortlessly.', filename: 'lubridate.pdf', category: 'Data Wrangling' },
  { id: 'quarto', title: 'Quarto', description: 'Create dynamic documents, presentations, and websites with Quarto.', filename: 'quarto.pdf', category: 'Publishing' },
  { id: 'shiny', title: 'Shiny', description: 'Build interactive web applications directly from R.', filename: 'shiny.pdf', category: 'Apps' },
  { id: 'tidyplots', title: 'Tidyplots', description: 'A streamlined, pipe-friendly approach to building publication-ready plots.', filename: 'tidyplots-cheatsheet-v1.pdf', category: 'Visualization' },
];

export const MODULE_CATEGORIES = [
  'Fundamentals of R',
  'Data Manipulation with R',
  'Publication-ready Tables with R',
  'Visualization',
] as const;

export const COURSE_MODULES: Module[] = [
  // ── Fundamentals of R ──
  {
    id: 'r-basics',
    title: 'R Basics & Data Types',
    description: 'Learn vectors, lists, data frames, and essential base R operations.',
    level: 'Beginner',
    duration: '45 mins',
    icon: '🔤',
    category: 'Fundamentals of R',
    content: 'R is a powerful language for statistical computing. In this module we cover atomic vectors, lists, data frames, indexing, and basic control flow — the building blocks for everything else.',
    codeExample: `# Vectors and data frames\nnums <- c(1, 4, 9, 16, 25)\nsqrt(nums)\n\ndf <- data.frame(\n  name = c("Alice", "Bob", "Carol"),\n  score = c(92, 85, 78)\n)\ndf[df$score > 80, ]`
  },
  {
    id: 'r-functions',
    title: 'Writing Functions',
    description: 'Create reusable functions with arguments, defaults, and tidy evaluation.',
    level: 'Beginner',
    duration: '40 mins',
    icon: '⚙️',
    category: 'Fundamentals of R',
    content: 'Functions are the primary way to organize and reuse code in R. Learn how to define functions, set default arguments, handle variable-length inputs with ..., and follow best practices for readable, testable code.',
    codeExample: `summarize_col <- function(df, col, na.rm = TRUE) {\n  vals <- df[[col]]\n  list(\n    mean = mean(vals, na.rm = na.rm),\n    sd   = sd(vals, na.rm = na.rm),\n    n    = length(vals)\n  )\n}\n\nsummarize_col(iris, "Sepal.Length")`
  },
  {
    id: 'tidyverse-intro',
    title: 'The Tidyverse Ecosystem',
    description: 'Understand the philosophy and core packages that make up the tidyverse.',
    level: 'Beginner',
    duration: '35 mins',
    icon: '📦',
    category: 'Fundamentals of R',
    content: 'The tidyverse is a collection of R packages designed for data science that share a common grammar and data structure philosophy. Learn how tidyverse packages work together through pipes and tidy data principles.',
    codeExample: `library(tidyverse)\n\n# The pipe connects operations\nstarwars %>%\n  filter(!is.na(height)) %>%\n  group_by(species) %>%\n  summarise(avg_height = mean(height)) %>%\n  arrange(desc(avg_height))`
  },

  // ── Data Manipulation with R ──
  {
    id: 'dplyr-verbs',
    title: 'Data Transformation with dplyr',
    description: 'Master filter, select, mutate, summarise, and group_by for data wrangling.',
    level: 'Beginner',
    duration: '60 mins',
    icon: '🔧',
    category: 'Data Manipulation with R',
    content: 'dplyr provides a consistent set of verbs that help you solve the most common data manipulation challenges: filtering rows, selecting columns, creating new variables, and computing summaries.',
    codeExample: `library(dplyr)\n\nmpg %>%\n  filter(year == 2008) %>%\n  mutate(efficiency = hwy / cty) %>%\n  group_by(class) %>%\n  summarise(\n    avg_hwy = mean(hwy),\n    count = n()\n  ) %>%\n  arrange(desc(avg_hwy))`
  },
  {
    id: 'tidyr-reshaping',
    title: 'Tidying Data with tidyr',
    description: 'Reshape data with pivot_longer, pivot_wider, separate, and unite.',
    level: 'Intermediate',
    duration: '50 mins',
    icon: '🔀',
    category: 'Data Manipulation with R',
    content: 'Tidy data has each variable in a column and each observation in a row. tidyr helps you reshape messy real-world data into this tidy format using pivot operations, nesting, and string splitting.',
    codeExample: `library(tidyr)\n\n# Wide to long\nrelig_income %>%\n  pivot_longer(\n    cols = !religion,\n    names_to = "income",\n    values_to = "count"\n  )`
  },
  {
    id: 'stringr-text',
    title: 'String Manipulation with stringr',
    description: 'Clean and transform text data with consistent, pipe-friendly string functions.',
    level: 'Intermediate',
    duration: '35 mins',
    icon: '✂️',
    category: 'Data Manipulation with R',
    content: 'stringr provides a cohesive set of functions for common string operations — detecting patterns, extracting matches, replacing text, and splitting strings — all with consistent naming and regex support.',
    codeExample: `library(stringr)\n\nfruits <- c("Apple Pie", "banana split", "CHERRY tart")\n\nstr_to_lower(fruits)\nstr_detect(fruits, "(?i)pie|tart")\nstr_replace(fruits, "\\\\s+", "_")\nstr_extract(fruits, "[A-Za-z]+")`
  },

  // ── Publication-ready Tables with R ──
  {
    id: 'descriptive-tables',
    title: 'Descriptive Tables',
    description: 'Summarize baseline characteristics and demographics with tbl_summary.',
    level: 'Intermediate',
    duration: '45 mins',
    icon: '📋',
    category: 'Publication-ready Tables with R',
    content: 'Descriptive tables (Table 1) are the cornerstone of any research paper. Learn how to use gtsummary\'s tbl_summary() to create polished summary statistics tables with customizable statistics, labels, and formatting — ready for journals.',
    codeExample: `library(gtsummary)\n\ntrial %>%\n  select(age, grade, stage, trt) %>%\n  tbl_summary(\n    by = trt,\n    statistic = list(\n      all_continuous() ~ "{mean} ({sd})",\n      all_categorical() ~ "{n} ({p}%)"\n    ),\n    label = list(age ~ "Age (years)", grade ~ "Tumor Grade")\n  ) %>%\n  add_overall() %>%\n  bold_labels()`
  },
  {
    id: 'comparative-tables',
    title: 'Comparative Tables',
    description: 'Add statistical tests and p-values to compare groups across variables.',
    level: 'Intermediate',
    duration: '50 mins',
    icon: '⚖️',
    category: 'Publication-ready Tables with R',
    content: 'Go beyond descriptive statistics by adding hypothesis tests to your tables. Learn how to use add_p() with custom test functions, add confidence intervals, and perform stratified comparisons — all formatted for publication.',
    codeExample: `library(gtsummary)\n\ntrial %>%\n  select(age, grade, stage, response, trt) %>%\n  tbl_summary(by = trt) %>%\n  add_p(\n    test = list(\n      all_continuous() ~ "wilcox.test",\n      all_categorical() ~ "chisq.test"\n    )\n  ) %>%\n  add_q(method = "bonferroni") %>%\n  add_stat_label() %>%\n  bold_p(t = 0.05)`
  },
  {
    id: 'regression-tables',
    title: 'Regression Tables',
    description: 'Present logistic, linear, and Cox regression results in publication-ready format.',
    level: 'Advanced',
    duration: '55 mins',
    icon: '📐',
    category: 'Publication-ready Tables with R',
    content: 'Transform model objects into clean, journal-ready tables with tbl_regression() and tbl_uvregression(). Learn how to present odds ratios, confidence intervals, and p-values for logistic, linear, and survival models.',
    codeExample: `library(gtsummary)\n\n# Logistic regression\nglm(response ~ age + grade + stage,\n    data = trial, family = binomial) %>%\n  tbl_regression(\n    exponentiate = TRUE,\n    label = list(\n      age ~ "Age (years)",\n      grade ~ "Tumor Grade",\n      stage ~ "T Stage"\n    )\n  ) %>%\n  add_global_p() %>%\n  bold_p(t = 0.05)`
  },

  // ── Visualization ──
  {
    id: 'intro-ggplot2',
    title: 'The Grammar of Graphics',
    description: 'Learn the foundational concepts of ggplot2 and how data is mapped to aesthetics.',
    level: 'Beginner',
    duration: '45 mins',
    icon: '📊',
    category: 'Visualization',
    content: 'The core of ggplot2 is the "Grammar of Graphics". It breaks down graphs into semantic components such as scales and layers. In this module, we explore how data is mapped to physical properties (aesthetics) like position, color, and size.',
    codeExample: `library(ggplot2)\n\nggplot(data = mpg) + \n  geom_point(mapping = aes(x = displ, y = hwy, color = class))`
  },
  {
    id: 'basic-geoms',
    title: 'Essential Geoms',
    description: 'Master scatter plots, bar charts, line graphs, and boxplots to reveal patterns.',
    level: 'Beginner',
    duration: '60 mins',
    icon: '📈',
    category: 'Visualization',
    content: 'Geoms (geometric objects) are the actual marks on the plot. We will cover geom_point for scatter plots, geom_bar for frequencies, and geom_line for time-series data.',
    codeExample: `ggplot(diamonds, aes(cut, fill = cut)) + \n  geom_bar() + \n  theme_minimal()`
  },
  {
    id: 'ggpubr-magic',
    title: 'ggpubr: Ready for Publication',
    description: 'Use ggpubr to create complex, annotated, and publication-ready visualizations with ease.',
    level: 'Intermediate',
    duration: '50 mins',
    icon: '✨',
    category: 'Visualization',
    content: 'ggpubr provides easy-to-use functions for creating and customizing ggplot2-based publication-ready plots. It simplifies tasks like adding p-values and combining multiple plots.',
    codeExample: `library(ggpubr)\n\nggboxplot(ToothGrowth, x = "dose", y = "len",\n          color = "dose", palette = "jco",\n          add = "jitter") + \n  stat_compare_means()`
  },
  {
    id: 'tidyplots-workflow',
    title: 'Streamlined Tidyplots',
    description: 'Discover tidyplots for a more pipe-friendly and declarative way of building visualizations.',
    level: 'Intermediate',
    duration: '40 mins',
    icon: '🧹',
    category: 'Visualization',
    content: 'Tidyplots offers a streamlined syntax that integrates perfectly with the tidyverse pipe. It focuses on sensible defaults and clear intent.',
    codeExample: `library(tidyplots)\n\niris %>%\n  tidyplot(x = Sepal.Length, y = Sepal.Width, color = Species) %>%\n  add_mean_bar() %>%\n  add_sem_errorbar()`
  },
  {
    id: 'advanced-theming',
    title: 'Theming & Customization',
    description: 'Take full control over fonts, colors, grids, and legends to create stunning visual stories.',
    level: 'Advanced',
    duration: '90 mins',
    icon: '🎨',
    category: 'Visualization',
    content: 'Mastering the theme() function is what separates beginners from pros. Learn how to modify every non-data component of your plot to match brand guidelines or specific aesthetic requirements.',
    codeExample: `my_plot + theme(\n  panel.grid.major = element_line(color = "gray90"),\n  text = element_text(family = "Inter"),\n  legend.position = "bottom"\n)`
  },
  {
    id: 'faceting-scales',
    title: 'Faceting & Scales',
    description: 'Subdivide your data into small multiples and customize axes for clarity.',
    level: 'Advanced',
    duration: '70 mins',
    icon: '🪟',
    category: 'Visualization',
    content: 'Faceting creates small multiples – copies of a plot that each show a different subset of the data. Combined with custom scales, this is a powerful tool for exploratory data analysis.',
    codeExample: `ggplot(mpg, aes(displ, hwy)) + \n  geom_point() + \n  facet_wrap(~class, nrow = 2) + \n  scale_y_continuous(labels = scales::comma)`
  }
];
