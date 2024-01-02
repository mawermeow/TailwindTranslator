@echo off
setlocal

:: Check if build/static/ exists
if not exist "build\static\" (
    echo Directory build\static\ does not exist.
    goto end
)

:: Process build/static/js/
if exist "build\static\js\" (
    for %%F in ("build\static\js\main*.js") do (
        ren "%%F" "main.js"
        goto continue_js
    )

    :continue_js
    for %%F in ("build\static\js\*") do (
        if not "%%F"=="build\static\js\main.js" (
            del "%%F"
        )
    )
)

:: Process build/static/css/
if exist "build\static\css\" (
    for %%F in ("build\static\css\main*.css") do (
        ren "%%F" "main.css"
        goto continue_css
    )

    :continue_css
    for %%F in ("build\static\css\*") do (
        if not "%%F"=="build\static\css\main.css" (
            del "%%F"
        )
    )
)

:end
endlocal
echo replace complete
