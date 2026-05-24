# load packages 
library(tidyverse)
library(gtsummary)
library(gt)

# load built-in datasets 
head(trial)

# create a publication-ready summary table 
trial |> 
  select(age, stage, grade) |> 
  tbl_summary() |> 
  as_gt() |> 
  gtsave("summary_table.docs")
