#!/bin/bash

# Check if build/static/ exists
if [ ! -d "./build/static" ]; then
  echo "Directory ./build/static does not exist."
  exit 1
fi

# Process build/static/js/
if [ -d "./build/static/js" ]; then
  # Rename main*.js to main.js
  for file in ./build/static/js/main*.js; do
    [ -e "$file" ] || continue
    mv "$file" "./build/static/js/main.js"
    break
  done

  # Delete all files except main.js
  find ./build/static/js -type f ! -name 'main.js' -delete
fi

# Process build/static/css/
if [ -d "./build/static/css" ]; then
  # Rename main*.css to main.css
  for file in ./build/static/css/main*.css; do
    [ -e "$file" ] || continue
    mv "$file" "./build/static/css/main.css"
    break
  done

  # Delete all files except main.css
  find ./build/static/css -type f ! -name 'main.css' -delete
fi

echo "replace complete"

exit 0
