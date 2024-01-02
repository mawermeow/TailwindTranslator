const tailwindObj = {
    "Layout": [
        {
            "title": "Container",
            "classList": [
                {
                    "class": ".container",
                    "css": "none"
                }
            ]
        },
        {
            "title": "Box Decoration Break",
            "classList": [
                {
                    "class": ".decoration-slice",
                    "css": "box-decoration-break: slice;"
                },
                {
                    "class": ".decoration-clone",
                    "css": "box-decoration-break: clone;"
                }
            ]
        },
        {
            "title": "Box Sizing",
            "classList": [
                {
                    "class": ".box-border",
                    "css": "box-sizing: border-box;"
                },
                {
                    "class": ".box-content",
                    "css": "box-sizing: content-box;"
                }
            ]
        },
        {
            "title": "Breakpoints",
            "classList": [
                {
                    "class": "sm:",
                    "css": "@media (min-width: 640px) { ... }"
                },
                {
                    "class": "md:",
                    "css": "@media (min-width: 768px) { ... }"
                },
                {
                    "class": "lg:",
                    "css": "@media (min-width: 1024px) { ... }"
                },
                {
                    "class": "xl:",
                    "css": "@media (min-width: 1280px) { ... }"
                },
                {
                    "class": "2xl:",
                    "css": "@media (min-width: 1536px) { ... }"
                }
            ]
        },
        {
            "title": "Display",
            "classList": [
                {
                    "class": ".hidden",
                    "css": "display: none;"
                },
                {
                    "class": ".contents",
                    "css": "display: contents;"
                },
                {
                    "class": ".list-item",
                    "css": "display: list-item;"
                },
                {
                    "class": ".block",
                    "css": "display: block;"
                },
                {
                    "class": ".inline-block",
                    "css": "display: inline-block;"
                },
                {
                    "class": ".flex",
                    "css": "display: flex;"
                },
                {
                    "class": ".inline-flex",
                    "css": "display: inline-flex;"
                },
                {
                    "class": ".inline",
                    "css": "display: inline;"
                },
                {
                    "class": ".table",
                    "css": "display: table;"
                },
                {
                    "class": ".inline-table",
                    "css": "display: inline-table;"
                },
                {
                    "class": ".table-cell",
                    "css": "display: table-cell;"
                },
                {
                    "class": ".table-caption",
                    "css": "display: table-caption;"
                },
                {
                    "class": ".table-column",
                    "css": "display: table-column;"
                },
                {
                    "class": ".table-column-group",
                    "css": "display: table-column-group;"
                },
                {
                    "class": ".table-footer-group",
                    "css": "display: table-footer-group;"
                },
                {
                    "class": ".table-header-group",
                    "css": "display: table-header-group;"
                },
                {
                    "class": ".table-row-group",
                    "css": "display: table-row-group;"
                },
                {
                    "class": ".table-row",
                    "css": "display: table-row;"
                },
                {
                    "class": ".flow-root",
                    "css": "display: flow-root"
                },
                {
                    "class": ".grid",
                    "css": "display: grid"
                },
                {
                    "class": ".inline-grid",
                    "css": "display: inline-grid"
                }
            ]
        },
        {
            "title": "Float",
            "classList": [
                {
                    "class": ".float-right",
                    "css": "float: right;"
                },
                {
                    "class": ".float-left",
                    "css": "float: left;"
                },
                {
                    "class": ".float-none",
                    "css": "float: none;"
                }
            ]
        },
        {
            "title": "Clear",
            "classList": [
                {
                    "class": ".clear-left",
                    "css": "clear: left;"
                },
                {
                    "class": ".clear-right",
                    "css": "clear: right;"
                },
                {
                    "class": ".clear-both",
                    "css": "clear: both;"
                },
                {
                    "class": ".clear-none",
                    "css": "clear: none;"
                }
            ]
        },
        {
            "title": "Isolation",
            "classList": [
                {
                    "class": ".isolate",
                    "css": "isolation: isolate;"
                },
                {
                    "class": ".isolate-auto",
                    "css": "isolation: auto;"
                }
            ]
        },
        {
            "title": "Object Fit",
            "classList": [
                {
                    "class": ".object-contain",
                    "css": "object-fit: contain;"
                },
                {
                    "class": ".object-cover",
                    "css": "object-fit: cover;"
                },
                {
                    "class": ".object-fill",
                    "css": "object-fit: fill;"
                },
                {
                    "class": ".object-none",
                    "css": "object-fit: none;"
                },
                {
                    "class": ".object-scale-down",
                    "css": "object-fit: scale-down;"
                }
            ]
        },
        {
            "title": "Object Position",
            "classList": [
                {
                    "class": ".object-bottom",
                    "css": "object-position: bottom;"
                },
                {
                    "class": ".object-center",
                    "css": "object-position: center;"
                },
                {
                    "class": ".object-left",
                    "css": "object-position: left;"
                },
                {
                    "class": ".object-left-bottom",
                    "css": "object-position: left bottom;"
                },
                {
                    "class": ".object-left-top",
                    "css": "object-position: left top;"
                },
                {
                    "class": ".object-right",
                    "css": "object-position: right;"
                },
                {
                    "class": ".object-right-bottom",
                    "css": "object-position: right bottom;"
                },
                {
                    "class": ".object-right-top",
                    "css": "object-position: right top;"
                },
                {
                    "class": ".object-top",
                    "css": "object-position: top;"
                }
            ]
        },
        {
            "title": "Overflow",
            "classList": [
                {
                    "class": ".overflow-auto",
                    "css": "overflow: auto;"
                },
                {
                    "class": ".overflow-x-auto",
                    "css": "overflow-x: auto;"
                },
                {
                    "class": ".overflow-y-auto",
                    "css": "overflow-y: auto;"
                },
                {
                    "class": ".overflow-hidden",
                    "css": "overflow: hidden;"
                },
                {
                    "class": ".overflow-x-hidden",
                    "css": "overflow-x: hidden;"
                },
                {
                    "class": ".overflow-y-hidden",
                    "css": "overflow-y: hidden;"
                },
                {
                    "class": ".overflow-visible",
                    "css": "overflow: visible;"
                },
                {
                    "class": ".overflow-x-visible",
                    "css": "overflow-x: visible;"
                },
                {
                    "class": ".overflow-y-visible",
                    "css": "overflow-y: visible;"
                },
                {
                    "class": ".overflow-scroll",
                    "css": "overflow: scroll;"
                },
                {
                    "class": ".overflow-x-scroll",
                    "css": "overflow-x: scroll;"
                },
                {
                    "class": ".overflow-y-scroll",
                    "css": "overflow-y: scroll;"
                },
                {
                    "class": ".scrolling-touch",
                    "css": "-webkit-overflow-scrolling: touch;"
                },
                {
                    "class": ".scrolling-auto",
                    "css": "-webkit-overflow-scrolling: auto;"
                }
            ]
        },
        {
            "title": "Overscroll Behavior",
            "classList": [
                {
                    "class": ".overscroll-auto",
                    "css": "overscroll-behavior: auto;"
                },
                {
                    "class": ".overscroll-y-auto",
                    "css": "overscroll-behavior-y: auto;"
                },
                {
                    "class": ".overscroll-x-auto",
                    "css": "overscroll-behavior-x: auto;"
                },
                {
                    "class": ".overscroll-contain",
                    "css": "overscroll-behavior: contain;"
                },
                {
                    "class": ".overscroll-y-contain",
                    "css": "overscroll-behavior-y: contain;"
                },
                {
                    "class": ".overscroll-x-contain",
                    "css": "overscroll-behavior-x: contain;"
                },
                {
                    "class": ".overscroll-none",
                    "css": "overscroll-behavior: none;"
                },
                {
                    "class": ".overscroll-y-none",
                    "css": "overscroll-behavior-y: none;"
                },
                {
                    "class": ".overscroll-x-none",
                    "css": "overscroll-behavior-x: none;"
                }
            ]
        },
        {
            "title": "Position",
            "classList": [
                {
                    "class": ".static",
                    "css": "position: static;"
                },
                {
                    "class": ".fixed",
                    "css": "position: fixed;"
                },
                {
                    "class": ".absolute",
                    "css": "position: absolute;"
                },
                {
                    "class": ".relative",
                    "css": "position: relative;"
                },
                {
                    "class": ".sticky",
                    "css": "position: sticky;"
                }
            ]
        },
        {
            "title": "Top / Right / Bottom / Left",
            "classList": [
                {
                    "class": ".inset-0",
                    "css": "top: 0; right: 0; bottom: 0; left: 0;"
                },
                {
                    "class": ".-inset-0",
                    "css": "top: 0; right: 0; bottom: 0; left: 0;"
                },
                {
                    "class": ".inset-y-0",
                    "css": "top: 0; bottom: 0;"
                },
                {
                    "class": ".-inset-y-0",
                    "css": "top: 0; bottom: 0;"
                },
                {
                    "class": ".inset-x-0",
                    "css": "right: 0; left: 0;"
                },
                {
                    "class": ".-inset-x-0",
                    "css": "right: 0; left: 0;"
                },
                {
                    "class": ".top-0",
                    "css": "top: 0;"
                },
                {
                    "class": ".right-0",
                    "css": "right: 0;"
                },
                {
                    "class": ".bottom-0",
                    "css": "bottom: 0;"
                },
                {
                    "class": ".left-0",
                    "css": "left: 0;"
                },
                {
                    "class": ".-top-0",
                    "css": "top: 0;"
                },
                {
                    "class": ".-right-0",
                    "css": "right: 0;"
                },
                {
                    "class": ".-bottom-0",
                    "css": "bottom: 0;"
                },
                {
                    "class": ".-left-0",
                    "css": "left: 0;"
                },
                {
                    "class": ".inset-0.5",
                    "css": "top: 0.125rem; right: 0.125rem; bottom: 0.125rem; left: 0.125rem;"
                },
                {
                    "class": ".-inset-0.5",
                    "css": "top: -0.125rem; right: -0.125rem; bottom: -0.125rem; left: -0.125rem;"
                },
                {
                    "class": ".inset-y-0.5",
                    "css": "top: 0.125rem; bottom: 0.125rem;"
                },
                {
                    "class": ".-inset-y-0.5",
                    "css": "top: -0.125rem; bottom: -0.125rem;"
                },
                {
                    "class": ".inset-x-0.5",
                    "css": "right: 0.125rem; left: 0.125rem;"
                },
                {
                    "class": ".-inset-x-0.5",
                    "css": "right: -0.125rem; left: -0.125rem;"
                },
                {
                    "class": ".top-0.5",
                    "css": "top: 0.125rem;"
                },
                {
                    "class": ".right-0.5",
                    "css": "right: 0.125rem;"
                },
                {
                    "class": ".bottom-0.5",
                    "css": "bottom: 0.125rem;"
                },
                {
                    "class": ".left-0.5",
                    "css": "left: 0.125rem;"
                },
                {
                    "class": ".-top-0.5",
                    "css": "top: -0.125rem;"
                },
                {
                    "class": ".-right-0.5",
                    "css": "right: -0.125rem;"
                },
                {
                    "class": ".-bottom-0.5",
                    "css": "bottom: -0.125rem;"
                },
                {
                    "class": ".-left-0.5",
                    "css": "left: -0.125rem;"
                },
                {
                    "class": ".inset-1",
                    "css": "top: 0.25rem; right: 0.25rem; bottom: 0.25rem; left: 0.25rem;"
                },
                {
                    "class": ".-inset-1",
                    "css": "top: -0.25rem; right: -0.25rem; bottom: -0.25rem; left: -0.25rem;"
                },
                {
                    "class": ".inset-y-1",
                    "css": "top: 0.25rem; bottom: 0.25rem;"
                },
                {
                    "class": ".-inset-y-1",
                    "css": "top: -0.25rem; bottom: -0.25rem;"
                },
                {
                    "class": ".inset-x-1",
                    "css": "right: 0.25rem; left: 0.25rem;"
                },
                {
                    "class": ".-inset-x-1",
                    "css": "right: -0.25rem; left: -0.25rem;"
                },
                {
                    "class": ".top-1",
                    "css": "top: 0.25rem;"
                },
                {
                    "class": ".right-1",
                    "css": "right: 0.25rem;"
                },
                {
                    "class": ".bottom-1",
                    "css": "bottom: 0.25rem;"
                },
                {
                    "class": ".left-1",
                    "css": "left: 0.25rem;"
                },
                {
                    "class": ".-top-1",
                    "css": "top: -0.25rem;"
                },
                {
                    "class": ".-right-1",
                    "css": "right: -0.25rem;"
                },
                {
                    "class": ".-bottom-1",
                    "css": "bottom: -0.25rem;"
                },
                {
                    "class": ".-left-1",
                    "css": "left: -0.25rem;"
                },
                {
                    "class": ".inset-1.5",
                    "css": "top: 0.375rem; right: 0.375rem; bottom: 0.375rem; left: 0.375rem;"
                },
                {
                    "class": ".-inset-1.5",
                    "css": "top: -0.375rem; right: -0.375rem; bottom: -0.375rem; left: -0.375rem;"
                },
                {
                    "class": ".inset-y-1.5",
                    "css": "top: 0.375rem; bottom: 0.375rem;"
                },
                {
                    "class": ".-inset-y-1.5",
                    "css": "top: -0.375rem; bottom: -0.375rem;"
                },
                {
                    "class": ".inset-x-1.5",
                    "css": "right: 0.375rem; left: 0.375rem;"
                },
                {
                    "class": ".-inset-x-1.5",
                    "css": "right: -0.375rem; left: -0.375rem;"
                },
                {
                    "class": ".top-1.5",
                    "css": "top: 0.375rem;"
                },
                {
                    "class": ".right-1.5",
                    "css": "right: 0.375rem;"
                },
                {
                    "class": ".bottom-1.5",
                    "css": "bottom: 0.375rem;"
                },
                {
                    "class": ".left-1.5",
                    "css": "left: 0.375rem;"
                },
                {
                    "class": ".-top-1.5",
                    "css": "top: -0.375rem;"
                },
                {
                    "class": ".-right-1.5",
                    "css": "right: -0.375rem;"
                },
                {
                    "class": ".-bottom-1.5",
                    "css": "bottom: -0.375rem;"
                },
                {
                    "class": ".-left-1.5",
                    "css": "left: -0.375rem;"
                },
                {
                    "class": ".inset-2",
                    "css": "top: 0.5rem; right: 0.5rem; bottom: 0.5rem; left: 0.5rem;"
                },
                {
                    "class": ".-inset-2",
                    "css": "top: -0.5rem; right: -0.5rem; bottom: -0.5rem; left: -0.5rem;"
                },
                {
                    "class": ".inset-y-2",
                    "css": "top: 0.5rem; bottom: 0.5rem;"
                },
                {
                    "class": ".-inset-y-2",
                    "css": "top: -0.5rem; bottom: -0.5rem;"
                },
                {
                    "class": ".inset-x-2",
                    "css": "right: 0.5rem; left: 0.5rem;"
                },
                {
                    "class": ".-inset-x-2",
                    "css": "right: -0.5rem; left: -0.5rem;"
                },
                {
                    "class": ".top-2",
                    "css": "top: 0.5rem;"
                },
                {
                    "class": ".right-2",
                    "css": "right: 0.5rem;"
                },
                {
                    "class": ".bottom-2",
                    "css": "bottom: 0.5rem;"
                },
                {
                    "class": ".left-2",
                    "css": "left: 0.5rem;"
                },
                {
                    "class": ".-top-2",
                    "css": "top: -0.5rem;"
                },
                {
                    "class": ".-right-2",
                    "css": "right: -0.5rem;"
                },
                {
                    "class": ".-bottom-2",
                    "css": "bottom: -0.5rem;"
                },
                {
                    "class": ".-left-2",
                    "css": "left: -0.5rem;"
                },
                {
                    "class": ".inset-2.5",
                    "css": "top: 0.625rem; right: 0.625rem; bottom: 0.625rem; left: 0.625rem;"
                },
                {
                    "class": ".-inset-2.5",
                    "css": "top: -0.625rem; right: -0.625rem; bottom: -0.625rem; left: -0.625rem;"
                },
                {
                    "class": ".inset-y-2.5",
                    "css": "top: 0.625rem; bottom: 0.625rem;"
                },
                {
                    "class": ".-inset-y-2.5",
                    "css": "top: -0.625rem; bottom: -0.625rem;"
                },
                {
                    "class": ".inset-x-2.5",
                    "css": "right: 0.625rem; left: 0.625rem;"
                },
                {
                    "class": ".-inset-x-2.5",
                    "css": "right: -0.625rem; left: -0.625rem;"
                },
                {
                    "class": ".top-2.5",
                    "css": "top: 0.625rem;"
                },
                {
                    "class": ".right-2.5",
                    "css": "right: 0.625rem;"
                },
                {
                    "class": ".bottom-2.5",
                    "css": "bottom: 0.625rem;"
                },
                {
                    "class": ".left-2.5",
                    "css": "left: 0.625rem;"
                },
                {
                    "class": ".-top-2.5",
                    "css": "top: -0.625rem;"
                },
                {
                    "class": ".-right-2.5",
                    "css": "right: -0.625rem;"
                },
                {
                    "class": ".-bottom-2.5",
                    "css": "bottom: -0.625rem;"
                },
                {
                    "class": ".-left-2.5",
                    "css": "left: -0.625rem;"
                },
                {
                    "class": ".inset-3",
                    "css": "top: 0.75rem; right: 0.75rem; bottom: 0.75rem; left: 0.75rem;"
                },
                {
                    "class": ".-inset-3",
                    "css": "top: -0.75rem; right: -0.75rem; bottom: -0.75rem; left: -0.75rem;"
                },
                {
                    "class": ".inset-y-3",
                    "css": "top: 0.75rem; bottom: 0.75rem;"
                },
                {
                    "class": ".-inset-y-3",
                    "css": "top: -0.75rem; bottom: -0.75rem;"
                },
                {
                    "class": ".inset-x-3",
                    "css": "right: 0.75rem; left: 0.75rem;"
                },
                {
                    "class": ".-inset-x-3",
                    "css": "right: -0.75rem; left: -0.75rem;"
                },
                {
                    "class": ".top-3",
                    "css": "top: 0.75rem;"
                },
                {
                    "class": ".right-3",
                    "css": "right: 0.75rem;"
                },
                {
                    "class": ".bottom-3",
                    "css": "bottom: 0.75rem;"
                },
                {
                    "class": ".left-3",
                    "css": "left: 0.75rem;"
                },
                {
                    "class": ".-top-3",
                    "css": "top: -0.75rem;"
                },
                {
                    "class": ".-right-3",
                    "css": "right: -0.75rem;"
                },
                {
                    "class": ".-bottom-3",
                    "css": "bottom: -0.75rem;"
                },
                {
                    "class": ".-left-3",
                    "css": "left: -0.75rem;"
                },
                {
                    "class": ".inset-3.5",
                    "css": "top: 0.875rem; right: 0.875rem; bottom: 0.875rem; left: 0.875rem;"
                },
                {
                    "class": ".-inset-3.5",
                    "css": "top: -0.875rem; right: -0.875rem; bottom: -0.875rem; left: -0.875rem;"
                },
                {
                    "class": ".inset-y-3.5",
                    "css": "top: 0.875rem; bottom: 0.875rem;"
                },
                {
                    "class": ".-inset-y-3.5",
                    "css": "top: -0.875rem; bottom: -0.875rem;"
                },
                {
                    "class": ".inset-x-3.5",
                    "css": "right: 0.875rem; left: 0.875rem;"
                },
                {
                    "class": ".-inset-x-3.5",
                    "css": "right: -0.875rem; left: -0.875rem;"
                },
                {
                    "class": ".top-3.5",
                    "css": "top: 0.875rem;"
                },
                {
                    "class": ".right-3.5",
                    "css": "right: 0.875rem;"
                },
                {
                    "class": ".bottom-3.5",
                    "css": "bottom: 0.875rem;"
                },
                {
                    "class": ".left-3.5",
                    "css": "left: 0.875rem;"
                },
                {
                    "class": ".-top-3.5",
                    "css": "top: -0.875rem;"
                },
                {
                    "class": ".-right-3.5",
                    "css": "right: -0.875rem;"
                },
                {
                    "class": ".-bottom-3.5",
                    "css": "bottom: -0.875rem;"
                },
                {
                    "class": ".-left-3.5",
                    "css": "left: -0.875rem;"
                },
                {
                    "class": ".inset-4",
                    "css": "top: 1rem; right: 1rem; bottom: 1rem; left: 1rem;"
                },
                {
                    "class": ".-inset-4",
                    "css": "top: -1rem; right: -1rem; bottom: -1rem; left: -1rem;"
                },
                {
                    "class": ".inset-y-4",
                    "css": "top: 1rem; bottom: 1rem;"
                },
                {
                    "class": ".-inset-y-4",
                    "css": "top: -1rem; bottom: -1rem;"
                },
                {
                    "class": ".inset-x-4",
                    "css": "right: 1rem; left: 1rem;"
                },
                {
                    "class": ".-inset-x-4",
                    "css": "right: -1rem; left: -1rem;"
                },
                {
                    "class": ".top-4",
                    "css": "top: 1rem;"
                },
                {
                    "class": ".right-4",
                    "css": "right: 1rem;"
                },
                {
                    "class": ".bottom-4",
                    "css": "bottom: 1rem;"
                },
                {
                    "class": ".left-4",
                    "css": "left: 1rem;"
                },
                {
                    "class": ".-top-4",
                    "css": "top: -1rem;"
                },
                {
                    "class": ".-right-4",
                    "css": "right: -1rem;"
                },
                {
                    "class": ".-bottom-4",
                    "css": "bottom: -1rem;"
                },
                {
                    "class": ".-left-4",
                    "css": "left: -1rem;"
                },
                {
                    "class": ".inset-5",
                    "css": "top: 1.25rem; right: 1.25rem; bottom: 1.25rem; left: 1.25rem;"
                },
                {
                    "class": ".-inset-5",
                    "css": "top: -1.25rem; right: -1.25rem; bottom: -1.25rem; left: -1.25rem;"
                },
                {
                    "class": ".inset-y-5",
                    "css": "top: 1.25rem; bottom: 1.25rem;"
                },
                {
                    "class": ".-inset-y-5",
                    "css": "top: -1.25rem; bottom: -1.25rem;"
                },
                {
                    "class": ".inset-x-5",
                    "css": "right: 1.25rem; left: 1.25rem;"
                },
                {
                    "class": ".-inset-x-5",
                    "css": "right: -1.25rem; left: -1.25rem;"
                },
                {
                    "class": ".top-5",
                    "css": "top: 1.25rem;"
                },
                {
                    "class": ".right-5",
                    "css": "right: 1.25rem;"
                },
                {
                    "class": ".bottom-5",
                    "css": "bottom: 1.25rem;"
                },
                {
                    "class": ".left-5",
                    "css": "left: 1.25rem;"
                },
                {
                    "class": ".-top-5",
                    "css": "top: -1.25rem;"
                },
                {
                    "class": ".-right-5",
                    "css": "right: -1.25rem;"
                },
                {
                    "class": ".-bottom-5",
                    "css": "bottom: -1.25rem;"
                },
                {
                    "class": ".-left-5",
                    "css": "left: -1.25rem;"
                },
                {
                    "class": ".inset-6",
                    "css": "top: 1.5rem; right: 1.5rem; bottom: 1.5rem; left: 1.5rem;"
                },
                {
                    "class": ".-inset-6",
                    "css": "top: -1.5rem; right: -1.5rem; bottom: -1.5rem; left: -1.5rem;"
                },
                {
                    "class": ".inset-y-6",
                    "css": "top: 1.5rem; bottom: 1.5rem;"
                },
                {
                    "class": ".-inset-y-6",
                    "css": "top: -1.5rem; bottom: -1.5rem;"
                },
                {
                    "class": ".inset-x-6",
                    "css": "right: 1.5rem; left: 1.5rem;"
                },
                {
                    "class": ".-inset-x-6",
                    "css": "right: -1.5rem; left: -1.5rem;"
                },
                {
                    "class": ".top-6",
                    "css": "top: 1.5rem;"
                },
                {
                    "class": ".right-6",
                    "css": "right: 1.5rem;"
                },
                {
                    "class": ".bottom-6",
                    "css": "bottom: 1.5rem;"
                },
                {
                    "class": ".left-6",
                    "css": "left: 1.5rem;"
                },
                {
                    "class": ".-top-6",
                    "css": "top: -1.5rem;"
                },
                {
                    "class": ".-right-6",
                    "css": "right: -1.5rem;"
                },
                {
                    "class": ".-bottom-6",
                    "css": "bottom: -1.5rem;"
                },
                {
                    "class": ".-left-6",
                    "css": "left: -1.5rem;"
                },
                {
                    "class": ".inset-7",
                    "css": "top: 1.75rem; right: 1.75rem; bottom: 1.75rem; left: 1.75rem;"
                },
                {
                    "class": ".-inset-7",
                    "css": "top: -1.75rem; right: -1.75rem; bottom: -1.75rem; left: -1.75rem;"
                },
                {
                    "class": ".inset-y-7",
                    "css": "top: 1.75rem; bottom: 1.75rem;"
                },
                {
                    "class": ".-inset-y-7",
                    "css": "top: -1.75rem; bottom: -1.75rem;"
                },
                {
                    "class": ".inset-x-7",
                    "css": "right: 1.75rem; left: 1.75rem;"
                },
                {
                    "class": ".-inset-x-7",
                    "css": "right: -1.75rem; left: -1.75rem;"
                },
                {
                    "class": ".top-7",
                    "css": "top: 1.75rem;"
                },
                {
                    "class": ".right-7",
                    "css": "right: 1.75rem;"
                },
                {
                    "class": ".bottom-7",
                    "css": "bottom: 1.75rem;"
                },
                {
                    "class": ".left-7",
                    "css": "left: 1.75rem;"
                },
                {
                    "class": ".-top-7",
                    "css": "top: -1.75rem;"
                },
                {
                    "class": ".-right-7",
                    "css": "right: -1.75rem;"
                },
                {
                    "class": ".-bottom-7",
                    "css": "bottom: -1.75rem;"
                },
                {
                    "class": ".-left-7",
                    "css": "left: -1.75rem;"
                },
                {
                    "class": ".inset-8",
                    "css": "top: 2rem; right: 2rem; bottom: 2rem; left: 2rem;"
                },
                {
                    "class": ".-inset-8",
                    "css": "top: -2rem; right: -2rem; bottom: -2rem; left: -2rem;"
                },
                {
                    "class": ".inset-y-8",
                    "css": "top: 2rem; bottom: 2rem;"
                },
                {
                    "class": ".-inset-y-8",
                    "css": "top: -2rem; bottom: -2rem;"
                },
                {
                    "class": ".inset-x-8",
                    "css": "right: 2rem; left: 2rem;"
                },
                {
                    "class": ".-inset-x-8",
                    "css": "right: -2rem; left: -2rem;"
                },
                {
                    "class": ".top-8",
                    "css": "top: 2rem;"
                },
                {
                    "class": ".right-8",
                    "css": "right: 2rem;"
                },
                {
                    "class": ".bottom-8",
                    "css": "bottom: 2rem;"
                },
                {
                    "class": ".left-8",
                    "css": "left: 2rem;"
                },
                {
                    "class": ".-top-8",
                    "css": "top: -2rem;"
                },
                {
                    "class": ".-right-8",
                    "css": "right: -2rem;"
                },
                {
                    "class": ".-bottom-8",
                    "css": "bottom: -2rem;"
                },
                {
                    "class": ".-left-8",
                    "css": "left: -2rem;"
                },
                {
                    "class": ".inset-9",
                    "css": "top: 2.25rem; right: 2.25rem; bottom: 2.25rem; left: 2.25rem;"
                },
                {
                    "class": ".-inset-9",
                    "css": "top: -2.25rem; right: -2.25rem; bottom: -2.25rem; left: -2.25rem;"
                },
                {
                    "class": ".inset-y-9",
                    "css": "top: 2.25rem; bottom: 2.25rem;"
                },
                {
                    "class": ".-inset-y-9",
                    "css": "top: -2.25rem; bottom: -2.25rem;"
                },
                {
                    "class": ".inset-x-9",
                    "css": "right: 2.25rem; left: 2.25rem;"
                },
                {
                    "class": ".-inset-x-9",
                    "css": "right: -2.25rem; left: -2.25rem;"
                },
                {
                    "class": ".top-9",
                    "css": "top: 2.25rem;"
                },
                {
                    "class": ".right-9",
                    "css": "right: 2.25rem;"
                },
                {
                    "class": ".bottom-9",
                    "css": "bottom: 2.25rem;"
                },
                {
                    "class": ".left-9",
                    "css": "left: 2.25rem;"
                },
                {
                    "class": ".-top-9",
                    "css": "top: -2.25rem;"
                },
                {
                    "class": ".-right-9",
                    "css": "right: -2.25rem;"
                },
                {
                    "class": ".-bottom-9",
                    "css": "bottom: -2.25rem;"
                },
                {
                    "class": ".-left-9",
                    "css": "left: -2.25rem;"
                },
                {
                    "class": ".inset-10",
                    "css": "top: 2.5rem; right: 2.5rem; bottom: 2.5rem; left: 2.5rem;"
                },
                {
                    "class": ".-inset-10",
                    "css": "top: -2.5rem; right: -2.5rem; bottom: -2.5rem; left: -2.5rem;"
                },
                {
                    "class": ".inset-y-10",
                    "css": "top: 2.5rem; bottom: 2.5rem;"
                },
                {
                    "class": ".-inset-y-10",
                    "css": "top: -2.5rem; bottom: -2.5rem;"
                },
                {
                    "class": ".inset-x-10",
                    "css": "right: 2.5rem; left: 2.5rem;"
                },
                {
                    "class": ".-inset-x-10",
                    "css": "right: -2.5rem; left: -2.5rem;"
                },
                {
                    "class": ".top-10",
                    "css": "top: 2.5rem;"
                },
                {
                    "class": ".right-10",
                    "css": "right: 2.5rem;"
                },
                {
                    "class": ".bottom-10",
                    "css": "bottom: 2.5rem;"
                },
                {
                    "class": ".left-10",
                    "css": "left: 2.5rem;"
                },
                {
                    "class": ".-top-10",
                    "css": "top: -2.5rem;"
                },
                {
                    "class": ".-right-10",
                    "css": "right: -2.5rem;"
                },
                {
                    "class": ".-bottom-10",
                    "css": "bottom: -2.5rem;"
                },
                {
                    "class": ".-left-10",
                    "css": "left: -2.5rem;"
                },
                {
                    "class": ".inset-11",
                    "css": "top: 2.75rem; right: 2.75rem; bottom: 2.75rem; left: 2.75rem;"
                },
                {
                    "class": ".-inset-11",
                    "css": "top: -2.75rem; right: -2.75rem; bottom: -2.75rem; left: -2.75rem;"
                },
                {
                    "class": ".inset-y-11",
                    "css": "top: 2.75rem; bottom: 2.75rem;"
                },
                {
                    "class": ".-inset-y-11",
                    "css": "top: -2.75rem; bottom: -2.75rem;"
                },
                {
                    "class": ".inset-x-11",
                    "css": "right: 2.75rem; left: 2.75rem;"
                },
                {
                    "class": ".-inset-x-11",
                    "css": "right: -2.75rem; left: -2.75rem;"
                },
                {
                    "class": ".top-11",
                    "css": "top: 2.75rem;"
                },
                {
                    "class": ".right-11",
                    "css": "right: 2.75rem;"
                },
                {
                    "class": ".bottom-11",
                    "css": "bottom: 2.75rem;"
                },
                {
                    "class": ".left-11",
                    "css": "left: 2.75rem;"
                },
                {
                    "class": ".-top-11",
                    "css": "top: -2.75rem;"
                },
                {
                    "class": ".-right-11",
                    "css": "right: -2.75rem;"
                },
                {
                    "class": ".-bottom-11",
                    "css": "bottom: -2.75rem;"
                },
                {
                    "class": ".-left-11",
                    "css": "left: -2.75rem;"
                },
                {
                    "class": ".inset-12",
                    "css": "top: 3rem; right: 3rem; bottom: 3rem; left: 3rem;"
                },
                {
                    "class": ".-inset-12",
                    "css": "top: -3rem; right: -3rem; bottom: -3rem; left: -3rem;"
                },
                {
                    "class": ".inset-y-12",
                    "css": "top: 3rem; bottom: 3rem;"
                },
                {
                    "class": ".-inset-y-12",
                    "css": "top: -3rem; bottom: -3rem;"
                },
                {
                    "class": ".inset-x-12",
                    "css": "right: 3rem; left: 3rem;"
                },
                {
                    "class": ".-inset-x-12",
                    "css": "right: -3rem; left: -3rem;"
                },
                {
                    "class": ".top-12",
                    "css": "top: 3rem;"
                },
                {
                    "class": ".right-12",
                    "css": "right: 3rem;"
                },
                {
                    "class": ".bottom-12",
                    "css": "bottom: 3rem;"
                },
                {
                    "class": ".left-12",
                    "css": "left: 3rem;"
                },
                {
                    "class": ".-top-12",
                    "css": "top: -3rem;"
                },
                {
                    "class": ".-right-12",
                    "css": "right: -3rem;"
                },
                {
                    "class": ".-bottom-12",
                    "css": "bottom: -3rem;"
                },
                {
                    "class": ".-left-12",
                    "css": "left: -3rem;"
                },
                {
                    "class": ".inset-14",
                    "css": "top: 3.5rem; right: 3.5rem; bottom: 3.5rem; left: 3.5rem;"
                },
                {
                    "class": ".-inset-14",
                    "css": "top: -3.5rem; right: -3.5rem; bottom: -3.5rem; left: -3.5rem;"
                },
                {
                    "class": ".inset-y-14",
                    "css": "top: 3.5rem; bottom: 3.5rem;"
                },
                {
                    "class": ".-inset-y-14",
                    "css": "top: -3.5rem; bottom: -3.5rem;"
                },
                {
                    "class": ".inset-x-14",
                    "css": "right: 3.5rem; left: 3.5rem;"
                },
                {
                    "class": ".-inset-x-14",
                    "css": "right: -3.5rem; left: -3.5rem;"
                },
                {
                    "class": ".top-14",
                    "css": "top: 3.5rem;"
                },
                {
                    "class": ".right-14",
                    "css": "right: 3.5rem;"
                },
                {
                    "class": ".bottom-14",
                    "css": "bottom: 3.5rem;"
                },
                {
                    "class": ".left-14",
                    "css": "left: 3.5rem;"
                },
                {
                    "class": ".-top-14",
                    "css": "top: -3.5rem;"
                },
                {
                    "class": ".-right-14",
                    "css": "right: -3.5rem;"
                },
                {
                    "class": ".-bottom-14",
                    "css": "bottom: -3.5rem;"
                },
                {
                    "class": ".-left-14",
                    "css": "left: -3.5rem;"
                },
                {
                    "class": ".inset-16",
                    "css": "top: 4rem; right: 4rem; bottom: 4rem; left: 4rem;"
                },
                {
                    "class": ".-inset-16",
                    "css": "top: -4rem; right: -4rem; bottom: -4rem; left: -4rem;"
                },
                {
                    "class": ".inset-y-16",
                    "css": "top: 4rem; bottom: 4rem;"
                },
                {
                    "class": ".-inset-y-16",
                    "css": "top: -4rem; bottom: -4rem;"
                },
                {
                    "class": ".inset-x-16",
                    "css": "right: 4rem; left: 4rem;"
                },
                {
                    "class": ".-inset-x-16",
                    "css": "right: -4rem; left: -4rem;"
                },
                {
                    "class": ".top-16",
                    "css": "top: 4rem;"
                },
                {
                    "class": ".right-16",
                    "css": "right: 4rem;"
                },
                {
                    "class": ".bottom-16",
                    "css": "bottom: 4rem;"
                },
                {
                    "class": ".left-16",
                    "css": "left: 4rem;"
                },
                {
                    "class": ".-top-16",
                    "css": "top: -4rem;"
                },
                {
                    "class": ".-right-16",
                    "css": "right: -4rem;"
                },
                {
                    "class": ".-bottom-16",
                    "css": "bottom: -4rem;"
                },
                {
                    "class": ".-left-16",
                    "css": "left: -4rem;"
                },
                {
                    "class": ".inset-20",
                    "css": "top: 5rem; right: 5rem; bottom: 5rem; left: 5rem;"
                },
                {
                    "class": ".-inset-20",
                    "css": "top: -5rem; right: -5rem; bottom: -5rem; left: -5rem;"
                },
                {
                    "class": ".inset-y-20",
                    "css": "top: 5rem; bottom: 5rem;"
                },
                {
                    "class": ".-inset-y-20",
                    "css": "top: -5rem; bottom: -5rem;"
                },
                {
                    "class": ".inset-x-20",
                    "css": "right: 5rem; left: 5rem;"
                },
                {
                    "class": ".-inset-x-20",
                    "css": "right: -5rem; left: -5rem;"
                },
                {
                    "class": ".top-20",
                    "css": "top: 5rem;"
                },
                {
                    "class": ".right-20",
                    "css": "right: 5rem;"
                },
                {
                    "class": ".bottom-20",
                    "css": "bottom: 5rem;"
                },
                {
                    "class": ".left-20",
                    "css": "left: 5rem;"
                },
                {
                    "class": ".-top-20",
                    "css": "top: -5rem;"
                },
                {
                    "class": ".-right-20",
                    "css": "right: -5rem;"
                },
                {
                    "class": ".-bottom-20",
                    "css": "bottom: -5rem;"
                },
                {
                    "class": ".-left-20",
                    "css": "left: -5rem;"
                },
                {
                    "class": ".inset-24",
                    "css": "top: 6rem; right: 6rem; bottom: 6rem; left: 6rem;"
                },
                {
                    "class": ".-inset-24",
                    "css": "top: -6rem; right: -6rem; bottom: -6rem; left: -6rem;"
                },
                {
                    "class": ".inset-y-24",
                    "css": "top: 6rem; bottom: 6rem;"
                },
                {
                    "class": ".-inset-y-24",
                    "css": "top: -6rem; bottom: -6rem;"
                },
                {
                    "class": ".inset-x-24",
                    "css": "right: 6rem; left: 6rem;"
                },
                {
                    "class": ".-inset-x-24",
                    "css": "right: -6rem; left: -6rem;"
                },
                {
                    "class": ".top-24",
                    "css": "top: 6rem;"
                },
                {
                    "class": ".right-24",
                    "css": "right: 6rem;"
                },
                {
                    "class": ".bottom-24",
                    "css": "bottom: 6rem;"
                },
                {
                    "class": ".left-24",
                    "css": "left: 6rem;"
                },
                {
                    "class": ".-top-24",
                    "css": "top: -6rem;"
                },
                {
                    "class": ".-right-24",
                    "css": "right: -6rem;"
                },
                {
                    "class": ".-bottom-24",
                    "css": "bottom: -6rem;"
                },
                {
                    "class": ".-left-24",
                    "css": "left: -6rem;"
                },
                {
                    "class": ".inset-28",
                    "css": "top: 7rem; right: 7rem; bottom: 7rem; left: 7rem;"
                },
                {
                    "class": ".-inset-28",
                    "css": "top: -7rem; right: -7rem; bottom: -7rem; left: -7rem;"
                },
                {
                    "class": ".inset-y-28",
                    "css": "top: 7rem; bottom: 7rem;"
                },
                {
                    "class": ".-inset-y-28",
                    "css": "top: -7rem; bottom: -7rem;"
                },
                {
                    "class": ".inset-x-28",
                    "css": "right: 7rem; left: 7rem;"
                },
                {
                    "class": ".-inset-x-28",
                    "css": "right: -7rem; left: -7rem;"
                },
                {
                    "class": ".top-28",
                    "css": "top: 7rem;"
                },
                {
                    "class": ".right-28",
                    "css": "right: 7rem;"
                },
                {
                    "class": ".bottom-28",
                    "css": "bottom: 7rem;"
                },
                {
                    "class": ".left-28",
                    "css": "left: 7rem;"
                },
                {
                    "class": ".-top-28",
                    "css": "top: -7rem;"
                },
                {
                    "class": ".-right-28",
                    "css": "right: -7rem;"
                },
                {
                    "class": ".-bottom-28",
                    "css": "bottom: -7rem;"
                },
                {
                    "class": ".-left-28",
                    "css": "left: -7rem;"
                },
                {
                    "class": ".inset-32",
                    "css": "top: 8rem; right: 8rem; bottom: 8rem; left: 8rem;"
                },
                {
                    "class": ".-inset-32",
                    "css": "top: -8rem; right: -8rem; bottom: -8rem; left: -8rem;"
                },
                {
                    "class": ".inset-y-32",
                    "css": "top: 8rem; bottom: 8rem;"
                },
                {
                    "class": ".-inset-y-32",
                    "css": "top: -8rem; bottom: -8rem;"
                },
                {
                    "class": ".inset-x-32",
                    "css": "right: 8rem; left: 8rem;"
                },
                {
                    "class": ".-inset-x-32",
                    "css": "right: -8rem; left: -8rem;"
                },
                {
                    "class": ".top-32",
                    "css": "top: 8rem;"
                },
                {
                    "class": ".right-32",
                    "css": "right: 8rem;"
                },
                {
                    "class": ".bottom-32",
                    "css": "bottom: 8rem;"
                },
                {
                    "class": ".left-32",
                    "css": "left: 8rem;"
                },
                {
                    "class": ".-top-32",
                    "css": "top: -8rem;"
                },
                {
                    "class": ".-right-32",
                    "css": "right: -8rem;"
                },
                {
                    "class": ".-bottom-32",
                    "css": "bottom: -8rem;"
                },
                {
                    "class": ".-left-32",
                    "css": "left: -8rem;"
                },
                {
                    "class": ".inset-36",
                    "css": "top: 9rem; right: 9rem; bottom: 9rem; left: 9rem;"
                },
                {
                    "class": ".-inset-36",
                    "css": "top: -9rem; right: -9rem; bottom: -9rem; left: -9rem;"
                },
                {
                    "class": ".inset-y-36",
                    "css": "top: 9rem; bottom: 9rem;"
                },
                {
                    "class": ".-inset-y-36",
                    "css": "top: -9rem; bottom: -9rem;"
                },
                {
                    "class": ".inset-x-36",
                    "css": "right: 9rem; left: 9rem;"
                },
                {
                    "class": ".-inset-x-36",
                    "css": "right: -9rem; left: -9rem;"
                },
                {
                    "class": ".top-36",
                    "css": "top: 9rem;"
                },
                {
                    "class": ".right-36",
                    "css": "right: 9rem;"
                },
                {
                    "class": ".bottom-36",
                    "css": "bottom: 9rem;"
                },
                {
                    "class": ".left-36",
                    "css": "left: 9rem;"
                },
                {
                    "class": ".-top-36",
                    "css": "top: -9rem;"
                },
                {
                    "class": ".-right-36",
                    "css": "right: -9rem;"
                },
                {
                    "class": ".-bottom-36",
                    "css": "bottom: -9rem;"
                },
                {
                    "class": ".-left-36",
                    "css": "left: -9rem;"
                },
                {
                    "class": ".inset-40",
                    "css": "top: 10rem; right: 10rem; bottom: 10rem; left: 10rem;"
                },
                {
                    "class": ".-inset-40",
                    "css": "top: -10rem; right: -10rem; bottom: -10rem; left: -10rem;"
                },
                {
                    "class": ".inset-y-40",
                    "css": "top: 10rem; bottom: 10rem;"
                },
                {
                    "class": ".-inset-y-40",
                    "css": "top: -10rem; bottom: -10rem;"
                },
                {
                    "class": ".inset-x-40",
                    "css": "right: 10rem; left: 10rem;"
                },
                {
                    "class": ".-inset-x-40",
                    "css": "right: -10rem; left: -10rem;"
                },
                {
                    "class": ".top-40",
                    "css": "top: 10rem;"
                },
                {
                    "class": ".right-40",
                    "css": "right: 10rem;"
                },
                {
                    "class": ".bottom-40",
                    "css": "bottom: 10rem;"
                },
                {
                    "class": ".left-40",
                    "css": "left: 10rem;"
                },
                {
                    "class": ".-top-40",
                    "css": "top: -10rem;"
                },
                {
                    "class": ".-right-40",
                    "css": "right: -10rem;"
                },
                {
                    "class": ".-bottom-40",
                    "css": "bottom: -10rem;"
                },
                {
                    "class": ".-left-40",
                    "css": "left: -10rem;"
                },
                {
                    "class": ".inset-44",
                    "css": "top: 11rem; right: 11rem; bottom: 11rem; left: 11rem;"
                },
                {
                    "class": ".-inset-44",
                    "css": "top: -11rem; right: -11rem; bottom: -11rem; left: -11rem;"
                },
                {
                    "class": ".inset-y-44",
                    "css": "top: 11rem; bottom: 11rem;"
                },
                {
                    "class": ".-inset-y-44",
                    "css": "top: -11rem; bottom: -11rem;"
                },
                {
                    "class": ".inset-x-44",
                    "css": "right: 11rem; left: 11rem;"
                },
                {
                    "class": ".-inset-x-44",
                    "css": "right: -11rem; left: -11rem;"
                },
                {
                    "class": ".top-44",
                    "css": "top: 11rem;"
                },
                {
                    "class": ".right-44",
                    "css": "right: 11rem;"
                },
                {
                    "class": ".bottom-44",
                    "css": "bottom: 11rem;"
                },
                {
                    "class": ".left-44",
                    "css": "left: 11rem;"
                },
                {
                    "class": ".-top-44",
                    "css": "top: -11rem;"
                },
                {
                    "class": ".-right-44",
                    "css": "right: -11rem;"
                },
                {
                    "class": ".-bottom-44",
                    "css": "bottom: -11rem;"
                },
                {
                    "class": ".-left-44",
                    "css": "left: -11rem;"
                },
                {
                    "class": ".inset-48",
                    "css": "top: 12rem; right: 12rem; bottom: 12rem; left: 12rem;"
                },
                {
                    "class": ".-inset-48",
                    "css": "top: -12rem; right: -12rem; bottom: -12rem; left: -12rem;"
                },
                {
                    "class": ".inset-y-48",
                    "css": "top: 12rem; bottom: 12rem;"
                },
                {
                    "class": ".-inset-y-48",
                    "css": "top: -12rem; bottom: -12rem;"
                },
                {
                    "class": ".inset-x-48",
                    "css": "right: 12rem; left: 12rem;"
                },
                {
                    "class": ".-inset-x-48",
                    "css": "right: -12rem; left: -12rem;"
                },
                {
                    "class": ".top-48",
                    "css": "top: 12rem;"
                },
                {
                    "class": ".right-48",
                    "css": "right: 12rem;"
                },
                {
                    "class": ".bottom-48",
                    "css": "bottom: 12rem;"
                },
                {
                    "class": ".left-48",
                    "css": "left: 12rem;"
                },
                {
                    "class": ".-top-48",
                    "css": "top: -12rem;"
                },
                {
                    "class": ".-right-48",
                    "css": "right: -12rem;"
                },
                {
                    "class": ".-bottom-48",
                    "css": "bottom: -12rem;"
                },
                {
                    "class": ".-left-48",
                    "css": "left: -12rem;"
                },
                {
                    "class": ".inset-52",
                    "css": "top: 13rem; right: 13rem; bottom: 13rem; left: 13rem;"
                },
                {
                    "class": ".-inset-52",
                    "css": "top: -13rem; right: -13rem; bottom: -13rem; left: -13rem;"
                },
                {
                    "class": ".inset-y-52",
                    "css": "top: 13rem; bottom: 13rem;"
                },
                {
                    "class": ".-inset-y-52",
                    "css": "top: -13rem; bottom: -13rem;"
                },
                {
                    "class": ".inset-x-52",
                    "css": "right: 13rem; left: 13rem;"
                },
                {
                    "class": ".-inset-x-52",
                    "css": "right: -13rem; left: -13rem;"
                },
                {
                    "class": ".top-52",
                    "css": "top: 13rem;"
                },
                {
                    "class": ".right-52",
                    "css": "right: 13rem;"
                },
                {
                    "class": ".bottom-52",
                    "css": "bottom: 13rem;"
                },
                {
                    "class": ".left-52",
                    "css": "left: 13rem;"
                },
                {
                    "class": ".-top-52",
                    "css": "top: -13rem;"
                },
                {
                    "class": ".-right-52",
                    "css": "right: -13rem;"
                },
                {
                    "class": ".-bottom-52",
                    "css": "bottom: -13rem;"
                },
                {
                    "class": ".-left-52",
                    "css": "left: -13rem;"
                },
                {
                    "class": ".inset-56",
                    "css": "top: 14rem; right: 14rem; bottom: 14rem; left: 14rem;"
                },
                {
                    "class": ".-inset-56",
                    "css": "top: -14rem; right: -14rem; bottom: -14rem; left: -14rem;"
                },
                {
                    "class": ".inset-y-56",
                    "css": "top: 14rem; bottom: 14rem;"
                },
                {
                    "class": ".-inset-y-56",
                    "css": "top: -14rem; bottom: -14rem;"
                },
                {
                    "class": ".inset-x-56",
                    "css": "right: 14rem; left: 14rem;"
                },
                {
                    "class": ".-inset-x-56",
                    "css": "right: -14rem; left: -14rem;"
                },
                {
                    "class": ".top-56",
                    "css": "top: 14rem;"
                },
                {
                    "class": ".right-56",
                    "css": "right: 14rem;"
                },
                {
                    "class": ".bottom-56",
                    "css": "bottom: 14rem;"
                },
                {
                    "class": ".left-56",
                    "css": "left: 14rem;"
                },
                {
                    "class": ".-top-56",
                    "css": "top: -14rem;"
                },
                {
                    "class": ".-right-56",
                    "css": "right: -14rem;"
                },
                {
                    "class": ".-bottom-56",
                    "css": "bottom: -14rem;"
                },
                {
                    "class": ".-left-56",
                    "css": "left: -14rem;"
                },
                {
                    "class": ".inset-60",
                    "css": "top: 15rem; right: 15rem; bottom: 15rem; left: 15rem;"
                },
                {
                    "class": ".-inset-60",
                    "css": "top: -15rem; right: -15rem; bottom: -15rem; left: -15rem;"
                },
                {
                    "class": ".inset-y-60",
                    "css": "top: 15rem; bottom: 15rem;"
                },
                {
                    "class": ".-inset-y-60",
                    "css": "top: -15rem; bottom: -15rem;"
                },
                {
                    "class": ".inset-x-60",
                    "css": "right: 15rem; left: 15rem;"
                },
                {
                    "class": ".-inset-x-60",
                    "css": "right: -15rem; left: -15rem;"
                },
                {
                    "class": ".top-60",
                    "css": "top: 15rem;"
                },
                {
                    "class": ".right-60",
                    "css": "right: 15rem;"
                },
                {
                    "class": ".bottom-60",
                    "css": "bottom: 15rem;"
                },
                {
                    "class": ".left-60",
                    "css": "left: 15rem;"
                },
                {
                    "class": ".-top-60",
                    "css": "top: -15rem;"
                },
                {
                    "class": ".-right-60",
                    "css": "right: -15rem;"
                },
                {
                    "class": ".-bottom-60",
                    "css": "bottom: -15rem;"
                },
                {
                    "class": ".-left-60",
                    "css": "left: -15rem;"
                },
                {
                    "class": ".inset-64",
                    "css": "top: 16rem; right: 16rem; bottom: 16rem; left: 16rem;"
                },
                {
                    "class": ".-inset-64",
                    "css": "top: -16rem; right: -16rem; bottom: -16rem; left: -16rem;"
                },
                {
                    "class": ".inset-y-64",
                    "css": "top: 16rem; bottom: 16rem;"
                },
                {
                    "class": ".-inset-y-64",
                    "css": "top: -16rem; bottom: -16rem;"
                },
                {
                    "class": ".inset-x-64",
                    "css": "right: 16rem; left: 16rem;"
                },
                {
                    "class": ".-inset-x-64",
                    "css": "right: -16rem; left: -16rem;"
                },
                {
                    "class": ".top-64",
                    "css": "top: 16rem;"
                },
                {
                    "class": ".right-64",
                    "css": "right: 16rem;"
                },
                {
                    "class": ".bottom-64",
                    "css": "bottom: 16rem;"
                },
                {
                    "class": ".left-64",
                    "css": "left: 16rem;"
                },
                {
                    "class": ".-top-64",
                    "css": "top: -16rem;"
                },
                {
                    "class": ".-right-64",
                    "css": "right: -16rem;"
                },
                {
                    "class": ".-bottom-64",
                    "css": "bottom: -16rem;"
                },
                {
                    "class": ".-left-64",
                    "css": "left: -16rem;"
                },
                {
                    "class": ".inset-72",
                    "css": "top: 18rem; right: 18rem; bottom: 18rem; left: 18rem;"
                },
                {
                    "class": ".-inset-72",
                    "css": "top: -18rem; right: -18rem; bottom: -18rem; left: -18rem;"
                },
                {
                    "class": ".inset-y-72",
                    "css": "top: 18rem; bottom: 18rem;"
                },
                {
                    "class": ".-inset-y-72",
                    "css": "top: -18rem; bottom: -18rem;"
                },
                {
                    "class": ".inset-x-72",
                    "css": "right: 18rem; left: 18rem;"
                },
                {
                    "class": ".-inset-x-72",
                    "css": "right: -18rem; left: -18rem;"
                },
                {
                    "class": ".top-72",
                    "css": "top: 18rem;"
                },
                {
                    "class": ".right-72",
                    "css": "right: 18rem;"
                },
                {
                    "class": ".bottom-72",
                    "css": "bottom: 18rem;"
                },
                {
                    "class": ".left-72",
                    "css": "left: 18rem;"
                },
                {
                    "class": ".-top-72",
                    "css": "top: -18rem;"
                },
                {
                    "class": ".-right-72",
                    "css": "right: -18rem;"
                },
                {
                    "class": ".-bottom-72",
                    "css": "bottom: -18rem;"
                },
                {
                    "class": ".-left-72",
                    "css": "left: -18rem;"
                },
                {
                    "class": ".inset-80",
                    "css": "top: 20; right: 20; bottom: 20; left: 20;"
                },
                {
                    "class": ".-inset-80",
                    "css": "top: -20; right: -20; bottom: -20; left: -20;"
                },
                {
                    "class": ".inset-y-80",
                    "css": "top: 20; bottom: 20;"
                },
                {
                    "class": ".-inset-y-80",
                    "css": "top: -20; bottom: -20;"
                },
                {
                    "class": ".inset-x-80",
                    "css": "right: 20; left: 20;"
                },
                {
                    "class": ".-inset-x-80",
                    "css": "right: -20; left: -20;"
                },
                {
                    "class": ".top-80",
                    "css": "top: 20;"
                },
                {
                    "class": ".right-80",
                    "css": "right: 20;"
                },
                {
                    "class": ".bottom-80",
                    "css": "bottom: 20;"
                },
                {
                    "class": ".left-80",
                    "css": "left: 20;"
                },
                {
                    "class": ".-top-80",
                    "css": "top: -20;"
                },
                {
                    "class": ".-right-80",
                    "css": "right: -20;"
                },
                {
                    "class": ".-bottom-80",
                    "css": "bottom: -20;"
                },
                {
                    "class": ".-left-80",
                    "css": "left: -20rem;"
                },
                {
                    "class": ".inset-96",
                    "css": "top: 24rem; right: 24rem; bottom: 24rem; left: 24rem;"
                },
                {
                    "class": ".-inset-96",
                    "css": "top: -24rem; right: -24rem; bottom: -24rem; left: -24rem;"
                },
                {
                    "class": ".inset-y-96",
                    "css": "top: 24rem; bottom: 24rem;"
                },
                {
                    "class": ".-inset-y-96",
                    "css": "top: -24rem; bottom: -24rem;"
                },
                {
                    "class": ".inset-x-96",
                    "css": "right: 24rem; left: 24rem;"
                },
                {
                    "class": ".-inset-x-96",
                    "css": "right: -24rem; left: -24rem;"
                },
                {
                    "class": ".top-96",
                    "css": "top: 24rem;"
                },
                {
                    "class": ".right-96",
                    "css": "right: 24rem;"
                },
                {
                    "class": ".bottom-96",
                    "css": "bottom: 24rem;"
                },
                {
                    "class": ".left-96",
                    "css": "left: 24rem;"
                },
                {
                    "class": ".-top-96",
                    "css": "top: -24rem;"
                },
                {
                    "class": ".-right-96",
                    "css": "right: -24rem;"
                },
                {
                    "class": ".-bottom-96",
                    "css": "bottom: -24rem;"
                },
                {
                    "class": ".-left-96",
                    "css": "left: -24rem;"
                },
                {
                    "class": ".inset-auto",
                    "css": "top: auto; right: auto; bottom: auto; left: auto;"
                },
                {
                    "class": ".inset-y-auto",
                    "css": "top: auto; bottom: auto;"
                },
                {
                    "class": ".inset-x-auto",
                    "css": "right: auto; left: auto;"
                },
                {
                    "class": ".top-auto",
                    "css": "top: auto;"
                },
                {
                    "class": ".right-auto",
                    "css": "right: auto;"
                },
                {
                    "class": ".bottom-auto",
                    "css": "bottom: auto;"
                },
                {
                    "class": ".left-auto",
                    "css": "left: auto;"
                },
                {
                    "class": ".inset-1/2",
                    "css": "top: 50%; right: 50%; bottom: 50%; left: 50%;"
                },
                {
                    "class": ".inset-2/3",
                    "css": "top: 66.666667%; right: 66.666667%; bottom: 66.666667%; left: 66.666667%;"
                },
                {
                    "class": ".inset-1/4",
                    "css": "top: 25%; right: 25%; bottom: 25%; left: 25%;"
                },
                {
                    "class": ".inset-3/4",
                    "css": "top: 75%; right: 75%; bottom: 75%; left: 75%;"
                },
                {
                    "class": ".inset-full",
                    "css": "top: 100%; right: 100%; bottom: 100%; left: 100%;"
                },
                {
                    "class": ".-inset-1/2",
                    "css": "top: -50%; right: -50%; bottom: -50%; left: -50%;"
                },
                {
                    "class": ".-inset-2/3",
                    "css": "top: -66.666667%; right: -66.666667%; bottom: -66.666667%; left: -66.666667%;"
                },
                {
                    "class": ".-inset-1/4",
                    "css": "top: -25%; right: -25%; bottom: -25%; left: -25%;"
                },
                {
                    "class": ".-inset-3/4",
                    "css": "top: -75%; right: -75%; bottom: -75%; left: -75%;"
                },
                {
                    "class": ".-inset-full",
                    "css": "top: -100%; right: -100%; bottom: -100%; left: -100%;"
                },
                {
                    "class": ".inset-x-1/2",
                    "css": "right: 50%; left: 50%;"
                },
                {
                    "class": ".inset-x-2/3",
                    "css": "right: 66.666667%; left: 66.666667%;"
                },
                {
                    "class": ".inset-x-1/4",
                    "css": "right: 25%; left: 25%;"
                },
                {
                    "class": ".inset-x-3/4",
                    "css": "right: 75%; left: 75%;"
                },
                {
                    "class": ".inset-x-full",
                    "css": "right: 100%; left: 100%;"
                },
                {
                    "class": ".-inset-x-1/2",
                    "css": "right: -50%; left: -50%;"
                },
                {
                    "class": ".-inset-x-2/3",
                    "css": "right: -66.666667%; left: -66.666667%;"
                },
                {
                    "class": ".-inset-x-1/4",
                    "css": "right: -25%; left: -25%;"
                },
                {
                    "class": ".-inset-x-3/4",
                    "css": "right: -75%; left: -75%;"
                },
                {
                    "class": ".-inset-x-full",
                    "css": "right: -100%; left: -100%;"
                },
                {
                    "class": ".inset-y-1/2",
                    "css": "top: 50%; bottom: 50%;"
                },
                {
                    "class": ".inset-y-2/3",
                    "css": "top: 66.666667%; bottom: 66.666667%;"
                },
                {
                    "class": ".inset-y-1/4",
                    "css": "top: 25%; bottom: 25%;"
                },
                {
                    "class": ".inset-y-3/4",
                    "css": "top: 75%; bottom: 75%;"
                },
                {
                    "class": ".inset-y-full",
                    "css": "top: 100%; bottom: 100%;"
                },
                {
                    "class": ".-inset-y-1/2",
                    "css": "top: -50%; bottom: -50%;"
                },
                {
                    "class": ".-inset-y-2/3",
                    "css": "top: -66.666667%; bottom: -66.666667%;"
                },
                {
                    "class": ".-inset-y-1/4",
                    "css": "top: -25%; bottom: -25%;"
                },
                {
                    "class": ".-inset-y-3/4",
                    "css": "top: -75%; bottom: -75%;"
                },
                {
                    "class": ".-inset-y-full",
                    "css": "top: -100%; bottom: -100%;"
                },
                {
                    "class": ".top-1/2",
                    "css": "top: 50%;"
                },
                {
                    "class": ".top-2/3",
                    "css": "top: 66.666667%;"
                },
                {
                    "class": ".top-1/4",
                    "css": "top: 25%;"
                },
                {
                    "class": ".top-3/4",
                    "css": "top: 75%;"
                },
                {
                    "class": ".top-full",
                    "css": "top: 100%;"
                },
                {
                    "class": ".-top-1/2",
                    "css": "top: -50%;"
                },
                {
                    "class": ".-top-2/3",
                    "css": "top: -66.666667%;"
                },
                {
                    "class": ".-top-1/4",
                    "css": "top: -25%;"
                },
                {
                    "class": ".-top-3/4",
                    "css": "top: -75%;"
                },
                {
                    "class": ".-top-full",
                    "css": "top: -100%;"
                },
                {
                    "class": ".right-1/2",
                    "css": "right: 50%;"
                },
                {
                    "class": ".right-2/3",
                    "css": "right: 66.666667%;"
                },
                {
                    "class": ".right-1/4",
                    "css": "right: 25%;"
                },
                {
                    "class": ".right-3/4",
                    "css": "right: 75%;"
                },
                {
                    "class": ".right-full",
                    "css": "right: 100%;"
                },
                {
                    "class": ".-right-1/2",
                    "css": "right: -50%;"
                },
                {
                    "class": ".-right-2/3",
                    "css": "right: -66.666667%;"
                },
                {
                    "class": ".-right-1/4",
                    "css": "right: -25%;"
                },
                {
                    "class": ".-right-3/4",
                    "css": "right: -75%;"
                },
                {
                    "class": ".-right-full",
                    "css": "right: -100%;"
                },
                {
                    "class": ".bottom-1/2",
                    "css": "bottom: 50%;"
                },
                {
                    "class": ".bottom-2/3",
                    "css": "bottom: 66.666667%;"
                },
                {
                    "class": ".bottom-1/4",
                    "css": "bottom: 25%;"
                },
                {
                    "class": ".bottom-3/4",
                    "css": "bottom: 75%;"
                },
                {
                    "class": ".bottom-full",
                    "css": "bottom: 100%;"
                },
                {
                    "class": ".-bottom-1/2",
                    "css": "bottom: -50%;"
                },
                {
                    "class": ".-bottom-2/3",
                    "css": "bottom: -66.666667%;"
                },
                {
                    "class": ".-bottom-1/4",
                    "css": "bottom: -25%;"
                },
                {
                    "class": ".-bottom-3/4",
                    "css": "bottom: -75%;"
                },
                {
                    "class": ".-bottom-full",
                    "css": "bottom: -100%;"
                },
                {
                    "class": ".left-1/2",
                    "css": "left: 50%;"
                },
                {
                    "class": ".left-2/3",
                    "css": "left: 66.666667%;"
                },
                {
                    "class": ".left-1/4",
                    "css": "left: 25%;"
                },
                {
                    "class": ".left-3/4",
                    "css": "left: 75%;"
                },
                {
                    "class": ".left-full",
                    "css": "left: 100%;"
                },
                {
                    "class": ".-left-1/2",
                    "css": "left: -50%;"
                },
                {
                    "class": ".-left-2/3",
                    "css": "left: -66.666667%;"
                },
                {
                    "class": ".-left-1/4",
                    "css": "left: -25%;"
                },
                {
                    "class": ".-left-3/4",
                    "css": "left: -75%;"
                },
                {
                    "class": ".-left-full",
                    "css": "left: -100%;"
                }
            ]
        },
        {
            "title": "Visibility",
            "classList": [
                {
                    "class": ".visible",
                    "css": "visibility: visible;"
                },
                {
                    "class": ".invisible",
                    "css": "visibility: hidden;"
                }
            ]
        },
        {
            "title": "Z-index",
            "classList": [
                {
                    "class": ".z-0",
                    "css": "z-index: 0;"
                },
                {
                    "class": ".z-10",
                    "css": "z-index: 10;"
                },
                {
                    "class": ".z-20",
                    "css": "z-index: 20;"
                },
                {
                    "class": ".z-30",
                    "css": "z-index: 30;"
                },
                {
                    "class": ".z-40",
                    "css": "z-index: 40;"
                },
                {
                    "class": ".z-50",
                    "css": "z-index: 50;"
                },
                {
                    "class": ".z-auto",
                    "css": "z-index: auto;"
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
                    "css": "padding: 0;"
                },
                {
                    "class": ".p-0.5",
                    "css": "padding: 0.125rem;"
                },
                {
                    "class": ".p-1",
                    "css": "padding: 0.25rem;"
                },
                {
                    "class": ".p-1.5",
                    "css": "padding: 0.375rem;"
                },
                {
                    "class": ".p-2",
                    "css": "padding: 0.5rem;"
                },
                {
                    "class": ".p-2.5",
                    "css": "padding: 0.625rem;"
                },
                {
                    "class": ".p-3",
                    "css": "padding: 0.75rem;"
                },
                {
                    "class": ".p-3.5",
                    "css": "padding: 0.875rem;"
                },
                {
                    "class": ".p-4",
                    "css": "padding: 1rem;"
                },
                {
                    "class": ".p-5",
                    "css": "padding: 1.25rem;"
                },
                {
                    "class": ".p-6",
                    "css": "padding: 1.5rem;"
                },
                {
                    "class": ".p-8",
                    "css": "padding: 2rem;"
                },
                {
                    "class": ".p-10",
                    "css": "padding: 2.5rem;"
                },
                {
                    "class": ".p-11",
                    "css": "padding: 2.75rem;"
                },
                {
                    "class": ".p-12",
                    "css": "padding: 3rem;"
                },
                {
                    "class": ".p-14",
                    "css": "padding: 3.5rem;"
                },
                {
                    "class": ".p-16",
                    "css": "padding: 4rem;"
                },
                {
                    "class": ".p-20",
                    "css": "padding: 5rem;"
                },
                {
                    "class": ".p-24",
                    "css": "padding: 6rem;"
                },
                {
                    "class": ".p-28",
                    "css": "padding: 7rem;"
                },
                {
                    "class": ".p-32",
                    "css": "padding: 8rem;"
                },
                {
                    "class": ".p-36",
                    "css": "padding: 9rem;"
                },
                {
                    "class": ".p-40",
                    "css": "padding: 10rem;"
                },
                {
                    "class": ".p-44",
                    "css": "padding: 11rem;"
                },
                {
                    "class": ".p-48",
                    "css": "padding: 12rem;"
                },
                {
                    "class": ".p-52",
                    "css": "padding: 13rem;"
                },
                {
                    "class": ".p-56",
                    "css": "padding: 14rem;"
                },
                {
                    "class": ".p-64",
                    "css": "padding: 16rem;"
                },
                {
                    "class": ".p-72",
                    "css": "padding: 18rem;"
                },
                {
                    "class": ".p-80",
                    "css": "padding: 20rem;"
                },
                {
                    "class": ".p-96",
                    "css": "padding: 24rem;"
                },
                {
                    "class": ".p-px",
                    "css": "padding: 1px;"
                },
                {
                    "class": ".py-0",
                    "css": "padding-top: 0; padding-bottom: 0;"
                },
                {
                    "class": ".px-0",
                    "css": "padding-left: 0; padding-right: 0;"
                },
                {
                    "class": ".py-0.5",
                    "css": "padding-top: 0.125rem; padding-bottom: 0.125rem;"
                },
                {
                    "class": ".px-0.5",
                    "css": "padding-left: 0.125rem; padding-right: 0.125rem;"
                },
                {
                    "class": ".py-1",
                    "css": "padding-top: 0.25rem; padding-bottom: 0.25rem;"
                },
                {
                    "class": ".px-1",
                    "css": "padding-left: 0.25rem; padding-right: 0.25rem;"
                },
                {
                    "class": ".py-1.5",
                    "css": "padding-top: 0.375rem; padding-bottom: 0.375rem;"
                },
                {
                    "class": ".px-1.5",
                    "css": "padding-left: 0.375rem; padding-right: 0.375rem;"
                },
                {
                    "class": ".py-2",
                    "css": "padding-top: 0.5rem; padding-bottom: 0.5rem;"
                },
                {
                    "class": ".px-2",
                    "css": "padding-left: 0.5rem; padding-right: 0.5rem;"
                },
                {
                    "class": ".py-2.5",
                    "css": "padding-top: 0.625rem; padding-bottom: 0.625rem;"
                },
                {
                    "class": ".px-2.5",
                    "css": "padding-left: 0.625rem; padding-right: 0.625rem;"
                },
                {
                    "class": ".py-3",
                    "css": "padding-top: 0.75rem; padding-bottom: 0.75rem;"
                },
                {
                    "class": ".px-3",
                    "css": "padding-left: 0.75rem; padding-right: 0.75rem;"
                },
                {
                    "class": ".py-3.5",
                    "css": "padding-top: 0.875rem; padding-bottom: 0.875rem;"
                },
                {
                    "class": ".px-3.5",
                    "css": "padding-left: 0.875rem; padding-right: 0.875rem;"
                },
                {
                    "class": ".py-4",
                    "css": "padding-top: 1rem; padding-bottom: 1rem;"
                },
                {
                    "class": ".px-4",
                    "css": "padding-left: 1rem; padding-right: 1rem;"
                },
                {
                    "class": ".py-5",
                    "css": "padding-top: 1.25rem; padding-bottom: 1.25rem;"
                },
                {
                    "class": ".px-5",
                    "css": "padding-left: 1.25rem; padding-right: 1.25rem;"
                },
                {
                    "class": ".py-6",
                    "css": "padding-top: 1.5rem; padding-bottom: 1.5rem;"
                },
                {
                    "class": ".px-6",
                    "css": "padding-left: 1.5rem; padding-right: 1.5rem;"
                },
                {
                    "class": ".py-7",
                    "css": "padding-top: 1.75rem; padding-bottom: 1.75rem;"
                },
                {
                    "class": ".px-7",
                    "css": "padding-left: 1.75rem; padding-right: 1.75rem;"
                },
                {
                    "class": ".py-8",
                    "css": "padding-top: 2rem; padding-bottom: 2rem;"
                },
                {
                    "class": ".px-8",
                    "css": "padding-left: 2rem; padding-right: 2rem;"
                },
                {
                    "class": ".py-9",
                    "css": "padding-top: 2.25rem; padding-bottom: 2.25rem;"
                },
                {
                    "class": ".px-9",
                    "css": "padding-left: 2.25rem; padding-right: 2.25rem;"
                },
                {
                    "class": ".py-10",
                    "css": "padding-top: 2.5rem; padding-bottom: 2.5rem;"
                },
                {
                    "class": ".px-10",
                    "css": "padding-left: 2.5rem; padding-right: 2.5rem;"
                },
                {
                    "class": ".py-11",
                    "css": "padding-top: 2.75rem; padding-bottom: 2.75rem;"
                },
                {
                    "class": ".px-11",
                    "css": "padding-left: 2.75rem; padding-right: 2.75rem;"
                },
                {
                    "class": ".py-12",
                    "css": "padding-top: 3rem; padding-bottom: 3rem;"
                },
                {
                    "class": ".px-12",
                    "css": "padding-left: 3rem; padding-right: 3rem;"
                },
                {
                    "class": ".py-14",
                    "css": "padding-top: 3.5rem; padding-bottom: 3.5rem;"
                },
                {
                    "class": ".px-14",
                    "css": "padding-left: 3.5rem; padding-right: 3.5rem;"
                },
                {
                    "class": ".py-16",
                    "css": "padding-top: 4rem; padding-bottom: 4rem;"
                },
                {
                    "class": ".px-16",
                    "css": "padding-left: 4rem; padding-right: 4rem;"
                },
                {
                    "class": ".py-20",
                    "css": "padding-top: 5rem; padding-bottom: 5rem;"
                },
                {
                    "class": ".px-20",
                    "css": "padding-left: 5rem; padding-right: 5rem;"
                },
                {
                    "class": ".py-24",
                    "css": "padding-top: 6rem; padding-bottom: 6rem;"
                },
                {
                    "class": ".px-24",
                    "css": "padding-left: 6rem; padding-right: 6rem;"
                },
                {
                    "class": ".py-28",
                    "css": "padding-top: 7rem; padding-bottom: 7rem;"
                },
                {
                    "class": ".px-28",
                    "css": "padding-left: 7rem; padding-right: 7rem;"
                },
                {
                    "class": ".py-32",
                    "css": "padding-top: 8rem; padding-bottom: 8rem;"
                },
                {
                    "class": ".px-32",
                    "css": "padding-left: 8rem; padding-right: 8rem;"
                },
                {
                    "class": ".py-36",
                    "css": "padding-top: 9rem; padding-bottom: 9rem;"
                },
                {
                    "class": ".px-36",
                    "css": "padding-left: 9rem; padding-right: 9rem;"
                },
                {
                    "class": ".py-40",
                    "css": "padding-top: 10rem; padding-bottom: 10rem;"
                },
                {
                    "class": ".px-40",
                    "css": "padding-left: 10rem; padding-right: 10rem;"
                },
                {
                    "class": ".py-44",
                    "css": "padding-top: 11rem; padding-bottom: 11rem;"
                },
                {
                    "class": ".px-44",
                    "css": "padding-left: 11rem; padding-right: 11rem;"
                },
                {
                    "class": ".py-48",
                    "css": "padding-top: 12rem; padding-bottom: 12rem;"
                },
                {
                    "class": ".px-48",
                    "css": "padding-left: 12rem; padding-right: 12rem;"
                },
                {
                    "class": ".py-52",
                    "css": "padding-top: 13rem; padding-bottom: 13rem;"
                },
                {
                    "class": ".px-52",
                    "css": "padding-left: 13rem; padding-right: 13rem;"
                },
                {
                    "class": ".py-56",
                    "css": "padding-top: 14rem; padding-bottom: 14rem;"
                },
                {
                    "class": ".px-56",
                    "css": "padding-left: 14rem; padding-right: 14rem;"
                },
                {
                    "class": ".py-60",
                    "css": "padding-top: 15rem; padding-bottom: 15rem;"
                },
                {
                    "class": ".px-60",
                    "css": "padding-left: 15rem; padding-right: 15rem;"
                },
                {
                    "class": ".py-64",
                    "css": "padding-top: 16rem; padding-bottom: 16rem;"
                },
                {
                    "class": ".px-64",
                    "css": "padding-left: 16rem; padding-right: 16rem;"
                },
                {
                    "class": ".py-70",
                    "css": "padding-top: 18rem; padding-bottom: 18rem;"
                },
                {
                    "class": ".px-70",
                    "css": "padding-left: 18rem; padding-right: 18rem;"
                },
                {
                    "class": ".py-80",
                    "css": "padding-top: 20rem; padding-bottom: 20rem;"
                },
                {
                    "class": ".px-80",
                    "css": "padding-left: 20rem; padding-right: 20rem;"
                },
                {
                    "class": ".py-96",
                    "css": "padding-top: 24rem; padding-bottom: 24rem;"
                },
                {
                    "class": ".px-96",
                    "css": "padding-left: 24rem; padding-right: 24rem;"
                },
                {
                    "class": ".py-px",
                    "css": "padding-top: 1px; padding-bottom: 1px;"
                },
                {
                    "class": ".px-px",
                    "css": "padding-left: 1px; padding-right: 1px;"
                },
                {
                    "class": ".pt-0",
                    "css": "padding-top: 0;"
                },
                {
                    "class": ".pr-0",
                    "css": "padding-right: 0;"
                },
                {
                    "class": ".pb-0",
                    "css": "padding-bottom: 0;"
                },
                {
                    "class": ".pl-0",
                    "css": "padding-left: 0;"
                },
                {
                    "class": ".pt-0.5",
                    "css": "padding-top: 0.125rem;"
                },
                {
                    "class": ".pr-0.5",
                    "css": "padding-right: 0.125rem;"
                },
                {
                    "class": ".pb-0.5",
                    "css": "padding-bottom: 0.125rem;"
                },
                {
                    "class": ".pl-0.5",
                    "css": "padding-left: 0.125rem;"
                },
                {
                    "class": ".pt-1",
                    "css": "padding-top: 0.25rem;"
                },
                {
                    "class": ".pr-1",
                    "css": "padding-right: 0.25rem;"
                },
                {
                    "class": ".pb-1",
                    "css": "padding-bottom: 0.25rem;"
                },
                {
                    "class": ".pl-1",
                    "css": "padding-left: 0.25rem;"
                },
                {
                    "class": ".pt-1.5",
                    "css": "padding-top: 0.375rem;"
                },
                {
                    "class": ".pr-1.5",
                    "css": "padding-right: 0.375rem;"
                },
                {
                    "class": ".pb-1.5",
                    "css": "padding-bottom: 0.375rem;"
                },
                {
                    "class": ".pl-1.5",
                    "css": "padding-left: 0.375rem;"
                },
                {
                    "class": ".pt-2",
                    "css": "padding-top: 0.5rem;"
                },
                {
                    "class": ".pr-2",
                    "css": "padding-right: 0.5rem;"
                },
                {
                    "class": ".pb-2",
                    "css": "padding-bottom: 0.5rem;"
                },
                {
                    "class": ".pl-2",
                    "css": "padding-left: 0.5rem;"
                },
                {
                    "class": ".pt-2.5",
                    "css": "padding-top: 0.625rem;"
                },
                {
                    "class": ".pr-2.5",
                    "css": "padding-right: 0.625rem;"
                },
                {
                    "class": ".pb-2.5",
                    "css": "padding-bottom: 0.625rem;"
                },
                {
                    "class": ".pl-2.5",
                    "css": "padding-left: 0.625rem;"
                },
                {
                    "class": ".pt-3",
                    "css": "padding-top: 0.75rem;"
                },
                {
                    "class": ".pr-3",
                    "css": "padding-right: 0.75rem;"
                },
                {
                    "class": ".pb-3",
                    "css": "padding-bottom: 0.75rem;"
                },
                {
                    "class": ".pl-3",
                    "css": "padding-left: 0.75rem;"
                },
                {
                    "class": ".pt-3.5",
                    "css": "padding-top: 0.875rem;"
                },
                {
                    "class": ".pr-3.5",
                    "css": "padding-right: 0.875rem;"
                },
                {
                    "class": ".pb-3.5",
                    "css": "padding-bottom: 0.875rem;"
                },
                {
                    "class": ".pl-3.5",
                    "css": "padding-left: 0.875rem;"
                },
                {
                    "class": ".pt-4",
                    "css": "padding-top: 1rem;"
                },
                {
                    "class": ".pr-4",
                    "css": "padding-right: 1rem;"
                },
                {
                    "class": ".pb-4",
                    "css": "padding-bottom: 1rem;"
                },
                {
                    "class": ".pl-4",
                    "css": "padding-left: 1rem;"
                },
                {
                    "class": ".pt-5",
                    "css": "padding-top: 1.25rem;"
                },
                {
                    "class": ".pr-5",
                    "css": "padding-right: 1.25rem;"
                },
                {
                    "class": ".pb-5",
                    "css": "padding-bottom: 1.25rem;"
                },
                {
                    "class": ".pl-5",
                    "css": "padding-left: 1.25rem;"
                },
                {
                    "class": ".pt-6",
                    "css": "padding-top: 1.5rem;"
                },
                {
                    "class": ".pr-6",
                    "css": "padding-right: 1.5rem;"
                },
                {
                    "class": ".pb-6",
                    "css": "padding-bottom: 1.5rem;"
                },
                {
                    "class": ".pl-6",
                    "css": "padding-left: 1.5rem;"
                },
                {
                    "class": ".pt-7",
                    "css": "padding-top: 1.75rem;"
                },
                {
                    "class": ".pr-7",
                    "css": "padding-right: 1.75rem;"
                },
                {
                    "class": ".pb-7",
                    "css": "padding-bottom: 1.75rem;"
                },
                {
                    "class": ".pl-7",
                    "css": "padding-left: 1.75rem;"
                },
                {
                    "class": ".pt-8",
                    "css": "padding-top: 2rem;"
                },
                {
                    "class": ".pr-8",
                    "css": "padding-right: 2rem;"
                },
                {
                    "class": ".pb-8",
                    "css": "padding-bottom: 2rem;"
                },
                {
                    "class": ".pl-8",
                    "css": "padding-left: 2rem;"
                },
                {
                    "class": ".pt-9",
                    "css": "padding-top: 2.25rem;"
                },
                {
                    "class": ".pr-9",
                    "css": "padding-right: 2.25rem;"
                },
                {
                    "class": ".pb-9",
                    "css": "padding-bottom: 2.25rem;"
                },
                {
                    "class": ".pl-9",
                    "css": "padding-left: 2.25rem;"
                },
                {
                    "class": ".pt-10",
                    "css": "padding-top: 2.5rem;"
                },
                {
                    "class": ".pr-10",
                    "css": "padding-right: 2.5rem;"
                },
                {
                    "class": ".pb-10",
                    "css": "padding-bottom: 2.5rem;"
                },
                {
                    "class": ".pl-10",
                    "css": "padding-left: 2.5rem;"
                },
                {
                    "class": ".pt-11",
                    "css": "padding-top: 2.75rem;"
                },
                {
                    "class": ".pr-11",
                    "css": "padding-right: 2.75rem;"
                },
                {
                    "class": ".pb-11",
                    "css": "padding-bottom: 2.75rem;"
                },
                {
                    "class": ".pl-11",
                    "css": "padding-left: 2.75rem;"
                },
                {
                    "class": ".pt-12",
                    "css": "padding-top: 3rem;"
                },
                {
                    "class": ".pr-12",
                    "css": "padding-right: 3rem;"
                },
                {
                    "class": ".pb-12",
                    "css": "padding-bottom: 3rem;"
                },
                {
                    "class": ".pl-12",
                    "css": "padding-left: 3rem;"
                },
                {
                    "class": ".pt-14",
                    "css": "padding-top: 3.5rem;"
                },
                {
                    "class": ".pr-14",
                    "css": "padding-right: 3.5rem;"
                },
                {
                    "class": ".pb-14",
                    "css": "padding-bottom: 3.5rem;"
                },
                {
                    "class": ".pl-14",
                    "css": "padding-left: 3.5rem;"
                },
                {
                    "class": ".pt-16",
                    "css": "padding-top: 4rem;"
                },
                {
                    "class": ".pr-16",
                    "css": "padding-right: 4rem;"
                },
                {
                    "class": ".pb-16",
                    "css": "padding-bottom: 4rem;"
                },
                {
                    "class": ".pl-16",
                    "css": "padding-left: 4rem;"
                },
                {
                    "class": ".pt-20",
                    "css": "padding-top: 5rem;"
                },
                {
                    "class": ".pr-20",
                    "css": "padding-right: 5rem;"
                },
                {
                    "class": ".pb-20",
                    "css": "padding-bottom: 5rem;"
                },
                {
                    "class": ".pl-20",
                    "css": "padding-left: 5rem;"
                },
                {
                    "class": ".pt-24",
                    "css": "padding-top: 6rem;"
                },
                {
                    "class": ".pr-24",
                    "css": "padding-right: 6rem;"
                },
                {
                    "class": ".pb-24",
                    "css": "padding-bottom: 6rem;"
                },
                {
                    "class": ".pl-24",
                    "css": "padding-left: 6rem;"
                },
                {
                    "class": ".pt-28",
                    "css": "padding-top: 7rem;"
                },
                {
                    "class": ".pr-28",
                    "css": "padding-right: 7rem;"
                },
                {
                    "class": ".pb-28",
                    "css": "padding-bottom: 7rem;"
                },
                {
                    "class": ".pl-28",
                    "css": "padding-left: 7rem;"
                },
                {
                    "class": ".pt-32",
                    "css": "padding-top: 8rem;"
                },
                {
                    "class": ".pr-32",
                    "css": "padding-right: 8rem;"
                },
                {
                    "class": ".pb-32",
                    "css": "padding-bottom: 8rem;"
                },
                {
                    "class": ".pl-32",
                    "css": "padding-left: 8rem;"
                },
                {
                    "class": ".pt-36",
                    "css": "padding-top: 9rem;"
                },
                {
                    "class": ".pr-36",
                    "css": "padding-right: 9rem;"
                },
                {
                    "class": ".pb-36",
                    "css": "padding-bottom: 9rem;"
                },
                {
                    "class": ".pl-36",
                    "css": "padding-left: 9rem;"
                },
                {
                    "class": ".pt-40",
                    "css": "padding-top: 10rem;"
                },
                {
                    "class": ".pr-40",
                    "css": "padding-right: 10rem;"
                },
                {
                    "class": ".pb-40",
                    "css": "padding-bottom: 10rem;"
                },
                {
                    "class": ".pl-40",
                    "css": "padding-left: 10rem;"
                },
                {
                    "class": ".pt-44",
                    "css": "padding-top: 11rem;"
                },
                {
                    "class": ".pr-44",
                    "css": "padding-right: 11rem;"
                },
                {
                    "class": ".pb-44",
                    "css": "padding-bottom: 11rem;"
                },
                {
                    "class": ".pl-44",
                    "css": "padding-left: 11rem;"
                },
                {
                    "class": ".pt-48",
                    "css": "padding-top: 12rem;"
                },
                {
                    "class": ".pr-48",
                    "css": "padding-right: 12rem;"
                },
                {
                    "class": ".pb-48",
                    "css": "padding-bottom: 12rem;"
                },
                {
                    "class": ".pl-48",
                    "css": "padding-left: 12rem;"
                },
                {
                    "class": ".pt-52",
                    "css": "padding-top: 13rem;"
                },
                {
                    "class": ".pr-52",
                    "css": "padding-right: 13rem;"
                },
                {
                    "class": ".pb-52",
                    "css": "padding-bottom: 13rem;"
                },
                {
                    "class": ".pl-52",
                    "css": "padding-left: 13rem;"
                },
                {
                    "class": ".pt-56",
                    "css": "padding-top: 14rem;"
                },
                {
                    "class": ".pr-56",
                    "css": "padding-right: 14rem;"
                },
                {
                    "class": ".pb-56",
                    "css": "padding-bottom: 14rem;"
                },
                {
                    "class": ".pl-56",
                    "css": "padding-left: 14rem;"
                },
                {
                    "class": ".pt-60",
                    "css": "padding-top: 15rem;"
                },
                {
                    "class": ".pr-60",
                    "css": "padding-right: 15rem;"
                },
                {
                    "class": ".pb-60",
                    "css": "padding-bottom: 15rem;"
                },
                {
                    "class": ".pl-60",
                    "css": "padding-left: 15rem;"
                },
                {
                    "class": ".pt-64",
                    "css": "padding-top: 16rem;"
                },
                {
                    "class": ".pr-64",
                    "css": "padding-right: 16rem;"
                },
                {
                    "class": ".pb-64",
                    "css": "padding-bottom: 16rem;"
                },
                {
                    "class": ".pl-64",
                    "css": "padding-left: 16rem;"
                },
                {
                    "class": ".pt-72",
                    "css": "padding-top: 18rem;"
                },
                {
                    "class": ".pr-72",
                    "css": "padding-right: 18rem;"
                },
                {
                    "class": ".pb-72",
                    "css": "padding-bottom: 18rem;"
                },
                {
                    "class": ".pl-72",
                    "css": "padding-left: 18rem;"
                },
                {
                    "class": ".pt-80",
                    "css": "padding-top: 20rem;"
                },
                {
                    "class": ".pr-80",
                    "css": "padding-right: 20rem;"
                },
                {
                    "class": ".pb-80",
                    "css": "padding-bottom: 20rem;"
                },
                {
                    "class": ".pl-80",
                    "css": "padding-left: 20rem;"
                },
                {
                    "class": ".pt-96",
                    "css": "padding-top: 24rem;"
                },
                {
                    "class": ".pr-96",
                    "css": "padding-right: 24rem;"
                },
                {
                    "class": ".pb-96",
                    "css": "padding-bottom: 24rem;"
                },
                {
                    "class": ".pl-96",
                    "css": "padding-left: 24rem;"
                },
                {
                    "class": ".pt-px",
                    "css": "padding-top: 1px;"
                },
                {
                    "class": ".pr-px",
                    "css": "padding-right: 1px;"
                },
                {
                    "class": ".pb-px",
                    "css": "padding-bottom: 1px;"
                },
                {
                    "class": ".pl-px",
                    "css": "padding-left: 1px;"
                }
            ]
        },
        {
            "title": "Margin",
            "classList": [
                {
                    "class": ".m-0",
                    "css": "margin: 0;"
                },
                {
                    "class": ".m-0.5",
                    "css": "margin: 0.125rem;"
                },
                {
                    "class": ".m-1",
                    "css": "margin: 0.25rem;"
                },
                {
                    "class": ".m-1.5",
                    "css": "margin: 0.375rem;"
                },
                {
                    "class": ".m-2",
                    "css": "margin: 0.5rem;"
                },
                {
                    "class": ".m-2.5",
                    "css": "margin: 0.625rem;"
                },
                {
                    "class": ".m-3",
                    "css": "margin: 0.75rem;"
                },
                {
                    "class": ".m-3.5",
                    "css": "margin: 0.875rem;"
                },
                {
                    "class": ".m-4",
                    "css": "margin: 1rem;"
                },
                {
                    "class": ".m-5",
                    "css": "margin: 1.25rem;"
                },
                {
                    "class": ".m-6",
                    "css": "margin: 1.5rem;"
                },
                {
                    "class": ".m-8",
                    "css": "margin: 2rem;"
                },
                {
                    "class": ".m-10",
                    "css": "margin: 2.5rem;"
                },
                {
                    "class": ".m-11",
                    "css": "margin: 2.75rem;"
                },
                {
                    "class": ".m-12",
                    "css": "margin: 3rem;"
                },
                {
                    "class": ".m-14",
                    "css": "margin: 3.5rem;"
                },
                {
                    "class": ".m-16",
                    "css": "margin: 4rem;"
                },
                {
                    "class": ".m-20",
                    "css": "margin: 5rem;"
                },
                {
                    "class": ".m-24",
                    "css": "margin: 6rem;"
                },
                {
                    "class": ".m-28",
                    "css": "margin: 7rem;"
                },
                {
                    "class": ".m-32",
                    "css": "margin: 8rem;"
                },
                {
                    "class": ".m-36",
                    "css": "margin: 9rem;"
                },
                {
                    "class": ".m-40",
                    "css": "margin: 10rem;"
                },
                {
                    "class": ".m-44",
                    "css": "margin: 11rem;"
                },
                {
                    "class": ".m-48",
                    "css": "margin: 12rem;"
                },
                {
                    "class": ".m-52",
                    "css": "margin: 13rem;"
                },
                {
                    "class": ".m-56",
                    "css": "margin: 14rem;"
                },
                {
                    "class": ".m-64",
                    "css": "margin: 16rem;"
                },
                {
                    "class": ".m-72",
                    "css": "margin: 18rem;"
                },
                {
                    "class": ".m-80",
                    "css": "margin: 20rem;"
                },
                {
                    "class": ".m-96",
                    "css": "margin: 24rem;"
                },
                {
                    "class": ".m-px",
                    "css": "margin: 1px;"
                },
                {
                    "class": ".my-0",
                    "css": "margin-top: 0; margin-bottom: 0;"
                },
                {
                    "class": ".mx-0",
                    "css": "margin-left: 0; margin-right: 0;"
                },
                {
                    "class": ".my-0.5",
                    "css": "margin-top: 0.125rem; margin-bottom: 0.125rem;"
                },
                {
                    "class": ".mx-0.5",
                    "css": "margin-left: 0.125rem; margin-right: 0.125rem;"
                },
                {
                    "class": ".my-1",
                    "css": "margin-top: 0.25rem; margin-bottom: 0.25rem;"
                },
                {
                    "class": ".mx-1",
                    "css": "margin-left: 0.25rem; margin-right: 0.25rem;"
                },
                {
                    "class": ".my-1.5",
                    "css": "margin-top: 0.375rem; margin-bottom: 0.375rem;"
                },
                {
                    "class": ".mx-1.5",
                    "css": "margin-left: 0.375rem; margin-right: 0.375rem;"
                },
                {
                    "class": ".my-2",
                    "css": "margin-top: 0.5rem; margin-bottom: 0.5rem;"
                },
                {
                    "class": ".mx-2",
                    "css": "margin-left: 0.5rem; margin-right: 0.5rem;"
                },
                {
                    "class": ".my-2.5",
                    "css": "margin-top: 0.625rem; margin-bottom: 0.625rem;"
                },
                {
                    "class": ".mx-2.5",
                    "css": "margin-left: 0.625rem; margin-right: 0.625rem;"
                },
                {
                    "class": ".my-3",
                    "css": "margin-top: 0.75rem; margin-bottom: 0.75rem;"
                },
                {
                    "class": ".mx-3",
                    "css": "margin-left: 0.75rem; margin-right: 0.75rem;"
                },
                {
                    "class": ".my-3.5",
                    "css": "margin-top: 0.875rem; margin-bottom: 0.875rem;"
                },
                {
                    "class": ".mx-3.5",
                    "css": "margin-left: 0.875rem; margin-right: 0.875rem;"
                },
                {
                    "class": ".my-4",
                    "css": "margin-top: 1rem; margin-bottom: 1rem;"
                },
                {
                    "class": ".mx-4",
                    "css": "margin-left: 1rem; margin-right: 1rem;"
                },
                {
                    "class": ".my-5",
                    "css": "margin-top: 1.25rem; margin-bottom: 1.25rem;"
                },
                {
                    "class": ".mx-5",
                    "css": "margin-left: 1.25rem; margin-right: 1.25rem;"
                },
                {
                    "class": ".my-6",
                    "css": "margin-top: 1.5rem; margin-bottom: 1.5rem;"
                },
                {
                    "class": ".mx-6",
                    "css": "margin-left: 1.5rem; margin-right: 1.5rem;"
                },
                {
                    "class": ".my-7",
                    "css": "margin-top: 1.75rem; margin-bottom: 1.75rem;"
                },
                {
                    "class": ".mx-7",
                    "css": "margin-left: 1.75rem; margin-right: 1.75rem;"
                },
                {
                    "class": ".my-8",
                    "css": "margin-top: 2rem; margin-bottom: 2rem;"
                },
                {
                    "class": ".mx-8",
                    "css": "margin-left: 2rem; margin-right: 2rem;"
                },
                {
                    "class": ".my-9",
                    "css": "margin-top: 2.25rem; margin-bottom: 2.25rem;"
                },
                {
                    "class": ".mx-9",
                    "css": "margin-left: 2.25rem; margin-right: 2.25rem;"
                },
                {
                    "class": ".my-10",
                    "css": "margin-top: 2.5rem; margin-bottom: 2.5rem;"
                },
                {
                    "class": ".mx-10",
                    "css": "margin-left: 2.5rem; margin-right: 2.5rem;"
                },
                {
                    "class": ".my-11",
                    "css": "margin-top: 2.75rem; margin-bottom: 2.75rem;"
                },
                {
                    "class": ".mx-11",
                    "css": "margin-left: 2.75rem; margin-right: 2.75rem;"
                },
                {
                    "class": ".my-12",
                    "css": "margin-top: 3rem; margin-bottom: 3rem;"
                },
                {
                    "class": ".mx-12",
                    "css": "margin-left: 3rem; margin-right: 3rem;"
                },
                {
                    "class": ".my-14",
                    "css": "margin-top: 3.5rem; margin-bottom: 3.5rem;"
                },
                {
                    "class": ".mx-14",
                    "css": "margin-left: 3.5rem; margin-right: 3.5rem;"
                },
                {
                    "class": ".my-16",
                    "css": "margin-top: 4rem; margin-bottom: 4rem;"
                },
                {
                    "class": ".mx-16",
                    "css": "margin-left: 4rem; margin-right: 4rem;"
                },
                {
                    "class": ".my-20",
                    "css": "margin-top: 5rem; margin-bottom: 5rem;"
                },
                {
                    "class": ".mx-20",
                    "css": "margin-left: 5rem; margin-right: 5rem;"
                },
                {
                    "class": ".my-24",
                    "css": "margin-top: 6rem; margin-bottom: 6rem;"
                },
                {
                    "class": ".mx-24",
                    "css": "margin-left: 6rem; margin-right: 6rem;"
                },
                {
                    "class": ".my-28",
                    "css": "margin-top: 7rem; margin-bottom: 7rem;"
                },
                {
                    "class": ".mx-28",
                    "css": "margin-left: 7rem; margin-right: 7rem;"
                },
                {
                    "class": ".my-32",
                    "css": "margin-top: 8rem; margin-bottom: 8rem;"
                },
                {
                    "class": ".mx-32",
                    "css": "margin-left: 8rem; margin-right: 8rem;"
                },
                {
                    "class": ".my-36",
                    "css": "margin-top: 9rem; margin-bottom: 9rem;"
                },
                {
                    "class": ".mx-36",
                    "css": "margin-left: 9rem; margin-right: 9rem;"
                },
                {
                    "class": ".my-40",
                    "css": "margin-top: 10rem; margin-bottom: 10rem;"
                },
                {
                    "class": ".mx-40",
                    "css": "margin-left: 10rem; margin-right: 10rem;"
                },
                {
                    "class": ".my-44",
                    "css": "margin-top: 11rem; margin-bottom: 11rem;"
                },
                {
                    "class": ".mx-44",
                    "css": "margin-left: 11rem; margin-right: 11rem;"
                },
                {
                    "class": ".my-48",
                    "css": "margin-top: 12rem; margin-bottom: 12rem;"
                },
                {
                    "class": ".mx-48",
                    "css": "margin-left: 12rem; margin-right: 12rem;"
                },
                {
                    "class": ".my-52",
                    "css": "margin-top: 13rem; margin-bottom: 13rem;"
                },
                {
                    "class": ".mx-52",
                    "css": "margin-left: 13rem; margin-right: 13rem;"
                },
                {
                    "class": ".my-56",
                    "css": "margin-top: 14rem; margin-bottom: 14rem;"
                },
                {
                    "class": ".mx-56",
                    "css": "margin-left: 14rem; margin-right: 14rem;"
                },
                {
                    "class": ".my-60",
                    "css": "margin-top: 15rem; margin-bottom: 15rem;"
                },
                {
                    "class": ".mx-60",
                    "css": "margin-left: 15rem; margin-right: 15rem;"
                },
                {
                    "class": ".my-64",
                    "css": "margin-top: 16rem; margin-bottom: 16rem;"
                },
                {
                    "class": ".mx-64",
                    "css": "margin-left: 16rem; margin-right: 16rem;"
                },
                {
                    "class": ".my-70",
                    "css": "margin-top: 18rem; margin-bottom: 18rem;"
                },
                {
                    "class": ".mx-70",
                    "css": "margin-left: 18rem; margin-right: 18rem;"
                },
                {
                    "class": ".my-80",
                    "css": "margin-top: 20rem; margin-bottom: 20rem;"
                },
                {
                    "class": ".mx-80",
                    "css": "margin-left: 20rem; margin-right: 20rem;"
                },
                {
                    "class": ".my-96",
                    "css": "margin-top: 24rem; margin-bottom: 24rem;"
                },
                {
                    "class": ".mx-96",
                    "css": "margin-left: 24rem; margin-right: 24rem;"
                },
                {
                    "class": ".my-px",
                    "css": "margin-top: 1px; margin-bottom: 1px;"
                },
                {
                    "class": ".mx-px",
                    "css": "margin-left: 1px; margin-right: 1px;"
                },
                {
                    "class": ".mt-0",
                    "css": "margin-top: 0;"
                },
                {
                    "class": ".mr-0",
                    "css": "margin-right: 0;"
                },
                {
                    "class": ".mb-0",
                    "css": "margin-bottom: 0;"
                },
                {
                    "class": ".ml-0",
                    "css": "margin-left: 0;"
                },
                {
                    "class": ".mt-0.5",
                    "css": "margin-top: 0.125rem;"
                },
                {
                    "class": ".mr-0.5",
                    "css": "margin-right: 0.125rem;"
                },
                {
                    "class": ".mb-0.5",
                    "css": "margin-bottom: 0.125rem;"
                },
                {
                    "class": ".ml-0.5",
                    "css": "margin-left: 0.125rem;"
                },
                {
                    "class": ".mt-1",
                    "css": "margin-top: 0.25rem;"
                },
                {
                    "class": ".mr-1",
                    "css": "margin-right: 0.25rem;"
                },
                {
                    "class": ".mb-1",
                    "css": "margin-bottom: 0.25rem;"
                },
                {
                    "class": ".ml-1",
                    "css": "margin-left: 0.25rem;"
                },
                {
                    "class": ".mt-1.5",
                    "css": "margin-top: 0.375rem;"
                },
                {
                    "class": ".mr-1.5",
                    "css": "margin-right: 0.375rem;"
                },
                {
                    "class": ".mb-1.5",
                    "css": "margin-bottom: 0.375rem;"
                },
                {
                    "class": ".ml-1.5",
                    "css": "margin-left: 0.375rem;"
                },
                {
                    "class": ".mt-2",
                    "css": "margin-top: 0.5rem;"
                },
                {
                    "class": ".mr-2",
                    "css": "margin-right: 0.5rem;"
                },
                {
                    "class": ".mb-2",
                    "css": "margin-bottom: 0.5rem;"
                },
                {
                    "class": ".ml-2",
                    "css": "margin-left: 0.5rem;"
                },
                {
                    "class": ".mt-2.5",
                    "css": "margin-top: 0.625rem;"
                },
                {
                    "class": ".mr-2.5",
                    "css": "margin-right: 0.625rem;"
                },
                {
                    "class": ".mb-2.5",
                    "css": "margin-bottom: 0.625rem;"
                },
                {
                    "class": ".ml-2.5",
                    "css": "margin-left: 0.625rem;"
                },
                {
                    "class": ".mt-3",
                    "css": "margin-top: 0.75rem;"
                },
                {
                    "class": ".mr-3",
                    "css": "margin-right: 0.75rem;"
                },
                {
                    "class": ".mb-3",
                    "css": "margin-bottom: 0.75rem;"
                },
                {
                    "class": ".ml-3",
                    "css": "margin-left: 0.75rem;"
                },
                {
                    "class": ".mt-3.5",
                    "css": "margin-top: 0.875rem;"
                },
                {
                    "class": ".mr-3.5",
                    "css": "margin-right: 0.875rem;"
                },
                {
                    "class": ".mb-3.5",
                    "css": "margin-bottom: 0.875rem;"
                },
                {
                    "class": ".ml-3.5",
                    "css": "margin-left: 0.875rem;"
                },
                {
                    "class": ".mt-4",
                    "css": "margin-top: 1rem;"
                },
                {
                    "class": ".mr-4",
                    "css": "margin-right: 1rem;"
                },
                {
                    "class": ".mb-4",
                    "css": "margin-bottom: 1rem;"
                },
                {
                    "class": ".ml-4",
                    "css": "margin-left: 1rem;"
                },
                {
                    "class": ".mt-5",
                    "css": "margin-top: 1.25rem;"
                },
                {
                    "class": ".mr-5",
                    "css": "margin-right: 1.25rem;"
                },
                {
                    "class": ".mb-5",
                    "css": "margin-bottom: 1.25rem;"
                },
                {
                    "class": ".ml-5",
                    "css": "margin-left: 1.25rem;"
                },
                {
                    "class": ".mt-6",
                    "css": "margin-top: 1.5rem;"
                },
                {
                    "class": ".mr-6",
                    "css": "margin-right: 1.5rem;"
                },
                {
                    "class": ".mb-6",
                    "css": "margin-bottom: 1.5rem;"
                },
                {
                    "class": ".ml-6",
                    "css": "margin-left: 1.5rem;"
                },
                {
                    "class": ".mt-7",
                    "css": "margin-top: 1.75rem;"
                },
                {
                    "class": ".mr-7",
                    "css": "margin-right: 1.75rem;"
                },
                {
                    "class": ".mb-7",
                    "css": "margin-bottom: 1.75rem;"
                },
                {
                    "class": ".ml-7",
                    "css": "margin-left: 1.75rem;"
                },
                {
                    "class": ".mt-8",
                    "css": "margin-top: 2rem;"
                },
                {
                    "class": ".mr-8",
                    "css": "margin-right: 2rem;"
                },
                {
                    "class": ".mb-8",
                    "css": "margin-bottom: 2rem;"
                },
                {
                    "class": ".ml-8",
                    "css": "margin-left: 2rem;"
                },
                {
                    "class": ".mt-9",
                    "css": "margin-top: 2.25rem;"
                },
                {
                    "class": ".mr-9",
                    "css": "margin-right: 2.25rem;"
                },
                {
                    "class": ".mb-9",
                    "css": "margin-bottom: 2.25rem;"
                },
                {
                    "class": ".ml-9",
                    "css": "margin-left: 2.25rem;"
                },
                {
                    "class": ".mt-10",
                    "css": "margin-top: 2.5rem;"
                },
                {
                    "class": ".mr-10",
                    "css": "margin-right: 2.5rem;"
                },
                {
                    "class": ".mb-10",
                    "css": "margin-bottom: 2.5rem;"
                },
                {
                    "class": ".ml-10",
                    "css": "margin-left: 2.5rem;"
                },
                {
                    "class": ".mt-11",
                    "css": "margin-top: 2.75rem;"
                },
                {
                    "class": ".mr-11",
                    "css": "margin-right: 2.75rem;"
                },
                {
                    "class": ".mb-11",
                    "css": "margin-bottom: 2.75rem;"
                },
                {
                    "class": ".ml-11",
                    "css": "margin-left: 2.75rem;"
                },
                {
                    "class": ".mt-12",
                    "css": "margin-top: 3rem;"
                },
                {
                    "class": ".mr-12",
                    "css": "margin-right: 3rem;"
                },
                {
                    "class": ".mb-12",
                    "css": "margin-bottom: 3rem;"
                },
                {
                    "class": ".ml-12",
                    "css": "margin-left: 3rem;"
                },
                {
                    "class": ".mt-14",
                    "css": "margin-top: 3.5rem;"
                },
                {
                    "class": ".mr-14",
                    "css": "margin-right: 3.5rem;"
                },
                {
                    "class": ".mb-14",
                    "css": "margin-bottom: 3.5rem;"
                },
                {
                    "class": ".ml-14",
                    "css": "margin-left: 3.5rem;"
                },
                {
                    "class": ".mt-16",
                    "css": "margin-top: 4rem;"
                },
                {
                    "class": ".mr-16",
                    "css": "margin-right: 4rem;"
                },
                {
                    "class": ".mb-16",
                    "css": "margin-bottom: 4rem;"
                },
                {
                    "class": ".ml-16",
                    "css": "margin-left: 4rem;"
                },
                {
                    "class": ".mt-20",
                    "css": "margin-top: 5rem;"
                },
                {
                    "class": ".mr-20",
                    "css": "margin-right: 5rem;"
                },
                {
                    "class": ".mb-20",
                    "css": "margin-bottom: 5rem;"
                },
                {
                    "class": ".ml-20",
                    "css": "margin-left: 5rem;"
                },
                {
                    "class": ".mt-24",
                    "css": "margin-top: 6rem;"
                },
                {
                    "class": ".mr-24",
                    "css": "margin-right: 6rem;"
                },
                {
                    "class": ".mb-24",
                    "css": "margin-bottom: 6rem;"
                },
                {
                    "class": ".ml-24",
                    "css": "margin-left: 6rem;"
                },
                {
                    "class": ".mt-28",
                    "css": "margin-top: 7rem;"
                },
                {
                    "class": ".mr-28",
                    "css": "margin-right: 7rem;"
                },
                {
                    "class": ".mb-28",
                    "css": "margin-bottom: 7rem;"
                },
                {
                    "class": ".ml-28",
                    "css": "margin-left: 7rem;"
                },
                {
                    "class": ".mt-32",
                    "css": "margin-top: 8rem;"
                },
                {
                    "class": ".mr-32",
                    "css": "margin-right: 8rem;"
                },
                {
                    "class": ".mb-32",
                    "css": "margin-bottom: 8rem;"
                },
                {
                    "class": ".ml-32",
                    "css": "margin-left: 8rem;"
                },
                {
                    "class": ".mt-36",
                    "css": "margin-top: 9rem;"
                },
                {
                    "class": ".mr-36",
                    "css": "margin-right: 9rem;"
                },
                {
                    "class": ".mb-36",
                    "css": "margin-bottom: 9rem;"
                },
                {
                    "class": ".ml-36",
                    "css": "margin-left: 9rem;"
                },
                {
                    "class": ".mt-40",
                    "css": "margin-top: 10rem;"
                },
                {
                    "class": ".mr-40",
                    "css": "margin-right: 10rem;"
                },
                {
                    "class": ".mb-40",
                    "css": "margin-bottom: 10rem;"
                },
                {
                    "class": ".ml-40",
                    "css": "margin-left: 10rem;"
                },
                {
                    "class": ".mt-44",
                    "css": "margin-top: 11rem;"
                },
                {
                    "class": ".mr-44",
                    "css": "margin-right: 11rem;"
                },
                {
                    "class": ".mb-44",
                    "css": "margin-bottom: 11rem;"
                },
                {
                    "class": ".ml-44",
                    "css": "margin-left: 11rem;"
                },
                {
                    "class": ".mt-48",
                    "css": "margin-top: 12rem;"
                },
                {
                    "class": ".mr-48",
                    "css": "margin-right: 12rem;"
                },
                {
                    "class": ".mb-48",
                    "css": "margin-bottom: 12rem;"
                },
                {
                    "class": ".ml-48",
                    "css": "margin-left: 12rem;"
                },
                {
                    "class": ".mt-52",
                    "css": "margin-top: 13rem;"
                },
                {
                    "class": ".mr-52",
                    "css": "margin-right: 13rem;"
                },
                {
                    "class": ".mb-52",
                    "css": "margin-bottom: 13rem;"
                },
                {
                    "class": ".ml-52",
                    "css": "margin-left: 13rem;"
                },
                {
                    "class": ".mt-56",
                    "css": "margin-top: 14rem;"
                },
                {
                    "class": ".mr-56",
                    "css": "margin-right: 14rem;"
                },
                {
                    "class": ".mb-56",
                    "css": "margin-bottom: 14rem;"
                },
                {
                    "class": ".ml-56",
                    "css": "margin-left: 14rem;"
                },
                {
                    "class": ".mt-60",
                    "css": "margin-top: 15rem;"
                },
                {
                    "class": ".mr-60",
                    "css": "margin-right: 15rem;"
                },
                {
                    "class": ".mb-60",
                    "css": "margin-bottom: 15rem;"
                },
                {
                    "class": ".ml-60",
                    "css": "margin-left: 15rem;"
                },
                {
                    "class": ".mt-64",
                    "css": "margin-top: 16rem;"
                },
                {
                    "class": ".mr-64",
                    "css": "margin-right: 16rem;"
                },
                {
                    "class": ".mb-64",
                    "css": "margin-bottom: 16rem;"
                },
                {
                    "class": ".ml-64",
                    "css": "margin-left: 16rem;"
                },
                {
                    "class": ".mt-72",
                    "css": "margin-top: 18rem;"
                },
                {
                    "class": ".mr-72",
                    "css": "margin-right: 18rem;"
                },
                {
                    "class": ".mb-72",
                    "css": "margin-bottom: 18rem;"
                },
                {
                    "class": ".ml-72",
                    "css": "margin-left: 18rem;"
                },
                {
                    "class": ".mt-80",
                    "css": "margin-top: 20rem;"
                },
                {
                    "class": ".mr-80",
                    "css": "margin-right: 20rem;"
                },
                {
                    "class": ".mb-80",
                    "css": "margin-bottom: 20rem;"
                },
                {
                    "class": ".ml-80",
                    "css": "margin-left: 20rem;"
                },
                {
                    "class": ".mt-96",
                    "css": "margin-top: 24rem;"
                },
                {
                    "class": ".mr-96",
                    "css": "margin-right: 24rem;"
                },
                {
                    "class": ".mb-96",
                    "css": "margin-bottom: 24rem;"
                },
                {
                    "class": ".ml-96",
                    "css": "margin-left: 24rem;"
                },
                {
                    "class": ".mt-px",
                    "css": "margin-top: 1px;"
                },
                {
                    "class": ".mr-px",
                    "css": "margin-right: 1px;"
                },
                {
                    "class": ".mb-px",
                    "css": "margin-bottom: 1px;"
                },
                {
                    "class": ".ml-px",
                    "css": "margin-left: 1px;"
                },
                {
                    "class": ".-m-0",
                    "css": "margin: 0;"
                },
                {
                    "class": ".-m-0.5",
                    "css": "margin: -0.125rem;"
                },
                {
                    "class": ".-m-1",
                    "css": "margin: -0.25rem;"
                },
                {
                    "class": ".-m-1.5",
                    "css": "margin: -0.375rem;"
                },
                {
                    "class": ".-m-2",
                    "css": "margin: -0.5rem;"
                },
                {
                    "class": ".-m-2.5",
                    "css": "margin: -0.625rem;"
                },
                {
                    "class": ".-m-3",
                    "css": "margin: -0.75rem;"
                },
                {
                    "class": ".-m-3.5",
                    "css": "margin: -0.875rem;"
                },
                {
                    "class": ".-m-4",
                    "css": "margin: -1rem;"
                },
                {
                    "class": ".-m-5",
                    "css": "margin: -1.25rem;"
                },
                {
                    "class": ".-m-6",
                    "css": "margin: -1.5rem;"
                },
                {
                    "class": ".-m-8",
                    "css": "margin: -2rem;"
                },
                {
                    "class": ".-m-10",
                    "css": "margin: -2.5rem;"
                },
                {
                    "class": ".-m-11",
                    "css": "margin: -2.75rem;"
                },
                {
                    "class": ".-m-12",
                    "css": "margin: -3rem;"
                },
                {
                    "class": ".-m-14",
                    "css": "margin: -3.5rem;"
                },
                {
                    "class": ".-m-16",
                    "css": "margin: -4rem;"
                },
                {
                    "class": ".-m-20",
                    "css": "margin: -5rem;"
                },
                {
                    "class": ".-m-24",
                    "css": "margin: -6rem;"
                },
                {
                    "class": ".-m-28",
                    "css": "margin: -7rem;"
                },
                {
                    "class": ".-m-32",
                    "css": "margin: -8rem;"
                },
                {
                    "class": ".-m-36",
                    "css": "margin: -9rem;"
                },
                {
                    "class": ".-m-40",
                    "css": "margin: -10rem;"
                },
                {
                    "class": ".-m-44",
                    "css": "margin: -11rem;"
                },
                {
                    "class": ".-m-48",
                    "css": "margin: -12rem;"
                },
                {
                    "class": ".-m-52",
                    "css": "margin: -13rem;"
                },
                {
                    "class": ".-m-56",
                    "css": "margin: -14rem;"
                },
                {
                    "class": ".-m-64",
                    "css": "margin: -16rem;"
                },
                {
                    "class": ".-m-72",
                    "css": "margin: -18rem;"
                },
                {
                    "class": ".-m-80",
                    "css": "margin: -20rem;"
                },
                {
                    "class": ".-m-96",
                    "css": "margin: -24rem;"
                },
                {
                    "class": ".-m-px",
                    "css": "margin: -1px;"
                },
                {
                    "class": ".-my-0",
                    "css": "margin-top: 0; margin-bottom: 0;"
                },
                {
                    "class": ".-mx-0",
                    "css": "margin-left: 0; margin-right: 0;"
                },
                {
                    "class": ".-my-0.5",
                    "css": "margin-top: -0.125rem; margin-bottom: -0.125rem;"
                },
                {
                    "class": ".-mx-0.5",
                    "css": "margin-left: -0.125rem; margin-right: -0.125rem;"
                },
                {
                    "class": ".-my-1",
                    "css": "margin-top: -0.25rem; margin-bottom: -0.25rem;"
                },
                {
                    "class": ".-mx-1",
                    "css": "margin-left: -0.25rem; margin-right: -0.25rem;"
                },
                {
                    "class": ".-my-1.5",
                    "css": "margin-top: -0.375rem; margin-bottom: -0.375rem;"
                },
                {
                    "class": ".-mx-1.5",
                    "css": "margin-left: -0.375rem; margin-right: -0.375rem;"
                },
                {
                    "class": ".-my-2",
                    "css": "margin-top: -0.5rem; margin-bottom: -0.5rem;"
                },
                {
                    "class": ".-mx-2",
                    "css": "margin-left: -0.5rem; margin-right: -0.5rem;"
                },
                {
                    "class": ".-my-2.5",
                    "css": "margin-top: -0.625rem; margin-bottom: -0.625rem;"
                },
                {
                    "class": ".-mx-2.5",
                    "css": "margin-left: -0.625rem; margin-right: -0.625rem;"
                },
                {
                    "class": ".-my-3",
                    "css": "margin-top: -0.75rem; margin-bottom: -0.75rem;"
                },
                {
                    "class": ".-mx-3",
                    "css": "margin-left: -0.75rem; margin-right: -0.75rem;"
                },
                {
                    "class": ".-my-3.5",
                    "css": "margin-top: -0.875rem; margin-bottom: -0.875rem;"
                },
                {
                    "class": ".-mx-3.5",
                    "css": "margin-left: -0.875rem; margin-right: -0.875rem;"
                },
                {
                    "class": ".-my-4",
                    "css": "margin-top: -1rem; margin-bottom: -1rem;"
                },
                {
                    "class": ".-mx-4",
                    "css": "margin-left: -1rem; margin-right: -1rem;"
                },
                {
                    "class": ".-my-5",
                    "css": "margin-top: -1.25rem; margin-bottom: -1.25rem;"
                },
                {
                    "class": ".-mx-5",
                    "css": "margin-left: -1.25rem; margin-right: -1.25rem;"
                },
                {
                    "class": ".-my-6",
                    "css": "margin-top: -1.5rem; margin-bottom: -1.5rem;"
                },
                {
                    "class": ".-mx-6",
                    "css": "margin-left: -1.5rem; margin-right: -1.5rem;"
                },
                {
                    "class": ".-my-7",
                    "css": "margin-top: 1.75rem; margin-bottom: 1.75rem;"
                },
                {
                    "class": ".-mx-7",
                    "css": "margin-left: 1.75rem; margin-right: 1.75rem;"
                },
                {
                    "class": ".-my-8",
                    "css": "margin-top: -2rem; margin-bottom: -2rem;"
                },
                {
                    "class": ".-mx-8",
                    "css": "margin-left: -2rem; margin-right: -2rem;"
                },
                {
                    "class": ".-my-9",
                    "css": "margin-top: 2.25rem; margin-bottom: 2.25rem;"
                },
                {
                    "class": ".-mx-9",
                    "css": "margin-left: 2.25rem; margin-right: 2.25rem;"
                },
                {
                    "class": ".-my-10",
                    "css": "margin-top: -2.5rem; margin-bottom: -2.5rem;"
                },
                {
                    "class": ".-mx-10",
                    "css": "margin-left: -2.5rem; margin-right: -2.5rem;"
                },
                {
                    "class": ".-my-11",
                    "css": "margin-top: -2.75rem; margin-bottom: -2.75rem;"
                },
                {
                    "class": ".-mx-11",
                    "css": "margin-left: -2.75rem; margin-right: -2.75rem;"
                },
                {
                    "class": ".-my-12",
                    "css": "margin-top: -3rem; margin-bottom: -3rem;"
                },
                {
                    "class": ".-mx-12",
                    "css": "margin-left: -3rem; margin-right: -3rem;"
                },
                {
                    "class": ".-my-14",
                    "css": "margin-top: -3.5rem; margin-bottom: -3.5rem;"
                },
                {
                    "class": ".-mx-14",
                    "css": "margin-left: -3.5rem; margin-right: -3.5rem;"
                },
                {
                    "class": ".-my-16",
                    "css": "margin-top: -4rem; margin-bottom: -4rem;"
                },
                {
                    "class": ".-mx-16",
                    "css": "margin-left: -4rem; margin-right: -4rem;"
                },
                {
                    "class": ".-my-20",
                    "css": "margin-top: -5rem; margin-bottom: -5rem;"
                },
                {
                    "class": ".-mx-20",
                    "css": "margin-left: -5rem; margin-right: -5rem;"
                },
                {
                    "class": ".-my-24",
                    "css": "margin-top: -6rem; margin-bottom: -6rem;"
                },
                {
                    "class": ".-mx-24",
                    "css": "margin-left: -6rem; margin-right: -6rem;"
                },
                {
                    "class": ".-my-28",
                    "css": "margin-top: -7rem; margin-bottom: -7rem;"
                },
                {
                    "class": ".-mx-28",
                    "css": "margin-left: -7rem; margin-right: -7rem;"
                },
                {
                    "class": ".-my-32",
                    "css": "margin-top: -8rem; margin-bottom: -8rem;"
                },
                {
                    "class": ".-mx-32",
                    "css": "margin-left: -8rem; margin-right: -8rem;"
                },
                {
                    "class": ".-my-36",
                    "css": "margin-top: -9rem; margin-bottom: -9rem;"
                },
                {
                    "class": ".-mx-36",
                    "css": "margin-left: -9rem; margin-right: -9rem;"
                },
                {
                    "class": ".-my-40",
                    "css": "margin-top: -10rem; margin-bottom: -10rem;"
                },
                {
                    "class": ".-mx-40",
                    "css": "margin-left: -10rem; margin-right: -10rem;"
                },
                {
                    "class": ".-my-44",
                    "css": "margin-top: -11rem; margin-bottom: -11rem;"
                },
                {
                    "class": ".-mx-44",
                    "css": "margin-left: -11rem; margin-right: -11rem;"
                },
                {
                    "class": ".-my-48",
                    "css": "margin-top: -12rem; margin-bottom: -12rem;"
                },
                {
                    "class": ".-mx-48",
                    "css": "margin-left: -12rem; margin-right: -12rem;"
                },
                {
                    "class": ".-my-52",
                    "css": "margin-top: -13rem; margin-bottom: -13rem;"
                },
                {
                    "class": ".-mx-52",
                    "css": "margin-left: -13rem; margin-right: -13rem;"
                },
                {
                    "class": ".-my-56",
                    "css": "margin-top: -14rem; margin-bottom: -14rem;"
                },
                {
                    "class": ".-mx-56",
                    "css": "margin-left: -14rem; margin-right: -14rem;"
                },
                {
                    "class": ".-my-60",
                    "css": "margin-top: 15rem; margin-bottom: 15rem;"
                },
                {
                    "class": ".-mx-60",
                    "css": "margin-left: 15rem; margin-right: 15rem;"
                },
                {
                    "class": ".-my-64",
                    "css": "margin-top: -16rem; margin-bottom: -16rem;"
                },
                {
                    "class": ".-mx-64",
                    "css": "margin-left: -16rem; margin-right: -16rem;"
                },
                {
                    "class": ".-my-70",
                    "css": "margin-top: -18rem; margin-bottom: -18rem;"
                },
                {
                    "class": ".-mx-70",
                    "css": "margin-left: -18rem; margin-right: -18rem;"
                },
                {
                    "class": ".-my-80",
                    "css": "margin-top: -20rem; margin-bottom: -20rem;"
                },
                {
                    "class": ".-mx-80",
                    "css": "margin-left: -20rem; margin-right: -20rem;"
                },
                {
                    "class": ".-my-96",
                    "css": "margin-top: -24rem; margin-bottom: -24rem;"
                },
                {
                    "class": ".-mx-96",
                    "css": "margin-left: -24rem; margin-right: -24rem;"
                },
                {
                    "class": ".-my-px",
                    "css": "margin-top: -1px; margin-bottom: -1px;"
                },
                {
                    "class": ".-mx-px",
                    "css": "margin-left: -1px; margin-right: -1px;"
                },
                {
                    "class": ".-mt-0",
                    "css": "margin-top: 0;"
                },
                {
                    "class": ".-mr-0",
                    "css": "margin-right: 0;"
                },
                {
                    "class": ".-mb-0",
                    "css": "margin-bottom: 0;"
                },
                {
                    "class": ".-ml-0",
                    "css": "margin-left: 0;"
                },
                {
                    "class": ".-mt-0.5",
                    "css": "margin-top: -0.125rem;"
                },
                {
                    "class": ".-mr-0.5",
                    "css": "margin-right: -0.125rem;"
                },
                {
                    "class": ".-mb-0.5",
                    "css": "margin-bottom: -0.125rem;"
                },
                {
                    "class": ".-ml-0.5",
                    "css": "margin-left: -0.125rem;"
                },
                {
                    "class": ".-mt-1",
                    "css": "margin-top: -0.25rem;"
                },
                {
                    "class": ".-mr-1",
                    "css": "margin-right: -0.25rem;"
                },
                {
                    "class": ".-mb-1",
                    "css": "margin-bottom: -0.25rem;"
                },
                {
                    "class": ".-ml-1",
                    "css": "margin-left: -0.25rem;"
                },
                {
                    "class": ".-mt-1.5",
                    "css": "margin-top: -0.375rem;"
                },
                {
                    "class": ".-mr-1.5",
                    "css": "margin-right: -0.375rem;"
                },
                {
                    "class": ".-mb-1.5",
                    "css": "margin-bottom: -0.375rem;"
                },
                {
                    "class": ".-ml-1.5",
                    "css": "margin-left: -0.375rem;"
                },
                {
                    "class": ".-mt-2",
                    "css": "margin-top: -0.5rem;"
                },
                {
                    "class": ".-mr-2",
                    "css": "margin-right: -0.5rem;"
                },
                {
                    "class": ".-mb-2",
                    "css": "margin-bottom: -0.5rem;"
                },
                {
                    "class": ".-ml-2",
                    "css": "margin-left: -0.5rem;"
                },
                {
                    "class": ".-mt-2.5",
                    "css": "margin-top: -0.625rem;"
                },
                {
                    "class": ".-mr-2.5",
                    "css": "margin-right: -0.625rem;"
                },
                {
                    "class": ".-mb-2.5",
                    "css": "margin-bottom: -0.625rem;"
                },
                {
                    "class": ".-ml-2.5",
                    "css": "margin-left: -0.625rem;"
                },
                {
                    "class": ".-mt-3",
                    "css": "margin-top: -0.75rem;"
                },
                {
                    "class": ".-mr-3",
                    "css": "margin-right: -0.75rem;"
                },
                {
                    "class": ".-mb-3",
                    "css": "margin-bottom: -0.75rem;"
                },
                {
                    "class": ".-ml-3",
                    "css": "margin-left: -0.75rem;"
                },
                {
                    "class": ".-mt-3.5",
                    "css": "margin-top: -0.875rem;"
                },
                {
                    "class": ".-mr-3.5",
                    "css": "margin-right: -0.875rem;"
                },
                {
                    "class": ".-mb-3.5",
                    "css": "margin-bottom: -0.875rem;"
                },
                {
                    "class": ".-ml-3.5",
                    "css": "margin-left: -0.875rem;"
                },
                {
                    "class": ".-mt-4",
                    "css": "margin-top: -1rem;"
                },
                {
                    "class": ".-mr-4",
                    "css": "margin-right: -1rem;"
                },
                {
                    "class": ".-mb-4",
                    "css": "margin-bottom: -1rem;"
                },
                {
                    "class": ".-ml-4",
                    "css": "margin-left: -1rem;"
                },
                {
                    "class": ".-mt-5",
                    "css": "margin-top: -1.25rem;"
                },
                {
                    "class": ".-mr-5",
                    "css": "margin-right: -1.25rem;"
                },
                {
                    "class": ".-mb-5",
                    "css": "margin-bottom: -1.25rem;"
                },
                {
                    "class": ".-ml-5",
                    "css": "margin-left: -1.25rem;"
                },
                {
                    "class": ".-mt-6",
                    "css": "margin-top: -1.5rem;"
                },
                {
                    "class": ".-mr-6",
                    "css": "margin-right: -1.5rem;"
                },
                {
                    "class": ".-mb-6",
                    "css": "margin-bottom: -1.5rem;"
                },
                {
                    "class": ".-ml-6",
                    "css": "margin-left: -1.5rem;"
                },
                {
                    "class": ".-mt-7",
                    "css": "margin-top: 1.75rem;"
                },
                {
                    "class": ".-mr-7",
                    "css": "margin-right: 1.75rem;"
                },
                {
                    "class": ".-mb-7",
                    "css": "margin-bottom: 1.75rem;"
                },
                {
                    "class": ".-ml-7",
                    "css": "margin-left: 1.75rem;"
                },
                {
                    "class": ".-mt-8",
                    "css": "margin-top: -2rem;"
                },
                {
                    "class": ".-mr-8",
                    "css": "margin-right: -2rem;"
                },
                {
                    "class": ".-mb-8",
                    "css": "margin-bottom: -2rem;"
                },
                {
                    "class": ".-ml-8",
                    "css": "margin-left: -2rem;"
                },
                {
                    "class": ".-mt-9",
                    "css": "margin-top: 2.25rem;"
                },
                {
                    "class": ".-mr-9",
                    "css": "margin-right: 2.25rem;"
                },
                {
                    "class": ".-mb-9",
                    "css": "margin-bottom: 2.25rem;"
                },
                {
                    "class": ".-ml-9",
                    "css": "margin-left: 2.25rem;"
                },
                {
                    "class": ".-mt-10",
                    "css": "margin-top: -2.5rem;"
                },
                {
                    "class": ".-mr-10",
                    "css": "margin-right: -2.5rem;"
                },
                {
                    "class": ".-mb-10",
                    "css": "margin-bottom: -2.5rem;"
                },
                {
                    "class": ".-ml-10",
                    "css": "margin-left: -2.5rem;"
                },
                {
                    "class": ".-mt-11",
                    "css": "margin-top: -2.75rem;"
                },
                {
                    "class": ".-mr-11",
                    "css": "margin-right: -2.75rem;"
                },
                {
                    "class": ".-mb-11",
                    "css": "margin-bottom: -2.75rem;"
                },
                {
                    "class": ".-ml-11",
                    "css": "margin-left: -2.75rem;"
                },
                {
                    "class": ".-mt-12",
                    "css": "margin-top: -3rem;"
                },
                {
                    "class": ".-mr-12",
                    "css": "margin-right: -3rem;"
                },
                {
                    "class": ".-mb-12",
                    "css": "margin-bottom: -3rem;"
                },
                {
                    "class": ".-ml-12",
                    "css": "margin-left: -3rem;"
                },
                {
                    "class": ".-mt-14",
                    "css": "margin-top: -3.5rem;"
                },
                {
                    "class": ".-mr-14",
                    "css": "margin-right: -3.5rem;"
                },
                {
                    "class": ".-mb-14",
                    "css": "margin-bottom: -3.5rem;"
                },
                {
                    "class": ".-ml-14",
                    "css": "margin-left: -3.5rem;"
                },
                {
                    "class": ".-mt-16",
                    "css": "margin-top: -4rem;"
                },
                {
                    "class": ".-mr-16",
                    "css": "margin-right: -4rem;"
                },
                {
                    "class": ".-mb-16",
                    "css": "margin-bottom: -4rem;"
                },
                {
                    "class": ".-ml-16",
                    "css": "margin-left: -4rem;"
                },
                {
                    "class": ".-mt-20",
                    "css": "margin-top: -5rem;"
                },
                {
                    "class": ".-mr-20",
                    "css": "margin-right: -5rem;"
                },
                {
                    "class": ".-mb-20",
                    "css": "margin-bottom: -5rem;"
                },
                {
                    "class": ".-ml-20",
                    "css": "margin-left: -5rem;"
                },
                {
                    "class": ".-mt-24",
                    "css": "margin-top: -6rem;"
                },
                {
                    "class": ".-mr-24",
                    "css": "margin-right: -6rem;"
                },
                {
                    "class": ".-mb-24",
                    "css": "margin-bottom: -6rem;"
                },
                {
                    "class": ".-ml-24",
                    "css": "margin-left: -6rem;"
                },
                {
                    "class": ".-mt-28",
                    "css": "margin-top: -7rem;"
                },
                {
                    "class": ".-mr-28",
                    "css": "margin-right: -7rem;"
                },
                {
                    "class": ".-mb-28",
                    "css": "margin-bottom: -7rem;"
                },
                {
                    "class": ".-ml-28",
                    "css": "margin-left: -7rem;"
                },
                {
                    "class": ".-mt-32",
                    "css": "margin-top: -8rem;"
                },
                {
                    "class": ".-mr-32",
                    "css": "margin-right: -8rem;"
                },
                {
                    "class": ".-mb-32",
                    "css": "margin-bottom: -8rem;"
                },
                {
                    "class": ".-ml-32",
                    "css": "margin-left: -8rem;"
                },
                {
                    "class": ".-mt-36",
                    "css": "margin-top: -9rem;"
                },
                {
                    "class": ".-mr-36",
                    "css": "margin-right: -9rem;"
                },
                {
                    "class": ".-mb-36",
                    "css": "margin-bottom: -9rem;"
                },
                {
                    "class": ".-ml-36",
                    "css": "margin-left: -9rem;"
                },
                {
                    "class": ".-mt-40",
                    "css": "margin-top: -10rem;"
                },
                {
                    "class": ".-mr-40",
                    "css": "margin-right: -10rem;"
                },
                {
                    "class": ".-mb-40",
                    "css": "margin-bottom: -10rem;"
                },
                {
                    "class": ".-ml-40",
                    "css": "margin-left: -10rem;"
                },
                {
                    "class": ".-mt-44",
                    "css": "margin-top: -11rem;"
                },
                {
                    "class": ".-mr-44",
                    "css": "margin-right: -11rem;"
                },
                {
                    "class": ".-mb-44",
                    "css": "margin-bottom: -11rem;"
                },
                {
                    "class": ".-ml-44",
                    "css": "margin-left: -11rem;"
                },
                {
                    "class": ".-mt-48",
                    "css": "margin-top: -12rem;"
                },
                {
                    "class": ".-mr-48",
                    "css": "margin-right: -12rem;"
                },
                {
                    "class": ".-mb-48",
                    "css": "margin-bottom: -12rem;"
                },
                {
                    "class": ".-ml-48",
                    "css": "margin-left: -12rem;"
                },
                {
                    "class": ".-mt-52",
                    "css": "margin-top: -13rem;"
                },
                {
                    "class": ".-mr-52",
                    "css": "margin-right: -13rem;"
                },
                {
                    "class": ".-mb-52",
                    "css": "margin-bottom: -13rem;"
                },
                {
                    "class": ".-ml-52",
                    "css": "margin-left: -13rem;"
                },
                {
                    "class": ".-mt-56",
                    "css": "margin-top: -14rem;"
                },
                {
                    "class": ".-mr-56",
                    "css": "margin-right: -14rem;"
                },
                {
                    "class": ".-mb-56",
                    "css": "margin-bottom: -14rem;"
                },
                {
                    "class": ".-ml-56",
                    "css": "margin-left: -14rem;"
                },
                {
                    "class": ".-mt-60",
                    "css": "margin-top: 15rem;"
                },
                {
                    "class": ".-mr-60",
                    "css": "margin-right: 15rem;"
                },
                {
                    "class": ".-mb-60",
                    "css": "margin-bottom: 15rem;"
                },
                {
                    "class": ".-ml-60",
                    "css": "margin-left: 15rem;"
                },
                {
                    "class": ".-mt-64",
                    "css": "margin-top: -16rem;"
                },
                {
                    "class": ".-mr-64",
                    "css": "margin-right: -16rem;"
                },
                {
                    "class": ".-mb-64",
                    "css": "margin-bottom: -16rem;"
                },
                {
                    "class": ".-ml-64",
                    "css": "margin-left: -16rem;"
                },
                {
                    "class": ".-mt-72",
                    "css": "margin-top: -18rem;"
                },
                {
                    "class": ".-mr-72",
                    "css": "margin-right: -18rem;"
                },
                {
                    "class": ".-mb-72",
                    "css": "margin-bottom: -18rem;"
                },
                {
                    "class": ".-ml-72",
                    "css": "margin-left: -18rem;"
                },
                {
                    "class": ".-mt-80",
                    "css": "margin-top: -20rem;"
                },
                {
                    "class": ".-mr-80",
                    "css": "margin-right: -20rem;"
                },
                {
                    "class": ".-mb-80",
                    "css": "margin-bottom: -20rem;"
                },
                {
                    "class": ".-ml-80",
                    "css": "margin-left: -20rem;"
                },
                {
                    "class": ".-mt-96",
                    "css": "margin-top: -24rem;"
                },
                {
                    "class": ".-mr-96",
                    "css": "margin-right: -24rem;"
                },
                {
                    "class": ".-mb-96",
                    "css": "margin-bottom: -24rem;"
                },
                {
                    "class": ".-ml-96",
                    "css": "margin-left: -24rem;"
                },
                {
                    "class": ".-mt-px",
                    "css": "margin-top: -1px;"
                },
                {
                    "class": ".-mr-px",
                    "css": "margin-right: -1px;"
                },
                {
                    "class": ".-mb-px",
                    "css": "margin-bottom: -1px;"
                },
                {
                    "class": ".-ml-px",
                    "css": "margin-left: -1px;"
                }
            ]
        },
        {
            "title": "Space Between",
            "classList": [
                {
                    "class": ".space-x-0",
                    "css": "margin-left: 0;"
                },
                {
                    "class": ".space-x-0.5",
                    "css": "margin-left: 0.125rem;"
                },
                {
                    "class": ".space-x-1",
                    "css": "margin-left: 0.25rem;"
                },
                {
                    "class": ".space-x-1.5",
                    "css": "margin-left: 0.375rem;"
                },
                {
                    "class": ".space-x-2",
                    "css": "margin-left: 0.5rem;"
                },
                {
                    "class": ".space-x-2.5",
                    "css": "margin-left: 0.625rem;"
                },
                {
                    "class": ".space-x-3",
                    "css": "margin-left: 0.75rem;"
                },
                {
                    "class": ".space-x-3",
                    "css": "margin-left: 0.875rem;"
                },
                {
                    "class": ".space-x-4",
                    "css": "margin-left: 1rem;"
                },
                {
                    "class": ".space-x-5",
                    "css": "margin-left: 1.25rem;"
                },
                {
                    "class": ".space-x-6",
                    "css": "margin-left: 1.5rem;"
                },
                {
                    "class": ".space-x-7",
                    "css": "margin-left: 1.75rem;"
                },
                {
                    "class": ".space-x-8",
                    "css": "margin-left: 2rem;"
                },
                {
                    "class": ".space-x-9",
                    "css": "margin-left: 2.25rem;"
                },
                {
                    "class": ".space-x-10",
                    "css": "margin-left: 2.5rem;"
                },
                {
                    "class": ".space-x-11",
                    "css": "margin-left: 2.75rem;"
                },
                {
                    "class": ".space-x-12",
                    "css": "margin-left: 3rem;"
                },
                {
                    "class": ".space-x-14",
                    "css": "margin-left: 3.5rem;"
                },
                {
                    "class": ".space-x-16",
                    "css": "margin-left: 4rem;"
                },
                {
                    "class": ".space-x-20",
                    "css": "margin-left: 5rem;"
                },
                {
                    "class": ".space-x-24",
                    "css": "margin-left: 6rem;"
                },
                {
                    "class": ".space-x-28",
                    "css": "margin-left: 7rem;"
                },
                {
                    "class": ".space-x-32",
                    "css": "margin-left: 8rem;"
                },
                {
                    "class": ".space-x-36",
                    "css": "margin-left: 9rem;"
                },
                {
                    "class": ".space-x-40",
                    "css": "margin-left: 10rem;"
                },
                {
                    "class": ".space-x-44",
                    "css": "margin-left: 11rem;"
                },
                {
                    "class": ".space-x-48",
                    "css": "margin-left: 12rem;"
                },
                {
                    "class": ".space-x-52",
                    "css": "margin-left: 13rem;"
                },
                {
                    "class": ".space-x-56",
                    "css": "margin-left: 14rem;"
                },
                {
                    "class": ".space-x-60",
                    "css": "margin-left: 15rem;"
                },
                {
                    "class": ".space-x-64",
                    "css": "margin-left: 16rem;"
                },
                {
                    "class": ".space-x-72",
                    "css": "margin-left: 18rem;"
                },
                {
                    "class": ".space-x-80",
                    "css": "margin-left: 20rem;"
                },
                {
                    "class": ".space-x-96",
                    "css": "margin-left: 24rem;"
                },
                {
                    "class": ".space-x-px",
                    "css": "margin-left: 1px;"
                },
                {
                    "class": ".-space-x-0",
                    "css": "margin-left: 0;"
                },
                {
                    "class": ".-space-x-0.5",
                    "css": "margin-left: -0.125rem;"
                },
                {
                    "class": ".-space-x-1",
                    "css": "margin-left: -0.25rem;"
                },
                {
                    "class": ".-space-x-1.5",
                    "css": "margin-left: -0.375rem;"
                },
                {
                    "class": ".-space-x-2",
                    "css": "margin-left: -0.5rem;"
                },
                {
                    "class": ".-space-x-2.5",
                    "css": "margin-left: -0.625rem;"
                },
                {
                    "class": ".-space-x-3",
                    "css": "margin-left: -0.75rem;"
                },
                {
                    "class": ".-space-x-3",
                    "css": "margin-left: -0.875rem;"
                },
                {
                    "class": ".-space-x-4",
                    "css": "margin-left: -1rem;"
                },
                {
                    "class": ".-space-x-5",
                    "css": "margin-left: -1.25rem;"
                },
                {
                    "class": ".-space-x-6",
                    "css": "margin-left: -1.5rem;"
                },
                {
                    "class": ".-space-x-7",
                    "css": "margin-left: -1.75rem;"
                },
                {
                    "class": ".-space-x-8",
                    "css": "margin-left: -2rem;"
                },
                {
                    "class": ".-space-x-9",
                    "css": "margin-left: -2.25rem;"
                },
                {
                    "class": ".-space-x-10",
                    "css": "margin-left: -2.5rem;"
                },
                {
                    "class": ".-space-x-11",
                    "css": "margin-left: -2.75rem;"
                },
                {
                    "class": ".-space-x-12",
                    "css": "margin-left: -3rem;"
                },
                {
                    "class": ".-space-x-14",
                    "css": "margin-left: -3.5rem;"
                },
                {
                    "class": ".-space-x-16",
                    "css": "margin-left: -4rem;"
                },
                {
                    "class": ".-space-x-20",
                    "css": "margin-left: -5rem;"
                },
                {
                    "class": ".-space-x-24",
                    "css": "margin-left: -6rem;"
                },
                {
                    "class": ".-space-x-28",
                    "css": "margin-left: -7rem;"
                },
                {
                    "class": ".-space-x-32",
                    "css": "margin-left: -8rem;"
                },
                {
                    "class": ".-space-x-36",
                    "css": "margin-left: -9rem;"
                },
                {
                    "class": ".-space-x-40",
                    "css": "margin-left: -10rem;"
                },
                {
                    "class": ".-space-x-44",
                    "css": "margin-left: -11rem;"
                },
                {
                    "class": ".-space-x-48",
                    "css": "margin-left: -12rem;"
                },
                {
                    "class": ".-space-x-52",
                    "css": "margin-left: -13rem;"
                },
                {
                    "class": ".-space-x-56",
                    "css": "margin-left: -14rem;"
                },
                {
                    "class": ".-space-x-60",
                    "css": "margin-left: -15rem;"
                },
                {
                    "class": ".-space-x-64",
                    "css": "margin-left: -16rem;"
                },
                {
                    "class": ".-space-x-72",
                    "css": "margin-left: -18rem;"
                },
                {
                    "class": ".-space-x-80",
                    "css": "margin-left: -20rem;"
                },
                {
                    "class": ".-space-x-96",
                    "css": "margin-left: -24rem;"
                },
                {
                    "class": ".-space-x-px",
                    "css": "margin-left: -1px;"
                },
                {
                    "class": ".space-y-0",
                    "css": "margin-top: 0;"
                },
                {
                    "class": ".space-y-0.5",
                    "css": "margin-top: 0.125rem;"
                },
                {
                    "class": ".space-y-1",
                    "css": "margin-top: 0.25rem;"
                },
                {
                    "class": ".space-y-1.5",
                    "css": "margin-top: 0.375rem;"
                },
                {
                    "class": ".space-y-2",
                    "css": "margin-top: 0.5rem;"
                },
                {
                    "class": ".space-y-2.5",
                    "css": "margin-top: 0.625rem;"
                },
                {
                    "class": ".space-y-3",
                    "css": "margin-top: 0.75rem;"
                },
                {
                    "class": ".space-y-3",
                    "css": "margin-top: 0.875rem;"
                },
                {
                    "class": ".space-y-4",
                    "css": "margin-top: 1rem;"
                },
                {
                    "class": ".space-y-5",
                    "css": "margin-top: 1.25rem;"
                },
                {
                    "class": ".space-y-6",
                    "css": "margin-top: 1.5rem;"
                },
                {
                    "class": ".space-y-7",
                    "css": "margin-top: 1.75rem;"
                },
                {
                    "class": ".space-y-8",
                    "css": "margin-top: 2rem;"
                },
                {
                    "class": ".space-y-9",
                    "css": "margin-top: 2.25rem;"
                },
                {
                    "class": ".space-y-10",
                    "css": "margin-top: 2.5rem;"
                },
                {
                    "class": ".space-y-11",
                    "css": "margin-top: 2.75rem;"
                },
                {
                    "class": ".space-y-12",
                    "css": "margin-top: 3rem;"
                },
                {
                    "class": ".space-y-14",
                    "css": "margin-top: 3.5rem;"
                },
                {
                    "class": ".space-y-16",
                    "css": "margin-top: 4rem;"
                },
                {
                    "class": ".space-y-20",
                    "css": "margin-top: 5rem;"
                },
                {
                    "class": ".space-y-24",
                    "css": "margin-top: 6rem;"
                },
                {
                    "class": ".space-y-28",
                    "css": "margin-top: 7rem;"
                },
                {
                    "class": ".space-y-32",
                    "css": "margin-top: 8rem;"
                },
                {
                    "class": ".space-y-36",
                    "css": "margin-top: 9rem;"
                },
                {
                    "class": ".space-y-40",
                    "css": "margin-top: 10rem;"
                },
                {
                    "class": ".space-y-44",
                    "css": "margin-top: 11rem;"
                },
                {
                    "class": ".space-y-48",
                    "css": "margin-top: 12rem;"
                },
                {
                    "class": ".space-y-52",
                    "css": "margin-top: 13rem;"
                },
                {
                    "class": ".space-y-56",
                    "css": "margin-top: 14rem;"
                },
                {
                    "class": ".space-y-60",
                    "css": "margin-top: 15rem;"
                },
                {
                    "class": ".space-y-64",
                    "css": "margin-top: 16rem;"
                },
                {
                    "class": ".space-y-72",
                    "css": "margin-top: 18rem;"
                },
                {
                    "class": ".space-y-80",
                    "css": "margin-top: 20rem;"
                },
                {
                    "class": ".space-y-96",
                    "css": "margin-top: 24rem;"
                },
                {
                    "class": ".space-y-px",
                    "css": "margin-top: 1px;"
                },
                {
                    "class": ".-space-y-0",
                    "css": "margin-top: 0;"
                },
                {
                    "class": ".-space-y-0.5",
                    "css": "margin-top: -0.125rem;"
                },
                {
                    "class": ".-space-y-1",
                    "css": "margin-top: -0.25rem;"
                },
                {
                    "class": ".-space-y-1.5",
                    "css": "margin-top: -0.375rem;"
                },
                {
                    "class": ".-space-y-2",
                    "css": "margin-top: -0.5rem;"
                },
                {
                    "class": ".-space-y-2.5",
                    "css": "margin-top: -0.625rem;"
                },
                {
                    "class": ".-space-y-3",
                    "css": "margin-top: -0.75rem;"
                },
                {
                    "class": ".-space-y-3",
                    "css": "margin-top: -0.875rem;"
                },
                {
                    "class": ".-space-y-4",
                    "css": "margin-top: -1rem;"
                },
                {
                    "class": ".-space-y-5",
                    "css": "margin-top: -1.25rem;"
                },
                {
                    "class": ".-space-y-6",
                    "css": "margin-top: -1.5rem;"
                },
                {
                    "class": ".-space-y-7",
                    "css": "margin-top: -1.75rem;"
                },
                {
                    "class": ".-space-y-8",
                    "css": "margin-top: -2rem;"
                },
                {
                    "class": ".-space-y-9",
                    "css": "margin-top: -2.25rem;"
                },
                {
                    "class": ".-space-y-10",
                    "css": "margin-top: -2.5rem;"
                },
                {
                    "class": ".-space-y-11",
                    "css": "margin-top: -2.75rem;"
                },
                {
                    "class": ".-space-y-12",
                    "css": "margin-top: -3rem;"
                },
                {
                    "class": ".-space-y-14",
                    "css": "margin-top: -3.5rem;"
                },
                {
                    "class": ".-space-y-16",
                    "css": "margin-top: -4rem;"
                },
                {
                    "class": ".-space-y-20",
                    "css": "margin-top: -5rem;"
                },
                {
                    "class": ".-space-y-24",
                    "css": "margin-top: -6rem;"
                },
                {
                    "class": ".-space-y-28",
                    "css": "margin-top: -7rem;"
                },
                {
                    "class": ".-space-y-32",
                    "css": "margin-top: -8rem;"
                },
                {
                    "class": ".-space-y-36",
                    "css": "margin-top: -9rem;"
                },
                {
                    "class": ".-space-y-40",
                    "css": "margin-top: -10rem;"
                },
                {
                    "class": ".-space-y-44",
                    "css": "margin-top: -11rem;"
                },
                {
                    "class": ".-space-y-48",
                    "css": "margin-top: -12rem;"
                },
                {
                    "class": ".-space-y-52",
                    "css": "margin-top: -13rem;"
                },
                {
                    "class": ".-space-y-56",
                    "css": "margin-top: -14rem;"
                },
                {
                    "class": ".-space-y-60",
                    "css": "margin-top: -15rem;"
                },
                {
                    "class": ".-space-y-64",
                    "css": "margin-top: -16rem;"
                },
                {
                    "class": ".-space-y-72",
                    "css": "margin-top: -18rem;"
                },
                {
                    "class": ".-space-y-80",
                    "css": "margin-top: -20rem;"
                },
                {
                    "class": ".-space-y-96",
                    "css": "margin-top: -24rem;"
                },
                {
                    "class": ".-space-y-px",
                    "css": "margin-top: -1px;"
                },
                {
                    "class": ".space-x-reverse",
                    "css": "--space-x-reverse: 1"
                },
                {
                    "class": ".space-y-reverse",
                    "css": "--space-y-reverse: 1"
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
                    "css": "background-attachment: fixed;"
                },
                {
                    "class": ".bg-local",
                    "css": "background-attachment: local;"
                },
                {
                    "class": ".bg-scroll",
                    "css": "background-attachment: scroll;"
                }
            ]
        },
        {
            "title": "Background Clip",
            "classList": [
                {
                    "class": ".bg-clip-border",
                    "css": "background-clip: border-box;"
                },
                {
                    "class": ".bg-clip-padding",
                    "css": "background-clip: padding-box;"
                },
                {
                    "class": ".bg-clip-content",
                    "css": "background-clip: content-box;"
                },
                {
                    "class": ".bg-clip-text",
                    "css": "background-clip: text;"
                }
            ]
        },
        {
            "title": "Background Color",
            "classList": [
                {
                    "class": ".bg-transparent",
                    "css": "background-color: transparent;"
                },
                {
                    "class": ".bg-current",
                    "css": "background-color: currentColor;"
                },
                {
                    "class": ".bg-black",
                    "css": "background-color: #000000;"
                },
                {
                    "class": ".bg-white",
                    "css": "background-color: #ffffff;"
                },
                {
                    "class": ".bg-gray-50",
                    "css": "background-color: #F9FAFB;"
                },
                {
                    "class": ".bg-gray-100",
                    "css": "background-color: #F3F4F6;"
                },
                {
                    "class": ".bg-gray-200",
                    "css": "background-color: #E5E7EB;"
                },
                {
                    "class": ".bg-gray-300",
                    "css": "background-color: #D1D5DB;"
                },
                {
                    "class": ".bg-gray-400",
                    "css": "background-color: #9CA3AF;"
                },
                {
                    "class": ".bg-gray-500",
                    "css": "background-color: #6B7280;"
                },
                {
                    "class": ".bg-gray-600",
                    "css": "background-color: #6B7280;"
                },
                {
                    "class": ".bg-gray-700",
                    "css": "background-color: #374151;"
                },
                {
                    "class": ".bg-gray-800",
                    "css": "background-color: #1F2937;"
                },
                {
                    "class": ".bg-gray-900",
                    "css": "background-color: #111827;"
                },
                {
                    "class": ".bg-red-50",
                    "css": "background-color: #FEF2F2;"
                },
                {
                    "class": ".bg-red-100",
                    "css": "background-color: #FEE2E2;"
                },
                {
                    "class": ".bg-red-200",
                    "css": "background-color: #FECACA;"
                },
                {
                    "class": ".bg-red-300",
                    "css": "background-color: #FCA5A5;"
                },
                {
                    "class": ".bg-red-400",
                    "css": "background-color: #F87171;"
                },
                {
                    "class": ".bg-red-500",
                    "css": "background-color: #EF4444;"
                },
                {
                    "class": ".bg-red-600",
                    "css": "background-color: #DC2626;"
                },
                {
                    "class": ".bg-red-700",
                    "css": "background-color: #B91C1C;"
                },
                {
                    "class": ".bg-red-800",
                    "css": "background-color: #991B1B;"
                },
                {
                    "class": ".bg-red-900",
                    "css": "background-color: #7F1D1D;"
                },
                {
                    "class": ".bg-yellow-50",
                    "css": "background-color: #FFFBEB;"
                },
                {
                    "class": ".bg-yellow-100",
                    "css": "background-color: #FEF3C7;"
                },
                {
                    "class": ".bg-yellow-200",
                    "css": "background-color: #FDE68A;"
                },
                {
                    "class": ".bg-yellow-300",
                    "css": "background-color: #FCD34D;"
                },
                {
                    "class": ".bg-yellow-400",
                    "css": "background-color: #FBBF24;"
                },
                {
                    "class": ".bg-yellow-500",
                    "css": "background-color: #F59E0B;"
                },
                {
                    "class": ".bg-yellow-600",
                    "css": "background-color: #D97706;"
                },
                {
                    "class": ".bg-yellow-700",
                    "css": "background-color: #B45309;"
                },
                {
                    "class": ".bg-yellow-800",
                    "css": "background-color: #92400E;"
                },
                {
                    "class": ".bg-yellow-900",
                    "css": "background-color: #78350F;"
                },
                {
                    "class": ".bg-green-50",
                    "css": "background-color: #ECFDF5;"
                },
                {
                    "class": ".bg-green-100",
                    "css": "background-color: #D1FAE5;"
                },
                {
                    "class": ".bg-green-200",
                    "css": "background-color: #A7F3D0;"
                },
                {
                    "class": ".bg-green-300",
                    "css": "background-color: #6EE7B7;"
                },
                {
                    "class": ".bg-green-400",
                    "css": "background-color: #34D399;"
                },
                {
                    "class": ".bg-green-500",
                    "css": "background-color: #10B981;"
                },
                {
                    "class": ".bg-green-600",
                    "css": "background-color: #059669;"
                },
                {
                    "class": ".bg-green-700",
                    "css": "background-color: #047857;"
                },
                {
                    "class": ".bg-green-800",
                    "css": "background-color: #065F46;"
                },
                {
                    "class": ".bg-green-900",
                    "css": "background-color: #064E3B;"
                },
                {
                    "class": ".bg-blue-50",
                    "css": "background-color: #EFF6FF;"
                },
                {
                    "class": ".bg-blue-100",
                    "css": "background-color: #DBEAFE;"
                },
                {
                    "class": ".bg-blue-200",
                    "css": "background-color: #BFDBFE;"
                },
                {
                    "class": ".bg-blue-300",
                    "css": "background-color: #93C5FD;"
                },
                {
                    "class": ".bg-blue-400",
                    "css": "background-color: #60A5FA;"
                },
                {
                    "class": ".bg-blue-500",
                    "css": "background-color: #3B82F6;"
                },
                {
                    "class": ".bg-blue-600",
                    "css": "background-color: #2563EB;"
                },
                {
                    "class": ".bg-blue-700",
                    "css": "background-color: #1D4ED8;"
                },
                {
                    "class": ".bg-blue-800",
                    "css": "background-color: #1E40AF;"
                },
                {
                    "class": ".bg-blue-900",
                    "css": "background-color: #1E3A8A;"
                },
                {
                    "class": ".bg-indigo-50",
                    "css": "background-color: #EEF2FF;"
                },
                {
                    "class": ".bg-indigo-100",
                    "css": "background-color: #E0E7FF;"
                },
                {
                    "class": ".bg-indigo-200",
                    "css": "background-color: #C7D2FE;"
                },
                {
                    "class": ".bg-indigo-300",
                    "css": "background-color: #A5B4FC;"
                },
                {
                    "class": ".bg-indigo-400",
                    "css": "background-color: #818CF8;"
                },
                {
                    "class": ".bg-indigo-500",
                    "css": "background-color: #6366F1;"
                },
                {
                    "class": ".bg-indigo-600",
                    "css": "background-color: #4F46E5;"
                },
                {
                    "class": ".bg-indigo-700",
                    "css": "background-color: #4338CA;"
                },
                {
                    "class": ".bg-indigo-800",
                    "css": "background-color: #3730A3;"
                },
                {
                    "class": ".bg-indigo-900",
                    "css": "background-color: #312E81;"
                },
                {
                    "class": ".bg-purple-50",
                    "css": "background-color: #F5F3FF;"
                },
                {
                    "class": ".bg-purple-100",
                    "css": "background-color: #EDE9FE;"
                },
                {
                    "class": ".bg-purple-200",
                    "css": "background-color: #DDD6FE;"
                },
                {
                    "class": ".bg-purple-300",
                    "css": "background-color: #C4B5FD;"
                },
                {
                    "class": ".bg-purple-400",
                    "css": "background-color: #A78BFA;"
                },
                {
                    "class": ".bg-purple-500",
                    "css": "background-color: #8B5CF6;"
                },
                {
                    "class": ".bg-purple-600",
                    "css": "background-color: #7C3AED;"
                },
                {
                    "class": ".bg-purple-700",
                    "css": "background-color: #6D28D9;"
                },
                {
                    "class": ".bg-purple-800",
                    "css": "background-color: #5B21B6;"
                },
                {
                    "class": ".bg-purple-900",
                    "css": "background-color: #4C1D95;"
                },
                {
                    "class": ".bg-pink-50",
                    "css": "background-color: #FDF2F8;"
                },
                {
                    "class": ".bg-pink-100",
                    "css": "background-color: #FCE7F3;"
                },
                {
                    "class": ".bg-pink-200",
                    "css": "background-color: #FBCFE8;"
                },
                {
                    "class": ".bg-pink-300",
                    "css": "background-color: #F9A8D4;"
                },
                {
                    "class": ".bg-pink-400",
                    "css": "background-color: #F472B6;"
                },
                {
                    "class": ".bg-pink-500",
                    "css": "background-color: #EC4899;"
                },
                {
                    "class": ".bg-pink-600",
                    "css": "background-color: #DB2777;"
                },
                {
                    "class": ".bg-pink-700",
                    "css": "background-color: #BE185D;"
                },
                {
                    "class": ".bg-pink-800",
                    "css": "background-color: #9D174D;"
                },
                {
                    "class": ".bg-pink-900",
                    "css": "background-color: #831843;"
                }
            ]
        },
        {
            "title": "Background Opacity",
            "classList": [
                {
                    "class": ".bg-opacity-0",
                    "css": "--bg-opacity: 0;"
                },
                {
                    "class": ".bg-opacity-5",
                    "css": "--bg-opacity: 0.5;"
                },
                {
                    "class": ".bg-opacity-10",
                    "css": "--bg-opacity: 0.1;"
                },
                {
                    "class": ".bg-opacity-20",
                    "css": "--bg-opacity: 0.2;"
                },
                {
                    "class": ".bg-opacity-25",
                    "css": "--bg-opacity: 0.25;"
                },
                {
                    "class": ".bg-opacity-30",
                    "css": "--bg-opacity: 0.3;"
                },
                {
                    "class": ".bg-opacity-40",
                    "css": "--bg-opacity: 0.4;"
                },
                {
                    "class": ".bg-opacity-50",
                    "css": "--bg-opacity: 0.5;"
                },
                {
                    "class": ".bg-opacity-60",
                    "css": "--bg-opacity: 0.6;"
                },
                {
                    "class": ".bg-opacity-70",
                    "css": "--bg-opacity: 0.7;"
                },
                {
                    "class": ".bg-opacity-75",
                    "css": "--bg-opacity: 0.75;"
                },
                {
                    "class": ".bg-opacity-80",
                    "css": "--bg-opacity: 0.8;"
                },
                {
                    "class": ".bg-opacity-90",
                    "css": "--bg-opacity: 0.9;"
                },
                {
                    "class": ".bg-opacity-95",
                    "css": "--bg-opacity: 0.95;"
                },
                {
                    "class": ".bg-opacity-100",
                    "css": "--bg-opacity: 1;"
                }
            ]
        },
        {
            "title": "Background Origin",
            "classList": [
                {
                    "class": ".bg-origin-border",
                    "css": "background-origin: border-box;"
                },
                {
                    "class": ".bg-origin-padding",
                    "css": "background-origin: padding-box;"
                },
                {
                    "class": ".bg-origin-content",
                    "css": "background-origin: content-box;"
                }
            ]
        },
        {
            "title": "Background Position",
            "classList": [
                {
                    "class": ".bg-bottom",
                    "css": "background-position: bottom;"
                },
                {
                    "class": ".bg-center",
                    "css": "background-position: center;"
                },
                {
                    "class": ".bg-left",
                    "css": "background-position: left;"
                },
                {
                    "class": ".bg-left-bottom",
                    "css": "background-position: left bottom;"
                },
                {
                    "class": ".bg-left-top",
                    "css": "background-position: left top;"
                },
                {
                    "class": ".bg-right",
                    "css": "background-position: right;"
                },
                {
                    "class": ".bg-right-bottom",
                    "css": "background-position: right bottom;"
                },
                {
                    "class": ".bg-right-top",
                    "css": "background-position: right top;"
                },
                {
                    "class": ".bg-top",
                    "css": "background-position: top;"
                }
            ]
        },
        {
            "title": "Background Repeat",
            "classList": [
                {
                    "class": ".bg-repeat",
                    "css": "background-repeat: repeat;"
                },
                {
                    "class": ".bg-no-repeat",
                    "css": "background-repeat: no-repeat;"
                },
                {
                    "class": ".bg-repeat-x",
                    "css": "background-repeat: repeat-x;"
                },
                {
                    "class": ".bg-repeat-y",
                    "css": "background-repeat: repeat-y;"
                },
                {
                    "class": ".bg-repeat-round",
                    "css": "background-repeat: round;"
                },
                {
                    "class": ".bg-repeat-space",
                    "css": "background-repeat: space;"
                }
            ]
        },
        {
            "title": "Background Size",
            "classList": [
                {
                    "class": ".bg-auto",
                    "css": "background-size: auto;"
                },
                {
                    "class": ".bg-cover",
                    "css": "background-size: cover;"
                },
                {
                    "class": ".bg-contain",
                    "css": "background-size: contain;"
                }
            ]
        },
        {
            "title": "Background Image",
            "classList": [
                {
                    "class": ".bg-none",
                    "css": "background-image: none;"
                },
                {
                    "class": ".bg-gradient-to-t",
                    "css": "background-image:background-image: background-image: linear-gradient(to top, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-tr",
                    "css": "background-image: background-image: linear-gradient(to top right, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-r",
                    "css": "background-image: background-image: linear-gradient(to right, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-br",
                    "css": "background-image: background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-b",
                    "css": "background-image: background-image: linear-gradient(to bottom, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-bl",
                    "css": "background-image: background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-l",
                    "css": "background-image: background-image: linear-gradient(to left, var(--tw-gradient-stops));"
                },
                {
                    "class": ".bg-gradient-to-tl",
                    "css": "background-image: background-image: linear-gradient(to top left, var(--tw-gradient-stops));"
                }
            ]
        },
        {
            "title": "Gradient Color Stops",
            "classList": [
                {
                    "class": ".from-transparent",
                    "css": "background-color: transparent;"
                },
                {
                    "class": ".from-current",
                    "css": "background-color: currentColor;"
                },
                {
                    "class": ".from-black",
                    "css": "background-color: #000000;"
                },
                {
                    "class": ".from-white",
                    "css": "background-color: #ffffff;"
                },
                {
                    "class": ".from-gray-50",
                    "css": "background-color: #F9FAFB;"
                },
                {
                    "class": ".from-gray-100",
                    "css": "background-color: #F3F4F6;"
                },
                {
                    "class": ".from-gray-200",
                    "css": "background-color: #E5E7EB;"
                },
                {
                    "class": ".from-gray-300",
                    "css": "background-color: #D1D5DB;"
                },
                {
                    "class": ".from-gray-400",
                    "css": "background-color: #9CA3AF;"
                },
                {
                    "class": ".from-gray-500",
                    "css": "background-color: #6B7280;"
                },
                {
                    "class": ".from-gray-600",
                    "css": "background-color: #6B7280;"
                },
                {
                    "class": ".from-gray-700",
                    "css": "background-color: #374151;"
                },
                {
                    "class": ".from-gray-800",
                    "css": "background-color: #1F2937;"
                },
                {
                    "class": ".from-gray-900",
                    "css": "background-color: #111827;"
                },
                {
                    "class": ".from-red-50",
                    "css": "background-color: #FEF2F2;"
                },
                {
                    "class": ".from-red-100",
                    "css": "background-color: #FEE2E2;"
                },
                {
                    "class": ".from-red-200",
                    "css": "background-color: #FECACA;"
                },
                {
                    "class": ".from-red-300",
                    "css": "background-color: #FCA5A5;"
                },
                {
                    "class": ".from-red-400",
                    "css": "background-color: #F87171;"
                },
                {
                    "class": ".from-red-500",
                    "css": "background-color: #EF4444;"
                },
                {
                    "class": ".from-red-600",
                    "css": "background-color: #DC2626;"
                },
                {
                    "class": ".from-red-700",
                    "css": "background-color: #B91C1C;"
                },
                {
                    "class": ".from-red-800",
                    "css": "background-color: #991B1B;"
                },
                {
                    "class": ".from-red-900",
                    "css": "background-color: #7F1D1D;"
                },
                {
                    "class": ".from-yellow-50",
                    "css": "background-color: #FFFBEB;"
                },
                {
                    "class": ".from-yellow-100",
                    "css": "background-color: #FEF3C7;"
                },
                {
                    "class": ".from-yellow-200",
                    "css": "background-color: #FDE68A;"
                },
                {
                    "class": ".from-yellow-300",
                    "css": "background-color: #FCD34D;"
                },
                {
                    "class": ".from-yellow-400",
                    "css": "background-color: #FBBF24;"
                },
                {
                    "class": ".from-yellow-500",
                    "css": "background-color: #F59E0B;"
                },
                {
                    "class": ".from-yellow-600",
                    "css": "background-color: #D97706;"
                },
                {
                    "class": ".from-yellow-700",
                    "css": "background-color: #B45309;"
                },
                {
                    "class": ".from-yellow-800",
                    "css": "background-color: #92400E;"
                },
                {
                    "class": ".from-yellow-900",
                    "css": "background-color: #78350F;"
                },
                {
                    "class": ".from-green-50",
                    "css": "background-color: #ECFDF5;"
                },
                {
                    "class": ".from-green-100",
                    "css": "background-color: #D1FAE5;"
                },
                {
                    "class": ".from-green-200",
                    "css": "background-color: #A7F3D0;"
                },
                {
                    "class": ".from-green-300",
                    "css": "background-color: #6EE7B7;"
                },
                {
                    "class": ".from-green-400",
                    "css": "background-color: #34D399;"
                },
                {
                    "class": ".from-green-500",
                    "css": "background-color: #10B981;"
                },
                {
                    "class": ".from-green-600",
                    "css": "background-color: #059669;"
                },
                {
                    "class": ".from-green-700",
                    "css": "background-color: #047857;"
                },
                {
                    "class": ".from-green-800",
                    "css": "background-color: #065F46;"
                },
                {
                    "class": ".from-green-900",
                    "css": "background-color: #064E3B;"
                },
                {
                    "class": ".from-blue-50",
                    "css": "background-color: #EFF6FF;"
                },
                {
                    "class": ".from-blue-100",
                    "css": "background-color: #DBEAFE;"
                },
                {
                    "class": ".from-blue-200",
                    "css": "background-color: #BFDBFE;"
                },
                {
                    "class": ".from-blue-300",
                    "css": "background-color: #93C5FD;"
                },
                {
                    "class": ".from-blue-400",
                    "css": "background-color: #60A5FA;"
                },
                {
                    "class": ".from-blue-500",
                    "css": "background-color: #3B82F6;"
                },
                {
                    "class": ".from-blue-600",
                    "css": "background-color: #2563EB;"
                },
                {
                    "class": ".from-blue-700",
                    "css": "background-color: #1D4ED8;"
                },
                {
                    "class": ".from-blue-800",
                    "css": "background-color: #1E40AF;"
                },
                {
                    "class": ".from-blue-900",
                    "css": "background-color: #1E3A8A;"
                },
                {
                    "class": ".from-indigo-50",
                    "css": "background-color: #EEF2FF;"
                },
                {
                    "class": ".from-indigo-100",
                    "css": "background-color: #E0E7FF;"
                },
                {
                    "class": ".from-indigo-200",
                    "css": "background-color: #C7D2FE;"
                },
                {
                    "class": ".from-indigo-300",
                    "css": "background-color: #A5B4FC;"
                },
                {
                    "class": ".from-indigo-400",
                    "css": "background-color: #818CF8;"
                },
                {
                    "class": ".from-indigo-500",
                    "css": "background-color: #6366F1;"
                },
                {
                    "class": ".from-indigo-600",
                    "css": "background-color: #4F46E5;"
                },
                {
                    "class": ".from-indigo-700",
                    "css": "background-color: #4338CA;"
                },
                {
                    "class": ".from-indigo-800",
                    "css": "background-color: #3730A3;"
                },
                {
                    "class": ".from-indigo-900",
                    "css": "background-color: #312E81;"
                },
                {
                    "class": ".from-purple-50",
                    "css": "background-color: #F5F3FF;"
                },
                {
                    "class": ".from-purple-100",
                    "css": "background-color: #EDE9FE;"
                },
                {
                    "class": ".from-purple-200",
                    "css": "background-color: #DDD6FE;"
                },
                {
                    "class": ".from-purple-300",
                    "css": "background-color: #C4B5FD;"
                },
                {
                    "class": ".from-purple-400",
                    "css": "background-color: #A78BFA;"
                },
                {
                    "class": ".from-purple-500",
                    "css": "background-color: #8B5CF6;"
                },
                {
                    "class": ".from-purple-600",
                    "css": "background-color: #7C3AED;"
                },
                {
                    "class": ".from-purple-700",
                    "css": "background-color: #6D28D9;"
                },
                {
                    "class": ".from-purple-800",
                    "css": "background-color: #5B21B6;"
                },
                {
                    "class": ".from-purple-900",
                    "css": "background-color: #4C1D95;"
                },
                {
                    "class": ".from-pink-50",
                    "css": "background-color: #FDF2F8;"
                },
                {
                    "class": ".from-pink-100",
                    "css": "background-color: #FCE7F3;"
                },
                {
                    "class": ".from-pink-200",
                    "css": "background-color: #FBCFE8;"
                },
                {
                    "class": ".from-pink-300",
                    "css": "background-color: #F9A8D4;"
                },
                {
                    "class": ".from-pink-400",
                    "css": "background-color: #F472B6;"
                },
                {
                    "class": ".from-pink-500",
                    "css": "background-color: #EC4899;"
                },
                {
                    "class": ".from-pink-600",
                    "css": "background-color: #DB2777;"
                },
                {
                    "class": ".from-pink-700",
                    "css": "background-color: #BE185D;"
                },
                {
                    "class": ".from-pink-800",
                    "css": "background-color: #9D174D;"
                },
                {
                    "class": ".from-pink-900",
                    "css": "background-color: #831843;"
                },
                {
                    "class": ".via-transparent",
                    "css": "background-color: transparent;"
                },
                {
                    "class": ".via-current",
                    "css": "background-color: currentColor;"
                },
                {
                    "class": ".via-black",
                    "css": "background-color: #000000;"
                },
                {
                    "class": ".via-white",
                    "css": "background-color: #ffffff;"
                },
                {
                    "class": ".via-gray-50",
                    "css": "background-color: #F9FAFB;"
                },
                {
                    "class": ".via-gray-100",
                    "css": "background-color: #F3F4F6;"
                },
                {
                    "class": ".via-gray-200",
                    "css": "background-color: #E5E7EB;"
                },
                {
                    "class": ".via-gray-300",
                    "css": "background-color: #D1D5DB;"
                },
                {
                    "class": ".via-gray-400",
                    "css": "background-color: #9CA3AF;"
                },
                {
                    "class": ".via-gray-500",
                    "css": "background-color: #6B7280;"
                },
                {
                    "class": ".via-gray-600",
                    "css": "background-color: #6B7280;"
                },
                {
                    "class": ".via-gray-700",
                    "css": "background-color: #374151;"
                },
                {
                    "class": ".via-gray-800",
                    "css": "background-color: #1F2937;"
                },
                {
                    "class": ".via-gray-900",
                    "css": "background-color: #111827;"
                },
                {
                    "class": ".via-red-50",
                    "css": "background-color: #FEF2F2;"
                },
                {
                    "class": ".via-red-100",
                    "css": "background-color: #FEE2E2;"
                },
                {
                    "class": ".via-red-200",
                    "css": "background-color: #FECACA;"
                },
                {
                    "class": ".via-red-300",
                    "css": "background-color: #FCA5A5;"
                },
                {
                    "class": ".via-red-400",
                    "css": "background-color: #F87171;"
                },
                {
                    "class": ".via-red-500",
                    "css": "background-color: #EF4444;"
                },
                {
                    "class": ".via-red-600",
                    "css": "background-color: #DC2626;"
                },
                {
                    "class": ".via-red-700",
                    "css": "background-color: #B91C1C;"
                },
                {
                    "class": ".via-red-800",
                    "css": "background-color: #991B1B;"
                },
                {
                    "class": ".via-red-900",
                    "css": "background-color: #7F1D1D;"
                },
                {
                    "class": ".via-yellow-50",
                    "css": "background-color: #FFFBEB;"
                },
                {
                    "class": ".via-yellow-100",
                    "css": "background-color: #FEF3C7;"
                },
                {
                    "class": ".via-yellow-200",
                    "css": "background-color: #FDE68A;"
                },
                {
                    "class": ".via-yellow-300",
                    "css": "background-color: #FCD34D;"
                },
                {
                    "class": ".via-yellow-400",
                    "css": "background-color: #FBBF24;"
                },
                {
                    "class": ".via-yellow-500",
                    "css": "background-color: #F59E0B;"
                },
                {
                    "class": ".via-yellow-600",
                    "css": "background-color: #D97706;"
                },
                {
                    "class": ".via-yellow-700",
                    "css": "background-color: #B45309;"
                },
                {
                    "class": ".via-yellow-800",
                    "css": "background-color: #92400E;"
                },
                {
                    "class": ".via-yellow-900",
                    "css": "background-color: #78350F;"
                },
                {
                    "class": ".via-green-50",
                    "css": "background-color: #ECFDF5;"
                },
                {
                    "class": ".via-green-100",
                    "css": "background-color: #D1FAE5;"
                },
                {
                    "class": ".via-green-200",
                    "css": "background-color: #A7F3D0;"
                },
                {
                    "class": ".via-green-300",
                    "css": "background-color: #6EE7B7;"
                },
                {
                    "class": ".via-green-400",
                    "css": "background-color: #34D399;"
                },
                {
                    "class": ".via-green-500",
                    "css": "background-color: #10B981;"
                },
                {
                    "class": ".via-green-600",
                    "css": "background-color: #059669;"
                },
                {
                    "class": ".via-green-700",
                    "css": "background-color: #047857;"
                },
                {
                    "class": ".via-green-800",
                    "css": "background-color: #065F46;"
                },
                {
                    "class": ".via-green-900",
                    "css": "background-color: #064E3B;"
                },
                {
                    "class": ".via-blue-50",
                    "css": "background-color: #EFF6FF;"
                },
                {
                    "class": ".via-blue-100",
                    "css": "background-color: #DBEAFE;"
                },
                {
                    "class": ".via-blue-200",
                    "css": "background-color: #BFDBFE;"
                },
                {
                    "class": ".via-blue-300",
                    "css": "background-color: #93C5FD;"
                },
                {
                    "class": ".via-blue-400",
                    "css": "background-color: #60A5FA;"
                },
                {
                    "class": ".via-blue-500",
                    "css": "background-color: #3B82F6;"
                },
                {
                    "class": ".via-blue-600",
                    "css": "background-color: #2563EB;"
                },
                {
                    "class": ".via-blue-700",
                    "css": "background-color: #1D4ED8;"
                },
                {
                    "class": ".via-blue-800",
                    "css": "background-color: #1E40AF;"
                },
                {
                    "class": ".via-blue-900",
                    "css": "background-color: #1E3A8A;"
                },
                {
                    "class": ".via-indigo-50",
                    "css": "background-color: #EEF2FF;"
                },
                {
                    "class": ".via-indigo-100",
                    "css": "background-color: #E0E7FF;"
                },
                {
                    "class": ".via-indigo-200",
                    "css": "background-color: #C7D2FE;"
                },
                {
                    "class": ".via-indigo-300",
                    "css": "background-color: #A5B4FC;"
                },
                {
                    "class": ".via-indigo-400",
                    "css": "background-color: #818CF8;"
                },
                {
                    "class": ".via-indigo-500",
                    "css": "background-color: #6366F1;"
                },
                {
                    "class": ".via-indigo-600",
                    "css": "background-color: #4F46E5;"
                },
                {
                    "class": ".via-indigo-700",
                    "css": "background-color: #4338CA;"
                },
                {
                    "class": ".via-indigo-800",
                    "css": "background-color: #3730A3;"
                },
                {
                    "class": ".via-indigo-900",
                    "css": "background-color: #312E81;"
                },
                {
                    "class": ".via-purple-50",
                    "css": "background-color: #F5F3FF;"
                },
                {
                    "class": ".via-purple-100",
                    "css": "background-color: #EDE9FE;"
                },
                {
                    "class": ".via-purple-200",
                    "css": "background-color: #DDD6FE;"
                },
                {
                    "class": ".via-purple-300",
                    "css": "background-color: #C4B5FD;"
                },
                {
                    "class": ".via-purple-400",
                    "css": "background-color: #A78BFA;"
                },
                {
                    "class": ".via-purple-500",
                    "css": "background-color: #8B5CF6;"
                },
                {
                    "class": ".via-purple-600",
                    "css": "background-color: #7C3AED;"
                },
                {
                    "class": ".via-purple-700",
                    "css": "background-color: #6D28D9;"
                },
                {
                    "class": ".via-purple-800",
                    "css": "background-color: #5B21B6;"
                },
                {
                    "class": ".via-purple-900",
                    "css": "background-color: #4C1D95;"
                },
                {
                    "class": ".via-pink-50",
                    "css": "background-color: #FDF2F8;"
                },
                {
                    "class": ".via-pink-100",
                    "css": "background-color: #FCE7F3;"
                },
                {
                    "class": ".via-pink-200",
                    "css": "background-color: #FBCFE8;"
                },
                {
                    "class": ".via-pink-300",
                    "css": "background-color: #F9A8D4;"
                },
                {
                    "class": ".via-pink-400",
                    "css": "background-color: #F472B6;"
                },
                {
                    "class": ".via-pink-500",
                    "css": "background-color: #EC4899;"
                },
                {
                    "class": ".via-pink-600",
                    "css": "background-color: #DB2777;"
                },
                {
                    "class": ".via-pink-700",
                    "css": "background-color: #BE185D;"
                },
                {
                    "class": ".via-pink-800",
                    "css": "background-color: #9D174D;"
                },
                {
                    "class": ".via-pink-900",
                    "css": "background-color: #831843;"
                },
                {
                    "class": ".to-transparent",
                    "css": "background-color: transparent;"
                },
                {
                    "class": ".to-current",
                    "css": "background-color: currentColor;"
                },
                {
                    "class": ".to-black",
                    "css": "background-color: #000000;"
                },
                {
                    "class": ".to-white",
                    "css": "background-color: #ffffff;"
                },
                {
                    "class": ".to-gray-50",
                    "css": "background-color: #F9FAFB;"
                },
                {
                    "class": ".to-gray-100",
                    "css": "background-color: #F3F4F6;"
                },
                {
                    "class": ".to-gray-200",
                    "css": "background-color: #E5E7EB;"
                },
                {
                    "class": ".to-gray-300",
                    "css": "background-color: #D1D5DB;"
                },
                {
                    "class": ".to-gray-400",
                    "css": "background-color: #9CA3AF;"
                },
                {
                    "class": ".to-gray-500",
                    "css": "background-color: #6B7280;"
                },
                {
                    "class": ".to-gray-600",
                    "css": "background-color: #6B7280;"
                },
                {
                    "class": ".to-gray-700",
                    "css": "background-color: #374151;"
                },
                {
                    "class": ".to-gray-800",
                    "css": "background-color: #1F2937;"
                },
                {
                    "class": ".to-gray-900",
                    "css": "background-color: #111827;"
                },
                {
                    "class": ".to-red-50",
                    "css": "background-color: #FEF2F2;"
                },
                {
                    "class": ".to-red-100",
                    "css": "background-color: #FEE2E2;"
                },
                {
                    "class": ".to-red-200",
                    "css": "background-color: #FECACA;"
                },
                {
                    "class": ".to-red-300",
                    "css": "background-color: #FCA5A5;"
                },
                {
                    "class": ".to-red-400",
                    "css": "background-color: #F87171;"
                },
                {
                    "class": ".to-red-500",
                    "css": "background-color: #EF4444;"
                },
                {
                    "class": ".to-red-600",
                    "css": "background-color: #DC2626;"
                },
                {
                    "class": ".to-red-700",
                    "css": "background-color: #B91C1C;"
                },
                {
                    "class": ".to-red-800",
                    "css": "background-color: #991B1B;"
                },
                {
                    "class": ".to-red-900",
                    "css": "background-color: #7F1D1D;"
                },
                {
                    "class": ".to-yellow-50",
                    "css": "background-color: #FFFBEB;"
                },
                {
                    "class": ".to-yellow-100",
                    "css": "background-color: #FEF3C7;"
                },
                {
                    "class": ".to-yellow-200",
                    "css": "background-color: #FDE68A;"
                },
                {
                    "class": ".to-yellow-300",
                    "css": "background-color: #FCD34D;"
                },
                {
                    "class": ".to-yellow-400",
                    "css": "background-color: #FBBF24;"
                },
                {
                    "class": ".to-yellow-500",
                    "css": "background-color: #F59E0B;"
                },
                {
                    "class": ".to-yellow-600",
                    "css": "background-color: #D97706;"
                },
                {
                    "class": ".to-yellow-700",
                    "css": "background-color: #B45309;"
                },
                {
                    "class": ".to-yellow-800",
                    "css": "background-color: #92400E;"
                },
                {
                    "class": ".to-yellow-900",
                    "css": "background-color: #78350F;"
                },
                {
                    "class": ".to-green-50",
                    "css": "background-color: #ECFDF5;"
                },
                {
                    "class": ".to-green-100",
                    "css": "background-color: #D1FAE5;"
                },
                {
                    "class": ".to-green-200",
                    "css": "background-color: #A7F3D0;"
                },
                {
                    "class": ".to-green-300",
                    "css": "background-color: #6EE7B7;"
                },
                {
                    "class": ".to-green-400",
                    "css": "background-color: #34D399;"
                },
                {
                    "class": ".to-green-500",
                    "css": "background-color: #10B981;"
                },
                {
                    "class": ".to-green-600",
                    "css": "background-color: #059669;"
                },
                {
                    "class": ".to-green-700",
                    "css": "background-color: #047857;"
                },
                {
                    "class": ".to-green-800",
                    "css": "background-color: #065F46;"
                },
                {
                    "class": ".to-green-900",
                    "css": "background-color: #064E3B;"
                },
                {
                    "class": ".to-blue-50",
                    "css": "background-color: #EFF6FF;"
                },
                {
                    "class": ".to-blue-100",
                    "css": "background-color: #DBEAFE;"
                },
                {
                    "class": ".to-blue-200",
                    "css": "background-color: #BFDBFE;"
                },
                {
                    "class": ".to-blue-300",
                    "css": "background-color: #93C5FD;"
                },
                {
                    "class": ".to-blue-400",
                    "css": "background-color: #60A5FA;"
                },
                {
                    "class": ".to-blue-500",
                    "css": "background-color: #3B82F6;"
                },
                {
                    "class": ".to-blue-600",
                    "css": "background-color: #2563EB;"
                },
                {
                    "class": ".to-blue-700",
                    "css": "background-color: #1D4ED8;"
                },
                {
                    "class": ".to-blue-800",
                    "css": "background-color: #1E40AF;"
                },
                {
                    "class": ".to-blue-900",
                    "css": "background-color: #1E3A8A;"
                },
                {
                    "class": ".to-indigo-50",
                    "css": "background-color: #EEF2FF;"
                },
                {
                    "class": ".to-indigo-100",
                    "css": "background-color: #E0E7FF;"
                },
                {
                    "class": ".to-indigo-200",
                    "css": "background-color: #C7D2FE;"
                },
                {
                    "class": ".to-indigo-300",
                    "css": "background-color: #A5B4FC;"
                },
                {
                    "class": ".to-indigo-400",
                    "css": "background-color: #818CF8;"
                },
                {
                    "class": ".to-indigo-500",
                    "css": "background-color: #6366F1;"
                },
                {
                    "class": ".to-indigo-600",
                    "css": "background-color: #4F46E5;"
                },
                {
                    "class": ".to-indigo-700",
                    "css": "background-color: #4338CA;"
                },
                {
                    "class": ".to-indigo-800",
                    "css": "background-color: #3730A3;"
                },
                {
                    "class": ".to-indigo-900",
                    "css": "background-color: #312E81;"
                },
                {
                    "class": ".to-purple-50",
                    "css": "background-color: #F5F3FF;"
                },
                {
                    "class": ".to-purple-100",
                    "css": "background-color: #EDE9FE;"
                },
                {
                    "class": ".to-purple-200",
                    "css": "background-color: #DDD6FE;"
                },
                {
                    "class": ".to-purple-300",
                    "css": "background-color: #C4B5FD;"
                },
                {
                    "class": ".to-purple-400",
                    "css": "background-color: #A78BFA;"
                },
                {
                    "class": ".to-purple-500",
                    "css": "background-color: #8B5CF6;"
                },
                {
                    "class": ".to-purple-600",
                    "css": "background-color: #7C3AED;"
                },
                {
                    "class": ".to-purple-700",
                    "css": "background-color: #6D28D9;"
                },
                {
                    "class": ".to-purple-800",
                    "css": "background-color: #5B21B6;"
                },
                {
                    "class": ".to-purple-900",
                    "css": "background-color: #4C1D95;"
                },
                {
                    "class": ".to-pink-50",
                    "css": "background-color: #FDF2F8;"
                },
                {
                    "class": ".to-pink-100",
                    "css": "background-color: #FCE7F3;"
                },
                {
                    "class": ".to-pink-200",
                    "css": "background-color: #FBCFE8;"
                },
                {
                    "class": ".to-pink-300",
                    "css": "background-color: #F9A8D4;"
                },
                {
                    "class": ".to-pink-400",
                    "css": "background-color: #F472B6;"
                },
                {
                    "class": ".to-pink-500",
                    "css": "background-color: #EC4899;"
                },
                {
                    "class": ".to-pink-600",
                    "css": "background-color: #DB2777;"
                },
                {
                    "class": ".to-pink-700",
                    "css": "background-color: #BE185D;"
                },
                {
                    "class": ".to-pink-800",
                    "css": "background-color: #9D174D;"
                },
                {
                    "class": ".to-pink-900",
                    "css": "background-color: #831843;"
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
                    "css": "filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);"
                },
                {
                    "class": ".filter-none",
                    "css": "filter: none;"
                }
            ]
        },
        {
            "title": "Blur",
            "classList": [
                {
                    "class": ".blur-none",
                    "css": "--tw-blur: blur(0);"
                },
                {
                    "class": ".blur-sm",
                    "css": "--tw-blur: blur(4px);"
                },
                {
                    "class": ".blur",
                    "css": "--tw-blur: blur(8px);"
                },
                {
                    "class": ".blur-md",
                    "css": "--tw-blur: blur(12px);"
                },
                {
                    "class": ".blur-lg",
                    "css": "--tw-blur: blur(16px);"
                },
                {
                    "class": ".blur-xl",
                    "css": "--tw-blur: blur(24px);"
                },
                {
                    "class": ".blur-2xl",
                    "css": "--tw-blur: blur(40px);"
                },
                {
                    "class": ".blur-3xl",
                    "css": "--tw-blur: blur(64px);"
                }
            ]
        },
        {
            "title": "Brightness",
            "classList": [
                {
                    "class": ".brightness-0",
                    "css": "brightness: brightness(0);"
                },
                {
                    "class": ".brightness-50",
                    "css": "brightness: brightness(.5);"
                },
                {
                    "class": ".brightness-75",
                    "css": "brightness: brightness(.75);"
                },
                {
                    "class": ".brightness-90",
                    "css": "brightness: brightness(.9);"
                },
                {
                    "class": ".brightness-95",
                    "css": "brightness: brightness(.95);"
                },
                {
                    "class": ".brightness-100",
                    "css": "brightness: brightness(1);"
                },
                {
                    "class": ".brightness-105",
                    "css": "brightness: brightness(1.05);"
                },
                {
                    "class": ".brightness-110",
                    "css": "brightness: brightness(1.1);"
                },
                {
                    "class": ".brightness-125",
                    "css": "brightness: brightness(1.25);"
                },
                {
                    "class": ".brightness-150",
                    "css": "brightness: brightness(1.5);"
                },
                {
                    "class": ".brightness-200",
                    "css": "brightness: brightness(2);"
                }
            ]
        },
        {
            "title": "Contrast",
            "classList": [
                {
                    "class": ".contrast-0",
                    "css": "contrast: contrast(0);"
                },
                {
                    "class": ".contrast-50",
                    "css": "contrast: contrast(.5);"
                },
                {
                    "class": ".contrast-75",
                    "css": "contrast: contrast(.75);"
                },
                {
                    "class": ".contrast-100",
                    "css": "contrast: contrast(1);"
                },
                {
                    "class": ".contrast-125",
                    "css": "contrast: contrast(1.25);"
                },
                {
                    "class": ".contrast-150",
                    "css": "contrast: contrast(1.5);"
                },
                {
                    "class": ".contrast-200",
                    "css": "contrast: contrast(2);"
                }
            ]
        },
        {
            "title": "Drop Shadow",
            "classList": [
                {
                    "class": ".drop-shadow-sm",
                    "css": ""
                },
                {
                    "class": ".drop-shadow",
                    "css": ""
                },
                {
                    "class": ".drop-shadow-md",
                    "css": ""
                },
                {
                    "class": ".drop-shadow-lg",
                    "css": ""
                },
                {
                    "class": ".drop-shadow-xl",
                    "css": ""
                },
                {
                    "class": ".drop-shadow-2xl",
                    "css": ""
                },
                {
                    "class": ".drop-shadow-none",
                    "css": "drop-shadow: drop-shadow: drop-shadow(0 0 #0000);"
                }
            ]
        },
        {
            "title": "Grayscale",
            "classList": [
                {
                    "class": ".grayscale-0",
                    "css": "grayscale: grayscale(0);"
                },
                {
                    "class": ".grayscale",
                    "css": "grayscale: grayscale(1);"
                }
            ]
        },
        {
            "title": "Hue Rotate",
            "classList": [
                {
                    "class": ".-hue-rotate-180",
                    "css": "hue-rotate: hue-rotate(-180deg);"
                },
                {
                    "class": ".-hue-rotate-90",
                    "css": "hue-rotate: hue-rotate(-90deg);"
                },
                {
                    "class": ".-hue-rotate-60",
                    "css": "hue-rotate: hue-rotate(-60deg);"
                },
                {
                    "class": ".-hue-rotate-30",
                    "css": "hue-rotate: hue-rotate(-30deg);"
                },
                {
                    "class": ".-hue-rotate-15",
                    "css": "hue-rotate: hue-rotate(-15deg);"
                },
                {
                    "class": ".hue-rotate-0",
                    "css": "hue-rotate: hue-rotate(0deg);"
                },
                {
                    "class": ".hue-rotate-15",
                    "css": "hue-rotate: hue-rotate(15deg);"
                },
                {
                    "class": ".hue-rotate-30",
                    "css": "hue-rotate: hue-rotate(30deg);"
                },
                {
                    "class": ".hue-rotate-60",
                    "css": "hue-rotate: hue-rotate(60deg);"
                },
                {
                    "class": ".hue-rotate-90",
                    "css": "hue-rotate: hue-rotate(90deg);"
                },
                {
                    "class": ".hue-rotate-180",
                    "css": "hue-rotate: hue-rotate(180deg);"
                }
            ]
        },
        {
            "title": "Invert",
            "classList": [
                {
                    "class": ".invert-0",
                    "css": "invert: invert(0);"
                },
                {
                    "class": ".invert",
                    "css": "invert: invert(1);"
                }
            ]
        },
        {
            "title": "Saturate",
            "classList": [
                {
                    "class": ".saturate-0",
                    "css": "saturate: saturate(0);"
                },
                {
                    "class": ".saturate-50",
                    "css": "saturate: saturate(.5);"
                },
                {
                    "class": ".saturate-100",
                    "css": "saturate: saturate(1);"
                },
                {
                    "class": ".saturate-150",
                    "css": "saturate: saturate(1.50);"
                },
                {
                    "class": ".saturate-200",
                    "css": "saturate: saturate(2);"
                }
            ]
        },
        {
            "title": "Sepia",
            "classList": [
                {
                    "class": ".sepia-0",
                    "css": "sepia: sepia(0);"
                },
                {
                    "class": ".sepia",
                    "css": "sepia: sepia(1);"
                }
            ]
        },
        {
            "title": "Backdrop Filter",
            "classList": [
                {
                    "class": ".backdrop-filter",
                    "css": "backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);"
                },
                {
                    "class": ".backdrop-filter-none",
                    "css": "backdrop-filter: none;"
                }
            ]
        },
        {
            "title": "Backdrop Blur",
            "classList": [
                {
                    "class": ".backdrop-blur-0",
                    "css": "backdrop-blur: blur(0);"
                },
                {
                    "class": ".backdrop-blur-sm",
                    "css": "backdrop-blur: blur(4px);"
                },
                {
                    "class": ".backdrop-blur",
                    "css": "backdrop-blur: blur(8px);"
                },
                {
                    "class": ".backdrop-blur-md",
                    "css": "backdrop-blur: blur(12px);"
                },
                {
                    "class": ".backdrop-blur-lg",
                    "css": "backdrop-blur: blur(16px);"
                },
                {
                    "class": ".backdrop-blur-xl",
                    "css": "backdrop-blur: blur(24px);"
                },
                {
                    "class": ".backdrop-blur-2xl",
                    "css": "backdrop-blur: blur(40px);"
                },
                {
                    "class": ".backdrop-blur-3xl",
                    "css": "backdrop-blur: blur(64px);"
                }
            ]
        },
        {
            "title": "Backdrop Brightness",
            "classList": [
                {
                    "class": ".backdrop-brightness-0",
                    "css": "backdrop-brightness: brightness(0);"
                },
                {
                    "class": ".backdrop-brightness-sm",
                    "css": "backdrop-brightness: brightness(4px);"
                },
                {
                    "class": ".backdrop-brightness",
                    "css": "backdrop-brightness: brightness(8px);"
                },
                {
                    "class": ".backdrop-brightness-md",
                    "css": "backdrop-brightness: brightness(12px);"
                },
                {
                    "class": ".backdrop-brightness-lg",
                    "css": "backdrop-brightness: brightness(16px);"
                },
                {
                    "class": ".backdrop-brightness-xl",
                    "css": "backdrop-brightness: brightness(24px);"
                },
                {
                    "class": ".backdrop-brightness-2xl",
                    "css": "backdrop-brightness: brightness(40px);"
                },
                {
                    "class": ".backdrop-brightness-3xl",
                    "css": "backdrop-brightness: brightness(64px);"
                }
            ]
        },
        {
            "title": "Backdrop Contrast",
            "classList": [
                {
                    "class": ".backdrop-contrast-0",
                    "css": "backdrop-contrast: contrast(0);"
                },
                {
                    "class": ".backdrop-contrast-50",
                    "css": "backdrop-contrast: contrast(.5);"
                },
                {
                    "class": ".backdrop-contrast-75",
                    "css": "backdrop-contrast: contrast(.75);"
                },
                {
                    "class": ".backdrop-contrast-100",
                    "css": "backdrop-contrast: contrast(1);"
                },
                {
                    "class": ".backdrop-contrast-125",
                    "css": "backdrop-contrast: contrast(1.25);"
                },
                {
                    "class": ".backdrop-contrast-150",
                    "css": "backdrop-contrast: contrast(1.5);"
                },
                {
                    "class": ".backdrop-contrast-200",
                    "css": "backdrop-contrast: contrast(2);"
                }
            ]
        },
        {
            "title": "Backdrop Grayscale",
            "classList": [
                {
                    "class": ".backdrop-grayscale-0",
                    "css": "backdrop-grayscale: grayscale(0);"
                },
                {
                    "class": ".backdrop-grayscale",
                    "css": "backdrop-grayscale: grayscale(1);"
                }
            ]
        },
        {
            "title": "Backdrop Hue Rotate",
            "classList": [
                {
                    "class": ".-backdrop-hue-rotate-180",
                    "css": "backdrop-hue-rotate: hue-rotate(-180deg);"
                },
                {
                    "class": ".-backdrop-hue-rotate-90",
                    "css": "backdrop-hue-rotate: hue-rotate(-90deg);"
                },
                {
                    "class": ".-backdrop-hue-rotate-60",
                    "css": "backdrop-hue-rotate: hue-rotate(-60deg);"
                },
                {
                    "class": ".-backdrop-hue-rotate-30",
                    "css": "backdrop-hue-rotate: hue-rotate(-30deg);"
                },
                {
                    "class": ".-backdrop-hue-rotate-15",
                    "css": "backdrop-hue-rotate: hue-rotate(-15deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-0",
                    "css": "backdrop-hue-rotate: hue-rotate(0deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-15",
                    "css": "backdrop-hue-rotate: hue-rotate(15deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-30",
                    "css": "backdrop-hue-rotate: hue-rotate(30deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-60",
                    "css": "backdrop-hue-rotate: hue-rotate(60deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-90",
                    "css": "backdrop-hue-rotate: hue-rotate(90deg);"
                },
                {
                    "class": ".backdrop-hue-rotate-180",
                    "css": "backdrop-hue-rotate: hue-rotate(180deg);"
                }
            ]
        },
        {
            "title": "Backdrop Invert",
            "classList": [
                {
                    "class": ".backdrop-invert-0",
                    "css": "backdrop-invert: invert(0);"
                },
                {
                    "class": ".backdrop-invert",
                    "css": "backdrop-invert: invert(1);"
                }
            ]
        },
        {
            "title": "Backdrop Opacity",
            "classList": [
                {
                    "class": ".backdrop-opacity-0",
                    "css": "backdrop-opacity: opacity(0);"
                },
                {
                    "class": ".backdrop-opacity-5",
                    "css": "backdrop-opacity: opacity(0.05);"
                },
                {
                    "class": ".backdrop-opacity-10",
                    "css": "backdrop-opacity: opacity(0.1);"
                },
                {
                    "class": ".backdrop-opacity-20",
                    "css": "backdrop-opacity: opacity(0.2);"
                },
                {
                    "class": ".backdrop-opacity-25",
                    "css": "backdrop-opacity: opacity(0.25);"
                },
                {
                    "class": ".backdrop-opacity-30",
                    "css": "backdrop-opacity: opacity(0.3);"
                },
                {
                    "class": ".backdrop-opacity-40",
                    "css": "backdrop-opacity: opacity(0.4);"
                },
                {
                    "class": ".backdrop-opacity-50",
                    "css": "backdrop-opacity: opacity(0.5);"
                },
                {
                    "class": ".backdrop-opacity-60",
                    "css": "backdrop-opacity: opacity(0.6);"
                },
                {
                    "class": ".backdrop-opacity-70",
                    "css": "backdrop-opacity: opacity(0.7);"
                },
                {
                    "class": ".backdrop-opacity-75",
                    "css": "backdrop-opacity: opacity(0.75);"
                },
                {
                    "class": ".backdrop-opacity-80",
                    "css": "backdrop-opacity: opacity(0.8);"
                },
                {
                    "class": ".backdrop-opacity-90",
                    "css": "backdrop-opacity: opacity(0.9);"
                },
                {
                    "class": ".backdrop-opacity-95",
                    "css": "backdrop-opacity: opacity(0.95);"
                },
                {
                    "class": ".backdrop-opacity-100",
                    "css": "backdrop-opacity: opacity(1);"
                }
            ]
        },
        {
            "title": "Backdrop Saturate",
            "classList": [
                {
                    "class": ".backdrop-saturate-0",
                    "css": "backdrop-saturate: saturate(0);"
                },
                {
                    "class": ".backdrop-saturate-50",
                    "css": "backdrop-saturate: saturate(.5);"
                },
                {
                    "class": ".backdrop-saturate-100",
                    "css": "backdrop-saturate: saturate(1);"
                },
                {
                    "class": ".backdrop-saturate-150",
                    "css": "backdrop-saturate: saturate(1.50);"
                },
                {
                    "class": ".backdrop-saturate-200",
                    "css": "backdrop-saturate: saturate(2);"
                }
            ]
        },
        {
            "title": "Backdrop Sepia",
            "classList": [
                {
                    "class": ".backdrop-sepia-0",
                    "css": "backdrop-sepia: sepia(0);"
                },
                {
                    "class": ".backdrop-sepia",
                    "css": "backdrop-sepia: sepia(1);"
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
                    "css": "transform-origin: center;"
                },
                {
                    "class": ".origin-top",
                    "css": "transform-origin: top;"
                },
                {
                    "class": ".origin-top-right",
                    "css": "transform-origin: top right;"
                },
                {
                    "class": ".origin-right",
                    "css": "transform-origin: right;"
                },
                {
                    "class": ".origin-bottom-right",
                    "css": "transform-origin: bottom right;"
                },
                {
                    "class": ".origin-bottom",
                    "css": "transform-origin: bottom;"
                },
                {
                    "class": ".origin-bottom-left",
                    "css": "transform-origin: bottom left;"
                },
                {
                    "class": ".origin-left",
                    "css": "transform-origin: left;"
                },
                {
                    "class": ".origin-top-left",
                    "css": "transform-origin: top left;"
                }
            ]
        },
        {
            "title": "Scale",
            "classList": [
                {
                    "class": ".scale-0",
                    "css": "--transform-scale-x: 0; --transform-scale-y: 0;"
                },
                {
                    "class": ".scale-50",
                    "css": "--transform-scale-x: .5; --transform-scale-y: .5;"
                },
                {
                    "class": ".scale-75",
                    "css": "--transform-scale-x: .75; --transform-scale-y: .75;"
                },
                {
                    "class": ".scale-90",
                    "css": "--transform-scale-x: .9; --transform-scale-y: .9;"
                },
                {
                    "class": ".scale-95",
                    "css": "--transform-scale-x: .95; --transform-scale-y: .95;"
                },
                {
                    "class": ".scale-100",
                    "css": "--transform-scale-x: 1; --transform-scale-y: 1;"
                },
                {
                    "class": ".scale-105",
                    "css": "--transform-scale-x: 1.05; --transform-scale-y: 1.05;"
                },
                {
                    "class": ".scale-110",
                    "css": "--transform-scale-x: 1.1; --transform-scale-y: 1.1;"
                },
                {
                    "class": ".scale-125",
                    "css": "--transform-scale-x: 1.25; --transform-scale-y: 1.25;"
                },
                {
                    "class": ".scale-150",
                    "css": "--transform-scale-x: 1.5; --transform-scale-y: 1.5;"
                },
                {
                    "class": ".scale-x-0",
                    "css": "--transform-scale-x: 0;"
                },
                {
                    "class": ".scale-x-50",
                    "css": "--transform-scale-x: .5;"
                },
                {
                    "class": ".scale-x-75",
                    "css": "--transform-scale-x: .75;"
                },
                {
                    "class": ".scale-x-90",
                    "css": "--transform-scale-x: .9;"
                },
                {
                    "class": ".scale-x-95",
                    "css": "--transform-scale-x: .95;"
                },
                {
                    "class": ".scale-x-100",
                    "css": "--transform-scale-x: 1;"
                },
                {
                    "class": ".scale-x-105",
                    "css": "--transform-scale-x: 1.05;"
                },
                {
                    "class": ".scale-x-110",
                    "css": "--transform-scale-x: 1.1;"
                },
                {
                    "class": ".scale-x-125",
                    "css": "--transform-scale-x: 1.25;"
                },
                {
                    "class": ".scale-x-150",
                    "css": "--transform-scale-x: 1.5;"
                },
                {
                    "class": ".scale-y-0",
                    "css": "--transform-scale-y: 0;"
                },
                {
                    "class": ".scale-y-50",
                    "css": "--transform-scale-y: .5;"
                },
                {
                    "class": ".scale-y-75",
                    "css": "--transform-scale-y: .75;"
                },
                {
                    "class": ".scale-y-90",
                    "css": "--transform-scale-y: .9;"
                },
                {
                    "class": ".scale-y-95",
                    "css": "--transform-scale-y: .95;"
                },
                {
                    "class": ".scale-y-100",
                    "css": "--transform-scale-y: 1;"
                },
                {
                    "class": ".scale-y-105",
                    "css": "--transform-scale-y: 1.05;"
                },
                {
                    "class": ".scale-y-110",
                    "css": "--transform-scale-y: 1.1;"
                },
                {
                    "class": ".scale-y-125",
                    "css": "--transform-scale-y: 1.25;"
                },
                {
                    "class": ".scale-y-150",
                    "css": "--transform-scale-y: 1.5;"
                }
            ]
        },
        {
            "title": "Rotate",
            "classList": [
                {
                    "class": ".rotate-0",
                    "css": "--transform-rotate: 0;"
                },
                {
                    "class": ".rotate-1",
                    "css": "--transform-rotate: 1deg;"
                },
                {
                    "class": ".rotate-2",
                    "css": "--transform-rotate: 2deg;"
                },
                {
                    "class": ".rotate-3",
                    "css": "--transform-rotate: 3deg;"
                },
                {
                    "class": ".rotate-6",
                    "css": "--transform-rotate: 6deg;"
                },
                {
                    "class": ".rotate-12",
                    "css": "--transform-rotate: 12deg;"
                },
                {
                    "class": ".rotate-45",
                    "css": "--transform-rotate: 45deg;"
                },
                {
                    "class": ".rotate-90",
                    "css": "--transform-rotate: 90deg;"
                },
                {
                    "class": ".rotate-180",
                    "css": "--transform-rotate: 180deg;"
                },
                {
                    "class": ".-rotate-180",
                    "css": "--transform-rotate: -180deg;"
                },
                {
                    "class": ".-rotate-90",
                    "css": "--transform-rotate: -90deg;"
                },
                {
                    "class": ".-rotate-45",
                    "css": "--transform-rotate: -45deg;"
                },
                {
                    "class": ".-rotate-12",
                    "css": "--transform-rotate: -12deg;"
                },
                {
                    "class": ".-rotate-6",
                    "css": "--transform-rotate: -6deg;"
                },
                {
                    "class": ".-rotate-3",
                    "css": "--transform-rotate: -3deg;"
                },
                {
                    "class": ".-rotate-2",
                    "css": "--transform-rotate: -2deg;"
                },
                {
                    "class": ".-rotate-1",
                    "css": "--transform-rotate: -1deg;"
                }
            ]
        },
        {
            "title": "Translate",
            "classList": [
                {
                    "class": ".translate-x-0",
                    "css": "--transform-translate-x: 0;"
                },
                {
                    "class": ".translate-x-0.5",
                    "css": "--transform-translate-x: 0.125rem;"
                },
                {
                    "class": ".translate-x-1",
                    "css": "--transform-translate-x: 0.25rem;"
                },
                {
                    "class": ".translate-x-1.5",
                    "css": "--transform-translate-x: 0.375rem;"
                },
                {
                    "class": ".translate-x-2",
                    "css": "--transform-translate-x: 0.5rem;"
                },
                {
                    "class": ".translate-x-2.5",
                    "css": "--transform-translate-x: 0.625rem;"
                },
                {
                    "class": ".translate-x-3",
                    "css": "--transform-translate-x: 0.75rem;"
                },
                {
                    "class": ".translate-x-3.5",
                    "css": "--transform-translate-x: 0.875rem;"
                },
                {
                    "class": ".translate-x-4",
                    "css": "--transform-translate-x: 1rem;"
                },
                {
                    "class": ".translate-x-5",
                    "css": "--transform-translate-x: 1.25rem;"
                },
                {
                    "class": ".translate-x-6",
                    "css": "--transform-translate-x: 1.5rem;"
                },
                {
                    "class": ".translate-x-7",
                    "css": "--transform-translate-x: 1.75rem;"
                },
                {
                    "class": ".translate-x-8",
                    "css": "--transform-translate-x: 2rem;"
                },
                {
                    "class": ".translate-x-9",
                    "css": "--transform-translate-x: 2.25rem;"
                },
                {
                    "class": ".translate-x-10",
                    "css": "--transform-translate-x: 2.5rem;"
                },
                {
                    "class": ".translate-x-11",
                    "css": "--transform-translate-x: 2.75rem;"
                },
                {
                    "class": ".translate-x-12",
                    "css": "--transform-translate-x: 3rem;"
                },
                {
                    "class": ".translate-x-14",
                    "css": "--transform-translate-x: 3.5rem;"
                },
                {
                    "class": ".translate-x-16",
                    "css": "--transform-translate-x: 4rem;"
                },
                {
                    "class": ".translate-x-20",
                    "css": "--transform-translate-x: 5rem;"
                },
                {
                    "class": ".translate-x-24",
                    "css": "--transform-translate-x: 6rem;"
                },
                {
                    "class": ".translate-x-28",
                    "css": "--transform-translate-x: 7rem;"
                },
                {
                    "class": ".translate-x-32",
                    "css": "--transform-translate-x: 8rem;"
                },
                {
                    "class": ".translate-x-36",
                    "css": "--transform-translate-x: 8rem;"
                },
                {
                    "class": ".translate-x-40",
                    "css": "--transform-translate-x: 10rem;"
                },
                {
                    "class": ".translate-x-44",
                    "css": "--transform-translate-x: 11rem;"
                },
                {
                    "class": ".translate-x-48",
                    "css": "--transform-translate-x: 12rem;"
                },
                {
                    "class": ".translate-x-52",
                    "css": "--transform-translate-x: 13rem;"
                },
                {
                    "class": ".translate-x-56",
                    "css": "--transform-translate-x: 14rem;"
                },
                {
                    "class": ".translate-x-60",
                    "css": "--transform-translate-x: 15rem;"
                },
                {
                    "class": ".translate-x-64",
                    "css": "--transform-translate-x: 16rem;"
                },
                {
                    "class": ".translate-x-72",
                    "css": "--transform-translate-x: 18rem;"
                },
                {
                    "class": ".translate-x-80",
                    "css": "--transform-translate-x: 20rem;"
                },
                {
                    "class": ".translate-x-96",
                    "css": "--transform-translate-x: 24rem;"
                },
                {
                    "class": ".translate-x-px",
                    "css": "--transform-translate-x: 1px;"
                },
                {
                    "class": ".translate-x-1/2",
                    "css": "--transform-translate-x: 50%;"
                },
                {
                    "class": ".translate-x-1/3",
                    "css": "--transform-translate-x: 33.333333%;"
                },
                {
                    "class": ".translate-x-2/3",
                    "css": "--transform-translate-x: 66.6666666%;"
                },
                {
                    "class": ".translate-x-1/4",
                    "css": "--transform-translate-x: 25%;"
                },
                {
                    "class": ".translate-x-2/4",
                    "css": "--transform-translate-x: 50%;"
                },
                {
                    "class": ".translate-x-3/4",
                    "css": "--transform-translate-x: 75%;"
                },
                {
                    "class": ".translate-x-full",
                    "css": "--transform-translate-x: 100%;"
                },
                {
                    "class": ".-translate-x-0",
                    "css": "--transform-translate-x: 0;"
                },
                {
                    "class": ".-translate-x-0.5",
                    "css": "--transform-translate-x: -0.125rem;"
                },
                {
                    "class": ".-translate-x-1",
                    "css": "--transform-translate-x: -0.25rem;"
                },
                {
                    "class": ".-translate-x-1.5",
                    "css": "--transform-translate-x: -0.375rem;"
                },
                {
                    "class": ".-translate-x-2",
                    "css": "--transform-translate-x: -0.5rem;"
                },
                {
                    "class": ".-translate-x-2.5",
                    "css": "--transform-translate-x: -0.625rem;"
                },
                {
                    "class": ".-translate-x-3",
                    "css": "--transform-translate-x: -0.75rem;"
                },
                {
                    "class": ".-translate-x-3.5",
                    "css": "--transform-translate-x: -0.875rem;"
                },
                {
                    "class": ".-translate-x-4",
                    "css": "--transform-translate-x: -1rem;"
                },
                {
                    "class": ".-translate-x-5",
                    "css": "--transform-translate-x: -1.25rem;"
                },
                {
                    "class": ".-translate-x-6",
                    "css": "--transform-translate-x: -1.5rem;"
                },
                {
                    "class": ".-translate-x-7",
                    "css": "--transform-translate-x: -1.75rem;"
                },
                {
                    "class": ".-translate-x-8",
                    "css": "--transform-translate-x: -2rem;"
                },
                {
                    "class": ".-translate-x-9",
                    "css": "--transform-translate-x: -2.25rem;"
                },
                {
                    "class": ".-translate-x-10",
                    "css": "--transform-translate-x: -2.5rem;"
                },
                {
                    "class": ".-translate-x-11",
                    "css": "--transform-translate-x: -2.75rem;"
                },
                {
                    "class": ".-translate-x-12",
                    "css": "--transform-translate-x: -3rem;"
                },
                {
                    "class": ".-translate-x-14",
                    "css": "--transform-translate-x: -3.5rem;"
                },
                {
                    "class": ".-translate-x-16",
                    "css": "--transform-translate-x: -4rem;"
                },
                {
                    "class": ".-translate-x-20",
                    "css": "--transform-translate-x: -5rem;"
                },
                {
                    "class": ".-translate-x-24",
                    "css": "--transform-translate-x: -6rem;"
                },
                {
                    "class": ".-translate-x-28",
                    "css": "--transform-translate-x: -7rem;"
                },
                {
                    "class": ".-translate-x-32",
                    "css": "--transform-translate-x: -8rem;"
                },
                {
                    "class": ".-translate-x-36",
                    "css": "--transform-translate-x: -8rem;"
                },
                {
                    "class": ".-translate-x-40",
                    "css": "--transform-translate-x: -10rem;"
                },
                {
                    "class": ".-translate-x-44",
                    "css": "--transform-translate-x: -11rem;"
                },
                {
                    "class": ".-translate-x-48",
                    "css": "--transform-translate-x: -12rem;"
                },
                {
                    "class": ".-translate-x-52",
                    "css": "--transform-translate-x: -13rem;"
                },
                {
                    "class": ".-translate-x-56",
                    "css": "--transform-translate-x: -14rem;"
                },
                {
                    "class": ".-translate-x-60",
                    "css": "--transform-translate-x: -15rem;"
                },
                {
                    "class": ".-translate-x-64",
                    "css": "--transform-translate-x: -16rem;"
                },
                {
                    "class": ".-translate-x-72",
                    "css": "--transform-translate-x: -18rem;"
                },
                {
                    "class": ".-translate-x-80",
                    "css": "--transform-translate-x: -20rem;"
                },
                {
                    "class": ".-translate-x-96",
                    "css": "--transform-translate-x: -24rem;"
                },
                {
                    "class": ".-translate-x-px",
                    "css": "--transform-translate-x: -1px;"
                },
                {
                    "class": ".-translate-x-1/2",
                    "css": "--transform-translate-x: -50%;"
                },
                {
                    "class": ".-translate-x-1/3",
                    "css": "--transform-translate-x: -33.333333%;"
                },
                {
                    "class": ".-translate-x-2/3",
                    "css": "--transform-translate-x: -66.6666666%;"
                },
                {
                    "class": ".-translate-x-1/4",
                    "css": "--transform-translate-x: -25%;"
                },
                {
                    "class": ".-translate-x-2/4",
                    "css": "--transform-translate-x: -50%;"
                },
                {
                    "class": ".-translate-x-3/4",
                    "css": "--transform-translate-x: -75%;"
                },
                {
                    "class": ".-translate-x-full",
                    "css": "--transform-translate-x: -100%;"
                },
                {
                    "class": ".translate-y-0",
                    "css": "--transform-translate-y: 0;"
                },
                {
                    "class": ".translate-y-0.5",
                    "css": "--transform-translate-y: 0.125rem;"
                },
                {
                    "class": ".translate-y-1",
                    "css": "--transform-translate-y: 0.25rem;"
                },
                {
                    "class": ".translate-y-1.5",
                    "css": "--transform-translate-y: 0.375rem;"
                },
                {
                    "class": ".translate-y-2",
                    "css": "--transform-translate-y: 0.5rem;"
                },
                {
                    "class": ".translate-y-2.5",
                    "css": "--transform-translate-y: 0.625rem;"
                },
                {
                    "class": ".translate-y-3",
                    "css": "--transform-translate-y: 0.75rem;"
                },
                {
                    "class": ".translate-y-3.5",
                    "css": "--transform-translate-y: 0.875rem;"
                },
                {
                    "class": ".translate-y-4",
                    "css": "--transform-translate-y: 1rem;"
                },
                {
                    "class": ".translate-y-5",
                    "css": "--transform-translate-y: 1.25rem;"
                },
                {
                    "class": ".translate-y-6",
                    "css": "--transform-translate-y: 1.5rem;"
                },
                {
                    "class": ".translate-y-7",
                    "css": "--transform-translate-y: 1.75rem;"
                },
                {
                    "class": ".translate-y-8",
                    "css": "--transform-translate-y: 2rem;"
                },
                {
                    "class": ".translate-y-9",
                    "css": "--transform-translate-y: 2.25rem;"
                },
                {
                    "class": ".translate-y-10",
                    "css": "--transform-translate-y: 2.5rem;"
                },
                {
                    "class": ".translate-y-11",
                    "css": "--transform-translate-y: 2.75rem;"
                },
                {
                    "class": ".translate-y-12",
                    "css": "--transform-translate-y: 3rem;"
                },
                {
                    "class": ".translate-y-14",
                    "css": "--transform-translate-y: 3.5rem;"
                },
                {
                    "class": ".translate-y-16",
                    "css": "--transform-translate-y: 4rem;"
                },
                {
                    "class": ".translate-y-20",
                    "css": "--transform-translate-y: 5rem;"
                },
                {
                    "class": ".translate-y-24",
                    "css": "--transform-translate-y: 6rem;"
                },
                {
                    "class": ".translate-y-28",
                    "css": "--transform-translate-y: 7rem;"
                },
                {
                    "class": ".translate-y-32",
                    "css": "--transform-translate-y: 8rem;"
                },
                {
                    "class": ".translate-y-36",
                    "css": "--transform-translate-y: 8rem;"
                },
                {
                    "class": ".translate-y-40",
                    "css": "--transform-translate-y: 10rem;"
                },
                {
                    "class": ".translate-y-44",
                    "css": "--transform-translate-y: 11rem;"
                },
                {
                    "class": ".translate-y-48",
                    "css": "--transform-translate-y: 12rem;"
                },
                {
                    "class": ".translate-y-52",
                    "css": "--transform-translate-y: 13rem;"
                },
                {
                    "class": ".translate-y-56",
                    "css": "--transform-translate-y: 14rem;"
                },
                {
                    "class": ".translate-y-60",
                    "css": "--transform-translate-y: 15rem;"
                },
                {
                    "class": ".translate-y-64",
                    "css": "--transform-translate-y: 16rem;"
                },
                {
                    "class": ".translate-y-72",
                    "css": "--transform-translate-y: 18rem;"
                },
                {
                    "class": ".translate-y-80",
                    "css": "--transform-translate-y: 20rem;"
                },
                {
                    "class": ".translate-y-96",
                    "css": "--transform-translate-y: 24rem;"
                },
                {
                    "class": ".translate-y-px",
                    "css": "--transform-translate-y: 1px;"
                },
                {
                    "class": ".translate-y-1/2",
                    "css": "--transform-translate-y: 50%;"
                },
                {
                    "class": ".translate-y-1/3",
                    "css": "--transform-translate-y: 33.333333%;"
                },
                {
                    "class": ".translate-y-2/3",
                    "css": "--transform-translate-y: 66.6666666%;"
                },
                {
                    "class": ".translate-y-1/4",
                    "css": "--transform-translate-y: 25%;"
                },
                {
                    "class": ".translate-y-2/4",
                    "css": "--transform-translate-y: 50%;"
                },
                {
                    "class": ".translate-y-3/4",
                    "css": "--transform-translate-y: 75%;"
                },
                {
                    "class": ".translate-y-full",
                    "css": "--transform-translate-y: 100%;"
                },
                {
                    "class": ".-translate-y-0",
                    "css": "--transform-translate-y: 0;"
                },
                {
                    "class": ".-translate-y-0.5",
                    "css": "--transform-translate-y: -0.125rem;"
                },
                {
                    "class": ".-translate-y-1",
                    "css": "--transform-translate-y: -0.25rem;"
                },
                {
                    "class": ".-translate-y-1.5",
                    "css": "--transform-translate-y: -0.375rem;"
                },
                {
                    "class": ".-translate-y-2",
                    "css": "--transform-translate-y: -0.5rem;"
                },
                {
                    "class": ".-translate-y-2.5",
                    "css": "--transform-translate-y: -0.625rem;"
                },
                {
                    "class": ".-translate-y-3",
                    "css": "--transform-translate-y: -0.75rem;"
                },
                {
                    "class": ".-translate-y-3.5",
                    "css": "--transform-translate-y: -0.875rem;"
                },
                {
                    "class": ".-translate-y-4",
                    "css": "--transform-translate-y: -1rem;"
                },
                {
                    "class": ".-translate-y-5",
                    "css": "--transform-translate-y: -1.25rem;"
                },
                {
                    "class": ".-translate-y-6",
                    "css": "--transform-translate-y: -1.5rem;"
                },
                {
                    "class": ".-translate-y-7",
                    "css": "--transform-translate-y: -1.75rem;"
                },
                {
                    "class": ".-translate-y-8",
                    "css": "--transform-translate-y: -2rem;"
                },
                {
                    "class": ".-translate-y-9",
                    "css": "--transform-translate-y: -2.25rem;"
                },
                {
                    "class": ".-translate-y-10",
                    "css": "--transform-translate-y: -2.5rem;"
                },
                {
                    "class": ".-translate-y-11",
                    "css": "--transform-translate-y: -2.75rem;"
                },
                {
                    "class": ".-translate-y-12",
                    "css": "--transform-translate-y: -3rem;"
                },
                {
                    "class": ".-translate-y-14",
                    "css": "--transform-translate-y: -3.5rem;"
                },
                {
                    "class": ".-translate-y-16",
                    "css": "--transform-translate-y: -4rem;"
                },
                {
                    "class": ".-translate-y-20",
                    "css": "--transform-translate-y: -5rem;"
                },
                {
                    "class": ".-translate-y-24",
                    "css": "--transform-translate-y: -6rem;"
                },
                {
                    "class": ".-translate-y-28",
                    "css": "--transform-translate-y: -7rem;"
                },
                {
                    "class": ".-translate-y-32",
                    "css": "--transform-translate-y: -8rem;"
                },
                {
                    "class": ".-translate-y-36",
                    "css": "--transform-translate-y: -8rem;"
                },
                {
                    "class": ".-translate-y-40",
                    "css": "--transform-translate-y: -10rem;"
                },
                {
                    "class": ".-translate-y-44",
                    "css": "--transform-translate-y: -11rem;"
                },
                {
                    "class": ".-translate-y-48",
                    "css": "--transform-translate-y: -12rem;"
                },
                {
                    "class": ".-translate-y-52",
                    "css": "--transform-translate-y: -13rem;"
                },
                {
                    "class": ".-translate-y-56",
                    "css": "--transform-translate-y: -14rem;"
                },
                {
                    "class": ".-translate-y-60",
                    "css": "--transform-translate-y: -15rem;"
                },
                {
                    "class": ".-translate-y-64",
                    "css": "--transform-translate-y: -16rem;"
                },
                {
                    "class": ".-translate-y-72",
                    "css": "--transform-translate-y: -18rem;"
                },
                {
                    "class": ".-translate-y-80",
                    "css": "--transform-translate-y: -20rem;"
                },
                {
                    "class": ".-translate-y-96",
                    "css": "--transform-translate-y: -24rem;"
                },
                {
                    "class": ".-translate-y-px",
                    "css": "--transform-translate-y: -1px;"
                },
                {
                    "class": ".-translate-y-1/2",
                    "css": "--transform-translate-y: -50%;"
                },
                {
                    "class": ".-translate-y-1/3",
                    "css": "--transform-translate-y: -33.333333%;"
                },
                {
                    "class": ".-translate-y-2/3",
                    "css": "--transform-translate-y: -66.6666666%;"
                },
                {
                    "class": ".-translate-y-1/4",
                    "css": "--transform-translate-y: -25%;"
                },
                {
                    "class": ".-translate-y-2/4",
                    "css": "--transform-translate-y: -50%;"
                },
                {
                    "class": ".-translate-y-3/4",
                    "css": "--transform-translate-y: -75%;"
                },
                {
                    "class": ".-translate-y-full",
                    "css": "--transform-translate-y: -100%;"
                }
            ]
        },
        {
            "title": "Skew",
            "classList": [
                {
                    "class": ".skew-x-0",
                    "css": "--transform-skew-x: 0;"
                },
                {
                    "class": ".skew-x-1",
                    "css": "--transform-skew-x: 1deg;"
                },
                {
                    "class": ".skew-x-2",
                    "css": "--transform-skew-x: 2deg;"
                },
                {
                    "class": ".skew-x-3",
                    "css": "--transform-skew-x: 3deg;"
                },
                {
                    "class": ".skew-x-6",
                    "css": "--transform-skew-x: 6deg;"
                },
                {
                    "class": ".skew-x-12",
                    "css": "--transform-skew-x: 12deg;"
                },
                {
                    "class": ".-skew-x-12",
                    "css": "--transform-skew-x: -12deg;"
                },
                {
                    "class": ".-skew-x-6",
                    "css": "--transform-skew-x: -6deg;"
                },
                {
                    "class": ".-skew-x-3",
                    "css": "--transform-skew-x: -3deg;"
                },
                {
                    "class": ".-skew-x-2",
                    "css": "--transform-skew-x: -2deg;"
                },
                {
                    "class": ".-skew-x-1",
                    "css": "--transform-skew-x: -1deg;"
                },
                {
                    "class": ".skew-y-0",
                    "css": "--transform-skew-y: 0;"
                },
                {
                    "class": ".skew-y-1",
                    "css": "--transform-skew-y: 1deg;"
                },
                {
                    "class": ".skew-y-2",
                    "css": "--transform-skew-y: 2deg;"
                },
                {
                    "class": ".skew-y-3",
                    "css": "--transform-skew-y: 3deg;"
                },
                {
                    "class": ".skew-y-6",
                    "css": "--transform-skew-y: 6deg;"
                },
                {
                    "class": ".skew-y-12",
                    "css": "--transform-skew-y: 12deg;"
                },
                {
                    "class": ".-skew-y-12",
                    "css": "--transform-skew-y: -12deg;"
                },
                {
                    "class": ".-skew-y-6",
                    "css": "--transform-skew-y: -6deg;"
                },
                {
                    "class": ".-skew-y-3",
                    "css": "--transform-skew-y: -3deg;"
                },
                {
                    "class": ".-skew-y-2",
                    "css": "--transform-skew-y: -2deg;"
                },
                {
                    "class": ".-skew-y-1",
                    "css": "--transform-skew-x: -1deg;"
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
                    "css": "justify-content: flex-start;"
                },
                {
                    "class": ".justify-center",
                    "css": "justify-content: center;"
                },
                {
                    "class": ".justify-end",
                    "css": "justify-content: flex-end;"
                },
                {
                    "class": ".justify-between",
                    "css": "justify-content: space-between;"
                },
                {
                    "class": ".justify-around",
                    "css": "justify-content: space-around;"
                },
                {
                    "class": ".justify-evenly",
                    "css": "justify-content: space-evenly;"
                }
            ]
        },
        {
            "title": "Justify Items",
            "classList": [
                {
                    "class": ".justify-items-stretch",
                    "css": "justify-items: stretch;"
                },
                {
                    "class": ".justify-items-start",
                    "css": "justify-items: start;"
                },
                {
                    "class": ".justify-items-center",
                    "css": "justify-items: center;"
                },
                {
                    "class": ".justify-items-end",
                    "css": "justify-items: end;"
                },
                {
                    "class": ".justify-items-auto",
                    "css": "justify-items: auto;"
                }
            ]
        },
        {
            "title": "Justify Self",
            "classList": [
                {
                    "class": ".justify-self-stretch",
                    "css": "justify-self: stretch;"
                },
                {
                    "class": ".justify-self-start",
                    "css": "justify-self: start;"
                },
                {
                    "class": ".justify-self-center",
                    "css": "justify-self: center;"
                },
                {
                    "class": ".justify-self-end",
                    "css": "justify-self: end;"
                },
                {
                    "class": ".justify-self-auto",
                    "css": "justify-self: auto;"
                }
            ]
        },
        {
            "title": "Align Content",
            "classList": [
                {
                    "class": ".content-start",
                    "css": "align-content: flex-start;"
                },
                {
                    "class": ".content-center",
                    "css": "align-content: center;"
                },
                {
                    "class": ".content-end",
                    "css": "align-content: flex-end;"
                },
                {
                    "class": ".content-between",
                    "css": "align-content: space-between;"
                },
                {
                    "class": ".content-around",
                    "css": "align-content: space-around;"
                },
                {
                    "class": ".content-evenly",
                    "css": "align-content: space-evenly;"
                }
            ]
        },
        {
            "title": "Align Items",
            "classList": [
                {
                    "class": ".items-stretch",
                    "css": "align-items: stretch;"
                },
                {
                    "class": ".items-start",
                    "css": "align-items: flex-start;"
                },
                {
                    "class": ".items-center",
                    "css": "align-items: center;"
                },
                {
                    "class": ".items-end",
                    "css": "align-items: flex-end;"
                },
                {
                    "class": ".items-baseline",
                    "css": "align-items: baseline;"
                }
            ]
        },
        {
            "title": "Align Self",
            "classList": [
                {
                    "class": ".self-auto",
                    "css": "align-self: auto;"
                },
                {
                    "class": ".self-start",
                    "css": "align-self: flex-start;"
                },
                {
                    "class": ".self-center",
                    "css": "align-self: center;"
                },
                {
                    "class": ".self-end",
                    "css": "align-self: flex-end;"
                },
                {
                    "class": ".self-stretch",
                    "css": "align-self: stretch;"
                },
                {
                    "class": ".self-baseline",
                    "css": "align-self: baseline;"
                }
            ]
        },
        {
            "title": "Place Content",
            "classList": [
                {
                    "class": ".place-content-start",
                    "css": "place-content: start;"
                },
                {
                    "class": ".place-content-center",
                    "css": "place-content: center;"
                },
                {
                    "class": ".place-content-end",
                    "css": "place-content: end;"
                },
                {
                    "class": ".place-content-between",
                    "css": "place-content: space-between;"
                },
                {
                    "class": ".place-content-around",
                    "css": "place-content: space-around;"
                },
                {
                    "class": ".place-content-evenly",
                    "css": "place-content: space-evenly;"
                }
            ]
        },
        {
            "title": "Place Items",
            "classList": [
                {
                    "class": ".place-items-stretch",
                    "css": "place-items: stretch;"
                },
                {
                    "class": ".place-items-start",
                    "css": "place-items: start;"
                },
                {
                    "class": ".place-items-center",
                    "css": "place-items: center;"
                },
                {
                    "class": ".place-items-end",
                    "css": "place-items: end;"
                }
            ]
        },
        {
            "title": "Place Self",
            "classList": [
                {
                    "class": ".place-self-auto",
                    "css": "place-self: auto;"
                },
                {
                    "class": ".place-self-start",
                    "css": "place-self: start;"
                },
                {
                    "class": ".place-self-center",
                    "css": "place-self: center;"
                },
                {
                    "class": ".place-self-end",
                    "css": "place-self: end;"
                },
                {
                    "class": ".place-self-stretch",
                    "css": "place-self: stretch;"
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
                    "css": "display: flex;"
                },
                {
                    "class": ".inline-flex",
                    "css": "display: inline-flex;"
                }
            ]
        },
        {
            "title": "Flex Direction",
            "classList": [
                {
                    "class": ".flex-row",
                    "css": "flex-direction: row;"
                },
                {
                    "class": ".flex-row-reverse",
                    "css": "flex-direction: row-reverse;"
                },
                {
                    "class": ".flex-col",
                    "css": "flex-direction: column;"
                },
                {
                    "class": ".flex-col-reverse",
                    "css": "flex-direction: column-reverse;"
                }
            ]
        },
        {
            "title": "Flex Wrap",
            "classList": [
                {
                    "class": ".flex-nowrap",
                    "css": "flex-wrap: nowrap;"
                },
                {
                    "class": ".flex-wrap",
                    "css": "flex-wrap: wrap;"
                },
                {
                    "class": ".flex-wrap-reverse",
                    "css": "flex-wrap: wrap-reverse;"
                }
            ]
        },
        {
            "title": "Flex",
            "classList": [
                {
                    "class": ".flex-1",
                    "css": "flex: 1 1 0%;"
                },
                {
                    "class": ".flex-auto",
                    "css": "flex: 1 1 auto;"
                },
                {
                    "class": ".flex-initial",
                    "css": "flex: 0 1 auto;"
                },
                {
                    "class": ".flex-none",
                    "css": "flex: none;"
                }
            ]
        },
        {
            "title": "Flex Grow",
            "classList": [
                {
                    "class": ".flex-grow",
                    "css": "flex-grow: 1;"
                },
                {
                    "class": ".flex-grow-0",
                    "css": "flex-grow: 0;"
                }
            ]
        },
        {
            "title": "Flex Shrink",
            "classList": [
                {
                    "class": ".flex-shrink",
                    "css": "flex-shrink: 1;"
                },
                {
                    "class": ".flex-shrink-0",
                    "css": "flex-shrink: 0;"
                }
            ]
        },
        {
            "title": "Order",
            "classList": [
                {
                    "class": ".order-first",
                    "css": "order: -9999;"
                },
                {
                    "class": ".order-last",
                    "css": "order: 9999;"
                },
                {
                    "class": ".order-none",
                    "css": "order: 0;"
                },
                {
                    "class": ".order-1",
                    "css": "order: 1;"
                },
                {
                    "class": ".order-2",
                    "css": "order: 2;"
                },
                {
                    "class": ".order-3",
                    "css": "order: 3;"
                },
                {
                    "class": ".order-4",
                    "css": "order: 4;"
                },
                {
                    "class": ".order-5",
                    "css": "order: 5;"
                },
                {
                    "class": ".order-6",
                    "css": "order: 6;"
                },
                {
                    "class": ".order-7",
                    "css": "order: 7;"
                },
                {
                    "class": ".order-8",
                    "css": "order: 8;"
                },
                {
                    "class": ".order-9",
                    "css": "order: 9;"
                },
                {
                    "class": ".order-10",
                    "css": "order: 10;"
                },
                {
                    "class": ".order-11",
                    "css": "order: 11;"
                },
                {
                    "class": ".order-12",
                    "css": "order: 12;"
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
                    "css": "width: 0;"
                },
                {
                    "class": ".w-0.5",
                    "css": "width: 0.125rem;"
                },
                {
                    "class": ".w-1",
                    "css": "width: 0.25rem;"
                },
                {
                    "class": ".w-1.5",
                    "css": "width: 0.375rem;"
                },
                {
                    "class": ".w-2",
                    "css": "width: 0.5rem;"
                },
                {
                    "class": ".w-2.5",
                    "css": "width: 0.625rem;"
                },
                {
                    "class": ".w-3",
                    "css": "width: 0.75rem;"
                },
                {
                    "class": ".w-3.5",
                    "css": "width: 0.875rem;"
                },
                {
                    "class": ".w-4",
                    "css": "width: 1rem;"
                },
                {
                    "class": ".w-5",
                    "css": "width: 1.25rem;"
                },
                {
                    "class": ".w-6",
                    "css": "width: 1.5rem;"
                },
                {
                    "class": ".w-8",
                    "css": "width: 2rem;"
                },
                {
                    "class": ".w-10",
                    "css": "width: 2.5rem;"
                },
                {
                    "class": ".w-11",
                    "css": "width: 2.75rem;"
                },
                {
                    "class": ".w-12",
                    "css": "width: 3rem;"
                },
                {
                    "class": ".w-14",
                    "css": "width: 3.5rem;"
                },
                {
                    "class": ".w-16",
                    "css": "width: 4rem;"
                },
                {
                    "class": ".w-20",
                    "css": "width: 5rem;"
                },
                {
                    "class": ".w-24",
                    "css": "width: 6rem;"
                },
                {
                    "class": ".w-28",
                    "css": "width: 7rem;"
                },
                {
                    "class": ".w-32",
                    "css": "width: 8rem;"
                },
                {
                    "class": ".w-36",
                    "css": "width: 9rem;"
                },
                {
                    "class": ".w-40",
                    "css": "width: 10rem;"
                },
                {
                    "class": ".w-44",
                    "css": "width: 11rem;"
                },
                {
                    "class": ".w-48",
                    "css": "width: 12rem;"
                },
                {
                    "class": ".w-52",
                    "css": "width: 13rem;"
                },
                {
                    "class": ".w-56",
                    "css": "width: 14rem;"
                },
                {
                    "class": ".w-64",
                    "css": "width: 16rem;"
                },
                {
                    "class": ".w-72",
                    "css": "width: 18rem;"
                },
                {
                    "class": ".w-80",
                    "css": "width: 20rem;"
                },
                {
                    "class": ".w-96",
                    "css": "width: 24rem;"
                },
                {
                    "class": ".w-px",
                    "css": "width: 1px;"
                },
                {
                    "class": ".w-auto",
                    "css": "width: auto;"
                },
                {
                    "class": ".w-1/2",
                    "css": "width: 50%;"
                },
                {
                    "class": ".w-1/3",
                    "css": "width: 33.333333%;"
                },
                {
                    "class": ".w-2/3",
                    "css": "width: 66.666667%;"
                },
                {
                    "class": ".w-1/4",
                    "css": "width: 25%;"
                },
                {
                    "class": ".w-2/4",
                    "css": "width: 50%;"
                },
                {
                    "class": ".w-3/4",
                    "css": "width: 75%;"
                },
                {
                    "class": ".w-1/5",
                    "css": "width: 20%;"
                },
                {
                    "class": ".w-2/5",
                    "css": "width: 40%;"
                },
                {
                    "class": ".w-3/5",
                    "css": "width: 60%;"
                },
                {
                    "class": ".w-4/5",
                    "css": "width: 80%;"
                },
                {
                    "class": ".w-1/6",
                    "css": "width: 16.666667%;"
                },
                {
                    "class": ".w-2/6",
                    "css": "width: 33.333333%;"
                },
                {
                    "class": ".w-3/6",
                    "css": "width: 50%;"
                },
                {
                    "class": ".w-4/6",
                    "css": "width: 66.666667%;"
                },
                {
                    "class": ".w-5/6",
                    "css": "width: 83.333333%;"
                },
                {
                    "class": ".w-1/12",
                    "css": "width: 8.333333%;"
                },
                {
                    "class": ".w-2/12",
                    "css": "width: 16.666667%;"
                },
                {
                    "class": ".w-3/12",
                    "css": "width: 25%;"
                },
                {
                    "class": ".w-4/12",
                    "css": "width: 33.333333%;"
                },
                {
                    "class": ".w-5/12",
                    "css": "width: 41.666667%;"
                },
                {
                    "class": ".w-6/12",
                    "css": "width: 50%;"
                },
                {
                    "class": ".w-7/12",
                    "css": "width: 58.333333%;"
                },
                {
                    "class": ".w-8/12",
                    "css": "width: 66.666667%;"
                },
                {
                    "class": ".w-9/12",
                    "css": "width: 75%;"
                },
                {
                    "class": ".w-10/12",
                    "css": "width: 83.333333%;"
                },
                {
                    "class": ".w-11/12",
                    "css": "width: 91.666667%;"
                },
                {
                    "class": ".w-full",
                    "css": "width: 100%;"
                },
                {
                    "class": ".w-screen",
                    "css": "width: 100vw;"
                },
                {
                    "class": ".w-min",
                    "css": "width: min-content;"
                },
                {
                    "class": ".w-max",
                    "css": "width: max-content;"
                }
            ]
        },
        {
            "title": "Min Width",
            "classList": [
                {
                    "class": ".min-w-0",
                    "css": "min-width: 0;"
                },
                {
                    "class": ".min-w-full",
                    "css": "min-width: 100%;"
                },
                {
                    "class": ".min-w-min",
                    "css": "min-width: min-content;"
                },
                {
                    "class": ".min-w-max",
                    "css": "min-width: max-content;"
                }
            ]
        },
        {
            "title": "Max Width",
            "classList": [
                {
                    "class": ".max-w-0",
                    "css": "max-width: 0rem;"
                },
                {
                    "class": ".max-w-none",
                    "css": "max-width: none;"
                },
                {
                    "class": ".max-w-xs",
                    "css": "max-width: 20rem;"
                },
                {
                    "class": ".max-w-sm",
                    "css": "max-width: 24rem;"
                },
                {
                    "class": ".max-w-md",
                    "css": "max-width: 28rem;"
                },
                {
                    "class": ".max-w-lg",
                    "css": "max-width: 32rem;"
                },
                {
                    "class": ".max-w-xl",
                    "css": "max-width: 36rem;"
                },
                {
                    "class": ".max-w-2xl",
                    "css": "max-width: 42rem;"
                },
                {
                    "class": ".max-w-3xl",
                    "css": "max-width: 48rem;"
                },
                {
                    "class": ".max-w-4xl",
                    "css": "max-width: 56rem;"
                },
                {
                    "class": ".max-w-5xl",
                    "css": "max-width: 64rem;"
                },
                {
                    "class": ".max-w-6xl",
                    "css": "max-width: 72rem;"
                },
                {
                    "class": ".max-w-7xl",
                    "css": "max-width: 80rem;"
                },
                {
                    "class": ".max-w-full",
                    "css": "max-width: 100%;"
                },
                {
                    "class": ".max-w-min",
                    "css": "max-width: min-content;"
                },
                {
                    "class": ".max-w-max",
                    "css": "max-width: max-content;"
                },
                {
                    "class": ".max-w-prose",
                    "css": "max-width: 65ch;"
                },
                {
                    "class": ".max-w-screen-sm",
                    "css": "max-width: 640px;"
                },
                {
                    "class": ".max-w-screen-md",
                    "css": "max-width: 768px;"
                },
                {
                    "class": ".max-w-screen-lg",
                    "css": "max-width: 1024px;"
                },
                {
                    "class": ".max-w-screen-xl",
                    "css": "max-width: 1280px;"
                },
                {
                    "class": ".max-w-screen-2xl",
                    "css": "max-width: 1536px;"
                }
            ]
        },
        {
            "title": "Height",
            "classList": [
                {
                    "class": ".h-0",
                    "css": "height: 0;"
                },
                {
                    "class": ".h-0.5",
                    "css": "height: 0.125rem;"
                },
                {
                    "class": ".h-1",
                    "css": "height: 0.25rem;"
                },
                {
                    "class": ".h-1.5",
                    "css": "height: 0.375rem;"
                },
                {
                    "class": ".h-2",
                    "css": "height: 0.5rem;"
                },
                {
                    "class": ".h-2.5",
                    "css": "height: 0.625rem;"
                },
                {
                    "class": ".h-3",
                    "css": "height: 0.75rem;"
                },
                {
                    "class": ".h-3.5",
                    "css": "height: 0.875rem;"
                },
                {
                    "class": ".h-4",
                    "css": "height: 1rem;"
                },
                {
                    "class": ".h-5",
                    "css": "height: 1.25rem;"
                },
                {
                    "class": ".h-6",
                    "css": "height: 1.5rem;"
                },
                {
                    "class": ".h-8",
                    "css": "height: 2rem;"
                },
                {
                    "class": ".h-10",
                    "css": "height: 2.5rem;"
                },
                {
                    "class": ".h-11",
                    "css": "height: 2.75rem;"
                },
                {
                    "class": ".h-12",
                    "css": "height: 3rem;"
                },
                {
                    "class": ".h-14",
                    "css": "height: 3.5rem;"
                },
                {
                    "class": ".h-16",
                    "css": "height: 4rem;"
                },
                {
                    "class": ".h-20",
                    "css": "height: 5rem;"
                },
                {
                    "class": ".h-24",
                    "css": "height: 6rem;"
                },
                {
                    "class": ".h-28",
                    "css": "height: 7rem;"
                },
                {
                    "class": ".h-32",
                    "css": "height: 8rem;"
                },
                {
                    "class": ".h-36",
                    "css": "height: 9rem;"
                },
                {
                    "class": ".h-40",
                    "css": "height: 10rem;"
                },
                {
                    "class": ".h-44",
                    "css": "height: 11rem;"
                },
                {
                    "class": ".h-48",
                    "css": "height: 12rem;"
                },
                {
                    "class": ".h-52",
                    "css": "height: 13rem;"
                },
                {
                    "class": ".h-56",
                    "css": "height: 14rem;"
                },
                {
                    "class": ".h-64",
                    "css": "height: 16rem;"
                },
                {
                    "class": ".h-72",
                    "css": "height: 18rem;"
                },
                {
                    "class": ".h-80",
                    "css": "height: 20rem;"
                },
                {
                    "class": ".h-96",
                    "css": "height: 24rem;"
                },
                {
                    "class": ".h-px",
                    "css": "height: 1px;"
                },
                {
                    "class": ".h-auto",
                    "css": "height: auto;"
                },
                {
                    "class": ".h-1/2",
                    "css": "height: 50%;"
                },
                {
                    "class": ".h-1/3",
                    "css": "height: 33.333333%;"
                },
                {
                    "class": ".h-2/3",
                    "css": "height: 66.666667%;"
                },
                {
                    "class": ".h-1/4",
                    "css": "height: 25%;"
                },
                {
                    "class": ".h-2/4",
                    "css": "height: 50%;"
                },
                {
                    "class": ".h-3/4",
                    "css": "height: 75%;"
                },
                {
                    "class": ".h-1/5",
                    "css": "height: 20%;"
                },
                {
                    "class": ".h-2/5",
                    "css": "height: 40%;"
                },
                {
                    "class": ".h-3/5",
                    "css": "height: 60%;"
                },
                {
                    "class": ".h-4/5",
                    "css": "height: 80%;"
                },
                {
                    "class": ".h-1/6",
                    "css": "height: 16.666667%;"
                },
                {
                    "class": ".h-2/6",
                    "css": "height: 33.333333%;"
                },
                {
                    "class": ".h-3/6",
                    "css": "height: 50%;"
                },
                {
                    "class": ".h-4/6",
                    "css": "height: 66.666667%;"
                },
                {
                    "class": ".h-5/6",
                    "css": "height: 83.333333%;"
                },
                {
                    "class": ".h-full",
                    "css": "height: 100%;"
                },
                {
                    "class": ".h-screen",
                    "css": "height: 100vh;"
                }
            ]
        },
        {
            "title": "Min Height",
            "classList": [
                {
                    "class": ".min-h-0",
                    "css": "min-height: 0;"
                },
                {
                    "class": ".min-h-full",
                    "css": "min-height: 100%;"
                },
                {
                    "class": ".min-h-screen",
                    "css": "min-height: 100vh;"
                }
            ]
        },
        {
            "title": "Max Height",
            "classList": [
                {
                    "class": ".max-h-0",
                    "css": "max-height: 0;"
                },
                {
                    "class": ".max-h-0.5",
                    "css": "max-height: 0.125rem;"
                },
                {
                    "class": ".max-h-1",
                    "css": "max-height: 0.25rem;"
                },
                {
                    "class": ".max-h-1.5",
                    "css": "max-height: 0.375rem;"
                },
                {
                    "class": ".max-h-2",
                    "css": "max-height: 0.5rem;"
                },
                {
                    "class": ".max-h-2.5",
                    "css": "max-height: 0.625rem;"
                },
                {
                    "class": ".max-h-3",
                    "css": "max-height: 0.75rem;"
                },
                {
                    "class": ".max-h-3.5",
                    "css": "max-height: 0.875rem;"
                },
                {
                    "class": ".max-h-4",
                    "css": "max-height: 1rem;"
                },
                {
                    "class": ".max-h-5",
                    "css": "max-height: 1.25rem;"
                },
                {
                    "class": ".max-h-6",
                    "css": "max-height: 1.5rem;"
                },
                {
                    "class": ".max-h-8",
                    "css": "max-height: 2rem;"
                },
                {
                    "class": ".max-h-10",
                    "css": "max-height: 2.5rem;"
                },
                {
                    "class": ".max-h-11",
                    "css": "max-height: 2.75rem;"
                },
                {
                    "class": ".max-h-12",
                    "css": "max-height: 3rem;"
                },
                {
                    "class": ".max-h-14",
                    "css": "max-height: 3.5rem;"
                },
                {
                    "class": ".max-h-16",
                    "css": "max-height: 4rem;"
                },
                {
                    "class": ".max-h-20",
                    "css": "max-height: 5rem;"
                },
                {
                    "class": ".max-h-24",
                    "css": "max-height: 6rem;"
                },
                {
                    "class": ".max-h-28",
                    "css": "max-height: 7rem;"
                },
                {
                    "class": ".max-h-32",
                    "css": "max-height: 8rem;"
                },
                {
                    "class": ".max-h-36",
                    "css": "max-height: 9rem;"
                },
                {
                    "class": ".max-h-40",
                    "css": "max-height: 10rem;"
                },
                {
                    "class": ".max-h-44",
                    "css": "max-height: 11rem;"
                },
                {
                    "class": ".max-h-48",
                    "css": "max-height: 12rem;"
                },
                {
                    "class": ".max-h-52",
                    "css": "max-height: 13rem;"
                },
                {
                    "class": ".max-h-56",
                    "css": "max-height: 14rem;"
                },
                {
                    "class": ".max-h-64",
                    "css": "max-height: 16rem;"
                },
                {
                    "class": ".max-h-72",
                    "css": "max-height: 18rem;"
                },
                {
                    "class": ".max-h-80",
                    "css": "max-height: 20rem;"
                },
                {
                    "class": ".max-h-96",
                    "css": "max-height: 24rem;"
                },
                {
                    "class": ".max-h-px",
                    "css": "max-height: 1px;"
                },
                {
                    "class": ".max-h-full",
                    "css": "max-height: 100%;"
                },
                {
                    "class": ".max-h-screen",
                    "css": "max-height: 100vh;"
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
                    "css": "border-radius: 0;"
                },
                {
                    "class": ".rounded-sm",
                    "css": "border-radius: 0.125rem;"
                },
                {
                    "class": ".rounded",
                    "css": "border-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-md",
                    "css": "border-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-lg",
                    "css": "border-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-xl",
                    "css": "border-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-2xl",
                    "css": "border-radius: 1rem;"
                },
                {
                    "class": ".rounded-3xl",
                    "css": "border-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-full",
                    "css": "border-radius: 9999px;"
                },
                {
                    "class": ".rounded-t-none",
                    "css": "border-top-left-radius: 0; border-top-right-radius: 0;"
                },
                {
                    "class": ".rounded-r-none",
                    "css": "border-top-right-radius: 0; border-bottom-right-radius: 0;"
                },
                {
                    "class": ".rounded-b-none",
                    "css": "border-bottom-right-radius: 0; border-bottom-left-radius: 0;"
                },
                {
                    "class": ".rounded-l-none",
                    "css": "border-top-left-radius: 0; border-bottom-left-radius: 0;"
                },
                {
                    "class": ".rounded-t-sm",
                    "css": "border-top-left-radius: 0.125rem; border-top-right-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-r-sm",
                    "css": "border-top-right-radius: 0.125rem; border-bottom-right-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-b-sm",
                    "css": "border-bottom-right-radius: 0.125rem; border-bottom-left-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-l-sm",
                    "css": "border-top-left-radius: 0.125rem; border-bottom-left-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-t",
                    "css": "border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-r",
                    "css": "border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-b",
                    "css": "border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-l",
                    "css": "border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-t-md",
                    "css": "border-top-left-radius: 0.375rem; border-top-right-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-r-md",
                    "css": "border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-b-md",
                    "css": "border-bottom-right-radius: 0.375rem; border-bottom-left-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-l-md",
                    "css": "border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-t-lg",
                    "css": "border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-r-lg",
                    "css": "border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-b-lg",
                    "css": "border-bottom-right-radius: 0.5rem; border-bottom-left-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-l-lg",
                    "css": "border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-t-xl",
                    "css": "border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-r-xl",
                    "css": "border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-b-xl",
                    "css": "border-bottom-right-radius: 0.75rem; border-bottom-left-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-l-xl",
                    "css": "border-top-left-radius: 0.75rem; border-bottom-left-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-t-2xl",
                    "css": "border-top-left-radius: 1rem; border-top-right-radius: 1rem;"
                },
                {
                    "class": ".rounded-r-2xl",
                    "css": "border-top-right-radius: 1rem; border-bottom-right-radius: 1rem;"
                },
                {
                    "class": ".rounded-b-2xl",
                    "css": "border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;"
                },
                {
                    "class": ".rounded-l-2xl",
                    "css": "border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;"
                },
                {
                    "class": ".rounded-t-3xl",
                    "css": "border-top-left-radius: 1.5rem; border-top-right-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-r-3xl",
                    "css": "border-top-right-radius: 1.5rem; border-bottom-right-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-b-3xl",
                    "css": "border-bottom-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-l-3xl",
                    "css": "border-top-left-radius: 1.5rem; border-bottom-left-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-t-full",
                    "css": "border-top-left-radius: 9999px; border-top-right-radius: 9999px;"
                },
                {
                    "class": ".rounded-r-full",
                    "css": "border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;"
                },
                {
                    "class": ".rounded-b-full",
                    "css": "border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;"
                },
                {
                    "class": ".rounded-l-full",
                    "css": "border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;"
                },
                {
                    "class": ".rounded-tl-none",
                    "css": "border-top-left-radius: 0;"
                },
                {
                    "class": ".rounded-tr-none",
                    "css": "border-top-right-radius: 0;"
                },
                {
                    "class": ".rounded-br-none",
                    "css": "border-bottom-right-radius: 0;"
                },
                {
                    "class": ".rounded-bl-none",
                    "css": "border-bottom-left-radius: 0;"
                },
                {
                    "class": ".rounded-tl-sm",
                    "css": "border-top-left-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-tr-sm",
                    "css": "border-top-right-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-br-sm",
                    "css": "border-bottom-right-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-bl-sm",
                    "css": "border-bottom-left-radius: 0.125rem;"
                },
                {
                    "class": ".rounded-tl",
                    "css": "border-top-left-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-tr",
                    "css": "border-top-right-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-br",
                    "css": "border-bottom-right-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-bl",
                    "css": "border-bottom-left-radius: 0.25rem;"
                },
                {
                    "class": ".rounded-tl-md",
                    "css": "border-top-left-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-tr-md",
                    "css": "border-top-right-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-br-md",
                    "css": "border-bottom-right-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-bl-md",
                    "css": "border-bottom-left-radius: 0.375rem;"
                },
                {
                    "class": ".rounded-tl-lg",
                    "css": "border-top-left-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-tr-lg",
                    "css": "border-top-right-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-br-lg",
                    "css": "border-bottom-right-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-bl-lg",
                    "css": "border-bottom-left-radius: 0.5rem;"
                },
                {
                    "class": ".rounded-tl-xl",
                    "css": "border-top-left-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-tr-xl",
                    "css": "border-top-right-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-br-xl",
                    "css": "border-bottom-right-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-bl-xl",
                    "css": "border-bottom-left-radius: 0.75rem;"
                },
                {
                    "class": ".rounded-tl-2xl",
                    "css": "border-top-left-radius: 1rem;"
                },
                {
                    "class": ".rounded-tr-2xl",
                    "css": "border-top-right-radius: 1rem;"
                },
                {
                    "class": ".rounded-br-2xl",
                    "css": "border-bottom-right-radius: 1rem;"
                },
                {
                    "class": ".rounded-bl-2xl",
                    "css": "border-bottom-left-radius: 1rem;"
                },
                {
                    "class": ".rounded-tl-3xl",
                    "css": "border-top-left-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-tr-3xl",
                    "css": "border-top-right-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-br-3xl",
                    "css": "border-bottom-right-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-bl-3xl",
                    "css": "border-bottom-left-radius: 1.5rem;"
                },
                {
                    "class": ".rounded-tl-full",
                    "css": "border-top-left-radius: 9999px;"
                },
                {
                    "class": ".rounded-tr-full",
                    "css": "border-top-right-radius: 9999px;"
                },
                {
                    "class": ".rounded-br-full",
                    "css": "border-bottom-right-radius: 9999px;"
                },
                {
                    "class": ".rounded-bl-full",
                    "css": "border-bottom-left-radius: 9999px;"
                }
            ]
        },
        {
            "title": "Border Width",
            "classList": [
                {
                    "class": ".border",
                    "css": "border-width: 1px;"
                },
                {
                    "class": ".border-0",
                    "css": "border-width: 0;"
                },
                {
                    "class": ".border-2",
                    "css": "border-width: 2px;"
                },
                {
                    "class": ".border-4",
                    "css": "border-width: 4px;"
                },
                {
                    "class": ".border-8",
                    "css": "border-width: 8px;"
                },
                {
                    "class": ".border-t",
                    "css": "border-top-width: 1px;"
                },
                {
                    "class": ".border-t-0",
                    "css": "border-top-width: 0;"
                },
                {
                    "class": ".border-t-2",
                    "css": "border-top-width: 2px;"
                },
                {
                    "class": ".border-t-4",
                    "css": "border-top-width: 4px;"
                },
                {
                    "class": ".border-t-8",
                    "css": "border-top-width: 8px;"
                },
                {
                    "class": ".border-r",
                    "css": "border-right-width: 1px;"
                },
                {
                    "class": ".border-r-0",
                    "css": "border-right-width: 0;"
                },
                {
                    "class": ".border-r-2",
                    "css": "border-right-width: 2px;"
                },
                {
                    "class": ".border-r-4",
                    "css": "border-right-width: 4px;"
                },
                {
                    "class": ".border-r-8",
                    "css": "border-right-width: 8px;"
                },
                {
                    "class": ".border-b",
                    "css": "border-bottom-width: 1px;"
                },
                {
                    "class": ".border-b-0",
                    "css": "border-bottom-width: 0;"
                },
                {
                    "class": ".border-b-2",
                    "css": "border-bottom-width: 2px;"
                },
                {
                    "class": ".border-b-4",
                    "css": "border-bottom-width: 4px;"
                },
                {
                    "class": ".border-b-8",
                    "css": "border-bottom-width: 8px;"
                },
                {
                    "class": ".border-l",
                    "css": "border-left-width: 1px;"
                },
                {
                    "class": ".border-l-0",
                    "css": "border-left-width: 0;"
                },
                {
                    "class": ".border-l-2",
                    "css": "border-left-width: 2px;"
                },
                {
                    "class": ".border-l-4",
                    "css": "border-left-width: 4px;"
                },
                {
                    "class": ".border-l-8",
                    "css": "border-left-width: 8px;"
                }
            ]
        },
        {
            "title": "Border Color",
            "classList": [
                {
                    "class": ".border-transparent",
                    "css": "border-color: transparent;"
                },
                {
                    "class": ".border-current",
                    "css": "border-color: currentColor;"
                },
                {
                    "class": ".border-black",
                    "css": "border-color: #000000;"
                },
                {
                    "class": ".border-white",
                    "css": "border-color: #ffffff;"
                },
                {
                    "class": ".border-gray-50",
                    "css": "border-color: #F9FAFB;"
                },
                {
                    "class": ".border-gray-100",
                    "css": "border-color: #F3F4F6;"
                },
                {
                    "class": ".border-gray-200",
                    "css": "border-color: #E5E7EB;"
                },
                {
                    "class": ".border-gray-300",
                    "css": "border-color: #D1D5DB;"
                },
                {
                    "class": ".border-gray-400",
                    "css": "border-color: #9CA3AF;"
                },
                {
                    "class": ".border-gray-500",
                    "css": "border-color: #6B7280;"
                },
                {
                    "class": ".border-gray-600",
                    "css": "border-color: #4B5563;"
                },
                {
                    "class": ".border-gray-700",
                    "css": "border-color: #374151;"
                },
                {
                    "class": ".border-gray-800",
                    "css": "border-color: #1F2937;"
                },
                {
                    "class": ".border-gray-900",
                    "css": "border-color: #111827;"
                },
                {
                    "class": ".border-red-50",
                    "css": "border-color: #FEF2F2;"
                },
                {
                    "class": ".border-red-100",
                    "css": "border-color: #FEE2E2;"
                },
                {
                    "class": ".border-red-200",
                    "css": "border-color: #FECACA;"
                },
                {
                    "class": ".border-red-300",
                    "css": "border-color: #FCA5A5;"
                },
                {
                    "class": ".border-red-400",
                    "css": "border-color: #F87171;"
                },
                {
                    "class": ".border-red-500",
                    "css": "border-color: #EF4444;"
                },
                {
                    "class": ".border-red-600",
                    "css": "border-color: #DC2626;"
                },
                {
                    "class": ".border-red-700",
                    "css": "border-color: #B91C1C;"
                },
                {
                    "class": ".border-red-800",
                    "css": "border-color: #991B1B;"
                },
                {
                    "class": ".border-red-900",
                    "css": "border-color: #7F1D1D;"
                },
                {
                    "class": ".border-yellow-50",
                    "css": "border-color: #FFFBEB;"
                },
                {
                    "class": ".border-yellow-100",
                    "css": "border-color: #FEF3C7;"
                },
                {
                    "class": ".border-yellow-200",
                    "css": "border-color: #FDE68A;"
                },
                {
                    "class": ".border-yellow-300",
                    "css": "border-color: #FCD34D;"
                },
                {
                    "class": ".border-yellow-400",
                    "css": "border-color: #FBBF24;"
                },
                {
                    "class": ".border-yellow-500",
                    "css": "border-color: #F59E0B;"
                },
                {
                    "class": ".border-yellow-600",
                    "css": "border-color: #D97706;"
                },
                {
                    "class": ".border-yellow-700",
                    "css": "border-color: #B45309;"
                },
                {
                    "class": ".border-yellow-800",
                    "css": "border-color: #92400E;"
                },
                {
                    "class": ".border-yellow-900",
                    "css": "border-color: #78350F;"
                },
                {
                    "class": ".border-green-50",
                    "css": "border-color: #ECFDF5;"
                },
                {
                    "class": ".border-green-100",
                    "css": "border-color: #D1FAE5;"
                },
                {
                    "class": ".border-green-200",
                    "css": "border-color: #A7F3D0;"
                },
                {
                    "class": ".border-green-300",
                    "css": "border-color: #6EE7B7;"
                },
                {
                    "class": ".border-green-400",
                    "css": "border-color: #34D399;"
                },
                {
                    "class": ".border-green-500",
                    "css": "border-color: #10B981;"
                },
                {
                    "class": ".border-green-600",
                    "css": "border-color: #059669;"
                },
                {
                    "class": ".border-green-700",
                    "css": "border-color: #047857;"
                },
                {
                    "class": ".border-green-800",
                    "css": "border-color: #065F46;"
                },
                {
                    "class": ".border-green-900",
                    "css": "border-color: #064E3B;"
                },
                {
                    "class": ".border-blue-50",
                    "css": "border-color: #EFF6FF;"
                },
                {
                    "class": ".border-blue-100",
                    "css": "border-color: #DBEAFE;"
                },
                {
                    "class": ".border-blue-200",
                    "css": "border-color: #BFDBFE;"
                },
                {
                    "class": ".border-blue-300",
                    "css": "border-color: #93C5FD;"
                },
                {
                    "class": ".border-blue-400",
                    "css": "border-color: #60A5FA;"
                },
                {
                    "class": ".border-blue-500",
                    "css": "border-color: #3B82F6;"
                },
                {
                    "class": ".border-blue-600",
                    "css": "border-color: #2563EB;"
                },
                {
                    "class": ".border-blue-700",
                    "css": "border-color: #1D4ED8;"
                },
                {
                    "class": ".border-blue-800",
                    "css": "border-color: #1E40AF;"
                },
                {
                    "class": ".border-blue-900",
                    "css": "border-color: #1E3A8A;"
                },
                {
                    "class": ".border-indigo-50",
                    "css": "border-color: #EEF2FF;"
                },
                {
                    "class": ".border-indigo-100",
                    "css": "border-color: #E0E7FF;"
                },
                {
                    "class": ".border-indigo-200",
                    "css": "border-color: #C7D2FE;"
                },
                {
                    "class": ".border-indigo-300",
                    "css": "border-color: #A5B4FC;"
                },
                {
                    "class": ".border-indigo-400",
                    "css": "border-color: #818CF8;"
                },
                {
                    "class": ".border-indigo-500",
                    "css": "border-color: #6366F1;"
                },
                {
                    "class": ".border-indigo-600",
                    "css": "border-color: #4F46E5;"
                },
                {
                    "class": ".border-indigo-700",
                    "css": "border-color: #4338CA;"
                },
                {
                    "class": ".border-indigo-800",
                    "css": "border-color: #3730A3;"
                },
                {
                    "class": ".border-indigo-900",
                    "css": "border-color: #312E81;"
                },
                {
                    "class": ".border-purple-50",
                    "css": "border-color: #F5F3FF;"
                },
                {
                    "class": ".border-purple-100",
                    "css": "border-color: #EDE9FE;"
                },
                {
                    "class": ".border-purple-200",
                    "css": "border-color: #DDD6FE;"
                },
                {
                    "class": ".border-purple-300",
                    "css": "border-color: #C4B5FD;"
                },
                {
                    "class": ".border-purple-400",
                    "css": "border-color: #A78BFA;"
                },
                {
                    "class": ".border-purple-500",
                    "css": "border-color: #8B5CF6;"
                },
                {
                    "class": ".border-purple-600",
                    "css": "border-color: #7C3AED;"
                },
                {
                    "class": ".border-purple-700",
                    "css": "border-color: #6D28D9;"
                },
                {
                    "class": ".border-purple-800",
                    "css": "border-color: #5B21B6;"
                },
                {
                    "class": ".border-purple-900",
                    "css": "border-color: #4C1D95;"
                },
                {
                    "class": ".border-pink-50",
                    "css": "border-color: #FDF2F8;"
                },
                {
                    "class": ".border-pink-100",
                    "css": "border-color: #FCE7F3;"
                },
                {
                    "class": ".border-pink-200",
                    "css": "border-color: #FBCFE8;"
                },
                {
                    "class": ".border-pink-300",
                    "css": "border-color: #F9A8D4;"
                },
                {
                    "class": ".border-pink-400",
                    "css": "border-color: #F472B6;"
                },
                {
                    "class": ".border-pink-500",
                    "css": "border-color: #EC4899;"
                },
                {
                    "class": ".border-pink-600",
                    "css": "border-color: #DB2777;"
                },
                {
                    "class": ".border-pink-700",
                    "css": "border-color: #BE185D;"
                },
                {
                    "class": ".border-pink-800",
                    "css": "border-color: #9D174D;"
                },
                {
                    "class": ".border-pink-900",
                    "css": "border-color: #831843;"
                }
            ]
        },
        {
            "title": "Border Opacity",
            "classList": [
                {
                    "class": ".border-opacity-0",
                    "css": "border-opacity: 0;"
                },
                {
                    "class": ".border-opacity-5",
                    "css": "border-opacity: 0.05;"
                },
                {
                    "class": ".border-opacity-10",
                    "css": "border-opacity: 0.1;"
                },
                {
                    "class": ".border-opacity-20",
                    "css": "border-opacity: 0.2;"
                },
                {
                    "class": ".border-opacity-25",
                    "css": "border-opacity: 0.25;"
                },
                {
                    "class": ".border-opacity-30",
                    "css": "border-opacity: 0.3;"
                },
                {
                    "class": ".border-opacity-40",
                    "css": "border-opacity: 0.4;"
                },
                {
                    "class": ".border-opacity-50",
                    "css": "border-opacity: 0.5;"
                },
                {
                    "class": ".border-opacity-60",
                    "css": "border-opacity: 0.6;"
                },
                {
                    "class": ".border-opacity-70",
                    "css": "border-opacity: 0.7;"
                },
                {
                    "class": ".border-opacity-75",
                    "css": "border-opacity: 0.75;"
                },
                {
                    "class": ".border-opacity-80",
                    "css": "border-opacity: 0.8;"
                },
                {
                    "class": ".border-opacity-90",
                    "css": "border-opacity: 0.9;"
                },
                {
                    "class": ".border-opacity-100",
                    "css": "border-opacity: 1;"
                }
            ]
        },
        {
            "title": "Border Style",
            "classList": [
                {
                    "class": ".border-solid",
                    "css": "border-style: solid;"
                },
                {
                    "class": ".border-dashed",
                    "css": "border-style: dashed;"
                },
                {
                    "class": ".border-dotted",
                    "css": "border-style: dotted;"
                },
                {
                    "class": ".border-double",
                    "css": "border-style: double;"
                },
                {
                    "class": ".border-none",
                    "css": "border-style: none;"
                }
            ]
        },
        {
            "title": "Divide Width",
            "classList": [
                {
                    "class": ".divide-x-0",
                    "css": "border-left-width: 0;"
                },
                {
                    "class": ".divide-x-2",
                    "css": "border-left-width: 2px;"
                },
                {
                    "class": ".divide-x-4",
                    "css": "border-left-width: 4px;"
                },
                {
                    "class": ".divide-x-8",
                    "css": "border-left-width: 8px;"
                },
                {
                    "class": ".divide-x",
                    "css": "border-left-width: 1px;"
                },
                {
                    "class": ".divide-y-0",
                    "css": "border-top-width: 0;"
                },
                {
                    "class": ".divide-y-2",
                    "css": "border-top-width: 2px;"
                },
                {
                    "class": ".divide-y-4",
                    "css": "border-top-width: 4px;"
                },
                {
                    "class": ".divide-y-8",
                    "css": "border-top-width: 8px;"
                },
                {
                    "class": ".divide-y",
                    "css": "border-top-width: 1px;"
                },
                {
                    "class": ".divide-x-reverse",
                    "css": "--divide-x-reverse: 1"
                },
                {
                    "class": ".divide-y-reverse",
                    "css": "--divide-y-reverse: 1"
                }
            ]
        },
        {
            "title": "Divide Color",
            "classList": [
                {
                    "class": ".divide-transparent",
                    "css": "border-color: transparent;"
                },
                {
                    "class": ".divide-current",
                    "css": "border-color: currentColor;"
                },
                {
                    "class": ".divide-black",
                    "css": "border-color: #000000;"
                },
                {
                    "class": ".divide-white",
                    "css": "border-color: #ffffff;"
                },
                {
                    "class": ".divide-gray-50",
                    "css": "border-color: #F9FAFB;"
                },
                {
                    "class": ".divide-gray-100",
                    "css": "border-color: #F3F4F6;"
                },
                {
                    "class": ".divide-gray-200",
                    "css": "border-color: #E5E7EB;"
                },
                {
                    "class": ".divide-gray-300",
                    "css": "border-color: #D1D5DB;"
                },
                {
                    "class": ".divide-gray-400",
                    "css": "border-color: #9CA3AF;"
                },
                {
                    "class": ".divide-gray-500",
                    "css": "border-color: #6B7280;"
                },
                {
                    "class": ".divide-gray-600",
                    "css": "border-color: #4B5563;"
                },
                {
                    "class": ".divide-gray-700",
                    "css": "border-color: #374151;"
                },
                {
                    "class": ".divide-gray-800",
                    "css": "border-color: #1F2937;"
                },
                {
                    "class": ".divide-gray-900",
                    "css": "border-color: #111827;"
                },
                {
                    "class": ".divide-red-50",
                    "css": "border-color: #FEF2F2;"
                },
                {
                    "class": ".divide-red-100",
                    "css": "border-color: #FEE2E2;"
                },
                {
                    "class": ".divide-red-200",
                    "css": "border-color: #FECACA;"
                },
                {
                    "class": ".divide-red-300",
                    "css": "border-color: #FCA5A5;"
                },
                {
                    "class": ".divide-red-400",
                    "css": "border-color: #F87171;"
                },
                {
                    "class": ".divide-red-500",
                    "css": "border-color: #EF4444;"
                },
                {
                    "class": ".divide-red-600",
                    "css": "border-color: #DC2626;"
                },
                {
                    "class": ".divide-red-700",
                    "css": "border-color: #B91C1C;"
                },
                {
                    "class": ".divide-red-800",
                    "css": "border-color: #991B1B;"
                },
                {
                    "class": ".divide-red-900",
                    "css": "border-color: #7F1D1D;"
                },
                {
                    "class": ".divide-yellow-50",
                    "css": "border-color: #FFFBEB;"
                },
                {
                    "class": ".divide-yellow-100",
                    "css": "border-color: #FEF3C7;"
                },
                {
                    "class": ".divide-yellow-200",
                    "css": "border-color: #FDE68A;"
                },
                {
                    "class": ".divide-yellow-300",
                    "css": "border-color: #FCD34D;"
                },
                {
                    "class": ".divide-yellow-400",
                    "css": "border-color: #FBBF24;"
                },
                {
                    "class": ".divide-yellow-500",
                    "css": "border-color: #F59E0B;"
                },
                {
                    "class": ".divide-yellow-600",
                    "css": "border-color: #D97706;"
                },
                {
                    "class": ".divide-yellow-700",
                    "css": "border-color: #B45309;"
                },
                {
                    "class": ".divide-yellow-800",
                    "css": "border-color: #92400E;"
                },
                {
                    "class": ".divide-yellow-900",
                    "css": "border-color: #78350F;"
                },
                {
                    "class": ".divide-green-50",
                    "css": "border-color: #ECFDF5;"
                },
                {
                    "class": ".divide-green-100",
                    "css": "border-color: #D1FAE5;"
                },
                {
                    "class": ".divide-green-200",
                    "css": "border-color: #A7F3D0;"
                },
                {
                    "class": ".divide-green-300",
                    "css": "border-color: #6EE7B7;"
                },
                {
                    "class": ".divide-green-400",
                    "css": "border-color: #34D399;"
                },
                {
                    "class": ".divide-green-500",
                    "css": "border-color: #10B981;"
                },
                {
                    "class": ".divide-green-600",
                    "css": "border-color: #059669;"
                },
                {
                    "class": ".divide-green-700",
                    "css": "border-color: #047857;"
                },
                {
                    "class": ".divide-green-800",
                    "css": "border-color: #065F46;"
                },
                {
                    "class": ".divide-green-900",
                    "css": "border-color: #064E3B;"
                },
                {
                    "class": ".divide-blue-50",
                    "css": "border-color: #EFF6FF;"
                },
                {
                    "class": ".divide-blue-100",
                    "css": "border-color: #DBEAFE;"
                },
                {
                    "class": ".divide-blue-200",
                    "css": "border-color: #BFDBFE;"
                },
                {
                    "class": ".divide-blue-300",
                    "css": "border-color: #93C5FD;"
                },
                {
                    "class": ".divide-blue-400",
                    "css": "border-color: #60A5FA;"
                },
                {
                    "class": ".divide-blue-500",
                    "css": "border-color: #3B82F6;"
                },
                {
                    "class": ".divide-blue-600",
                    "css": "border-color: #2563EB;"
                },
                {
                    "class": ".divide-blue-700",
                    "css": "border-color: #1D4ED8;"
                },
                {
                    "class": ".divide-blue-800",
                    "css": "border-color: #1E40AF;"
                },
                {
                    "class": ".divide-blue-900",
                    "css": "border-color: #1E3A8A;"
                },
                {
                    "class": ".divide-indigo-50",
                    "css": "border-color: #EEF2FF;"
                },
                {
                    "class": ".divide-indigo-100",
                    "css": "border-color: #E0E7FF;"
                },
                {
                    "class": ".divide-indigo-200",
                    "css": "border-color: #C7D2FE;"
                },
                {
                    "class": ".divide-indigo-300",
                    "css": "border-color: #A5B4FC;"
                },
                {
                    "class": ".divide-indigo-400",
                    "css": "border-color: #818CF8;"
                },
                {
                    "class": ".divide-indigo-500",
                    "css": "border-color: #6366F1;"
                },
                {
                    "class": ".divide-indigo-600",
                    "css": "border-color: #4F46E5;"
                },
                {
                    "class": ".divide-indigo-700",
                    "css": "border-color: #4338CA;"
                },
                {
                    "class": ".divide-indigo-800",
                    "css": "border-color: #3730A3;"
                },
                {
                    "class": ".divide-indigo-900",
                    "css": "border-color: #312E81;"
                },
                {
                    "class": ".divide-purple-50",
                    "css": "border-color: #F5F3FF;"
                },
                {
                    "class": ".divide-purple-100",
                    "css": "border-color: #EDE9FE;"
                },
                {
                    "class": ".divide-purple-200",
                    "css": "border-color: #DDD6FE;"
                },
                {
                    "class": ".divide-purple-300",
                    "css": "border-color: #C4B5FD;"
                },
                {
                    "class": ".divide-purple-400",
                    "css": "border-color: #A78BFA;"
                },
                {
                    "class": ".divide-purple-500",
                    "css": "border-color: #8B5CF6;"
                },
                {
                    "class": ".divide-purple-600",
                    "css": "border-color: #7C3AED;"
                },
                {
                    "class": ".divide-purple-700",
                    "css": "border-color: #6D28D9;"
                },
                {
                    "class": ".divide-purple-800",
                    "css": "border-color: #5B21B6;"
                },
                {
                    "class": ".divide-purple-900",
                    "css": "border-color: #4C1D95;"
                },
                {
                    "class": ".divide-pink-50",
                    "css": "border-color: #FDF2F8;"
                },
                {
                    "class": ".divide-pink-100",
                    "css": "border-color: #FCE7F3;"
                },
                {
                    "class": ".divide-pink-200",
                    "css": "border-color: #FBCFE8;"
                },
                {
                    "class": ".divide-pink-300",
                    "css": "border-color: #F9A8D4;"
                },
                {
                    "class": ".divide-pink-400",
                    "css": "border-color: #F472B6;"
                },
                {
                    "class": ".divide-pink-500",
                    "css": "border-color: #EC4899;"
                },
                {
                    "class": ".divide-pink-600",
                    "css": "border-color: #DB2777;"
                },
                {
                    "class": ".divide-pink-700",
                    "css": "border-color: #BE185D;"
                },
                {
                    "class": ".divide-pink-800",
                    "css": "border-color: #9D174D;"
                },
                {
                    "class": ".divide-pink-900",
                    "css": "border-color: #831843;"
                }
            ]
        },
        {
            "title": "Divide Opacity",
            "classList": [
                {
                    "class": ".divide-opacity-0",
                    "css": "--divide-opacity: 0;"
                },
                {
                    "class": ".divide-opacity-5",
                    "css": "--divide-opacity: 0.05;"
                },
                {
                    "class": ".divide-opacity-10",
                    "css": "--divide-opacity: 0.1;"
                },
                {
                    "class": ".divide-opacity-20",
                    "css": "--divide-opacity: 0.2;"
                },
                {
                    "class": ".divide-opacity-25",
                    "css": "--divide-opacity: 0.25;"
                },
                {
                    "class": ".divide-opacity-30",
                    "css": "--divide-opacity: 0.3;"
                },
                {
                    "class": ".divide-opacity-40",
                    "css": "--divide-opacity: 0.4;"
                },
                {
                    "class": ".divide-opacity-50",
                    "css": "--divide-opacity: 0.5;"
                },
                {
                    "class": ".divide-opacity-60",
                    "css": "--divide-opacity: 0.6;"
                },
                {
                    "class": ".divide-opacity-70",
                    "css": "--divide-opacity: 0.7;"
                },
                {
                    "class": ".divide-opacity-75",
                    "css": "--divide-opacity: 0.75;"
                },
                {
                    "class": ".divide-opacity-80",
                    "css": "--divide-opacity: 0.8;"
                },
                {
                    "class": ".divide-opacity-90",
                    "css": "--divide-opacity: 0.9;"
                },
                {
                    "class": ".divide-opacity-100",
                    "css": "--divide-opacity: 1;"
                }
            ]
        },
        {
            "title": "Divide Style",
            "classList": [
                {
                    "class": ".divide-solid",
                    "css": "border-style: solid;"
                },
                {
                    "class": ".divide-dashed",
                    "css": "border-style: dashed;"
                },
                {
                    "class": ".divide-dotted",
                    "css": "border-style: dotted;"
                },
                {
                    "class": ".divide-double",
                    "css": "border-style: double;"
                },
                {
                    "class": ".divide-none",
                    "css": "border-style: none;"
                }
            ]
        },
        {
            "title": "Ring Width",
            "classList": [
                {
                    "class": ".ring-0",
                    "css": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-1",
                    "css": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-2",
                    "css": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-4",
                    "css": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-8",
                    "css": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                },
                {
                    "class": ".ring-inset",
                    "css": "--tw-ring-inset: inset;"
                }
            ]
        },
        {
            "title": "Ring Color",
            "classList": [
                {
                    "class": ".ring-transparent",
                    "css": "--ring-color: transparent;"
                },
                {
                    "class": ".ring-current",
                    "css": "--ring-color: currentColor;"
                },
                {
                    "class": ".ring-black",
                    "css": "--ring-color: #000000;"
                },
                {
                    "class": ".ring-white",
                    "css": "--ring-color: #ffffff;"
                },
                {
                    "class": ".ring-gray-50",
                    "css": "--ring-color: #F9FAFB;"
                },
                {
                    "class": ".ring-gray-100",
                    "css": "--ring-color: #F3F4F6;"
                },
                {
                    "class": ".ring-gray-200",
                    "css": "--ring-color: #E5E7EB;"
                },
                {
                    "class": ".ring-gray-300",
                    "css": "--ring-color: #D1D5DB;"
                },
                {
                    "class": ".ring-gray-400",
                    "css": "--ring-color: #9CA3AF;"
                },
                {
                    "class": ".ring-gray-500",
                    "css": "--ring-color: #6B7280;"
                },
                {
                    "class": ".ring-gray-600",
                    "css": "--ring-color: #4B5563;"
                },
                {
                    "class": ".ring-gray-700",
                    "css": "--ring-color: #374151;"
                },
                {
                    "class": ".ring-gray-800",
                    "css": "--ring-color: #1F2937;"
                },
                {
                    "class": ".ring-gray-900",
                    "css": "--ring-color: #111827;"
                },
                {
                    "class": ".ring-red-50",
                    "css": "--ring-color: #FEF2F2;"
                },
                {
                    "class": ".ring-red-100",
                    "css": "--ring-color: #FEE2E2;"
                },
                {
                    "class": ".ring-red-200",
                    "css": "--ring-color: #FECACA;"
                },
                {
                    "class": ".ring-red-300",
                    "css": "--ring-color: #FCA5A5;"
                },
                {
                    "class": ".ring-red-400",
                    "css": "--ring-color: #F87171;"
                },
                {
                    "class": ".ring-red-500",
                    "css": "--ring-color: #EF4444;"
                },
                {
                    "class": ".ring-red-600",
                    "css": "--ring-color: #DC2626;"
                },
                {
                    "class": ".ring-red-700",
                    "css": "--ring-color: #B91C1C;"
                },
                {
                    "class": ".ring-red-800",
                    "css": "--ring-color: #991B1B;"
                },
                {
                    "class": ".ring-red-900",
                    "css": "--ring-color: #7F1D1D;"
                },
                {
                    "class": ".ring-yellow-50",
                    "css": "--ring-color: #FFFBEB;"
                },
                {
                    "class": ".ring-yellow-100",
                    "css": "--ring-color: #FEF3C7;"
                },
                {
                    "class": ".ring-yellow-200",
                    "css": "--ring-color: #FDE68A;"
                },
                {
                    "class": ".ring-yellow-300",
                    "css": "--ring-color: #FCD34D;"
                },
                {
                    "class": ".ring-yellow-400",
                    "css": "--ring-color: #FBBF24;"
                },
                {
                    "class": ".ring-yellow-500",
                    "css": "--ring-color: #F59E0B;"
                },
                {
                    "class": ".ring-yellow-600",
                    "css": "--ring-color: #D97706;"
                },
                {
                    "class": ".ring-yellow-700",
                    "css": "--ring-color: #B45309;"
                },
                {
                    "class": ".ring-yellow-800",
                    "css": "--ring-color: #92400E;"
                },
                {
                    "class": ".ring-yellow-900",
                    "css": "--ring-color: #78350F;"
                },
                {
                    "class": ".ring-green-50",
                    "css": "--ring-color: #ECFDF5;"
                },
                {
                    "class": ".ring-green-100",
                    "css": "--ring-color: #D1FAE5;"
                },
                {
                    "class": ".ring-green-200",
                    "css": "--ring-color: #A7F3D0;"
                },
                {
                    "class": ".ring-green-300",
                    "css": "--ring-color: #6EE7B7;"
                },
                {
                    "class": ".ring-green-400",
                    "css": "--ring-color: #34D399;"
                },
                {
                    "class": ".ring-green-500",
                    "css": "--ring-color: #10B981;"
                },
                {
                    "class": ".ring-green-600",
                    "css": "--ring-color: #059669;"
                },
                {
                    "class": ".ring-green-700",
                    "css": "--ring-color: #047857;"
                },
                {
                    "class": ".ring-green-800",
                    "css": "--ring-color: #065F46;"
                },
                {
                    "class": ".ring-green-900",
                    "css": "--ring-color: #064E3B;"
                },
                {
                    "class": ".ring-blue-50",
                    "css": "--ring-color: #EFF6FF;"
                },
                {
                    "class": ".ring-blue-100",
                    "css": "--ring-color: #DBEAFE;"
                },
                {
                    "class": ".ring-blue-200",
                    "css": "--ring-color: #BFDBFE;"
                },
                {
                    "class": ".ring-blue-300",
                    "css": "--ring-color: #93C5FD;"
                },
                {
                    "class": ".ring-blue-400",
                    "css": "--ring-color: #60A5FA;"
                },
                {
                    "class": ".ring-blue-500",
                    "css": "--ring-color: #3B82F6;"
                },
                {
                    "class": ".ring-blue-600",
                    "css": "--ring-color: #2563EB;"
                },
                {
                    "class": ".ring-blue-700",
                    "css": "--ring-color: #1D4ED8;"
                },
                {
                    "class": ".ring-blue-800",
                    "css": "--ring-color: #1E40AF;"
                },
                {
                    "class": ".ring-blue-900",
                    "css": "--ring-color: #1E3A8A;"
                },
                {
                    "class": ".ring-indigo-50",
                    "css": "--ring-color: #EEF2FF;"
                },
                {
                    "class": ".ring-indigo-100",
                    "css": "--ring-color: #E0E7FF;"
                },
                {
                    "class": ".ring-indigo-200",
                    "css": "--ring-color: #C7D2FE;"
                },
                {
                    "class": ".ring-indigo-300",
                    "css": "--ring-color: #A5B4FC;"
                },
                {
                    "class": ".ring-indigo-400",
                    "css": "--ring-color: #818CF8;"
                },
                {
                    "class": ".ring-indigo-500",
                    "css": "--ring-color: #6366F1;"
                },
                {
                    "class": ".ring-indigo-600",
                    "css": "--ring-color: #4F46E5;"
                },
                {
                    "class": ".ring-indigo-700",
                    "css": "--ring-color: #4338CA;"
                },
                {
                    "class": ".ring-indigo-800",
                    "css": "--ring-color: #3730A3;"
                },
                {
                    "class": ".ring-indigo-900",
                    "css": "--ring-color: #312E81;"
                },
                {
                    "class": ".ring-purple-50",
                    "css": "--ring-color: #F5F3FF;"
                },
                {
                    "class": ".ring-purple-100",
                    "css": "--ring-color: #EDE9FE;"
                },
                {
                    "class": ".ring-purple-200",
                    "css": "--ring-color: #DDD6FE;"
                },
                {
                    "class": ".ring-purple-300",
                    "css": "--ring-color: #C4B5FD;"
                },
                {
                    "class": ".ring-purple-400",
                    "css": "--ring-color: #A78BFA;"
                },
                {
                    "class": ".ring-purple-500",
                    "css": "--ring-color: #8B5CF6;"
                },
                {
                    "class": ".ring-purple-600",
                    "css": "--ring-color: #7C3AED;"
                },
                {
                    "class": ".ring-purple-700",
                    "css": "--ring-color: #6D28D9;"
                },
                {
                    "class": ".ring-purple-800",
                    "css": "--ring-color: #5B21B6;"
                },
                {
                    "class": ".ring-purple-900",
                    "css": "--ring-color: #4C1D95;"
                },
                {
                    "class": ".ring-pink-50",
                    "css": "--ring-color: #FDF2F8;"
                },
                {
                    "class": ".ring-pink-100",
                    "css": "--ring-color: #FCE7F3;"
                },
                {
                    "class": ".ring-pink-200",
                    "css": "--ring-color: #FBCFE8;"
                },
                {
                    "class": ".ring-pink-300",
                    "css": "--ring-color: #F9A8D4;"
                },
                {
                    "class": ".ring-pink-400",
                    "css": "--ring-color: #F472B6;"
                },
                {
                    "class": ".ring-pink-500",
                    "css": "--ring-color: #EC4899;"
                },
                {
                    "class": ".ring-pink-600",
                    "css": "--ring-color: #DB2777;"
                },
                {
                    "class": ".ring-pink-700",
                    "css": "--ring-color: #BE185D;"
                },
                {
                    "class": ".ring-pink-800",
                    "css": "--ring-color: #9D174D;"
                },
                {
                    "class": ".ring-pink-900",
                    "css": "--ring-color: #831843;"
                }
            ]
        },
        {
            "title": "Ring Opacity",
            "classList": [
                {
                    "class": ".ring-opacity-0",
                    "css": "--ring-opacity: 0;"
                },
                {
                    "class": ".ring-opacity-5",
                    "css": "--ring-opacity: 0.05;"
                },
                {
                    "class": ".ring-opacity-10",
                    "css": "--ring-opacity: 0.1;"
                },
                {
                    "class": ".ring-opacity-20",
                    "css": "--ring-opacity: 0.2;"
                },
                {
                    "class": ".ring-opacity-25",
                    "css": "--ring-opacity: 0.25;"
                },
                {
                    "class": ".ring-opacity-30",
                    "css": "--ring-opacity: 0.3;"
                },
                {
                    "class": ".ring-opacity-40",
                    "css": "--ring-opacity: 0.4;"
                },
                {
                    "class": ".ring-opacity-50",
                    "css": "--ring-opacity: 0.5;"
                },
                {
                    "class": ".ring-opacity-60",
                    "css": "--ring-opacity: 0.6;"
                },
                {
                    "class": ".ring-opacity-70",
                    "css": "--ring-opacity: 0.7;"
                },
                {
                    "class": ".ring-opacity-75",
                    "css": "--ring-opacity: 0.75;"
                },
                {
                    "class": ".ring-opacity-80",
                    "css": "--ring-opacity: 0.8;"
                },
                {
                    "class": ".ring-opacity-90",
                    "css": "--ring-opacity: 0.9;"
                },
                {
                    "class": ".ring-opacity-100",
                    "css": "--ring-opacity: 1;"
                }
            ]
        },
        {
            "title": "Ring Width",
            "classList": [
                {
                    "class": ".ring-offset-0",
                    "css": "--ring-offset-width: 0px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                },
                {
                    "class": ".ring-offset-1",
                    "css": "--ring-offset-width: 1px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                },
                {
                    "class": ".ring-offset-2",
                    "css": "--ring-offset-width: 2px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                },
                {
                    "class": ".ring-offset-4",
                    "css": "--ring-offset-width: 4px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                },
                {
                    "class": ".ring-offset-8",
                    "css": "--ring-offset-width: 8px; box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);"
                }
            ]
        },
        {
            "title": "Ring Offset Color",
            "classList": [
                {
                    "class": ".ring-offset-transparent",
                    "css": "--ring-offset-color: transparent;"
                },
                {
                    "class": ".ring-offset-current",
                    "css": "--ring-offset-color: currentColor;"
                },
                {
                    "class": ".ring-offset-black",
                    "css": "--ring-offset-color: #000000;"
                },
                {
                    "class": ".ring-offset-white",
                    "css": "--ring-offset-color: #ffffff;"
                },
                {
                    "class": ".ring-offset-gray-50",
                    "css": "--ring-offset-color: #F9FAFB;"
                },
                {
                    "class": ".ring-offset-gray-100",
                    "css": "--ring-offset-color: #F3F4F6;"
                },
                {
                    "class": ".ring-offset-gray-200",
                    "css": "--ring-offset-color: #E5E7EB;"
                },
                {
                    "class": ".ring-offset-gray-300",
                    "css": "--ring-offset-color: #D1D5DB;"
                },
                {
                    "class": ".ring-offset-gray-400",
                    "css": "--ring-offset-color: #9CA3AF;"
                },
                {
                    "class": ".ring-offset-gray-500",
                    "css": "--ring-offset-color: #6B7280;"
                },
                {
                    "class": ".ring-offset-gray-600",
                    "css": "--ring-offset-color: #4B5563;"
                },
                {
                    "class": ".ring-offset-gray-700",
                    "css": "--ring-offset-color: #374151;"
                },
                {
                    "class": ".ring-offset-gray-800",
                    "css": "--ring-offset-color: #1F2937;"
                },
                {
                    "class": ".ring-offset-gray-900",
                    "css": "--ring-offset-color: #111827;"
                },
                {
                    "class": ".ring-offset-red-50",
                    "css": "--ring-offset-color: #FEF2F2;"
                },
                {
                    "class": ".ring-offset-red-100",
                    "css": "--ring-offset-color: #FEE2E2;"
                },
                {
                    "class": ".ring-offset-red-200",
                    "css": "--ring-offset-color: #FECACA;"
                },
                {
                    "class": ".ring-offset-red-300",
                    "css": "--ring-offset-color: #FCA5A5;"
                },
                {
                    "class": ".ring-offset-red-400",
                    "css": "--ring-offset-color: #F87171;"
                },
                {
                    "class": ".ring-offset-red-500",
                    "css": "--ring-offset-color: #EF4444;"
                },
                {
                    "class": ".ring-offset-red-600",
                    "css": "--ring-offset-color: #DC2626;"
                },
                {
                    "class": ".ring-offset-red-700",
                    "css": "--ring-offset-color: #B91C1C;"
                },
                {
                    "class": ".ring-offset-red-800",
                    "css": "--ring-offset-color: #991B1B;"
                },
                {
                    "class": ".ring-offset-red-900",
                    "css": "--ring-offset-color: #7F1D1D;"
                },
                {
                    "class": ".ring-offset-yellow-50",
                    "css": "--ring-offset-color: #FFFBEB;"
                },
                {
                    "class": ".ring-offset-yellow-100",
                    "css": "--ring-offset-color: #FEF3C7;"
                },
                {
                    "class": ".ring-offset-yellow-200",
                    "css": "--ring-offset-color: #FDE68A;"
                },
                {
                    "class": ".ring-offset-yellow-300",
                    "css": "--ring-offset-color: #FCD34D;"
                },
                {
                    "class": ".ring-offset-yellow-400",
                    "css": "--ring-offset-color: #FBBF24;"
                },
                {
                    "class": ".ring-offset-yellow-500",
                    "css": "--ring-offset-color: #F59E0B;"
                },
                {
                    "class": ".ring-offset-yellow-600",
                    "css": "--ring-offset-color: #D97706;"
                },
                {
                    "class": ".ring-offset-yellow-700",
                    "css": "--ring-offset-color: #B45309;"
                },
                {
                    "class": ".ring-offset-yellow-800",
                    "css": "--ring-offset-color: #92400E;"
                },
                {
                    "class": ".ring-offset-yellow-900",
                    "css": "--ring-offset-color: #78350F;"
                },
                {
                    "class": ".ring-offset-green-50",
                    "css": "--ring-offset-color: #ECFDF5;"
                },
                {
                    "class": ".ring-offset-green-100",
                    "css": "--ring-offset-color: #D1FAE5;"
                },
                {
                    "class": ".ring-offset-green-200",
                    "css": "--ring-offset-color: #A7F3D0;"
                },
                {
                    "class": ".ring-offset-green-300",
                    "css": "--ring-offset-color: #6EE7B7;"
                },
                {
                    "class": ".ring-offset-green-400",
                    "css": "--ring-offset-color: #34D399;"
                },
                {
                    "class": ".ring-offset-green-500",
                    "css": "--ring-offset-color: #10B981;"
                },
                {
                    "class": ".ring-offset-green-600",
                    "css": "--ring-offset-color: #059669;"
                },
                {
                    "class": ".ring-offset-green-700",
                    "css": "--ring-offset-color: #047857;"
                },
                {
                    "class": ".ring-offset-green-800",
                    "css": "--ring-offset-color: #065F46;"
                },
                {
                    "class": ".ring-offset-green-900",
                    "css": "--ring-offset-color: #064E3B;"
                },
                {
                    "class": ".ring-offset-blue-50",
                    "css": "--ring-offset-color: #EFF6FF;"
                },
                {
                    "class": ".ring-offset-blue-100",
                    "css": "--ring-offset-color: #DBEAFE;"
                },
                {
                    "class": ".ring-offset-blue-200",
                    "css": "--ring-offset-color: #BFDBFE;"
                },
                {
                    "class": ".ring-offset-blue-300",
                    "css": "--ring-offset-color: #93C5FD;"
                },
                {
                    "class": ".ring-offset-blue-400",
                    "css": "--ring-offset-color: #60A5FA;"
                },
                {
                    "class": ".ring-offset-blue-500",
                    "css": "--ring-offset-color: #3B82F6;"
                },
                {
                    "class": ".ring-offset-blue-600",
                    "css": "--ring-offset-color: #2563EB;"
                },
                {
                    "class": ".ring-offset-blue-700",
                    "css": "--ring-offset-color: #1D4ED8;"
                },
                {
                    "class": ".ring-offset-blue-800",
                    "css": "--ring-offset-color: #1E40AF;"
                },
                {
                    "class": ".ring-offset-blue-900",
                    "css": "--ring-offset-color: #1E3A8A;"
                },
                {
                    "class": ".ring-offset-indigo-50",
                    "css": "--ring-offset-color: #EEF2FF;"
                },
                {
                    "class": ".ring-offset-indigo-100",
                    "css": "--ring-offset-color: #E0E7FF;"
                },
                {
                    "class": ".ring-offset-indigo-200",
                    "css": "--ring-offset-color: #C7D2FE;"
                },
                {
                    "class": ".ring-offset-indigo-300",
                    "css": "--ring-offset-color: #A5B4FC;"
                },
                {
                    "class": ".ring-offset-indigo-400",
                    "css": "--ring-offset-color: #818CF8;"
                },
                {
                    "class": ".ring-offset-indigo-500",
                    "css": "--ring-offset-color: #6366F1;"
                },
                {
                    "class": ".ring-offset-indigo-600",
                    "css": "--ring-offset-color: #4F46E5;"
                },
                {
                    "class": ".ring-offset-indigo-700",
                    "css": "--ring-offset-color: #4338CA;"
                },
                {
                    "class": ".ring-offset-indigo-800",
                    "css": "--ring-offset-color: #3730A3;"
                },
                {
                    "class": ".ring-offset-indigo-900",
                    "css": "--ring-offset-color: #312E81;"
                },
                {
                    "class": ".ring-offset-purple-50",
                    "css": "--ring-offset-color: #F5F3FF;"
                },
                {
                    "class": ".ring-offset-purple-100",
                    "css": "--ring-offset-color: #EDE9FE;"
                },
                {
                    "class": ".ring-offset-purple-200",
                    "css": "--ring-offset-color: #DDD6FE;"
                },
                {
                    "class": ".ring-offset-purple-300",
                    "css": "--ring-offset-color: #C4B5FD;"
                },
                {
                    "class": ".ring-offset-purple-400",
                    "css": "--ring-offset-color: #A78BFA;"
                },
                {
                    "class": ".ring-offset-purple-500",
                    "css": "--ring-offset-color: #8B5CF6;"
                },
                {
                    "class": ".ring-offset-purple-600",
                    "css": "--ring-offset-color: #7C3AED;"
                },
                {
                    "class": ".ring-offset-purple-700",
                    "css": "--ring-offset-color: #6D28D9;"
                },
                {
                    "class": ".ring-offset-purple-800",
                    "css": "--ring-offset-color: #5B21B6;"
                },
                {
                    "class": ".ring-offset-purple-900",
                    "css": "--ring-offset-color: #4C1D95;"
                },
                {
                    "class": ".ring-offset-pink-50",
                    "css": "--ring-offset-color: #FDF2F8;"
                },
                {
                    "class": ".ring-offset-pink-100",
                    "css": "--ring-offset-color: #FCE7F3;"
                },
                {
                    "class": ".ring-offset-pink-200",
                    "css": "--ring-offset-color: #FBCFE8;"
                },
                {
                    "class": ".ring-offset-pink-300",
                    "css": "--ring-offset-color: #F9A8D4;"
                },
                {
                    "class": ".ring-offset-pink-400",
                    "css": "--ring-offset-color: #F472B6;"
                },
                {
                    "class": ".ring-offset-pink-500",
                    "css": "--ring-offset-color: #EC4899;"
                },
                {
                    "class": ".ring-offset-pink-600",
                    "css": "--ring-offset-color: #DB2777;"
                },
                {
                    "class": ".ring-offset-pink-700",
                    "css": "--ring-offset-color: #BE185D;"
                },
                {
                    "class": ".ring-offset-pink-800",
                    "css": "--ring-offset-color: #9D174D;"
                },
                {
                    "class": ".ring-offset-pink-900",
                    "css": "--ring-offset-color: #831843;"
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
                    "css": "border-collapse: collapse;"
                },
                {
                    "class": ".border-separate",
                    "css": "border-collapse: separate;"
                }
            ]
        },
        {
            "title": "Table Layout",
            "classList": [
                {
                    "class": ".table-auto",
                    "css": "table-layout: auto;"
                },
                {
                    "class": ".table-fixed",
                    "css": "table-layout: fixed;"
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
                    "css": "appearance: none;"
                }
            ]
        },
        {
            "title": "Cursor",
            "classList": [
                {
                    "class": ".cursor-auto",
                    "css": "cursor: auto;"
                },
                {
                    "class": ".cursor-default",
                    "css": "cursor: default;"
                },
                {
                    "class": ".cursor-pointer",
                    "css": "cursor: pointer;"
                },
                {
                    "class": ".cursor-wait",
                    "css": "cursor: wait;"
                },
                {
                    "class": ".cursor-text",
                    "css": "cursor: text;"
                },
                {
                    "class": ".cursor-move",
                    "css": "cursor: move;"
                },
                {
                    "class": ".cursor-help",
                    "css": "cursor: help;"
                },
                {
                    "class": ".cursor-not-allowed",
                    "css": "cursor: not-allowed;"
                }
            ]
        },
        {
            "title": "Outline",
            "classList": [
                {
                    "class": ".outline-none",
                    "css": "outline: 0;"
                },
                {
                    "class": ".outline-white",
                    "css": "outline: 2px dotted white; outline-offset: 2px;"
                },
                {
                    "class": ".outline-black",
                    "css": "outline: 2px dotted black; outline-offset: 2px;"
                }
            ]
        },
        {
            "title": "Pointer Events",
            "classList": [
                {
                    "class": ".pointer-events-none",
                    "css": "pointer-events: none;"
                },
                {
                    "class": ".pointer-events-auto",
                    "css": "pointer-events: auto;"
                }
            ]
        },
        {
            "title": "Resize",
            "classList": [
                {
                    "class": ".resize-none",
                    "css": "resize: none;"
                },
                {
                    "class": ".resize",
                    "css": "resize: both;"
                },
                {
                    "class": ".resize-y",
                    "css": "resize: vertical;"
                },
                {
                    "class": ".resize-x",
                    "css": "resize: horizontal;"
                }
            ]
        },
        {
            "title": "User Select",
            "classList": [
                {
                    "class": ".select-none",
                    "css": "user-select: none;"
                },
                {
                    "class": ".select-text",
                    "css": "user-select: text;"
                },
                {
                    "class": ".select-all",
                    "css": "user-select: all;"
                },
                {
                    "class": ".select-auto",
                    "css": "user-select: auto;"
                }
            ]
        },
        {
            "title": "Accessibility",
            "classList": [
                {
                    "class": ".sr-only",
                    "css": "position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); whiteSpace: nowrap; borderWidth: 0;"
                },
                {
                    "class": ".not-sr-only",
                    "css": "position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; whiteSpace: normal;"
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
                    "css": "grid-template-columns: repeat(1, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-2",
                    "css": "grid-template-columns: repeat(2, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-3",
                    "css": "grid-template-columns: repeat(3, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-4",
                    "css": "grid-template-columns: repeat(4, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-5",
                    "css": "grid-template-columns: repeat(5, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-6",
                    "css": "grid-template-columns: repeat(6, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-7",
                    "css": "grid-template-columns: repeat(7, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-8",
                    "css": "grid-template-columns: repeat(8, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-9",
                    "css": "grid-template-columns: repeat(9, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-10",
                    "css": "grid-template-columns: repeat(10, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-11",
                    "css": "grid-template-columns: repeat(11, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-12",
                    "css": "grid-template-columns: repeat(12, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-cols-none",
                    "css": "grid-template-columns: none;"
                }
            ]
        },
        {
            "title": "Grid Column, start/end",
            "classList": [
                {
                    "class": ".col-auto",
                    "css": "grid-column: auto;"
                },
                {
                    "class": ".col-span-1",
                    "css": "grid-column: span 1 / span 1;"
                },
                {
                    "class": ".col-span-2",
                    "css": "grid-column: span 2 / span 2;"
                },
                {
                    "class": ".col-span-3",
                    "css": "grid-column: span 3 / span 3;"
                },
                {
                    "class": ".col-span-4",
                    "css": "grid-column: span 4 / span 4;"
                },
                {
                    "class": ".col-span-5",
                    "css": "grid-column: span 5 / span 5;"
                },
                {
                    "class": ".col-span-6",
                    "css": "grid-column: span 6 / span 6;"
                },
                {
                    "class": ".col-span-7",
                    "css": "grid-column: span 7 / span 7;"
                },
                {
                    "class": ".col-span-8",
                    "css": "grid-column: span 8 / span 8;"
                },
                {
                    "class": ".col-span-9",
                    "css": "grid-column: span 9 / span 9;"
                },
                {
                    "class": ".col-span-10",
                    "css": "grid-column: span 10 / span 10;"
                },
                {
                    "class": ".col-span-11",
                    "css": "grid-column: span 11 / span 11;"
                },
                {
                    "class": ".col-span-12",
                    "css": "grid-column: span 12 / span 12;"
                },
                {
                    "class": ".col-start-1",
                    "css": "grid-column-start: 1;"
                },
                {
                    "class": ".col-start-2",
                    "css": "grid-column-start: 2;"
                },
                {
                    "class": ".col-start-3",
                    "css": "grid-column-start: 3;"
                },
                {
                    "class": ".col-start-4",
                    "css": "grid-column-start: 4;"
                },
                {
                    "class": ".col-start-5",
                    "css": "grid-column-start: 5;"
                },
                {
                    "class": ".col-start-6",
                    "css": "grid-column-start: 6;"
                },
                {
                    "class": ".col-start-7",
                    "css": "grid-column-start: 7;"
                },
                {
                    "class": ".col-start-8",
                    "css": "grid-column-start: 8;"
                },
                {
                    "class": ".col-start-9",
                    "css": "grid-column-start: 9;"
                },
                {
                    "class": ".col-start-10",
                    "css": "grid-column-start: 10;"
                },
                {
                    "class": ".col-start-11",
                    "css": "grid-column-start: 11;"
                },
                {
                    "class": ".col-start-12",
                    "css": "grid-column-start: 12;"
                },
                {
                    "class": ".col-start-13",
                    "css": "grid-column-start: 13;"
                },
                {
                    "class": ".col-start-auto",
                    "css": "grid-column-start: auto;"
                },
                {
                    "class": ".col-end-1",
                    "css": "grid-column-end: 1;"
                },
                {
                    "class": ".col-end-2",
                    "css": "grid-column-end: 2;"
                },
                {
                    "class": ".col-end-3",
                    "css": "grid-column-end: 3;"
                },
                {
                    "class": ".col-end-4",
                    "css": "grid-column-end: 4;"
                },
                {
                    "class": ".col-end-5",
                    "css": "grid-column-end: 5;"
                },
                {
                    "class": ".col-end-6",
                    "css": "grid-column-end: 6;"
                },
                {
                    "class": ".col-end-7",
                    "css": "grid-column-end: 7;"
                },
                {
                    "class": ".col-end-8",
                    "css": "grid-column-end: 8;"
                },
                {
                    "class": ".col-end-9",
                    "css": "grid-column-end: 9;"
                },
                {
                    "class": ".col-end-10",
                    "css": "grid-column-end: 10;"
                },
                {
                    "class": ".col-end-11",
                    "css": "grid-column-end: 11;"
                },
                {
                    "class": ".col-end-12",
                    "css": "grid-column-end: 12;"
                },
                {
                    "class": ".col-end-13",
                    "css": "grid-column-end: 13;"
                },
                {
                    "class": ".col-end-auto",
                    "css": "grid-column-end: auto;"
                }
            ]
        },
        {
            "title": "Grid Template Rows",
            "classList": [
                {
                    "class": ".grid-rows-1",
                    "css": "grid-template-rows: repeat(1, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-2",
                    "css": "grid-template-rows: repeat(2, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-3",
                    "css": "grid-template-rows: repeat(3, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-4",
                    "css": "grid-template-rows: repeat(4, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-5",
                    "css": "grid-template-rows: repeat(5, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-6",
                    "css": "grid-template-rows: repeat(6, minmax(0, 1fr));"
                },
                {
                    "class": ".grid-rows-none",
                    "css": "grid-template-rows: none;"
                }
            ]
        },
        {
            "title": "Grid Row, start/end",
            "classList": [
                {
                    "class": ".row-auto",
                    "css": "grid-row: auto;"
                },
                {
                    "class": ".row-span-1",
                    "css": "grid-row: span 1 / span 1;"
                },
                {
                    "class": ".row-span-2",
                    "css": "grid-row: span 2 / span 2;"
                },
                {
                    "class": ".row-span-3",
                    "css": "grid-row: span 3 / span 3;"
                },
                {
                    "class": ".row-span-4",
                    "css": "grid-row: span 4 / span 4;"
                },
                {
                    "class": ".row-span-5",
                    "css": "grid-row: span 5 / span 5;"
                },
                {
                    "class": ".row-span-6",
                    "css": "grid-row: span 6 / span 6;"
                },
                {
                    "class": ".row-start-1",
                    "css": "grid-row-start: 1;"
                },
                {
                    "class": ".row-start-2",
                    "css": "grid-row-start: 2;"
                },
                {
                    "class": ".row-start-3",
                    "css": "grid-row-start: 3;"
                },
                {
                    "class": ".row-start-4",
                    "css": "grid-row-start: 4;"
                },
                {
                    "class": ".row-start-5",
                    "css": "grid-row-start: 5;"
                },
                {
                    "class": ".row-start-6",
                    "css": "grid-row-start: 6;"
                },
                {
                    "class": ".row-start-7",
                    "css": "grid-row-start: 7;"
                },
                {
                    "class": ".row-start-auto",
                    "css": "grid-row-start: auto;"
                },
                {
                    "class": ".row-end-1",
                    "css": "grid-row-end: 1;"
                },
                {
                    "class": ".row-end-2",
                    "css": "grid-row-end: 2;"
                },
                {
                    "class": ".row-end-3",
                    "css": "grid-row-end: 3;"
                },
                {
                    "class": ".row-end-4",
                    "css": "grid-row-end: 4;"
                },
                {
                    "class": ".row-end-5",
                    "css": "grid-row-end: 5;"
                },
                {
                    "class": ".row-end-6",
                    "css": "grid-row-end: 6;"
                },
                {
                    "class": ".row-end-7",
                    "css": "grid-row-end: 7;"
                },
                {
                    "class": ".row-end-auto",
                    "css": "grid-row-end: auto;"
                }
            ]
        },
        {
            "title": "Gap",
            "classList": [
                {
                    "class": ".gap-0",
                    "css": "gap: 0;"
                },
                {
                    "class": ".gap-0.5",
                    "css": "gap: 0.125rem;"
                },
                {
                    "class": ".gap-1",
                    "css": "gap: 0.25rem;"
                },
                {
                    "class": ".gap-1.5",
                    "css": "gap: 0.375rem;"
                },
                {
                    "class": ".gap-2",
                    "css": "gap: 0.5rem;"
                },
                {
                    "class": ".gap-2.5",
                    "css": "gap: 0.625rem;"
                },
                {
                    "class": ".gap-3",
                    "css": "gap: 0.75rem;"
                },
                {
                    "class": ".gap-3.5",
                    "css": "gap: 0.875rem;"
                },
                {
                    "class": ".gap-4",
                    "css": "gap: 1rem;"
                },
                {
                    "class": ".gap-5",
                    "css": "gap: 1.25rem;"
                },
                {
                    "class": ".gap-6",
                    "css": "gap: 1.5rem;"
                },
                {
                    "class": ".gap-8",
                    "css": "gap: 2rem;"
                },
                {
                    "class": ".gap-10",
                    "css": "gap: 2.5rem;"
                },
                {
                    "class": ".gap-11",
                    "css": "gap: 2.75rem;"
                },
                {
                    "class": ".gap-12",
                    "css": "gap: 3rem;"
                },
                {
                    "class": ".gap-14",
                    "css": "gap: 3.5rem;"
                },
                {
                    "class": ".gap-16",
                    "css": "gap: 4rem;"
                },
                {
                    "class": ".gap-20",
                    "css": "gap: 5rem;"
                },
                {
                    "class": ".gap-24",
                    "css": "gap: 6rem;"
                },
                {
                    "class": ".gap-28",
                    "css": "gap: 7rem;"
                },
                {
                    "class": ".gap-32",
                    "css": "gap: 8rem;"
                },
                {
                    "class": ".gap-36",
                    "css": "gap: 9rem;"
                },
                {
                    "class": ".gap-40",
                    "css": "gap: 10rem;"
                },
                {
                    "class": ".gap-44",
                    "css": "gap: 11rem;"
                },
                {
                    "class": ".gap-48",
                    "css": "gap: 12rem;"
                },
                {
                    "class": ".gap-52",
                    "css": "gap: 13rem;"
                },
                {
                    "class": ".gap-56",
                    "css": "gap: 14rem;"
                },
                {
                    "class": ".gap-64",
                    "css": "gap: 16rem;"
                },
                {
                    "class": ".gap-72",
                    "css": "gap: 18rem;"
                },
                {
                    "class": ".gap-80",
                    "css": "gap: 20rem;"
                },
                {
                    "class": ".gap-96",
                    "css": "gap: 24rem;"
                },
                {
                    "class": ".gap-px",
                    "css": "gap: 1px;"
                },
                {
                    "class": ".gap-x-0",
                    "css": "column-gap: 0;"
                },
                {
                    "class": ".gap-x-0.5",
                    "css": "column-gap: 0.125rem;"
                },
                {
                    "class": ".gap-x-1",
                    "css": "column-gap: 0.25rem;"
                },
                {
                    "class": ".gap-x-1.5",
                    "css": "column-gap: 0.375rem;"
                },
                {
                    "class": ".gap-x-2",
                    "css": "column-gap: 0.5rem;"
                },
                {
                    "class": ".gap-x-2.5",
                    "css": "column-gap: 0.625rem;"
                },
                {
                    "class": ".gap-x-3",
                    "css": "column-gap: 0.75rem;"
                },
                {
                    "class": ".gap-x-3.5",
                    "css": "column-gap: 0.875rem;"
                },
                {
                    "class": ".gap-x-4",
                    "css": "column-gap: 1rem;"
                },
                {
                    "class": ".gap-x-5",
                    "css": "column-gap: 1.25rem;"
                },
                {
                    "class": ".gap-x-6",
                    "css": "column-gap: 1.5rem;"
                },
                {
                    "class": ".gap-x-8",
                    "css": "column-gap: 2rem;"
                },
                {
                    "class": ".gap-x-10",
                    "css": "column-gap: 2.5rem;"
                },
                {
                    "class": ".gap-x-11",
                    "css": "column-gap: 2.75rem;"
                },
                {
                    "class": ".gap-x-12",
                    "css": "column-gap: 3rem;"
                },
                {
                    "class": ".gap-x-14",
                    "css": "column-gap: 3.5rem;"
                },
                {
                    "class": ".gap-x-16",
                    "css": "column-gap: 4rem;"
                },
                {
                    "class": ".gap-x-20",
                    "css": "column-gap: 5rem;"
                },
                {
                    "class": ".gap-x-24",
                    "css": "column-gap: 6rem;"
                },
                {
                    "class": ".gap-x-28",
                    "css": "column-gap: 7rem;"
                },
                {
                    "class": ".gap-x-32",
                    "css": "column-gap: 8rem;"
                },
                {
                    "class": ".gap-x-36",
                    "css": "column-gap: 9rem;"
                },
                {
                    "class": ".gap-x-40",
                    "css": "column-gap: 10rem;"
                },
                {
                    "class": ".gap-x-44",
                    "css": "column-gap: 11rem;"
                },
                {
                    "class": ".gap-x-48",
                    "css": "column-gap: 12rem;"
                },
                {
                    "class": ".gap-x-52",
                    "css": "column-gap: 13rem;"
                },
                {
                    "class": ".gap-x-56",
                    "css": "column-gap: 14rem;"
                },
                {
                    "class": ".gap-x-64",
                    "css": "column-gap: 16rem;"
                },
                {
                    "class": ".gap-x-72",
                    "css": "column-gap: 18rem;"
                },
                {
                    "class": ".gap-x-80",
                    "css": "column-gap: 20rem;"
                },
                {
                    "class": ".gap-x-96",
                    "css": "column-gap: 24rem;"
                },
                {
                    "class": ".gap-x-px",
                    "css": "column-gap: 1px;"
                },
                {
                    "class": ".gap-y-0",
                    "css": "row-gap: 0;"
                },
                {
                    "class": ".gap-y-0.5",
                    "css": "row-gap: 0.125rem;"
                },
                {
                    "class": ".gap-y-1",
                    "css": "row-gap: 0.25rem;"
                },
                {
                    "class": ".gap-y-1.5",
                    "css": "row-gap: 0.375rem;"
                },
                {
                    "class": ".gap-y-2",
                    "css": "row-gap: 0.5rem;"
                },
                {
                    "class": ".gap-y-2.5",
                    "css": "row-gap: 0.625rem;"
                },
                {
                    "class": ".gap-y-3",
                    "css": "row-gap: 0.75rem;"
                },
                {
                    "class": ".gap-y-3.5",
                    "css": "row-gap: 0.875rem;"
                },
                {
                    "class": ".gap-y-4",
                    "css": "row-gap: 1rem;"
                },
                {
                    "class": ".gap-y-5",
                    "css": "row-gap: 1.25rem;"
                },
                {
                    "class": ".gap-y-6",
                    "css": "row-gap: 1.5rem;"
                },
                {
                    "class": ".gap-y-8",
                    "css": "row-gap: 2rem;"
                },
                {
                    "class": ".gap-y-10",
                    "css": "row-gap: 2.5rem;"
                },
                {
                    "class": ".gap-y-11",
                    "css": "row-gap: 2.75rem;"
                },
                {
                    "class": ".gap-y-12",
                    "css": "row-gap: 3rem;"
                },
                {
                    "class": ".gap-y-14",
                    "css": "row-gap: 3.5rem;"
                },
                {
                    "class": ".gap-y-16",
                    "css": "row-gap: 4rem;"
                },
                {
                    "class": ".gap-y-20",
                    "css": "row-gap: 5rem;"
                },
                {
                    "class": ".gap-y-24",
                    "css": "row-gap: 6rem;"
                },
                {
                    "class": ".gap-y-28",
                    "css": "row-gap: 7rem;"
                },
                {
                    "class": ".gap-y-32",
                    "css": "row-gap: 8rem;"
                },
                {
                    "class": ".gap-y-36",
                    "css": "row-gap: 9rem;"
                },
                {
                    "class": ".gap-y-40",
                    "css": "row-gap: 10rem;"
                },
                {
                    "class": ".gap-y-44",
                    "css": "row-gap: 11rem;"
                },
                {
                    "class": ".gap-y-48",
                    "css": "row-gap: 12rem;"
                },
                {
                    "class": ".gap-y-52",
                    "css": "row-gap: 13rem;"
                },
                {
                    "class": ".gap-y-56",
                    "css": "row-gap: 14rem;"
                },
                {
                    "class": ".gap-y-64",
                    "css": "row-gap: 16rem;"
                },
                {
                    "class": ".gap-y-72",
                    "css": "row-gap: 18rem;"
                },
                {
                    "class": ".gap-y-80",
                    "css": "row-gap: 20rem;"
                },
                {
                    "class": ".gap-y-96",
                    "css": "row-gap: 24rem;"
                },
                {
                    "class": ".gap-y-px",
                    "css": "row-gap: 1px;"
                }
            ]
        },
        {
            "title": "Grid Auto Flow",
            "classList": [
                {
                    "class": ".grid-flow-row",
                    "css": "grid-auto-flow: row;"
                },
                {
                    "class": ".grid-flow-col",
                    "css": "grid-auto-flow: column;"
                },
                {
                    "class": ".grid-flow-row-dense",
                    "css": "grid-auto-flow: row dense;"
                },
                {
                    "class": ".grid-flow-col-dense",
                    "css": "grid-auto-flow: column dense;"
                }
            ]
        },
        {
            "title": "Grid Auto Columns",
            "classList": [
                {
                    "class": ".auto-cols-auto",
                    "css": "grid-auto-columns: auto;"
                },
                {
                    "class": ".auto-cols-min",
                    "css": "grid-auto-columns: min;"
                },
                {
                    "class": ".auto-cols-max",
                    "css": "grid-auto-columns: max;"
                },
                {
                    "class": ".auto-cols-fr",
                    "css": "grid-auto-columns: minmax(0, 1fr);"
                }
            ]
        },
        {
            "title": "Grid Auto Rows",
            "classList": [
                {
                    "class": ".auto-rows-auto",
                    "css": "grid-auto-rows: auto;"
                },
                {
                    "class": ".auto-rows-min",
                    "css": "grid-auto-rows: min;"
                },
                {
                    "class": ".auto-rows-max",
                    "css": "grid-auto-rows: max;"
                },
                {
                    "class": ".auto-rows-fr",
                    "css": "grid-auto-rows: minmax(0, 1fr);"
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
                    "css": "color: transparent;"
                },
                {
                    "class": ".text-current",
                    "css": "color: currentColor;"
                },
                {
                    "class": ".text-black",
                    "css": "color: #000000;"
                },
                {
                    "class": ".text-white",
                    "css": "color: #ffffff;"
                },
                {
                    "class": ".text-gray-50",
                    "css": "color: #F9FAFB;"
                },
                {
                    "class": ".text-gray-100",
                    "css": "color: #F3F4F6;"
                },
                {
                    "class": ".text-gray-200",
                    "css": "color: #E5E7EB;"
                },
                {
                    "class": ".text-gray-300",
                    "css": "color: #D1D5DB;"
                },
                {
                    "class": ".text-gray-400",
                    "css": "color: #9CA3AF;"
                },
                {
                    "class": ".text-gray-500",
                    "css": "color: #6B7280;"
                },
                {
                    "class": ".text-gray-600",
                    "css": "color: #4B5563;"
                },
                {
                    "class": ".text-gray-700",
                    "css": "color: #374151;"
                },
                {
                    "class": ".text-gray-800",
                    "css": "color: #1F2937;"
                },
                {
                    "class": ".text-gray-900",
                    "css": "color: #111827;"
                },
                {
                    "class": ".text-red-50",
                    "css": "color: #FEF2F2;"
                },
                {
                    "class": ".text-red-100",
                    "css": "color: #FEE2E2;"
                },
                {
                    "class": ".text-red-200",
                    "css": "color: #FECACA;"
                },
                {
                    "class": ".text-red-300",
                    "css": "color: #FCA5A5;"
                },
                {
                    "class": ".text-red-400",
                    "css": "color: #F87171;"
                },
                {
                    "class": ".text-red-500",
                    "css": "color: #EF4444;"
                },
                {
                    "class": ".text-red-600",
                    "css": "color: #DC2626;"
                },
                {
                    "class": ".text-red-700",
                    "css": "color: #B91C1C;"
                },
                {
                    "class": ".text-red-800",
                    "css": "color: #991B1B;"
                },
                {
                    "class": ".text-red-900",
                    "css": "color: #7F1D1D;"
                },
                {
                    "class": ".text-yellow-50",
                    "css": "color: #FFFBEB;"
                },
                {
                    "class": ".text-yellow-100",
                    "css": "color: #FEF3C7;"
                },
                {
                    "class": ".text-yellow-200",
                    "css": "color: #FDE68A;"
                },
                {
                    "class": ".text-yellow-300",
                    "css": "color: #FCD34D;"
                },
                {
                    "class": ".text-yellow-400",
                    "css": "color: #FBBF24;"
                },
                {
                    "class": ".text-yellow-500",
                    "css": "color: #F59E0B;"
                },
                {
                    "class": ".text-yellow-600",
                    "css": "color: #D97706;"
                },
                {
                    "class": ".text-yellow-700",
                    "css": "color: #B45309;"
                },
                {
                    "class": ".text-yellow-800",
                    "css": "color: #92400E;"
                },
                {
                    "class": ".text-yellow-900",
                    "css": "color: #78350F;"
                },
                {
                    "class": ".text-green-50",
                    "css": "color: #ECFDF5;"
                },
                {
                    "class": ".text-green-100",
                    "css": "color: #D1FAE5;"
                },
                {
                    "class": ".text-green-200",
                    "css": "color: #A7F3D0;"
                },
                {
                    "class": ".text-green-300",
                    "css": "color: #6EE7B7;"
                },
                {
                    "class": ".text-green-400",
                    "css": "color: #34D399;"
                },
                {
                    "class": ".text-green-500",
                    "css": "color: #10B981;"
                },
                {
                    "class": ".text-green-600",
                    "css": "color: #059669;"
                },
                {
                    "class": ".text-green-700",
                    "css": "color: #047857;"
                },
                {
                    "class": ".text-green-800",
                    "css": "color: #065F46;"
                },
                {
                    "class": ".text-green-900",
                    "css": "color: #064E3B;"
                },
                {
                    "class": ".text-blue-50",
                    "css": "color: #EFF6FF;"
                },
                {
                    "class": ".text-blue-100",
                    "css": "color: #DBEAFE;"
                },
                {
                    "class": ".text-blue-200",
                    "css": "color: #BFDBFE;"
                },
                {
                    "class": ".text-blue-300",
                    "css": "color: #93C5FD;"
                },
                {
                    "class": ".text-blue-400",
                    "css": "color: #60A5FA;"
                },
                {
                    "class": ".text-blue-500",
                    "css": "color: #3B82F6;"
                },
                {
                    "class": ".text-blue-600",
                    "css": "color: #2563EB;"
                },
                {
                    "class": ".text-blue-700",
                    "css": "color: #1D4ED8;"
                },
                {
                    "class": ".text-blue-800",
                    "css": "color: #1E40AF;"
                },
                {
                    "class": ".text-blue-900",
                    "css": "color: #1E3A8A;"
                },
                {
                    "class": ".text-indigo-50",
                    "css": "color: #EEF2FF;"
                },
                {
                    "class": ".text-indigo-100",
                    "css": "color: #E0E7FF;"
                },
                {
                    "class": ".text-indigo-200",
                    "css": "color: #C7D2FE;"
                },
                {
                    "class": ".text-indigo-300",
                    "css": "color: #A5B4FC;"
                },
                {
                    "class": ".text-indigo-400",
                    "css": "color: #818CF8;"
                },
                {
                    "class": ".text-indigo-500",
                    "css": "color: #6366F1;"
                },
                {
                    "class": ".text-indigo-600",
                    "css": "color: #4F46E5;"
                },
                {
                    "class": ".text-indigo-700",
                    "css": "color: #4338CA;"
                },
                {
                    "class": ".text-indigo-800",
                    "css": "color: #3730A3;"
                },
                {
                    "class": ".text-indigo-900",
                    "css": "color: #312E81;"
                },
                {
                    "class": ".text-purple-50",
                    "css": "color: #F5F3FF;"
                },
                {
                    "class": ".text-purple-100",
                    "css": "color: #EDE9FE;"
                },
                {
                    "class": ".text-purple-200",
                    "css": "color: #DDD6FE;"
                },
                {
                    "class": ".text-purple-300",
                    "css": "color: #C4B5FD;"
                },
                {
                    "class": ".text-purple-400",
                    "css": "color: #A78BFA;"
                },
                {
                    "class": ".text-purple-500",
                    "css": "color: #8B5CF6;"
                },
                {
                    "class": ".text-purple-600",
                    "css": "color: #7C3AED;"
                },
                {
                    "class": ".text-purple-700",
                    "css": "color: #6D28D9;"
                },
                {
                    "class": ".text-purple-800",
                    "css": "color: #5B21B6;"
                },
                {
                    "class": ".text-purple-900",
                    "css": "color: #4C1D95;"
                },
                {
                    "class": ".text-pink-50",
                    "css": "color: #FDF2F8;"
                },
                {
                    "class": ".text-pink-100",
                    "css": "color: #FCE7F3;"
                },
                {
                    "class": ".text-pink-200",
                    "css": "color: #FBCFE8;"
                },
                {
                    "class": ".text-pink-300",
                    "css": "color: #F9A8D4;"
                },
                {
                    "class": ".text-pink-400",
                    "css": "color: #F472B6;"
                },
                {
                    "class": ".text-pink-500",
                    "css": "color: #EC4899;"
                },
                {
                    "class": ".text-pink-600",
                    "css": "color: #DB2777;"
                },
                {
                    "class": ".text-pink-700",
                    "css": "color: #BE185D;"
                },
                {
                    "class": ".text-pink-800",
                    "css": "color: #9D174D;"
                },
                {
                    "class": ".text-pink-900",
                    "css": "color: #831843;"
                }
            ]
        },
        {
            "title": "Text Opacity",
            "classList": [
                {
                    "class": ".text-opacity-0",
                    "css": "text-opacity: 0;"
                },
                {
                    "class": ".text-opacity-5",
                    "css": "text-opacity: 0.05;"
                },
                {
                    "class": ".text-opacity-10",
                    "css": "text-opacity: 0.1;"
                },
                {
                    "class": ".text-opacity-20",
                    "css": "text-opacity: 0.2;"
                },
                {
                    "class": ".text-opacity-25",
                    "css": "text-opacity: 0.25;"
                },
                {
                    "class": ".text-opacity-30",
                    "css": "text-opacity: 0.3;"
                },
                {
                    "class": ".text-opacity-40",
                    "css": "text-opacity: 0.4;"
                },
                {
                    "class": ".text-opacity-50",
                    "css": "text-opacity: 0.5;"
                },
                {
                    "class": ".text-opacity-60",
                    "css": "text-opacity: 0.6;"
                },
                {
                    "class": ".text-opacity-70",
                    "css": "text-opacity: 0.7;"
                },
                {
                    "class": ".text-opacity-75",
                    "css": "text-opacity: 0.75;"
                },
                {
                    "class": ".text-opacity-80",
                    "css": "text-opacity: 0.8;"
                },
                {
                    "class": ".text-opacity-90",
                    "css": "text-opacity: 0.9;"
                },
                {
                    "class": ".text-opacity-100",
                    "css": "text-opacity: 1;"
                }
            ]
        },
        {
            "title": "Font Family",
            "classList": [
                {
                    "class": ".font-sans",
                    "css": "font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";"
                },
                {
                    "class": ".font-serif",
                    "css": "font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;"
                },
                {
                    "class": ".font-mono",
                    "css": "font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;"
                }
            ]
        },
        {
            "title": "Font Size",
            "classList": [
                {
                    "class": ".text-xs",
                    "css": "font-size: 0.75rem; line-height: 1rem;"
                },
                {
                    "class": ".text-sm",
                    "css": "font-size: 0.875rem; line-height: 1.25rem;"
                },
                {
                    "class": ".text-base",
                    "css": "font-size: 1rem; line-height: 1.5rem;"
                },
                {
                    "class": ".text-lg",
                    "css": "font-size: 1.125rem; line-height: 1.75rem;"
                },
                {
                    "class": ".text-xl",
                    "css": "font-size: 1.25rem; line-height: 1.75rem;"
                },
                {
                    "class": ".text-2xl",
                    "css": "font-size: 1.5rem; line-height: 2rem;"
                },
                {
                    "class": ".text-3xl",
                    "css": "font-size: 1.875rem; line-height: 2.25rem;"
                },
                {
                    "class": ".text-4xl",
                    "css": "font-size: 2.25rem; line-height: 2.5rem;"
                },
                {
                    "class": ".text-5xl",
                    "css": "font-size: 3rem; line-height: 1;"
                },
                {
                    "class": ".text-6xl",
                    "css": "font-size: 3.75rem; line-height: 1;"
                },
                {
                    "class": ".text-7xl",
                    "css": "font-size: 4.5rem; line-height: 1;"
                },
                {
                    "class": ".text-8xl",
                    "css": "font-size: 6rem; line-height: 1;"
                },
                {
                    "class": ".text-9xl",
                    "css": "font-size: 8rem; line-height: 1;"
                }
            ]
        },
        {
            "title": "Font Smoothing",
            "classList": [
                {
                    "class": ".antialiased",
                    "css": "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"
                },
                {
                    "class": ".subpixel-antialiased",
                    "css": "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"
                }
            ]
        },
        {
            "title": "Font Style",
            "classList": [
                {
                    "class": ".italic",
                    "css": "font-style: italic;"
                },
                {
                    "class": ".not-italic",
                    "css": "font-style: normal;"
                }
            ]
        },
        {
            "title": "Font Weight",
            "classList": [
                {
                    "class": ".font-thin",
                    "css": "font-weight: 100;"
                },
                {
                    "class": ".font-extralight",
                    "css": "font-weight: 200;"
                },
                {
                    "class": ".font-light",
                    "css": "font-weight: 300;"
                },
                {
                    "class": ".font-normal",
                    "css": "font-weight: 400;"
                },
                {
                    "class": ".font-medium",
                    "css": "font-weight: 500;"
                },
                {
                    "class": ".font-semibold",
                    "css": "font-weight: 600;"
                },
                {
                    "class": ".font-bold",
                    "css": "font-weight: 700;"
                },
                {
                    "class": ".font-extrabold",
                    "css": "font-weight: 800;"
                },
                {
                    "class": ".font-black",
                    "css": "font-weight: 900;"
                }
            ]
        },
        {
            "title": "Font Variant Numeric",
            "classList": [
                {
                    "class": ".normal-nums",
                    "css": "font-variant-numeric: normal;"
                },
                {
                    "class": ".ordinal",
                    "css": "font-variant-numeric: ordinal;"
                },
                {
                    "class": ".slashed-zero",
                    "css": "font-variant-numeric: slashed-zero;"
                },
                {
                    "class": ".lining-nums",
                    "css": "font-variant-numeric: lining-nums;"
                },
                {
                    "class": ".oldstyle-nums",
                    "css": "font-variant-numeric: oldstyle-nums;"
                },
                {
                    "class": ".proportional-nums",
                    "css": "font-variant-numeric: proportional-nums;"
                },
                {
                    "class": ".tabular-nums",
                    "css": "font-variant-numeric: tabular-nums;"
                },
                {
                    "class": ".diagonal-fractions",
                    "css": "font-variant-numeric: diagonal-fractions;"
                },
                {
                    "class": ".stacked-fractions",
                    "css": "font-variant-numeric: stacked-fractions;"
                }
            ]
        },
        {
            "title": "Letter Spacing",
            "classList": [
                {
                    "class": ".tracking-tighter",
                    "css": "letter-spacing: -0.05em;"
                },
                {
                    "class": ".tracking-tight",
                    "css": "letter-spacing: -0.025em;"
                },
                {
                    "class": ".tracking-normal",
                    "css": "letter-spacing: 0;"
                },
                {
                    "class": ".tracking-wide",
                    "css": "letter-spacing: 0.025em;"
                },
                {
                    "class": ".tracking-wider",
                    "css": "letter-spacing: 0.05em;"
                },
                {
                    "class": ".tracking-widest",
                    "css": "letter-spacing: 0.1em;"
                }
            ]
        },
        {
            "title": "Line Height",
            "classList": [
                {
                    "class": ".leading-none",
                    "css": "line-height: 1;"
                },
                {
                    "class": ".leading-tight",
                    "css": "line-height: 1.25;"
                },
                {
                    "class": ".leading-snug",
                    "css": "line-height: 1.375;"
                },
                {
                    "class": ".leading-normal",
                    "css": "line-height: 1.5;"
                },
                {
                    "class": ".leading-relaxed",
                    "css": "line-height: 1.625;"
                },
                {
                    "class": ".leading-loose",
                    "css": "line-height: 2;"
                },
                {
                    "class": ".leading-3",
                    "css": "line-height: .75rem;"
                },
                {
                    "class": ".leading-4",
                    "css": "line-height: 1rem;"
                },
                {
                    "class": ".leading-5",
                    "css": "line-height: 1.25rem;"
                },
                {
                    "class": ".leading-6",
                    "css": "line-height: 1.5rem;"
                },
                {
                    "class": ".leading-7",
                    "css": "line-height: 1.75rem;"
                },
                {
                    "class": ".leading-8",
                    "css": "line-height: 2rem;"
                },
                {
                    "class": ".leading-9",
                    "css": "line-height: 2.25rem;"
                },
                {
                    "class": ".leading-10",
                    "css": "line-height: 2.5rem;"
                }
            ]
        },
        {
            "title": "List Style Type",
            "classList": [
                {
                    "class": ".list-none",
                    "css": "list-style-type: none;"
                },
                {
                    "class": ".list-disc",
                    "css": "list-style-type: disc;"
                },
                {
                    "class": ".list-decimal",
                    "css": "list-style-type: decimal;"
                }
            ]
        },
        {
            "title": "List Style Position",
            "classList": [
                {
                    "class": ".list-inside",
                    "css": "list-style-position: inside;"
                },
                {
                    "class": ".list-outside",
                    "css": "list-style-position: outside;"
                }
            ]
        },
        {
            "title": "Placeholder Color",
            "classList": [
                {
                    "class": ".placeholder-transparent",
                    "css": "color: transparent;"
                },
                {
                    "class": ".placeholder-current",
                    "css": "color: currentColor;"
                },
                {
                    "class": ".placeholder-black",
                    "css": "color: #000000;"
                },
                {
                    "class": ".placeholder-white",
                    "css": "color: #ffffff;"
                },
                {
                    "class": ".placeholder-gray-50",
                    "css": "color: #F9FAFB;"
                },
                {
                    "class": ".placeholder-gray-100",
                    "css": "color: #F3F4F6;"
                },
                {
                    "class": ".placeholder-gray-200",
                    "css": "color: #E5E7EB;"
                },
                {
                    "class": ".placeholder-gray-300",
                    "css": "color: #D1D5DB;"
                },
                {
                    "class": ".placeholder-gray-400",
                    "css": "color: #9CA3AF;"
                },
                {
                    "class": ".placeholder-gray-500",
                    "css": "color: #6B7280;"
                },
                {
                    "class": ".placeholder-gray-600",
                    "css": "color: #4B5563;"
                },
                {
                    "class": ".placeholder-gray-700",
                    "css": "color: #374151;"
                },
                {
                    "class": ".placeholder-gray-800",
                    "css": "color: #1F2937;"
                },
                {
                    "class": ".placeholder-gray-900",
                    "css": "color: #111827;"
                },
                {
                    "class": ".placeholder-red-50",
                    "css": "color: #FEF2F2;"
                },
                {
                    "class": ".placeholder-red-100",
                    "css": "color: #FEE2E2;"
                },
                {
                    "class": ".placeholder-red-200",
                    "css": "color: #FECACA;"
                },
                {
                    "class": ".placeholder-red-300",
                    "css": "color: #FCA5A5;"
                },
                {
                    "class": ".placeholder-red-400",
                    "css": "color: #F87171;"
                },
                {
                    "class": ".placeholder-red-500",
                    "css": "color: #EF4444;"
                },
                {
                    "class": ".placeholder-red-600",
                    "css": "color: #DC2626;"
                },
                {
                    "class": ".placeholder-red-700",
                    "css": "color: #B91C1C;"
                },
                {
                    "class": ".placeholder-red-800",
                    "css": "color: #991B1B;"
                },
                {
                    "class": ".placeholder-red-900",
                    "css": "color: #7F1D1D;"
                },
                {
                    "class": ".placeholder-yellow-50",
                    "css": "color: #FFFBEB;"
                },
                {
                    "class": ".placeholder-yellow-100",
                    "css": "color: #FEF3C7;"
                },
                {
                    "class": ".placeholder-yellow-200",
                    "css": "color: #FDE68A;"
                },
                {
                    "class": ".placeholder-yellow-300",
                    "css": "color: #FCD34D;"
                },
                {
                    "class": ".placeholder-yellow-400",
                    "css": "color: #FBBF24;"
                },
                {
                    "class": ".placeholder-yellow-500",
                    "css": "color: #F59E0B;"
                },
                {
                    "class": ".placeholder-yellow-600",
                    "css": "color: #D97706;"
                },
                {
                    "class": ".placeholder-yellow-700",
                    "css": "color: #B45309;"
                },
                {
                    "class": ".placeholder-yellow-800",
                    "css": "color: #92400E;"
                },
                {
                    "class": ".placeholder-yellow-900",
                    "css": "color: #78350F;"
                },
                {
                    "class": ".placeholder-green-50",
                    "css": "color: #ECFDF5;"
                },
                {
                    "class": ".placeholder-green-100",
                    "css": "color: #D1FAE5;"
                },
                {
                    "class": ".placeholder-green-200",
                    "css": "color: #A7F3D0;"
                },
                {
                    "class": ".placeholder-green-300",
                    "css": "color: #6EE7B7;"
                },
                {
                    "class": ".placeholder-green-400",
                    "css": "color: #34D399;"
                },
                {
                    "class": ".placeholder-green-500",
                    "css": "color: #10B981;"
                },
                {
                    "class": ".placeholder-green-600",
                    "css": "color: #059669;"
                },
                {
                    "class": ".placeholder-green-700",
                    "css": "color: #047857;"
                },
                {
                    "class": ".placeholder-green-800",
                    "css": "color: #065F46;"
                },
                {
                    "class": ".placeholder-green-900",
                    "css": "color: #064E3B;"
                },
                {
                    "class": ".placeholder-blue-50",
                    "css": "color: #EFF6FF;"
                },
                {
                    "class": ".placeholder-blue-100",
                    "css": "color: #DBEAFE;"
                },
                {
                    "class": ".placeholder-blue-200",
                    "css": "color: #BFDBFE;"
                },
                {
                    "class": ".placeholder-blue-300",
                    "css": "color: #93C5FD;"
                },
                {
                    "class": ".placeholder-blue-400",
                    "css": "color: #60A5FA;"
                },
                {
                    "class": ".placeholder-blue-500",
                    "css": "color: #3B82F6;"
                },
                {
                    "class": ".placeholder-blue-600",
                    "css": "color: #2563EB;"
                },
                {
                    "class": ".placeholder-blue-700",
                    "css": "color: #1D4ED8;"
                },
                {
                    "class": ".placeholder-blue-800",
                    "css": "color: #1E40AF;"
                },
                {
                    "class": ".placeholder-blue-900",
                    "css": "color: #1E3A8A;"
                },
                {
                    "class": ".placeholder-indigo-50",
                    "css": "color: #EEF2FF;"
                },
                {
                    "class": ".placeholder-indigo-100",
                    "css": "color: #E0E7FF;"
                },
                {
                    "class": ".placeholder-indigo-200",
                    "css": "color: #C7D2FE;"
                },
                {
                    "class": ".placeholder-indigo-300",
                    "css": "color: #A5B4FC;"
                },
                {
                    "class": ".placeholder-indigo-400",
                    "css": "color: #818CF8;"
                },
                {
                    "class": ".placeholder-indigo-500",
                    "css": "color: #6366F1;"
                },
                {
                    "class": ".placeholder-indigo-600",
                    "css": "color: #4F46E5;"
                },
                {
                    "class": ".placeholder-indigo-700",
                    "css": "color: #4338CA;"
                },
                {
                    "class": ".placeholder-indigo-800",
                    "css": "color: #3730A3;"
                },
                {
                    "class": ".placeholder-indigo-900",
                    "css": "color: #312E81;"
                },
                {
                    "class": ".placeholder-purple-50",
                    "css": "color: #F5F3FF;"
                },
                {
                    "class": ".placeholder-purple-100",
                    "css": "color: #EDE9FE;"
                },
                {
                    "class": ".placeholder-purple-200",
                    "css": "color: #DDD6FE;"
                },
                {
                    "class": ".placeholder-purple-300",
                    "css": "color: #C4B5FD;"
                },
                {
                    "class": ".placeholder-purple-400",
                    "css": "color: #A78BFA;"
                },
                {
                    "class": ".placeholder-purple-500",
                    "css": "color: #8B5CF6;"
                },
                {
                    "class": ".placeholder-purple-600",
                    "css": "color: #7C3AED;"
                },
                {
                    "class": ".placeholder-purple-700",
                    "css": "color: #6D28D9;"
                },
                {
                    "class": ".placeholder-purple-800",
                    "css": "color: #5B21B6;"
                },
                {
                    "class": ".placeholder-purple-900",
                    "css": "color: #4C1D95;"
                },
                {
                    "class": ".placeholder-pink-50",
                    "css": "color: #FDF2F8;"
                },
                {
                    "class": ".placeholder-pink-100",
                    "css": "color: #FCE7F3;"
                },
                {
                    "class": ".placeholder-pink-200",
                    "css": "color: #FBCFE8;"
                },
                {
                    "class": ".placeholder-pink-300",
                    "css": "color: #F9A8D4;"
                },
                {
                    "class": ".placeholder-pink-400",
                    "css": "color: #F472B6;"
                },
                {
                    "class": ".placeholder-pink-500",
                    "css": "color: #EC4899;"
                },
                {
                    "class": ".placeholder-pink-600",
                    "css": "color: #DB2777;"
                },
                {
                    "class": ".placeholder-pink-700",
                    "css": "color: #BE185D;"
                },
                {
                    "class": ".placeholder-pink-800",
                    "css": "color: #9D174D;"
                },
                {
                    "class": ".placeholder-pink-900",
                    "css": "color: #831843;"
                }
            ]
        },
        {
            "title": "Placeholder Opacity",
            "classList": [
                {
                    "class": ".placeholder-opacity-0",
                    "css": "placeholder-opacity: 0;"
                },
                {
                    "class": ".placeholder-opacity-5",
                    "css": "placeholder-opacity: 0.05;"
                },
                {
                    "class": ".placeholder-opacity-10",
                    "css": "placeholder-opacity: 0.1;"
                },
                {
                    "class": ".placeholder-opacity-20",
                    "css": "placeholder-opacity: 0.2;"
                },
                {
                    "class": ".placeholder-opacity-25",
                    "css": "placeholder-opacity: 0.25;"
                },
                {
                    "class": ".placeholder-opacity-30",
                    "css": "placeholder-opacity: 0.3;"
                },
                {
                    "class": ".placeholder-opacity-40",
                    "css": "placeholder-opacity: 0.4;"
                },
                {
                    "class": ".placeholder-opacity-50",
                    "css": "placeholder-opacity: 0.5;"
                },
                {
                    "class": ".placeholder-opacity-60",
                    "css": "placeholder-opacity: 0.6;"
                },
                {
                    "class": ".placeholder-opacity-70",
                    "css": "placeholder-opacity: 0.7;"
                },
                {
                    "class": ".placeholder-opacity-75",
                    "css": "placeholder-opacity: 0.75;"
                },
                {
                    "class": ".placeholder-opacity-80",
                    "css": "placeholder-opacity: 0.8;"
                },
                {
                    "class": ".placeholder-opacity-90",
                    "css": "placeholder-opacity: 0.9;"
                },
                {
                    "class": ".placeholder-opacity-100",
                    "css": "placeholder-opacity: 1;"
                }
            ]
        },
        {
            "title": "Text Align",
            "classList": [
                {
                    "class": ".text-left",
                    "css": "text-align: left;"
                },
                {
                    "class": ".text-center",
                    "css": "text-align: center;"
                },
                {
                    "class": ".text-right",
                    "css": "text-align: right;"
                },
                {
                    "class": ".text-justify",
                    "css": "text-align: justify;"
                }
            ]
        },
        {
            "title": "Text Decoration",
            "classList": [
                {
                    "class": ".underline",
                    "css": "text-decoration: underline;"
                },
                {
                    "class": ".line-through",
                    "css": "text-decoration: line-through;"
                },
                {
                    "class": ".no-underline",
                    "css": "text-decoration: none;"
                }
            ]
        },
        {
            "title": "Text Transform",
            "classList": [
                {
                    "class": ".uppercase",
                    "css": "text-transform: uppercase;"
                },
                {
                    "class": ".lowercase",
                    "css": "text-transform: lowercase;"
                },
                {
                    "class": ".capitalize",
                    "css": "text-transform: capitalize;"
                },
                {
                    "class": ".normal-case",
                    "css": "text-transform: none;"
                }
            ]
        },
        {
            "title": "Text Overflow",
            "classList": [
                {
                    "class": ".truncate",
                    "css": "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                },
                {
                    "class": ".overflow-ellipsis",
                    "css": "text-overflow: ellipsis;"
                },
                {
                    "class": ".overflow-clip",
                    "css": "text-overflow: clip;"
                }
            ]
        },
        {
            "title": "Vertical Align",
            "classList": [
                {
                    "class": ".align-baseline",
                    "css": "vertical-align: baseline;"
                },
                {
                    "class": ".align-top",
                    "css": "vertical-align: top;"
                },
                {
                    "class": ".align-middle",
                    "css": "vertical-align: middle;"
                },
                {
                    "class": ".align-bottom",
                    "css": "vertical-align: bottom;"
                },
                {
                    "class": ".align-text-top",
                    "css": "vertical-align: text-top;"
                },
                {
                    "class": ".align-text-bottom",
                    "css": "vertical-align: text-bottom;"
                }
            ]
        },
        {
            "title": "White Space",
            "classList": [
                {
                    "class": ".whitespace-normal",
                    "css": "white-space: normal;"
                },
                {
                    "class": ".whitespace-nowrap",
                    "css": "white-space: nowrap;"
                },
                {
                    "class": ".whitespace-pre",
                    "css": "white-space: pre;"
                },
                {
                    "class": ".whitespace-pre-line",
                    "css": "white-space: pre-line;"
                },
                {
                    "class": ".whitespace-pre-wrap",
                    "css": "white-space: pre-wrap;"
                }
            ]
        },
        {
            "title": "Word Break",
            "classList": [
                {
                    "class": ".break-normal",
                    "css": "overflow-wrap: normal; word-break: normal;"
                },
                {
                    "class": ".break-words",
                    "css": "overflow-wrap: break-word;"
                },
                {
                    "class": ".break-all",
                    "css": "word-break: break-all;"
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
                    "css": ""
                },
                {
                    "class": ".shadow-sm",
                    "css": ""
                },
                {
                    "class": ".shadow",
                    "css": ""
                },
                {
                    "class": ".shadow-md",
                    "css": ""
                },
                {
                    "class": ".shadow-lg",
                    "css": ""
                },
                {
                    "class": ".shadow-xl",
                    "css": ""
                },
                {
                    "class": ".shadow-2xl",
                    "css": ""
                },
                {
                    "class": ".shadow-inner",
                    "css": ""
                },
                {
                    "class": ".shadow-outline",
                    "css": ""
                },
                {
                    "class": ".shadow-none",
                    "css": "box-shadow: none;"
                }
            ]
        },
        {
            "title": "Opacity",
            "classList": [
                {
                    "class": ".opacity-0",
                    "css": "opacity: 0;"
                },
                {
                    "class": ".opacity-5",
                    "css": "opacity: 0.05;"
                },
                {
                    "class": ".opacity-10",
                    "css": "opacity: 0.1;"
                },
                {
                    "class": ".opacity-20",
                    "css": "opacity: 0.2;"
                },
                {
                    "class": ".opacity-25",
                    "css": "opacity: 0.25;"
                },
                {
                    "class": ".opacity-30",
                    "css": "opacity: 0.3;"
                },
                {
                    "class": ".opacity-40",
                    "css": "opacity: 0.4;"
                },
                {
                    "class": ".opacity-50",
                    "css": "opacity: 0.5;"
                },
                {
                    "class": ".opacity-60",
                    "css": "opacity: 0.6;"
                },
                {
                    "class": ".opacity-70",
                    "css": "opacity: 0.7;"
                },
                {
                    "class": ".opacity-75",
                    "css": "opacity: 0.75;"
                },
                {
                    "class": ".opacity-80",
                    "css": "opacity: 0.8;"
                },
                {
                    "class": ".opacity-90",
                    "css": "opacity: 0.9;"
                },
                {
                    "class": ".opacity-100",
                    "css": "opacity: 1;"
                }
            ]
        },
        {
            "title": "Mix Blend Mode",
            "classList": [
                {
                    "class": ".mix-blend-normal",
                    "css": "mix-blend-mode: normal;"
                },
                {
                    "class": ".mix-blend-multiply",
                    "css": "mix-blend-mode: multiply;"
                },
                {
                    "class": ".mix-blend-screen",
                    "css": "mix-blend-mode: screen;"
                },
                {
                    "class": ".mix-blend-overlay",
                    "css": "mix-blend-mode: overlay;"
                },
                {
                    "class": ".mix-blend-darken",
                    "css": "mix-blend-mode: darken;"
                },
                {
                    "class": ".mix-blend-lighten",
                    "css": "mix-blend-mode: lighten;"
                },
                {
                    "class": ".mix-blend-color-dodge",
                    "css": "mix-blend-mode: color-dodge;"
                },
                {
                    "class": ".mix-blend-color-burn",
                    "css": "mix-blend-mode: color-burn;"
                },
                {
                    "class": ".mix-blend-hard-light",
                    "css": "mix-blend-mode: hard-light;"
                },
                {
                    "class": ".mix-blend-soft-light",
                    "css": "mix-blend-mode: soft-light;"
                },
                {
                    "class": ".mix-blend-difference",
                    "css": "mix-blend-mode: difference;"
                },
                {
                    "class": ".mix-blend-exclusion",
                    "css": "mix-blend-mode: exclusion;"
                },
                {
                    "class": ".mix-blend-hue",
                    "css": "mix-blend-mode: hue;"
                },
                {
                    "class": ".mix-blend-saturation",
                    "css": "mix-blend-mode: saturation;"
                },
                {
                    "class": ".mix-blend-color",
                    "css": "mix-blend-mode: color;"
                },
                {
                    "class": ".mix-blend-luminosity",
                    "css": "mix-blend-mode: luminosity;"
                }
            ]
        },
        {
            "title": "Background Blend Mode",
            "classList": [
                {
                    "class": ".bg-blend-normal",
                    "css": "background-blend-mode: normal;"
                },
                {
                    "class": ".bg-blend-multiply",
                    "css": "background-blend-mode: multiply;"
                },
                {
                    "class": ".bg-blend-screen",
                    "css": "background-blend-mode: screen;"
                },
                {
                    "class": ".bg-blend-overlay",
                    "css": "background-blend-mode: overlay;"
                },
                {
                    "class": ".bg-blend-darken",
                    "css": "background-blend-mode: darken;"
                },
                {
                    "class": ".bg-blend-lighten",
                    "css": "background-blend-mode: lighten;"
                },
                {
                    "class": ".bg-blend-color-dodge",
                    "css": "background-blend-mode: color-dodge;"
                },
                {
                    "class": ".bg-blend-color-burn",
                    "css": "background-blend-mode: color-burn;"
                },
                {
                    "class": ".bg-blend-hard-light",
                    "css": "background-blend-mode: hard-light;"
                },
                {
                    "class": ".bg-blend-soft-light",
                    "css": "background-blend-mode: soft-light;"
                },
                {
                    "class": ".bg-blend-difference",
                    "css": "background-blend-mode: difference;"
                },
                {
                    "class": ".bg-blend-exclusion",
                    "css": "background-blend-mode: exclusion;"
                },
                {
                    "class": ".bg-blend-hue",
                    "css": "background-blend-mode: hue;"
                },
                {
                    "class": ".bg-blend-saturation",
                    "css": "background-blend-mode: saturation;"
                },
                {
                    "class": ".bg-blend-color",
                    "css": "background-blend-mode: color;"
                },
                {
                    "class": ".bg-blend-luminosity",
                    "css": "background-blend-mode: luminosity;"
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
                    "css": "transition-delay: 75ms;"
                },
                {
                    "class": ".delay-100",
                    "css": "transition-delay: 100ms;"
                },
                {
                    "class": ".delay-150",
                    "css": "transition-delay: 150ms;"
                },
                {
                    "class": ".delay-200",
                    "css": "transition-delay: 200ms;"
                },
                {
                    "class": ".delay-300",
                    "css": "transition-delay: 300ms;"
                },
                {
                    "class": ".delay-500",
                    "css": "transition-delay: 500ms;"
                },
                {
                    "class": ".delay-700",
                    "css": "transition-delay: 700ms;"
                },
                {
                    "class": ".delay-1000",
                    "css": "transition-delay: 1000ms;"
                }
            ]
        },
        {
            "title": "Transition Property",
            "classList": [
                {
                    "class": ".transition",
                    "css": "transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;"
                },
                {
                    "class": ".transition-none",
                    "css": "transition-property: none;"
                },
                {
                    "class": ".transition-all",
                    "css": "transition-property: all;"
                },
                {
                    "class": ".transition-colors",
                    "css": "transition-property: background-color, border-color, color, fill, stroke;"
                },
                {
                    "class": ".transition-opacity",
                    "css": "transition-property: opacity;"
                },
                {
                    "class": ".transition-shadow",
                    "css": "transition-property: box-shadow;"
                },
                {
                    "class": ".transition-transform",
                    "css": "transition-property: transform;"
                }
            ]
        },
        {
            "title": "Transition Duration",
            "classList": [
                {
                    "class": ".duration-75",
                    "css": "transition-duration: 75ms;"
                },
                {
                    "class": ".duration-100",
                    "css": "transition-duration: 100ms;"
                },
                {
                    "class": ".duration-150",
                    "css": "transition-duration: 150ms;"
                },
                {
                    "class": ".duration-200",
                    "css": "transition-duration: 200ms;"
                },
                {
                    "class": ".duration-300",
                    "css": "transition-duration: 300ms;"
                },
                {
                    "class": ".duration-500",
                    "css": "transition-duration: 500ms;"
                },
                {
                    "class": ".duration-700",
                    "css": "transition-duration: 700ms;"
                },
                {
                    "class": ".duration-1000",
                    "css": "transition-duration: 1000ms;"
                }
            ]
        },
        {
            "title": "Transition Timing Function",
            "classList": [
                {
                    "class": ".ease-linear",
                    "css": "transition-timing-function: linear;"
                },
                {
                    "class": ".ease-in",
                    "css": "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);"
                },
                {
                    "class": ".ease-out",
                    "css": "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);"
                },
                {
                    "class": ".ease-in-out",
                    "css": "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"
                }
            ]
        },
        {
            "title": "Animation",
            "classList": [
                {
                    "class": ".animate-none",
                    "css": "animation: none;"
                },
                {
                    "class": ".animate-spin",
                    "css": "animation: spin 1s linear infinite; @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }"
                },
                {
                    "class": ".animate-ping",
                    "css": "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }"
                },
                {
                    "class": ".animate-pulse",
                    "css": "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }"
                },
                {
                    "class": ".animate-bounce",
                    "css": "animation: animation: bounce 1s infinite; @keyframes bounce { 0%, 100% { transform: translateY(-25%); animationTimingFunction: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animationTimingFunction: cubic-bezier(0, 0, 0.2, 1); } }"
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
                    "css": "fill: currentColor;"
                }
            ]
        },
        {
            "title": "Stroke",
            "classList": [
                {
                    "class": ".stroke-current",
                    "css": "stroke: currentColor;"
                }
            ]
        },
        {
            "title": "Stroke Width",
            "classList": [
                {
                    "class": ".stroke-0",
                    "css": "stroke-width: 0;"
                },
                {
                    "class": ".stroke-1",
                    "css": "stroke-width: 1;"
                },
                {
                    "class": ".stroke-2",
                    "css": "stroke-width: 2;"
                }
            ]
        }
    ]
}

export default tailwindObj;

export const tailwindList = Object.values(tailwindObj).reduce((acc, h3Array) => {
    h3Array.forEach(h3Item => {
        if (h3Item.classList) {
            acc = acc.concat(h3Item.classList);
        }
    });
    return acc;
}, []);

export const getCss=(classText)=>{
    let cssText=""
    const unParseClassList = []
    classText.split(' ').forEach((el,i)=>{
        const findClass = tailwindList.find(ele=>ele.class.replace(".","")===el)
        if(findClass){
            cssText += `${i===0?'':'\n'}${findClass.css}`
        }else{
            if(el){
                unParseClassList.push(el)
            }
        }
    })
    if(unParseClassList.length>0){
        cssText += `${cssText.length===0?"":"\n"}/*`
        unParseClassList.forEach(el=>{
            cssText += ` ${el}`
        })
        cssText += " */"
    }

    return cssText.replace("\n/*  */","")
}

export const formatCss = (classText) => {
    const styles = {
        normal: "",
        active: "",
        hover: "",
        placeholder: "",
        first: "",
        last: "",
    };

    classText.split(' ').forEach(el => {
        if (el.includes(":")) {
            const [state, value] = el.split(":");
            if (styles[state] !== undefined) {
                styles[state] += value + " ";
            }
        } else {
            styles.normal += el + " ";
        }
    });

    return Object.fromEntries(
        Object.entries(styles).map(([key, value]) => [key, getCss(value.trim())])
    );
}
