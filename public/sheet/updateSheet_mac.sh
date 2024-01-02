#!/bin/bash

# Get the directory of the current script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Read the sheetId from sheetConfig.txt in the same directory as the script
read -r sheetId < "$DIR/sheetConfig.txt"

# Set the URL
url="https://script.google.com/macros/s/AKfycbzWByF-p0lA8U2SWwhFhQiubY_BfkTEJWzBS_JmOmBy2-PEfv0AOtk7vYHHoiwdc9sg/exec?sheetId=$sheetId"

# Fetch the data using curl and save it to the same directory as the script
curl -L -o "$DIR/website_data.json" "$url"

# Echo meow!
echo "meow!"
