# load packages 
library(tidyverse)
library(tidyplots)
library(ggsci)
library(gridExtra)

df <- 
  read_csv("https://tidyplots.org/data/differential-expression-analysis.csv") |> 
  mutate(
    neg_log10_padj = -log10(padj),
    direction = if_else(log2FoldChange > 0, "up", "down", NA),
    candidate = abs(log2FoldChange) >= 1 & padj < 0.05
  )

df |> 
  tidyplot(x = log2FoldChange, y = neg_log10_padj) |> 
  add_data_points(data = filter_rows(!candidate),
                  color = "lightgrey", rasterize = TRUE) |> 
  add_data_points(data = filter_rows(candidate, direction == "up"),
                  color = "#FF7777", alpha = 0.5) |> 
  add_data_points(data = filter_rows(candidate, direction == "down"),
                  color = "#7DA8E6", alpha = 0.5) |> 
  add_reference_lines(x = c(-1, 1), y = -log10(0.05)) |> 
  add_data_labels_repel(data = min_rows(padj, 6, by = direction), label = external_gene_name,
                        color = "#000000", min.segment.length = 0, background = TRUE) |> 
  adjust_x_axis_title("$Log[2]~fold~change$") |> 
  adjust_y_axis_title("$-Log[10]~italic(P)~adjusted$")
save_plot("plots/volcano.png")

