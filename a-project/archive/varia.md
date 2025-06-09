# CommonJS vs ES Module

- CommonJS (outdated): package.json -> `"type": "commonjs"`,
  `const express = require("express");`
- ES Module (modern): package.json -> `"type": "module"`,
  `import express from "express";`

# Prettier

- recommended package to integrate Prettier with ESlint:
  https://github.com/prettier/eslint-config-prettier

- `npm i --save-dev prettier` (to install Prettier),
- `npm i --save-dev --save-exact prettier` (to hardcode Prettier version, to avoid different formatting with different versions),
- `npx prettier --write fileName.js` (to format a file),
- `npx prettier --write .` (to format all files),
- `npx prettier --check fileName.js` (to check file formatting),
- `npx prettier . --check` (to check all files formatting),

- Prettier as VS Code plugin (to set it as default formatter and to format on-save):
  VS Code extensions: install Prettier - Code formatter,
  VS Code settings => set default formatter to Prettier (format on-save / format on-paste (optional)),

- in project directory create .prettierignore (to list files/folders to be ignored),
- in project directory create .prettierrc (or .prettierrc.json) (for formatting rules),
- within .prettierrc.json set configuration:
  {
  "semi": true,
  "singleQuote": false,
  "useTabs": true,
  "tabWidth": 2,
  "bracketSpacing": true,
  "arrowParens": "always",
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSameLine": true
  }

or (this is recommended if we want to have prettier config globally, for all the projects):

- go to VS Code stettings -> json,
- paste prettier configuration directly to json file,

# TypeScript

- `npm i typescript -g` (to install tsc globally),
- `tsc –init` (to create tsconfig.json file),

  - "noEmitOnError": false / true, (compile or not if error),

  - "rootDir": "./src" (to point folder with files to compile),
  - "outDir": "./build/js" (to point folder to store compiled files),
  - "include": ["src"] (to include only particular dir to compile),
  - "exclude": ["build"] (to exclude dir from being compiled),

- `tsc filename.ts othername.js` (to compile ts into js file),
- `tsc filename.ts` (to compile ts into js file of the same name),
- `tsc -w` (to watch changes in all ts files),
- `tsc dir/practice.ts -w` (to watch changes in a single ts file),
- `tsc --noEmitOnError filename.ts` (not to compile if error is present),

# VS extensions & fonts & themes

- Live Server,
- vscode-icons (or Material Icon Theme) (nice looking icons),
- JavaScript (ES6) code snippets (e.g. clg => console.log()),
- Thunder Client (API),
- Code Runner (to run code => a triangle sign in menu),
- Prettier,
- ESLint,
- IntelliCode,
- GitHub co-pilot,

- emmet for React (tag autocomplete), VS code settings.json:
  "emmet.includeLanguages": {
  "javascript": "javascriptreact",
  "typescript": "typescriptreact"
  }

- preferred font: Cascadia Mono,
- preferred theme: One Monokai (Dark),

# VS Code key shortcuts

- ctrl + opt + N => to run the code
- option + click -> multicursor;
- option + down arrow | up arrow -> move line;
- shift + option + down arrow -> duplicate line;
- command + d -> select next occurrence;
- command + shift + l -> select all occurrences;

# UNIX commands

`|` => pipe operator; separates commands, so that the output of one command becomes an input for another (e.g. `grep something test.txt | wc -w`)
`>` => redirects output (e.g. `echo “Hello World” > test.txt` will store the string into the file);
`>>` => appends output (e.g. `echo “Hello World again” >> test.txt` will append the string into the file);

ctrl + c => kill node process,
ctrl + r => search in commands history,
ctrl + l => clear terminal,

-v => verbose (tells what's been done, e.g. rm),
-i => interactive (asks for confirmation, e.g. rm),
-r => recursive (does on all levels, e.g. rm),

`cd /`, `cd /System` => go to root directory (top level);
`cd ~`, `cd ~/Desktop` => go to home directory (~ = /Users/llebioda);
`cd Desktop` => follow relative path to my current directory (no / );
`cd ..`, `cd ../../..` => go back;
`clear` (ctrl + l) => clears terminal;
`clear -x` => clears terminal and preserves scrollback history;
`cp test1.pdf test2.pdf` => copies files into in the same directory;
`cp test1.pdf ../folder/test2.pdf` => copies files and moves them;
`cp -r folder folder_copy` => mcopies folders recursively;
`ls` => lists files (ls -a, ls -l, ls -al, ls -1);
`man grep` => displays manual of a specific command;
`mkdir dogs cats` => creates directory (or directories);
`mkdir cats/wildcats` => creates directory within directory;
`mv file.txt newfile.txt` => renames files/folders;
`mv file1.txt file2.txt folder` => moves file(s) into folders;
`mv folder ../` => moves folders backwards;
`open .` => (mac only) opens current directory in finder;
`open TestOps/Jenkins` => (mac only) opens directory in finder;
`open test.pdf` => opens file in default editor;
`pwd` => displays curent working directory;
`rm test1.txt test2.txt` => removes file(s);
`rm -r folder` => removes folders recursively (if not empty);
`rmdir folder` => removes folders (if empty) (same as `rm`);
`touch lala.pdf` => creates file (or adds timestamp to existing one);
`where node`, `which node` => tells where certain app is installed;
`whoami` => tells who’s the currently logged-in user;
