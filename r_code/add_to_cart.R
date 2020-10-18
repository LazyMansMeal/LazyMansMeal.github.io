
# Read Me -----------------------------------------------------------------
# This script is not functional. The purpose of this script is to take a grocery list and add it to my grocery cart in walmart.

# Library:
library(tidyverse)
library(googledrive)
library(RSelenium)

# FUNCTIONS ---------------------------------------------------------------

# polite_robot() ----------------------------------------------------------
# Make the system sleep between 3 and 7 seconds, so the website thinks this is a real person, not a robot
# Takes a screenshot to keep you updated
polite_robot <- function() {
  Sys.sleep(runif(n=1, min = 0.5, max = 1.5))
  remDr$maxWindowSize()
  remDr$screenshot(display = TRUE)}


# Add Cart ----------------------------------------------------------------


# Credentials:
username <- "dallin.cardon@yahoo.com"
password <- "napbyt-7hinxu-naBpok"

grocery_list <- tibble(quantity = 2,
                       item     = "apples"
                       )

# Set up Selenium Driver
remDr <- remoteDriver(
  remoteServerAddr = "localhost",
  port = 4445L,
  browserName = "firefox"
)

# Troubleshooting Docker
# If you have problems, run the following code in the terminal:
# docker run -d -p 4445:4444 selenium/standalone-firefox:2.53.1
# You can also run:
# docker ps
# After, you should see a status report on docker

remDr$open()

remDr$getStatus()

remDr$navigate("https://www.walmart.com/account/login")
polite_robot()

# Enter email
webElem <- remDr$findElement(using = "css", value = "#email")
webElem$sendKeysToElement(list(username))
polite_robot()


# Enter password
webElem <- remDr$findElement(using = "css", value = "#password")
webElem$sendKeysToElement(list(password))
polite_robot()

# Don't Remember Me
webElem <- remDr$findElement(using = "css", value = ".m-margin-top-s label")
webElem$clickElement()
polite_robot()


# Sign in
webElem <- remDr$findElement(using = "css", value = ".m-margin-top")
webElem$clickElement()
polite_robot()

remDr$getCurrentUrl()

remDr$close()

