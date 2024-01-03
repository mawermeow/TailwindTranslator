const tailwindObj = {
    "Layout": [
        {
            "title": "Container",
            "classList": [
                {
                    "class": ".container",
                    "properties": "none"
                }
            ]
        },
        {
            "title": "Box Decoration Break",
            "classList": [
                {
                    "class": ".decoration-slice",
                    "properties": "box-decoration-break: slice;"
                },
                {
                    "class": ".decoration-clone",
                    "properties": "box-decoration-break: clone;"
                }
            ]
        },
        {
            "title": "Box Sizing",
            "classList": [
                {
                    "class": ".box-border",
                    "properties": "box-sizing: border-box;"
                },
                {
                    "class": ".box-content",
                    "properties": "box-sizing: content-box;"
                }
            ]
        },
        {
            "title": "Breakpoints",
            "classList": [
                {
                    "class": "sm:",
                    "properties": "@media (min-width: 640px) { ... }"
                },
                {
                    "class": "md:",
                    "properties": "@media (min-width: 768px) { ... }"
                },
                {
                    "class": "lg:",
                    "properties": "@media (min-width: 1024px) { ... }"
                },
                {
                    "class": "xl:",
                    "properties": "@media (min-width: 1280px) { ... }"
                },
                {
                    "class": "2xl:",
                    "properties": "@media (min-width: 1536px) { ... }"
                }
            ]
        },
        {
            "title": "Display",
            "classList": [
                {
                    "class": ".hidden",
                    "properties": "display: none;"
                },
                {
                    "class": ".contents",
                    "properties": "display: contents;"
                },
                {
                    "class": ".list-item",
                    "properties": "display: list-item;"
                },
                {
                    "class": ".block",
                    "properties": "display: block;"
                },
                {
                    "class": ".inline-block",
                    "properties": "display: inline-block;"
                },
                {
                    "class": ".flex",
                    "properties": "display: flex;"
                },
                {
                    "class": ".inline-flex",
                    "properties": "display: inline-flex;"
                },
                {
                    "class": ".inline",
                    "properties": "display: inline;"
                },
                {
                    "class": ".table",
                    "properties": "display: table;"
                },
                {
                    "class": ".inline-table",
                    "properties": "display: inline-table;"
                },
                {
                    "class": ".table-cell",
                    "properties": "display: table-cell;"
                },
                {
                    "class": ".table-caption",
                    "properties": "display: table-caption;"
                },
                {
                    "class": ".table-column",
                    "properties": "display: table-column;"
                },
                {
                    "class": ".table-column-group",
                    "properties": "display: table-column-group;"
                },
                {
                    "class": ".table-footer-group",
                    "properties": "display: table-footer-group;"
                },
                {
                    "class": ".table-header-group",
                    "properties": "display: table-header-group;"
                },
                {
                    "class": ".table-row-group",
                    "properties": "display: table-row-group;"
                },
                {
                    "class": ".table-row",
                    "properties": "display: table-row;"
                },
                {
                    "class": ".flow-root",
                    "properties": "display: flow-root"
                },
                {
                    "class": ".grid",
                    "properties": "display: grid"
                },
                {
                    "class": ".inline-grid",
                    "properties": "display: inline-grid"
                }
            ]
        },
        {
            "title": "Float",
            "classList": [
                {
                    "class": ".float-right",
                    "properties": "float: right;"
                },
                {
                    "class": ".float-left",
                    "properties": "float: left;"
                },
                {
                    "class": ".float-none",
                    "properties": "float: none;"
                }
            ]
        },
        {
            "title": "Clear",
            "classList": [
                {
                    "class": ".clear-left",
                    "properties": "clear: left;"
                },
                {
                    "class": ".clear-right",
                    "properties": "clear: right;"
                },
                {
                    "class": ".clear-both",
                    "properties": "clear: both;"
                },
                {
                    "class": ".clear-none",
                    "properties": "clear: none;"
                }
            ]
        },
        {
            "title": "Isolation",
            "classList": [
                {
                    "class": ".isolate",
                    "properties": "isolation: isolate;"
                },
                {
                    "class": ".isolate-auto",
                    "properties": "isolation: auto;"
                }
            ]
        },
        {
            "title": "Object Fit",
            "classList": [
                {
                    "class": ".object-contain",
                    "properties": "object-fit: contain;"
                },
                {
                    "class": ".object-cover",
                    "properties": "object-fit: cover;"
                },
                {
                    "class": ".object-fill",
                    "properties": "object-fit: fill;"
                },
                {
                    "class": ".object-none",
                    "properties": "object-fit: none;"
                },
                {
                    "class": ".object-scale-down",
                    "properties": "object-fit: scale-down;"
                }
            ]
        },
        {
            "title": "Object Position",
            "classList": [
                {
                    "class": ".object-bottom",
                    "properties": "object-position: bottom;"
                },
                {
                    "class": ".object-center",
                    "properties": "object-position: center;"
                },
                {
                    "class": ".object-left",
                    "properties": "object-position: left;"
                },
                {
                    "class": ".object-left-bottom",
                    "properties": "object-position: left bottom;"
                },
                {
                    "class": ".object-left-top",
                    "properties": "object-position: left top;"
                },
                {
                    "class": ".object-right",
                    "properties": "object-position: right;"
                },
                {
                    "class": ".object-right-bottom",
                    "properties": "object-position: right bottom;"
                },
                {
                    "class": ".object-right-top",
                    "properties": "object-position: right top;"
                },
                {
                    "class": ".object-top",
                    "properties": "object-position: top;"
                }
            ]
        },
        {
            "title": "Overflow",
            "classList": [
                {
                    "class": ".overflow-auto",
                    "properties": "overflow: auto;"
                },
                {
                    "class": ".overflow-x-auto",
                    "properties": "overflow-x: auto;"
                },
                {
                    "class": ".overflow-y-auto",
                    "properties": "overflow-y: auto;"
                },
                {
                    "class": ".overflow-hidden",
                    "properties": "overflow: hidden;"
                },
                {
                    "class": ".overflow-x-hidden",
                    "properties": "overflow-x: hidden;"
                },
                {
                    "class": ".overflow-y-hidden",
                    "properties": "overflow-y: hidden;"
                },
                {
                    "class": ".overflow-visible",
                    "properties": "overflow: visible;"
                },
                {
                    "class": ".overflow-x-visible",
                    "properties": "overflow-x: visible;"
                },
                {
                    "class": ".overflow-y-visible",
                    "properties": "overflow-y: visible;"
                },
                {
                    "class": ".overflow-scroll",
                    "properties": "overflow: scroll;"
                },
                {
                    "class": ".overflow-x-scroll",
                    "properties": "overflow-x: scroll;"
                },
                {
                    "class": ".overflow-y-scroll",
                    "properties": "overflow-y: scroll;"
                },
                {
                    "class": ".scrolling-touch",
                    "properties": "-webkit-overflow-scrolling: touch;"
                },
                {
                    "class": ".scrolling-auto",
                    "properties": "-webkit-overflow-scrolling: auto;"
                }
            ]
        },
        {
            "title": "Overscroll Behavior",
            "classList": [
                {
                    "class": ".overscroll-auto",
                    "properties": "overscroll-behavior: auto;"
                },
                {
                    "class": ".overscroll-y-auto",
                    "properties": "overscroll-behavior-y: auto;"
                },
                {
                    "class": ".overscroll-x-auto",
                    "properties": "overscroll-behavior-x: auto;"
                },
                {
                    "class": ".overscroll-contain",
                    "properties": "overscroll-behavior: contain;"
                },
                {
                    "class": ".overscroll-y-contain",
                    "properties": "overscroll-behavior-y: contain;"
                },
                {
                    "class": ".overscroll-x-contain",
                    "properties": "overscroll-behavior-x: contain;"
                },
                {
                    "class": ".overscroll-none",
                    "properties": "overscroll-behavior: none;"
                },
                {
                    "class": ".overscroll-y-none",
                    "properties": "overscroll-behavior-y: none;"
                },
                {
                    "class": ".overscroll-x-none",
                    "properties": "overscroll-behavior-x: none;"
                }
            ]
        },
        {
            "title": "Position",
            "classList": [
                {
                    "class": ".static",
                    "properties": "position: static;"
                },
                {
                    "class": ".fixed",
                    "properties": "position: fixed;"
                },
                {
                    "class": ".absolute",
                    "properties": "position: absolute;"
                },
                {
                    "class": ".relative",
                    "properties": "position: relative;"
                },
                {
                    "class": ".sticky",
                    "properties": "position: sticky;"
                }
            ]
        },
        {
            "title": "Top / Right / Bottom / Left",
            "classList": [
                {
                    "class": ".inset-0",
                    "properties": "top: 0; right: 0; bottom: 0; left: 0;"
                },
                {
                    "class": ".-inset-0",
                    "properties": "top: 0; right: 0; bottom: 0; left: 0;"
                },
                {
                    "class": ".inset-y-0",
                    "properties": "top: 0; bottom: 0;"
                },
                {
                    "class": ".-inset-y-0",
                    "properties": "top: 0; bottom: 0;"
                },
                {
                    "class": ".inset-x-0",
                    "properties": "right: 0; left: 0;"
                },
                {
                    "class": ".-inset-x-0",
                    "properties": "right: 0; left: 0;"
                },
                {
                    "class": ".top-0",
                    "properties": "top: 0;"
                },
                {
                    "class": ".right-0",
                    "properties": "right: 0;"
                },
                {
                    "class": ".bottom-0",
                    "properties": "bottom: 0;"
                },
                {
                    "class": ".left-0",
                    "properties": "left: 0;"
                },
                {
                    "class": ".-top-0",
                    "properties": "top: 0;"
                },
                {
                    "class": ".-right-0",
                    "properties": "right: 0;"
                },
                {
                    "class": ".-bottom-0",
                    "properties": "bottom: 0;"
                },
                {
                    "class": ".-left-0",
                    "properties": "left: 0;"
                },
                {
                    "class": ".inset-0.5",
                    "properties": "top: 0.125rem; right: 0.125rem; bottom: 0.125rem; left: 0.125rem;"
                },
                {
                    "class": ".-inset-0.5",
                    "properties": "top: -0.125rem; right: -0.125rem; bottom: -0.125rem; left: -0.125rem;"
                },
                {
                    "class": ".inset-y-0.5",
                    "properties": "top: 0.125rem; bottom: 0.125rem;"
                },
                {
                    "class": ".-inset-y-0.5",
                    "properties": "top: -0.125rem; bottom: -0.125rem;"
                },
                {
                    "class": ".inset-x-0.5",
                    "properties": "right: 0.125rem; left: 0.125rem;"
                },
                {
                    "class": ".-inset-x-0.5",
                    "properties": "right: -0.125rem; left: -0.125rem;"
                },
                {
                    "class": ".top-0.5",
                    "properties": "top: 0.125rem;"
                },
                {
                    "class": ".right-0.5",
                    "properties": "right: 0.125rem;"
                },
                {
                    "class": ".bottom-0.5",
                    "properties": "bottom: 0.125rem;"
                },
                {
                    "class": ".left-0.5",
                    "properties": "left: 0.125rem;"
                },
                {
                    "class": ".-top-0.5",
                    "properties": "top: -0.125rem;"
                },
                {
                    "class": ".-right-0.5",
                    "properties": "right: -0.125rem;"
                },
                {
                    "class": ".-bottom-0.5",
                    "properties": "bottom: -0.125rem;"
                },
                {
                    "class": ".-left-0.5",
                    "properties": "left: -0.125rem;"
                },
                {
                    "class": ".inset-1",
                    "properties": "top: 0.25rem; right: 0.25rem; bottom: 0.25rem; left: 0.25rem;"
                },
                {
                    "class": ".-inset-1",
                    "properties": "top: -0.25rem; right: -0.25rem; bottom: -0.25rem; left: -0.25rem;"
                },
                {
                    "class": ".inset-y-1",
                    "properties": "top: 0.25rem; bottom: 0.25rem;"
                },
                {
                    "class": ".-inset-y-1",
                    "properties": "top: -0.25rem; bottom: -0.25rem;"
                },
                {
                    "class": ".inset-x-1",
                    "properties": "right: 0.25rem; left: 0.25rem;"
                },
                {
                    "class": ".-inset-x-1",
                    "properties": "right: -0.25rem; left: -0.25rem;"
                },
                {
                    "class": ".top-1",
                    "properties": "top: 0.25rem;"
                },
                {
                    "class": ".right-1",
                    "properties": "right: 0.25rem;"
                },
                {
                    "class": ".bottom-1",
                    "properties": "bottom: 0.25rem;"
                },
                {
                    "class": ".left-1",
                    "properties": "left: 0.25rem;"
                },
                {
                    "class": ".-top-1",
                    "properties": "top: -0.25rem;"
                },
                {
                    "class": ".-right-1",
                    "properties": "right: -0.25rem;"
                },
                {
                    "class": ".-bottom-1",
                    "properties": "bottom: -0.25rem;"
                },
                {
                    "class": ".-left-1",
                    "properties": "left: -0.25rem;"
                },
                {
                    "class": ".inset-1.5",
                    "properties": "top: 0.375rem; right: 0.375rem; bottom: 0.375rem; left: 0.375rem;"
                },
                {
                    "class": ".-inset-1.5",
                    "properties": "top: -0.375rem; right: -0.375rem; bottom: -0.375rem; left: -0.375rem;"
                },
                {
                    "class": ".inset-y-1.5",
                    "properties": "top: 0.375rem; bottom: 0.375rem;"
                },
                {
                    "class": ".-inset-y-1.5",
                    "properties": "top: -0.375rem; bottom: -0.375rem;"
                },
                {
                    "class": ".inset-x-1.5",
                    "properties": "right: 0.375rem; left: 0.375rem;"
                },
                {
                    "class": ".-inset-x-1.5",
                    "properties": "right: -0.375rem; left: -0.375rem;"
                },
                {
                    "class": ".top-1.5",
                    "properties": "top: 0.375rem;"
                },
                {
                    "class": ".right-1.5",
                    "properties": "right: 0.375rem;"
                },
                {
                    "class": ".bottom-1.5",
                    "properties": "bottom: 0.375rem;"
                },
                {
                    "class": ".left-1.5",
                    "properties": "left: 0.375rem;"
                },
                {
                    "class": ".-top-1.5",
                    "properties": "top: -0.375rem;"
                },
                {
                    "class": ".-right-1.5",
                    "properties": "right: -0.375rem;"
                },
                {
                    "class": ".-bottom-1.5",
                    "properties": "bottom: -0.375rem;"
                },
                {
                    "class": ".-left-1.5",
                    "properties": "left: -0.375rem;"
                },
                {
                    "class": ".inset-2",
                    "properties": "top: 0.5rem; right: 0.5rem; bottom: 0.5rem; left: 0.5rem;"
                },
                {
                    "class": ".-inset-2",
                    "properties": "top: -0.5rem; right: -0.5rem; bottom: -0.5rem; left: -0.5rem;"
                },
                {
                    "class": ".inset-y-2",
                    "properties": "top: 0.5rem; bottom: 0.5rem;"
                },
                {
                    "class": ".-inset-y-2",
                    "properties": "top: -0.5rem; bottom: -0.5rem;"
                },
                {
                    "class": ".inset-x-2",
                    "properties": "right: 0.5rem; left: 0.5rem;"
                },
                {
                    "class": ".-inset-x-2",
                    "properties": "right: -0.5rem; left: -0.5rem;"
                },
                {
                    "class": ".top-2",
                    "properties": "top: 0.5rem;"
                },
                {
                    "class": ".right-2",
                    "properties": "right: 0.5rem;"
                },
                {
                    "class": ".bottom-2",
                    "properties": "bottom: 0.5rem;"
                },
                {
                    "class": ".left-2",
                    "properties": "left: 0.5rem;"
                },
                {
                    "class": ".-top-2",
                    "properties": "top: -0.5rem;"
                },
                {
                    "class": ".-right-2",
                    "properties": "right: -0.5rem;"
                },
                {
                    "class": ".-bottom-2",
                    "properties": "bottom: -0.5rem;"
                },
                {
                    "class": ".-left-2",
                    "properties": "left: -0.5rem;"
                },
                {
                    "class": ".inset-2.5",
                    "properties": "top: 0.625rem; right: 0.625rem; bottom: 0.625rem; left: 0.625rem;"
                },
                {
                    "class": ".-inset-2.5",
                    "properties": "top: -0.625rem; right: -0.625rem; bottom: -0.625rem; left: -0.625rem;"
                },
                {
                    "class": ".inset-y-2.5",
                    "properties": "top: 0.625rem; bottom: 0.625rem;"
                },
                {
                    "class": ".-inset-y-2.5",
                    "properties": "top: -0.625rem; bottom: -0.625rem;"
                },
                {
                    "class": ".inset-x-2.5",
                    "properties": "right: 0.625rem; left: 0.625rem;"
                },
                {
                    "class": ".-inset-x-2.5",
                    "properties": "right: -0.625rem; left: -0.625rem;"
                },
                {
                    "class": ".top-2.5",
                    "properties": "top: 0.625rem;"
                },
                {
                    "class": ".right-2.5",
                    "properties": "right: 0.625rem;"
                },
                {
                    "class": ".bottom-2.5",
                    "properties": "bottom: 0.625rem;"
                },
                {
                    "class": ".left-2.5",
                    "properties": "left: 0.625rem;"
                },
                {
                    "class": ".-top-2.5",
                    "properties": "top: -0.625rem;"
                },
                {
                    "class": ".-right-2.5",
                    "properties": "right: -0.625rem;"
                },
                {
                    "class": ".-bottom-2.5",
                    "properties": "bottom: -0.625rem;"
                },
                {
                    "class": ".-left-2.5",
                    "properties": "left: -0.625rem;"
                },
                {
                    "class": ".inset-3",
                    "properties": "top: 0.75rem; right: 0.75rem; bottom: 0.75rem; left: 0.75rem;"
                },
                {
                    "class": ".-inset-3",
                    "properties": "top: -0.75rem; right: -0.75rem; bottom: -0.75rem; left: -0.75rem;"
                },
                {
                    "class": ".inset-y-3",
                    "properties": "top: 0.75rem; bottom: 0.75rem;"
                },
                {
                    "class": ".-inset-y-3",
                    "properties": "top: -0.75rem; bottom: -0.75rem;"
                },
                {
                    "class": ".inset-x-3",
                    "properties": "right: 0.75rem; left: 0.75rem;"
                },
                {
                    "class": ".-inset-x-3",
                    "properties": "right: -0.75rem; left: -0.75rem;"
                },
                {
                    "class": ".top-3",
                    "properties": "top: 0.75rem;"
                },
                {
                    "class": ".right-3",
                    "properties": "right: 0.75rem;"
                },
                {
                    "class": ".bottom-3",
                    "properties": "bottom: 0.75rem;"
                },
                {
                    "class": ".left-3",
                    "properties": "left: 0.75rem;"
                },
                {
                    "class": ".-top-3",
                    "properties": "top: -0.75rem;"
                },
                {
                    "class": ".-right-3",
                    "properties": "right: -0.75rem;"
                },
                {
                    "class": ".-bottom-3",
                    "properties": "bottom: -0.75rem;"
                },
                {
                    "class": ".-left-3",
                    "properties": "left: -0.75rem;"
                },
                {
                    "class": ".inset-3.5",
                    "properties": "top: 0.875rem; right: 0.875rem; bottom: 0.875rem; left: 0.875rem;"
                },
                {
                    "class": ".-inset-3.5",
                    "properties": "top: -0.875rem; right: -0.875rem; bottom: -0.875rem; left: -0.875rem;"
                },
                {
                    "class": ".inset-y-3.5",
                    "properties": "top: 0.875rem; bottom: 0.875rem;"
                },
                {
                    "class": ".-inset-y-3.5",
                    "properties": "top: -0.875rem; bottom: -0.875rem;"
                },
                {
                    "class": ".inset-x-3.5",
                    "properties": "right: 0.875rem; left: 0.875rem;"
                },
                {
                    "class": ".-inset-x-3.5",
                    "properties": "right: -0.875rem; left: -0.875rem;"
                },
                {
                    "class": ".top-3.5",
                    "properties": "top: 0.875rem;"
                },
                {
                    "class": ".right-3.5",
                    "properties": "right: 0.875rem;"
                },
                {
                    "class": ".bottom-3.5",
                    "properties": "bottom: 0.875rem;"
                },
                {
                    "class": ".left-3.5",
                    "properties": "left: 0.875rem;"
                },
                {
                    "class": ".-top-3.5",
                    "properties": "top: -0.875rem;"
                },
                {
                    "class": ".-right-3.5",
                    "properties": "right: -0.875rem;"
                },
                {
                    "class": ".-bottom-3.5",
                    "properties": "bottom: -0.875rem;"
                },
                {
                    "class": ".-left-3.5",
                    "properties": "left: -0.875rem;"
                },
                {
                    "class": ".inset-4",
                    "properties": "top: 1rem; right: 1rem; bottom: 1rem; left: 1rem;"
                },
                {
                    "class": ".-inset-4",
                    "properties": "top: -1rem; right: -1rem; bottom: -1rem; left: -1rem;"
                },
                {
                    "class": ".inset-y-4",
                    "properties": "top: 1rem; bottom: 1rem;"
                },
                {
                    "class": ".-inset-y-4",
                    "properties": "top: -1rem; bottom: -1rem;"
                },
                {
                    "class": ".inset-x-4",
                    "properties": "right: 1rem; left: 1rem;"
                },
                {
                    "class": ".-inset-x-4",
                    "properties": "right: -1rem; left: -1rem;"
                },
                {
                    "class": ".top-4",
                    "properties": "top: 1rem;"
                },
                {
                    "class": ".right-4",
                    "properties": "right: 1rem;"
                },
                {
                    "class": ".bottom-4",
                    "properties": "bottom: 1rem;"
                },
                {
                    "class": ".left-4",
                    "properties": "left: 1rem;"
                },
                {
                    "class": ".-top-4",
                    "properties": "top: -1rem;"
                },
                {
                    "class": ".-right-4",
                    "properties": "right: -1rem;"
                },
                {
                    "class": ".-bottom-4",
                    "properties": "bottom: -1rem;"
                },
                {
                    "class": ".-left-4",
                    "properties": "left: -1rem;"
                },
                {
                    "class": ".inset-5",
                    "properties": "top: 1.25rem; right: 1.25rem; bottom: 1.25rem; left: 1.25rem;"
                },
                {
                    "class": ".-inset-5",
                    "properties": "top: -1.25rem; right: -1.25rem; bottom: -1.25rem; left: -1.25rem;"
                },
                {
                    "class": ".inset-y-5",
                    "properties": "top: 1.25rem; bottom: 1.25rem;"
                },
                {
                    "class": ".-inset-y-5",
                    "properties": "top: -1.25rem; bottom: -1.25rem;"
                },
                {
                    "class": ".inset-x-5",
                    "properties": "right: 1.25rem; left: 1.25rem;"
                },
                {
                    "class": ".-inset-x-5",
                    "properties": "right: -1.25rem; left: -1.25rem;"
                },
                {
                    "class": ".top-5",
                    "properties": "top: 1.25rem;"
                },
                {
                    "class": ".right-5",
                    "properties": "right: 1.25rem;"
                },
                {
                    "class": ".bottom-5",
                    "properties": "bottom: 1.25rem;"
                },
                {
                    "class": ".left-5",
                    "properties": "left: 1.25rem;"
                },
                {
                    "class": ".-top-5",
                    "properties": "top: -1.25rem;"
                },
                {
                    "class": ".-right-5",
                    "properties": "right: -1.25rem;"
                },
                {
                    "class": ".-bottom-5",
                    "properties": "bottom: -1.25rem;"
                },
                {
                    "class": ".-left-5",
                    "properties": "left: -1.25rem;"
                },
                {
                    "class": ".inset-6",
                    "properties": "top: 1.5rem; right: 1.5rem; bottom: 1.5rem; left: 1.5rem;"
                },
                {
                    "class": ".-inset-6",
                    "properties": "top: -1.5rem; right: -1.5rem; bottom: -1.5rem; left: -1.5rem;"
                },
                {
                    "class": ".inset-y-6",
                    "properties": "top: 1.5rem; bottom: 1.5rem;"
                },
                {
                    "class": ".-inset-y-6",
                    "properties": "top: -1.5rem; bottom: -1.5rem;"
                },
                {
                    "class": ".inset-x-6",
                    "properties": "right: 1.5rem; left: 1.5rem;"
                },
                {
                    "class": ".-inset-x-6",
                    "properties": "right: -1.5rem; left: -1.5rem;"
                },
                {
                    "class": ".top-6",
                    "properties": "top: 1.5rem;"
                },
                {
                    "class": ".right-6",
                    "properties": "right: 1.5rem;"
                },
                {
                    "class": ".bottom-6",
                    "properties": "bottom: 1.5rem;"
                },
                {
                    "class": ".left-6",
                    "properties": "left: 1.5rem;"
                },
                {
                    "class": ".-top-6",
                    "properties": "top: -1.5rem;"
                },
                {
                    "class": ".-right-6",
                    "properties": "right: -1.5rem;"
                },
                {
                    "class": ".-bottom-6",
                    "properties": "bottom: -1.5rem;"
                },
                {
                    "class": ".-left-6",
                    "properties": "left: -1.5rem;"
                },
                {
                    "class": ".inset-7",
                    "properties": "top: 1.75rem; right: 1.75rem; bottom: 1.75rem; left: 1.75rem;"
                },
                {
                    "class": ".-inset-7",
                    "properties": "top: -1.75rem; right: -1.75rem; bottom: -1.75rem; left: -1.75rem;"
                },
                {
                    "class": ".inset-y-7",
                    "properties": "top: 1.75rem; bottom: 1.75rem;"
                },
                {
                    "class": ".-inset-y-7",
                    "properties": "top: -1.75rem; bottom: -1.75rem;"
                },
                {
                    "class": ".inset-x-7",
                    "properties": "right: 1.75rem; left: 1.75rem;"
                },
                {
                    "class": ".-inset-x-7",
                    "properties": "right: -1.75rem; left: -1.75rem;"
                },
                {
                    "class": ".top-7",
                    "properties": "top: 1.75rem;"
                },
                {
                    "class": ".right-7",
                    "properties": "right: 1.75rem;"
                },
                {
                    "class": ".bottom-7",
                    "properties": "bottom: 1.75rem;"
                },
                {
                    "class": ".left-7",
                    "properties": "left: 1.75rem;"
                },
                {
                    "class": ".-top-7",
                    "properties": "top: -1.75rem;"
                },
                {
                    "class": ".-right-7",
                    "properties": "right: -1.75rem;"
                },
                {
                    "class": ".-bottom-7",
                    "properties": "bottom: -1.75rem;"
                },
                {
                    "class": ".-left-7",
                    "properties": "left: -1.75rem;"
                },
                {
                    "class": ".inset-8",
                    "properties": "top: 2rem; right: 2rem; bottom: 2rem; left: 2rem;"
                },
                {
                    "class": ".-inset-8",
                    "properties": "top: -2rem; right: -2rem; bottom: -2rem; left: -2rem;"
                },
                {
                    "class": ".inset-y-8",
                    "properties": "top: 2rem; bottom: 2rem;"
                },
                {
                    "class": ".-inset-y-8",
                    "properties": "top: -2rem; bottom: -2rem;"
                },
                {
                    "class": ".inset-x-8",
                    "properties": "right: 2rem; left: 2rem;"
                },
                {
                    "class": ".-inset-x-8",
                    "properties": "right: -2rem; left: -2rem;"
                },
                {
                    "class": ".top-8",
                    "properties": "top: 2rem;"
                },
                {
                    "class": ".right-8",
                    "properties": "right: 2rem;"
                },
                {
                    "class": ".bottom-8",
                    "properties": "bottom: 2rem;"
                },
                {
                    "class": ".left-8",
                    "properties": "left: 2rem;"
                },
                {
                    "class": ".-top-8",
                    "properties": "top: -2rem;"
                },
                {
                    "class": ".-right-8",
                    "properties": "right: -2rem;"
                },
                {
                    "class": ".-bottom-8",
                    "properties": "bottom: -2rem;"
                },
                {
                    "class": ".-left-8",
                    "properties": "left: -2rem;"
                },
                {
                    "class": ".inset-9",
                    "properties": "top: 2.25rem; right: 2.25rem; bottom: 2.25rem; left: 2.25rem;"
                },
                {
                    "class": ".-inset-9",
                    "properties": "top: -2.25rem; right: -2.25rem; bottom: -2.25rem; left: -2.25rem;"
                },
                {
                    "class": ".inset-y-9",
                    "properties": "top: 2.25rem; bottom: 2.25rem;"
                },
                {
                    "class": ".-inset-y-9",
                    "properties": "top: -2.25rem; bottom: -2.25rem;"
                },
                {
                    "class": ".inset-x-9",
                    "properties": "right: 2.25rem; left: 2.25rem;"
                },
                {
                    "class": ".-inset-x-9",
                    "properties": "right: -2.25rem; left: -2.25rem;"
                },
                {
                    "class": ".top-9",
                    "properties": "top: 2.25rem;"
                },
                {
                    "class": ".right-9",
                    "properties": "right: 2.25rem;"
                },
                {
                    "class": ".bottom-9",
                    "properties": "bottom: 2.25rem;"
                },
                {
                    "class": ".left-9",
                    "properties": "left: 2.25rem;"
                },
                {
                    "class": ".-top-9",
                    "properties": "top: -2.25rem;"
                },
                {
                    "class": ".-right-9",
                    "properties": "right: -2.25rem;"
                },
                {
                    "class": ".-bottom-9",
                    "properties": "bottom: -2.25rem;"
                },
                {
                    "class": ".-left-9",
                    "properties": "left: -2.25rem;"
                },
                {
                    "class": ".inset-10",
                    "properties": "top: 2.5rem; right: 2.5rem; bottom: 2.5rem; left: 2.5rem;"
                },
                {
                    "class": ".-inset-10",
                    "properties": "top: -2.5rem; right: -2.5rem; bottom: -2.5rem; left: -2.5rem;"
                },
                {
                    "class": ".inset-y-10",
                    "properties": "top: 2.5rem; bottom: 2.5rem;"
                },
                {
                    "class": ".-inset-y-10",
                    "properties": "top: -2.5rem; bottom: -2.5rem;"
                },
                {
                    "class": ".inset-x-10",
                    "properties": "right: 2.5rem; left: 2.5rem;"
                },
                {
                    "class": ".-inset-x-10",
                    "properties": "right: -2.5rem; left: -2.5rem;"
                },
                {
                    "class": ".top-10",
                    "properties": "top: 2.5rem;"
                },
                {
                    "class": ".right-10",
                    "properties": "right: 2.5rem;"
                },
                {
                    "class": ".bottom-10",
                    "properties": "bottom: 2.5rem;"
                },
                {
                    "class": ".left-10",
                    "properties": "left: 2.5rem;"
                },
                {
                    "class": ".-top-10",
                    "properties": "top: -2.5rem;"
                },
                {
                    "class": ".-right-10",
                    "properties": "right: -2.5rem;"
                },
                {
                    "class": ".-bottom-10",
                    "properties": "bottom: -2.5rem;"
                },
                {
                    "class": ".-left-10",
                    "properties": "left: -2.5rem;"
                },
                {
                    "class": ".inset-11",
                    "properties": "top: 2.75rem; right: 2.75rem; bottom: 2.75rem; left: 2.75rem;"
                },
                {
                    "class": ".-inset-11",
                    "properties": "top: -2.75rem; right: -2.75rem; bottom: -2.75rem; left: -2.75rem;"
                },
                {
                    "class": ".inset-y-11",
                    "properties": "top: 2.75rem; bottom: 2.75rem;"
                },
                {
                    "class": ".-inset-y-11",
                    "properties": "top: -2.75rem; bottom: -2.75rem;"
                },
                {
                    "class": ".inset-x-11",
                    "properties": "right: 2.75rem; left: 2.75rem;"
                },
                {
                    "class": ".-inset-x-11",
                    "properties": "right: -2.75rem; left: -2.75rem;"
                },
                {
                    "class": ".top-11",
                    "properties": "top: 2.75rem;"
                },
                {
                    "class": ".right-11",
                    "properties": "right: 2.75rem;"
                },
                {
                    "class": ".bottom-11",
                    "properties": "bottom: 2.75rem;"
                },
                {
                    "class": ".left-11",
                    "properties": "left: 2.75rem;"
                },
                {
                    "class": ".-top-11",
                    "properties": "top: -2.75rem;"
                },
                {
                    "class": ".-right-11",
                    "properties": "right: -2.75rem;"
                },
                {
                    "class": ".-bottom-11",
                    "properties": "bottom: -2.75rem;"
                },
                {
                    "class": ".-left-11",
                    "properties": "left: -2.75rem;"
                },
                {
                    "class": ".inset-12",
                    "properties": "top: 3rem; right: 3rem; bottom: 3rem; left: 3rem;"
                },
                {
                    "class": ".-inset-12",
                    "properties": "top: -3rem; right: -3rem; bottom: -3rem; left: -3rem;"
                },
                {
                    "class": ".inset-y-12",
                    "properties": "top: 3rem; bottom: 3rem;"
                },
                {
                    "class": ".-inset-y-12",
                    "properties": "top: -3rem; bottom: -3rem;"
                },
                {
                    "class": ".inset-x-12",
                    "properties": "right: 3rem; left: 3rem;"
                },
                {
                    "class": ".-inset-x-12",
                    "properties": "right: -3rem; left: -3rem;"
                },
                {
                    "class": ".top-12",
                    "properties": "top: 3rem;"
                },
                {
                    "class": ".right-12",
                    "properties": "right: 3rem;"
                },
                {
                    "class": ".bottom-12",
                    "properties": "bottom: 3rem;"
                },
                {
                    "class": ".left-12",
                    "properties": "left: 3rem;"
                },
                {
                    "class": ".-top-12",
                    "properties": "top: -3rem;"
                },
                {
                    "class": ".-right-12",
                    "properties": "right: -3rem;"
                },
                {
                    "class": ".-bottom-12",
                    "properties": "bottom: -3rem;"
                },
                {
                    "class": ".-left-12",
                    "properties": "left: -3rem;"
                },
                {
                    "class": ".inset-14",
                    "properties": "top: 3.5rem; right: 3.5rem; bottom: 3.5rem; left: 3.5rem;"
                },
                {
                    "class": ".-inset-14",
                    "properties": "top: -3.5rem; right: -3.5rem; bottom: -3.5rem; left: -3.5rem;"
                },
                {
                    "class": ".inset-y-14",
                    "properties": "top: 3.5rem; bottom: 3.5rem;"
                },
                {
                    "class": ".-inset-y-14",
                    "properties": "top: -3.5rem; bottom: -3.5rem;"
                },
                {
                    "class": ".inset-x-14",
                    "properties": "right: 3.5rem; left: 3.5rem;"
                },
                {
                    "class": ".-inset-x-14",
                    "properties": "right: -3.5rem; left: -3.5rem;"
                },
                {
                    "class": ".top-14",
                    "properties": "top: 3.5rem;"
                },
                {
                    "class": ".right-14",
                    "properties": "right: 3.5rem;"
                },
                {
                    "class": ".bottom-14",
                    "properties": "bottom: 3.5rem;"
                },
                {
                    "class": ".left-14",
                    "properties": "left: 3.5rem;"
                },
                {
                    "class": ".-top-14",
                    "properties": "top: -3.5rem;"
                },
                {
                    "class": ".-right-14",
                    "properties": "right: -3.5rem;"
                },
                {
                    "class": ".-bottom-14",
                    "properties": "bottom: -3.5rem;"
                },
                {
                    "class": ".-left-14",
                    "properties": "left: -3.5rem;"
                },
                {
                    "class": ".inset-16",
                    "properties": "top: 4rem; right: 4rem; bottom: 4rem; left: 4rem;"
                },
                {
                    "class": ".-inset-16",
                    "properties": "top: -4rem; right: -4rem; bottom: -4rem; left: -4rem;"
                },
                {
                    "class": ".inset-y-16",
                    "properties": "top: 4rem; bottom: 4rem;"
                },
                {
                    "class": ".-inset-y-16",
                    "properties": "top: -4rem; bottom: -4rem;"
                },
                {
                    "class": ".inset-x-16",
                    "properties": "right: 4rem; left: 4rem;"
                },
                {
                    "class": ".-inset-x-16",
                    "properties": "right: -4rem; left: -4rem;"
                },
                {
                    "class": ".top-16",
                    "properties": "top: 4rem;"
                },
                {
                    "class": ".right-16",
                    "properties": "right: 4rem;"
                },
                {
                    "class": ".bottom-16",
                    "properties": "bottom: 4rem;"
                },
                {
                    "class": ".left-16",
                    "properties": "left: 4rem;"
                },
                {
                    "class": ".-top-16",
                    "properties": "top: -4rem;"
                },
                {
                    "class": ".-right-16",
                    "properties": "right: -4rem;"
                },
                {
                    "class": ".-bottom-16",
                    "properties": "bottom: -4rem;"
                },
                {
                    "class": ".-left-16",
                    "properties": "left: -4rem;"
                },
                {
                    "class": ".inset-20",
                    "properties": "top: 5rem; right: 5rem; bottom: 5rem; left: 5rem;"
                },
                {
                    "class": ".-inset-20",
                    "properties": "top: -5rem; right: -5rem; bottom: -5rem; left: -5rem;"
                },
                {
                    "class": ".inset-y-20",
                    "properties": "top: 5rem; bottom: 5rem;"
                },
                {
                    "class": ".-inset-y-20",
                    "properties": "top: -5rem; bottom: -5rem;"
                },
                {
                    "class": ".inset-x-20",
                    "properties": "right: 5rem; left: 5rem;"
                },
                {
                    "class": ".-inset-x-20",
                    "properties": "right: -5rem; left: -5rem;"
                },
                {
                    "class": ".top-20",
                    "properties": "top: 5rem;"
                },
                {
                    "class": ".right-20",
                    "properties": "right: 5rem;"
                },
                {
                    "class": ".bottom-20",
                    "properties": "bottom: 5rem;"
                },
                {
                    "class": ".left-20",
                    "properties": "left: 5rem;"
                },
                {
                    "class": ".-top-20",
                    "properties": "top: -5rem;"
                },
                {
                    "class": ".-right-20",
                    "properties": "right: -5rem;"
                },
                {
                    "class": ".-bottom-20",
                    "properties": "bottom: -5rem;"
                },
                {
                    "class": ".-left-20",
                    "properties": "left: -5rem;"
                },
                {
                    "class": ".inset-24",
                    "properties": "top: 6rem; right: 6rem; bottom: 6rem; left: 6rem;"
                },
                {
                    "class": ".-inset-24",
                    "properties": "top: -6rem; right: -6rem; bottom: -6rem; left: -6rem;"
                },
                {
                    "class": ".inset-y-24",
                    "properties": "top: 6rem; bottom: 6rem;"
                },
                {
                    "class": ".-inset-y-24",
                    "properties": "top: -6rem; bottom: -6rem;"
                },
                {
                    "class": ".inset-x-24",
                    "properties": "right: 6rem; left: 6rem;"
                },
                {
                    "class": ".-inset-x-24",
                    "properties": "right: -6rem; left: -6rem;"
                },
                {
                    "class": ".top-24",
                    "properties": "top: 6rem;"
                },
                {
                    "class": ".right-24",
                    "properties": "right: 6rem;"
                },
                {
                    "class": ".bottom-24",
                    "properties": "bottom: 6rem;"
                },
                {
                    "class": ".left-24",
                    "properties": "left: 6rem;"
                },
                {
                    "class": ".-top-24",
                    "properties": "top: -6rem;"
                },
                {
                    "class": ".-right-24",
                    "properties": "right: -6rem;"
                },
                {
                    "class": ".-bottom-24",
                    "properties": "bottom: -6rem;"
                },
                {
                    "class": ".-left-24",
                    "properties": "left: -6rem;"
                },
                {
                    "class": ".inset-28",
                    "properties": "top: 7rem; right: 7rem; bottom: 7rem; left: 7rem;"
                },
                {
                    "class": ".-inset-28",
                    "properties": "top: -7rem; right: -7rem; bottom: -7rem; left: -7rem;"
                },
                {
                    "class": ".inset-y-28",
                    "properties": "top: 7rem; bottom: 7rem;"
                },
                {
                    "class": ".-inset-y-28",
                    "properties": "top: -7rem; bottom: -7rem;"
                },
                {
                    "class": ".inset-x-28",
                    "properties": "right: 7rem; left: 7rem;"
                },
                {
                    "class": ".-inset-x-28",
                    "properties": "right: -7rem; left: -7rem;"
                },
                {
                    "class": ".top-28",
                    "properties": "top: 7rem;"
                },
                {
                    "class": ".right-28",
                    "properties": "right: 7rem;"
                },
                {
                    "class": ".bottom-28",
                    "properties": "bottom: 7rem;"
                },
                {
                    "class": ".left-28",
                    "properties": "left: 7rem;"
                },
                {
                    "class": ".-top-28",
                    "properties": "top: -7rem;"
                },
                {
                    "class": ".-right-28",
                    "properties": "right: -7rem;"
                },
                {
                    "class": ".-bottom-28",
                    "properties": "bottom: -7rem;"
                },
                {
                    "class": ".-left-28",
                    "properties": "left: -7rem;"
                },
                {
                    "class": ".inset-32",
                    "properties": "top: 8rem; right: 8rem; bottom: 8rem; left: 8rem;"
                },
                {
                    "class": ".-inset-32",
                    "properties": "top: -8rem; right: -8rem; bottom: -8rem; left: -8rem;"
                },
                {
                    "class": ".inset-y-32",
                    "properties": "top: 8rem; bottom: 8rem;"
                },
                {
                    "class": ".-inset-y-32",
                    "properties": "top: -8rem; bottom: -8rem;"
                },
                {
                    "class": ".inset-x-32",
                    "properties": "right: 8rem; left: 8rem;"
                },
                {
                    "class": ".-inset-x-32",
                    "properties": "right: -8rem; left: -8rem;"
                },
                {
                    "class": ".top-32",
                    "properties": "top: 8rem;"
                },
                {
                    "class": ".right-32",
                    "properties": "right: 8rem;"
                },
                {
                    "class": ".bottom-32",
                    "properties": "bottom: 8rem;"
                },
                {
                    "class": ".left-32",
                    "properties": "left: 8rem;"
                },
                {
                    "class": ".-top-32",
                    "properties": "top: -8rem;"
                },
                {
                    "class": ".-right-32",
                    "properties": "right: -8rem;"
                },
                {
                    "class": ".-bottom-32",
                    "properties": "bottom: -8rem;"
                },
                {
                    "class": ".-left-32",
                    "properties": "left: -8rem;"
                },
                {
                    "class": ".inset-36",
                    "properties": "top: 9rem; right: 9rem; bottom: 9rem; left: 9rem;"
                },
                {
                    "class": ".-inset-36",
                    "properties": "top: -9rem; right: -9rem; bottom: -9rem; left: -9rem;"
                },
                {
                    "class": ".inset-y-36",
                    "properties": "top: 9rem; bottom: 9rem;"
                },
                {
                    "class": ".-inset-y-36",
                    "properties": "top: -9rem; bottom: -9rem;"
                },
                {
                    "class": ".inset-x-36",
                    "properties": "right: 9rem; left: 9rem;"
                },
                {
                    "class": ".-inset-x-36",
                    "properties": "right: -9rem; left: -9rem;"
                },
                {
                    "class": ".top-36",
                    "properties": "top: 9rem;"
                },
                {
                    "class": ".right-36",
                    "properties": "right: 9rem;"
                },
                {
                    "class": ".bottom-36",
                    "properties": "bottom: 9rem;"
                },
                {
                    "class": ".left-36",
                    "properties": "left: 9rem;"
                },
                {
                    "class": ".-top-36",
                    "properties": "top: -9rem;"
                },
                {
                    "class": ".-right-36",
                    "properties": "right: -9rem;"
                },
                {
                    "class": ".-bottom-36",
                    "properties": "bottom: -9rem;"
                },
                {
                    "class": ".-left-36",
                    "properties": "left: -9rem;"
                },
                {
                    "class": ".inset-40",
                    "properties": "top: 10rem; right: 10rem; bottom: 10rem; left: 10rem;"
                },
                {
                    "class": ".-inset-40",
                    "properties": "top: -10rem; right: -10rem; bottom: -10rem; left: -10rem;"
                },
                {
                    "class": ".inset-y-40",
                    "properties": "top: 10rem; bottom: 10rem;"
                },
                {
                    "class": ".-inset-y-40",
                    "properties": "top: -10rem; bottom: -10rem;"
                },
                {
                    "class": ".inset-x-40",
                    "properties": "right: 10rem; left: 10rem;"
                },
                {
                    "class": ".-inset-x-40",
                    "properties": "right: -10rem; left: -10rem;"
                },
                {
                    "class": ".top-40",
                    "properties": "top: 10rem;"
                },
                {
                    "class": ".right-40",
                    "properties": "right: 10rem;"
                },
                {
                    "class": ".bottom-40",
                    "properties": "bottom: 10rem;"
                },
                {
                    "class": ".left-40",
                    "properties": "left: 10rem;"
                },
                {
                    "class": ".-top-40",
                    "properties": "top: -10rem;"
                },
                {
                    "class": ".-right-40",
                    "properties": "right: -10rem;"
                },
                {
                    "class": ".-bottom-40",
                    "properties": "bottom: -10rem;"
                },
                {
                    "class": ".-left-40",
                    "properties": "left: -10rem;"
                },
                {
                    "class": ".inset-44",
                    "properties": "top: 11rem; right: 11rem; bottom: 11rem; left: 11rem;"
                },
                {
                    "class": ".-inset-44",
                    "properties": "top: -11rem; right: -11rem; bottom: -11rem; left: -11rem;"
                },
                {
                    "class": ".inset-y-44",
                    "properties": "top: 11rem; bottom: 11rem;"
                },
                {
                    "class": ".-inset-y-44",
                    "properties": "top: -11rem; bottom: -11rem;"
                },
                {
                    "class": ".inset-x-44",
                    "properties": "right: 11rem; left: 11rem;"
                },
                {
                    "class": ".-inset-x-44",
                    "properties": "right: -11rem; left: -11rem;"
                },
                {
                    "class": ".top-44",
                    "properties": "top: 11rem;"
                },
                {
                    "class": ".right-44",
                    "properties": "right: 11rem;"
                },
                {
                    "class": ".bottom-44",
                    "properties": "bottom: 11rem;"
                },
                {
                    "class": ".left-44",
                    "properties": "left: 11rem;"
                },
                {
                    "class": ".-top-44",
                    "properties": "top: -11rem;"
                },
                {
                    "class": ".-right-44",
                    "properties": "right: -11rem;"
                },
                {
                    "class": ".-bottom-44",
                    "properties": "bottom: -11rem;"
                },
                {
                    "class": ".-left-44",
                    "properties": "left: -11rem;"
                },
                {
                    "class": ".inset-48",
                    "properties": "top: 12rem; right: 12rem; bottom: 12rem; left: 12rem;"
                },
                {
                    "class": ".-inset-48",
                    "properties": "top: -12rem; right: -12rem; bottom: -12rem; left: -12rem;"
                },
                {
                    "class": ".inset-y-48",
                    "properties": "top: 12rem; bottom: 12rem;"
                },
                {
                    "class": ".-inset-y-48",
                    "properties": "top: -12rem; bottom: -12rem;"
                },
                {
                    "class": ".inset-x-48",
                    "properties": "right: 12rem; left: 12rem;"
                },
                {
                    "class": ".-inset-x-48",
                    "properties": "right: -12rem; left: -12rem;"
                },
                {
                    "class": ".top-48",
                    "properties": "top: 12rem;"
                },
                {
                    "class": ".right-48",
                    "properties": "right: 12rem;"
                },
                {
                    "class": ".bottom-48",
                    "properties": "bottom: 12rem;"
                },
                {
                    "class": ".left-48",
                    "properties": "left: 12rem;"
                },
                {
                    "class": ".-top-48",
                    "properties": "top: -12rem;"
                },
                {
                    "class": ".-right-48",
                    "properties": "right: -12rem;"
                },
                {
                    "class": ".-bottom-48",
                    "properties": "bottom: -12rem;"
                },
                {
                    "class": ".-left-48",
                    "properties": "left: -12rem;"
                },
                {
                    "class": ".inset-52",
                    "properties": "top: 13rem; right: 13rem; bottom: 13rem; left: 13rem;"
                },
                {
                    "class": ".-inset-52",
                    "properties": "top: -13rem; right: -13rem; bottom: -13rem; left: -13rem;"
                },
                {
                    "class": ".inset-y-52",
                    "properties": "top: 13rem; bottom: 13rem;"
                },
                {
                    "class": ".-inset-y-52",
                    "properties": "top: -13rem; bottom: -13rem;"
                },
                {
                    "class": ".inset-x-52",
                    "properties": "right: 13rem; left: 13rem;"
                },
                {
                    "class": ".-inset-x-52",
                    "properties": "right: -13rem; left: -13rem;"
                },
                {
                    "class": ".top-52",
                    "properties": "top: 13rem;"
                },
                {
                    "class": ".right-52",
                    "properties": "right: 13rem;"
                },
                {
                    "class": ".bottom-52",
                    "properties": "bottom: 13rem;"
                },
                {
                    "class": ".left-52",
                    "properties": "left: 13rem;"
                },
                {
                    "class": ".-top-52",
                    "properties": "top: -13rem;"
                },
                {
                    "class": ".-right-52",
                    "properties": "right: -13rem;"
                },
                {
                    "class": ".-bottom-52",
                    "properties": "bottom: -13rem;"
                },
                {
                    "class": ".-left-52",
                    "properties": "left: -13rem;"
                },
                {
                    "class": ".inset-56",
                    "properties": "top: 14rem; right: 14rem; bottom: 14rem; left: 14rem;"
                },
                {
                    "class": ".-inset-56",
                    "properties": "top: -14rem; right: -14rem; bottom: -14rem; left: -14rem;"
                },
                {
                    "class": ".inset-y-56",
                    "properties": "top: 14rem; bottom: 14rem;"
                },
                {
                    "class": ".-inset-y-56",
                    "properties": "top: -14rem; bottom: -14rem;"
                },
                {
                    "class": ".inset-x-56",
                    "properties": "right: 14rem; left: 14rem;"
                },
                {
                    "class": ".-inset-x-56",
                    "properties": "right: -14rem; left: -14rem;"
                },
                {
                    "class": ".top-56",
                    "properties": "top: 14rem;"
                },
                {
                    "class": ".right-56",
                    "properties": "right: 14rem;"
                },
                {
                    "class": ".bottom-56",
                    "properties": "bottom: 14rem;"
                },
                {
                    "class": ".left-56",
                    "properties": "left: 14rem;"
                },
                {
                    "class": ".-top-56",
                    "properties": "top: -14rem;"
                },
                {
                    "class": ".-right-56",
                    "properties": "right: -14rem;"
                },
                {
                    "class": ".-bottom-56",
                    "properties": "bottom: -14rem;"
                },
                {
                    "class": ".-left-56",
                    "properties": "left: -14rem;"
                },
                {
                    "class": ".inset-60",
                    "properties": "top: 15rem; right: 15rem; bottom: 15rem; left: 15rem;"
                },
                {
                    "class": ".-inset-60",
                    "properties": "top: -15rem; right: -15rem; bottom: -15rem; left: -15rem;"
                },
                {
                    "class": ".inset-y-60",
                    "properties": "top: 15rem; bottom: 15rem;"
                },
                {
                    "class": ".-inset-y-60",
                    "properties": "top: -15rem; bottom: -15rem;"
                },
                {
                    "class": ".inset-x-60",
                    "properties": "right: 15rem; left: 15rem;"
                },
                {
                    "class": ".-inset-x-60",
                    "properties": "right: -15rem; left: -15rem;"
                },
                {
                    "class": ".top-60",
                    "properties": "top: 15rem;"
                },
                {
                    "class": ".right-60",
                    "properties": "right: 15rem;"
                },
                {
                    "class": ".bottom-60",
                    "properties": "bottom: 15rem;"
                },
                {
                    "class": ".left-60",
                    "properties": "left: 15rem;"
                },
                {
                    "class": ".-top-60",
                    "properties": "top: -15rem;"
                },
                {
                    "class": ".-right-60",
                    "properties": "right: -15rem;"
                },
                {
                    "class": ".-bottom-60",
                    "properties": "bottom: -15rem;"
                },
                {
                    "class": ".-left-60",
                    "properties": "left: -15rem;"
                },
                {
                    "class": ".inset-64",
                    "properties": "top: 16rem; right: 16rem; bottom: 16rem; left: 16rem;"
                },
                {
                    "class": ".-inset-64",
                    "properties": "top: -16rem; right: -16rem; bottom: -16rem; left: -16rem;"
                },
                {
                    "class": ".inset-y-64",
                    "properties": "top: 16rem; bottom: 16rem;"
                },
                {
                    "class": ".-inset-y-64",
                    "properties": "top: -16rem; bottom: -16rem;"
                },
                {
                    "class": ".inset-x-64",
                    "properties": "right: 16rem; left: 16rem;"
                },
                {
                    "class": ".-inset-x-64",
                    "properties": "right: -16rem; left: -16rem;"
                },
                {
                    "class": ".top-64",
                    "properties": "top: 16rem;"
                },
                {
                    "class": ".right-64",
                    "properties": "right: 16rem;"
                },
                {
                    "class": ".bottom-64",
                    "properties": "bottom: 16rem;"
                },
                {
                    "class": ".left-64",
                    "properties": "left: 16rem;"
                },
                {
                    "class": ".-top-64",
                    "properties": "top: -16rem;"
                },
                {
                    "class": ".-right-64",
                    "properties": "right: -16rem;"
                },
                {
                    "class": ".-bottom-64",
                    "properties": "bottom: -16rem;"
                },
                {
                    "class": ".-left-64",
                    "properties": "left: -16rem;"
                },
                {
                    "class": ".inset-72",
                    "properties": "top: 18rem; right: 18rem; bottom: 18rem; left: 18rem;"
                },
                {
                    "class": ".-inset-72",
                    "properties": "top: -18rem; right: -18rem; bottom: -18rem; left: -18rem;"
                },
                {
                    "class": ".inset-y-72",
                    "properties": "top: 18rem; bottom: 18rem;"
                },
                {
                    "class": ".-inset-y-72",
                    "properties": "top: -18rem; bottom: -18rem;"
                },
                {
                    "class": ".inset-x-72",
                    "properties": "right: 18rem; left: 18rem;"
                },
                {
                    "class": ".-inset-x-72",
                    "properties": "right: -18rem; left: -18rem;"
                },
                {
                    "class": ".top-72",
                    "properties": "top: 18rem;"
                },
                {
                    "class": ".right-72",
                    "properties": "right: 18rem;"
                },
                {
                    "class": ".bottom-72",
                    "properties": "bottom: 18rem;"
                },
                {
                    "class": ".left-72",
                    "properties": "left: 18rem;"
                },
                {
                    "class": ".-top-72",
                    "properties": "top: -18rem;"
                },
                {
                    "class": ".-right-72",
                    "properties": "right: -18rem;"
                },
                {
                    "class": ".-bottom-72",
                    "properties": "bottom: -18rem;"
                },
                {
                    "class": ".-left-72",
                    "properties": "left: -18rem;"
                },
                {
                    "class": ".inset-80",
                    "properties": "top: 20; right: 20; bottom: 20; left: 20;"
                },
                {
                    "class": ".-inset-80",
                    "properties": "top: -20; right: -20; bottom: -20; left: -20;"
                },
                {
                    "class": ".inset-y-80",
                    "properties": "top: 20; bottom: 20;"
                },
                {
                    "class": ".-inset-y-80",
                    "properties": "top: -20; bottom: -20;"
                },
                {
                    "class": ".inset-x-80",
                    "properties": "right: 20; left: 20;"
                },
                {
                    "class": ".-inset-x-80",
                    "properties": "right: -20; left: -20;"
                },
                {
                    "class": ".top-80",
                    "properties": "top: 20;"
                },
                {
                    "class": ".right-80",
                    "properties": "right: 20;"
                },
                {
                    "class": ".bottom-80",
                    "properties": "bottom: 20;"
                },
                {
                    "class": ".left-80",
                    "properties": "left: 20;"
                },
                {
                    "class": ".-top-80",
                    "properties": "top: -20;"
                },
                {
                    "class": ".-right-80",
                    "properties": "right: -20;"
                },
                {
                    "class": ".-bottom-80",
                    "properties": "bottom: -20;"
                },
                {
                    "class": ".-left-80",
                    "properties": "left: -20rem;"
                },
                {
                    "class": ".inset-96",
                    "properties": "top: 24rem; right: 24rem; bottom: 24rem; left: 24rem;"
                },
                {
                    "class": ".-inset-96",
                    "properties": "top: -24rem; right: -24rem; bottom: -24rem; left: -24rem;"
                },
                {
                    "class": ".inset-y-96",
                    "properties": "top: 24rem; bottom: 24rem;"
                },
                {
                    "class": ".-inset-y-96",
                    "properties": "top: -24rem; bottom: -24rem;"
                },
                {
                    "class": ".inset-x-96",
                    "properties": "right: 24rem; left: 24rem;"
                },
                {
                    "class": ".-inset-x-96",
                    "properties": "right: -24rem; left: -24rem;"
                },
                {
                    "class": ".top-96",
                    "properties": "top: 24rem;"
                },
                {
                    "class": ".right-96",
                    "properties": "right: 24rem;"
                },
                {
                    "class": ".bottom-96",
                    "properties": "bottom: 24rem;"
                },
                {
                    "class": ".left-96",
                    "properties": "left: 24rem;"
                },
                {
                    "class": ".-top-96",
                    "properties": "top: -24rem;"
                },
                {
                    "class": ".-right-96",
                    "properties": "right: -24rem;"
                },
                {
                    "class": ".-bottom-96",
                    "properties": "bottom: -24rem;"
                },
                {
                    "class": ".-left-96",
                    "properties": "left: -24rem;"
                },
                {
                    "class": ".inset-auto",
                    "properties": "top: auto; right: auto; bottom: auto; left: auto;"
                },
                {
                    "class": ".inset-y-auto",
                    "properties": "top: auto; bottom: auto;"
                },
                {
                    "class": ".inset-x-auto",
                    "properties": "right: auto; left: auto;"
                },
                {
                    "class": ".top-auto",
                    "properties": "top: auto;"
                },
                {
                    "class": ".right-auto",
                    "properties": "right: auto;"
                },
                {
                    "class": ".bottom-auto",
                    "properties": "bottom: auto;"
                },
                {
                    "class": ".left-auto",
                    "properties": "left: auto;"
                },
                {
                    "class": ".inset-1/2",
                    "properties": "top: 50%; right: 50%; bottom: 50%; left: 50%;"
                },
                {
                    "class": ".inset-2/3",
                    "properties": "top: 66.666667%; right: 66.666667%; bottom: 66.666667%; left: 66.666667%;"
                },
                {
                    "class": ".inset-1/4",
                    "properties": "top: 25%; right: 25%; bottom: 25%; left: 25%;"
                },
                {
                    "class": ".inset-3/4",
                    "properties": "top: 75%; right: 75%; bottom: 75%; left: 75%;"
                },
                {
                    "class": ".inset-full",
                    "properties": "top: 100%; right: 100%; bottom: 100%; left: 100%;"
                },
                {
                    "class": ".-inset-1/2",
                    "properties": "top: -50%; right: -50%; bottom: -50%; left: -50%;"
                },
                {
                    "class": ".-inset-2/3",
                    "properties": "top: -66.666667%; right: -66.666667%; bottom: -66.666667%; left: -66.666667%;"
                },
                {
                    "class": ".-inset-1/4",
                    "properties": "top: -25%; right: -25%; bottom: -25%; left: -25%;"
                },
                {
                    "class": ".-inset-3/4",
                    "properties": "top: -75%; right: -75%; bottom: -75%; left: -75%;"
                },
                {
                    "class": ".-inset-full",
                    "properties": "top: -100%; right: -100%; bottom: -100%; left: -100%;"
                },
                {
                    "class": ".inset-x-1/2",
                    "properties": "right: 50%; left: 50%;"
                },
                {
                    "class": ".inset-x-2/3",
                    "properties": "right: 66.666667%; left: 66.666667%;"
                },
                {
                    "class": ".inset-x-1/4",
                    "properties": "right: 25%; left: 25%;"
                },
                {
                    "class": ".inset-x-3/4",
                    "properties": "right: 75%; left: 75%;"
                },
                {
                    "class": ".inset-x-full",
                    "properties": "right: 100%; left: 100%;"
                },
                {
                    "class": ".-inset-x-1/2",
                    "properties": "right: -50%; left: -50%;"
                },
                {
                    "class": ".-inset-x-2/3",
                    "properties": "right: -66.666667%; left: -66.666667%;"
                },
                {
                    "class": ".-inset-x-1/4",
                    "properties": "right: -25%; left: -25%;"
                },
                {
                    "class": ".-inset-x-3/4",
                    "properties": "right: -75%; left: -75%;"
                },
                {
                    "class": ".-inset-x-full",
                    "properties": "right: -100%; left: -100%;"
                },
                {
                    "class": ".inset-y-1/2",
                    "properties": "top: 50%; bottom: 50%;"
                },
                {
                    "class": ".inset-y-2/3",
                    "properties": "top: 66.666667%; bottom: 66.666667%;"
                },
                {
                    "class": ".inset-y-1/4",
                    "properties": "top: 25%; bottom: 25%;"
                },
                {
                    "class": ".inset-y-3/4",
                    "properties": "top: 75%; bottom: 75%;"
                },
                {
                    "class": ".inset-y-full",
                    "properties": "top: 100%; bottom: 100%;"
                },
                {
                    "class": ".-inset-y-1/2",
                    "properties": "top: -50%; bottom: -50%;"
                },
                {
                    "class": ".-inset-y-2/3",
                    "properties": "top: -66.666667%; bottom: -66.666667%;"
                },
                {
                    "class": ".-inset-y-1/4",
                    "properties": "top: -25%; bottom: -25%;"
                },
                {
                    "class": ".-inset-y-3/4",
                    "properties": "top: -75%; bottom: -75%;"
                },
                {
                    "class": ".-inset-y-full",
                    "properties": "top: -100%; bottom: -100%;"
                },
                {
                    "class": ".top-1/2",
                    "properties": "top: 50%;"
                },
                {
                    "class": ".top-2/3",
                    "properties": "top: 66.666667%;"
                },
                {
                    "class": ".top-1/4",
                    "properties": "top: 25%;"
                },
                {
                    "class": ".top-3/4",
                    "properties": "top: 75%;"
                },
                {
                    "class": ".top-full",
                    "properties": "top: 100%;"
                },
                {
                    "class": ".-top-1/2",
                    "properties": "top: -50%;"
                },
                {
                    "class": ".-top-2/3",
                    "properties": "top: -66.666667%;"
                },
                {
                    "class": ".-top-1/4",
                    "properties": "top: -25%;"
                },
                {
                    "class": ".-top-3/4",
                    "properties": "top: -75%;"
                },
                {
                    "class": ".-top-full",
                    "properties": "top: -100%;"
                },
                {
                    "class": ".right-1/2",
                    "properties": "right: 50%;"
                },
                {
                    "class": ".right-2/3",
                    "properties": "right: 66.666667%;"
                },
                {
                    "class": ".right-1/4",
                    "properties": "right: 25%;"
                },
                {
                    "class": ".right-3/4",
                    "properties": "right: 75%;"
                },
                {
                    "class": ".right-full",
                    "properties": "right: 100%;"
                },
                {
                    "class": ".-right-1/2",
                    "properties": "right: -50%;"
                },
                {
                    "class": ".-right-2/3",
                    "properties": "right: -66.666667%;"
                },
                {
                    "class": ".-right-1/4",
                    "properties": "right: -25%;"
                },
                {
                    "class": ".-right-3/4",
                    "properties": "right: -75%;"
                },
                {
                    "class": ".-right-full",
                    "properties": "right: -100%;"
                },
                {
                    "class": ".bottom-1/2",
                    "properties": "bottom: 50%;"
                },
                {
                    "class": ".bottom-2/3",
                    "properties": "bottom: 66.666667%;"
                },
                {
                    "class": ".bottom-1/4",
                    "properties": "bottom: 25%;"
                },
                {
                    "class": ".bottom-3/4",
                    "properties": "bottom: 75%;"
                },
                {
                    "class": ".bottom-full",
                    "properties": "bottom: 100%;"
                },
                {
                    "class": ".-bottom-1/2",
                    "properties": "bottom: -50%;"
                },
                {
                    "class": ".-bottom-2/3",
                    "properties": "bottom: -66.666667%;"
                },
                {
                    "class": ".-bottom-1/4",
                    "properties": "bottom: -25%;"
                },
                {
                    "class": ".-bottom-3/4",
                    "properties": "bottom: -75%;"
                },
                {
                    "class": ".-bottom-full",
                    "properties": "bottom: -100%;"
                },
                {
                    "class": ".left-1/2",
                    "properties": "left: 50%;"
                },
                {
                    "class": ".left-2/3",
                    "properties": "left: 66.666667%;"
                },
                {
                    "class": ".left-1/4",
                    "properties": "left: 25%;"
                },
                {
                    "class": ".left-3/4",
                    "properties": "left: 75%;"
                },
                {
                    "class": ".left-full",
                    "properties": "left: 100%;"
                },
                {
                    "class": ".-left-1/2",
                    "properties": "left: -50%;"
                },
                {
                    "class": ".-left-2/3",
                    "properties": "left: -66.666667%;"
                },
                {
                    "class": ".-left-1/4",
                    "properties": "left: -25%;"
                },
                {
                    "class": ".-left-3/4",
                    "properties": "left: -75%;"
                },
                {
                    "class": ".-left-full",
                    "properties": "left: -100%;"
                }
            ]
        },
        {
            "title": "Visibility",
            "classList": [
                {
                    "class": ".visible",
                    "properties": "visibility: visible;"
                },
                {
                    "class": ".invisible",
                    "properties": "visibility: hidden;"
                }
            ]
        },
        {
            "title": "Z-index",
            "classList": [
                {
                    "class": ".z-0",
                    "properties": "z-index: 0;"
                },
                {
                    "class": ".z-10",
                    "properties": "z-index: 10;"
                },
                {
                    "class": ".z-20",
                    "properties": "z-index: 20;"
                },
                {
                    "class": ".z-30",
                    "properties": "z-index: 30;"
                },
                {
                    "class": ".z-40",
                    "properties": "z-index: 40;"
                },
                {
                    "class": ".z-50",
                    "properties": "z-index: 50;"
                },
                {
                    "class": ".z-auto",
                    "properties": "z-index: auto;"
                }
            ]
        }
    ],
    "Spacing": [
        {
            "title": "Padding",
            "classList": [
                {
                    "class": ".p-0",
                    "properties": "padding: 0;"
                },
                {
                    "class": ".p-0.5",
                    "properties": "padding: 0.125rem;"
                },
                {
                    "class": ".p-1",
                    "properties": "padding: 0.25rem;"
                },
                {
                    "class": ".p-1.5",
                    "properties": "padding: 0.375rem;"
                },
                {
                    "class": ".p-2",
                    "properties": "padding: 0.5rem;"
                },
                {
                    "class": ".p-2.5",
                    "properties": "padding: 0.625rem;"
                },
                {
                    "class": ".p-3",
                    "properties": "padding: 0.75rem;"
                },
                {
                    "class": ".p-3.5",
                    "properties": "padding: 0.875rem;"
                },
                {
                    "class": ".p-4",
                    "properties": "padding: 1rem;"
                },
                {
                    "class": ".p-5",
                    "properties": "padding: 1.25rem;"
                },
                {
                    "class": ".p-6",
                    "properties": "padding: 1.5rem;"
                },
                {
                    "class": ".p-8",
                    "properties": "padding: 2rem;"
                },
                {
                    "class": ".p-10",
                    "properties": "padding: 2.5rem;"
                },
                {
                    "class": ".p-11",
                    "properties": "padding: 2.75rem;"
                },
                {
                    "class": ".p-12",
                    "properties": "padding: 3rem;"
                },
                {
                    "class": ".p-14",
                    "properties": "padding: 3.5rem;"
                },
                {
                    "class": ".p-16",
                    "properties": "padding: 4rem;"
                },
                {
                    "class": ".p-20",
                    "properties": "padding: 5rem;"
                },
                {
                    "class": ".p-24",
                    "properties": "padding: 6rem;"
                },
                {
                    "class": ".p-28",
                    "properties": "padding: 7rem;"
                },
                {
                    "class": ".p-32",
                    "properties": "padding: 8rem;"
                },
                {
                    "class": ".p-36",
                    "properties": "padding: 9rem;"
                },
                {
                    "class": ".p-40",
                    "properties": "padding: 10rem;"
                },
                {
                    "class": ".p-44",
                    "properties": "padding: 11rem;"
                },
                {
                    "class": ".p-48",
                    "properties": "padding: 12rem;"
                },
                {
                    "class": ".p-52",
                    "properties": "padding: 13rem;"
                },
                {
                    "class": ".p-56",
                    "properties": "padding: 14rem;"
                },
                {
                    "class": ".p-64",
                    "properties": "padding: 16rem;"
                },
                {
                    "class": ".p-72",
                    "properties": "padding: 18rem;"
                },
                {
                    "class": ".p-80",
                    "properties": "padding: 20rem;"
                },
                {
                    "class": ".p-96",
                    "properties": "padding: 24rem;"
                },
                {
                    "class": ".p-px",
                    "properties": "padding: 1px;"
                },
                {
                    "class": ".py-0",
                    "properties": "padding-top: 0; padding-bottom: 0;"
                },
                {
                    "class": ".px-0",
                    "properties": "padding-left: 0; padding-right: 0;"
                },
                {
                    "class": ".py-0.5",
                    "properties": "padding-top: 0.125rem; padding-bottom: 0.125rem;"
                },
                {
                    "class": ".px-0.5",
                    "properties": "padding-left: 0.125rem; padding-right: 0.125rem;"
                },
                {
                    "class": ".py-1",
                    "properties": "padding-top: 0.25rem; padding-bottom: 0.25rem;"
                },
                {
                    "class": ".px-1",
                    "properties": "padding-left: 0.25rem; padding-right: 0.25rem;"
                },
                {
                    "class": ".py-1.5",
                    "properties": "padding-top: 0.375rem; padding-bottom: 0.375rem;"
                },
                {
                    "class": ".px-1.5",
                    "properties": "padding-left: 0.375rem; padding-right: 0.375rem;"
                },
                {
                    "class": ".py-2",
                    "properties": "padding-top: 0.5rem; padding-bottom: 0.5rem;"
                },
                {
                    "class": ".px-2",
                    "properties": "padding-left: 0.5rem; padding-right: 0.5rem;"
                },
                {
                    "class": ".py-2.5",
                    "properties": "padding-top: 0.625rem; padding-bottom: 0.625rem;"
                },
                {
                    "class": ".px-2.5",
                    "properties": "padding-left: 0.625rem; padding-right: 0.625rem;"
                },
                {
                    "class": ".py-3",
                    "properties": "padding-top: 0.75rem; padding-bottom: 0.75rem;"
                },
                {
                    "class": ".px-3",
                    "properties": "padding-left: 0.75rem; padding-right: 0.75rem;"
                },
                {
                    "class": ".py-3.5",
                    "properties": "padding-top: 0.875rem; padding-bottom: 0.875rem;"
                },
                {
                    "class": ".px-3.5",
                    "properties": "padding-left: 0.875rem; padding-right: 0.875rem;"
                },
                {
                    "class": ".py-4",
                    "properties": "padding-top: 1rem; padding-bottom: 1rem;"
                },
                {
                    "class": ".px-4",
                    "properties": "padding-left: 1rem; padding-right: 1rem;"
                },
                {
                    "class": ".py-5",
                    "properties": "padding-top: 1.25rem; padding-bottom: 1.25rem;"
                },
                {
                    "class": ".px-5",
                    "properties": "padding-left: 1.25rem; padding-right: 1.25rem;"
                },
                {
                    "class": ".py-6",
                    "properties": "padding-top: 1.5rem; padding-bottom: 1.5rem;"
                },
                {
                    "class": ".px-6",
                    "properties": "padding-left: 1.5rem; padding-right: 1.5rem;"
                },
                {
                    "class": ".py-7",
                    "properties": "padding-top: 1.75rem; padding-bottom: 1.75rem;"
                },
                {
                    "class": ".px-7",
                    "properties": "padding-left: 1.75rem; padding-right: 1.75rem;"
                },
                {
                    "class": ".py-8",
                    "properties": "padding-top: 2rem; padding-bottom: 2rem;"
                },
                {
                    "class": ".px-8",
                    "properties": "padding-left: 2rem; padding-right: 2rem;"
                },
                {
                    "class": ".py-9",
                    "properties": "padding-top: 2.25rem; padding-bottom: 2.25rem;"
                },
                {
                    "class": ".px-9",
                    "properties": "padding-left: 2.25rem; padding-right: 2.25rem;"
                },
                {
                    "class": ".py-10",
                    "properties": "padding-top: 2.5rem; padding-bottom: 2.5rem;"
                },
                {
                    "class": ".px-10",
                    "properties": "padding-left: 2.5rem; padding-right: 2.5rem;"
                },
                {
                    "class": ".py-11",
                    "properties": "padding-top: 2.75rem; padding-bottom: 2.75rem;"
                },
                {
                    "class": ".px-11",
                    "properties": "padding-left: 2.75rem; padding-right: 2.75rem;"
                },
                {
                    "class": ".py-12",
                    "properties": "padding-top: 3rem; padding-bottom: 3rem;"
                },
                {
                    "class": ".px-12",
                    "properties": "padding-left: 3rem; padding-right: 3rem;"
                },
                {
                    "class": ".py-14",
                    "properties": "padding-top: 3.5rem; padding-bottom: 3.5rem;"
                },
                {
                    "class": ".px-14",
                    "properties": "padding-left: 3.5rem; padding-right: 3.5rem;"
                },
                {
                    "class": ".py-16",
                    "properties": "padding-top: 4rem; padding-bottom: 4rem;"
                },
                {
                    "class": ".px-16",
                    "properties": "padding-left: 4rem; padding-right: 4rem;"
                },
                {
                    "class": ".py-20",
                    "properties": "padding-top: 5rem; padding-bottom: 5rem;"
                },
                {
                    "class": ".px-20",
                    "properties": "padding-left: 5rem; padding-right: 5rem;"
                },
                {
                    "class": ".py-24",
                    "properties": "padding-top: 6rem; padding-bottom: 6rem;"
                },
                {
                    "class": ".px-24",
                    "properties": "padding-left: 6rem; padding-right: 6rem;"
                },
                {
                    "class": ".py-28",
                    "properties": "padding-top: 7rem; padding-bottom: 7rem;"
                },
                {
                    "class": ".px-28",
                    "properties": "padding-left: 7rem; padding-right: 7rem;"
                },
                {
                    "class": ".py-32",
                    "properties": "padding-top: 8rem; padding-bottom: 8rem;"
                },
                {
                    "class": ".px-32",
                    "properties": "padding-left: 8rem; padding-right: 8rem;"
                },
                {
                    "class": ".py-36",
                    "properties": "padding-top: 9rem; padding-bottom: 9rem;"
                },
                {
                    "class": ".px-36",
                    "properties": "padding-left: 9rem; padding-right: 9rem;"
                },
                {
                    "class": ".py-40",
                    "properties": "padding-top: 10rem; padding-bottom: 10rem;"
                },
                {
                    "class": ".px-40",
                    "properties": "padding-left: 10rem; padding-right: 10rem;"
                },
                {
                    "class": ".py-44",
                    "properties": "padding-top: 11rem; padding-bottom: 11rem;"
                },
                {
                    "class": ".px-44",
                    "properties": "padding-left: 11rem; padding-right: 11rem;"
                },
                {
                    "class": ".py-48",
                    "properties": "padding-top: 12rem; padding-bottom: 12rem;"
                },
                {
                    "class": ".px-48",
                    "properties": "padding-left: 12rem; padding-right: 12rem;"
                },
                {
                    "class": ".py-52",
                    "properties": "padding-top: 13rem; padding-bottom: 13rem;"
                },
                {
                    "class": ".px-52",
                    "properties": "padding-left: 13rem; padding-right: 13rem;"
                },
                {
                    "class": ".py-56",
                    "properties": "padding-top: 14rem; padding-bottom: 14rem;"
                },
                {
                    "class": ".px-56",
                    "properties": "padding-left: 14rem; padding-right: 14rem;"
                },
                {
                    "class": ".py-60",
                    "properties": "padding-top: 15rem; padding-bottom: 15rem;"
                },
                {
                    "class": ".px-60",
                    "properties": "padding-left: 15rem; padding-right: 15rem;"
                },
                {
                    "class": ".py-64",
                    "properties": "padding-top: 16rem; padding-bottom: 16rem;"
                },
                {
                    "class": ".px-64",
                    "properties": "padding-left: 16rem; padding-right: 16rem;"
                },
                {
                    "class": ".py-70",
                    "properties": "padding-top: 18rem; padding-bottom: 18rem;"
                },
                {
                    "class": ".px-70",
                    "properties": "padding-left: 18rem; padding-right: 18rem;"
                },
                {
                    "class": ".py-80",
                    "properties": "padding-top: 20rem; padding-bottom: 20rem;"
                },
                {
                    "class": ".px-80",
                    "properties": "padding-left: 20rem; padding-right: 20rem;"
                },
                {
                    "class": ".py-96",
                    "properties": "padding-top: 24rem; padding-bottom: 24rem;"
                },
                {
                    "class": ".px-96",
                    "properties": "padding-left: 24rem; padding-right: 24rem;"
                },
                {
                    "class": ".py-px",
                    "properties": "padding-top: 1px; padding-bottom: 1px;"
                },
                {
                    "class": ".px-px",
                    "properties": "padding-left: 1px; padding-right: 1px;"
                },
                {
                    "class": ".pt-0",
                    "properties": "padding-top: 0;"
                },
                {
                    "class": ".pr-0",
                    "properties": "padding-right: 0;"
                },
                {
                    "class": ".pb-0",
                    "properties": "padding-bottom: 0;"
                },
                {
                    "class": ".pl-0",
                    "properties": "padding-left: 0;"
                },
                {
                    "class": ".pt-0.5",
                    "properties": "padding-top: 0.125rem;"
                },
                {
                    "class": ".pr-0.5",
                    "properties": "padding-right: 0.125rem;"
                },
                {
                    "class": ".pb-0.5",
                    "properties": "padding-bottom: 0.125rem;"
                },
                {
                    "class": ".pl-0.5",
                    "properties": "padding-left: 0.125rem;"
                },
                {
                    "class": ".pt-1",
                    "properties": "padding-top: 0.25rem;"
                },
                {
                    "class": ".pr-1",
                    "properties": "padding-right: 0.25rem;"
                },
                {
                    "class": ".pb-1",
                    "properties": "padding-bottom: 0.25rem;"
                },
                {
                    "class": ".pl-1",
                    "properties": "padding-left: 0.25rem;"
                },
                {
                    "class": ".pt-1.5",
                    "properties": "padding-top: 0.375rem;"
                },
                {
                    "class": ".pr-1.5",
                    "properties": "padding-right: 0.375rem;"
                },
                {
                    "class": ".pb-1.5",
                    "properties": "padding-bottom: 0.375rem;"
                },
                {
                    "class": ".pl-1.5",
                    "properties": "padding-left: 0.375rem;"
                },
                {
                    "class": ".pt-2",
                    "properties": "padding-top: 0.5rem;"
                },
                {
                    "class": ".pr-2",
                    "properties": "padding-right: 0.5rem;"
                },
                {
                    "class": ".pb-2",
                    "properties": "padding-bottom: 0.5rem;"
                },
                {
                    "class": ".pl-2",
                    "properties": "padding-left: 0.5rem;"
                },
                {
                    "class": ".pt-2.5",
                    "properties": "padding-top: 0.625rem;"
                },
                {
                    "class": ".pr-2.5",
                    "properties": "padding-right: 0.625rem;"
                },
                {
                    "class": ".pb-2.5",
                    "properties": "padding-bottom: 0.625rem;"
                },
                {
                    "class": ".pl-2.5",
                    "properties": "padding-left: 0.625rem;"
                },
                {
                    "class": ".pt-3",
                    "properties": "padding-top: 0.75rem;"
                },
                {
                    "class": ".pr-3",
                    "properties": "padding-right: 0.75rem;"
                },
                {
                    "class": ".pb-3",
                    "properties": "padding-bottom: 0.75rem;"
                },
                {
                    "class": ".pl-3",
                    "properties": "padding-left: 0.75rem;"
                },
                {
                    "class": ".pt-3.5",
                    "properties": "padding-top: 0.875rem;"
                },
                {
                    "class": ".pr-3.5",
                    "properties": "padding-right: 0.875rem;"
                },
                {
                    "class": ".pb-3.5",
                    "properties": "padding-bottom: 0.875rem;"
                },
                {
                    "class": ".pl-3.5",
                    "properties": "padding-left: 0.875rem;"
                },
                {
                    "class": ".pt-4",
                    "properties": "padding-top: 1rem;"
                },
                {
                    "class": ".pr-4",
                    "properties": "padding-right: 1rem;"
                },
                {
                    "class": ".pb-4",
                    "properties": "padding-bottom: 1rem;"
                },
                {
                    "class": ".pl-4",
                    "properties": "padding-left: 1rem;"
                },
                {
                    "class": ".pt-5",
                    "properties": "padding-top: 1.25rem;"
                },
                {
                    "class": ".pr-5",
                    "properties": "padding-right: 1.25rem;"
                },
                {
                    "class": ".pb-5",
                    "properties": "padding-bottom: 1.25rem;"
                },
                {
                    "class": ".pl-5",
                    "properties": "padding-left: 1.25rem;"
                },
                {
                    "class": ".pt-6",
                    "properties": "padding-top: 1.5rem;"
                },
                {
                    "class": ".pr-6",
                    "properties": "padding-right: 1.5rem;"
                },
                {
                    "class": ".pb-6",
                    "properties": "padding-bottom: 1.5rem;"
                },
                {
                    "class": ".pl-6",
                    "properties": "padding-left: 1.5rem;"
                },
                {
                    "class": ".pt-7",
                    "properties": "padding-top: 1.75rem;"
                },
                {
                    "class": ".pr-7",
                    "properties": "padding-right: 1.75rem;"
                },
                {
                    "class": ".pb-7",
                    "properties": "padding-bottom: 1.75rem;"
                },
                {
                    "class": ".pl-7",
                    "properties": "padding-left: 1.75rem;"
                },
                {
                    "class": ".pt-8",
                    "properties": "padding-top: 2rem;"
                },
                {
                    "class": ".pr-8",
                    "properties": "padding-right: 2rem;"
                },
                {
                    "class": ".pb-8",
                    "properties": "padding-bottom: 2rem;"
                },
                {
                    "class": ".pl-8",
                    "properties": "padding-left: 2rem;"
                },
                {
                    "class": ".pt-9",
                    "properties": "padding-top: 2.25rem;"
                },
                {
                    "class": ".pr-9",
                    "properties": "padding-right: 2.25rem;"
                },
                {
                    "class": ".pb-9",
                    "properties": "padding-bottom: 2.25rem;"
                },
                {
                    "class": ".pl-9",
                    "properties": "padding-left: 2.25rem;"
                },
                {
                    "class": ".pt-10",
                    "properties": "padding-top: 2.5rem;"
                },
                {
                    "class": ".pr-10",
                    "properties": "padding-right: 2.5rem;"
                },
                {
                    "class": ".pb-10",
                    "properties": "padding-bottom: 2.5rem;"
                },
                {
                    "class": ".pl-10",
                    "properties": "padding-left: 2.5rem;"
                },
                {
                    "class": ".pt-11",
                    "properties": "padding-top: 2.75rem;"
                },
                {
                    "class": ".pr-11",
                    "properties": "padding-right: 2.75rem;"
                },
                {
                    "class": ".pb-11",
                    "properties": "padding-bottom: 2.75rem;"
                },
                {
                    "class": ".pl-11",
                    "properties": "padding-left: 2.75rem;"
                },
                {
                    "class": ".pt-12",
                    "properties": "padding-top: 3rem;"
                },
                {
                    "class": ".pr-12",
                    "properties": "padding-right: 3rem;"
                },
                {
                    "class": ".pb-12",
                    "properties": "padding-bottom: 3rem;"
                },
                {
                    "class": ".pl-12",
                    "properties": "padding-left: 3rem;"
                },
                {
                    "class": ".pt-14",
                    "properties": "padding-top: 3.5rem;"
                },
                {
                    "class": ".pr-14",
                    "properties": "padding-right: 3.5rem;"
                },
                {
                    "class": ".pb-14",
                    "properties": "padding-bottom: 3.5rem;"
                },
                {
                    "class": ".pl-14",
                    "properties": "padding-left: 3.5rem;"
                },
                {
                    "class": ".pt-16",
                    "properties": "padding-top: 4rem;"
                },
                {
                    "class": ".pr-16",
                    "properties": "padding-right: 4rem;"
                },
                {
                    "class": ".pb-16",
                    "properties": "padding-bottom: 4rem;"
                },
                {
                    "class": ".pl-16",
                    "properties": "padding-left: 4rem;"
                },
                {
                    "class": ".pt-20",
                    "properties": "padding-top: 5rem;"
                },
                {
                    "class": ".pr-20",
                    "properties": "padding-right: 5rem;"
                },
                {
                    "class": ".pb-20",
                    "properties": "padding-bottom: 5rem;"
                },
                {
                    "class": ".pl-20",
                    "properties": "padding-left: 5rem;"
                },
                {
                    "class": ".pt-24",
                    "properties": "padding-top: 6rem;"
                },
                {
                    "class": ".pr-24",
                    "properties": "padding-right: 6rem;"
                },
                {
                    "class": ".pb-24",
                    "properties": "padding-bottom: 6rem;"
                },
                {
                    "class": ".pl-24",
                    "properties": "padding-left: 6rem;"
                },
                {
                    "class": ".pt-28",
                    "properties": "padding-top: 7rem;"
                },
                {
                    "class": ".pr-28",
                    "properties": "padding-right: 7rem;"
                },
                {
                    "class": ".pb-28",
                    "properties": "padding-bottom: 7rem;"
                },
                {
                    "class": ".pl-28",
                    "properties": "padding-left: 7rem;"
                },
                {
                    "class": ".pt-32",
                    "properties": "padding-top: 8rem;"
                },
                {
                    "class": ".pr-32",
                    "properties": "padding-right: 8rem;"
                },
                {
                    "class": ".pb-32",
                    "properties": "padding-bottom: 8rem;"
                },
                {
                    "class": ".pl-32",
                    "properties": "padding-left: 8rem;"
                },
                {
                    "class": ".pt-36",
                    "properties": "padding-top: 9rem;"
                },
                {
                    "class": ".pr-36",
                    "properties": "padding-right: 9rem;"
                },
                {
                    "class": ".pb-36",
                    "properties": "padding-bottom: 9rem;"
                },
                {
                    "class": ".pl-36",
                    "properties": "padding-left: 9rem;"
                },
                {
                    "class": ".pt-40",
                    "properties": "padding-top: 10rem;"
                },
                {
                    "class": ".pr-40",
                    "properties": "padding-right: 10rem;"
                },
                {
                    "class": ".pb-40",
                    "properties": "padding-bottom: 10rem;"
                },
                {
                    "class": ".pl-40",
                    "properties": "padding-left: 10rem;"
                },
                {
                    "class": ".pt-44",
                    "properties": "padding-top: 11rem;"
                },
                {
                    "class": ".pr-44",
                    "properties": "padding-right: 11rem;"
                },
                {
                    "class": ".pb-44",
                    "properties": "padding-bottom: 11rem;"
                },
                {
                    "class": ".pl-44",
                    "properties": "padding-left: 11rem;"
                },
                {
                    "class": ".pt-48",
                    "properties": "padding-top: 12rem;"
                },
                {
                    "class": ".pr-48",
                    "properties": "padding-right: 12rem;"
                },
                {
                    "class": ".pb-48",
                    "properties": "padding-bottom: 12rem;"
                },
                {
                    "class": ".pl-48",
                    "properties": "padding-left: 12rem;"
                },
                {
                    "class": ".pt-52",
                    "properties": "padding-top: 13rem;"
                },
                {
                    "class": ".pr-52",
                    "properties": "padding-right: 13rem;"
                },
                {
                    "class": ".pb-52",
                    "properties": "padding-bottom: 13rem;"
                },
                {
                    "class": ".pl-52",
                    "properties": "padding-left: 13rem;"
                },
                {
                    "class": ".pt-56",
                    "properties": "padding-top: 14rem;"
                },
                {
                    "class": ".pr-56",
                    "properties": "padding-right: 14rem;"
                },
                {
                    "class": ".pb-56",
                    "properties": "padding-bottom: 14rem;"
                },
                {
                    "class": ".pl-56",
                    "properties": "padding-left: 14rem;"
                },
                {
                    "class": ".pt-60",
                    "properties": "padding-top: 15rem;"
                },
                {
                    "class": ".pr-60",
                    "properties": "padding-right: 15rem;"
                },
                {
                    "class": ".pb-60",
                    "properties": "padding-bottom: 15rem;"
                },
                {
                    "class": ".pl-60",
                    "properties": "padding-left: 15rem;"
                },
                {
                    "class": ".pt-64",
                    "properties": "padding-top: 16rem;"
                },
                {
                    "class": ".pr-64",
                    "properties": "padding-right: 16rem;"
                },
                {
                    "class": ".pb-64",
                    "properties": "padding-bottom: 16rem;"
                },
                {
                    "class": ".pl-64",
                    "properties": "padding-left: 16rem;"
                },
                {
                    "class": ".pt-72",
                    "properties": "padding-top: 18rem;"
                },
                {
                    "class": ".pr-72",
                    "properties": "padding-right: 18rem;"
                },
                {
                    "class": ".pb-72",
                    "properties": "padding-bottom: 18rem;"
                },
                {
                    "class": ".pl-72",
                    "properties": "padding-left: 18rem;"
                },
                {
                    "class": ".pt-80",
                    "properties": "padding-top: 20rem;"
                },
                {
                    "class": ".pr-80",
                    "properties": "padding-right: 20rem;"
                },
                {
                    "class": ".pb-80",
                    "properties": "padding-bottom: 20rem;"
                },
                {
                    "class": ".pl-80",
                    "properties": "padding-left: 20rem;"
                },
                {
                    "class": ".pt-96",
                    "properties": "padding-top: 24rem;"
                },
                {
                    "class": ".pr-96",
                    "properties": "padding-right: 24rem;"
                },
                {
                    "class": ".pb-96",
                    "properties": "padding-bottom: 24rem;"
                },
                {
                    "class": ".pl-96",
                    "properties": "padding-left: 24rem;"
                },
                {
                    "class": ".pt-px",
                    "properties": "padding-top: 1px;"
                },
                {
                    "class": ".pr-px",
                    "properties": "padding-right: 1px;"
                },
                {
                    "class": ".pb-px",
                    "properties": "padding-bottom: 1px;"
                },
                {
                    "class": ".pl-px",
                    "properties": "padding-left: 1px;"
                }
            ]
        },
        {
            "title": "Margin",
            "classList": [
                {
                    "class": ".m-0",
                    "properties": "margin: 0;"
                },
                {
                    "class": ".m-0.5",
                    "properties": "margin: 0.125rem;"
                },
                {
                    "class": ".m-1",
                    "properties": "margin: 0.25rem;"
                },
                {
                    "class": ".m-1.5",
                    "properties": "margin: 0.375rem;"
                },
                {
                    "class": ".m-2",
                    "properties": "margin: 0.5rem;"
                },
                {
                    "class": ".m-2.5",
                    "properties": "margin: 0.625rem;"
                },
                {
                    "class": ".m-3",
                    "properties": "margin: 0.75rem;"
                },
                {
                    "class": ".m-3.5",
                    "properties": "margin: 0.875rem;"
                },
                {
                    "class": ".m-4",
                    "properties": "margin: 1rem;"
                },
                {
                    "class": ".m-5",
                    "properties": "margin: 1.25rem;"
                },
                {
                    "class": ".m-6",
                    "properties": "margin: 1.5rem;"
                },
                {
                    "class": ".m-8",
                    "properties": "margin: 2rem;"
                },
                {
                    "class": ".m-10",
                    "properties": "margin: 2.5rem;"
                },
                {
                    "class": ".m-11",
                    "properties": "margin: 2.75rem;"
                },
                {
                    "class": ".m-12",
                    "properties": "margin: 3rem;"
                },
                {
                    "class": ".m-14",
                    "properties": "margin: 3.5rem;"
                },
                {
                    "class": ".m-16",
                    "properties": "margin: 4rem;"
                },
                {
                    "class": ".m-20",
                    "properties": "margin: 5rem;"
                },
                {
                    "class": ".m-24",
                    "properties": "margin: 6rem;"
                },
                {
                    "class": ".m-28",
                    "properties": "margin: 7rem;"
                },
                {
                    "class": ".m-32",
                    "properties": "margin: 8rem;"
                },
                {
                    "class": ".m-36",
                    "properties": "margin: 9rem;"
                },
                {
                    "class": ".m-40",
                    "properties": "margin: 10rem;"
                },
                {
                    "class": ".m-44",
                    "properties": "margin: 11rem;"
                },
                {
                    "class": ".m-48",
                    "properties": "margin: 12rem;"
                },
                {
                    "class": ".m-52",
                    "properties": "margin: 13rem;"
                },
                {
                    "class": ".m-56",
                    "properties": "margin: 14rem;"
                },
                {
                    "class": ".m-64",
                    "properties": "margin: 16rem;"
                },
                {
                    "class": ".m-72",
                    "properties": "margin: 18rem;"
                },
                {
                    "class": ".m-80",
                    "properties": "margin: 20rem;"
                },
                {
                    "class": ".m-96",
                    "properties": "margin: 24rem;"
                },
                {
                    "class": ".m-px",
                    "properties": "margin: 1px;"
                },
                {
                    "class": ".my-0",
                    "properties": "margin-top: 0; margin-bottom: 0;"
                },
                {
                    "class": ".mx-0",
                    "properties": "margin-left: 0; margin-right: 0;"
                },
                {
                    "class": ".my-0.5",
                    "properties": "margin-top: 0.125rem; margin-bottom: 0.125rem;"
                },
                {
                    "class": ".mx-0.5",
                    "properties": "margin-left: 0.125rem; margin-right: 0.125rem;"
                },
                {
                    "class": ".my-1",
                    "properties": "margin-top: 0.25rem; margin-bottom: 0.25rem;"
                },
                {
                    "class": ".mx-1",
                    "properties": "margin-left: 0.25rem; margin-right: 0.25rem;"
                },
                {
                    "class": ".my-1.5",
                    "properties": "margin-top: 0.375rem; margin-bottom: 0.375rem;"
                },
                {
                    "class": ".mx-1.5",
                    "properties": "margin-left: 0.375rem; margin-right: 0.375rem;"
                },
                {
                    "class": ".my-2",
                    "properties": "margin-top: 0.5rem; margin-bottom: 0.5rem;"
                },
                {
                    "class": ".mx-2",
                    "properties": "margin-left: 0.5rem; margin-right: 0.5rem;"
                },
                {
                    "class": ".my-2.5",
                    "properties": "margin-top: 0.625rem; margin-bottom: 0.625rem;"
                },
                {
                    "class": ".mx-2.5",
                    "properties": "margin-left: 0.625rem; margin-right: 0.625rem;"
                },
                {
                    "class": ".my-3",
                    "properties": "margin-top: 0.75rem; margin-bottom: 0.75rem;"
                },
                {
                    "class": ".mx-3",
                    "properties": "margin-left: 0.75rem; margin-right: 0.75rem;"
                },
                {
                    "class": ".my-3.5",
                    "properties": "margin-top: 0.875rem; margin-bottom: 0.875rem;"
                },
                {
                    "class": ".mx-3.5",
                    "properties": "margin-left: 0.875rem; margin-right: 0.875rem;"
                },
                {
                    "class": ".my-4",
                    "properties": "margin-top: 1rem; margin-bottom: 1rem;"
                },
                {
                    "class": ".mx-4",
                    "properties": "margin-left: 1rem; margin-right: 1rem;"
                },
                {
                    "class": ".my-5",
                    "properties": "margin-top: 1.25rem; margin-bottom: 1.25rem;"
                },
                {
                    "class": ".mx-5",
                    "properties": "margin-left: 1.25rem; margin-right: 1.25rem;"
                },
                {
                    "class": ".my-6",
                    "properties": "margin-top: 1.5rem; margin-bottom: 1.5rem;"
                },
                {
                    "class": ".mx-6",
                    "properties": "margin-left: 1.5rem; margin-right: 1.5rem;"
                },
                {
                    "class": ".my-7",
                    "properties": "margin-top: 1.75rem; margin-bottom: 1.75rem;"
                },
                {
                    "class": ".mx-7",
                    "properties": "margin-left: 1.75rem; margin-right: 1.75rem;"
                },
                {
                    "class": ".my-8",
                    "properties": "margin-top: 2rem; margin-bottom: 2rem;"
                },
                {
                    "class": ".mx-8",
                    "properties": "margin-left: 2rem; margin-right: 2rem;"
                },
                {
                    "class": ".my-9",
                    "properties": "margin-top: 2.25rem; margin-bottom: 2.25rem;"
                },
                {
                    "class": ".mx-9",
                    "properties": "margin-left: 2.25rem; margin-right: 2.25rem;"
                },
                {
                    "class": ".my-10",
                    "properties": "margin-top: 2.5rem; margin-bottom: 2.5rem;"
                },
                {
                    "class": ".mx-10",
                    "properties": "margin-left: 2.5rem; margin-right: 2.5rem;"
                },
                {
                    "class": ".my-11",
                    "properties": "margin-top: 2.75rem; margin-bottom: 2.75rem;"
                },
                {
                    "class": ".mx-11",
                    "properties": "margin-left: 2.75rem; margin-right: 2.75rem;"
                },
                {
                    "class": ".my-12",
                    "properties": "margin-top: 3rem; margin-bottom: 3rem;"
                },
                {
                    "class": ".mx-12",
                    "properties": "margin-left: 3rem; margin-right: 3rem;"
                },
                {
                    "class": ".my-14",
                    "properties": "margin-top: 3.5rem; margin-bottom: 3.5rem;"
                },
                {
                    "class": ".mx-14",
                    "properties": "margin-left: 3.5rem; margin-right: 3.5rem;"
                },
                {
                    "class": ".my-16",
                    "properties": "margin-top: 4rem; margin-bottom: 4rem;"
                },
                {
                    "class": ".mx-16",
                    "properties": "margin-left: 4rem; margin-right: 4rem;"
                },
                {
                    "class": ".my-20",
                    "properties": "margin-top: 5rem; margin-bottom: 5rem;"
                },
                {
                    "class": ".mx-20",
                    "properties": "margin-left: 5rem; margin-right: 5rem;"
                },
                {
                    "class": ".my-24",
                    "properties": "margin-top: 6rem; margin-bottom: 6rem;"
                },
                {
                    "class": ".mx-24",
                    "properties": "margin-left: 6rem; margin-right: 6rem;"
                },
                {
                    "class": ".my-28",
                    "properties": "margin-top: 7rem; margin-bottom: 7rem;"
                },
                {
                    "class": ".mx-28",
                    "properties": "margin-left: 7rem; margin-right: 7rem;"
                },
                {
                    "class": ".my-32",
                    "properties": "margin-top: 8rem; margin-bottom: 8rem;"
                },
                {
                    "class": ".mx-32",
                    "properties": "margin-left: 8rem; margin-right: 8rem;"
                },
                {
                    "class": ".my-36",
                    "properties": "margin-top: 9rem; margin-bottom: 9rem;"
                },
                {
                    "class": ".mx-36",
                    "properties": "margin-left: 9rem; margin-right: 9rem;"
                },
                {
                    "class": ".my-40",
                    "properties": "margin-top: 10rem; margin-bottom: 10rem;"
                },
                {
                    "class": ".mx-40",
                    "properties": "margin-left: 10rem; margin-right: 10rem;"
                },
                {
                    "class": ".my-44",
                    "properties": "margin-top: 11rem; margin-bottom: 11rem;"
                },
                {
                    "class": ".mx-44",
                    "properties": "margin-left: 11rem; margin-right: 11rem;"
                },
                {
                    "class": ".my-48",
                    "properties": "margin-top: 12rem; margin-bottom: 12rem;"
                },
                {
                    "class": ".mx-48",
                    "properties": "margin-left: 12rem; margin-right: 12rem;"
                },
                {
                    "class": ".my-52",
                    "properties": "margin-top: 13rem; margin-bottom: 13rem;"
                },
                {
                    "class": ".mx-52",
                    "properties": "margin-left: 13rem; margin-right: 13rem;"
                },
                {
                    "class": ".my-56",
                    "properties": "margin-top: 14rem; margin-bottom: 14rem;"
                },
                {
                    "class": ".mx-56",
                    "properties": "margin-left: 14rem; margin-right: 14rem;"
                },
                {
                    "class": ".my-60",
                    "properties": "margin-top: 15rem; margin-bottom: 15rem;"
                },
                {
                    "class": ".mx-60",
                    "properties": "margin-left: 15rem; margin-right: 15rem;"
                },
                {
                    "class": ".my-64",
                    "properties": "margin-top: 16rem; margin-bottom: 16rem;"
                },
                {
                    "class": ".mx-64",
                    "properties": "margin-left: 16rem; margin-right: 16rem;"
                },
                {
                    "class": ".my-70",
                    "properties": "margin-top: 18rem; margin-bottom: 18rem;"
                },
                {
                    "class": ".mx-70",
                    "properties": "margin-left: 18rem; margin-right: 18rem;"
                },
                {
                    "class": ".my-80",
                    "properties": "margin-top: 20rem; margin-bottom: 20rem;"
                },
                {
                    "class": ".mx-80",
                    "properties": "margin-left: 20rem; margin-right: 20rem;"
                },
                {
                    "class": ".my-96",
                    "properties": "margin-top: 24rem; margin-bottom: 24rem;"
                },
                {
                    "class": ".mx-96",
                    "properties": "margin-left: 24rem; margin-right: 24rem;"
                },
                {
                    "class": ".my-px",
                    "properties": "margin-top: 1px; margin-bottom: 1px;"
                },
                {
                    "class": ".mx-px",
                    "properties": "margin-left: 1px; margin-right: 1px;"
                },
                {
                    "class": ".mt-0",
                    "properties": "margin-top: 0;"
                },
                {
                    "class": ".mr-0",
                    "properties": "margin-right: 0;"
                },
                {
                    "class": ".mb-0",
                    "properties": "margin-bottom: 0;"
                },
                {
                    "class": ".ml-0",
                    "properties": "margin-left: 0;"
                },
                {
                    "class": ".mt-0.5",
                    "properties": "margin-top: 0.125rem;"
                },
                {
                    "class": ".mr-0.5",
                    "properties": "margin-right: 0.125rem;"
                },
                {
                    "class": ".mb-0.5",
                    "properties": "margin-bottom: 0.125rem;"
                },
                {
                    "class": ".ml-0.5",
                    "properties": "margin-left: 0.125rem;"
                },
                {
                    "class": ".mt-1",
                    "properties": "margin-top: 0.25rem;"
                },
                {
                    "class": ".mr-1",
                    "properties": "margin-right: 0.25rem;"
                },
                {
                    "class": ".mb-1",
                    "properties": "margin-bottom: 0.25rem;"
                },
                {
                    "class": ".ml-1",
                    "properties": "margin-left: 0.25rem;"
                },
                {
                    "class": ".mt-1.5",
                    "properties": "margin-top: 0.375rem;"
                },
                {
                    "class": ".mr-1.5",
                    "properties": "margin-right: 0.375rem;"
                },
                {
                    "class": ".mb-1.5",
                    "properties": "margin-bottom: 0.375rem;"
                },
                {
                    "class": ".ml-1.5",
                    "properties": "margin-left: 0.375rem;"
                },
                {
                    "class": ".mt-2",
                    "properties": "margin-top: 0.5rem;"
                },
                {
                    "class": ".mr-2",
                    "properties": "margin-right: 0.5rem;"
                },
                {
                    "class": ".mb-2",
                    "properties": "margin-bottom: 0.5rem;"
                },
                {
                    "class": ".ml-2",
                    "properties": "margin-left: 0.5rem;"
                },
                {
                    "class": ".mt-2.5",
                    "properties": "margin-top: 0.625rem;"
                },
                {
                    "class": ".mr-2.5",
                    "properties": "margin-right: 0.625rem;"
                },
                {
                    "class": ".mb-2.5",
                    "properties": "margin-bottom: 0.625rem;"
                },
                {
                    "class": ".ml-2.5",
                    "properties": "margin-left: 0.625rem;"
                },
                {
                    "class": ".mt-3",
                    "properties": "margin-top: 0.75rem;"
                },
                {
                    "class": ".mr-3",
                    "properties": "margin-right: 0.75rem;"
                },
                {
                    "class": ".mb-3",
                    "properties": "margin-bottom: 0.75rem;"
                },
                {
                    "class": ".ml-3",
                    "properties": "margin-left: 0.75rem;"
                },
                {
                    "class": ".mt-3.5",
                    "properties": "margin-top: 0.875rem;"
                },
                {
                    "class": ".mr-3.5",
                    "properties": "margin-right: 0.875rem;"
                },
                {
                    "class": ".mb-3.5",
                    "properties": "margin-bottom: 0.875rem;"
                },
                {
                    "class": ".ml-3.5",
                    "properties": "margin-left: 0.875rem;"
                },
                {
                    "class": ".mt-4",
                    "properties": "margin-top: 1rem;"
                },
                {
                    "class": ".mr-4",
                    "properties": "margin-right: 1rem;"
                },
                {
                    "class": ".mb-4",
                    "properties": "margin-bottom: 1rem;"
                },
                {
                    "class": ".ml-4",
                    "properties": "margin-left: 1rem;"
                },
                {
                    "class": ".mt-5",
                    "properties": "margin-top: 1.25rem;"
                },
                {
                    "class": ".mr-5",
                    "properties": "margin-right: 1.25rem;"
                },
                {
                    "class": ".mb-5",
                    "properties": "margin-bottom: 1.25rem;"
                },
                {
                    "class": ".ml-5",
                    "properties": "margin-left: 1.25rem;"
                },
                {
                    "class": ".mt-6",
                    "properties": "margin-top: 1.5rem;"
                },
                {
                    "class": ".mr-6",
                    "properties": "margin-right: 1.5rem;"
                },
                {
                    "class": ".mb-6",
                    "properties": "margin-bottom: 1.5rem;"
                },
                {
                    "class": ".ml-6",
                    "properties": "margin-left: 1.5rem;"
                },
                {
                    "class": ".mt-7",
                    "properties": "margin-top: 1.75rem;"
                },
                {
                    "class": ".mr-7",
                    "properties": "margin-right: 1.75rem;"
                },
                {
                    "class": ".mb-7",
                    "properties": "margin-bottom: 1.75rem;"
                },
                {
                    "class": ".ml-7",
                    "properties": "margin-left: 1.75rem;"
                },
                {
                    "class": ".mt-8",
                    "properties": "margin-top: 2rem;"
                },
                {
                    "class": ".mr-8",
                    "properties": "margin-right: 2rem;"
                },
                {
                    "class": ".mb-8",
                    "properties": "margin-bottom: 2rem;"
                },
                {
                    "class": ".ml-8",
                    "properties": "margin-left: 2rem;"
                },
                {
                    "class": ".mt-9",
                    "properties": "margin-top: 2.25rem;"
                },
                {
                    "class": ".mr-9",
                    "properties": "margin-right: 2.25rem;"
                },
                {
                    "class": ".mb-9",
                    "properties": "margin-bottom: 2.25rem;"
                },
                {
                    "class": ".ml-9",
                    "properties": "margin-left: 2.25rem;"
                },
                {
                    "class": ".mt-10",
                    "properties": "margin-top: 2.5rem;"
                },
                {
                    "class": ".mr-10",
                    "properties": "margin-right: 2.5rem;"
                },
                {
                    "class": ".mb-10",
                    "properties": "margin-bottom: 2.5rem;"
                },
                {
                    "class": ".ml-10",
                    "properties": "margin-left: 2.5rem;"
                },
                {
                    "class": ".mt-11",
                    "properties": "margin-top: 2.75rem;"
                },
                {
                    "class": ".mr-11",
                    "properties": "margin-right: 2.75rem;"
                },
                {
                    "class": ".mb-11",
                    "properties": "margin-bottom: 2.75rem;"
                },
                {
                    "class": ".ml-11",
                    "properties": "margin-left: 2.75rem;"
                },
                {
                    "class": ".mt-12",
                    "properties": "margin-top: 3rem;"
                },
                {
                    "class": ".mr-12",
                    "properties": "margin-right: 3rem;"
                },
                {
                    "class": ".mb-12",
                    "properties": "margin-bottom: 3rem;"
                },
                {
                    "class": ".ml-12",
                    "properties": "margin-left: 3rem;"
                },
                {
                    "class": ".mt-14",
                    "properties": "margin-top: 3.5rem;"
                },
                {
                    "class": ".mr-14",
                    "properties": "margin-right: 3.5rem;"
                },
                {
                    "class": ".mb-14",
                    "properties": "margin-bottom: 3.5rem;"
                },
                {
                    "class": ".ml-14",
                    "properties": "margin-left: 3.5rem;"
                },
                {
                    "class": ".mt-16",
                    "properties": "margin-top: 4rem;"
                },
                {
                    "class": ".mr-16",
                    "properties": "margin-right: 4rem;"
                },
                {
                    "class": ".mb-16",
                    "properties": "margin-bottom: 4rem;"
                },
                {
                    "class": ".ml-16",
                    "properties": "margin-left: 4rem;"
                },
                {
                    "class": ".mt-20",
                    "properties": "margin-top: 5rem;"
                },
                {
                    "class": ".mr-20",
                    "properties": "margin-right: 5rem;"
                },
                {
                    "class": ".mb-20",
                    "properties": "margin-bottom: 5rem;"
                },
                {
                    "class": ".ml-20",
                    "properties": "margin-left: 5rem;"
                },
                {
                    "class": ".mt-24",
                    "properties": "margin-top: 6rem;"
                },
                {
                    "class": ".mr-24",
                    "properties": "margin-right: 6rem;"
                },
                {
                    "class": ".mb-24",
                    "properties": "margin-bottom: 6rem;"
                },
                {
                    "class": ".ml-24",
                    "properties": "margin-left: 6rem;"
                },
                {
                    "class": ".mt-28",
                    "properties": "margin-top: 7rem;"
                },
                {
                    "class": ".mr-28",
                    "properties": "margin-right: 7rem;"
                },
                {
                    "class": ".mb-28",
                    "properties": "margin-bottom: 7rem;"
                },
                {
                    "class": ".ml-28",
                    "properties": "margin-left: 7rem;"
                },
                {
                    "class": ".mt-32",
                    "properties": "margin-top: 8rem;"
                },
                {
                    "class": ".mr-32",
                    "properties": "margin-right: 8rem;"
                },
                {
                    "class": ".mb-32",
                    "properties": "margin-bottom: 8rem;"
                },
                {
                    "class": ".ml-32",
                    "properties": "margin-left: 8rem;"
                },
                {
                    "class": ".mt-36",
                    "properties": "margin-top: 9rem;"
                },
                {
                    "class": ".mr-36",
                    "properties": "margin-right: 9rem;"
                },
                {
                    "class": ".mb-36",
                    "properties": "margin-bottom: 9rem;"
                },
                {
                    "class": ".ml-36",
                    "properties": "margin-left: 9rem;"
                },
                {
                    "class": ".mt-40",
                    "properties": "margin-top: 10rem;"
                },
                {
                    "class": ".mr-40",
                    "properties": "margin-right: 10rem;"
                },
                {
                    "class": ".mb-40",
                    "properties": "margin-bottom: 10rem;"
                },
                {
                    "class": ".ml-40",
                    "properties": "margin-left: 10rem;"
                },
                {
                    "class": ".mt-44",
                    "properties": "margin-top: 11rem;"
                },
                {
                    "class": ".mr-44",
                    "properties": "margin-right: 11rem;"
                },
                {
                    "class": ".mb-44",
                    "properties": "margin-bottom: 11rem;"
                },
                {
                    "class": ".ml-44",
                    "properties": "margin-left: 11rem;"
                },
                {
                    "class": ".mt-48",
                    "properties": "margin-top: 12rem;"
                },
                {
                    "class": ".mr-48",
                    "properties": "margin-right: 12rem;"
                },
                {
                    "class": ".mb-48",
                    "properties": "margin-bottom: 12rem;"
                },
                {
                    "class": ".ml-48",
                    "properties": "margin-left: 12rem;"
                },
                {
                    "class": ".mt-52",
                    "properties": "margin-top: 13rem;"
                },
                {
                    "class": ".mr-52",
                    "properties": "margin-right: 13rem;"
                },
                {
                    "class": ".mb-52",
                    "properties": "margin-bottom: 13rem;"
                },
                {
                    "class": ".ml-52",
                    "properties": "margin-left: 13rem;"
                },
                {
                    "class": ".mt-56",
                    "properties": "margin-top: 14rem;"
                },
                {
                    "class": ".mr-56",
                    "properties": "margin-right: 14rem;"
                },
                {
                    "class": ".mb-56",
                    "properties": "margin-bottom: 14rem;"
                },
                {
                    "class": ".ml-56",
                    "properties": "margin-left: 14rem;"
                },
                {
                    "class": ".mt-60",
                    "properties": "margin-top: 15rem;"
                },
                {
                    "class": ".mr-60",
                    "properties": "margin-right: 15rem;"
                },
                {
                    "class": ".mb-60",
                    "properties": "margin-bottom: 15rem;"
                },
                {
                    "class": ".ml-60",
                    "properties": "margin-left: 15rem;"
                },
                {
                    "class": ".mt-64",
                    "properties": "margin-top: 16rem;"
                },
                {
                    "class": ".mr-64",
                    "properties": "margin-right: 16rem;"
                },
                {
                    "class": ".mb-64",
                    "properties": "margin-bottom: 16rem;"
                },
                {
                    "class": ".ml-64",
                    "properties": "margin-left: 16rem;"
                },
                {
                    "class": ".mt-72",
                    "properties": "margin-top: 18rem;"
                },
                {
                    "class": ".mr-72",
                    "properties": "margin-right: 18rem;"
                },
                {
                    "class": ".mb-72",
                    "properties": "margin-bottom: 18rem;"
                },
                {
                    "class": ".ml-72",
                    "properties": "margin-left: 18rem;"
                },
                {
                    "class": ".mt-80",
                    "properties": "margin-top: 20rem;"
                },
                {
                    "class": ".mr-80",
                    "properties": "margin-right: 20rem;"
                },
                {
                    "class": ".mb-80",
                    "properties": "margin-bottom: 20rem;"
                },
                {
                    "class": ".ml-80",
                    "properties": "margin-left: 20rem;"
                },
                {
                    "class": ".mt-96",
                    "properties": "margin-top: 24rem;"
                },
                {
                    "class": ".mr-96",
                    "properties": "margin-right: 24rem;"
                },
                {
                    "class": ".mb-96",
                    "properties": "margin-bottom: 24rem;"
                },
                {
                    "class": ".ml-96",
                    "properties": "margin-left: 24rem;"
                },
                {
                    "class": ".mt-px",
                    "properties": "margin-top: 1px;"
                },
                {
                    "class": ".mr-px",
                    "properties": "margin-right: 1px;"
                },
                {
                    "class": ".mb-px",
                    "properties": "margin-bottom: 1px;"
                },
                {
                    "class": ".ml-px",
                    "properties": "margin-left: 1px;"
                },
                {
                    "class": ".-m-0",
                    "properties": "margin: 0;"
                },
                {
                    "class": ".-m-0.5",
                    "properties": "margin: -0.125rem;"
                },
                {
                    "class": ".-m-1",
                    "properties": "margin: -0.25rem;"
                },
                {
                    "class": ".-m-1.5",
                    "properties": "margin: -0.375rem;"
                },
                {
                    "class": ".-m-2",
                    "properties": "margin: -0.5rem;"
                },
                {
                    "class": ".-m-2.5",
                    "properties": "margin: -0.625rem;"
                },
                {
                    "class": ".-m-3",
                    "properties": "margin: -0.75rem;"
                },
                {
                    "class": ".-m-3.5",
                    "properties": "margin: -0.875rem;"
                },
                {
                    "class": ".-m-4",
                    "properties": "margin: -1rem;"
                },
                {
                    "class": ".-m-5",
                    "properties": "margin: -1.25rem;"
                },
                {
                    "class": ".-m-6",
                    "properties": "margin: -1.5rem;"
                },
                {
                    "class": ".-m-8",
                    "properties": "margin: -2rem;"
                },
                {
                    "class": ".-m-10",
                    "properties": "margin: -2.5rem;"
                },
                {
                    "class": ".-m-11",
                    "properties": "margin: -2.75rem;"
                },
                {
                    "class": ".-m-12",
                    "properties": "margin: -3rem;"
                },
                {
                    "class": ".-m-14",
                    "properties": "margin: -3.5rem;"
                },
                {
                    "class": ".-m-16",
                    "properties": "margin: -4rem;"
                },
                {
                    "class": ".-m-20",
                    "properties": "margin: -5rem;"
                },
                {
                    "class": ".-m-24",
                    "properties": "margin: -6rem;"
                },
                {
                    "class": ".-m-28",
                    "properties": "margin: -7rem;"
                },
                {
                    "class": ".-m-32",
                    "properties": "margin: -8rem;"
                },
                {
                    "class": ".-m-36",
                    "properties": "margin: -9rem;"
                },
                {
                    "class": ".-m-40",
                    "properties": "margin: -10rem;"
                },
                {
                    "class": ".-m-44",
                    "properties": "margin: -11rem;"
                },
                {
                    "class": ".-m-48",
                    "properties": "margin: -12rem;"
                },
                {
                    "class": ".-m-52",
                    "properties": "margin: -13rem;"
                },
                {
                    "class": ".-m-56",
                    "properties": "margin: -14rem;"
                },
                {
                    "class": ".-m-64",
                    "properties": "margin: -16rem;"
                },
                {
                    "class": ".-m-72",
                    "properties": "margin: -18rem;"
                },
                {
                    "class": ".-m-80",
                    "properties": "margin: -20rem;"
                },
                {
                    "class": ".-m-96",
                    "properties": "margin: -24rem;"
                },
                {
                    "class": ".-m-px",
                    "properties": "margin: -1px;"
                },
                {
                    "class": ".-my-0",
                    "properties": "margin-top: 0; margin-bottom: 0;"
                },
                {
                    "class": ".-mx-0",
                    "properties": "margin-left: 0; margin-right: 0;"
                },
                {
                    "class": ".-my-0.5",
                    "properties": "margin-top: -0.125rem; margin-bottom: -0.125rem;"
                },
                {
                    "class": ".-mx-0.5",
                    "properties": "margin-left: -0.125rem; margin-right: -0.125rem;"
                },
                {
                    "class": ".-my-1",
                    "properties": "margin-top: -0.25rem; margin-bottom: -0.25rem;"
                },
                {
                    "class": ".-mx-1",
                    "properties": "margin-left: -0.25rem; margin-right: -0.25rem;"
                },
                {
                    "class": ".-my-1.5",
                    "properties": "margin-top: -0.375rem; margin-bottom: -0.375rem;"
                },
                {
                    "class": ".-mx-1.5",
                    "properties": "margin-left: -0.375rem; margin-right: -0.375rem;"
                },
                {
                    "class": ".-my-2",
                    "properties": "margin-top: -0.5rem; margin-bottom: -0.5rem;"
                },
                {
                    "class": ".-mx-2",
                    "properties": "margin-left: -0.5rem; margin-right: -0.5rem;"
                },
                {
                    "class": ".-my-2.5",
                    "properties": "margin-top: -0.625rem; margin-bottom: -0.625rem;"
                },
                {
                    "class": ".-mx-2.5",
                    "properties": "margin-left: -0.625rem; margin-right: -0.625rem;"
                },
                {
                    "class": ".-my-3",
                    "properties": "margin-top: -0.75rem; margin-bottom: -0.75rem;"
                },
                {
                    "class": ".-mx-3",
                    "properties": "margin-left: -0.75rem; margin-right: -0.75rem;"
                },
                {
                    "class": ".-my-3.5",
                    "properties": "margin-top: -0.875rem; margin-bottom: -0.875rem;"
                },
                {
                    "class": ".-mx-3.5",
                    "properties": "margin-left: -0.875rem; margin-right: -0.875rem;"
                },
                {
                    "class": ".-my-4",
                    "properties": "margin-top: -1rem; margin-bottom: -1rem;"
                },
                {
                    "class": ".-mx-4",
                    "properties": "margin-left: -1rem; margin-right: -1rem;"
                },
                {
                    "class": ".-my-5",
                    "properties": "margin-top: -1.25rem; margin-bottom: -1.25rem;"
                },
                {
                    "class": ".-mx-5",
                    "properties": "margin-left: -1.25rem; margin-right: -1.25rem;"
                },
                {
                    "class": ".-my-6",
                    "properties": "margin-top: -1.5rem; margin-bottom: -1.5rem;"
                },
                {
                    "class": ".-mx-6",
                    "properties": "margin-left: -1.5rem; margin-right: -1.5rem;"
                },
                {
                    "class": ".-my-7",
                    "properties": "margin-top: 1.75rem; margin-bottom: 1.75rem;"
                },
                {
                    "class": ".-mx-7",
                    "properties": "margin-left: 1.75rem; margin-right: 1.75rem;"
                },
                {
                    "class": ".-my-8",
                    "properties": "margin-top: -2rem; margin-bottom: -2rem;"
                },
                {
                    "class": ".-mx-8",
                    "properties": "margin-left: -2rem; margin-right: -2rem;"
                },
                {
                    "class": ".-my-9",
                    "properties": "margin-top: 2.25rem; margin-bottom: 2.25rem;"
                },
                {
                    "class": ".-mx-9",
                    "properties": "margin-left: 2.25rem; margin-right: 2.25rem;"
                },
                {
                    "class": ".-my-10",
                    "properties": "margin-top: -2.5rem; margin-bottom: -2.5rem;"
                },
                {
                    "class": ".-mx-10",
                    "properties": "margin-left: -2.5rem; margin-right: -2.5rem;"
                },
                {
                    "class": ".-my-11",
                    "properties": "margin-top: -2.75rem; margin-bottom: -2.75rem;"
                },
                {
                    "class": ".-mx-11",
                    "properties": "margin-left: -2.75rem; margin-right: -2.75rem;"
                },
                {
                    "class": ".-my-12",
                    "properties": "margin-top: -3rem; margin-bottom: -3rem;"
                },
                {
                    "class": ".-mx-12",
                    "properties": "margin-left: -3rem; margin-right: -3rem;"
                },
                {
                    "class": ".-my-14",
                    "properties": "margin-top: -3.5rem; margin-bottom: -3.5rem;"
                },
                {
                    "class": ".-mx-14",
                    "properties": "margin-left: -3.5rem; margin-right: -3.5rem;"
                },
                {
                    "class": ".-my-16",
                    "properties": "margin-top: -4rem; margin-bottom: -4rem;"
                },
                {
                    "class": ".-mx-16",
                    "properties": "margin-left: -4rem; margin-right: -4rem;"
                },
                {
                    "class": ".-my-20",
                    "properties": "margin-top: -5rem; margin-bottom: -5rem;"
                },
                {
                    "class": ".-mx-20",
                    "properties": "margin-left: -5rem; margin-right: -5rem;"
                },
                {
                    "class": ".-my-24",
                    "properties": "margin-top: -6rem; margin-bottom: -6rem;"
                },
                {
                    "class": ".-mx-24",
                    "properties": "margin-left: -6rem; margin-right: -6rem;"
                },
                {
                    "class": ".-my-28",
                    "properties": "margin-top: -7rem; margin-bottom: -7rem;"
                },
                {
                    "class": ".-mx-28",
                    "properties": "margin-left: -7rem; margin-right: -7rem;"
                },
                {
                    "class": ".-my-32",
                    "properties": "margin-top: -8rem; margin-bottom: -8rem;"
                },
                {
                    "class": ".-mx-32",
                    "properties": "margin-left: -8rem; margin-right: -8rem;"
                },
                {
                    "class": ".-my-36",
                    "properties": "margin-top: -9rem; margin-bottom: -9rem;"
                },
                {
                    "class": ".-mx-36",
                    "properties": "margin-left: -9rem; margin-right: -9rem;"
                },
                {
                    "class": ".-my-40",
                    "properties": "margin-top: -10rem; margin-bottom: -10rem;"
                },
                {
                    "class": ".-mx-40",
                    "properties": "margin-left: -10rem; margin-right: -10rem;"
                },
                {
                    "class": ".-my-44",
                    "properties": "margin-top: -11rem; margin-bottom: -11rem;"
                },
                {
                    "class": ".-mx-44",
                    "properties": "margin-left: -11rem; margin-right: -11rem;"
                },
                {
                    "class": ".-my-48",
                    "properties": "margin-top: -12rem; margin-bottom: -12rem;"
                },
                {
                    "class": ".-mx-48",
                    "properties": "margin-left: -12rem; margin-right: -12rem;"
                },
                {
                    "class": ".-my-52",
                    "properties": "margin-top: -13rem; margin-bottom: -13rem;"
                },
                {
                    "class": ".-mx-52",
                    "properties": "margin-left: -13rem; margin-right: -13rem;"
                },
                {
                    "class": ".-my-56",
                    "properties": "margin-top: -14rem; margin-bottom: -14rem;"
                },
                {
                    "class": ".-mx-56",
                    "properties": "margin-left: -14rem; margin-right: -14rem;"
                },
                {
                    "class": ".-my-60",
                    "properties": "margin-top: 15rem; margin-bottom: 15rem;"
                },
                {
                    "class": ".-mx-60",
                    "properties": "margin-left: 15rem; margin-right: 15rem;"
                },
                {
                    "class": ".-my-64",
                    "properties": "margin-top: -16rem; margin-bottom: -16rem;"
                },
                {
                    "class": ".-mx-64",
                    "properties": "margin-left: -16rem; margin-right: -16rem;"
                },
                {
                    "class": ".-my-70",
                    "properties": "margin-top: -18rem; margin-bottom: -18rem;"
                },
                {
                    "class": ".-mx-70",
                    "properties": "margin-left: -18rem; margin-right: -18rem;"
                },
                {
                    "class": ".-my-80",
                    "properties": "margin-top: -20rem; margin-bottom: -20rem;"
                },
                {
                    "class": ".-mx-80",
                    "properties": "margin-left: -20rem; margin-right: -20rem;"
                },
                {
                    "class": ".-my-96",
                    "properties": "margin-top: -24rem; margin-bottom: -24rem;"
                },
                {
                    "class": ".-mx-96",
                    "properties": "margin-left: -24rem; margin-right: -24rem;"
                },
                {
                    "class": ".-my-px",
                    "properties": "margin-top: -1px; margin-bottom: -1px;"
                },
                {
                    "class": ".-mx-px",
                    "properties": "margin-left: -1px; margin-right: -1px;"
                },
                {
                    "class": ".-mt-0",
                    "properties": "margin-top: 0;"
                },
                {
                    "class": ".-mr-0",
                    "properties": "margin-right: 0;"
                },
                {
                    "class": ".-mb-0",
                    "properties": "margin-bottom: 0;"
                },
                {
                    "class": ".-ml-0",
                    "properties": "margin-left: 0;"
                },
                {
                    "class": ".-mt-0.5",
                    "properties": "margin-top: -0.125rem;"
                },
                {
                    "class": ".-mr-0.5",
                    "properties": "margin-right: -0.125rem;"
                },
                {
                    "class": ".-mb-0.5",
                    "properties": "margin-bottom: -0.125rem;"
                },
                {
                    "class": ".-ml-0.5",
                    "properties": "margin-left: -0.125rem;"
                },
                {
                    "class": ".-mt-1",
                    "properties": "margin-top: -0.25rem;"
                },
                {
                    "class": ".-mr-1",
                    "properties": "margin-right: -0.25rem;"
                },
                {
                    "class": ".-mb-1",
                    "properties": "margin-bottom: -0.25rem;"
                },
                {
                    "class": ".-ml-1",
                    "properties": "margin-left: -0.25rem;"
                },
                {
                    "class": ".-mt-1.5",
                    "properties": "margin-top: -0.375rem;"
                },
                {
                    "class": ".-mr-1.5",
                    "properties": "margin-right: -0.375rem;"
                },
                {
                    "class": ".-mb-1.5",
                    "properties": "margin-bottom: -0.375rem;"
                },
                {
                    "class": ".-ml-1.5",
                    "properties": "margin-left: -0.375rem;"
                },
                {
                    "class": ".-mt-2",
                    "properties": "margin-top: -0.5rem;"
                },
                {
                    "class": ".-mr-2",
                    "properties": "margin-right: -0.5rem;"
                },
                {
                    "class": ".-mb-2",
                    "properties": "margin-bottom: -0.5rem;"
                },
                {
                    "class": ".-ml-2",
                    "properties": "margin-left: -0.5rem;"
                },
                {
                    "class": ".-mt-2.5",
                    "properties": "margin-top: -0.625rem;"
                },
                {
                    "class": ".-mr-2.5",
                    "properties": "margin-right: -0.625rem;"
                },
                {
                    "class": ".-mb-2.5",
                    "properties": "margin-bottom: -0.625rem;"
                },
                {
                    "class": ".-ml-2.5",
                    "properties": "margin-left: -0.625rem;"
                },
                {
                    "class": ".-mt-3",
                    "properties": "margin-top: -0.75rem;"
                },
                {
                    "class": ".-mr-3",
                    "properties": "margin-right: -0.75rem;"
                },
                {
                    "class": ".-mb-3",
                    "properties": "margin-bottom: -0.75rem;"
                },
                {
                    "class": ".-ml-3",
                    "properties": "margin-left: -0.75rem;"
                },
                {
                    "class": ".-mt-3.5",
                    "properties": "margin-top: -0.875rem;"
                },
                {
                    "class": ".-mr-3.5",
                    "properties": "margin-right: -0.875rem;"
                },
                {
                    "class": ".-mb-3.5",
                    "properties": "margin-bottom: -0.875rem;"
                },
                {
                    "class": ".-ml-3.5",
                    "properties": "margin-left: -0.875rem;"
                },
                {
                    "class": ".-mt-4",
                    "properties": "margin-top: -1rem;"
                },
                {
                    "class": ".-mr-4",
                    "properties": "margin-right: -1rem;"
                },
                {
                    "class": ".-mb-4",
                    "properties": "margin-bottom: -1rem;"
                },
                {
                    "class": ".-ml-4",
                    "properties": "margin-left: -1rem;"
                },
                {
                    "class": ".-mt-5",
                    "properties": "margin-top: -1.25rem;"
                },
                {
                    "class": ".-mr-5",
                    "properties": "margin-right: -1.25rem;"
                },
                {
                    "class": ".-mb-5",
                    "properties": "margin-bottom: -1.25rem;"
                },
                {
                    "class": ".-ml-5",
                    "properties": "margin-left: -1.25rem;"
                },
                {
                    "class": ".-mt-6",
                    "properties": "margin-top: -1.5rem;"
                },
                {
                    "class": ".-mr-6",
                    "properties": "margin-right: -1.5rem;"
                },
                {
                    "class": ".-mb-6",
                    "properties": "margin-bottom: -1.5rem;"
                },
                {
                    "class": ".-ml-6",
                    "properties": "margin-left: -1.5rem;"
                },
                {
                    "class": ".-mt-7",
                    "properties": "margin-top: 1.75rem;"
                },
                {
                    "class": ".-mr-7",
                    "properties": "margin-right: 1.75rem;"
                },
                {
                    "class": ".-mb-7",
                    "properties": "margin-bottom: 1.75rem;"
                },
                {
                    "class": ".-ml-7",
                    "properties": "margin-left: 1.75rem;"
                },
                {
                    "class": ".-mt-8",
                    "properties": "margin-top: -2rem;"
                },
                {
                    "class": ".-mr-8",
                    "properties": "margin-right: -2rem;"
                },
                {
                    "class": ".-mb-8",
                    "properties": "margin-bottom: -2rem;"
                },
                {
                    "class": ".-ml-8",
                    "properties": "margin-left: -2rem;"
                },
                {
                    "class": ".-mt-9",
                    "properties": "margin-top: 2.25rem;"
                },
                {
                    "class": ".-mr-9",
                    "properties": "margin-right: 2.25rem;"
                },
                {
                    "class": ".-mb-9",
                    "properties": "margin-bottom: 2.25rem;"
                },
                {
                    "class": ".-ml-9",
                    "properties": "margin-left: 2.25rem;"
                },
                {
                    "class": ".-mt-10",
                    "properties": "margin-top: -2.5rem;"
                },
                {
                    "class": ".-mr-10",
                    "properties": "margin-right: -2.5rem;"
                },
                {
                    "class": ".-mb-10",
                    "properties": "margin-bottom: -2.5rem;"
                },
                {
                    "class": ".-ml-10",
                    "properties": "margin-left: -2.5rem;"
                },
                {
                    "class": ".-mt-11",
                    "properties": "margin-top: -2.75rem;"
                },
                {
                    "class": ".-mr-11",
                    "properties": "margin-right: -2.75rem;"
                },
                {
                    "class": ".-mb-11",
                    "properties": "margin-bottom: -2.75rem;"
                },
                {
                    "class": ".-ml-11",
                    "properties": "margin-left: -2.75rem;"
                },
                {
                    "class": ".-mt-12",
                    "properties": "margin-top: -3rem;"
                },
                {
                    "class": ".-mr-12",
                    "properties": "margin-right: -3rem;"
                },
                {
                    "class": ".-mb-12",
                    "properties": "margin-bottom: -3rem;"
                },
                {
                    "class": ".-ml-12",
                    "properties": "margin-left: -3rem;"
                },
                {
                    "class": ".-mt-14",
                    "properties": "margin-top: -3.5rem;"
                },
                {
                    "class": ".-mr-14",
                    "properties": "margin-right: -3.5rem;"
                },
                {
                    "class": ".-mb-14",
                    "properties": "margin-bottom: -3.5rem;"
                },
                {
                    "class": ".-ml-14",
                    "properties": "margin-left: -3.5rem;"
                },
                {
                    "class": ".-mt-16",
                    "properties": "margin-top: -4rem;"
                },
                {
                    "class": ".-mr-16",
                    "properties": "margin-right: -4rem;"
                },
                {
                    "class": ".-mb-16",
                    "properties": "margin-bottom: -4rem;"
                },
                {
                    "class": ".-ml-16",
                    "properties": "margin-left: -4rem;"
                },
                {
                    "class": ".-mt-20",
                    "properties": "margin-top: -5rem;"
                },
                {
                    "class": ".-mr-20",
                    "properties": "margin-right: -5rem;"
                },
                {
                    "class": ".-mb-20",
                    "properties": "margin-bottom: -5rem;"
                },
                {
                    "class": ".-ml-20",
                    "properties": "margin-left: -5rem;"
                },
                {
                    "class": ".-mt-24",
                    "properties": "margin-top: -6rem;"
                },
                {
                    "class": ".-mr-24",
                    "properties": "margin-right: -6rem;"
                },
                {
                    "class": ".-mb-24",
                    "properties": "margin-bottom: -6rem;"
                },
                {
                    "class": ".-ml-24",
                    "properties": "margin-left: -6rem;"
                },
                {
                    "class": ".-mt-28",
                    "properties": "margin-top: -7rem;"
                },
                {
                    "class": ".-mr-28",
                    "properties": "margin-right: -7rem;"
                },
                {
                    "class": ".-mb-28",
                    "properties": "margin-bottom: -7rem;"
                },
                {
                    "class": ".-ml-28",
                    "properties": "margin-left: -7rem;"
                },
                {
                    "class": ".-mt-32",
                    "properties": "margin-top: -8rem;"
                },
                {
                    "class": ".-mr-32",
                    "properties": "margin-right: -8rem;"
                },
                {
                    "class": ".-mb-32",
                    "properties": "margin-bottom: -8rem;"
                },
                {
                    "class": ".-ml-32",
                    "properties": "margin-left: -8rem;"
                },
                {
                    "class": ".-mt-36",
                    "properties": "margin-top: -9rem;"
                },
                {
                    "class": ".-mr-36",
                    "properties": "margin-right: -9rem;"
                },
                {
                    "class": ".-mb-36",
                    "properties": "margin-bottom: -9rem;"
                },
                {
                    "class": ".-ml-36",
                    "properties": "margin-left: -9rem;"
                },
                {
                    "class": ".-mt-40",
                    "properties": "margin-top: -10rem;"
                },
                {
                    "class": ".-mr-40",
                    "properties": "margin-right: -10rem;"
                },
                {
                    "class": ".-mb-40",
                    "properties": "margin-bottom: -10rem;"
                },
                {
                    "class": ".-ml-40",
                    "properties": "margin-left: -10rem;"
                },
                {
                    "class": ".-mt-44",
                    "properties": "margin-top: -11rem;"
                },
                {
                    "class": ".-mr-44",
                    "properties": "margin-right: -11rem;"
                },
                {
                    "class": ".-mb-44",
                    "properties": "margin-bottom: -11rem;"
                },
                {
                    "class": ".-ml-44",
                    "properties": "margin-left: -11rem;"
                },
                {
                    "class": ".-mt-48",
                    "properties": "margin-top: -12rem;"
                },
                {
                    "class": ".-mr-48",
                    "properties": "margin-right: -12rem;"
                },
                {
                    "class": ".-mb-48",
                    "properties": "margin-bottom: -12rem;"
                },
                {
                    "class": ".-ml-48",
                    "properties": "margin-left: -12rem;"
                },
                {
                    "class": ".-mt-52",
                    "properties": "margin-top: -13rem;"
                },
                {
                    "class": ".-mr-52",
                    "properties": "margin-right: -13rem;"
                },
                {
                    "class": ".-mb-52",
                    "properties": "margin-bottom: -13rem;"
                },
                {
                    "class": ".-ml-52",
                    "properties": "margin-left: -13rem;"
                },
                {
                    "class": ".-mt-56",
                    "properties": "margin-top: -14rem;"
                },
                {
                    "class": ".-mr-56",
                    "properties": "margin-right: -14rem;"
                },
                {
                    "class": ".-mb-56",
                    "properties": "margin-bottom: -14rem;"
                },
                {
                    "class": ".-ml-56",
                    "properties": "margin-left: -14rem;"
                },
                {
                    "class": ".-mt-60",
                    "properties": "margin-top: 15rem;"
                },
                {
                    "class": ".-mr-60",
                    "properties": "margin-right: 15rem;"
                },
                {
                    "class": ".-mb-60",
                    "properties": "margin-bottom: 15rem;"
                },
                {
                    "class": ".-ml-60",
                    "properties": "margin-left: 15rem;"
                },
                {
                    "class": ".-mt-64",
                    "properties": "margin-top: -16rem;"
                },
                {
                    "class": ".-mr-64",
                    "properties": "margin-right: -16rem;"
                },
                {
                    "class": ".-mb-64",
                    "properties": "margin-bottom: -16rem;"
                },
                {
                    "class": ".-ml-64",
                    "properties": "margin-left: -16rem;"
                },
                {
                    "class": ".-mt-72",
                    "properties": "margin-top: -18rem;"
                },
                {
                    "class": ".-mr-72",
                    "properties": "margin-right: -18rem;"
                },
                {
                    "class": ".-mb-72",
                    "properties": "margin-bottom: -18rem;"
                },
                {
                    "class": ".-ml-72",
                    "properties": "margin-left: -18rem;"
                },
                {
                    "class": ".-mt-80",
                    "properties": "margin-top: -20rem;"
                },
                {
                    "class": ".-mr-80",
                    "properties": "margin-right: -20rem;"
                },
                {
                    "class": ".-mb-80",
                    "properties": "margin-bottom: -20rem;"
                },
                {
                    "class": ".-ml-80",
                    "properties": "margin-left: -20rem;"
                },
                {
                    "class": ".-mt-96",
                    "properties": "margin-top: -24rem;"
                },
                {
                    "class": ".-mr-96",
                    "properties": "margin-right: -24rem;"
                },
                {
                    "class": ".-mb-96",
                    "properties": "margin-bottom: -24rem;"
                },
                {
                    "class": ".-ml-96",
                    "properties": "margin-left: -24rem;"
                },
                {
                    "class": ".-mt-px",
                    "properties": "margin-top: -1px;"
                },
                {
                    "class": ".-mr-px",
                    "properties": "margin-right: -1px;"
                },
                {
                    "class": ".-mb-px",
                    "properties": "margin-bottom: -1px;"
                },
                {
                    "class": ".-ml-px",
                    "properties": "margin-left: -1px;"
                }
            ]
        },
        {
            "title": "Space Between",
            "classList": [
                {
                    "class": ".space-x-0",
                    "properties": "margin-left: 0;"
                },
                {
                    "class": ".space-x-0.5",
                    "properties": "margin-left: 0.125rem;"
                },
                {
                    "class": ".space-x-1",
                    "properties": "margin-left: 0.25rem;"
                },
                {
                    "class": ".space-x-1.5",
                    "properties": "margin-left: 0.375rem;"
                },
                {
                    "class": ".space-x-2",
                    "properties": "margin-left: 0.5rem;"
                },
                {
                    "class": ".space-x-2.5",
                    "properties": "margin-left: 0.625rem;"
                },
                {
                    "class": ".space-x-3",
                    "properties": "margin-left: 0.75rem;"
                },
                {
                    "class": ".space-x-3",
                    "properties": "margin-left: 0.875rem;"
                },
                {
                    "class": ".space-x-4",
                    "properties": "margin-left: 1rem;"
                },
                {
                    "class": ".space-x-5",
                    "properties": "margin-left: 1.25rem;"
                },
                {
                    "class": ".space-x-6",
                    "properties": "margin-left: 1.5rem;"
                },
                {
                    "class": ".space-x-7",
                    "properties": "margin-left: 1.75rem;"
                },
                {
                    "class": ".space-x-8",
                    "properties": "margin-left: 2rem;"
                },
                {
                    "class": ".space-x-9",
                    "properties": "margin-left: 2.25rem;"
                },
                {
                    "class": ".space-x-10",
                    "properties": "margin-left: 2.5rem;"
                },
                {
                    "class": ".space-x-11",
                    "properties": "margin-left: 2.75rem;"
                },
                {
                    "class": ".space-x-12",
                    "properties": "margin-left: 3rem;"
                },
                {
                    "class": ".space-x-14",
                    "properties": "margin-left: 3.5rem;"
                },
                {
                    "class": ".space-x-16",
                    "properties": "margin-left: 4rem;"
                },
                {
                    "class": ".space-x-20",
                    "properties": "margin-left: 5rem;"
                },
                {
                    "class": ".space-x-24",
                    "properties": "margin-left: 6rem;"
                },
                {
                    "class": ".space-x-28",
                    "properties": "margin-left: 7rem;"
                },
                {
                    "class": ".space-x-32",
                    "properties": "margin-left: 8rem;"
                },
                {
                    "class": ".space-x-36",
                    "properties": "margin-left: 9rem;"
                },
                {
                    "class": ".space-x-40",
                    "properties": "margin-left: 10rem;"
                },
                {
                    "class": ".space-x-44",
                    "properties": "margin-left: 11rem;"
                },
                {
                    "class": ".space-x-48",
                    "properties": "margin-left: 12rem;"
                },
                {
                    "class": ".space-x-52",
                    "properties": "margin-left: 13rem;"
                },
                {
                    "class": ".space-x-56",
                    "properties": "margin-left: 14rem;"
                },
                {
                    "class": ".space-x-60",
                    "properties": "margin-left: 15rem;"
                },
                {
                    "class": ".space-x-64",
                    "properties": "margin-left: 16rem;"
                },
                {
                    "class": ".space-x-72",
                    "properties": "margin-left: 18rem;"
                },
                {
                    "class": ".space-x-80",
                    "properties": "margin-left: 20rem;"
                },
                {
                    "class": ".space-x-96",
                    "properties": "margin-left: 24rem;"
                },
                {
                    "class": ".space-x-px",
                    "properties": "margin-left: 1px;"
                },
                {
                    "class": ".-space-x-0",
                    "properties": "margin-left: 0;"
                },
                {
                    "class": ".-space-x-0.5",
                    "properties": "margin-left: -0.125rem;"
                },
                {
                    "class": ".-space-x-1",
                    "properties": "margin-left: -0.25rem;"
                },
                {
                    "class": ".-space-x-1.5",
                    "properties": "margin-left: -0.375rem;"
                },
                {
                    "class": ".-space-x-2",
                    "properties": "margin-left: -0.5rem;"
                },
                {
                    "class": ".-space-x-2.5",
                    "properties": "margin-left: -0.625rem;"
                },
                {
                    "class": ".-space-x-3",
                    "properties": "margin-left: -0.75rem;"
                },
                {
                    "class": ".-space-x-3",
                    "properties": "margin-left: -0.875rem;"
                },
                {
                    "class": ".-space-x-4",
                    "properties": "margin-left: -1rem;"
                },
                {
                    "class": ".-space-x-5",
                    "properties": "margin-left: -1.25rem;"
                },
                {
                    "class": ".-space-x-6",
                    "properties": "margin-left: -1.5rem;"
                },
                {
                    "class": ".-space-x-7",
                    "properties": "margin-left: -1.75rem;"
                },
                {
                    "class": ".-space-x-8",
                    "properties": "margin-left: -2rem;"
                },
                {
                    "class": ".-space-x-9",
                    "properties": "margin-left: -2.25rem;"
                },
                {
                    "class": ".-space-x-10",
                    "properties": "margin-left: -2.5rem;"
                },
                {
                    "class": ".-space-x-11",
                    "properties": "margin-left: -2.75rem;"
                },
                {
                    "class": ".-space-x-12",
                    "properties": "margin-left: -3rem;"
                },
                {
                    "class": ".-space-x-14",
                    "properties": "margin-left: -3.5rem;"
                },
                {
                    "class": ".-space-x-16",
                    "properties": "margin-left: -4rem;"
                },
                {
                    "class": ".-space-x-20",
                    "properties": "margin-left: -5rem;"
                },
                {
                    "class": ".-space-x-24",
                    "properties": "margin-left: -6rem;"
                },
                {
                    "class": ".-space-x-28",
                    "properties": "margin-left: -7rem;"
                },
                {
                    "class": ".-space-x-32",
                    "properties": "margin-left: -8rem;"
                },
                {
                    "class": ".-space-x-36",
                    "properties": "margin-left: -9rem;"
                },
                {
                    "class": ".-space-x-40",
                    "properties": "margin-left: -10rem;"
                },
                {
                    "class": ".-space-x-44",
                    "properties": "margin-left: -11rem;"
                },
                {
                    "class": ".-space-x-48",
                    "properties": "margin-left: -12rem;"
                },
                {
                    "class": ".-space-x-52",
                    "properties": "margin-left: -13rem;"
                },
                {
                    "class": ".-space-x-56",
                    "properties": "margin-left: -14rem;"
                },
                {
                    "class": ".-space-x-60",
                    "properties": "margin-left: -15rem;"
                },
                {
                    "class": ".-space-x-64",
                    "properties": "margin-left: -16rem;"
                },
                {
                    "class": ".-space-x-72",
                    "properties": "margin-left: -18rem;"
                },
                {
                    "class": ".-space-x-80",
                    "properties": "margin-left: -20rem;"
                },
                {
                    "class": ".-space-x-96",
                    "properties": "margin-left: -24rem;"
                },
                {
                    "class": ".-space-x-px",
                    "properties": "margin-left: -1px;"
                },
                {
                    "class": ".space-y-0",
                    "properties": "margin-top: 0;"
                },
                {
                    "class": ".space-y-0.5",
                    "properties": "margin-top: 0.125rem;"
                },
                {
                    "class": ".space-y-1",
                    "properties": "margin-top: 0.25rem;"
                },
                {
                    "class": ".space-y-1.5",
                    "properties": "margin-top: 0.375rem;"
                },
                {
                    "class": ".space-y-2",
                    "properties": "margin-top: 0.5rem;"
                },
                {
                    "class": ".space-y-2.5",
                    "properties": "margin-top: 0.625rem;"
                },
                {
                    "class": ".space-y-3",
                    "properties": "margin-top: 0.75rem;"
                },
                {
                    "class": ".space-y-3",
                    "properties": "margin-top: 0.875rem;"
                },
                {
                    "class": ".space-y-4",
                    "properties": "margin-top: 1rem;"
                },
                {
                    "class": ".space-y-5",
                    "properties": "margin-top: 1.25rem;"
                },
                {
                    "class": ".space-y-6",
                    "properties": "margin-top: 1.5rem;"
                },
                {
                    "class": ".space-y-7",
                    "properties": "margin-top: 1.75rem;"
                },
                {
                    "class": ".space-y-8",
                    "properties": "margin-top: 2rem;"
                },
                {
                    "class": ".space-y-9",
                    "properties": "margin-top: 2.25rem;"
                },
                {
                    "class": ".space-y-10",
                    "properties": "margin-top: 2.5rem;"
                },
                {
                    "class": ".space-y-11",
                    "properties": "margin-top: 2.75rem;"
                },
                {
                    "class": ".space-y-12",
                    "properties": "margin-top: 3rem;"
                },
                {
                    "class": ".space-y-14",
                    "properties": "margin-top: 3.5rem;"
                },
                {
                    "class": ".space-y-16",
                    "properties": "margin-top: 4rem;"
                },
                {
                    "class": ".space-y-20",
                    "properties": "margin-top: 5rem;"
                },
                {
                    "class": ".space-y-24",
                    "properties": "margin-top: 6rem;"
                },
                {
                    "class": ".space-y-28",
                    "properties": "margin-top: 7rem;"
                },
                {
                    "class": ".space-y-32",
                    "properties": "margin-top: 8rem;"
                },
                {
                    "class": ".space-y-36",
                    "properties": "margin-top: 9rem;"
                },
                {
                    "class": ".space-y-40",
                    "properties": "margin-top: 10rem;"
                },
                {
                    "class": ".space-y-44",
                    "properties": "margin-top: 11rem;"
                },
                {
                    "class": ".space-y-48",
                    "properties": "margin-top: 12rem;"
                },
                {
                    "class": ".space-y-52",
                    "properties": "margin-top: 13rem;"
                },
                {
                    "class": ".space-y-56",
                    "properties": "margin-top: 14rem;"
                },
                {
                    "class": ".space-y-60",
                    "properties": "margin-top: 15rem;"
                },
                {
                    "class": ".space-y-64",
                    "properties": "margin-top: 16rem;"
                },
                {
                    "class": ".space-y-72",
                    "properties": "margin-top: 18rem;"
                },
                {
                    "class": ".space-y-80",
                    "properties": "margin-top: 20rem;"
                },
                {
                    "class": ".space-y-96",
                    "properties": "margin-top: 24rem;"
                },
                {
                    "class": ".space-y-px",
                    "properties": "margin-top: 1px;"
                },
                {
                    "class": ".-space-y-0",
                    "properties": "margin-top: 0;"
                },
                {
                    "class": ".-space-y-0.5",
                    "properties": "margin-top: -0.125rem;"
                },
                {
                    "class": ".-space-y-1",
                    "properties": "margin-top: -0.25rem;"
                },
                {
                    "class": ".-space-y-1.5",
                    "properties": "margin-top: -0.375rem;"
                },
                {
                    "class": ".-space-y-2",
                    "properties": "margin-top: -0.5rem;"
                },
                {
                    "class": ".-space-y-2.5",
                    "properties": "margin-top: -0.625rem;"
                },
                {
                    "class": ".-space-y-3",
                    "properties": "margin-top: -0.75rem;"
                },
                {
                    "class": ".-space-y-3",
                    "properties": "margin-top: -0.875rem;"
                },
                {
                    "class": ".-space-y-4",
                    "properties": "margin-top: -1rem;"
                },
                {
                    "class": ".-space-y-5",
                    "properties": "margin-top: -1.25rem;"
                },
                {
                    "class": ".-space-y-6",
                    "properties": "margin-top: -1.5rem;"
                },
                {
                    "class": ".-space-y-7",
                    "properties": "margin-top: -1.75rem;"
                },
                {
                    "class": ".-space-y-8",
                    "properties": "margin-top: -2rem;"
                },
                {
                    "class": ".-space-y-9",
                    "properties": "margin-top: -2.25rem;"
                },
                {
                    "class": ".-space-y-10",
                    "properties": "margin-top: -2.5rem;"
                },
                {
                    "class": ".-space-y-11",
                    "properties": "margin-top: -2.75rem;"
                },
                {
                    "class": ".-space-y-12",
                    "properties": "margin-top: -3rem;"
                },
                {
                    "class": ".-space-y-14",
                    "properties": "margin-top: -3.5rem;"
                },
                {
                    "class": ".-space-y-16",
                    "properties": "margin-top: -4rem;"
                },
                {
                    "class": ".-space-y-20",
                    "properties": "margin-top: -5rem;"
                },
                {
                    "class": ".-space-y-24",
                    "properties": "margin-top: -6rem;"
                },
                {
                    "class": ".-space-y-28",
                    "properties": "margin-top: -7rem;"
                },
                {
                    "class": ".-space-y-32",
                    "properties": "margin-top: -8rem;"
                },
                {
                    "class": ".-space-y-36",
                    "properties": "margin-top: -9rem;"
                },
                {
                    "class": ".-space-y-40",
                    "properties": "margin-top: -10rem;"
                },
                {
                    "class": ".-space-y-44",
                    "properties": "margin-top: -11rem;"
                },
                {
                    "class": ".-space-y-48",
                    "properties": "margin-top: -12rem;"
                },
                {
                    "class": ".-space-y-52",
                    "properties": "margin-top: -13rem;"
                },
                {
                    "class": ".-space-y-56",
                    "properties": "margin-top: -14rem;"
                },
                {
                    "class": ".-space-y-60",
                    "properties": "margin-top: -15rem;"
                },
                {
                    "class": ".-space-y-64",
                    "properties": "margin-top: -16rem;"
                },
                {
                    "class": ".-space-y-72",
                    "properties": "margin-top: -18rem;"
                },
                {
                    "class": ".-space-y-80",
                    "properties": "margin-top: -20rem;"
                },
                {
                    "class": ".-space-y-96",
                    "properties": "margin-top: -24rem;"
                },
                {
                    "class": ".-space-y-px",
                    "properties": "margin-top: -1px;"
                },
                {
                    "class": ".space-x-reverse",
                    "properties": "--space-x-reverse: 1"
                },
                {
                    "class": ".space-y-reverse",
                    "properties": "--space-y-reverse: 1"
                }
            ]
        }
    ],
    "Backgrounds": [
        {
            "title": "Background Attachment",
            "classList": [
                {
                    "class": ".bg-fixed",
                    "properties": "background-attachment: fixed;"
                },
                {
                    "class": ".bg-local",
                    "properties": "background-attachment: local;"
                },
                {
                    "class": ".bg-scroll",
                    "properties": "background-attachment: scroll;"
                }
            ]
        },
        {
            "title": "Background Clip",
            "classList": [
                {
                    "class": ".bg-clip-border",
                    "properties": "background-clip: border-box;"
                },
                {
                    "class": ".bg-clip-padding",
                    "properties": "background-clip: padding-box;"
                },
                {
                    "class": ".bg-clip-content",
                    "properties": "background-clip: content-box;"
                },
                {
                    "class": ".bg-clip-text",
                    "properties": "background-clip: text;"
                }
            ]
        },
        {
            "title": "Background Color",
            "classList": [
                {
                    "class": ".bg-transparent",
                    "properties": "background-color: transparent;"
                },
                {
                    "class": ".bg-current",
                    "properties": "background-color: currentColor;"
                },
                {
                    "class": ".bg-black",
                    "properties": "background-color: #000000;"
                },
                {
                    "class": ".bg-white",
                    "properties": "background-color: #ffffff;"
                },
                {
                    "class": ".bg-gray-50",
                    "properties": "background-color: #F9FAFB;"
                },
                {
                    "class": ".bg-gray-100",
                    "properties": "background-color: #F3F4F6;"
                },
                {
                    "class": ".bg-gray-200",
                    "properties": "background-color: #E5E7EB;"
                },
                {
                    "class": ".bg-gray-300",
                    "properties": "background-color: #D1D5DB;"
                },
                {
                    "class": ".bg-gray-400",
                    "properties": "background-color: #9CA3AF;"
                },
                {
                    "class": ".bg-gray-500",
                    "properties": "background-color: #6B7280;"
                },
                {
                    "class": ".bg-gray-600",
                    "properties": "background-color: #6B7280;"
                },
                {
                    "class": ".bg-gray-700",
                    "properties": "background-color: #374151;"
                },
                {
                    "class": ".bg-gray-800",
                    "properties": "background-color: #1F2937;"
                },
                {
                    "class": ".bg-gray-900",
                    "properties": "background-color: #111827;"
                },
                {
                    "class": ".bg-red-50",
                    "properties": "background-color: #FEF2F2;"
                },
                {
                    "class": ".bg-red-100",
                    "properties": "background-color: #FEE2E2;"
                },
                {
                    "class": ".bg-red-200",
                    "properties": "background-color: #FECACA;"
                },
                {
                    "class": ".bg-red-300",
                    "properties": "background-color: #FCA5A5;"
                },
                {
                    "class": ".bg-red-400",
                    "properties": "background-color: #F87171;"
                },
                {
                    "class": ".bg-red-500",
                    "properties": "background-color: #EF4444;"
                },
                {
                    "class": ".bg-red-600",
                    "properties": "background-color: #DC2626;"
                },
                {
                    "class": ".bg-red-700",
                    "properties": "background-color: #B91C1C;"
                },
                {
                    "class": ".bg-red-800",
                    "properties": "background-color: #991B1B;"
                },
                {
                    "class": ".bg-red-900",
                    "properties": "background-color: #7F1D1D;"
                },
                {
                    "class": ".bg-yellow-50",
                    "properties": "background-color: #FFFBEB;"
                },
                {
                    "class": ".bg-yellow-100",
                    "properties": "background-color: #FEF3C7;"
                },
                {
                    "class": ".bg-yellow-200",
                    "properties": "background-color: #FDE68A;"
                },
                {
                    "class": ".bg-yellow-300",
                    "properties": "background-color: #FCD34D;"
                },
                {
                    "class": ".bg-yellow-400",
                    "properties": "background-color: #FBBF24;"
                },
                {
                    "class": ".bg-yellow-500",
                    "properties": "background-color: #F59E0B;"
                },
                {
                    "class": ".bg-yellow-600",
                    "properties": "background-color: #D97706;"
                },
                {
                    "class": ".bg-yellow-700",
                    "properties": "background-color: #B45309;"
                },
                {
                    "class": ".bg-yellow-800",
                    "properties": "background-color: #92400E;"
                },
                {
                    "class": ".bg-yellow-900",
                    "properties": "background-color: #78350F;"
                },
                {
                    "class": ".bg-green-50",
                    "properties": "background-color: #ECFDF5;"
                },
                {
                    "class": ".bg-green-100",
                    "properties": "background-color: #D1FAE5;"
                },
                {
                    "class": ".bg-green-200",
                    "properties": "background-color: #A7F3D0;"
                },
                {
                    "class": ".bg-green-300",
                    "properties": "background-color: #6EE7B7;"
                },
                {
                    "class": ".bg-green-400",
                    "properties": "background-color: #34D399;"
                },
                {
                    "class": ".bg-green-500",
                    "properties": "background-color: #10B981;"
                },
                {
                    "class": ".bg-green-600",
                    "properties": "background-color: #059669;"
                },
                {
                    "class": ".bg-green-700",
                    "properties": "background-color: #047857;"
                },
                {
                    "class": ".bg-green-800",
                    "properties": "background-color: #065F46;"
                },
                {
                    "class": ".bg-green-900",
                    "properties": "background-color: #064E3B;"
                },
                {
                    "class": ".bg-blue-50",
                    "properties": "background-color: #EFF6FF;"
                },
                {
                    "class": ".bg-blue-100",
                    "properties": "background-color: #DBEAFE;"
                },
                {
                    "class": ".bg-blue-200",
                    "properties": "background-color: #BFDBFE;"
                },
                {
                    "class": ".bg-blue-300",
                    "properties": "background-color: #93C5FD;"
                },
                {
                    "class": ".bg-blue-400",
                    "properties": "background-color: #60A5FA;"
                },
                {
                    "class": ".bg-blue-500",
                    "properties": "background-color: #3B82F6;"
                },
                {
                    "class": ".bg-blue-600",
                    "properties": "background-color: #2563EB;"
                },
                {
                    "class": ".bg-blue-700",
                    "properties": "background-color: #1D4ED8;"
                },
                {
                    "class": ".bg-blue-800",
                    "properties": "background-color: #1E40AF;"
                },
                {
                    "class": ".bg-blue-900",
                    "properties": "background-color: #1E3A8A;"
                },
                {
                    "class": ".bg-indigo-50",
                    "properties": "background-color: #EEF2FF;"
                },
                {
                    "class": ".bg-indigo-100",
                    "properties": "background-color: #E0E7FF;"
                },
                {
                    "class": ".bg-indigo-200",
                    "properties": "background-color: #C7D2FE;"
                },
                {
                    "class": ".bg-indigo-300",
                    "properties": "background-color: #A5B4FC;"
                },
                {
                    "class": ".bg-indigo-400",
                    "properties": "background-color: #818CF8;"
                },
                {
                    "class": ".bg-indigo-500",
                    "properties": "background-color: #6366F1;"
                },
                {
                    "class": ".bg-indigo-600",
                    "properties": "background-color: #4F46E5;"
                },
                {
                    "class": ".bg-indigo-700",
                    "properties": "background-color: #4338CA;"
                },
                {
                    "class": ".bg-indigo-800",
                    "properties": "background-color: #3730A3;"
                },
                {
                    "class": ".bg-indigo-900",
                    "properties": "background-color: #312E81;"
                },
                {
                    "class": ".bg-purple-50",
                    "properties": "background-color: #F5F3FF;"
                },
                {
                    "class": ".bg-purple-100",
                    "properties": "background-color: #EDE9FE;"
                },
                {
                    "class": ".bg-purple-200",
                    "properties": "background-color: #DDD6FE;"
                },
                {
                    "class": ".bg-purple-300",
                    "properties": "background-color: #C4B5FD;"
                },
                {
                    "class": ".bg-purple-400",
                    "properties": "background-color: #A78BFA;"
                },
                {
                    "class": ".bg-purple-500",
                    "properties": "background-color: #8B5CF6;"
                },
                {
                    "class": ".bg-purple-600",
                    "properties": "background-color: #7C3AED;"
                },
                {
                    "class": ".bg-purple-700",
                    "properties": "background-color: #6D28D9;"
                },
                {
                    "class": ".bg-purple-800",
                    "properties": "background-color: #5B21B6;"
                },
                {
                    "class": ".bg-purple-900",
                    "properties": "background-color: #4C1D95;"
                },
                {
                    "class": ".bg-pink-50",
                    "properties": "background-color: #FDF2F8;"
                },
                {
                    "class": ".bg-pink-100",
                    "properties": "background-color: #FCE7F3;"
                },
                {
                    "class": ".bg-pink-200",
                    "properties": "background-color: #FBCFE8;"
                },
                {
                    "class": ".bg-pink-300",
                    "properties": "background-color: #F9A8D4;"
                },
                {
                    "class": ".bg-pink-400",
                    "properties": "background-color: #F472B6;"
                },
                {
                    "class": ".bg-pink-500",
                    "properties": "background-color: #EC4899;"
                },
                {
                    "class": ".bg-pink-600",
                    "properties": "background-color: #DB2777;"
                },
                {
                    "class": ".bg-pink-700",
                    "properties": "background-color: #BE185D;"
                },
                {
                    "class": ".bg-pink-800",
                    "properties": "background-color: #9D174D;"
                },
                {
                    "class": ".bg-pink-900",
                    "properties": "background-color: #831843;"
                }
            ]
        },
        {
            "title": "Background Opacity",
            "classList": [
                {
                    "class": ".bg-opacity-0",
                    "properties": "--bg-opacity: 0;"
                },
                {
                    "class": ".bg-opacity-5",
                    "properties": "--bg-opacity: 0.5;"
                },
                {
                    "class": ".bg-opacity-10",
                    "properties": "--bg-opacity: 0.1;"
                },
                {
                    "class": ".bg-opacity-20",
                    "properties": "--bg-opacity: 0.2;"
                },
                {
                    "class": ".bg-opacity-25",
                    "properties": "--bg-opacity: 0.25;"
                },
                {
                    "class": ".bg-opacity-30",
                    "properties": "--bg-opacity: 0.3;"
                },
                {
                    "class": ".bg-opacity-40",
                    "properties": "--bg-opacity: 0.4;"
                },
                {
                    "class": ".bg-opacity-50",
                    "properties": "--bg-opacity: 0.5;"
                },
                {
                    "class": ".bg-opacity-60",
                    "properties": "--bg-opacity: 0.6;"
                },
                {
                    "class": ".bg-opacity-70",
                    "properties": "--bg-opacity: 0.7;"
                },
                {
                    "class": ".bg-opacity-75",
                    "properties": "--bg-opacity: 0.75;"
                },
                {
                    "class": ".bg-opacity-80",
                    "properties": "--bg-opacity: 0.8;"
                },
                {
                    "class": ".bg-opacity-90",
                    "properties": "--bg-opacity: 0.9;"
                },
                {
                    "class": ".bg-opacity-95",
                    "properties": "--bg-opacity: 0.95;"
                },
                {
                    "class": ".bg-opacity-100",
                    "properties": "--bg-opacity: 1;"
                }
            ]
        },
        {
            "title": "Background Origin",
            "classList": [
                {
                    "class": ".bg-origin-border",
                    "properties": "background-origin: border-box;"
                },
                {
                    "class": ".bg-origin-padding",
                    "properties": "background-origin: padding-box;"
                },
                {
                    "class": ".bg-origin-content",
                    "properties": "background-origin: content-box;"
                }
            ]
        },
        {
            "title": "Background Position",
            "classList": [
                {
                    "class": ".bg-bottom",
                    "properties": "background-position: bottom;"
                },
                {
                    "class": ".bg-center",
                    "properties": "background-position: center;"
                },
                {
                    "class": ".bg-left",
                    "properties": "background-position: left;"
                },
                {
                    "class": ".bg-left-bottom",
                    "properties": "background-position: left bottom;"
                },
                {
                    "class": ".bg-left-top",
                    "properties": "background-position: left top;"
                },
                {
                    "class": ".bg-right",
                    "properties": "background-position: right;"
                },
                {
                    "class": ".bg-right-bottom",
                    "properties": "background-position: right bottom;"
                },
                {
                    "class": ".bg-right-top",
                    "properties": "background-position: right top;"
                },
                {
                    "class": ".bg-top",
                    "properties": "background-position: top;"
                }
            ]
        },
        {
            "title": "Background Repeat",
            "classList": [
                {
                    "class": ".bg-repeat",
                    "properties": "background-repeat: repeat;"
                },
                {
                    "class": ".bg-no-repeat",
                    "properties": "background-repeat: no-repeat;"
                },
                {
                    "class": ".bg-repeat-x",
                    "properties": "background-repeat: repeat-x;"
                },
                {
                    "class": ".bg-repeat-y",
                    "properties": "background-repeat: repeat-y;"
                },
                {
                    "class": ".bg-repeat-round",
                    "properties": "background-repeat: round;"
                },
                {
                    "class": ".bg-repeat-space",
                    "properties": "background-repeat: space;"
                }
            ]
        },
        {
            "title": "Background Size",
            "classList": [
                {
                    "class": ".bg-auto",
                    "properties": "background-size: auto;"
                },
                {
                    "class": ".bg-cover",
                    "properties": "background-size: cover;"
                },
                {
                    "class": ".bg-contain",
                    "properties": "background-size: contain;"
                }
            ]
        },
        {
            "title": "Background Image",
            "classList": [
                {
                    "class": ".bg-none",
                    "properties": "background-image: none;"
                },
                {
                    "class": ".bg-gradient-to-t",
                    "properties": "background-image:background-image: background-image: linear-gradient(to top, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-tr",
                    "properties": "background-image: background-image: linear-gradient(to top right, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-r",
                    "properties": "background-image: background-image: linear-gradient(to right, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-br",
                    "properties": "background-image: background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-b",
                    "properties": "background-image: background-image: linear-gradient(to bottom, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-bl",
                    "properties": "background-image: background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-l",
                    "properties": "background-image: background-image: linear-gradient(to left, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-tl",
                    "properties": "background-image: background-image: linear-gradient(to top left, var(--tw-gradient-stops));"
                }
            ]
        },
        {
            "title": "Gradient Color Stops",
            "classList": [
                {
                    "class": ".from-transparent",
                    "properties": "background-color: transparent;"
                },
                {
                    "class": ".from-current",
                    "properties": "background-color: currentColor;"
                },
                {
                    "class": ".from-black",
                    "properties": "background-color: #000000;"
                },
                {
                    "class": ".from-white",
                    "properties": "background-color: #ffffff;"
                },
                {
                    "class": ".from-gray-50",
                    "properties": "background-color: #F9FAFB;"
                },
                {
                    "class": ".from-gray-100",
                    "properties": "background-color: #F3F4F6;"
                },
                {
                    "class": ".from-gray-200",
                    "properties": "background-color: #E5E7EB;"
                },
                {
                    "class": ".from-gray-300",
                    "properties": "background-color: #D1D5DB;"
                },
                {
                    "class": ".from-gray-400",
                    "properties": "background-color: #9CA3AF;"
                },
                {
                    "class": ".from-gray-500",
                    "properties": "background-color: #6B7280;"
                },
                {
                    "class": ".from-gray-600",
                    "properties": "background-color: #6B7280;"
                },
                {
                    "class": ".from-gray-700",
                    "properties": "background-color: #374151;"
                },
                {
                    "class": ".from-gray-800",
                    "properties": "background-color: #1F2937;"
                },
                {
                    "class": ".from-gray-900",
                    "properties": "background-color: #111827;"
                },
                {
                    "class": ".from-red-50",
                    "properties": "background-color: #FEF2F2;"
                },
                {
                    "class": ".from-red-100",
                    "properties": "background-color: #FEE2E2;"
                },
                {
                    "class": ".from-red-200",
                    "properties": "background-color: #FECACA;"
                },
                {
                    "class": ".from-red-300",
                    "properties": "background-color: #FCA5A5;"
                },
                {
                    "class": ".from-red-400",
                    "properties": "background-color: #F87171;"
                },
                {
                    "class": ".from-red-500",
                    "properties": "background-color: #EF4444;"
                },
                {
                    "class": ".from-red-600",
                    "properties": "background-color: #DC2626;"
                },
                {
                    "class": ".from-red-700",
                    "properties": "background-color: #B91C1C;"
                },
                {
                    "class": ".from-red-800",
                    "properties": "background-color: #991B1B;"
                },
                {
                    "class": ".from-red-900",
                    "properties": "background-color: #7F1D1D;"
                },
                {
                    "class": ".from-yellow-50",
                    "properties": "background-color: #FFFBEB;"
                },
                {
                    "class": ".from-yellow-100",
                    "properties": "background-color: #FEF3C7;"
                },
                {
                    "class": ".from-yellow-200",
                    "properties": "background-color: #FDE68A;"
                },
                {
                    "class": ".from-yellow-300",
                    "properties": "background-color: #FCD34D;"
                },
                {
                    "class": ".from-yellow-400",
                    "properties": "background-color: #FBBF24;"
                },
                {
                    "class": ".from-yellow-500",
                    "properties": "background-color: #F59E0B;"
                },
                {
                    "class": ".from-yellow-600",
                    "properties": "background-color: #D97706;"
                },
                {
                    "class": ".from-yellow-700",
                    "properties": "background-color: #B45309;"
                },
                {
                    "class": ".from-yellow-800",
                    "properties": "background-color: #92400E;"
                },
                {
                    "class": ".from-yellow-900",
                    "properties": "background-color: #78350F;"
                },
                {
                    "class": ".from-green-50",
                    "properties": "background-color: #ECFDF5;"
                },
                {
                    "class": ".from-green-100",
                    "properties": "background-color: #D1FAE5;"
                },
                {
                    "class": ".from-green-200",
                    "properties": "background-color: #A7F3D0;"
                },
                {
                    "class": ".from-green-300",
                    "properties": "background-color: #6EE7B7;"
                },
                {
                    "class": ".from-green-400",
                    "properties": "background-color: #34D399;"
                },
                {
                    "class": ".from-green-500",
                    "properties": "background-color: #10B981;"
                },
                {
                    "class": ".from-green-600",
                    "properties": "background-color: #059669;"
                },
                {
                    "class": ".from-green-700",
                    "properties": "background-color: #047857;"
                },
                {
                    "class": ".from-green-800",
                    "properties": "background-color: #065F46;"
                },
                {
                    "class": ".from-green-900",
                    "properties": "background-color: #064E3B;"
                },
                {
                    "class": ".from-blue-50",
                    "properties": "background-color: #EFF6FF;"
                },
                {
                    "class": ".from-blue-100",
                    "properties": "background-color: #DBEAFE;"
                },
                {
                    "class": ".from-blue-200",
                    "properties": "background-color: #BFDBFE;"
                },
                {
                    "class": ".from-blue-300",
                    "properties": "background-color: #93C5FD;"
                },
                {
                    "class": ".from-blue-400",
                    "properties": "background-color: #60A5FA;"
                },
                {
                    "class": ".from-blue-500",
                    "properties": "background-color: #3B82F6;"
                },
                {
                    "class": ".from-blue-600",
                    "properties": "background-color: #2563EB;"
                },
                {
                    "class": ".from-blue-700",
                    "properties": "background-color: #1D4ED8;"
                },
                {
                    "class": ".from-blue-800",
                    "properties": "background-color: #1E40AF;"
                },
                {
                    "class": ".from-blue-900",
                    "properties": "background-color: #1E3A8A;"
                },
                {
                    "class": ".from-indigo-50",
                    "properties": "background-color: #EEF2FF;"
                },
                {
                    "class": ".from-indigo-100",
                    "properties": "background-color: #E0E7FF;"
                },
                {
                    "class": ".from-indigo-200",
                    "properties": "background-color: #C7D2FE;"
                },
                {
                    "class": ".from-indigo-300",
                    "properties": "background-color: #A5B4FC;"
                },
                {
                    "class": ".from-indigo-400",
                    "properties": "background-color: #818CF8;"
                },
                {
                    "class": ".from-indigo-500",
                    "properties": "background-color: #6366F1;"
                },
                {
                    "class": ".from-indigo-600",
                    "properties": "background-color: #4F46E5;"
                },
                {
                    "class": ".from-indigo-700",
                    "properties": "background-color: #4338CA;"
                },
                {
                    "class": ".from-indigo-800",
                    "properties": "background-color: #3730A3;"
                },
                {
                    "class": ".from-indigo-900",
                    "properties": "background-color: #312E81;"
                },
                {
                    "class": ".from-purple-50",
                    "properties": "background-color: #F5F3FF;"
                },
                {
                    "class": ".from-purple-100",
                    "properties": "background-color: #EDE9FE;"
                },
                {
                    "class": ".from-purple-200",
                    "properties": "background-color: #DDD6FE;"
                },
                {
                    "class": ".from-purple-300",
                    "properties": "background-color: #C4B5FD;"
                },
                {
                    "class": ".from-purple-400",
                    "properties": "background-color: #A78BFA;"
                },
                {
                    "class": ".from-purple-500",
                    "properties": "background-color: #8B5CF6;"
                },
                {
                    "class": ".from-purple-600",
                    "properties": "background-color: #7C3AED;"
                },
                {
                    "class": ".from-purple-700",
                    "properties": "background-color: #6D28D9;"
                },
                {
                    "class": ".from-purple-800",
                    "properties": "background-color: #5B21B6;"
                },
                {
                    "class": ".from-purple-900",
                    "properties": "background-color: #4C1D95;"
                },
                {
                    "class": ".from-pink-50",
                    "properties": "background-color: #FDF2F8;"
                },
                {
                    "class": ".from-pink-100",
                    "properties": "background-color: #FCE7F3;"
                },
                {
                    "class": ".from-pink-200",
                    "properties": "background-color: #FBCFE8;"
                },
                {
                    "class": ".from-pink-300",
                    "properties": "background-color: #F9A8D4;"
                },
                {
                    "class": ".from-pink-400",
                    "properties": "background-color: #F472B6;"
                },
                {
                    "class": ".from-pink-500",
                    "properties": "background-color: #EC4899;"
                },
                {
                    "class": ".from-pink-600",
                    "properties": "background-color: #DB2777;"
                },
                {
                    "class": ".from-pink-700",
                    "properties": "background-color: #BE185D;"
                },
                {
                    "class": ".from-pink-800",
                    "properties": "background-color: #9D174D;"
                },
                {
                    "class": ".from-pink-900",
                    "properties": "background-color: #831843;"
                },
                {
                    "class": ".via-transparent",
                    "properties": "background-color: transparent;"
                },
                {
                    "class": ".via-current",
                    "properties": "background-color: currentColor;"
                },
                {
                    "class": ".via-black",
                    "properties": "background-color: #000000;"
                },
                {
                    "class": ".via-white",
                    "properties": "background-color: #ffffff;"
                },
                {
                    "class": ".via-gray-50",
                    "properties": "background-color: #F9FAFB;"
                },
                {
                    "class": ".via-gray-100",
                    "properties": "background-color: #F3F4F6;"
                },
                {
                    "class": ".via-gray-200",
                    "properties": "background-color: #E5E7EB;"
                },
                {
                    "class": ".via-gray-300",
                    "properties": "background-color: #D1D5DB;"
                },
                {
                    "class": ".via-gray-400",
                    "properties": "background-color: #9CA3AF;"
                },
                {
                    "class": ".via-gray-500",
                    "properties": "background-color: #6B7280;"
                },
                {
                    "class": ".via-gray-600",
                    "properties": "background-color: #6B7280;"
                },
                {
                    "class": ".via-gray-700",
                    "properties": "background-color: #374151;"
                },
                {
                    "class": ".via-gray-800",
                    "properties": "background-color: #1F2937;"
                },
                {
                    "class": ".via-gray-900",
                    "properties": "background-color: #111827;"
                },
                {
                    "class": ".via-red-50",
                    "properties": "background-color: #FEF2F2;"
                },
                {
                    "class": ".via-red-100",
                    "properties": "background-color: #FEE2E2;"
                },
                {
                    "class": ".via-red-200",
                    "properties": "background-color: #FECACA;"
                },
                {
                    "class": ".via-red-300",
                    "properties": "background-color: #FCA5A5;"
                },
                {
                    "class": ".via-red-400",
                    "properties": "background-color: #F87171;"
                },
                {
                    "class": ".via-red-500",
                    "properties": "background-color: #EF4444;"
                },
                {
                    "class": ".via-red-600",
                    "properties": "background-color: #DC2626;"
                },
                {
                    "class": ".via-red-700",
                    "properties": "background-color: #B91C1C;"
                },
                {
                    "class": ".via-red-800",
                    "properties": "background-color: #991B1B;"
                },
                {
                    "class": ".via-red-900",
                    "properties": "background-color: #7F1D1D;"
                },
                {
                    "class": ".via-yellow-50",
                    "properties": "background-color: #FFFBEB;"
                },
                {
                    "class": ".via-yellow-100",
                    "properties": "background-color: #FEF3C7;"
                },
                {
                    "class": ".via-yellow-200",
                    "properties": "background-color: #FDE68A;"
                },
                {
                    "class": ".via-yellow-300",
                    "properties": "background-color: #FCD34D;"
                },
                {
                    "class": ".via-yellow-400",
                    "properties": "background-color: #FBBF24;"
                },
                {
                    "class": ".via-yellow-500",
                    "properties": "background-color: #F59E0B;"
                },
                {
                    "class": ".via-yellow-600",
                    "properties": "background-color: #D97706;"
                },
                {
                    "class": ".via-yellow-700",
                    "properties": "background-color: #B45309;"
                },
                {
                    "class": ".via-yellow-800",
                    "properties": "background-color: #92400E;"
                },
                {
                    "class": ".via-yellow-900",
                    "properties": "background-color: #78350F;"
                },
                {
                    "class": ".via-green-50",
                    "properties": "background-color: #ECFDF5;"
                },
                {
                    "class": ".via-green-100",
                    "properties": "background-color: #D1FAE5;"
                },
                {
                    "class": ".via-green-200",
                    "properties": "background-color: #A7F3D0;"
                },
                {
                    "class": ".via-green-300",
                    "properties": "background-color: #6EE7B7;"
                },
                {
                    "class": ".via-green-400",
                    "properties": "background-color: #34D399;"
                },
                {
                    "class": ".via-green-500",
                    "properties": "background-color: #10B981;"
                },
                {
                    "class": ".via-green-600",
                    "properties": "background-color: #059669;"
                },
                {
                    "class": ".via-green-700",
                    "properties": "background-color: #047857;"
                },
                {
                    "class": ".via-green-800",
                    "properties": "background-color: #065F46;"
                },
                {
                    "class": ".via-green-900",
                    "properties": "background-color: #064E3B;"
                },
                {
                    "class": ".via-blue-50",
                    "properties": "background-color: #EFF6FF;"
                },
                {
                    "class": ".via-blue-100",
                    "properties": "background-color: #DBEAFE;"
                },
                {
                    "class": ".via-blue-200",
                    "properties": "background-color: #BFDBFE;"
                },
                {
                    "class": ".via-blue-300",
                    "properties": "background-color: #93C5FD;"
                },
                {
                    "class": ".via-blue-400",
                    "properties": "background-color: #60A5FA;"
                },
                {
                    "class": ".via-blue-500",
                    "properties": "background-color: #3B82F6;"
                },
                {
                    "class": ".via-blue-600",
                    "properties": "background-color: #2563EB;"
                },
                {
                    "class": ".via-blue-700",
                    "properties": "background-color: #1D4ED8;"
                },
                {
                    "class": ".via-blue-800",
                    "properties": "background-color: #1E40AF;"
                },
                {
                    "class": ".via-blue-900",
                    "properties": "background-color: #1E3A8A;"
                },
                {
                    "class": ".via-indigo-50",
                    "properties": "background-color: #EEF2FF;"
                },
                {
                    "class": ".via-indigo-100",
                    "properties": "background-color: #E0E7FF;"
                },
                {
                    "class": ".via-indigo-200",
                    "properties": "background-color: #C7D2FE;"
                },
                {
                    "class": ".via-indigo-300",
                    "properties": "background-color: #A5B4FC;"
                },
                {
                    "class": ".via-indigo-400",
                    "properties": "background-color: #818CF8;"
                },
                {
                    "class": ".via-indigo-500",
                    "properties": "background-color: #6366F1;"
                },
                {
                    "class": ".via-indigo-600",
                    "properties": "background-color: #4F46E5;"
                },
                {
                    "class": ".via-indigo-700",
                    "properties": "background-color: #4338CA;"
                },
                {
                    "class": ".via-indigo-800",
                    "properties": "background-color: #3730A3;"
                },
                {
                    "class": ".via-indigo-900",
                    "properties": "background-color: #312E81;"
                },
                {
                    "class": ".via-purple-50",
                    "properties": "background-color: #F5F3FF;"
                },
                {
                    "class": ".via-purple-100",
                    "properties": "background-color: #EDE9FE;"
                },
                {
                    "class": ".via-purple-200",
                    "properties": "background-color: #DDD6FE;"
                },
                {
                    "class": ".via-purple-300",
                    "properties": "background-color: #C4B5FD;"
                },
                {
                    "class": ".via-purple-400",
                    "properties": "background-color: #A78BFA;"
                },
                {
                    "class": ".via-purple-500",
                    "properties": "background-color: #8B5CF6;"
                },
                {
                    "class": ".via-purple-600",
                    "properties": "background-color: #7C3AED;"
                },
                {
                    "class": ".via-purple-700",
                    "properties": "background-color: #6D28D9;"
                },
                {
                    "class": ".via-purple-800",
                    "properties": "background-color: #5B21B6;"
                },
                {
                    "class": ".via-purple-900",
                    "properties": "background-color: #4C1D95;"
                },
                {
                    "class": ".via-pink-50",
                    "properties": "background-color: #FDF2F8;"
                },
                {
                    "class": ".via-pink-100",
                    "properties": "background-color: #FCE7F3;"
                },
                {
                    "class": ".via-pink-200",
                    "properties": "background-color: #FBCFE8;"
                },
                {
                    "class": ".via-pink-300",
                    "properties": "background-color: #F9A8D4;"
                },
                {
                    "class": ".via-pink-400",
                    "properties": "background-color: #F472B6;"
                },
                {
                    "class": ".via-pink-500",
                    "properties": "background-color: #EC4899;"
                },
                {
                    "class": ".via-pink-600",
                    "properties": "background-color: #DB2777;"
                },
                {
                    "class": ".via-pink-700",
                    "properties": "background-color: #BE185D;"
                },
                {
                    "class": ".via-pink-800",
                    "properties": "background-color: #9D174D;"
                },
                {
                    "class": ".via-pink-900",
                    "properties": "background-color: #831843;"
                },
                {
                    "class": ".to-transparent",
                    "properties": "background-color: transparent;"
                },
                {
                    "class": ".to-current",
                    "properties": "background-color: currentColor;"
                },
                {
                    "class": ".to-black",
                    "properties": "background-color: #000000;"
                },
                {
                    "class": ".to-white",
                    "properties": "background-color: #ffffff;"
                },
                {
                    "class": ".to-gray-50",
                    "properties": "background-color: #F9FAFB;"
                },
                {
                    "class": ".to-gray-100",
                    "properties": "background-color: #F3F4F6;"
                },
                {
                    "class": ".to-gray-200",
                    "properties": "background-color: #E5E7EB;"
                },
                {
                    "class": ".to-gray-300",
                    "properties": "background-color: #D1D5DB;"
                },
                {
                    "class": ".to-gray-400",
                    "properties": "background-color: #9CA3AF;"
                },
                {
                    "class": ".to-gray-500",
                    "properties": "background-color: #6B7280;"
                },
                {
                    "class": ".to-gray-600",
                    "properties": "background-color: #6B7280;"
                },
                {
                    "class": ".to-gray-700",
                    "properties": "background-color: #374151;"
                },
                {
                    "class": ".to-gray-800",
                    "properties": "background-color: #1F2937;"
                },
                {
                    "class": ".to-gray-900",
                    "properties": "background-color: #111827;"
                },
                {
                    "class": ".to-red-50",
                    "properties": "background-color: #FEF2F2;"
                },
                {
                    "class": ".to-red-100",
                    "properties": "background-color: #FEE2E2;"
                },
                {
                    "class": ".to-red-200",
                    "properties": "background-color: #FECACA;"
                },
                {
                    "class": ".to-red-300",
                    "properties": "background-color: #FCA5A5;"
                },
                {
                    "class": ".to-red-400",
                    "properties": "background-color: #F87171;"
                },
                {
                    "class": ".to-red-500",
                    "properties": "background-color: #EF4444;"
                },
                {
                    "class": ".to-red-600",
                    "properties": "background-color: #DC2626;"
                },
                {
                    "class": ".to-red-700",
                    "properties": "background-color: #B91C1C;"
                },
                {
                    "class": ".to-red-800",
                    "properties": "background-color: #991B1B;"
                },
                {
                    "class": ".to-red-900",
                    "properties": "background-color: #7F1D1D;"
                },
                {
                    "class": ".to-yellow-50",
                    "properties": "background-color: #FFFBEB;"
                },
                {
                    "class": ".to-yellow-100",
                    "properties": "background-color: #FEF3C7;"
                },
                {
                    "class": ".to-yellow-200",
                    "properties": "background-color: #FDE68A;"
                },
                {
                    "class": ".to-yellow-300",
                    "properties": "background-color: #FCD34D;"
                },
                {
                    "class": ".to-yellow-400",
                    "properties": "background-color: #FBBF24;"
                },
                {
                    "class": ".to-yellow-500",
                    "properties": "background-color: #F59E0B;"
                },
                {
                    "class": ".to-yellow-600",
                    "properties": "background-color: #D97706;"
                },
                {
                    "class": ".to-yellow-700",
                    "properties": "background-color: #B45309;"
                },
                {
                    "class": ".to-yellow-800",
                    "properties": "background-color: #92400E;"
                },
                {
                    "class": ".to-yellow-900",
                    "properties": "background-color: #78350F;"
                },
                {
                    "class": ".to-green-50",
                    "properties": "background-color: #ECFDF5;"
                },
                {
                    "class": ".to-green-100",
                    "properties": "background-color: #D1FAE5;"
                },
                {
                    "class": ".to-green-200",
                    "properties": "background-color: #A7F3D0;"
                },
                {
                    "class": ".to-green-300",
                    "properties": "background-color: #6EE7B7;"
                },
                {
                    "class": ".to-green-400",
                    "properties": "background-color: #34D399;"
                },
                {
                    "class": ".to-green-500",
                    "properties": "background-color: #10B981;"
                },
                {
                    "class": ".to-green-600",
                    "properties": "background-color: #059669;"
                },
                {
                    "class": ".to-green-700",
                    "properties": "background-color: #047857;"
                },
                {
                    "class": ".to-green-800",
                    "properties": "background-color: #065F46;"
                },
                {
                    "class": ".to-green-900",
                    "properties": "background-color: #064E3B;"
                },
                {
                    "class": ".to-blue-50",
                    "properties": "background-color: #EFF6FF;"
                },
                {
                    "class": ".to-blue-100",
                    "properties": "background-color: #DBEAFE;"
                },
                {
                    "class": ".to-blue-200",
                    "properties": "background-color: #BFDBFE;"
                },
                {
                    "class": ".to-blue-300",
                    "properties": "background-color: #93C5FD;"
                },
                {
                    "class": ".to-blue-400",
                    "properties": "background-color: #60A5FA;"
                },
                {
                    "class": ".to-blue-500",
                    "properties": "background-color: #3B82F6;"
                },
                {
                    "class": ".to-blue-600",
                    "properties": "background-color: #2563EB;"
                },
                {
                    "class": ".to-blue-700",
                    "properties": "background-color: #1D4ED8;"
                },
                {
                    "class": ".to-blue-800",
                    "properties": "background-color: #1E40AF;"
                },
                {
                    "class": ".to-blue-900",
                    "properties": "background-color: #1E3A8A;"
                },
                {
                    "class": ".to-indigo-50",
                    "properties": "background-color: #EEF2FF;"
                },
                {
                    "class": ".to-indigo-100",
                    "properties": "background-color: #E0E7FF;"
                },
                {
                    "class": ".to-indigo-200",
                    "properties": "background-color: #C7D2FE;"
                },
                {
                    "class": ".to-indigo-300",
                    "properties": "background-color: #A5B4FC;"
                },
                {
                    "class": ".to-indigo-400",
                    "properties": "background-color: #818CF8;"
                },
                {
                    "class": ".to-indigo-500",
                    "properties": "background-color: #6366F1;"
                },
                {
                    "class": ".to-indigo-600",
                    "properties": "background-color: #4F46E5;"
                },
                {
                    "class": ".to-indigo-700",
                    "properties": "background-color: #4338CA;"
                },
                {
                    "class": ".to-indigo-800",
                    "properties": "background-color: #3730A3;"
                },
                {
                    "class": ".to-indigo-900",
                    "properties": "background-color: #312E81;"
                },
                {
                    "class": ".to-purple-50",
                    "properties": "background-color: #F5F3FF;"
                },
                {
                    "class": ".to-purple-100",
                    "properties": "background-color: #EDE9FE;"
                },
                {
                    "class": ".to-purple-200",
                    "properties": "background-color: #DDD6FE;"
                },
                {
                    "class": ".to-purple-300",
                    "properties": "background-color: #C4B5FD;"
                },
                {
                    "class": ".to-purple-400",
                    "properties": "background-color: #A78BFA;"
                },
                {
                    "class": ".to-purple-500",
                    "properties": "background-color: #8B5CF6;"
                },
                {
                    "class": ".to-purple-600",
                    "properties": "background-color: #7C3AED;"
                },
                {
                    "class": ".to-purple-700",
                    "properties": "background-color: #6D28D9;"
                },
                {
                    "class": ".to-purple-800",
                    "properties": "background-color: #5B21B6;"
                },
                {
                    "class": ".to-purple-900",
                    "properties": "background-color: #4C1D95;"
                },
                {
                    "class": ".to-pink-50",
                    "properties": "background-color: #FDF2F8;"
                },
                {
                    "class": ".to-pink-100",
                    "properties": "background-color: #FCE7F3;"
                },
                {
                    "class": ".to-pink-200",
                    "properties": "background-color: #FBCFE8;"
                },
                {
                    "class": ".to-pink-300",
                    "properties": "background-color: #F9A8D4;"
                },
                {
                    "class": ".to-pink-400",
                    "properties": "background-color: #F472B6;"
                },
                {
                    "class": ".to-pink-500",
                    "properties": "background-color: #EC4899;"
                },
                {
                    "class": ".to-pink-600",
                    "properties": "background-color: #DB2777;"
                },
                {
                    "class": ".to-pink-700",
                    "properties": "background-color: #BE185D;"
                },
                {
                    "class": ".to-pink-800",
                    "properties": "background-color: #9D174D;"
                },
                {
                    "class": ".to-pink-900",
                    "properties": "background-color: #831843;"
                }
            ]
        }
    ],
    "Filters": [
        {
            "title": "Filter",
            "classList": [
                {
                    "class": ".filter",
                    "properties": "filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);"
                },
                {
                    "class": ".filter-none",
                    "properties": "filter: none;"
                }
            ]
        },
        {
            "title": "Blur",
            "classList": [
                {
                    "class": ".blur-none",
                    "properties": "--tw-blur: blur(0);"
                },
                {
                    "class": ".blur-sm",
                    "properties": "--tw-blur: blur(4px);"
                },
                {
                    "class": ".blur",
                    "properties": "--tw-blur: blur(8px);"
                },
                {
                    "class": ".blur-md",
                    "properties": "--tw-blur: blur(12px);"
                },
                {
                    "class": ".blur-lg",
                    "properties": "--tw-blur: blur(16px);"
                },
                {
                    "class": ".blur-xl",
                    "properties": "--tw-blur: blur(24px);"
                },
                {
                    "class": ".blur-2xl",
                    "properties": "--tw-blur: blur(40px);"
                },
                {
                    "class": ".blur-3xl",
                    "properties": "--tw-blur: blur(64px);"
                }
            ]
        },
        {
            "title": "Brightness",
            "classList": [
                {
                    "class": ".brightness-0",
                    "properties": "brightness: brightness(0);"
                },
                {
                    "class": ".brightness-50",
                    "properties": "brightness: brightness(.5);"
                },
                {
                    "class": ".brightness-75",
                    "properties": "brightness: brightness(.75);"
                },
                {
                    "class": ".brightness-90",
                    "properties": "brightness: brightness(.9);"
                },
                {
                    "class": ".brightness-95",
                    "properties": "brightness: brightness(.95);"
                },
                {
                    "class": ".brightness-100",
                    "properties": "brightness: brightness(1);"
                },
                {
                    "class": ".brightness-105",
                    "properties": "brightness: brightness(1.05);"
                },
                {
                    "class": ".brightness-110",
                    "properties": "brightness: brightness(1.1);"
                },
                {
                    "class": ".brightness-125",
                    "properties": "brightness: brightness(1.25);"
                },
                {
                    "class": ".brightness-150",
                    "properties": "brightness: brightness(1.5);"
                },
                {
                    "class": ".brightness-200",
                    "properties": "brightness: brightness(2);"
                }
            ]
        },
        {
            "title": "Contrast",
            "classList": [
                {
                    "class": ".contrast-0",
                    "properties": "contrast: contrast(0);"
                },
                {
                    "class": ".contrast-50",
                    "properties": "contrast: contrast(.5);"
                },
                {
                    "class": ".contrast-75",
                    "properties": "contrast: contrast(.75);"
                },
                {
                    "class": ".contrast-100",
                    "properties": "contrast: contrast(1);"
                },
                {
                    "class": ".contrast-125",
                    "properties": "contrast: contrast(1.25);"
                },
                {
                    "class": ".contrast-150",
                    "properties": "contrast: contrast(1.5);"
                },
                {
                    "class": ".contrast-200",
                    "properties": "contrast: contrast(2);"
                }
            ]
        },
        {
            "title": "Drop Shadow",
            "classList": [
                {
                    "class": ".drop-shadow-sm",
                    "properties": ""
                },
                {
                    "class": ".drop-shadow",
                    "properties": ""
                },
                {
                    "class": ".drop-shadow-md",
                    "properties": ""
                },
                {
                    "class": ".drop-shadow-lg",
                    "properties": ""
                },
                {
                    "class": ".drop-shadow-xl",
                    "properties": ""
                },
                {
                    "class": ".drop-shadow-2xl",
                    "properties": ""
                },
                {
                    "class": ".drop-shadow-none",
                    "properties": "drop-shadow: drop-shadow: drop-shadow(0 0 #0000);"
                }
            ]
        },
        {
            "title": "Grayscale",
            "classList": [
                {
                    "class": ".grayscale-0",
                    "properties": "grayscale: grayscale(0);"
                },
                {
                    "class": ".grayscale",
                    "properties": "grayscale: grayscale(1);"
                }
            ]
        },
        {
            "title": "Hue Rotate",
            "classList": [
                {
                    "class": ".-hue-rotate-180",
                    "properties": "hue-rotate: hue-rotate(-180deg);"
                },
                {
                    "class": ".-hue-rotate-90",
                    "properties": "hue-rotate: hue-rotate(-90deg);"
                },
                {
                    "class": ".-hue-rotate-60",
                    "properties": "hue-rotate: hue-rotate(-60deg);"
                },
                {
                    "class": ".-hue-rotate-30",
                    "properties": "hue-rotate: hue-rotate(-30deg);"
                },
                {
                    "class": ".-hue-rotate-15",
                    "properties": "hue-rotate: hue-rotate(-15deg);"
                },
                {
                    "class": ".hue-rotate-0",
                    "properties": "hue-rotate: hue-rotate(0deg);"
                },
                {
                    "class": ".hue-rotate-15",
                    "properties": "hue-rotate: hue-rotate(15deg);"
                },
                {
                    "class": ".hue-rotate-30",
                    "properties": "hue-rotate: hue-rotate(30deg);"
                },
                {
                    "class": ".hue-rotate-60",
                    "properties": "hue-rotate: hue-rotate(60deg);"
                },
                {
                    "class": ".hue-rotate-90",
                    "properties": "hue-rotate: hue-rotate(90deg);"
                },
                {
                    "class": ".hue-rotate-180",
                    "properties": "hue-rotate: hue-rotate(180deg);"
                }
            ]
        },
        {
            "title": "Invert",
            "classList": [
                {
                    "class": ".invert-0",
                    "properties": "invert: invert(0);"
                },
                {
                    "class": ".invert",
                    "properties": "invert: invert(1);"
                }
            ]
        },
        {
            "title": "Saturate",
            "classList": [
                {
                    "class": ".saturate-0",
                    "properties": "saturate: saturate(0);"
                },
                {
                    "class": ".saturate-50",
                    "properties": "saturate: saturate(.5);"
                },
                {
                    "class": ".saturate-100",
                    "properties": "saturate: saturate(1);"
                },
                {
                    "class": ".saturate-150",
                    "properties": "saturate: saturate(1.50);"
                },
                {
                    "class": ".saturate-200",
                    "properties": "saturate: saturate(2);"
                }
            ]
        },
        {
            "title": "Sepia",
            "classList": [
                {
                    "class": ".sepia-0",
                    "properties": "sepia: sepia(0);"
                },
                {
                    "class": ".sepia",
                    "properties": "sepia: sepia(1);"
                }
            ]
        },
        {
            "title": "Backdrop Filter",
            "classList": [
                {
                    "class": ".backdrop-filter",
                    "properties": "backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);"
                },
                {
                    "class": ".backdrop-filter-none",
                    "properties": "backdrop-filter: none;"
                }
            ]
        },
        {
            "title": "Backdrop Blur",
            "classList": [
                {
                    "class": ".backdrop-blur-0",
                    "properties": "backdrop-blur: blur(0);"
                },
                {
                    "class": ".backdrop-blur-sm",
                    "properties": "backdrop-blur: blur(4px);"
                },
                {
                    "class": ".backdrop-blur",
                    "properties": "backdrop-blur: blur(8px);"
                },
                {
                    "class": ".backdrop-blur-md",
                    "properties": "backdrop-blur: blur(12px);"
                },
                {
                    "class": ".backdrop-blur-lg",
                    "properties": "backdrop-blur: blur(16px);"
                },
                {
                    "class": ".backdrop-blur-xl",
                    "properties": "backdrop-blur: blur(24px);"
                },
                {
                    "class": ".backdrop-blur-2xl",
                    "properties": "backdrop-blur: blur(40px);"
                },
                {
                    "class": ".backdrop-blur-3xl",
                    "properties": "backdrop-blur: blur(64px);"
                }
            ]
        },
        {
            "title": "Backdrop Brightness",
            "classList": [
                {
                    "class": ".backdrop-brightness-0",
                    "properties": "backdrop-brightness: brightness(0);"
                },
                {
                    "class": ".backdrop-brightness-sm",
                    "properties": "backdrop-brightness: brightness(4px);"
                },
                {
                    "class": ".backdrop-brightness",
                    "properties": "backdrop-brightness: brightness(8px);"
                },
                {
                    "class": ".backdrop-brightness-md",
                    "properties": "backdrop-brightness: brightness(12px);"
                },
                {
                    "class": ".backdrop-brightness-lg",
                    "properties": "backdrop-brightness: brightness(16px);"
                },
                {
                    "class": ".backdrop-brightness-xl",
                    "properties": "backdrop-brightness: brightness(24px);"
                },
                {
                    "class": ".backdrop-brightness-2xl",
                    "properties": "backdrop-brightness: brightness(40px);"
                },
                {
                    "class": ".backdrop-brightness-3xl",
                    "properties": "backdrop-brightness: brightness(64px);"
                }
            ]
        },
        {
            "title": "Backdrop Contrast",
            "classList": [
                {
                    "class": ".backdrop-contrast-0",
                    "properties": "backdrop-contrast: contrast(0);"
                },
                {
                    "class": ".backdrop-contrast-50",
                    "properties": "backdrop-contrast: contrast(.5);"
                },
                {
                    "class": ".backdrop-contrast-75",
                    "properties": "backdrop-contrast: contrast(.75);"
                },
                {
                    "class": ".backdrop-contrast-100",
                    "properties": "backdrop-contrast: contrast(1);"
                },
                {
                    "class": ".backdrop-contrast-125",
                    "properties": "backdrop-contrast: contrast(1.25);"
                },
                {
                    "class": ".backdrop-contrast-150",
                    "properties": "backdrop-contrast: contrast(1.5);"
                },
                {
                    "class": ".backdrop-contrast-200",
                    "properties": "backdrop-contrast: contrast(2);"
                }
            ]
        },
        {
            "title": "Backdrop Grayscale",
            "classList": [
                {
                    "class": ".backdrop-grayscale-0",
                    "properties": "backdrop-grayscale: grayscale(0);"
                },
                {
                    "class": ".backdrop-grayscale",
                    "properties": "backdrop-grayscale: grayscale(1);"
                }
            ]
        },
        {
            "title": "Backdrop Hue Rotate",
            "classList": [
                {
                    "class": ".-backdrop-hue-rotate-180",
                    "properties": "backdrop-hue-rotate: hue-rotate(-180deg);"
                },
                {
                    "class": ".-backdrop-hue-rotate-90",
                    "properties": "backdrop-hue-rotate: hue-rotate(-90deg);"
                },
                {
                    "class": ".-backdrop-hue-rotate-60",
                    "properties": "backdrop-hue-rotate: hue-rotate(-60deg);"
                },
                {
                    "class": ".-backdrop-hue-rotate-30",
                    "properties": "backdrop-hue-rotate: hue-rotate(-30deg);"
                },
                {
                    "class": ".-backdrop-hue-rotate-15",
                    "properties": "backdrop-hue-rotate: hue-rotate(-15deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-0",
                    "properties": "backdrop-hue-rotate: hue-rotate(0deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-15",
                    "properties": "backdrop-hue-rotate: hue-rotate(15deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-30",
                    "properties": "backdrop-hue-rotate: hue-rotate(30deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-60",
                    "properties": "backdrop-hue-rotate: hue-rotate(60deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-90",
                    "properties": "backdrop-hue-rotate: hue-rotate(90deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-180",
                    "properties": "backdrop-hue-rotate: hue-rotate(180deg);"
                }
            ]
        },
        {
            "title": "Backdrop Invert",
            "classList": [
                {
                    "class": ".backdrop-invert-0",
                    "properties": "backdrop-invert: invert(0);"
                },
                {
                    "class": ".backdrop-invert",
                    "properties": "backdrop-invert: invert(1);"
                }
            ]
        },
        {
            "title": "Backdrop Opacity",
            "classList": [
                {
                    "class": ".backdrop-opacity-0",
                    "properties": "backdrop-opacity: opacity(0);"
                },
                {
                    "class": ".backdrop-opacity-5",
                    "properties": "backdrop-opacity: opacity(0.05);"
                },
                {
                    "class": ".backdrop-opacity-10",
                    "properties": "backdrop-opacity: opacity(0.1);"
                },
                {
                    "class": ".backdrop-opacity-20",
                    "properties": "backdrop-opacity: opacity(0.2);"
                },
                {
                    "class": ".backdrop-opacity-25",
                    "properties": "backdrop-opacity: opacity(0.25);"
                },
                {
                    "class": ".backdrop-opacity-30",
                    "properties": "backdrop-opacity: opacity(0.3);"
                },
                {
                    "class": ".backdrop-opacity-40",
                    "properties": "backdrop-opacity: opacity(0.4);"
                },
                {
                    "class": ".backdrop-opacity-50",
                    "properties": "backdrop-opacity: opacity(0.5);"
                },
                {
                    "class": ".backdrop-opacity-60",
                    "properties": "backdrop-opacity: opacity(0.6);"
                },
                {
                    "class": ".backdrop-opacity-70",
                    "properties": "backdrop-opacity: opacity(0.7);"
                },
                {
                    "class": ".backdrop-opacity-75",
                    "properties": "backdrop-opacity: opacity(0.75);"
                },
                {
                    "class": ".backdrop-opacity-80",
                    "properties": "backdrop-opacity: opacity(0.8);"
                },
                {
                    "class": ".backdrop-opacity-90",
                    "properties": "backdrop-opacity: opacity(0.9);"
                },
                {
                    "class": ".backdrop-opacity-95",
                    "properties": "backdrop-opacity: opacity(0.95);"
                },
                {
                    "class": ".backdrop-opacity-100",
                    "properties": "backdrop-opacity: opacity(1);"
                }
            ]
        },
        {
            "title": "Backdrop Saturate",
            "classList": [
                {
                    "class": ".backdrop-saturate-0",
                    "properties": "backdrop-saturate: saturate(0);"
                },
                {
                    "class": ".backdrop-saturate-50",
                    "properties": "backdrop-saturate: saturate(.5);"
                },
                {
                    "class": ".backdrop-saturate-100",
                    "properties": "backdrop-saturate: saturate(1);"
                },
                {
                    "class": ".backdrop-saturate-150",
                    "properties": "backdrop-saturate: saturate(1.50);"
                },
                {
                    "class": ".backdrop-saturate-200",
                    "properties": "backdrop-saturate: saturate(2);"
                }
            ]
        },
        {
            "title": "Backdrop Sepia",
            "classList": [
                {
                    "class": ".backdrop-sepia-0",
                    "properties": "backdrop-sepia: sepia(0);"
                },
                {
                    "class": ".backdrop-sepia",
                    "properties": "backdrop-sepia: sepia(1);"
                }
            ]
        }
    ],
    "Transforms": [
        {
            "title": "Transform Origin",
            "classList": [
                {
                    "class": ".origin-center",
                    "properties": "transform-origin: center;"
                },
                {
                    "class": ".origin-top",
                    "properties": "transform-origin: top;"
                },
                {
                    "class": ".origin-top-right",
                    "properties": "transform-origin: top right;"
                },
                {
                    "class": ".origin-right",
                    "properties": "transform-origin: right;"
                },
                {
                    "class": ".origin-bottom-right",
                    "properties": "transform-origin: bottom right;"
                },
                {
                    "class": ".origin-bottom",
                    "properties": "transform-origin: bottom;"
                },
                {
                    "class": ".origin-bottom-left",
                    "properties": "transform-origin: bottom left;"
                },
                {
                    "class": ".origin-left",
                    "properties": "transform-origin: left;"
                },
                {
                    "class": ".origin-top-left",
                    "properties": "transform-origin: top left;"
                }
            ]
        },
        {
            "title": "Scale",
            "classList": [
                {
                    "class": ".scale-0",
                    "properties": "--transform-scale-x: 0; --transform-scale-y: 0;"
                },
                {
                    "class": ".scale-50",
                    "properties": "--transform-scale-x: .5; --transform-scale-y: .5;"
                },
                {
                    "class": ".scale-75",
                    "properties": "--transform-scale-x: .75; --transform-scale-y: .75;"
                },
                {
                    "class": ".scale-90",
                    "properties": "--transform-scale-x: .9; --transform-scale-y: .9;"
                },
                {
                    "class": ".scale-95",
                    "properties": "--transform-scale-x: .95; --transform-scale-y: .95;"
                },
                {
                    "class": ".scale-100",
                    "properties": "--transform-scale-x: 1; --transform-scale-y: 1;"
                },
                {
                    "class": ".scale-105",
                    "properties": "--transform-scale-x: 1.05; --transform-scale-y: 1.05;"
                },
                {
                    "class": ".scale-110",
                    "properties": "--transform-scale-x: 1.1; --transform-scale-y: 1.1;"
                },
                {
                    "class": ".scale-125",
                    "properties": "--transform-scale-x: 1.25; --transform-scale-y: 1.25;"
                },
                {
                    "class": ".scale-150",
                    "properties": "--transform-scale-x: 1.5; --transform-scale-y: 1.5;"
                },
                {
                    "class": ".scale-x-0",
                    "properties": "--transform-scale-x: 0;"
                },
                {
                    "class": ".scale-x-50",
                    "properties": "--transform-scale-x: .5;"
                },
                {
                    "class": ".scale-x-75",
                    "properties": "--transform-scale-x: .75;"
                },
                {
                    "class": ".scale-x-90",
                    "properties": "--transform-scale-x: .9;"
                },
                {
                    "class": ".scale-x-95",
                    "properties": "--transform-scale-x: .95;"
                },
                {
                    "class": ".scale-x-100",
                    "properties": "--transform-scale-x: 1;"
                },
                {
                    "class": ".scale-x-105",
                    "properties": "--transform-scale-x: 1.05;"
                },
                {
                    "class": ".scale-x-110",
                    "properties": "--transform-scale-x: 1.1;"
                },
                {
                    "class": ".scale-x-125",
                    "properties": "--transform-scale-x: 1.25;"
                },
                {
                    "class": ".scale-x-150",
                    "properties": "--transform-scale-x: 1.5;"
                },
                {
                    "class": ".scale-y-0",
                    "properties": "--transform-scale-y: 0;"
                },
                {
                    "class": ".scale-y-50",
                    "properties": "--transform-scale-y: .5;"
                },
                {
                    "class": ".scale-y-75",
                    "properties": "--transform-scale-y: .75;"
                },
                {
                    "class": ".scale-y-90",
                    "properties": "--transform-scale-y: .9;"
                },
                {
                    "class": ".scale-y-95",
                    "properties": "--transform-scale-y: .95;"
                },
                {
                    "class": ".scale-y-100",
                    "properties": "--transform-scale-y: 1;"
                },
                {
                    "class": ".scale-y-105",
                    "properties": "--transform-scale-y: 1.05;"
                },
                {
                    "class": ".scale-y-110",
                    "properties": "--transform-scale-y: 1.1;"
                },
                {
                    "class": ".scale-y-125",
                    "properties": "--transform-scale-y: 1.25;"
                },
                {
                    "class": ".scale-y-150",
                    "properties": "--transform-scale-y: 1.5;"
                }
            ]
        },
        {
            "title": "Rotate",
            "classList": [
                {
                    "class": ".rotate-0",
                    "properties": "--transform-rotate: 0;"
                },
                {
                    "class": ".rotate-1",
                    "properties": "--transform-rotate: 1deg;"
                },
                {
                    "class": ".rotate-2",
                    "properties": "--transform-rotate: 2deg;"
                },
                {
                    "class": ".rotate-3",
                    "properties": "--transform-rotate: 3deg;"
                },
                {
                    "class": ".rotate-6",
                    "properties": "--transform-rotate: 6deg;"
                },
                {
                    "class": ".rotate-12",
                    "properties": "--transform-rotate: 12deg;"
                },
                {
                    "class": ".rotate-45",
                    "properties": "--transform-rotate: 45deg;"
                },
                {
                    "class": ".rotate-90",
                    "properties": "--transform-rotate: 90deg;"
                },
                {
                    "class": ".rotate-180",
                    "properties": "--transform-rotate: 180deg;"
                },
                {
                    "class": ".-rotate-180",
                    "properties": "--transform-rotate: -180deg;"
                },
                {
                    "class": ".-rotate-90",
                    "properties": "--transform-rotate: -90deg;"
                },
                {
                    "class": ".-rotate-45",
                    "properties": "--transform-rotate: -45deg;"
                },
                {
                    "class": ".-rotate-12",
                    "properties": "--transform-rotate: -12deg;"
                },
                {
                    "class": ".-rotate-6",
                    "properties": "--transform-rotate: -6deg;"
                },
                {
                    "class": ".-rotate-3",
                    "properties": "--transform-rotate: -3deg;"
                },
                {
                    "class": ".-rotate-2",
                    "properties": "--transform-rotate: -2deg;"
                },
                {
                    "class": ".-rotate-1",
                    "properties": "--transform-rotate: -1deg;"
                }
            ]
        },
        {
            "title": "Translate",
            "classList": [
                {
                    "class": ".translate-x-0",
                    "properties": "--transform-translate-x: 0;"
                },
                {
                    "class": ".translate-x-0.5",
                    "properties": "--transform-translate-x: 0.125rem;"
                },
                {
                    "class": ".translate-x-1",
                    "properties": "--transform-translate-x: 0.25rem;"
                },
                {
                    "class": ".translate-x-1.5",
                    "properties": "--transform-translate-x: 0.375rem;"
                },
                {
                    "class": ".translate-x-2",
                    "properties": "--transform-translate-x: 0.5rem;"
                },
                {
                    "class": ".translate-x-2.5",
                    "properties": "--transform-translate-x: 0.625rem;"
                },
                {
                    "class": ".translate-x-3",
                    "properties": "--transform-translate-x: 0.75rem;"
                },
                {
                    "class": ".translate-x-3.5",
                    "properties": "--transform-translate-x: 0.875rem;"
                },
                {
                    "class": ".translate-x-4",
                    "properties": "--transform-translate-x: 1rem;"
                },
                {
                    "class": ".translate-x-5",
                    "properties": "--transform-translate-x: 1.25rem;"
                },
                {
                    "class": ".translate-x-6",
                    "properties": "--transform-translate-x: 1.5rem;"
                },
                {
                    "class": ".translate-x-7",
                    "properties": "--transform-translate-x: 1.75rem;"
                },
                {
                    "class": ".translate-x-8",
                    "properties": "--transform-translate-x: 2rem;"
                },
                {
                    "class": ".translate-x-9",
                    "properties": "--transform-translate-x: 2.25rem;"
                },
                {
                    "class": ".translate-x-10",
                    "properties": "--transform-translate-x: 2.5rem;"
                },
                {
                    "class": ".translate-x-11",
                    "properties": "--transform-translate-x: 2.75rem;"
                },
                {
                    "class": ".translate-x-12",
                    "properties": "--transform-translate-x: 3rem;"
                },
                {
                    "class": ".translate-x-14",
                    "properties": "--transform-translate-x: 3.5rem;"
                },
                {
                    "class": ".translate-x-16",
                    "properties": "--transform-translate-x: 4rem;"
                },
                {
                    "class": ".translate-x-20",
                    "properties": "--transform-translate-x: 5rem;"
                },
                {
                    "class": ".translate-x-24",
                    "properties": "--transform-translate-x: 6rem;"
                },
                {
                    "class": ".translate-x-28",
                    "properties": "--transform-translate-x: 7rem;"
                },
                {
                    "class": ".translate-x-32",
                    "properties": "--transform-translate-x: 8rem;"
                },
                {
                    "class": ".translate-x-36",
                    "properties": "--transform-translate-x: 8rem;"
                },
                {
                    "class": ".translate-x-40",
                    "properties": "--transform-translate-x: 10rem;"
                },
                {
                    "class": ".translate-x-44",
                    "properties": "--transform-translate-x: 11rem;"
                },
                {
                    "class": ".translate-x-48",
                    "properties": "--transform-translate-x: 12rem;"
                },
                {
                    "class": ".translate-x-52",
                    "properties": "--transform-translate-x: 13rem;"
                },
                {
                    "class": ".translate-x-56",
                    "properties": "--transform-translate-x: 14rem;"
                },
                {
                    "class": ".translate-x-60",
                    "properties": "--transform-translate-x: 15rem;"
                },
                {
                    "class": ".translate-x-64",
                    "properties": "--transform-translate-x: 16rem;"
                },
                {
                    "class": ".translate-x-72",
                    "properties": "--transform-translate-x: 18rem;"
                },
                {
                    "class": ".translate-x-80",
                    "properties": "--transform-translate-x: 20rem;"
                },
                {
                    "class": ".translate-x-96",
                    "properties": "--transform-translate-x: 24rem;"
                },
                {
                    "class": ".translate-x-px",
                    "properties": "--transform-translate-x: 1px;"
                },
                {
                    "class": ".translate-x-1/2",
                    "properties": "--transform-translate-x: 50%;"
                },
                {
                    "class": ".translate-x-1/3",
                    "properties": "--transform-translate-x: 33.333333%;"
                },
                {
                    "class": ".translate-x-2/3",
                    "properties": "--transform-translate-x: 66.6666666%;"
                },
                {
                    "class": ".translate-x-1/4",
                    "properties": "--transform-translate-x: 25%;"
                },
                {
                    "class": ".translate-x-2/4",
                    "properties": "--transform-translate-x: 50%;"
                },
                {
                    "class": ".translate-x-3/4",
                    "properties": "--transform-translate-x: 75%;"
                },
                {
                    "class": ".translate-x-full",
                    "properties": "--transform-translate-x: 100%;"
                },
                {
                    "class": ".-translate-x-0",
                    "properties": "--transform-translate-x: 0;"
                },
                {
                    "class": ".-translate-x-0.5",
                    "properties": "--transform-translate-x: -0.125rem;"
                },
                {
                    "class": ".-translate-x-1",
                    "properties": "--transform-translate-x: -0.25rem;"
                },
                {
                    "class": ".-translate-x-1.5",
                    "properties": "--transform-translate-x: -0.375rem;"
                },
                {
                    "class": ".-translate-x-2",
                    "properties": "--transform-translate-x: -0.5rem;"
                },
                {
                    "class": ".-translate-x-2.5",
                    "properties": "--transform-translate-x: -0.625rem;"
                },
                {
                    "class": ".-translate-x-3",
                    "properties": "--transform-translate-x: -0.75rem;"
                },
                {
                    "class": ".-translate-x-3.5",
                    "properties": "--transform-translate-x: -0.875rem;"
                },
                {
                    "class": ".-translate-x-4",
                    "properties": "--transform-translate-x: -1rem;"
                },
                {
                    "class": ".-translate-x-5",
                    "properties": "--transform-translate-x: -1.25rem;"
                },
                {
                    "class": ".-translate-x-6",
                    "properties": "--transform-translate-x: -1.5rem;"
                },
                {
                    "class": ".-translate-x-7",
                    "properties": "--transform-translate-x: -1.75rem;"
                },
                {
                    "class": ".-translate-x-8",
                    "properties": "--transform-translate-x: -2rem;"
                },
                {
                    "class": ".-translate-x-9",
                    "properties": "--transform-translate-x: -2.25rem;"
                },
                {
                    "class": ".-translate-x-10",
                    "properties": "--transform-translate-x: -2.5rem;"
                },
                {
                    "class": ".-translate-x-11",
                    "properties": "--transform-translate-x: -2.75rem;"
                },
                {
                    "class": ".-translate-x-12",
                    "properties": "--transform-translate-x: -3rem;"
                },
                {
                    "class": ".-translate-x-14",
                    "properties": "--transform-translate-x: -3.5rem;"
                },
                {
                    "class": ".-translate-x-16",
                    "properties": "--transform-translate-x: -4rem;"
                },
                {
                    "class": ".-translate-x-20",
                    "properties": "--transform-translate-x: -5rem;"
                },
                {
                    "class": ".-translate-x-24",
                    "properties": "--transform-translate-x: -6rem;"
                },
                {
                    "class": ".-translate-x-28",
                    "properties": "--transform-translate-x: -7rem;"
                },
                {
                    "class": ".-translate-x-32",
                    "properties": "--transform-translate-x: -8rem;"
                },
                {
                    "class": ".-translate-x-36",
                    "properties": "--transform-translate-x: -8rem;"
                },
                {
                    "class": ".-translate-x-40",
                    "properties": "--transform-translate-x: -10rem;"
                },
                {
                    "class": ".-translate-x-44",
                    "properties": "--transform-translate-x: -11rem;"
                },
                {
                    "class": ".-translate-x-48",
                    "properties": "--transform-translate-x: -12rem;"
                },
                {
                    "class": ".-translate-x-52",
                    "properties": "--transform-translate-x: -13rem;"
                },
                {
                    "class": ".-translate-x-56",
                    "properties": "--transform-translate-x: -14rem;"
                },
                {
                    "class": ".-translate-x-60",
                    "properties": "--transform-translate-x: -15rem;"
                },
                {
                    "class": ".-translate-x-64",
                    "properties": "--transform-translate-x: -16rem;"
                },
                {
                    "class": ".-translate-x-72",
                    "properties": "--transform-translate-x: -18rem;"
                },
                {
                    "class": ".-translate-x-80",
                    "properties": "--transform-translate-x: -20rem;"
                },
                {
                    "class": ".-translate-x-96",
                    "properties": "--transform-translate-x: -24rem;"
                },
                {
                    "class": ".-translate-x-px",
                    "properties": "--transform-translate-x: -1px;"
                },
                {
                    "class": ".-translate-x-1/2",
                    "properties": "--transform-translate-x: -50%;"
                },
                {
                    "class": ".-translate-x-1/3",
                    "properties": "--transform-translate-x: -33.333333%;"
                },
                {
                    "class": ".-translate-x-2/3",
                    "properties": "--transform-translate-x: -66.6666666%;"
                },
                {
                    "class": ".-translate-x-1/4",
                    "properties": "--transform-translate-x: -25%;"
                },
                {
                    "class": ".-translate-x-2/4",
                    "properties": "--transform-translate-x: -50%;"
                },
                {
                    "class": ".-translate-x-3/4",
                    "properties": "--transform-translate-x: -75%;"
                },
                {
                    "class": ".-translate-x-full",
                    "properties": "--transform-translate-x: -100%;"
                },
                {
                    "class": ".translate-y-0",
                    "properties": "--transform-translate-y: 0;"
                },
                {
                    "class": ".translate-y-0.5",
                    "properties": "--transform-translate-y: 0.125rem;"
                },
                {
                    "class": ".translate-y-1",
                    "properties": "--transform-translate-y: 0.25rem;"
                },
                {
                    "class": ".translate-y-1.5",
                    "properties": "--transform-translate-y: 0.375rem;"
                },
                {
                    "class": ".translate-y-2",
                    "properties": "--transform-translate-y: 0.5rem;"
                },
                {
                    "class": ".translate-y-2.5",
                    "properties": "--transform-translate-y: 0.625rem;"
                },
                {
                    "class": ".translate-y-3",
                    "properties": "--transform-translate-y: 0.75rem;"
                },
                {
                    "class": ".translate-y-3.5",
                    "properties": "--transform-translate-y: 0.875rem;"
                },
                {
                    "class": ".translate-y-4",
                    "properties": "--transform-translate-y: 1rem;"
                },
                {
                    "class": ".translate-y-5",
                    "properties": "--transform-translate-y: 1.25rem;"
                },
                {
                    "class": ".translate-y-6",
                    "properties": "--transform-translate-y: 1.5rem;"
                },
                {
                    "class": ".translate-y-7",
                    "properties": "--transform-translate-y: 1.75rem;"
                },
                {
                    "class": ".translate-y-8",
                    "properties": "--transform-translate-y: 2rem;"
                },
                {
                    "class": ".translate-y-9",
                    "properties": "--transform-translate-y: 2.25rem;"
                },
                {
                    "class": ".translate-y-10",
                    "properties": "--transform-translate-y: 2.5rem;"
                },
                {
                    "class": ".translate-y-11",
                    "properties": "--transform-translate-y: 2.75rem;"
                },
                {
                    "class": ".translate-y-12",
                    "properties": "--transform-translate-y: 3rem;"
                },
                {
                    "class": ".translate-y-14",
                    "properties": "--transform-translate-y: 3.5rem;"
                },
                {
                    "class": ".translate-y-16",
                    "properties": "--transform-translate-y: 4rem;"
                },
                {
                    "class": ".translate-y-20",
                    "properties": "--transform-translate-y: 5rem;"
                },
                {
                    "class": ".translate-y-24",
                    "properties": "--transform-translate-y: 6rem;"
                },
                {
                    "class": ".translate-y-28",
                    "properties": "--transform-translate-y: 7rem;"
                },
                {
                    "class": ".translate-y-32",
                    "properties": "--transform-translate-y: 8rem;"
                },
                {
                    "class": ".translate-y-36",
                    "properties": "--transform-translate-y: 8rem;"
                },
                {
                    "class": ".translate-y-40",
                    "properties": "--transform-translate-y: 10rem;"
                },
                {
                    "class": ".translate-y-44",
                    "properties": "--transform-translate-y: 11rem;"
                },
                {
                    "class": ".translate-y-48",
                    "properties": "--transform-translate-y: 12rem;"
                },
                {
                    "class": ".translate-y-52",
                    "properties": "--transform-translate-y: 13rem;"
                },
                {
                    "class": ".translate-y-56",
                    "properties": "--transform-translate-y: 14rem;"
                },
                {
                    "class": ".translate-y-60",
                    "properties": "--transform-translate-y: 15rem;"
                },
                {
                    "class": ".translate-y-64",
                    "properties": "--transform-translate-y: 16rem;"
                },
                {
                    "class": ".translate-y-72",
                    "properties": "--transform-translate-y: 18rem;"
                },
                {
                    "class": ".translate-y-80",
                    "properties": "--transform-translate-y: 20rem;"
                },
                {
                    "class": ".translate-y-96",
                    "properties": "--transform-translate-y: 24rem;"
                },
                {
                    "class": ".translate-y-px",
                    "properties": "--transform-translate-y: 1px;"
                },
                {
                    "class": ".translate-y-1/2",
                    "properties": "--transform-translate-y: 50%;"
                },
                {
                    "class": ".translate-y-1/3",
                    "properties": "--transform-translate-y: 33.333333%;"
                },
                {
                    "class": ".translate-y-2/3",
                    "properties": "--transform-translate-y: 66.6666666%;"
                },
                {
                    "class": ".translate-y-1/4",
                    "properties": "--transform-translate-y: 25%;"
                },
                {
                    "class": ".translate-y-2/4",
                    "properties": "--transform-translate-y: 50%;"
                },
                {
                    "class": ".translate-y-3/4",
                    "properties": "--transform-translate-y: 75%;"
                },
                {
                    "class": ".translate-y-full",
                    "properties": "--transform-translate-y: 100%;"
                },
                {
                    "class": ".-translate-y-0",
                    "properties": "--transform-translate-y: 0;"
                },
                {
                    "class": ".-translate-y-0.5",
                    "properties": "--transform-translate-y: -0.125rem;"
                },
                {
                    "class": ".-translate-y-1",
                    "properties": "--transform-translate-y: -0.25rem;"
                },
                {
                    "class": ".-translate-y-1.5",
                    "properties": "--transform-translate-y: -0.375rem;"
                },
                {
                    "class": ".-translate-y-2",
                    "properties": "--transform-translate-y: -0.5rem;"
                },
                {
                    "class": ".-translate-y-2.5",
                    "properties": "--transform-translate-y: -0.625rem;"
                },
                {
                    "class": ".-translate-y-3",
                    "properties": "--transform-translate-y: -0.75rem;"
                },
                {
                    "class": ".-translate-y-3.5",
                    "properties": "--transform-translate-y: -0.875rem;"
                },
                {
                    "class": ".-translate-y-4",
                    "properties": "--transform-translate-y: -1rem;"
                },
                {
                    "class": ".-translate-y-5",
                    "properties": "--transform-translate-y: -1.25rem;"
                },
                {
                    "class": ".-translate-y-6",
                    "properties": "--transform-translate-y: -1.5rem;"
                },
                {
                    "class": ".-translate-y-7",
                    "properties": "--transform-translate-y: -1.75rem;"
                },
                {
                    "class": ".-translate-y-8",
                    "properties": "--transform-translate-y: -2rem;"
                },
                {
                    "class": ".-translate-y-9",
                    "properties": "--transform-translate-y: -2.25rem;"
                },
                {
                    "class": ".-translate-y-10",
                    "properties": "--transform-translate-y: -2.5rem;"
                },
                {
                    "class": ".-translate-y-11",
                    "properties": "--transform-translate-y: -2.75rem;"
                },
                {
                    "class": ".-translate-y-12",
                    "properties": "--transform-translate-y: -3rem;"
                },
                {
                    "class": ".-translate-y-14",
                    "properties": "--transform-translate-y: -3.5rem;"
                },
                {
                    "class": ".-translate-y-16",
                    "properties": "--transform-translate-y: -4rem;"
                },
                {
                    "class": ".-translate-y-20",
                    "properties": "--transform-translate-y: -5rem;"
                },
                {
                    "class": ".-translate-y-24",
                    "properties": "--transform-translate-y: -6rem;"
                },
                {
                    "class": ".-translate-y-28",
                    "properties": "--transform-translate-y: -7rem;"
                },
                {
                    "class": ".-translate-y-32",
                    "properties": "--transform-translate-y: -8rem;"
                },
                {
                    "class": ".-translate-y-36",
                    "properties": "--transform-translate-y: -8rem;"
                },
                {
                    "class": ".-translate-y-40",
                    "properties": "--transform-translate-y: -10rem;"
                },
                {
                    "class": ".-translate-y-44",
                    "properties": "--transform-translate-y: -11rem;"
                },
                {
                    "class": ".-translate-y-48",
                    "properties": "--transform-translate-y: -12rem;"
                },
                {
                    "class": ".-translate-y-52",
                    "properties": "--transform-translate-y: -13rem;"
                },
                {
                    "class": ".-translate-y-56",
                    "properties": "--transform-translate-y: -14rem;"
                },
                {
                    "class": ".-translate-y-60",
                    "properties": "--transform-translate-y: -15rem;"
                },
                {
                    "class": ".-translate-y-64",
                    "properties": "--transform-translate-y: -16rem;"
                },
                {
                    "class": ".-translate-y-72",
                    "properties": "--transform-translate-y: -18rem;"
                },
                {
                    "class": ".-translate-y-80",
                    "properties": "--transform-translate-y: -20rem;"
                },
                {
                    "class": ".-translate-y-96",
                    "properties": "--transform-translate-y: -24rem;"
                },
                {
                    "class": ".-translate-y-px",
                    "properties": "--transform-translate-y: -1px;"
                },
                {
                    "class": ".-translate-y-1/2",
                    "properties": "--transform-translate-y: -50%;"
                },
                {
                    "class": ".-translate-y-1/3",
                    "properties": "--transform-translate-y: -33.333333%;"
                },
                {
                    "class": ".-translate-y-2/3",
                    "properties": "--transform-translate-y: -66.6666666%;"
                },
                {
                    "class": ".-translate-y-1/4",
                    "properties": "--transform-translate-y: -25%;"
                },
                {
                    "class": ".-translate-y-2/4",
                    "properties": "--transform-translate-y: -50%;"
                },
                {
                    "class": ".-translate-y-3/4",
                    "properties": "--transform-translate-y: -75%;"
                },
                {
                    "class": ".-translate-y-full",
                    "properties": "--transform-translate-y: -100%;"
                }
            ]
        },
        {
            "title": "Skew",
            "classList": [
                {
                    "class": ".skew-x-0",
                    "properties": "--transform-skew-x: 0;"
                },
                {
                    "class": ".skew-x-1",
                    "properties": "--transform-skew-x: 1deg;"
                },
                {
                    "class": ".skew-x-2",
                    "properties": "--transform-skew-x: 2deg;"
                },
                {
                    "class": ".skew-x-3",
                    "properties": "--transform-skew-x: 3deg;"
                },
                {
                    "class": ".skew-x-6",
                    "properties": "--transform-skew-x: 6deg;"
                },
                {
                    "class": ".skew-x-12",
                    "properties": "--transform-skew-x: 12deg;"
                },
                {
                    "class": ".-skew-x-12",
                    "properties": "--transform-skew-x: -12deg;"
                },
                {
                    "class": ".-skew-x-6",
                    "properties": "--transform-skew-x: -6deg;"
                },
                {
                    "class": ".-skew-x-3",
                    "properties": "--transform-skew-x: -3deg;"
                },
                {
                    "class": ".-skew-x-2",
                    "properties": "--transform-skew-x: -2deg;"
                },
                {
                    "class": ".-skew-x-1",
                    "properties": "--transform-skew-x: -1deg;"
                },
                {
                    "class": ".skew-y-0",
                    "properties": "--transform-skew-y: 0;"
                },
                {
                    "class": ".skew-y-1",
                    "properties": "--transform-skew-y: 1deg;"
                },
                {
                    "class": ".skew-y-2",
                    "properties": "--transform-skew-y: 2deg;"
                },
                {
                    "class": ".skew-y-3",
                    "properties": "--transform-skew-y: 3deg;"
                },
                {
                    "class": ".skew-y-6",
                    "properties": "--transform-skew-y: 6deg;"
                },
                {
                    "class": ".skew-y-12",
                    "properties": "--transform-skew-y: 12deg;"
                },
                {
                    "class": ".-skew-y-12",
                    "properties": "--transform-skew-y: -12deg;"
                },
                {
                    "class": ".-skew-y-6",
                    "properties": "--transform-skew-y: -6deg;"
                },
                {
                    "class": ".-skew-y-3",
                    "properties": "--transform-skew-y: -3deg;"
                },
                {
                    "class": ".-skew-y-2",
                    "properties": "--transform-skew-y: -2deg;"
                },
                {
                    "class": ".-skew-y-1",
                    "properties": "--transform-skew-x: -1deg;"
                }
            ]
        }
    ],
    "Box Alignment": [
        {
            "title": "Justify Content",
            "classList": [
                {
                    "class": ".justify-start",
                    "properties": "justify-content: flex-start;"
                },
                {
                    "class": ".justify-center",
                    "properties": "justify-content: center;"
                },
                {
                    "class": ".justify-end",
                    "properties": "justify-content: flex-end;"
                },
                {
                    "class": ".justify-between",
                    "properties": "justify-content: space-between;"
                },
                {
                    "class": ".justify-around",
                    "properties": "justify-content: space-around;"
                },
                {
                    "class": ".justify-evenly",
                    "properties": "justify-content: space-evenly;"
                }
            ]
        },
        {
            "title": "Justify Items",
            "classList": [
                {
                    "class": ".justify-items-stretch",
                    "properties": "justify-items: stretch;"
                },
                {
                    "class": ".justify-items-start",
                    "properties": "justify-items: start;"
                },
                {
                    "class": ".justify-items-center",
                    "properties": "justify-items: center;"
                },
                {
                    "class": ".justify-items-end",
                    "properties": "justify-items: end;"
                },
                {
                    "class": ".justify-items-auto",
                    "properties": "justify-items: auto;"
                }
            ]
        },
        {
            "title": "Justify Self",
            "classList": [
                {
                    "class": ".justify-self-stretch",
                    "properties": "justify-self: stretch;"
                },
                {
                    "class": ".justify-self-start",
                    "properties": "justify-self: start;"
                },
                {
                    "class": ".justify-self-center",
                    "properties": "justify-self: center;"
                },
                {
                    "class": ".justify-self-end",
                    "properties": "justify-self: end;"
                },
                {
                    "class": ".justify-self-auto",
                    "properties": "justify-self: auto;"
                }
            ]
        },
        {
            "title": "Align Content",
            "classList": [
                {
                    "class": ".content-start",
                    "properties": "align-content: flex-start;"
                },
                {
                    "class": ".content-center",
                    "properties": "align-content: center;"
                },
                {
                    "class": ".content-end",
                    "properties": "align-content: flex-end;"
                },
                {
                    "class": ".content-between",
                    "properties": "align-content: space-between;"
                },
                {
                    "class": ".content-around",
                    "properties": "align-content: space-around;"
                },
                {
                    "class": ".content-evenly",
                    "properties": "align-content: space-evenly;"
                }
            ]
        },
        {
            "title": "Align Items",
            "classList": [
                {
                    "class": ".items-stretch",
                    "properties": "align-items: stretch;"
                },
                {
                    "class": ".items-start",
                    "properties": "align-items: flex-start;"
                },
                {
                    "class": ".items-center",
                    "properties": "align-items: center;"
                },
                {
                    "class": ".items-end",
                    "properties": "align-items: flex-end;"
                },
                {
                    "class": ".items-baseline",
                    "properties": "align-items: baseline;"
                }
            ]
        },
        {
            "title": "Align Self",
            "classList": [
                {
                    "class": ".self-auto",
                    "properties": "align-self: auto;"
                },
                {
                    "class": ".self-start",
                    "properties": "align-self: flex-start;"
                },
                {
                    "class": ".self-center",
                    "properties": "align-self: center;"
                },
                {
                    "class": ".self-end",
                    "properties": "align-self: flex-end;"
                },
                {
                    "class": ".self-stretch",
                    "properties": "align-self: stretch;"
                },
                {
                    "class": ".self-baseline",
                    "properties": "align-self: baseline;"
                }
            ]
        },
        {
            "title": "Place Content",
            "classList": [
                {
                    "class": ".place-content-start",
                    "properties": "place-content: start;"
                },
                {
                    "class": ".place-content-center",
                    "properties": "place-content: center;"
                },
                {
                    "class": ".place-content-end",
                    "properties": "place-content: end;"
                },
                {
                    "class": ".place-content-between",
                    "properties": "place-content: space-between;"
                },
                {
                    "class": ".place-content-around",
                    "properties": "place-content: space-around;"
                },
                {
                    "class": ".place-content-evenly",
                    "properties": "place-content: space-evenly;"
                }
            ]
        },
        {
            "title": "Place Items",
            "classList": [
                {
                    "class": ".place-items-stretch",
                    "properties": "place-items: stretch;"
                },
                {
                    "class": ".place-items-start",
                    "properties": "place-items: start;"
                },
                {
                    "class": ".place-items-center",
                    "properties": "place-items: center;"
                },
                {
                    "class": ".place-items-end",
                    "properties": "place-items: end;"
                }
            ]
        },
        {
            "title": "Place Self",
            "classList": [
                {
                    "class": ".place-self-auto",
                    "properties": "place-self: auto;"
                },
                {
                    "class": ".place-self-start",
                    "properties": "place-self: start;"
                },
                {
                    "class": ".place-self-center",
                    "properties": "place-self: center;"
                },
                {
                    "class": ".place-self-end",
                    "properties": "place-self: end;"
                },
                {
                    "class": ".place-self-stretch",
                    "properties": "place-self: stretch;"
                }
            ]
        }
    ],
    "Flexbox": [
        {
            "title": "Display",
            "classList": [
                {
                    "class": ".flex",
                    "properties": "display: flex;"
                },
                {
                    "class": ".inline-flex",
                    "properties": "display: inline-flex;"
                }
            ]
        },
        {
            "title": "Flex Direction",
            "classList": [
                {
                    "class": ".flex-row",
                    "properties": "flex-direction: row;"
                },
                {
                    "class": ".flex-row-reverse",
                    "properties": "flex-direction: row-reverse;"
                },
                {
                    "class": ".flex-col",
                    "properties": "flex-direction: column;"
                },
                {
                    "class": ".flex-col-reverse",
                    "properties": "flex-direction: column-reverse;"
                }
            ]
        },
        {
            "title": "Flex Wrap",
            "classList": [
                {
                    "class": ".flex-nowrap",
                    "properties": "flex-wrap: nowrap;"
                },
                {
                    "class": ".flex-wrap",
                    "properties": "flex-wrap: wrap;"
                },
                {
                    "class": ".flex-wrap-reverse",
                    "properties": "flex-wrap: wrap-reverse;"
                }
            ]
        },
        {
            "title": "Flex",
            "classList": [
                {
                    "class": ".flex-1",
                    "properties": "flex: 1 1 0%;"
                },
                {
                    "class": ".flex-auto",
                    "properties": "flex: 1 1 auto;"
                },
                {
                    "class": ".flex-initial",
                    "properties": "flex: 0 1 auto;"
                },
                {
                    "class": ".flex-none",
                    "properties": "flex: none;"
                }
            ]
        },
        {
            "title": "Flex Grow",
            "classList": [
                {
                    "class": ".flex-grow",
                    "properties": "flex-grow: 1;"
                },
                {
                    "class": ".flex-grow-0",
                    "properties": "flex-grow: 0;"
                }
            ]
        },
        {
            "title": "Flex Shrink",
            "classList": [
                {
                    "class": ".flex-shrink",
                    "properties": "flex-shrink: 1;"
                },
                {
                    "class": ".flex-shrink-0",
                    "properties": "flex-shrink: 0;"
                }
            ]
        },
        {
            "title": "Order",
            "classList": [
                {
                    "class": ".order-first",
                    "properties": "order: -9999;"
                },
                {
                    "class": ".order-last",
                    "properties": "order: 9999;"
                },
                {
                    "class": ".order-none",
                    "properties": "order: 0;"
                },
                {
                    "class": ".order-1",
                    "properties": "order: 1;"
                },
                {
                    "class": ".order-2",
                    "properties": "order: 2;"
                },
                {
                    "class": ".order-3",
                    "properties": "order: 3;"
                },
                {
                    "class": ".order-4",
                    "properties": "order: 4;"
                },
                {
                    "class": ".order-5",
                    "properties": "order: 5;"
                },
                {
                    "class": ".order-6",
                    "properties": "order: 6;"
                },
                {
                    "class": ".order-7",
                    "properties": "order: 7;"
                },
                {
                    "class": ".order-8",
                    "properties": "order: 8;"
                },
                {
                    "class": ".order-9",
                    "properties": "order: 9;"
                },
                {
                    "class": ".order-10",
                    "properties": "order: 10;"
                },
                {
                    "class": ".order-11",
                    "properties": "order: 11;"
                },
                {
                    "class": ".order-12",
                    "properties": "order: 12;"
                }
            ]
        }
    ],
    "Sizing": [
        {
            "title": "Width",
            "classList": [
                {
                    "class": ".w-0",
                    "properties": "width: 0;"
                },
                {
                    "class": ".w-0.5",
                    "properties": "width: 0.125rem;"
                },
                {
                    "class": ".w-1",
                    "properties": "width: 0.25rem;"
                },
                {
                    "class": ".w-1.5",
                    "properties": "width: 0.375rem;"
                },
                {
                    "class": ".w-2",
                    "properties": "width: 0.5rem;"
                },
                {
                    "class": ".w-2.5",
                    "properties": "width: 0.625rem;"
                },
                {
                    "class": ".w-3",
                    "properties": "width: 0.75rem;"
                },
                {
                    "class": ".w-3.5",
                    "properties": "width: 0.875rem;"
                },
                {
                    "class": ".w-4",
                    "properties": "width: 1rem;"
                },
                {
                    "class": ".w-5",
                    "properties": "width: 1.25rem;"
                },
                {
                    "class": ".w-6",
                    "properties": "width: 1.5rem;"
                },
                {
                    "class": ".w-8",
                    "properties": "width: 2rem;"
                },
                {
                    "class": ".w-10",
                    "properties": "width: 2.5rem;"
                },
                {
                    "class": ".w-11",
                    "properties": "width: 2.75rem;"
                },
                {
                    "class": ".w-12",
                    "properties": "width: 3rem;"
                },
                {
                    "class": ".w-14",
                    "properties": "width: 3.5rem;"
                },
                {
                    "class": ".w-16",
                    "properties": "width: 4rem;"
                },
                {
                    "class": ".w-20",
                    "properties": "width: 5rem;"
                },
                {
                    "class": ".w-24",
                    "properties": "width: 6rem;"
                },
                {
                    "class": ".w-28",
                    "properties": "width: 7rem;"
                },
                {
                    "class": ".w-32",
                    "properties": "width: 8rem;"
                },
                {
                    "class": ".w-36",
                    "properties": "width: 9rem;"
                },
                {
                    "class": ".w-40",
                    "properties": "width: 10rem;"
                },
                {
                    "class": ".w-44",
                    "properties": "width: 11rem;"
                },
                {
                    "class": ".w-48",
                    "properties": "width: 12rem;"
                },
                {
                    "class": ".w-52",
                    "properties": "width: 13rem;"
                },
                {
                    "class": ".w-56",
                    "properties": "width: 14rem;"
                },
                {
                    "class": ".w-64",
                    "properties": "width: 16rem;"
                },
                {
                    "class": ".w-72",
                    "properties": "width: 18rem;"
                },
                {
                    "class": ".w-80",
                    "properties": "width: 20rem;"
                },
                {
                    "class": ".w-96",
                    "properties": "width: 24rem;"
                },
                {
                    "class": ".w-px",
                    "properties": "width: 1px;"
                },
                {
                    "class": ".w-auto",
                    "properties": "width: auto;"
                },
                {
                    "class": ".w-1/2",
                    "properties": "width: 50%;"
                },
                {
                    "class": ".w-1/3",
                    "properties": "width: 33.333333%;"
                },
                {
                    "class": ".w-2/3",
                    "properties": "width: 66.666667%;"
                },
                {
                    "class": ".w-1/4",
                    "properties": "width: 25%;"
                },
                {
                    "class": ".w-2/4",
                    "properties": "width: 50%;"
                },
                {
                    "class": ".w-3/4",
                    "properties": "width: 75%;"
                },
                {
                    "class": ".w-1/5",
                    "properties": "width: 20%;"
                },
                {
                    "class": ".w-2/5",
                    "properties": "width: 40%;"
                },
                {
                    "class": ".w-3/5",
                    "properties": "width: 60%;"
                },
                {
                    "class": ".w-4/5",
                    "properties": "width: 80%;"
                },
                {
                    "class": ".w-1/6",
                    "properties": "width: 16.666667%;"
                },
                {
                    "class": ".w-2/6",
                    "properties": "width: 33.333333%;"
                },
                {
                    "class": ".w-3/6",
                    "properties": "width: 50%;"
                },
                {
                    "class": ".w-4/6",
                    "properties": "width: 66.666667%;"
                },
                {
                    "class": ".w-5/6",
                    "properties": "width: 83.333333%;"
                },
                {
                    "class": ".w-1/12",
                    "properties": "width: 8.333333%;"
                },
                {
                    "class": ".w-2/12",
                    "properties": "width: 16.666667%;"
                },
                {
                    "class": ".w-3/12",
                    "properties": "width: 25%;"
                },
                {
                    "class": ".w-4/12",
                    "properties": "width: 33.333333%;"
                },
                {
                    "class": ".w-5/12",
                    "properties": "width: 41.666667%;"
                },
                {
                    "class": ".w-6/12",
                    "properties": "width: 50%;"
                },
                {
                    "class": ".w-7/12",
                    "properties": "width: 58.333333%;"
                },
                {
                    "class": ".w-8/12",
                    "properties": "width: 66.666667%;"
                },
                {
                    "class": ".w-9/12",
                    "properties": "width: 75%;"
                },
                {
                    "class": ".w-10/12",
                    "properties": "width: 83.333333%;"
                },
                {
                    "class": ".w-11/12",
                    "properties": "width: 91.666667%;"
                },
                {
                    "class": ".w-full",
                    "properties": "width: 100%;"
                },
                {
                    "class": ".w-screen",
                    "properties": "width: 100vw;"
                },
                {
                    "class": ".w-min",
                    "properties": "width: min-content;"
                },
                {
                    "class": ".w-max",
                    "properties": "width: max-content;"
                }
            ]
        },
        {
            "title": "Min Width",
            "classList": [
                {
                    "class": ".min-w-0",
                    "properties": "min-width: 0;"
                },
                {
                    "class": ".min-w-full",
                    "properties": "min-width: 100%;"
                },
                {
                    "class": ".min-w-min",
                    "properties": "min-width: min-content;"
                },
                {
                    "class": ".min-w-max",
                    "properties": "min-width: max-content;"
                }
            ]
        },
        {
            "title": "Max Width",
            "classList": [
                {
                    "class": ".max-w-0",
                    "properties": "max-width: 0rem;"
                },
                {
                    "class": ".max-w-none",
                    "properties": "max-width: none;"
                },
                {
                    "class": ".max-w-xs",
                    "properties": "max-width: 20rem;"
                },
                {
                    "class": ".max-w-sm",
                    "properties": "max-width: 24rem;"
                },
                {
                    "class": ".max-w-md",
                    "properties": "max-width: 28rem;"
                },
                {
                    "class": ".max-w-lg",
                    "properties": "max-width: 32rem;"
                },
                {
                    "class": ".max-w-xl",
                    "properties": "max-width: 36rem;"
                },
                {
                    "class": ".max-w-2xl",
                    "properties": "max-width: 42rem;"
                },
                {
                    "class": ".max-w-3xl",
                    "properties": "max-width: 48rem;"
                },
                {
                    "class": ".max-w-4xl",
                    "properties": "max-width: 56rem;"
                },
                {
                    "class": ".max-w-5xl",
                    "properties": "max-width: 64rem;"
                },
                {
                    "class": ".max-w-6xl",
                    "properties": "max-width: 72rem;"
                },
                {
                    "class": ".max-w-7xl",
                    "properties": "max-width: 80rem;"
                },
                {
                    "class": ".max-w-full",
                    "properties": "max-width: 100%;"
                },
                {
                    "class": ".max-w-min",
                    "properties": "max-width: min-content;"
                },
                {
                    "class": ".max-w-max",
                    "properties": "max-width: max-content;"
                },
                {
                    "class": ".max-w-prose",
                    "properties": "max-width: 65ch;"
                },
                {
                    "class": ".max-w-screen-sm",
                    "properties": "max-width: 640px;"
                },
                {
                    "class": ".max-w-screen-md",
                    "properties": "max-width: 768px;"
                },
                {
                    "class": ".max-w-screen-lg",
                    "properties": "max-width: 1024px;"
                },
                {
                    "class": ".max-w-screen-xl",
                    "properties": "max-width: 1280px;"
                },
                {
                    "class": ".max-w-screen-2xl",
                    "properties": "max-width: 1536px;"
                }
            ]
        },
        {
            "title": "Height",
            "classList": [
                {
                    "class": ".h-0",
                    "properties": "height: 0;"
                },
                {
                    "class": ".h-0.5",
                    "properties": "height: 0.125rem;"
                },
                {
                    "class": ".h-1",
                    "properties": "height: 0.25rem;"
                },
                {
                    "class": ".h-1.5",
                    "properties": "height: 0.375rem;"
                },
                {
                    "class": ".h-2",
                    "properties": "height: 0.5rem;"
                },
                {
                    "class": ".h-2.5",
                    "properties": "height: 0.625rem;"
                },
                {
                    "class": ".h-3",
                    "properties": "height: 0.75rem;"
                },
                {
                    "class": ".h-3.5",
                    "properties": "height: 0.875rem;"
                },
                {
                    "class": ".h-4",
                    "properties": "height: 1rem;"
                },
                {
                    "class": ".h-5",
                    "properties": "height: 1.25rem;"
                },
                {
                    "class": ".h-6",
                    "properties": "height: 1.5rem;"
                },
                {
                    "class": ".h-8",
                    "properties": "height: 2rem;"
                },
                {
                    "class": ".h-10",
                    "properties": "height: 2.5rem;"
                },
                {
                    "class": ".h-11",
                    "properties": "height: 2.75rem;"
                },
                {
                    "class": ".h-12",
                    "properties": "height: 3rem;"
                },
                {
                    "class": ".h-14",
                    "properties": "height: 3.5rem;"
                },
                {
                    "class": ".h-16",
                    "properties": "height: 4rem;"
                },
                {
                    "class": ".h-20",
                    "properties": "height: 5rem;"
                },
                {
                    "class": ".h-24",
                    "properties": "height: 6rem;"
                },
                {
                    "class": ".h-28",
                    "properties": "height: 7rem;"
                },
                {
                    "class": ".h-32",
                    "properties": "height: 8rem;"
                },
                {
                    "class": ".h-36",
                    "properties": "height: 9rem;"
                },
                {
                    "class": ".h-40",
                    "properties": "height: 10rem;"
                },
                {
                    "class": ".h-44",
                    "properties": "height: 11rem;"
                },
                {
                    "class": ".h-48",
                    "properties": "height: 12rem;"
                },
                {
                    "class": ".h-52",
                    "properties": "height: 13rem;"
                },
                {
                    "class": ".h-56",
                    "properties": "height: 14rem;"
                },
                {
                    "class": ".h-64",
                    "properties": "height: 16rem;"
                },
                {
                    "class": ".h-72",
                    "properties": "height: 18rem;"
                },
                {
                    "class": ".h-80",
                    "properties": "height: 20rem;"
                },
                {
                    "class": ".h-96",
                    "properties": "height: 24rem;"
                },
                {
                    "class": ".h-px",
                    "properties": "height: 1px;"
                },
                {
                    "class": ".h-auto",
                    "properties": "height: auto;"
                },
                {
                    "class": ".h-1/2",
                    "properties": "height: 50%;"
                },
                {
                    "class": ".h-1/3",
                    "properties": "height: 33.333333%;"
                },
                {
                    "class": ".h-2/3",
                    "properties": "height: 66.666667%;"
                },
                {
                    "class": ".h-1/4",
                    "properties": "height: 25%;"
                },
                {
                    "class": ".h-2/4",
                    "properties": "height: 50%;"
                },
                {
                    "class": ".h-3/4",
                    "properties": "height: 75%;"
                },
                {
                    "class": ".h-1/5",
                    "properties": "height: 20%;"
                },
                {
                    "class": ".h-2/5",
                    "properties": "height: 40%;"
                },
                {
                    "class": ".h-3/5",
                    "properties": "height: 60%;"
                },
                {
                    "class": ".h-4/5",
                    "properties": "height: 80%;"
                },
                {
                    "class": ".h-1/6",
                    "properties": "height: 16.666667%;"
                },
                {
                    "class": ".h-2/6",
                    "properties": "height: 33.333333%;"
                },
                {
                    "class": ".h-3/6",
                    "properties": "height: 50%;"
                },
                {
                    "class": ".h-4/6",
                    "properties": "height: 66.666667%;"
                },
                {
                    "class": ".h-5/6",
                    "properties": "height: 83.333333%;"
                },
                {
                    "class": ".h-full",
                    "properties": "height: 100%;"
                },
                {
                    "class": ".h-screen",
                    "properties": "height: 100vh;"
                }
            ]
        },
        {
            "title": "Min Height",
            "classList": [
                {
                    "class": ".min-h-0",
                    "properties": "min-height: 0;"
                },
                {
                    "class": ".min-h-full",
                    "properties": "min-height: 100%;"
                },
                {
                    "class": ".min-h-screen",
                    "properties": "min-height: 100vh;"
                }
            ]
        },
        {
            "title": "Max Height",
            "classList": [
                {
                    "class": ".max-h-0",
                    "properties": "max-height: 0;"
                },
                {
                    "class": ".max-h-0.5",
                    "properties": "max-height: 0.125rem;"
                },
                {
                    "class": ".max-h-1",
                    "properties": "max-height: 0.25rem;"
                },
                {
                    "class": ".max-h-1.5",
                    "properties": "max-height: 0.375rem;"
                },
                {
                    "class": ".max-h-2",
                    "properties": "max-height: 0.5rem;"
                },
                {
                    "class": ".max-h-2.5",
                    "properties": "max-height: 0.625rem;"
                },
                {
                    "class": ".max-h-3",
                    "properties": "max-height: 0.75rem;"
                },
                {
                    "class": ".max-h-3.5",
                    "properties": "max-height: 0.875rem;"
                },
                {
                    "class": ".max-h-4",
                    "properties": "max-height: 1rem;"
                },
                {
                    "class": ".max-h-5",
                    "properties": "max-height: 1.25rem;"
                },
                {
                    "class": ".max-h-6",
                    "properties": "max-height: 1.5rem;"
                },
                {
                    "class": ".max-h-8",
                    "properties": "max-height: 2rem;"
                },
                {
                    "class": ".max-h-10",
                    "properties": "max-height: 2.5rem;"
                },
                {
                    "class": ".max-h-11",
                    "properties": "max-height: 2.75rem;"
                },
                {
                    "class": ".max-h-12",
                    "properties": "max-height: 3rem;"
                },
                {
                    "class": ".max-h-14",
                    "properties": "max-height: 3.5rem;"
                },
                {
                    "class": ".max-h-16",
                    "properties": "max-height: 4rem;"
                },
                {
                    "class": ".max-h-20",
                    "properties": "max-height: 5rem;"
                },
                {
                    "class": ".max-h-24",
                    "properties": "max-height: 6rem;"
                },
                {
                    "class": ".max-h-28",
                    "properties": "max-height: 7rem;"
                },
                {
                    "class": ".max-h-32",
                    "properties": "max-height: 8rem;"
                },
                {
                    "class": ".max-h-36",
                    "properties": "max-height: 9rem;"
                },
                {
                    "class": ".max-h-40",
                    "properties": "max-height: 10rem;"
                },
                {
                    "class": ".max-h-44",
                    "properties": "max-height: 11rem;"
                },
                {
                    "class": ".max-h-48",
                    "properties": "max-height: 12rem;"
                },
                {
                    "class": ".max-h-52",
                    "properties": "max-height: 13rem;"
                },
                {
                    "class": ".max-h-56",
                    "properties": "max-height: 14rem;"
                },
                {
                    "class": ".max-h-64",
                    "properties": "max-height: 16rem;"
                },
                {
                    "class": ".max-h-72",
                    "properties": "max-height: 18rem;"
                },
                {
                    "class": ".max-h-80",
                    "properties": "max-height: 20rem;"
                },
                {
                    "class": ".max-h-96",
                    "properties": "max-height: 24rem;"
                },
                {
                    "class": ".max-h-px",
                    "properties": "max-height: 1px;"
                },
                {
                    "class": ".max-h-full",
                    "properties": "max-height: 100%;"
                },
                {
                    "class": ".max-h-screen",
                    "properties": "max-height: 100vh;"
                }
            ]
        }
    ],
    "Borders": [
        {
            "title": "Border Radius",
            "classList": [
                {
                    "class": ".rounded-none",
                    "properties": "border-radius: 0;"
                },
                {
                    "class": ".rounded-sm",
                    "properties": "border-radius: 0.125rem;"
                },
                {
                    "class": ".rounded",
                    "properties": "border-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-md",
                    "properties": "border-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-lg",
                    "properties": "border-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-xl",
                    "properties": "border-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-2xl",
                    "properties": "border-radius: 1rem;"
                },
                {
                    "class": ".rounded-3xl",
                    "properties": "border-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-full",
                    "properties": "border-radius: 9999px;"
                },
                {
                    "class": ".rounded-t-none",
                    "properties": "border-top-left-radius: 0; border-top-right-radius: 0;"
                },
                {
                    "class": ".rounded-r-none",
                    "properties": "border-top-right-radius: 0; border-bottom-right-radius: 0;"
                },
                {
                    "class": ".rounded-b-none",
                    "properties": "border-bottom-right-radius: 0; border-bottom-left-radius: 0;"
                },
                {
                    "class": ".rounded-l-none",
                    "properties": "border-top-left-radius: 0; border-bottom-left-radius: 0;"
                },
                {
                    "class": ".rounded-t-sm",
                    "properties": "border-top-left-radius: 0.125rem; border-top-right-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-r-sm",
                    "properties": "border-top-right-radius: 0.125rem; border-bottom-right-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-b-sm",
                    "properties": "border-bottom-right-radius: 0.125rem; border-bottom-left-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-l-sm",
                    "properties": "border-top-left-radius: 0.125rem; border-bottom-left-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-t",
                    "properties": "border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-r",
                    "properties": "border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-b",
                    "properties": "border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-l",
                    "properties": "border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-t-md",
                    "properties": "border-top-left-radius: 0.375rem; border-top-right-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-r-md",
                    "properties": "border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-b-md",
                    "properties": "border-bottom-right-radius: 0.375rem; border-bottom-left-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-l-md",
                    "properties": "border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-t-lg",
                    "properties": "border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-r-lg",
                    "properties": "border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-b-lg",
                    "properties": "border-bottom-right-radius: 0.5rem; border-bottom-left-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-l-lg",
                    "properties": "border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-t-xl",
                    "properties": "border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-r-xl",
                    "properties": "border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-b-xl",
                    "properties": "border-bottom-right-radius: 0.75rem; border-bottom-left-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-l-xl",
                    "properties": "border-top-left-radius: 0.75rem; border-bottom-left-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-t-2xl",
                    "properties": "border-top-left-radius: 1rem; border-top-right-radius: 1rem;"
                },
                {
                    "class": ".rounded-r-2xl",
                    "properties": "border-top-right-radius: 1rem; border-bottom-right-radius: 1rem;"
                },
                {
                    "class": ".rounded-b-2xl",
                    "properties": "border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;"
                },
                {
                    "class": ".rounded-l-2xl",
                    "properties": "border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;"
                },
                {
                    "class": ".rounded-t-3xl",
                    "properties": "border-top-left-radius: 1.5rem; border-top-right-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-r-3xl",
                    "properties": "border-top-right-radius: 1.5rem; border-bottom-right-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-b-3xl",
                    "properties": "border-bottom-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-l-3xl",
                    "properties": "border-top-left-radius: 1.5rem; border-bottom-left-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-t-full",
                    "properties": "border-top-left-radius: 9999px; border-top-right-radius: 9999px;"
                },
                {
                    "class": ".rounded-r-full",
                    "properties": "border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;"
                },
                {
                    "class": ".rounded-b-full",
                    "properties": "border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;"
                },
                {
                    "class": ".rounded-l-full",
                    "properties": "border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;"
                },
                {
                    "class": ".rounded-tl-none",
                    "properties": "border-top-left-radius: 0;"
                },
                {
                    "class": ".rounded-tr-none",
                    "properties": "border-top-right-radius: 0;"
                },
                {
                    "class": ".rounded-br-none",
                    "properties": "border-bottom-right-radius: 0;"
                },
                {
                    "class": ".rounded-bl-none",
                    "properties": "border-bottom-left-radius: 0;"
                },
                {
                    "class": ".rounded-tl-sm",
                    "properties": "border-top-left-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-tr-sm",
                    "properties": "border-top-right-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-br-sm",
                    "properties": "border-bottom-right-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-bl-sm",
                    "properties": "border-bottom-left-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-tl",
                    "properties": "border-top-left-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-tr",
                    "properties": "border-top-right-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-br",
                    "properties": "border-bottom-right-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-bl",
                    "properties": "border-bottom-left-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-tl-md",
                    "properties": "border-top-left-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-tr-md",
                    "properties": "border-top-right-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-br-md",
                    "properties": "border-bottom-right-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-bl-md",
                    "properties": "border-bottom-left-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-tl-lg",
                    "properties": "border-top-left-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-tr-lg",
                    "properties": "border-top-right-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-br-lg",
                    "properties": "border-bottom-right-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-bl-lg",
                    "properties": "border-bottom-left-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-tl-xl",
                    "properties": "border-top-left-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-tr-xl",
                    "properties": "border-top-right-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-br-xl",
                    "properties": "border-bottom-right-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-bl-xl",
                    "properties": "border-bottom-left-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-tl-2xl",
                    "properties": "border-top-left-radius: 1rem;"
                },
                {
                    "class": ".rounded-tr-2xl",
                    "properties": "border-top-right-radius: 1rem;"
                },
                {
                    "class": ".rounded-br-2xl",
                    "properties": "border-bottom-right-radius: 1rem;"
                },
                {
                    "class": ".rounded-bl-2xl",
                    "properties": "border-bottom-left-radius: 1rem;"
                },
                {
                    "class": ".rounded-tl-3xl",
                    "properties": "border-top-left-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-tr-3xl",
                    "properties": "border-top-right-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-br-3xl",
                    "properties": "border-bottom-right-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-bl-3xl",
                    "properties": "border-bottom-left-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-tl-full",
                    "properties": "border-top-left-radius: 9999px;"
                },
                {
                    "class": ".rounded-tr-full",
                    "properties": "border-top-right-radius: 9999px;"
                },
                {
                    "class": ".rounded-br-full",
                    "properties": "border-bottom-right-radius: 9999px;"
                },
                {
                    "class": ".rounded-bl-full",
                    "properties": "border-bottom-left-radius: 9999px;"
                }
            ]
        },
        {
            "title": "Border Width",
            "classList": [
                {
                    "class": ".border",
                    "properties": "border-width: 1px;"
                },
                {
                    "class": ".border-0",
                    "properties": "border-width: 0;"
                },
                {
                    "class": ".border-2",
                    "properties": "border-width: 2px;"
                },
                {
                    "class": ".border-4",
                    "properties": "border-width: 4px;"
                },
                {
                    "class": ".border-8",
                    "properties": "border-width: 8px;"
                },
                {
                    "class": ".border-t",
                    "properties": "border-top-width: 1px;"
                },
                {
                    "class": ".border-t-0",
                    "properties": "border-top-width: 0;"
                },
                {
                    "class": ".border-t-2",
                    "properties": "border-top-width: 2px;"
                },
                {
                    "class": ".border-t-4",
                    "properties": "border-top-width: 4px;"
                },
                {
                    "class": ".border-t-8",
                    "properties": "border-top-width: 8px;"
                },
                {
                    "class": ".border-r",
                    "properties": "border-right-width: 1px;"
                },
                {
                    "class": ".border-r-0",
                    "properties": "border-right-width: 0;"
                },
                {
                    "class": ".border-r-2",
                    "properties": "border-right-width: 2px;"
                },
                {
                    "class": ".border-r-4",
                    "properties": "border-right-width: 4px;"
                },
                {
                    "class": ".border-r-8",
                    "properties": "border-right-width: 8px;"
                },
                {
                    "class": ".border-b",
                    "properties": "border-bottom-width: 1px;"
                },
                {
                    "class": ".border-b-0",
                    "properties": "border-bottom-width: 0;"
                },
                {
                    "class": ".border-b-2",
                    "properties": "border-bottom-width: 2px;"
                },
                {
                    "class": ".border-b-4",
                    "properties": "border-bottom-width: 4px;"
                },
                {
                    "class": ".border-b-8",
                    "properties": "border-bottom-width: 8px;"
                },
                {
                    "class": ".border-l",
                    "properties": "border-left-width: 1px;"
                },
                {
                    "class": ".border-l-0",
                    "properties": "border-left-width: 0;"
                },
                {
                    "class": ".border-l-2",
                    "properties": "border-left-width: 2px;"
                },
                {
                    "class": ".border-l-4",
                    "properties": "border-left-width: 4px;"
                },
                {
                    "class": ".border-l-8",
                    "properties": "border-left-width: 8px;"
                }
            ]
        },
        {
            "title": "Border Color",
            "classList": [
                {
                    "class": ".border-transparent",
                    "properties": "border-color: transparent;"
                },
                {
                    "class": ".border-current",
                    "properties": "border-color: currentColor;"
                },
                {
                    "class": ".border-black",
                    "properties": "border-color: #000000;"
                },
                {
                    "class": ".border-white",
                    "properties": "border-color: #ffffff;"
                },
                {
                    "class": ".border-gray-50",
                    "properties": "border-color: #F9FAFB;"
                },
                {
                    "class": ".border-gray-100",
                    "properties": "border-color: #F3F4F6;"
                },
                {
                    "class": ".border-gray-200",
                    "properties": "border-color: #E5E7EB;"
                },
                {
                    "class": ".border-gray-300",
                    "properties": "border-color: #D1D5DB;"
                },
                {
                    "class": ".border-gray-400",
                    "properties": "border-color: #9CA3AF;"
                },
                {
                    "class": ".border-gray-500",
                    "properties": "border-color: #6B7280;"
                },
                {
                    "class": ".border-gray-600",
                    "properties": "border-color: #4B5563;"
                },
                {
                    "class": ".border-gray-700",
                    "properties": "border-color: #374151;"
                },
                {
                    "class": ".border-gray-800",
                    "properties": "border-color: #1F2937;"
                },
                {
                    "class": ".border-gray-900",
                    "properties": "border-color: #111827;"
                },
                {
                    "class": ".border-red-50",
                    "properties": "border-color: #FEF2F2;"
                },
                {
                    "class": ".border-red-100",
                    "properties": "border-color: #FEE2E2;"
                },
                {
                    "class": ".border-red-200",
                    "properties": "border-color: #FECACA;"
                },
                {
                    "class": ".border-red-300",
                    "properties": "border-color: #FCA5A5;"
                },
                {
                    "class": ".border-red-400",
                    "properties": "border-color: #F87171;"
                },
                {
                    "class": ".border-red-500",
                    "properties": "border-color: #EF4444;"
                },
                {
                    "class": ".border-red-600",
                    "properties": "border-color: #DC2626;"
                },
                {
                    "class": ".border-red-700",
                    "properties": "border-color: #B91C1C;"
                },
                {
                    "class": ".border-red-800",
                    "properties": "border-color: #991B1B;"
                },
                {
                    "class": ".border-red-900",
                    "properties": "border-color: #7F1D1D;"
                },
                {
                    "class": ".border-yellow-50",
                    "properties": "border-color: #FFFBEB;"
                },
                {
                    "class": ".border-yellow-100",
                    "properties": "border-color: #FEF3C7;"
                },
                {
                    "class": ".border-yellow-200",
                    "properties": "border-color: #FDE68A;"
                },
                {
                    "class": ".border-yellow-300",
                    "properties": "border-color: #FCD34D;"
                },
                {
                    "class": ".border-yellow-400",
                    "properties": "border-color: #FBBF24;"
                },
                {
                    "class": ".border-yellow-500",
                    "properties": "border-color: #F59E0B;"
                },
                {
                    "class": ".border-yellow-600",
                    "properties": "border-color: #D97706;"
                },
                {
                    "class": ".border-yellow-700",
                    "properties": "border-color: #B45309;"
                },
                {
                    "class": ".border-yellow-800",
                    "properties": "border-color: #92400E;"
                },
                {
                    "class": ".border-yellow-900",
                    "properties": "border-color: #78350F;"
                },
                {
                    "class": ".border-green-50",
                    "properties": "border-color: #ECFDF5;"
                },
                {
                    "class": ".border-green-100",
                    "properties": "border-color: #D1FAE5;"
                },
                {
                    "class": ".border-green-200",
                    "properties": "border-color: #A7F3D0;"
                },
                {
                    "class": ".border-green-300",
                    "properties": "border-color: #6EE7B7;"
                },
                {
                    "class": ".border-green-400",
                    "properties": "border-color: #34D399;"
                },
                {
                    "class": ".border-green-500",
                    "properties": "border-color: #10B981;"
                },
                {
                    "class": ".border-green-600",
                    "properties": "border-color: #059669;"
                },
                {
                    "class": ".border-green-700",
                    "properties": "border-color: #047857;"
                },
                {
                    "class": ".border-green-800",
                    "properties": "border-color: #065F46;"
                },
                {
                    "class": ".border-green-900",
                    "properties": "border-color: #064E3B;"
                },
                {
                    "class": ".border-blue-50",
                    "properties": "border-color: #EFF6FF;"
                },
                {
                    "class": ".border-blue-100",
                    "properties": "border-color: #DBEAFE;"
                },
                {
                    "class": ".border-blue-200",
                    "properties": "border-color: #BFDBFE;"
                },
                {
                    "class": ".border-blue-300",
                    "properties": "border-color: #93C5FD;"
                },
                {
                    "class": ".border-blue-400",
                    "properties": "border-color: #60A5FA;"
                },
                {
                    "class": ".border-blue-500",
                    "properties": "border-color: #3B82F6;"
                },
                {
                    "class": ".border-blue-600",
                    "properties": "border-color: #2563EB;"
                },
                {
                    "class": ".border-blue-700",
                    "properties": "border-color: #1D4ED8;"
                },
                {
                    "class": ".border-blue-800",
                    "properties": "border-color: #1E40AF;"
                },
                {
                    "class": ".border-blue-900",
                    "properties": "border-color: #1E3A8A;"
                },
                {
                    "class": ".border-indigo-50",
                    "properties": "border-color: #EEF2FF;"
                },
                {
                    "class": ".border-indigo-100",
                    "properties": "border-color: #E0E7FF;"
                },
                {
                    "class": ".border-indigo-200",
                    "properties": "border-color: #C7D2FE;"
                },
                {
                    "class": ".border-indigo-300",
                    "properties": "border-color: #A5B4FC;"
                },
                {
                    "class": ".border-indigo-400",
                    "properties": "border-color: #818CF8;"
                },
                {
                    "class": ".border-indigo-500",
                    "properties": "border-color: #6366F1;"
                },
                {
                    "class": ".border-indigo-600",
                    "properties": "border-color: #4F46E5;"
                },
                {
                    "class": ".border-indigo-700",
                    "properties": "border-color: #4338CA;"
                },
                {
                    "class": ".border-indigo-800",
                    "properties": "border-color: #3730A3;"
                },
                {
                    "class": ".border-indigo-900",
                    "properties": "border-color: #312E81;"
                },
                {
                    "class": ".border-purple-50",
                    "properties": "border-color: #F5F3FF;"
                },
                {
                    "class": ".border-purple-100",
                    "properties": "border-color: #EDE9FE;"
                },
                {
                    "class": ".border-purple-200",
                    "properties": "border-color: #DDD6FE;"
                },
                {
                    "class": ".border-purple-300",
                    "properties": "border-color: #C4B5FD;"
                },
                {
                    "class": ".border-purple-400",
                    "properties": "border-color: #A78BFA;"
                },
                {
                    "class": ".border-purple-500",
                    "properties": "border-color: #8B5CF6;"
                },
                {
                    "class": ".border-purple-600",
                    "properties": "border-color: #7C3AED;"
                },
                {
                    "class": ".border-purple-700",
                    "properties": "border-color: #6D28D9;"
                },
                {
                    "class": ".border-purple-800",
                    "properties": "border-color: #5B21B6;"
                },
                {
                    "class": ".border-purple-900",
                    "properties": "border-color: #4C1D95;"
                },
                {
                    "class": ".border-pink-50",
                    "properties": "border-color: #FDF2F8;"
                },
                {
                    "class": ".border-pink-100",
                    "properties": "border-color: #FCE7F3;"
                },
                {
                    "class": ".border-pink-200",
                    "properties": "border-color: #FBCFE8;"
                },
                {
                    "class": ".border-pink-300",
                    "properties": "border-color: #F9A8D4;"
                },
                {
                    "class": ".border-pink-400",
                    "properties": "border-color: #F472B6;"
                },
                {
                    "class": ".border-pink-500",
                    "properties": "border-color: #EC4899;"
                },
                {
                    "class": ".border-pink-600",
                    "properties": "border-color: #DB2777;"
                },
                {
                    "class": ".border-pink-700",
                    "properties": "border-color: #BE185D;"
                },
                {
                    "class": ".border-pink-800",
                    "properties": "border-color: #9D174D;"
                },
                {
                    "class": ".border-pink-900",
                    "properties": "border-color: #831843;"
                }
            ]
        },
        {
            "title": "Border Opacity",
            "classList": [
                {
                    "class": ".border-opacity-0",
                    "properties": "border-opacity: 0;"
                },
                {
                    "class": ".border-opacity-5",
                    "properties": "border-opacity: 0.05;"
                },
                {
                    "class": ".border-opacity-10",
                    "properties": "border-opacity: 0.1;"
                },
                {
                    "class": ".border-opacity-20",
                    "properties": "border-opacity: 0.2;"
                },
                {
                    "class": ".border-opacity-25",
                    "properties": "border-opacity: 0.25;"
                },
                {
                    "class": ".border-opacity-30",
                    "properties": "border-opacity: 0.3;"
                },
                {
                    "class": ".border-opacity-40",
                    "properties": "border-opacity: 0.4;"
                },
                {
                    "class": ".border-opacity-50",
                    "properties": "border-opacity: 0.5;"
                },
                {
                    "class": ".border-opacity-60",
                    "properties": "border-opacity: 0.6;"
                },
                {
                    "class": ".border-opacity-70",
                    "properties": "border-opacity: 0.7;"
                },
                {
                    "class": ".border-opacity-75",
                    "properties": "border-opacity: 0.75;"
                },
                {
                    "class": ".border-opacity-80",
                    "properties": "border-opacity: 0.8;"
                },
                {
                    "class": ".border-opacity-90",
                    "properties": "border-opacity: 0.9;"
                },
                {
                    "class": ".border-opacity-100",
                    "properties": "border-opacity: 1;"
                }
            ]
        },
        {
            "title": "Border Style",
            "classList": [
                {
                    "class": ".border-solid",
                    "properties": "border-style: solid;"
                },
                {
                    "class": ".border-dashed",
                    "properties": "border-style: dashed;"
                },
                {
                    "class": ".border-dotted",
                    "properties": "border-style: dotted;"
                },
                {
                    "class": ".border-double",
                    "properties": "border-style: double;"
                },
                {
                    "class": ".border-none",
                    "properties": "border-style: none;"
                }
            ]
        },
        {
            "title": "Divide Width",
            "classList": [
                {
                    "class": ".divide-x-0",
                    "properties": "border-left-width: 0;"
                },
                {
                    "class": ".divide-x-2",
                    "properties": "border-left-width: 2px;"
                },
                {
                    "class": ".divide-x-4",
                    "properties": "border-left-width: 4px;"
                },
                {
                    "class": ".divide-x-8",
                    "properties": "border-left-width: 8px;"
                },
                {
                    "class": ".divide-x",
                    "properties": "border-left-width: 1px;"
                },
                {
                    "class": ".divide-y-0",
                    "properties": "border-top-width: 0;"
                },
                {
                    "class": ".divide-y-2",
                    "properties": "border-top-width: 2px;"
                },
                {
                    "class": ".divide-y-4",
                    "properties": "border-top-width: 4px;"
                },
                {
                    "class": ".divide-y-8",
                    "properties": "border-top-width: 8px;"
                },
                {
                    "class": ".divide-y",
                    "properties": "border-top-width: 1px;"
                },
                {
                    "class": ".divide-x-reverse",
                    "properties": "--divide-x-reverse: 1"
                },
                {
                    "class": ".divide-y-reverse",
                    "properties": "--divide-y-reverse: 1"
                }
            ]
        },
        {
            "title": "Divide Color",
            "classList": [
                {
                    "class": ".divide-transparent",
                    "properties": "border-color: transparent;"
                },
                {
                    "class": ".divide-current",
                    "properties": "border-color: currentColor;"
                },
                {
                    "class": ".divide-black",
                    "properties": "border-color: #000000;"
                },
                {
                    "class": ".divide-white",
                    "properties": "border-color: #ffffff;"
                },
                {
                    "class": ".divide-gray-50",
                    "properties": "border-color: #F9FAFB;"
                },
                {
                    "class": ".divide-gray-100",
                    "properties": "border-color: #F3F4F6;"
                },
                {
                    "class": ".divide-gray-200",
                    "properties": "border-color: #E5E7EB;"
                },
                {
                    "class": ".divide-gray-300",
                    "properties": "border-color: #D1D5DB;"
                },
                {
                    "class": ".divide-gray-400",
                    "properties": "border-color: #9CA3AF;"
                },
                {
                    "class": ".divide-gray-500",
                    "properties": "border-color: #6B7280;"
                },
                {
                    "class": ".divide-gray-600",
                    "properties": "border-color: #4B5563;"
                },
                {
                    "class": ".divide-gray-700",
                    "properties": "border-color: #374151;"
                },
                {
                    "class": ".divide-gray-800",
                    "properties": "border-color: #1F2937;"
                },
                {
                    "class": ".divide-gray-900",
                    "properties": "border-color: #111827;"
                },
                {
                    "class": ".divide-red-50",
                    "properties": "border-color: #FEF2F2;"
                },
                {
                    "class": ".divide-red-100",
                    "properties": "border-color: #FEE2E2;"
                },
                {
                    "class": ".divide-red-200",
                    "properties": "border-color: #FECACA;"
                },
                {
                    "class": ".divide-red-300",
                    "properties": "border-color: #FCA5A5;"
                },
                {
                    "class": ".divide-red-400",
                    "properties": "border-color: #F87171;"
                },
                {
                    "class": ".divide-red-500",
                    "properties": "border-color: #EF4444;"
                },
                {
                    "class": ".divide-red-600",
                    "properties": "border-color: #DC2626;"
                },
                {
                    "class": ".divide-red-700",
                    "properties": "border-color: #B91C1C;"
                },
                {
                    "class": ".divide-red-800",
                    "properties": "border-color: #991B1B;"
                },
                {
                    "class": ".divide-red-900",
                    "properties": "border-color: #7F1D1D;"
                },
                {
                    "class": ".divide-yellow-50",
                    "properties": "border-color: #FFFBEB;"
                },
                {
                    "class": ".divide-yellow-100",
                    "properties": "border-color: #FEF3C7;"
                },
                {
                    "class": ".divide-yellow-200",
                    "properties": "border-color: #FDE68A;"
                },
                {
                    "class": ".divide-yellow-300",
                    "properties": "border-color: #FCD34D;"
                },
                {
                    "class": ".divide-yellow-400",
                    "properties": "border-color: #FBBF24;"
                },
                {
                    "class": ".divide-yellow-500",
                    "properties": "border-color: #F59E0B;"
                },
                {
                    "class": ".divide-yellow-600",
                    "properties": "border-color: #D97706;"
                },
                {
                    "class": ".divide-yellow-700",
                    "properties": "border-color: #B45309;"
                },
                {
                    "class": ".divide-yellow-800",
                    "properties": "border-color: #92400E;"
                },
                {
                    "class": ".divide-yellow-900",
                    "properties": "border-color: #78350F;"
                },
                {
                    "class": ".divide-green-50",
                    "properties": "border-color: #ECFDF5;"
                },
                {
                    "class": ".divide-green-100",
                    "properties": "border-color: #D1FAE5;"
                },
                {
                    "class": ".divide-green-200",
                    "properties": "border-color: #A7F3D0;"
                },
                {
                    "class": ".divide-green-300",
                    "properties": "border-color: #6EE7B7;"
                },
                {
                    "class": ".divide-green-400",
                    "properties": "border-color: #34D399;"
                },
                {
                    "class": ".divide-green-500",
                    "properties": "border-color: #10B981;"
                },
                {
                    "class": ".divide-green-600",
                    "properties": "border-color: #059669;"
                },
                {
                    "class": ".divide-green-700",
                    "properties": "border-color: #047857;"
                },
                {
                    "class": ".divide-green-800",
                    "properties": "border-color: #065F46;"
                },
                {
                    "class": ".divide-green-900",
                    "properties": "border-color: #064E3B;"
                },
                {
                    "class": ".divide-blue-50",
                    "properties": "border-color: #EFF6FF;"
                },
                {
                    "class": ".divide-blue-100",
                    "properties": "border-color: #DBEAFE;"
                },
                {
                    "class": ".divide-blue-200",
                    "properties": "border-color: #BFDBFE;"
                },
                {
                    "class": ".divide-blue-300",
                    "properties": "border-color: #93C5FD;"
                },
                {
                    "class": ".divide-blue-400",
                    "properties": "border-color: #60A5FA;"
                },
                {
                    "class": ".divide-blue-500",
                    "properties": "border-color: #3B82F6;"
                },
                {
                    "class": ".divide-blue-600",
                    "properties": "border-color: #2563EB;"
                },
                {
                    "class": ".divide-blue-700",
                    "properties": "border-color: #1D4ED8;"
                },
                {
                    "class": ".divide-blue-800",
                    "properties": "border-color: #1E40AF;"
                },
                {
                    "class": ".divide-blue-900",
                    "properties": "border-color: #1E3A8A;"
                },
                {
                    "class": ".divide-indigo-50",
                    "properties": "border-color: #EEF2FF;"
                },
                {
                    "class": ".divide-indigo-100",
                    "properties": "border-color: #E0E7FF;"
                },
                {
                    "class": ".divide-indigo-200",
                    "properties": "border-color: #C7D2FE;"
                },
                {
                    "class": ".divide-indigo-300",
                    "properties": "border-color: #A5B4FC;"
                },
                {
                    "class": ".divide-indigo-400",
                    "properties": "border-color: #818CF8;"
                },
                {
                    "class": ".divide-indigo-500",
                    "properties": "border-color: #6366F1;"
                },
                {
                    "class": ".divide-indigo-600",
                    "properties": "border-color: #4F46E5;"
                },
                {
                    "class": ".divide-indigo-700",
                    "properties": "border-color: #4338CA;"
                },
                {
                    "class": ".divide-indigo-800",
                    "properties": "border-color: #3730A3;"
                },
                {
                    "class": ".divide-indigo-900",
                    "properties": "border-color: #312E81;"
                },
                {
                    "class": ".divide-purple-50",
                    "properties": "border-color: #F5F3FF;"
                },
                {
                    "class": ".divide-purple-100",
                    "properties": "border-color: #EDE9FE;"
                },
                {
                    "class": ".divide-purple-200",
                    "properties": "border-color: #DDD6FE;"
                },
                {
                    "class": ".divide-purple-300",
                    "properties": "border-color: #C4B5FD;"
                },
                {
                    "class": ".divide-purple-400",
                    "properties": "border-color: #A78BFA;"
                },
                {
                    "class": ".divide-purple-500",
                    "properties": "border-color: #8B5CF6;"
                },
                {
                    "class": ".divide-purple-600",
                    "properties": "border-color: #7C3AED;"
                },
                {
                    "class": ".divide-purple-700",
                    "properties": "border-color: #6D28D9;"
                },
                {
                    "class": ".divide-purple-800",
                    "properties": "border-color: #5B21B6;"
                },
                {
                    "class": ".divide-purple-900",
                    "properties": "border-color: #4C1D95;"
                },
                {
                    "class": ".divide-pink-50",
                    "properties": "border-color: #FDF2F8;"
                },
                {
                    "class": ".divide-pink-100",
                    "properties": "border-color: #FCE7F3;"
                },
                {
                    "class": ".divide-pink-200",
                    "properties": "border-color: #FBCFE8;"
                },
                {
                    "class": ".divide-pink-300",
                    "properties": "border-color: #F9A8D4;"
                },
                {
                    "class": ".divide-pink-400",
                    "properties": "border-color: #F472B6;"
                },
                {
                    "class": ".divide-pink-500",
                    "properties": "border-color: #EC4899;"
                },
                {
                    "class": ".divide-pink-600",
                    "properties": "border-color: #DB2777;"
                },
                {
                    "class": ".divide-pink-700",
                    "properties": "border-color: #BE185D;"
                },
                {
                    "class": ".divide-pink-800",
                    "properties": "border-color: #9D174D;"
                },
                {
                    "class": ".divide-pink-900",
                    "properties": "border-color: #831843;"
                }
            ]
        },
        {
            "title": "Divide Opacity",
            "classList": [
                {
                    "class": ".divide-opacity-0",
                    "properties": "--divide-opacity: 0;"
                },
                {
                    "class": ".divide-opacity-5",
                    "properties": "--divide-opacity: 0.05;"
                },
                {
                    "class": ".divide-opacity-10",
                    "properties": "--divide-opacity: 0.1;"
                },
                {
                    "class": ".divide-opacity-20",
                    "properties": "--divide-opacity: 0.2;"
                },
                {
                    "class": ".divide-opacity-25",
                    "properties": "--divide-opacity: 0.25;"
                },
                {
                    "class": ".divide-opacity-30",
                    "properties": "--divide-opacity: 0.3;"
                },
                {
                    "class": ".divide-opacity-40",
                    "properties": "--divide-opacity: 0.4;"
                },
                {
                    "class": ".divide-opacity-50",
                    "properties": "--divide-opacity: 0.5;"
                },
                {
                    "class": ".divide-opacity-60",
                    "properties": "--divide-opacity: 0.6;"
                },
                {
                    "class": ".divide-opacity-70",
                    "properties": "--divide-opacity: 0.7;"
                },
                {
                    "class": ".divide-opacity-75",
                    "properties": "--divide-opacity: 0.75;"
                },
                {
                    "class": ".divide-opacity-80",
                    "properties": "--divide-opacity: 0.8;"
                },
                {
                    "class": ".divide-opacity-90",
                    "properties": "--divide-opacity: 0.9;"
                },
                {
                    "class": ".divide-opacity-100",
                    "properties": "--divide-opacity: 1;"
                }
            ]
        },
        {
            "title": "Divide Style",
            "classList": [
                {
                    "class": ".divide-solid",
                    "properties": "border-style: solid;"
                },
                {
                    "class": ".divide-dashed",
                    "properties": "border-style: dashed;"
                },
                {
                    "class": ".divide-dotted",
                    "properties": "border-style: dotted;"
                },
                {
                    "class": ".divide-double",
                    "properties": "border-style: double;"
                },
                {
                    "class": ".divide-none",
                    "properties": "border-style: none;"
                }
            ]
        },
        {
            "title": "Ring Width",
            "classList": [
                {
                    "class": ".ring-0",
                    "properties": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-1",
                    "properties": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-2",
                    "properties": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-4",
                    "properties": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-8",
                    "properties": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-inset",
                    "properties": "--tw-ring-inset: inset;"
                }
            ]
        },
        {
            "title": "Ring Color",
            "classList": [
                {
                    "class": ".ring-transparent",
                    "properties": "--ring-color: transparent;"
                },
                {
                    "class": ".ring-current",
                    "properties": "--ring-color: currentColor;"
                },
                {
                    "class": ".ring-black",
                    "properties": "--ring-color: #000000;"
                },
                {
                    "class": ".ring-white",
                    "properties": "--ring-color: #ffffff;"
                },
                {
                    "class": ".ring-gray-50",
                    "properties": "--ring-color: #F9FAFB;"
                },
                {
                    "class": ".ring-gray-100",
                    "properties": "--ring-color: #F3F4F6;"
                },
                {
                    "class": ".ring-gray-200",
                    "properties": "--ring-color: #E5E7EB;"
                },
                {
                    "class": ".ring-gray-300",
                    "properties": "--ring-color: #D1D5DB;"
                },
                {
                    "class": ".ring-gray-400",
                    "properties": "--ring-color: #9CA3AF;"
                },
                {
                    "class": ".ring-gray-500",
                    "properties": "--ring-color: #6B7280;"
                },
                {
                    "class": ".ring-gray-600",
                    "properties": "--ring-color: #4B5563;"
                },
                {
                    "class": ".ring-gray-700",
                    "properties": "--ring-color: #374151;"
                },
                {
                    "class": ".ring-gray-800",
                    "properties": "--ring-color: #1F2937;"
                },
                {
                    "class": ".ring-gray-900",
                    "properties": "--ring-color: #111827;"
                },
                {
                    "class": ".ring-red-50",
                    "properties": "--ring-color: #FEF2F2;"
                },
                {
                    "class": ".ring-red-100",
                    "properties": "--ring-color: #FEE2E2;"
                },
                {
                    "class": ".ring-red-200",
                    "properties": "--ring-color: #FECACA;"
                },
                {
                    "class": ".ring-red-300",
                    "properties": "--ring-color: #FCA5A5;"
                },
                {
                    "class": ".ring-red-400",
                    "properties": "--ring-color: #F87171;"
                },
                {
                    "class": ".ring-red-500",
                    "properties": "--ring-color: #EF4444;"
                },
                {
                    "class": ".ring-red-600",
                    "properties": "--ring-color: #DC2626;"
                },
                {
                    "class": ".ring-red-700",
                    "properties": "--ring-color: #B91C1C;"
                },
                {
                    "class": ".ring-red-800",
                    "properties": "--ring-color: #991B1B;"
                },
                {
                    "class": ".ring-red-900",
                    "properties": "--ring-color: #7F1D1D;"
                },
                {
                    "class": ".ring-yellow-50",
                    "properties": "--ring-color: #FFFBEB;"
                },
                {
                    "class": ".ring-yellow-100",
                    "properties": "--ring-color: #FEF3C7;"
                },
                {
                    "class": ".ring-yellow-200",
                    "properties": "--ring-color: #FDE68A;"
                },
                {
                    "class": ".ring-yellow-300",
                    "properties": "--ring-color: #FCD34D;"
                },
                {
                    "class": ".ring-yellow-400",
                    "properties": "--ring-color: #FBBF24;"
                },
                {
                    "class": ".ring-yellow-500",
                    "properties": "--ring-color: #F59E0B;"
                },
                {
                    "class": ".ring-yellow-600",
                    "properties": "--ring-color: #D97706;"
                },
                {
                    "class": ".ring-yellow-700",
                    "properties": "--ring-color: #B45309;"
                },
                {
                    "class": ".ring-yellow-800",
                    "properties": "--ring-color: #92400E;"
                },
                {
                    "class": ".ring-yellow-900",
                    "properties": "--ring-color: #78350F;"
                },
                {
                    "class": ".ring-green-50",
                    "properties": "--ring-color: #ECFDF5;"
                },
                {
                    "class": ".ring-green-100",
                    "properties": "--ring-color: #D1FAE5;"
                },
                {
                    "class": ".ring-green-200",
                    "properties": "--ring-color: #A7F3D0;"
                },
                {
                    "class": ".ring-green-300",
                    "properties": "--ring-color: #6EE7B7;"
                },
                {
                    "class": ".ring-green-400",
                    "properties": "--ring-color: #34D399;"
                },
                {
                    "class": ".ring-green-500",
                    "properties": "--ring-color: #10B981;"
                },
                {
                    "class": ".ring-green-600",
                    "properties": "--ring-color: #059669;"
                },
                {
                    "class": ".ring-green-700",
                    "properties": "--ring-color: #047857;"
                },
                {
                    "class": ".ring-green-800",
                    "properties": "--ring-color: #065F46;"
                },
                {
                    "class": ".ring-green-900",
                    "properties": "--ring-color: #064E3B;"
                },
                {
                    "class": ".ring-blue-50",
                    "properties": "--ring-color: #EFF6FF;"
                },
                {
                    "class": ".ring-blue-100",
                    "properties": "--ring-color: #DBEAFE;"
                },
                {
                    "class": ".ring-blue-200",
                    "properties": "--ring-color: #BFDBFE;"
                },
                {
                    "class": ".ring-blue-300",
                    "properties": "--ring-color: #93C5FD;"
                },
                {
                    "class": ".ring-blue-400",
                    "properties": "--ring-color: #60A5FA;"
                },
                {
                    "class": ".ring-blue-500",
                    "properties": "--ring-color: #3B82F6;"
                },
                {
                    "class": ".ring-blue-600",
                    "properties": "--ring-color: #2563EB;"
                },
                {
                    "class": ".ring-blue-700",
                    "properties": "--ring-color: #1D4ED8;"
                },
                {
                    "class": ".ring-blue-800",
                    "properties": "--ring-color: #1E40AF;"
                },
                {
                    "class": ".ring-blue-900",
                    "properties": "--ring-color: #1E3A8A;"
                },
                {
                    "class": ".ring-indigo-50",
                    "properties": "--ring-color: #EEF2FF;"
                },
                {
                    "class": ".ring-indigo-100",
                    "properties": "--ring-color: #E0E7FF;"
                },
                {
                    "class": ".ring-indigo-200",
                    "properties": "--ring-color: #C7D2FE;"
                },
                {
                    "class": ".ring-indigo-300",
                    "properties": "--ring-color: #A5B4FC;"
                },
                {
                    "class": ".ring-indigo-400",
                    "properties": "--ring-color: #818CF8;"
                },
                {
                    "class": ".ring-indigo-500",
                    "properties": "--ring-color: #6366F1;"
                },
                {
                    "class": ".ring-indigo-600",
                    "properties": "--ring-color: #4F46E5;"
                },
                {
                    "class": ".ring-indigo-700",
                    "properties": "--ring-color: #4338CA;"
                },
                {
                    "class": ".ring-indigo-800",
                    "properties": "--ring-color: #3730A3;"
                },
                {
                    "class": ".ring-indigo-900",
                    "properties": "--ring-color: #312E81;"
                },
                {
                    "class": ".ring-purple-50",
                    "properties": "--ring-color: #F5F3FF;"
                },
                {
                    "class": ".ring-purple-100",
                    "properties": "--ring-color: #EDE9FE;"
                },
                {
                    "class": ".ring-purple-200",
                    "properties": "--ring-color: #DDD6FE;"
                },
                {
                    "class": ".ring-purple-300",
                    "properties": "--ring-color: #C4B5FD;"
                },
                {
                    "class": ".ring-purple-400",
                    "properties": "--ring-color: #A78BFA;"
                },
                {
                    "class": ".ring-purple-500",
                    "properties": "--ring-color: #8B5CF6;"
                },
                {
                    "class": ".ring-purple-600",
                    "properties": "--ring-color: #7C3AED;"
                },
                {
                    "class": ".ring-purple-700",
                    "properties": "--ring-color: #6D28D9;"
                },
                {
                    "class": ".ring-purple-800",
                    "properties": "--ring-color: #5B21B6;"
                },
                {
                    "class": ".ring-purple-900",
                    "properties": "--ring-color: #4C1D95;"
                },
                {
                    "class": ".ring-pink-50",
                    "properties": "--ring-color: #FDF2F8;"
                },
                {
                    "class": ".ring-pink-100",
                    "properties": "--ring-color: #FCE7F3;"
                },
                {
                    "class": ".ring-pink-200",
                    "properties": "--ring-color: #FBCFE8;"
                },
                {
                    "class": ".ring-pink-300",
                    "properties": "--ring-color: #F9A8D4;"
                },
                {
                    "class": ".ring-pink-400",
                    "properties": "--ring-color: #F472B6;"
                },
                {
                    "class": ".ring-pink-500",
                    "properties": "--ring-color: #EC4899;"
                },
                {
                    "class": ".ring-pink-600",
                    "properties": "--ring-color: #DB2777;"
                },
                {
                    "class": ".ring-pink-700",
                    "properties": "--ring-color: #BE185D;"
                },
                {
                    "class": ".ring-pink-800",
                    "properties": "--ring-color: #9D174D;"
                },
                {
                    "class": ".ring-pink-900",
                    "properties": "--ring-color: #831843;"
                }
            ]
        },
        {
            "title": "Ring Opacity",
            "classList": [
                {
                    "class": ".ring-opacity-0",
                    "properties": "--ring-opacity: 0;"
                },
                {
                    "class": ".ring-opacity-5",
                    "properties": "--ring-opacity: 0.05;"
                },
                {
                    "class": ".ring-opacity-10",
                    "properties": "--ring-opacity: 0.1;"
                },
                {
                    "class": ".ring-opacity-20",
                    "properties": "--ring-opacity: 0.2;"
                },
                {
                    "class": ".ring-opacity-25",
                    "properties": "--ring-opacity: 0.25;"
                },
                {
                    "class": ".ring-opacity-30",
                    "properties": "--ring-opacity: 0.3;"
                },
                {
                    "class": ".ring-opacity-40",
                    "properties": "--ring-opacity: 0.4;"
                },
                {
                    "class": ".ring-opacity-50",
                    "properties": "--ring-opacity: 0.5;"
                },
                {
                    "class": ".ring-opacity-60",
                    "properties": "--ring-opacity: 0.6;"
                },
                {
                    "class": ".ring-opacity-70",
                    "properties": "--ring-opacity: 0.7;"
                },
                {
                    "class": ".ring-opacity-75",
                    "properties": "--ring-opacity: 0.75;"
                },
                {
                    "class": ".ring-opacity-80",
                    "properties": "--ring-opacity: 0.8;"
                },
                {
                    "class": ".ring-opacity-90",
                    "properties": "--ring-opacity: 0.9;"
                },
                {
                    "class": ".ring-opacity-100",
                    "properties": "--ring-opacity: 1;"
                }
            ]
        },
        {
            "title": "Ring Width",
            "classList": [
                {
                    "class": ".ring-offset-0",
                    "properties": "--ring-offset-width: 0px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                },
                {
                    "class": ".ring-offset-1",
                    "properties": "--ring-offset-width: 1px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                },
                {
                    "class": ".ring-offset-2",
                    "properties": "--ring-offset-width: 2px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                },
                {
                    "class": ".ring-offset-4",
                    "properties": "--ring-offset-width: 4px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                },
                {
                    "class": ".ring-offset-8",
                    "properties": "--ring-offset-width: 8px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                }
            ]
        },
        {
            "title": "Ring Offset Color",
            "classList": [
                {
                    "class": ".ring-offset-transparent",
                    "properties": "--ring-offset-color: transparent;"
                },
                {
                    "class": ".ring-offset-current",
                    "properties": "--ring-offset-color: currentColor;"
                },
                {
                    "class": ".ring-offset-black",
                    "properties": "--ring-offset-color: #000000;"
                },
                {
                    "class": ".ring-offset-white",
                    "properties": "--ring-offset-color: #ffffff;"
                },
                {
                    "class": ".ring-offset-gray-50",
                    "properties": "--ring-offset-color: #F9FAFB;"
                },
                {
                    "class": ".ring-offset-gray-100",
                    "properties": "--ring-offset-color: #F3F4F6;"
                },
                {
                    "class": ".ring-offset-gray-200",
                    "properties": "--ring-offset-color: #E5E7EB;"
                },
                {
                    "class": ".ring-offset-gray-300",
                    "properties": "--ring-offset-color: #D1D5DB;"
                },
                {
                    "class": ".ring-offset-gray-400",
                    "properties": "--ring-offset-color: #9CA3AF;"
                },
                {
                    "class": ".ring-offset-gray-500",
                    "properties": "--ring-offset-color: #6B7280;"
                },
                {
                    "class": ".ring-offset-gray-600",
                    "properties": "--ring-offset-color: #4B5563;"
                },
                {
                    "class": ".ring-offset-gray-700",
                    "properties": "--ring-offset-color: #374151;"
                },
                {
                    "class": ".ring-offset-gray-800",
                    "properties": "--ring-offset-color: #1F2937;"
                },
                {
                    "class": ".ring-offset-gray-900",
                    "properties": "--ring-offset-color: #111827;"
                },
                {
                    "class": ".ring-offset-red-50",
                    "properties": "--ring-offset-color: #FEF2F2;"
                },
                {
                    "class": ".ring-offset-red-100",
                    "properties": "--ring-offset-color: #FEE2E2;"
                },
                {
                    "class": ".ring-offset-red-200",
                    "properties": "--ring-offset-color: #FECACA;"
                },
                {
                    "class": ".ring-offset-red-300",
                    "properties": "--ring-offset-color: #FCA5A5;"
                },
                {
                    "class": ".ring-offset-red-400",
                    "properties": "--ring-offset-color: #F87171;"
                },
                {
                    "class": ".ring-offset-red-500",
                    "properties": "--ring-offset-color: #EF4444;"
                },
                {
                    "class": ".ring-offset-red-600",
                    "properties": "--ring-offset-color: #DC2626;"
                },
                {
                    "class": ".ring-offset-red-700",
                    "properties": "--ring-offset-color: #B91C1C;"
                },
                {
                    "class": ".ring-offset-red-800",
                    "properties": "--ring-offset-color: #991B1B;"
                },
                {
                    "class": ".ring-offset-red-900",
                    "properties": "--ring-offset-color: #7F1D1D;"
                },
                {
                    "class": ".ring-offset-yellow-50",
                    "properties": "--ring-offset-color: #FFFBEB;"
                },
                {
                    "class": ".ring-offset-yellow-100",
                    "properties": "--ring-offset-color: #FEF3C7;"
                },
                {
                    "class": ".ring-offset-yellow-200",
                    "properties": "--ring-offset-color: #FDE68A;"
                },
                {
                    "class": ".ring-offset-yellow-300",
                    "properties": "--ring-offset-color: #FCD34D;"
                },
                {
                    "class": ".ring-offset-yellow-400",
                    "properties": "--ring-offset-color: #FBBF24;"
                },
                {
                    "class": ".ring-offset-yellow-500",
                    "properties": "--ring-offset-color: #F59E0B;"
                },
                {
                    "class": ".ring-offset-yellow-600",
                    "properties": "--ring-offset-color: #D97706;"
                },
                {
                    "class": ".ring-offset-yellow-700",
                    "properties": "--ring-offset-color: #B45309;"
                },
                {
                    "class": ".ring-offset-yellow-800",
                    "properties": "--ring-offset-color: #92400E;"
                },
                {
                    "class": ".ring-offset-yellow-900",
                    "properties": "--ring-offset-color: #78350F;"
                },
                {
                    "class": ".ring-offset-green-50",
                    "properties": "--ring-offset-color: #ECFDF5;"
                },
                {
                    "class": ".ring-offset-green-100",
                    "properties": "--ring-offset-color: #D1FAE5;"
                },
                {
                    "class": ".ring-offset-green-200",
                    "properties": "--ring-offset-color: #A7F3D0;"
                },
                {
                    "class": ".ring-offset-green-300",
                    "properties": "--ring-offset-color: #6EE7B7;"
                },
                {
                    "class": ".ring-offset-green-400",
                    "properties": "--ring-offset-color: #34D399;"
                },
                {
                    "class": ".ring-offset-green-500",
                    "properties": "--ring-offset-color: #10B981;"
                },
                {
                    "class": ".ring-offset-green-600",
                    "properties": "--ring-offset-color: #059669;"
                },
                {
                    "class": ".ring-offset-green-700",
                    "properties": "--ring-offset-color: #047857;"
                },
                {
                    "class": ".ring-offset-green-800",
                    "properties": "--ring-offset-color: #065F46;"
                },
                {
                    "class": ".ring-offset-green-900",
                    "properties": "--ring-offset-color: #064E3B;"
                },
                {
                    "class": ".ring-offset-blue-50",
                    "properties": "--ring-offset-color: #EFF6FF;"
                },
                {
                    "class": ".ring-offset-blue-100",
                    "properties": "--ring-offset-color: #DBEAFE;"
                },
                {
                    "class": ".ring-offset-blue-200",
                    "properties": "--ring-offset-color: #BFDBFE;"
                },
                {
                    "class": ".ring-offset-blue-300",
                    "properties": "--ring-offset-color: #93C5FD;"
                },
                {
                    "class": ".ring-offset-blue-400",
                    "properties": "--ring-offset-color: #60A5FA;"
                },
                {
                    "class": ".ring-offset-blue-500",
                    "properties": "--ring-offset-color: #3B82F6;"
                },
                {
                    "class": ".ring-offset-blue-600",
                    "properties": "--ring-offset-color: #2563EB;"
                },
                {
                    "class": ".ring-offset-blue-700",
                    "properties": "--ring-offset-color: #1D4ED8;"
                },
                {
                    "class": ".ring-offset-blue-800",
                    "properties": "--ring-offset-color: #1E40AF;"
                },
                {
                    "class": ".ring-offset-blue-900",
                    "properties": "--ring-offset-color: #1E3A8A;"
                },
                {
                    "class": ".ring-offset-indigo-50",
                    "properties": "--ring-offset-color: #EEF2FF;"
                },
                {
                    "class": ".ring-offset-indigo-100",
                    "properties": "--ring-offset-color: #E0E7FF;"
                },
                {
                    "class": ".ring-offset-indigo-200",
                    "properties": "--ring-offset-color: #C7D2FE;"
                },
                {
                    "class": ".ring-offset-indigo-300",
                    "properties": "--ring-offset-color: #A5B4FC;"
                },
                {
                    "class": ".ring-offset-indigo-400",
                    "properties": "--ring-offset-color: #818CF8;"
                },
                {
                    "class": ".ring-offset-indigo-500",
                    "properties": "--ring-offset-color: #6366F1;"
                },
                {
                    "class": ".ring-offset-indigo-600",
                    "properties": "--ring-offset-color: #4F46E5;"
                },
                {
                    "class": ".ring-offset-indigo-700",
                    "properties": "--ring-offset-color: #4338CA;"
                },
                {
                    "class": ".ring-offset-indigo-800",
                    "properties": "--ring-offset-color: #3730A3;"
                },
                {
                    "class": ".ring-offset-indigo-900",
                    "properties": "--ring-offset-color: #312E81;"
                },
                {
                    "class": ".ring-offset-purple-50",
                    "properties": "--ring-offset-color: #F5F3FF;"
                },
                {
                    "class": ".ring-offset-purple-100",
                    "properties": "--ring-offset-color: #EDE9FE;"
                },
                {
                    "class": ".ring-offset-purple-200",
                    "properties": "--ring-offset-color: #DDD6FE;"
                },
                {
                    "class": ".ring-offset-purple-300",
                    "properties": "--ring-offset-color: #C4B5FD;"
                },
                {
                    "class": ".ring-offset-purple-400",
                    "properties": "--ring-offset-color: #A78BFA;"
                },
                {
                    "class": ".ring-offset-purple-500",
                    "properties": "--ring-offset-color: #8B5CF6;"
                },
                {
                    "class": ".ring-offset-purple-600",
                    "properties": "--ring-offset-color: #7C3AED;"
                },
                {
                    "class": ".ring-offset-purple-700",
                    "properties": "--ring-offset-color: #6D28D9;"
                },
                {
                    "class": ".ring-offset-purple-800",
                    "properties": "--ring-offset-color: #5B21B6;"
                },
                {
                    "class": ".ring-offset-purple-900",
                    "properties": "--ring-offset-color: #4C1D95;"
                },
                {
                    "class": ".ring-offset-pink-50",
                    "properties": "--ring-offset-color: #FDF2F8;"
                },
                {
                    "class": ".ring-offset-pink-100",
                    "properties": "--ring-offset-color: #FCE7F3;"
                },
                {
                    "class": ".ring-offset-pink-200",
                    "properties": "--ring-offset-color: #FBCFE8;"
                },
                {
                    "class": ".ring-offset-pink-300",
                    "properties": "--ring-offset-color: #F9A8D4;"
                },
                {
                    "class": ".ring-offset-pink-400",
                    "properties": "--ring-offset-color: #F472B6;"
                },
                {
                    "class": ".ring-offset-pink-500",
                    "properties": "--ring-offset-color: #EC4899;"
                },
                {
                    "class": ".ring-offset-pink-600",
                    "properties": "--ring-offset-color: #DB2777;"
                },
                {
                    "class": ".ring-offset-pink-700",
                    "properties": "--ring-offset-color: #BE185D;"
                },
                {
                    "class": ".ring-offset-pink-800",
                    "properties": "--ring-offset-color: #9D174D;"
                },
                {
                    "class": ".ring-offset-pink-900",
                    "properties": "--ring-offset-color: #831843;"
                }
            ]
        }
    ],
    "Tables": [
        {
            "title": "Border Collapse",
            "classList": [
                {
                    "class": ".border-collapse",
                    "properties": "border-collapse: collapse;"
                },
                {
                    "class": ".border-separate",
                    "properties": "border-collapse: separate;"
                }
            ]
        },
        {
            "title": "Table Layout",
            "classList": [
                {
                    "class": ".table-auto",
                    "properties": "table-layout: auto;"
                },
                {
                    "class": ".table-fixed",
                    "properties": "table-layout: fixed;"
                }
            ]
        }
    ],
    "Interactivity": [
        {
            "title": "Appearance",
            "classList": [
                {
                    "class": ".appearance-none",
                    "properties": "appearance: none;"
                }
            ]
        },
        {
            "title": "Cursor",
            "classList": [
                {
                    "class": ".cursor-auto",
                    "properties": "cursor: auto;"
                },
                {
                    "class": ".cursor-default",
                    "properties": "cursor: default;"
                },
                {
                    "class": ".cursor-pointer",
                    "properties": "cursor: pointer;"
                },
                {
                    "class": ".cursor-wait",
                    "properties": "cursor: wait;"
                },
                {
                    "class": ".cursor-text",
                    "properties": "cursor: text;"
                },
                {
                    "class": ".cursor-move",
                    "properties": "cursor: move;"
                },
                {
                    "class": ".cursor-help",
                    "properties": "cursor: help;"
                },
                {
                    "class": ".cursor-not-allowed",
                    "properties": "cursor: not-allowed;"
                }
            ]
        },
        {
            "title": "Outline",
            "classList": [
                {
                    "class": ".outline-none",
                    "properties": "outline: 0;"
                },
                {
                    "class": ".outline-white",
                    "properties": "outline: 2px dotted white; outline-offset: 2px;"
                },
                {
                    "class": ".outline-black",
                    "properties": "outline: 2px dotted black; outline-offset: 2px;"
                }
            ]
        },
        {
            "title": "Pointer Events",
            "classList": [
                {
                    "class": ".pointer-events-none",
                    "properties": "pointer-events: none;"
                },
                {
                    "class": ".pointer-events-auto",
                    "properties": "pointer-events: auto;"
                }
            ]
        },
        {
            "title": "Resize",
            "classList": [
                {
                    "class": ".resize-none",
                    "properties": "resize: none;"
                },
                {
                    "class": ".resize",
                    "properties": "resize: both;"
                },
                {
                    "class": ".resize-y",
                    "properties": "resize: vertical;"
                },
                {
                    "class": ".resize-x",
                    "properties": "resize: horizontal;"
                }
            ]
        },
        {
            "title": "User Select",
            "classList": [
                {
                    "class": ".select-none",
                    "properties": "user-select: none;"
                },
                {
                    "class": ".select-text",
                    "properties": "user-select: text;"
                },
                {
                    "class": ".select-all",
                    "properties": "user-select: all;"
                },
                {
                    "class": ".select-auto",
                    "properties": "user-select: auto;"
                }
            ]
        },
        {
            "title": "Accessibility",
            "classList": [
                {
                    "class": ".sr-only",
                    "properties": "position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); whiteSpace: nowrap; borderWidth: 0;"
                },
                {
                    "class": ".not-sr-only",
                    "properties": "position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; whiteSpace: normal;"
                }
            ]
        }
    ],
    "Grid": [
        {
            "title": "Grid Template Columns",
            "classList": [
                {
                    "class": ".grid-cols-1",
                    "properties": "grid-template-columns: repeat(1, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-2",
                    "properties": "grid-template-columns: repeat(2, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-3",
                    "properties": "grid-template-columns: repeat(3, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-4",
                    "properties": "grid-template-columns: repeat(4, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-5",
                    "properties": "grid-template-columns: repeat(5, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-6",
                    "properties": "grid-template-columns: repeat(6, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-7",
                    "properties": "grid-template-columns: repeat(7, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-8",
                    "properties": "grid-template-columns: repeat(8, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-9",
                    "properties": "grid-template-columns: repeat(9, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-10",
                    "properties": "grid-template-columns: repeat(10, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-11",
                    "properties": "grid-template-columns: repeat(11, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-12",
                    "properties": "grid-template-columns: repeat(12, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-none",
                    "properties": "grid-template-columns: none;"
                }
            ]
        },
        {
            "title": "Grid Column, start/end",
            "classList": [
                {
                    "class": ".col-auto",
                    "properties": "grid-column: auto;"
                },
                {
                    "class": ".col-span-1",
                    "properties": "grid-column: span 1 / span 1;"
                },
                {
                    "class": ".col-span-2",
                    "properties": "grid-column: span 2 / span 2;"
                },
                {
                    "class": ".col-span-3",
                    "properties": "grid-column: span 3 / span 3;"
                },
                {
                    "class": ".col-span-4",
                    "properties": "grid-column: span 4 / span 4;"
                },
                {
                    "class": ".col-span-5",
                    "properties": "grid-column: span 5 / span 5;"
                },
                {
                    "class": ".col-span-6",
                    "properties": "grid-column: span 6 / span 6;"
                },
                {
                    "class": ".col-span-7",
                    "properties": "grid-column: span 7 / span 7;"
                },
                {
                    "class": ".col-span-8",
                    "properties": "grid-column: span 8 / span 8;"
                },
                {
                    "class": ".col-span-9",
                    "properties": "grid-column: span 9 / span 9;"
                },
                {
                    "class": ".col-span-10",
                    "properties": "grid-column: span 10 / span 10;"
                },
                {
                    "class": ".col-span-11",
                    "properties": "grid-column: span 11 / span 11;"
                },
                {
                    "class": ".col-span-12",
                    "properties": "grid-column: span 12 / span 12;"
                },
                {
                    "class": ".col-start-1",
                    "properties": "grid-column-start: 1;"
                },
                {
                    "class": ".col-start-2",
                    "properties": "grid-column-start: 2;"
                },
                {
                    "class": ".col-start-3",
                    "properties": "grid-column-start: 3;"
                },
                {
                    "class": ".col-start-4",
                    "properties": "grid-column-start: 4;"
                },
                {
                    "class": ".col-start-5",
                    "properties": "grid-column-start: 5;"
                },
                {
                    "class": ".col-start-6",
                    "properties": "grid-column-start: 6;"
                },
                {
                    "class": ".col-start-7",
                    "properties": "grid-column-start: 7;"
                },
                {
                    "class": ".col-start-8",
                    "properties": "grid-column-start: 8;"
                },
                {
                    "class": ".col-start-9",
                    "properties": "grid-column-start: 9;"
                },
                {
                    "class": ".col-start-10",
                    "properties": "grid-column-start: 10;"
                },
                {
                    "class": ".col-start-11",
                    "properties": "grid-column-start: 11;"
                },
                {
                    "class": ".col-start-12",
                    "properties": "grid-column-start: 12;"
                },
                {
                    "class": ".col-start-13",
                    "properties": "grid-column-start: 13;"
                },
                {
                    "class": ".col-start-auto",
                    "properties": "grid-column-start: auto;"
                },
                {
                    "class": ".col-end-1",
                    "properties": "grid-column-end: 1;"
                },
                {
                    "class": ".col-end-2",
                    "properties": "grid-column-end: 2;"
                },
                {
                    "class": ".col-end-3",
                    "properties": "grid-column-end: 3;"
                },
                {
                    "class": ".col-end-4",
                    "properties": "grid-column-end: 4;"
                },
                {
                    "class": ".col-end-5",
                    "properties": "grid-column-end: 5;"
                },
                {
                    "class": ".col-end-6",
                    "properties": "grid-column-end: 6;"
                },
                {
                    "class": ".col-end-7",
                    "properties": "grid-column-end: 7;"
                },
                {
                    "class": ".col-end-8",
                    "properties": "grid-column-end: 8;"
                },
                {
                    "class": ".col-end-9",
                    "properties": "grid-column-end: 9;"
                },
                {
                    "class": ".col-end-10",
                    "properties": "grid-column-end: 10;"
                },
                {
                    "class": ".col-end-11",
                    "properties": "grid-column-end: 11;"
                },
                {
                    "class": ".col-end-12",
                    "properties": "grid-column-end: 12;"
                },
                {
                    "class": ".col-end-13",
                    "properties": "grid-column-end: 13;"
                },
                {
                    "class": ".col-end-auto",
                    "properties": "grid-column-end: auto;"
                }
            ]
        },
        {
            "title": "Grid Template Rows",
            "classList": [
                {
                    "class": ".grid-rows-1",
                    "properties": "grid-template-rows: repeat(1, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-2",
                    "properties": "grid-template-rows: repeat(2, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-3",
                    "properties": "grid-template-rows: repeat(3, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-4",
                    "properties": "grid-template-rows: repeat(4, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-5",
                    "properties": "grid-template-rows: repeat(5, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-6",
                    "properties": "grid-template-rows: repeat(6, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-none",
                    "properties": "grid-template-rows: none;"
                }
            ]
        },
        {
            "title": "Grid Row, start/end",
            "classList": [
                {
                    "class": ".row-auto",
                    "properties": "grid-row: auto;"
                },
                {
                    "class": ".row-span-1",
                    "properties": "grid-row: span 1 / span 1;"
                },
                {
                    "class": ".row-span-2",
                    "properties": "grid-row: span 2 / span 2;"
                },
                {
                    "class": ".row-span-3",
                    "properties": "grid-row: span 3 / span 3;"
                },
                {
                    "class": ".row-span-4",
                    "properties": "grid-row: span 4 / span 4;"
                },
                {
                    "class": ".row-span-5",
                    "properties": "grid-row: span 5 / span 5;"
                },
                {
                    "class": ".row-span-6",
                    "properties": "grid-row: span 6 / span 6;"
                },
                {
                    "class": ".row-start-1",
                    "properties": "grid-row-start: 1;"
                },
                {
                    "class": ".row-start-2",
                    "properties": "grid-row-start: 2;"
                },
                {
                    "class": ".row-start-3",
                    "properties": "grid-row-start: 3;"
                },
                {
                    "class": ".row-start-4",
                    "properties": "grid-row-start: 4;"
                },
                {
                    "class": ".row-start-5",
                    "properties": "grid-row-start: 5;"
                },
                {
                    "class": ".row-start-6",
                    "properties": "grid-row-start: 6;"
                },
                {
                    "class": ".row-start-7",
                    "properties": "grid-row-start: 7;"
                },
                {
                    "class": ".row-start-auto",
                    "properties": "grid-row-start: auto;"
                },
                {
                    "class": ".row-end-1",
                    "properties": "grid-row-end: 1;"
                },
                {
                    "class": ".row-end-2",
                    "properties": "grid-row-end: 2;"
                },
                {
                    "class": ".row-end-3",
                    "properties": "grid-row-end: 3;"
                },
                {
                    "class": ".row-end-4",
                    "properties": "grid-row-end: 4;"
                },
                {
                    "class": ".row-end-5",
                    "properties": "grid-row-end: 5;"
                },
                {
                    "class": ".row-end-6",
                    "properties": "grid-row-end: 6;"
                },
                {
                    "class": ".row-end-7",
                    "properties": "grid-row-end: 7;"
                },
                {
                    "class": ".row-end-auto",
                    "properties": "grid-row-end: auto;"
                }
            ]
        },
        {
            "title": "Gap",
            "classList": [
                {
                    "class": ".gap-0",
                    "properties": "gap: 0;"
                },
                {
                    "class": ".gap-0.5",
                    "properties": "gap: 0.125rem;"
                },
                {
                    "class": ".gap-1",
                    "properties": "gap: 0.25rem;"
                },
                {
                    "class": ".gap-1.5",
                    "properties": "gap: 0.375rem;"
                },
                {
                    "class": ".gap-2",
                    "properties": "gap: 0.5rem;"
                },
                {
                    "class": ".gap-2.5",
                    "properties": "gap: 0.625rem;"
                },
                {
                    "class": ".gap-3",
                    "properties": "gap: 0.75rem;"
                },
                {
                    "class": ".gap-3.5",
                    "properties": "gap: 0.875rem;"
                },
                {
                    "class": ".gap-4",
                    "properties": "gap: 1rem;"
                },
                {
                    "class": ".gap-5",
                    "properties": "gap: 1.25rem;"
                },
                {
                    "class": ".gap-6",
                    "properties": "gap: 1.5rem;"
                },
                {
                    "class": ".gap-8",
                    "properties": "gap: 2rem;"
                },
                {
                    "class": ".gap-10",
                    "properties": "gap: 2.5rem;"
                },
                {
                    "class": ".gap-11",
                    "properties": "gap: 2.75rem;"
                },
                {
                    "class": ".gap-12",
                    "properties": "gap: 3rem;"
                },
                {
                    "class": ".gap-14",
                    "properties": "gap: 3.5rem;"
                },
                {
                    "class": ".gap-16",
                    "properties": "gap: 4rem;"
                },
                {
                    "class": ".gap-20",
                    "properties": "gap: 5rem;"
                },
                {
                    "class": ".gap-24",
                    "properties": "gap: 6rem;"
                },
                {
                    "class": ".gap-28",
                    "properties": "gap: 7rem;"
                },
                {
                    "class": ".gap-32",
                    "properties": "gap: 8rem;"
                },
                {
                    "class": ".gap-36",
                    "properties": "gap: 9rem;"
                },
                {
                    "class": ".gap-40",
                    "properties": "gap: 10rem;"
                },
                {
                    "class": ".gap-44",
                    "properties": "gap: 11rem;"
                },
                {
                    "class": ".gap-48",
                    "properties": "gap: 12rem;"
                },
                {
                    "class": ".gap-52",
                    "properties": "gap: 13rem;"
                },
                {
                    "class": ".gap-56",
                    "properties": "gap: 14rem;"
                },
                {
                    "class": ".gap-64",
                    "properties": "gap: 16rem;"
                },
                {
                    "class": ".gap-72",
                    "properties": "gap: 18rem;"
                },
                {
                    "class": ".gap-80",
                    "properties": "gap: 20rem;"
                },
                {
                    "class": ".gap-96",
                    "properties": "gap: 24rem;"
                },
                {
                    "class": ".gap-px",
                    "properties": "gap: 1px;"
                },
                {
                    "class": ".gap-x-0",
                    "properties": "column-gap: 0;"
                },
                {
                    "class": ".gap-x-0.5",
                    "properties": "column-gap: 0.125rem;"
                },
                {
                    "class": ".gap-x-1",
                    "properties": "column-gap: 0.25rem;"
                },
                {
                    "class": ".gap-x-1.5",
                    "properties": "column-gap: 0.375rem;"
                },
                {
                    "class": ".gap-x-2",
                    "properties": "column-gap: 0.5rem;"
                },
                {
                    "class": ".gap-x-2.5",
                    "properties": "column-gap: 0.625rem;"
                },
                {
                    "class": ".gap-x-3",
                    "properties": "column-gap: 0.75rem;"
                },
                {
                    "class": ".gap-x-3.5",
                    "properties": "column-gap: 0.875rem;"
                },
                {
                    "class": ".gap-x-4",
                    "properties": "column-gap: 1rem;"
                },
                {
                    "class": ".gap-x-5",
                    "properties": "column-gap: 1.25rem;"
                },
                {
                    "class": ".gap-x-6",
                    "properties": "column-gap: 1.5rem;"
                },
                {
                    "class": ".gap-x-8",
                    "properties": "column-gap: 2rem;"
                },
                {
                    "class": ".gap-x-10",
                    "properties": "column-gap: 2.5rem;"
                },
                {
                    "class": ".gap-x-11",
                    "properties": "column-gap: 2.75rem;"
                },
                {
                    "class": ".gap-x-12",
                    "properties": "column-gap: 3rem;"
                },
                {
                    "class": ".gap-x-14",
                    "properties": "column-gap: 3.5rem;"
                },
                {
                    "class": ".gap-x-16",
                    "properties": "column-gap: 4rem;"
                },
                {
                    "class": ".gap-x-20",
                    "properties": "column-gap: 5rem;"
                },
                {
                    "class": ".gap-x-24",
                    "properties": "column-gap: 6rem;"
                },
                {
                    "class": ".gap-x-28",
                    "properties": "column-gap: 7rem;"
                },
                {
                    "class": ".gap-x-32",
                    "properties": "column-gap: 8rem;"
                },
                {
                    "class": ".gap-x-36",
                    "properties": "column-gap: 9rem;"
                },
                {
                    "class": ".gap-x-40",
                    "properties": "column-gap: 10rem;"
                },
                {
                    "class": ".gap-x-44",
                    "properties": "column-gap: 11rem;"
                },
                {
                    "class": ".gap-x-48",
                    "properties": "column-gap: 12rem;"
                },
                {
                    "class": ".gap-x-52",
                    "properties": "column-gap: 13rem;"
                },
                {
                    "class": ".gap-x-56",
                    "properties": "column-gap: 14rem;"
                },
                {
                    "class": ".gap-x-64",
                    "properties": "column-gap: 16rem;"
                },
                {
                    "class": ".gap-x-72",
                    "properties": "column-gap: 18rem;"
                },
                {
                    "class": ".gap-x-80",
                    "properties": "column-gap: 20rem;"
                },
                {
                    "class": ".gap-x-96",
                    "properties": "column-gap: 24rem;"
                },
                {
                    "class": ".gap-x-px",
                    "properties": "column-gap: 1px;"
                },
                {
                    "class": ".gap-y-0",
                    "properties": "row-gap: 0;"
                },
                {
                    "class": ".gap-y-0.5",
                    "properties": "row-gap: 0.125rem;"
                },
                {
                    "class": ".gap-y-1",
                    "properties": "row-gap: 0.25rem;"
                },
                {
                    "class": ".gap-y-1.5",
                    "properties": "row-gap: 0.375rem;"
                },
                {
                    "class": ".gap-y-2",
                    "properties": "row-gap: 0.5rem;"
                },
                {
                    "class": ".gap-y-2.5",
                    "properties": "row-gap: 0.625rem;"
                },
                {
                    "class": ".gap-y-3",
                    "properties": "row-gap: 0.75rem;"
                },
                {
                    "class": ".gap-y-3.5",
                    "properties": "row-gap: 0.875rem;"
                },
                {
                    "class": ".gap-y-4",
                    "properties": "row-gap: 1rem;"
                },
                {
                    "class": ".gap-y-5",
                    "properties": "row-gap: 1.25rem;"
                },
                {
                    "class": ".gap-y-6",
                    "properties": "row-gap: 1.5rem;"
                },
                {
                    "class": ".gap-y-8",
                    "properties": "row-gap: 2rem;"
                },
                {
                    "class": ".gap-y-10",
                    "properties": "row-gap: 2.5rem;"
                },
                {
                    "class": ".gap-y-11",
                    "properties": "row-gap: 2.75rem;"
                },
                {
                    "class": ".gap-y-12",
                    "properties": "row-gap: 3rem;"
                },
                {
                    "class": ".gap-y-14",
                    "properties": "row-gap: 3.5rem;"
                },
                {
                    "class": ".gap-y-16",
                    "properties": "row-gap: 4rem;"
                },
                {
                    "class": ".gap-y-20",
                    "properties": "row-gap: 5rem;"
                },
                {
                    "class": ".gap-y-24",
                    "properties": "row-gap: 6rem;"
                },
                {
                    "class": ".gap-y-28",
                    "properties": "row-gap: 7rem;"
                },
                {
                    "class": ".gap-y-32",
                    "properties": "row-gap: 8rem;"
                },
                {
                    "class": ".gap-y-36",
                    "properties": "row-gap: 9rem;"
                },
                {
                    "class": ".gap-y-40",
                    "properties": "row-gap: 10rem;"
                },
                {
                    "class": ".gap-y-44",
                    "properties": "row-gap: 11rem;"
                },
                {
                    "class": ".gap-y-48",
                    "properties": "row-gap: 12rem;"
                },
                {
                    "class": ".gap-y-52",
                    "properties": "row-gap: 13rem;"
                },
                {
                    "class": ".gap-y-56",
                    "properties": "row-gap: 14rem;"
                },
                {
                    "class": ".gap-y-64",
                    "properties": "row-gap: 16rem;"
                },
                {
                    "class": ".gap-y-72",
                    "properties": "row-gap: 18rem;"
                },
                {
                    "class": ".gap-y-80",
                    "properties": "row-gap: 20rem;"
                },
                {
                    "class": ".gap-y-96",
                    "properties": "row-gap: 24rem;"
                },
                {
                    "class": ".gap-y-px",
                    "properties": "row-gap: 1px;"
                }
            ]
        },
        {
            "title": "Grid Auto Flow",
            "classList": [
                {
                    "class": ".grid-flow-row",
                    "properties": "grid-auto-flow: row;"
                },
                {
                    "class": ".grid-flow-col",
                    "properties": "grid-auto-flow: column;"
                },
                {
                    "class": ".grid-flow-row-dense",
                    "properties": "grid-auto-flow: row dense;"
                },
                {
                    "class": ".grid-flow-col-dense",
                    "properties": "grid-auto-flow: column dense;"
                }
            ]
        },
        {
            "title": "Grid Auto Columns",
            "classList": [
                {
                    "class": ".auto-cols-auto",
                    "properties": "grid-auto-columns: auto;"
                },
                {
                    "class": ".auto-cols-min",
                    "properties": "grid-auto-columns: min;"
                },
                {
                    "class": ".auto-cols-max",
                    "properties": "grid-auto-columns: max;"
                },
                {
                    "class": ".auto-cols-fr",
                    "properties": "grid-auto-columns: minmax(0, 1fr);"
                }
            ]
        },
        {
            "title": "Grid Auto Rows",
            "classList": [
                {
                    "class": ".auto-rows-auto",
                    "properties": "grid-auto-rows: auto;"
                },
                {
                    "class": ".auto-rows-min",
                    "properties": "grid-auto-rows: min;"
                },
                {
                    "class": ".auto-rows-max",
                    "properties": "grid-auto-rows: max;"
                },
                {
                    "class": ".auto-rows-fr",
                    "properties": "grid-auto-rows: minmax(0, 1fr);"
                }
            ]
        }
    ],
    "Typography": [
        {
            "title": "Text Color",
            "classList": [
                {
                    "class": ".text-transparent",
                    "properties": "color: transparent;"
                },
                {
                    "class": ".text-current",
                    "properties": "color: currentColor;"
                },
                {
                    "class": ".text-black",
                    "properties": "color: #000000;"
                },
                {
                    "class": ".text-white",
                    "properties": "color: #ffffff;"
                },
                {
                    "class": ".text-gray-50",
                    "properties": "color: #F9FAFB;"
                },
                {
                    "class": ".text-gray-100",
                    "properties": "color: #F3F4F6;"
                },
                {
                    "class": ".text-gray-200",
                    "properties": "color: #E5E7EB;"
                },
                {
                    "class": ".text-gray-300",
                    "properties": "color: #D1D5DB;"
                },
                {
                    "class": ".text-gray-400",
                    "properties": "color: #9CA3AF;"
                },
                {
                    "class": ".text-gray-500",
                    "properties": "color: #6B7280;"
                },
                {
                    "class": ".text-gray-600",
                    "properties": "color: #4B5563;"
                },
                {
                    "class": ".text-gray-700",
                    "properties": "color: #374151;"
                },
                {
                    "class": ".text-gray-800",
                    "properties": "color: #1F2937;"
                },
                {
                    "class": ".text-gray-900",
                    "properties": "color: #111827;"
                },
                {
                    "class": ".text-red-50",
                    "properties": "color: #FEF2F2;"
                },
                {
                    "class": ".text-red-100",
                    "properties": "color: #FEE2E2;"
                },
                {
                    "class": ".text-red-200",
                    "properties": "color: #FECACA;"
                },
                {
                    "class": ".text-red-300",
                    "properties": "color: #FCA5A5;"
                },
                {
                    "class": ".text-red-400",
                    "properties": "color: #F87171;"
                },
                {
                    "class": ".text-red-500",
                    "properties": "color: #EF4444;"
                },
                {
                    "class": ".text-red-600",
                    "properties": "color: #DC2626;"
                },
                {
                    "class": ".text-red-700",
                    "properties": "color: #B91C1C;"
                },
                {
                    "class": ".text-red-800",
                    "properties": "color: #991B1B;"
                },
                {
                    "class": ".text-red-900",
                    "properties": "color: #7F1D1D;"
                },
                {
                    "class": ".text-yellow-50",
                    "properties": "color: #FFFBEB;"
                },
                {
                    "class": ".text-yellow-100",
                    "properties": "color: #FEF3C7;"
                },
                {
                    "class": ".text-yellow-200",
                    "properties": "color: #FDE68A;"
                },
                {
                    "class": ".text-yellow-300",
                    "properties": "color: #FCD34D;"
                },
                {
                    "class": ".text-yellow-400",
                    "properties": "color: #FBBF24;"
                },
                {
                    "class": ".text-yellow-500",
                    "properties": "color: #F59E0B;"
                },
                {
                    "class": ".text-yellow-600",
                    "properties": "color: #D97706;"
                },
                {
                    "class": ".text-yellow-700",
                    "properties": "color: #B45309;"
                },
                {
                    "class": ".text-yellow-800",
                    "properties": "color: #92400E;"
                },
                {
                    "class": ".text-yellow-900",
                    "properties": "color: #78350F;"
                },
                {
                    "class": ".text-green-50",
                    "properties": "color: #ECFDF5;"
                },
                {
                    "class": ".text-green-100",
                    "properties": "color: #D1FAE5;"
                },
                {
                    "class": ".text-green-200",
                    "properties": "color: #A7F3D0;"
                },
                {
                    "class": ".text-green-300",
                    "properties": "color: #6EE7B7;"
                },
                {
                    "class": ".text-green-400",
                    "properties": "color: #34D399;"
                },
                {
                    "class": ".text-green-500",
                    "properties": "color: #10B981;"
                },
                {
                    "class": ".text-green-600",
                    "properties": "color: #059669;"
                },
                {
                    "class": ".text-green-700",
                    "properties": "color: #047857;"
                },
                {
                    "class": ".text-green-800",
                    "properties": "color: #065F46;"
                },
                {
                    "class": ".text-green-900",
                    "properties": "color: #064E3B;"
                },
                {
                    "class": ".text-blue-50",
                    "properties": "color: #EFF6FF;"
                },
                {
                    "class": ".text-blue-100",
                    "properties": "color: #DBEAFE;"
                },
                {
                    "class": ".text-blue-200",
                    "properties": "color: #BFDBFE;"
                },
                {
                    "class": ".text-blue-300",
                    "properties": "color: #93C5FD;"
                },
                {
                    "class": ".text-blue-400",
                    "properties": "color: #60A5FA;"
                },
                {
                    "class": ".text-blue-500",
                    "properties": "color: #3B82F6;"
                },
                {
                    "class": ".text-blue-600",
                    "properties": "color: #2563EB;"
                },
                {
                    "class": ".text-blue-700",
                    "properties": "color: #1D4ED8;"
                },
                {
                    "class": ".text-blue-800",
                    "properties": "color: #1E40AF;"
                },
                {
                    "class": ".text-blue-900",
                    "properties": "color: #1E3A8A;"
                },
                {
                    "class": ".text-indigo-50",
                    "properties": "color: #EEF2FF;"
                },
                {
                    "class": ".text-indigo-100",
                    "properties": "color: #E0E7FF;"
                },
                {
                    "class": ".text-indigo-200",
                    "properties": "color: #C7D2FE;"
                },
                {
                    "class": ".text-indigo-300",
                    "properties": "color: #A5B4FC;"
                },
                {
                    "class": ".text-indigo-400",
                    "properties": "color: #818CF8;"
                },
                {
                    "class": ".text-indigo-500",
                    "properties": "color: #6366F1;"
                },
                {
                    "class": ".text-indigo-600",
                    "properties": "color: #4F46E5;"
                },
                {
                    "class": ".text-indigo-700",
                    "properties": "color: #4338CA;"
                },
                {
                    "class": ".text-indigo-800",
                    "properties": "color: #3730A3;"
                },
                {
                    "class": ".text-indigo-900",
                    "properties": "color: #312E81;"
                },
                {
                    "class": ".text-purple-50",
                    "properties": "color: #F5F3FF;"
                },
                {
                    "class": ".text-purple-100",
                    "properties": "color: #EDE9FE;"
                },
                {
                    "class": ".text-purple-200",
                    "properties": "color: #DDD6FE;"
                },
                {
                    "class": ".text-purple-300",
                    "properties": "color: #C4B5FD;"
                },
                {
                    "class": ".text-purple-400",
                    "properties": "color: #A78BFA;"
                },
                {
                    "class": ".text-purple-500",
                    "properties": "color: #8B5CF6;"
                },
                {
                    "class": ".text-purple-600",
                    "properties": "color: #7C3AED;"
                },
                {
                    "class": ".text-purple-700",
                    "properties": "color: #6D28D9;"
                },
                {
                    "class": ".text-purple-800",
                    "properties": "color: #5B21B6;"
                },
                {
                    "class": ".text-purple-900",
                    "properties": "color: #4C1D95;"
                },
                {
                    "class": ".text-pink-50",
                    "properties": "color: #FDF2F8;"
                },
                {
                    "class": ".text-pink-100",
                    "properties": "color: #FCE7F3;"
                },
                {
                    "class": ".text-pink-200",
                    "properties": "color: #FBCFE8;"
                },
                {
                    "class": ".text-pink-300",
                    "properties": "color: #F9A8D4;"
                },
                {
                    "class": ".text-pink-400",
                    "properties": "color: #F472B6;"
                },
                {
                    "class": ".text-pink-500",
                    "properties": "color: #EC4899;"
                },
                {
                    "class": ".text-pink-600",
                    "properties": "color: #DB2777;"
                },
                {
                    "class": ".text-pink-700",
                    "properties": "color: #BE185D;"
                },
                {
                    "class": ".text-pink-800",
                    "properties": "color: #9D174D;"
                },
                {
                    "class": ".text-pink-900",
                    "properties": "color: #831843;"
                }
            ]
        },
        {
            "title": "Text Opacity",
            "classList": [
                {
                    "class": ".text-opacity-0",
                    "properties": "text-opacity: 0;"
                },
                {
                    "class": ".text-opacity-5",
                    "properties": "text-opacity: 0.05;"
                },
                {
                    "class": ".text-opacity-10",
                    "properties": "text-opacity: 0.1;"
                },
                {
                    "class": ".text-opacity-20",
                    "properties": "text-opacity: 0.2;"
                },
                {
                    "class": ".text-opacity-25",
                    "properties": "text-opacity: 0.25;"
                },
                {
                    "class": ".text-opacity-30",
                    "properties": "text-opacity: 0.3;"
                },
                {
                    "class": ".text-opacity-40",
                    "properties": "text-opacity: 0.4;"
                },
                {
                    "class": ".text-opacity-50",
                    "properties": "text-opacity: 0.5;"
                },
                {
                    "class": ".text-opacity-60",
                    "properties": "text-opacity: 0.6;"
                },
                {
                    "class": ".text-opacity-70",
                    "properties": "text-opacity: 0.7;"
                },
                {
                    "class": ".text-opacity-75",
                    "properties": "text-opacity: 0.75;"
                },
                {
                    "class": ".text-opacity-80",
                    "properties": "text-opacity: 0.8;"
                },
                {
                    "class": ".text-opacity-90",
                    "properties": "text-opacity: 0.9;"
                },
                {
                    "class": ".text-opacity-100",
                    "properties": "text-opacity: 1;"
                }
            ]
        },
        {
            "title": "Font Family",
            "classList": [
                {
                    "class": ".font-sans",
                    "properties": "font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";"
                },
                {
                    "class": ".font-serif",
                    "properties": "font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;"
                },
                {
                    "class": ".font-mono",
                    "properties": "font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;"
                }
            ]
        },
        {
            "title": "Font Size",
            "classList": [
                {
                    "class": ".text-xs",
                    "properties": "font-size: 0.75rem; line-height: 1rem;"
                },
                {
                    "class": ".text-sm",
                    "properties": "font-size: 0.875rem; line-height: 1.25rem;"
                },
                {
                    "class": ".text-base",
                    "properties": "font-size: 1rem; line-height: 1.5rem;"
                },
                {
                    "class": ".text-lg",
                    "properties": "font-size: 1.125rem; line-height: 1.75rem;"
                },
                {
                    "class": ".text-xl",
                    "properties": "font-size: 1.25rem; line-height: 1.75rem;"
                },
                {
                    "class": ".text-2xl",
                    "properties": "font-size: 1.5rem; line-height: 2rem;"
                },
                {
                    "class": ".text-3xl",
                    "properties": "font-size: 1.875rem; line-height: 2.25rem;"
                },
                {
                    "class": ".text-4xl",
                    "properties": "font-size: 2.25rem; line-height: 2.5rem;"
                },
                {
                    "class": ".text-5xl",
                    "properties": "font-size: 3rem; line-height: 1;"
                },
                {
                    "class": ".text-6xl",
                    "properties": "font-size: 3.75rem; line-height: 1;"
                },
                {
                    "class": ".text-7xl",
                    "properties": "font-size: 4.5rem; line-height: 1;"
                },
                {
                    "class": ".text-8xl",
                    "properties": "font-size: 6rem; line-height: 1;"
                },
                {
                    "class": ".text-9xl",
                    "properties": "font-size: 8rem; line-height: 1;"
                }
            ]
        },
        {
            "title": "Font Smoothing",
            "classList": [
                {
                    "class": ".antialiased",
                    "properties": "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"
                },
                {
                    "class": ".subpixel-antialiased",
                    "properties": "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"
                }
            ]
        },
        {
            "title": "Font Style",
            "classList": [
                {
                    "class": ".italic",
                    "properties": "font-style: italic;"
                },
                {
                    "class": ".not-italic",
                    "properties": "font-style: normal;"
                }
            ]
        },
        {
            "title": "Font Weight",
            "classList": [
                {
                    "class": ".font-thin",
                    "properties": "font-weight: 100;"
                },
                {
                    "class": ".font-extralight",
                    "properties": "font-weight: 200;"
                },
                {
                    "class": ".font-light",
                    "properties": "font-weight: 300;"
                },
                {
                    "class": ".font-normal",
                    "properties": "font-weight: 400;"
                },
                {
                    "class": ".font-medium",
                    "properties": "font-weight: 500;"
                },
                {
                    "class": ".font-semibold",
                    "properties": "font-weight: 600;"
                },
                {
                    "class": ".font-bold",
                    "properties": "font-weight: 700;"
                },
                {
                    "class": ".font-extrabold",
                    "properties": "font-weight: 800;"
                },
                {
                    "class": ".font-black",
                    "properties": "font-weight: 900;"
                }
            ]
        },
        {
            "title": "Font Variant Numeric",
            "classList": [
                {
                    "class": ".normal-nums",
                    "properties": "font-variant-numeric: normal;"
                },
                {
                    "class": ".ordinal",
                    "properties": "font-variant-numeric: ordinal;"
                },
                {
                    "class": ".slashed-zero",
                    "properties": "font-variant-numeric: slashed-zero;"
                },
                {
                    "class": ".lining-nums",
                    "properties": "font-variant-numeric: lining-nums;"
                },
                {
                    "class": ".oldstyle-nums",
                    "properties": "font-variant-numeric: oldstyle-nums;"
                },
                {
                    "class": ".proportional-nums",
                    "properties": "font-variant-numeric: proportional-nums;"
                },
                {
                    "class": ".tabular-nums",
                    "properties": "font-variant-numeric: tabular-nums;"
                },
                {
                    "class": ".diagonal-fractions",
                    "properties": "font-variant-numeric: diagonal-fractions;"
                },
                {
                    "class": ".stacked-fractions",
                    "properties": "font-variant-numeric: stacked-fractions;"
                }
            ]
        },
        {
            "title": "Letter Spacing",
            "classList": [
                {
                    "class": ".tracking-tighter",
                    "properties": "letter-spacing: -0.05em;"
                },
                {
                    "class": ".tracking-tight",
                    "properties": "letter-spacing: -0.025em;"
                },
                {
                    "class": ".tracking-normal",
                    "properties": "letter-spacing: 0;"
                },
                {
                    "class": ".tracking-wide",
                    "properties": "letter-spacing: 0.025em;"
                },
                {
                    "class": ".tracking-wider",
                    "properties": "letter-spacing: 0.05em;"
                },
                {
                    "class": ".tracking-widest",
                    "properties": "letter-spacing: 0.1em;"
                }
            ]
        },
        {
            "title": "Line Height",
            "classList": [
                {
                    "class": ".leading-none",
                    "properties": "line-height: 1;"
                },
                {
                    "class": ".leading-tight",
                    "properties": "line-height: 1.25;"
                },
                {
                    "class": ".leading-snug",
                    "properties": "line-height: 1.375;"
                },
                {
                    "class": ".leading-normal",
                    "properties": "line-height: 1.5;"
                },
                {
                    "class": ".leading-relaxed",
                    "properties": "line-height: 1.625;"
                },
                {
                    "class": ".leading-loose",
                    "properties": "line-height: 2;"
                },
                {
                    "class": ".leading-3",
                    "properties": "line-height: .75rem;"
                },
                {
                    "class": ".leading-4",
                    "properties": "line-height: 1rem;"
                },
                {
                    "class": ".leading-5",
                    "properties": "line-height: 1.25rem;"
                },
                {
                    "class": ".leading-6",
                    "properties": "line-height: 1.5rem;"
                },
                {
                    "class": ".leading-7",
                    "properties": "line-height: 1.75rem;"
                },
                {
                    "class": ".leading-8",
                    "properties": "line-height: 2rem;"
                },
                {
                    "class": ".leading-9",
                    "properties": "line-height: 2.25rem;"
                },
                {
                    "class": ".leading-10",
                    "properties": "line-height: 2.5rem;"
                }
            ]
        },
        {
            "title": "List Style Type",
            "classList": [
                {
                    "class": ".list-none",
                    "properties": "list-style-type: none;"
                },
                {
                    "class": ".list-disc",
                    "properties": "list-style-type: disc;"
                },
                {
                    "class": ".list-decimal",
                    "properties": "list-style-type: decimal;"
                }
            ]
        },
        {
            "title": "List Style Position",
            "classList": [
                {
                    "class": ".list-inside",
                    "properties": "list-style-position: inside;"
                },
                {
                    "class": ".list-outside",
                    "properties": "list-style-position: outside;"
                }
            ]
        },
        {
            "title": "Placeholder Color",
            "classList": [
                {
                    "class": ".placeholder-transparent",
                    "properties": "color: transparent;"
                },
                {
                    "class": ".placeholder-current",
                    "properties": "color: currentColor;"
                },
                {
                    "class": ".placeholder-black",
                    "properties": "color: #000000;"
                },
                {
                    "class": ".placeholder-white",
                    "properties": "color: #ffffff;"
                },
                {
                    "class": ".placeholder-gray-50",
                    "properties": "color: #F9FAFB;"
                },
                {
                    "class": ".placeholder-gray-100",
                    "properties": "color: #F3F4F6;"
                },
                {
                    "class": ".placeholder-gray-200",
                    "properties": "color: #E5E7EB;"
                },
                {
                    "class": ".placeholder-gray-300",
                    "properties": "color: #D1D5DB;"
                },
                {
                    "class": ".placeholder-gray-400",
                    "properties": "color: #9CA3AF;"
                },
                {
                    "class": ".placeholder-gray-500",
                    "properties": "color: #6B7280;"
                },
                {
                    "class": ".placeholder-gray-600",
                    "properties": "color: #4B5563;"
                },
                {
                    "class": ".placeholder-gray-700",
                    "properties": "color: #374151;"
                },
                {
                    "class": ".placeholder-gray-800",
                    "properties": "color: #1F2937;"
                },
                {
                    "class": ".placeholder-gray-900",
                    "properties": "color: #111827;"
                },
                {
                    "class": ".placeholder-red-50",
                    "properties": "color: #FEF2F2;"
                },
                {
                    "class": ".placeholder-red-100",
                    "properties": "color: #FEE2E2;"
                },
                {
                    "class": ".placeholder-red-200",
                    "properties": "color: #FECACA;"
                },
                {
                    "class": ".placeholder-red-300",
                    "properties": "color: #FCA5A5;"
                },
                {
                    "class": ".placeholder-red-400",
                    "properties": "color: #F87171;"
                },
                {
                    "class": ".placeholder-red-500",
                    "properties": "color: #EF4444;"
                },
                {
                    "class": ".placeholder-red-600",
                    "properties": "color: #DC2626;"
                },
                {
                    "class": ".placeholder-red-700",
                    "properties": "color: #B91C1C;"
                },
                {
                    "class": ".placeholder-red-800",
                    "properties": "color: #991B1B;"
                },
                {
                    "class": ".placeholder-red-900",
                    "properties": "color: #7F1D1D;"
                },
                {
                    "class": ".placeholder-yellow-50",
                    "properties": "color: #FFFBEB;"
                },
                {
                    "class": ".placeholder-yellow-100",
                    "properties": "color: #FEF3C7;"
                },
                {
                    "class": ".placeholder-yellow-200",
                    "properties": "color: #FDE68A;"
                },
                {
                    "class": ".placeholder-yellow-300",
                    "properties": "color: #FCD34D;"
                },
                {
                    "class": ".placeholder-yellow-400",
                    "properties": "color: #FBBF24;"
                },
                {
                    "class": ".placeholder-yellow-500",
                    "properties": "color: #F59E0B;"
                },
                {
                    "class": ".placeholder-yellow-600",
                    "properties": "color: #D97706;"
                },
                {
                    "class": ".placeholder-yellow-700",
                    "properties": "color: #B45309;"
                },
                {
                    "class": ".placeholder-yellow-800",
                    "properties": "color: #92400E;"
                },
                {
                    "class": ".placeholder-yellow-900",
                    "properties": "color: #78350F;"
                },
                {
                    "class": ".placeholder-green-50",
                    "properties": "color: #ECFDF5;"
                },
                {
                    "class": ".placeholder-green-100",
                    "properties": "color: #D1FAE5;"
                },
                {
                    "class": ".placeholder-green-200",
                    "properties": "color: #A7F3D0;"
                },
                {
                    "class": ".placeholder-green-300",
                    "properties": "color: #6EE7B7;"
                },
                {
                    "class": ".placeholder-green-400",
                    "properties": "color: #34D399;"
                },
                {
                    "class": ".placeholder-green-500",
                    "properties": "color: #10B981;"
                },
                {
                    "class": ".placeholder-green-600",
                    "properties": "color: #059669;"
                },
                {
                    "class": ".placeholder-green-700",
                    "properties": "color: #047857;"
                },
                {
                    "class": ".placeholder-green-800",
                    "properties": "color: #065F46;"
                },
                {
                    "class": ".placeholder-green-900",
                    "properties": "color: #064E3B;"
                },
                {
                    "class": ".placeholder-blue-50",
                    "properties": "color: #EFF6FF;"
                },
                {
                    "class": ".placeholder-blue-100",
                    "properties": "color: #DBEAFE;"
                },
                {
                    "class": ".placeholder-blue-200",
                    "properties": "color: #BFDBFE;"
                },
                {
                    "class": ".placeholder-blue-300",
                    "properties": "color: #93C5FD;"
                },
                {
                    "class": ".placeholder-blue-400",
                    "properties": "color: #60A5FA;"
                },
                {
                    "class": ".placeholder-blue-500",
                    "properties": "color: #3B82F6;"
                },
                {
                    "class": ".placeholder-blue-600",
                    "properties": "color: #2563EB;"
                },
                {
                    "class": ".placeholder-blue-700",
                    "properties": "color: #1D4ED8;"
                },
                {
                    "class": ".placeholder-blue-800",
                    "properties": "color: #1E40AF;"
                },
                {
                    "class": ".placeholder-blue-900",
                    "properties": "color: #1E3A8A;"
                },
                {
                    "class": ".placeholder-indigo-50",
                    "properties": "color: #EEF2FF;"
                },
                {
                    "class": ".placeholder-indigo-100",
                    "properties": "color: #E0E7FF;"
                },
                {
                    "class": ".placeholder-indigo-200",
                    "properties": "color: #C7D2FE;"
                },
                {
                    "class": ".placeholder-indigo-300",
                    "properties": "color: #A5B4FC;"
                },
                {
                    "class": ".placeholder-indigo-400",
                    "properties": "color: #818CF8;"
                },
                {
                    "class": ".placeholder-indigo-500",
                    "properties": "color: #6366F1;"
                },
                {
                    "class": ".placeholder-indigo-600",
                    "properties": "color: #4F46E5;"
                },
                {
                    "class": ".placeholder-indigo-700",
                    "properties": "color: #4338CA;"
                },
                {
                    "class": ".placeholder-indigo-800",
                    "properties": "color: #3730A3;"
                },
                {
                    "class": ".placeholder-indigo-900",
                    "properties": "color: #312E81;"
                },
                {
                    "class": ".placeholder-purple-50",
                    "properties": "color: #F5F3FF;"
                },
                {
                    "class": ".placeholder-purple-100",
                    "properties": "color: #EDE9FE;"
                },
                {
                    "class": ".placeholder-purple-200",
                    "properties": "color: #DDD6FE;"
                },
                {
                    "class": ".placeholder-purple-300",
                    "properties": "color: #C4B5FD;"
                },
                {
                    "class": ".placeholder-purple-400",
                    "properties": "color: #A78BFA;"
                },
                {
                    "class": ".placeholder-purple-500",
                    "properties": "color: #8B5CF6;"
                },
                {
                    "class": ".placeholder-purple-600",
                    "properties": "color: #7C3AED;"
                },
                {
                    "class": ".placeholder-purple-700",
                    "properties": "color: #6D28D9;"
                },
                {
                    "class": ".placeholder-purple-800",
                    "properties": "color: #5B21B6;"
                },
                {
                    "class": ".placeholder-purple-900",
                    "properties": "color: #4C1D95;"
                },
                {
                    "class": ".placeholder-pink-50",
                    "properties": "color: #FDF2F8;"
                },
                {
                    "class": ".placeholder-pink-100",
                    "properties": "color: #FCE7F3;"
                },
                {
                    "class": ".placeholder-pink-200",
                    "properties": "color: #FBCFE8;"
                },
                {
                    "class": ".placeholder-pink-300",
                    "properties": "color: #F9A8D4;"
                },
                {
                    "class": ".placeholder-pink-400",
                    "properties": "color: #F472B6;"
                },
                {
                    "class": ".placeholder-pink-500",
                    "properties": "color: #EC4899;"
                },
                {
                    "class": ".placeholder-pink-600",
                    "properties": "color: #DB2777;"
                },
                {
                    "class": ".placeholder-pink-700",
                    "properties": "color: #BE185D;"
                },
                {
                    "class": ".placeholder-pink-800",
                    "properties": "color: #9D174D;"
                },
                {
                    "class": ".placeholder-pink-900",
                    "properties": "color: #831843;"
                }
            ]
        },
        {
            "title": "Placeholder Opacity",
            "classList": [
                {
                    "class": ".placeholder-opacity-0",
                    "properties": "placeholder-opacity: 0;"
                },
                {
                    "class": ".placeholder-opacity-5",
                    "properties": "placeholder-opacity: 0.05;"
                },
                {
                    "class": ".placeholder-opacity-10",
                    "properties": "placeholder-opacity: 0.1;"
                },
                {
                    "class": ".placeholder-opacity-20",
                    "properties": "placeholder-opacity: 0.2;"
                },
                {
                    "class": ".placeholder-opacity-25",
                    "properties": "placeholder-opacity: 0.25;"
                },
                {
                    "class": ".placeholder-opacity-30",
                    "properties": "placeholder-opacity: 0.3;"
                },
                {
                    "class": ".placeholder-opacity-40",
                    "properties": "placeholder-opacity: 0.4;"
                },
                {
                    "class": ".placeholder-opacity-50",
                    "properties": "placeholder-opacity: 0.5;"
                },
                {
                    "class": ".placeholder-opacity-60",
                    "properties": "placeholder-opacity: 0.6;"
                },
                {
                    "class": ".placeholder-opacity-70",
                    "properties": "placeholder-opacity: 0.7;"
                },
                {
                    "class": ".placeholder-opacity-75",
                    "properties": "placeholder-opacity: 0.75;"
                },
                {
                    "class": ".placeholder-opacity-80",
                    "properties": "placeholder-opacity: 0.8;"
                },
                {
                    "class": ".placeholder-opacity-90",
                    "properties": "placeholder-opacity: 0.9;"
                },
                {
                    "class": ".placeholder-opacity-100",
                    "properties": "placeholder-opacity: 1;"
                }
            ]
        },
        {
            "title": "Text Align",
            "classList": [
                {
                    "class": ".text-left",
                    "properties": "text-align: left;"
                },
                {
                    "class": ".text-center",
                    "properties": "text-align: center;"
                },
                {
                    "class": ".text-right",
                    "properties": "text-align: right;"
                },
                {
                    "class": ".text-justify",
                    "properties": "text-align: justify;"
                }
            ]
        },
        {
            "title": "Text Decoration",
            "classList": [
                {
                    "class": ".underline",
                    "properties": "text-decoration: underline;"
                },
                {
                    "class": ".line-through",
                    "properties": "text-decoration: line-through;"
                },
                {
                    "class": ".no-underline",
                    "properties": "text-decoration: none;"
                }
            ]
        },
        {
            "title": "Text Transform",
            "classList": [
                {
                    "class": ".uppercase",
                    "properties": "text-transform: uppercase;"
                },
                {
                    "class": ".lowercase",
                    "properties": "text-transform: lowercase;"
                },
                {
                    "class": ".capitalize",
                    "properties": "text-transform: capitalize;"
                },
                {
                    "class": ".normal-case",
                    "properties": "text-transform: none;"
                }
            ]
        },
        {
            "title": "Text Overflow",
            "classList": [
                {
                    "class": ".truncate",
                    "properties": "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                },
                {
                    "class": ".overflow-ellipsis",
                    "properties": "text-overflow: ellipsis;"
                },
                {
                    "class": ".overflow-clip",
                    "properties": "text-overflow: clip;"
                }
            ]
        },
        {
            "title": "Vertical Align",
            "classList": [
                {
                    "class": ".align-baseline",
                    "properties": "vertical-align: baseline;"
                },
                {
                    "class": ".align-top",
                    "properties": "vertical-align: top;"
                },
                {
                    "class": ".align-middle",
                    "properties": "vertical-align: middle;"
                },
                {
                    "class": ".align-bottom",
                    "properties": "vertical-align: bottom;"
                },
                {
                    "class": ".align-text-top",
                    "properties": "vertical-align: text-top;"
                },
                {
                    "class": ".align-text-bottom",
                    "properties": "vertical-align: text-bottom;"
                }
            ]
        },
        {
            "title": "White Space",
            "classList": [
                {
                    "class": ".whitespace-normal",
                    "properties": "white-space: normal;"
                },
                {
                    "class": ".whitespace-nowrap",
                    "properties": "white-space: nowrap;"
                },
                {
                    "class": ".whitespace-pre",
                    "properties": "white-space: pre;"
                },
                {
                    "class": ".whitespace-pre-line",
                    "properties": "white-space: pre-line;"
                },
                {
                    "class": ".whitespace-pre-wrap",
                    "properties": "white-space: pre-wrap;"
                }
            ]
        },
        {
            "title": "Word Break",
            "classList": [
                {
                    "class": ".break-normal",
                    "properties": "overflow-wrap: normal; word-break: normal;"
                },
                {
                    "class": ".break-words",
                    "properties": "overflow-wrap: break-word;"
                },
                {
                    "class": ".break-all",
                    "properties": "word-break: break-all;"
                }
            ]
        }
    ],
    "Effects": [
        {
            "title": "Box Shadow",
            "classList": [
                {
                    "class": ".shadow-xs",
                    "properties": ""
                },
                {
                    "class": ".shadow-sm",
                    "properties": ""
                },
                {
                    "class": ".shadow",
                    "properties": ""
                },
                {
                    "class": ".shadow-md",
                    "properties": ""
                },
                {
                    "class": ".shadow-lg",
                    "properties": ""
                },
                {
                    "class": ".shadow-xl",
                    "properties": ""
                },
                {
                    "class": ".shadow-2xl",
                    "properties": ""
                },
                {
                    "class": ".shadow-inner",
                    "properties": ""
                },
                {
                    "class": ".shadow-outline",
                    "properties": ""
                },
                {
                    "class": ".shadow-none",
                    "properties": "box-shadow: none;"
                }
            ]
        },
        {
            "title": "Opacity",
            "classList": [
                {
                    "class": ".opacity-0",
                    "properties": "opacity: 0;"
                },
                {
                    "class": ".opacity-5",
                    "properties": "opacity: 0.05;"
                },
                {
                    "class": ".opacity-10",
                    "properties": "opacity: 0.1;"
                },
                {
                    "class": ".opacity-20",
                    "properties": "opacity: 0.2;"
                },
                {
                    "class": ".opacity-25",
                    "properties": "opacity: 0.25;"
                },
                {
                    "class": ".opacity-30",
                    "properties": "opacity: 0.3;"
                },
                {
                    "class": ".opacity-40",
                    "properties": "opacity: 0.4;"
                },
                {
                    "class": ".opacity-50",
                    "properties": "opacity: 0.5;"
                },
                {
                    "class": ".opacity-60",
                    "properties": "opacity: 0.6;"
                },
                {
                    "class": ".opacity-70",
                    "properties": "opacity: 0.7;"
                },
                {
                    "class": ".opacity-75",
                    "properties": "opacity: 0.75;"
                },
                {
                    "class": ".opacity-80",
                    "properties": "opacity: 0.8;"
                },
                {
                    "class": ".opacity-90",
                    "properties": "opacity: 0.9;"
                },
                {
                    "class": ".opacity-100",
                    "properties": "opacity: 1;"
                }
            ]
        },
        {
            "title": "Mix Blend Mode",
            "classList": [
                {
                    "class": ".mix-blend-normal",
                    "properties": "mix-blend-mode: normal;"
                },
                {
                    "class": ".mix-blend-multiply",
                    "properties": "mix-blend-mode: multiply;"
                },
                {
                    "class": ".mix-blend-screen",
                    "properties": "mix-blend-mode: screen;"
                },
                {
                    "class": ".mix-blend-overlay",
                    "properties": "mix-blend-mode: overlay;"
                },
                {
                    "class": ".mix-blend-darken",
                    "properties": "mix-blend-mode: darken;"
                },
                {
                    "class": ".mix-blend-lighten",
                    "properties": "mix-blend-mode: lighten;"
                },
                {
                    "class": ".mix-blend-color-dodge",
                    "properties": "mix-blend-mode: color-dodge;"
                },
                {
                    "class": ".mix-blend-color-burn",
                    "properties": "mix-blend-mode: color-burn;"
                },
                {
                    "class": ".mix-blend-hard-light",
                    "properties": "mix-blend-mode: hard-light;"
                },
                {
                    "class": ".mix-blend-soft-light",
                    "properties": "mix-blend-mode: soft-light;"
                },
                {
                    "class": ".mix-blend-difference",
                    "properties": "mix-blend-mode: difference;"
                },
                {
                    "class": ".mix-blend-exclusion",
                    "properties": "mix-blend-mode: exclusion;"
                },
                {
                    "class": ".mix-blend-hue",
                    "properties": "mix-blend-mode: hue;"
                },
                {
                    "class": ".mix-blend-saturation",
                    "properties": "mix-blend-mode: saturation;"
                },
                {
                    "class": ".mix-blend-color",
                    "properties": "mix-blend-mode: color;"
                },
                {
                    "class": ".mix-blend-luminosity",
                    "properties": "mix-blend-mode: luminosity;"
                }
            ]
        },
        {
            "title": "Background Blend Mode",
            "classList": [
                {
                    "class": ".bg-blend-normal",
                    "properties": "background-blend-mode: normal;"
                },
                {
                    "class": ".bg-blend-multiply",
                    "properties": "background-blend-mode: multiply;"
                },
                {
                    "class": ".bg-blend-screen",
                    "properties": "background-blend-mode: screen;"
                },
                {
                    "class": ".bg-blend-overlay",
                    "properties": "background-blend-mode: overlay;"
                },
                {
                    "class": ".bg-blend-darken",
                    "properties": "background-blend-mode: darken;"
                },
                {
                    "class": ".bg-blend-lighten",
                    "properties": "background-blend-mode: lighten;"
                },
                {
                    "class": ".bg-blend-color-dodge",
                    "properties": "background-blend-mode: color-dodge;"
                },
                {
                    "class": ".bg-blend-color-burn",
                    "properties": "background-blend-mode: color-burn;"
                },
                {
                    "class": ".bg-blend-hard-light",
                    "properties": "background-blend-mode: hard-light;"
                },
                {
                    "class": ".bg-blend-soft-light",
                    "properties": "background-blend-mode: soft-light;"
                },
                {
                    "class": ".bg-blend-difference",
                    "properties": "background-blend-mode: difference;"
                },
                {
                    "class": ".bg-blend-exclusion",
                    "properties": "background-blend-mode: exclusion;"
                },
                {
                    "class": ".bg-blend-hue",
                    "properties": "background-blend-mode: hue;"
                },
                {
                    "class": ".bg-blend-saturation",
                    "properties": "background-blend-mode: saturation;"
                },
                {
                    "class": ".bg-blend-color",
                    "properties": "background-blend-mode: color;"
                },
                {
                    "class": ".bg-blend-luminosity",
                    "properties": "background-blend-mode: luminosity;"
                }
            ]
        }
    ],
    "Transitions and Animation": [
        {
            "title": "Transition Delay",
            "classList": [
                {
                    "class": ".delay-75",
                    "properties": "transition-delay: 75ms;"
                },
                {
                    "class": ".delay-100",
                    "properties": "transition-delay: 100ms;"
                },
                {
                    "class": ".delay-150",
                    "properties": "transition-delay: 150ms;"
                },
                {
                    "class": ".delay-200",
                    "properties": "transition-delay: 200ms;"
                },
                {
                    "class": ".delay-300",
                    "properties": "transition-delay: 300ms;"
                },
                {
                    "class": ".delay-500",
                    "properties": "transition-delay: 500ms;"
                },
                {
                    "class": ".delay-700",
                    "properties": "transition-delay: 700ms;"
                },
                {
                    "class": ".delay-1000",
                    "properties": "transition-delay: 1000ms;"
                }
            ]
        },
        {
            "title": "Transition Property",
            "classList": [
                {
                    "class": ".transition",
                    "properties": "transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;"
                },
                {
                    "class": ".transition-none",
                    "properties": "transition-property: none;"
                },
                {
                    "class": ".transition-all",
                    "properties": "transition-property: all;"
                },
                {
                    "class": ".transition-colors",
                    "properties": "transition-property: background-color, border-color, color, fill, stroke;"
                },
                {
                    "class": ".transition-opacity",
                    "properties": "transition-property: opacity;"
                },
                {
                    "class": ".transition-shadow",
                    "properties": "transition-property: box-shadow;"
                },
                {
                    "class": ".transition-transform",
                    "properties": "transition-property: transform;"
                }
            ]
        },
        {
            "title": "Transition Duration",
            "classList": [
                {
                    "class": ".duration-75",
                    "properties": "transition-duration: 75ms;"
                },
                {
                    "class": ".duration-100",
                    "properties": "transition-duration: 100ms;"
                },
                {
                    "class": ".duration-150",
                    "properties": "transition-duration: 150ms;"
                },
                {
                    "class": ".duration-200",
                    "properties": "transition-duration: 200ms;"
                },
                {
                    "class": ".duration-300",
                    "properties": "transition-duration: 300ms;"
                },
                {
                    "class": ".duration-500",
                    "properties": "transition-duration: 500ms;"
                },
                {
                    "class": ".duration-700",
                    "properties": "transition-duration: 700ms;"
                },
                {
                    "class": ".duration-1000",
                    "properties": "transition-duration: 1000ms;"
                }
            ]
        },
        {
            "title": "Transition Timing Function",
            "classList": [
                {
                    "class": ".ease-linear",
                    "properties": "transition-timing-function: linear;"
                },
                {
                    "class": ".ease-in",
                    "properties": "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);"
                },
                {
                    "class": ".ease-out",
                    "properties": "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);"
                },
                {
                    "class": ".ease-in-out",
                    "properties": "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"
                }
            ]
        },
        {
            "title": "Animation",
            "classList": [
                {
                    "class": ".animate-none",
                    "properties": "animation: none;"
                },
                {
                    "class": ".animate-spin",
                    "properties": "animation: spin 1s linear infinite; @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }"
                },
                {
                    "class": ".animate-ping",
                    "properties": "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }"
                },
                {
                    "class": ".animate-pulse",
                    "properties": "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }"
                },
                {
                    "class": ".animate-bounce",
                    "properties": "animation: animation: bounce 1s infinite; @keyframes bounce { 0%, 100% { transform: translateY(-25%); animationTimingFunction: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animationTimingFunction: cubic-bezier(0, 0, 0.2, 1); } }"
                }
            ]
        }
    ],
    "SVG": [
        {
            "title": "Fill",
            "classList": [
                {
                    "class": ".fill-current",
                    "properties": "fill: currentColor;"
                }
            ]
        },
        {
            "title": "Stroke",
            "classList": [
                {
                    "class": ".stroke-current",
                    "properties": "stroke: currentColor;"
                }
            ]
        },
        {
            "title": "Stroke Width",
            "classList": [
                {
                    "class": ".stroke-0",
                    "properties": "stroke-width: 0;"
                },
                {
                    "class": ".stroke-1",
                    "properties": "stroke-width: 1;"
                },
                {
                    "class": ".stroke-2",
                    "properties": "stroke-width: 2;"
                }
            ]
        }
    ]
}

export default tailwindObj;