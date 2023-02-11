# TypeScript
##### Install typescript :  
npm install typescript -g
##### Typescript(main.ts) file change to Javascript(main.js) file with this command  
tsc main.ts
##### To monitor changes main.ts to main.js with -w flag in the command  
tsc main.ts -w
##### To avoid crossing(main.ts and main.js) foldering nedded  
Folder name : duild(for index.html, js files ....all build folders)  
Folder name : src(for all raw code like ...ts files)  
##### To maintain automatic changes from .ts(src) to .js(build) two command needed   
1. create tsconfig.json file with this command : tsc --init  
2. make changes in tsconfig.json for root derectory("rootDir": "./src") and output derectory("outDir": "./build/js")
3. To watch all changes with this command :   tsc -w  
##### To restrict .ts to .js files other then src , additional lines needed in tsconfig.json file  
"include": ["src"]
