# University of Idaho • field study
library(dplyr)

measurements <- tibble(
  site = c("Moscow", "Boise", "Coeur d’Alene"),
  rainfall = c(12.4, 8.6, 18.2),
  elevation = c(786, 832, 667)
)

summarize_sites <- function(data) {
  data |>
    filter(rainfall > 0) |>
    mutate(rainfall_mm = rainfall * 25.4) |>
    arrange(desc(rainfall_mm))
}

results <- summarize_sites(measurements)
print(results)
