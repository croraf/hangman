# About "maptopath" application

Small app that converts 2-D map inputted to 1-D path starting at '@' and ending at 'x'.

Deployed at: https://vrafaeli.000webhostapp.com/#/

# How to use

Required: node v8.9.1 or greater, npm v5.5.1 or greater.

    1. From 'frontend' folder run "npm install".

    2a. From 'frontend' folder run "npm run compile". 
    Required production files are 'index.html' and 'frontend/dist/bundle.js'. 
    Open '<full-path-to>/index.html' in browser.
    
    2b. Alternatively you can also run in development mode by running "npm run dev" from 'frontend' folder. 
    Open 'localhost:9002' in browser


# TODO (issues)

    1. Scrolling interferes with calculation thread
    2. Maybe stop solving if path is ambiguous (easy fix)
    3. Current position highlight is not aligned with map when map is scrolled
