
# Read Me -------------------------------------------------------------------
# This code is not yet functional, but the goal is to scrape many recipes at a time to build a database using Selenium.




library(RSelenium)

source("01_hello_fresh_scraping_function.R")

# Get Selenium Booted Up --------------------------------------------------

# Helpful Website to help with R selenium
# https://docs.ropensci.org/RSelenium/articles/basics.html

rD <- rsDriver(port = 4567L, browser = "firefox", version = "latest", chromever = "latest",
         geckover = "latest", iedrver = NULL, phantomver = "2.1.1",
         verbose = TRUE, check = TRUE)

rD

remDr <- remoteDriver(
  remoteServerAddr = "localhost",
  port = 4567L,
  browserName = "firefox"
)

remDr$open()

remDr$getStatus()


# Navigate and Scrape Hello Fresh -----------------------------------------

remDr$navigate("https://www.hellofresh.com/recipes/most-recent-recipes")

collect_all_recipes_on_page(css_selector = ".dshr")

webElems <- remDr$findElements(using = "css selector", ".dshr")
recipe_names <- unlist(lapply(webElems, function(x) {x$getElementText()}))

webElems <- remDr$findElements(using = "css selector", ".dshr")
recipe_url <- unlist(lapply(webElems, function(x) {x$getElementAttribute("href")}))

data <- tibble(name = recipe_names,
               url  = recipe_url)
data

for (i in seq_along(data$url)){
  scrape_hello_fresh(data$url[[i]])
}

url <- "https://www.hellofresh.com/recipes/roasted-veggie-farro-bowls-5f3aef3c29fe3337d33ea1c0"
scrape_hello_fresh(url = url)

# NOTE:
# Had a problem with one of these two: 	
# Mushroom & Zucchini Tempura Bowls	
# Cheesy Chicken & Poblano Tostadas
# Measurement not included right
  
remDr$close()
rD$server$stop()
rD$server$process

