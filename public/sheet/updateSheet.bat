@echo off
setlocal enabledelayedexpansion

set /p sheetId=<sheetConfig.txt
set "url=https://script.google.com/macros/s/AKfycbzWByF-p0lA8U2SWwhFhQiubY_BfkTEJWzBS_JmOmBy2-PEfv0AOtk7vYHHoiwdc9sg/exec?sheetId=!sheetId!"
curl -L -o website_data.json "!url!"
ren website_data.json website_data.json

echo meow!

endlocal
