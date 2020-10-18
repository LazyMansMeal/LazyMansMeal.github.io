
# Read Me -----------------------------------------------------------------
# This file is functional, and it is meant to test the functions built in my 01 file.


# Grab scraping functions
source(file = "r_code/01_hello_fresh_scraping_function.R", local = TRUE)

# Example Use of Scraper ---------------------------------------------------------

# Steelhead Trout in Cranberry Dijon
url <- "https://www.hellofresh.com/recipes/steelhead-trout-in-cranberry-dijon-sauce-5f28590175d00c594f0ec577"

test <- scrape_hello_fresh(url = url)



# # Other Example Recipes ---------------------------------------------------
# 
# url <- "https://www.hellofresh.com/recipes/turkish-spiced-chicken-in-apricot-sauce-5f15db94d3ae805e235ef459?q=carrots"
# 
# # Sunny Side Up Burgers BROKEN
# url <- "https://www.hellofresh.com/recipes/sunny-side-up-burgers-5f1f139ef01dde7db37d29b0"
# 
# # Honey Brussels Ricotta Flatbreads BROKEN
# url <- "https://www.hellofresh.com/recipes/hot-honey-brussels-ricotta-flatbreads-5f2870834bdb2f694a7ecd64"
# 
# # Steelhead Trout in Cranberry Dijon BROKEN
# url <- "https://www.hellofresh.com/recipes/steelhead-trout-in-cranberry-dijon-sauce-5f28590175d00c594f0ec577"
# 
# # Chicken bacon Mozzarella Ravioli BROKEN
# url <- "https://www.hellofresh.com/recipes/chicken-bacon-mozzarella-ravioli-5f2864dfffb7a902c466665e"
# 
# # Pork Chops with Zesty green onion salsa BROKEN
# url <- "https://www.hellofresh.com/recipes/pork-chops-with-zesty-green-onion-salsa-5f285108ae5bb563d564ab3c"
# 
# # Speedy-Start Chicken Tacos BROKEN
# url <- "https://www.hellofresh.com/recipes/speedy-start-chicken-tacos-5f286fbe577a571f1d547ed9?q=2%2F3"
# 
# # Black Bean Poblano Burritos BROKEN
# url <- "https://www.hellofresh.com/recipes/black-bean-poblano-burritos-5f1f162b5937d41ecf1e06c7?q=2%2F3"
# 
# # Ginger Soy Noodle Stir Fry BROKEN
# url <- "https://www.hellofresh.com/recipes/ginger-soy-noodle-stir-fry-5f15e99167aacd26fe692028?q=ginger+noodle"
# 
# # Fully Loaded Pork Taquitos BROKEN
# url <- "https://www.hellofresh.com/recipes/fully-loaded-pork-taquitos-5f286e4e577a571f1d547ed4"
# 
# # Salsa Verde Enchiladas
# url <- "https://www.hellofresh.com/recipes/salsa-verde-enchiladas-5f08bda9ec87b8027a6bd112"


# # Panko Pork cutlets with apple slaw
# url <- "https://www.hellofresh.com/recipes/panko-pork-cutlets-with-apple-slaw-5f318e028113a035211f6286"



# NOTE:
# All of the above urls scraped cleanly on Oct 18, 2020










