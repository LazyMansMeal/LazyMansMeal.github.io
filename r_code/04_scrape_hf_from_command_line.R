
# Read Me ------------------------------------------------------------
# The purpose of this file is to take the functions built in my 01 file and use them at the command line so that someone who doesn't code with R can 
# run this file with a hello fresh url and get a .json data output.

# Example:
# Run the following code in the command line:
# Rscript 04_scrape_hf_from_command_line.R https://www.hellofresh.com/recipes/steelhead-trout-in-cranberry-dijon-sauce-5f28590175d00c594f0ec577

# Note: I believe you will need to have the same file structure as I do (with the json_files folder), and you will need to execute this code
# After you have navigated to the /r_code directory.



# Grab the scraping functions
source(file = "r_code/01_hello_fresh_scraping_function.R", local = TRUE)


# Example URL (MAKE SURE TO COMMENT OUT)
# args <- "https://www.hellofresh.com/recipes/steelhead-trout-in-cranberry-dijon-sauce-5f28590175d00c594f0ec577"

# Setup Command Line Functions --------------------------------------------

args <-  commandArgs(trailingOnly = TRUE) %>% 
  as.character()

# test if there is at least one argument: if not, return an error
if (length(args)==0) {
  stop("You need to provide a URL!", call.=FALSE)
} else if (length(args) == 1) {
  result <- scrape_hello_fresh(url = args)
  print(result)
} else {
  stop("You have supplied too many arguments. You only need one URL")
}


# paste("Scraping the Hello Fresh recipe found at", as.character(args))