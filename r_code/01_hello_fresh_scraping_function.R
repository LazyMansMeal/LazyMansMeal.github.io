
# Read Me -------------------------------------------------------------------
# This code is functional, and it is designed to create a few functions that can scrape recipe data. Namely, the scrape_hello_fresh(url) function
# will, when given a url, save a .json file with recipe data.


# Packages
library(tidyverse)
library(rvest)
library(jsonlite)
library(stringr)



# collect_hello_recipe_data() -----------------------------------------------
# This function takes a hello fresh url and returns a data frame with the recipe's data in it.

collect_hello_recipe_data <- function(url){
  
  ######################
  # Grab the Web Page #
  #####################
  
  recipe <- read_html(as.character(url))
  
  #######################
  # Capture Recipe Data #
  #######################
  
  title <- recipe %>% 
    html_nodes(".dsbs") %>%  # Some pages use .dsbe
    html_text()
  
  # title <- title[[1]]
  
  subtitle <- recipe %>% 
    html_nodes(".dsbu") %>%  # Some pages use dsbg
    html_text()
  
  # subtitle <- subtitle[[2]] %>% 
  #   str_remove("Read more")
  
  ingredients <- recipe %>% 
    html_nodes(".fela-_g6xips") %>%  # Also .dsdg (sep 27, 2020, Steelhead Trout) 
    html_text()
  
  # serving_size <- recipe %>%
  #   html_nodes(".dsev") %>%
  #   html_text()
  
  # Giving me trouble
  tags <- recipe %>%
    html_nodes(".dsd .fela-_36rlri") %>% # sometimes this is .dscp:nth-child(4) .fela-_36rlri
    html_text()
  
  cook_time <- recipe %>% 
    html_nodes(".fela-_19qpnoj:nth-child(1) .dscz") %>% 
    html_text()
  
  description <- recipe %>% 
    html_nodes(".dse p") %>% 
    html_text()
  
  instructions <- recipe %>% 
    html_nodes(".fela-_1qzip4i p") %>% 
    html_text()
  
  picture_link <-  recipe %>% html_node(".dsac") %>%  #I've noticed some pages use .dsfs and .dsac .dsfp
    html_attr("src")
  
  recipe_data <- tibble(
    name         = title,
    subtitle     = subtitle,
    # serving_size = serving_size,
    cook_time    = cook_time,
    tags         = list(tags),
    description  = list(description),
    instructions = list(instructions),
    picture_link = picture_link,
    link         = url
  )
  
  
  
  #####################################
  # Create Useful Regular Expressions #
  #####################################
  
  # Reg expression to extract the quantity, measurement, and item from the scraped string.
  qmi_regex <- regex(pattern = "
                     ([:digit:]|\U00BD|\U00BC|\U00BE|\U2153|\U2154|\U215C|\U215B)      #Item must start with a digit, or a fraction symbol (1/2, 1/4, or 3/4)
                     [:digit:]?    # Optional digit
                     [.]?          # Optional point
                     [:digit:]?    # Optional digit
                     [:digit:]?    # Optional digit
                     [:space:]     # Space
                     [a-z]+        # 1 or more characters
                     ['s]?         # Optional 's
                     [-]?          # Optional dash (e.g. for tex-mex)
                     [:space:]?    # Optional Space
                     [a-z]*        # 0 or more characters
                     [™]?          # Optional TM (e.g. Standard Meat™ Cast-Iron Seared Chicken Breasts)
                     [\U00AE]?     # Optional registered trademark symbol
                     [:space:]?    # Optional Space
                     [a-z]*        # 0 or more characters
                     [\U00AE]?     # Optional registered trademark symbol
                     [-]?          # Optional dash
                     [:space:]?    # Optional Space
                     [a-z]*        # 0 or more characters
                     [:space:]?    # Optional Space
                     [\U00AE]?     # Optional registered trademark symbol
                     [a-z]*        # 0 or more characters
                     [:space:]?    # Optional Space
                     [a-z]*        # 0 or more characters
                     [:space:]?    # Optional Space
                     [a-z]*        # 0 or more characters
                     ", comments = TRUE,
                     ignore_case = TRUE)
  
  # Quantity measurements: Single numbers and 0.00 numbers
  quantity_regex <- regex(pattern = "
                   \U00BD|          # 1/2 or
                   \U00BC|          # 1/4 or
                   \U00BE|          # 3/4 or
                   \U2153|          # 1/3 or
                   \U2154|          # 2/3 or
                   \U215C|          # 3/8 or
                   \U215B|          # 1/8 or
                   [:digit:]   # Digits
                   [:digit:]?   # Optional digit
                   [.]?        # Optional point
                   [:digit:]?  # Optional digit
                   [:digit:]?  # Optional digit
                  ", comments = TRUE
  )
  
  # Measurements: ounces, tablespoons, etc.
  measurement_regex <- "unit|ounce|thumb|tablespoon|clove|teaspoon|cup|slice|bunch| head|pinch|dash|drizzle|sprinkle|whiff|tsp|tbsp|mL| g|punnet\\(s\\)"
  
  # Pulls out the item, excluding the quantity and measurement, once the qmi have been split up.
  item_regex <- regex(pattern = "
  [:upper:]  # Find First Upper Case Letter
  .+         # Everything after first upper
  ", comments = TRUE)
  
  #################################
  # Extract and Split Ingredients #
  #################################  
  
  # Find each item with quantity, measurement, and ingredient
  quan_meas_item <- ingredients %>% 
    str_extract_all(qmi_regex)
  
  # Find just the quantity
  my_quantities   <- str_extract_all(ingredients, quantity_regex)
  
  # Find just the measurement
  my_measurements <- str_extract_all(ingredients, measurement_regex)
  
  # Build database
  ingredient_data <- tibble(qmi            = quan_meas_item[[1]],
                            quantity       = my_quantities[[1]],
                            measurement    = my_measurements[[1]]
                            ) %>% 
    mutate(recipe_name = title,
           item = str_extract(qmi, item_regex))
  
  
  data <- recipe_data %>% 
    mutate(ingredient_data = list(ingredient_data))
}


# convert_hello_recipe_to_json --------------------------------------------
# This function takes a data frame built by collect_hello_recipe_data() and converts it to a .json file.

convert_hello_recipe_to_json <- function(data){
  
  file_name <- data$name[[1]] %>% 
    str_to_lower() %>% 
    str_replace_all("( |-)", replacement = "_") %>% 
    paste0("r_code/json_files/", .,".json")
  data_json <- toJSON(data, pretty = TRUE)
  write(data_json, file = file_name)
  
}




# scrape_hello_fresh ------------------------------------------------------
# This function combines two functions above to create one function which collects hf recipes and outputs a .json file when given a url.

scrape_hello_fresh <- function(url){
data <- collect_hello_recipe_data(url = url)
convert_hello_recipe_to_json(data = data)
print(data)
}



# collect_all_recipes_on_page() -------------------------------------------
# This code is not yet functional. It is intended to scrape all recipe data on a page.

# collect_all_recipes_on_page <- function(css_selector = ".dscc") {
#   webElems <- remDr$findElements(using = "css selector", css_selector)
#   recipe_names <- unlist(lapply(webElems, function(x) {x$getElementText()}))
#   
#   webElems <- remDr$findElements(using = "css selector", css_selector)
#   recipe_url <- unlist(lapply(webElems, function(x) {x$getElementAttribute("href")}))
#   
#   data <- tibble(name = recipe_names,
#                  url  = recipe_url)
#   data
# }




