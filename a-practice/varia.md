# CommonJS vs ES Module

- CommonJS (outdated): package.json -> `"type": "commonjs"`,
  `const express = require("express");`
- ES Module (modern): package.json -> `"type": "module"`,
  `import express from "express";`

# Node_modules

npm i / npm install (as dependency)
npm install -D / npm install --save-dev (as devDependency)
npm install -g (globally)
npm install --save-exact (installs the exact version, not ~ or ^),

# process.argv

It's an array of arguments passed to the script while executing a script in cli, where arg[0] is a path to node executable, arg[1] is a path to file to be executed, and args after that are optional, e.g.:
[
'/path/to/node',
'/ath/to/myscript.js',
'arg3(optional)',
'arg4(optional)
]

script:
const name = process.argv[2];
const age = process.argv[3];
console.log(`Hello ${name}, you're ${age}!`);

input:
node hello.js Wookie 43

output:
Hello Wookie, you're 43!

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

# SSH

1. First generate private key (restricted, kept locally only) and public key (.pub, kept publicly on a Bitbucket or GitHub server):
   ssh-keygen -t ed25519 -C "yourname@email.com"

- ssh-keygen alone would generate an RSA key which is deprecated,
- that's why type -t ed25519 to use better encrypting algorithm,
- optionally we can type -b 256 to use 256-byte algorithm,

2. The terminal output is:
   "Enter file in which to save the key (/Users/llebioda/.ssh/id_ed25519):"

- (optionally) change path (/Users/llebioda/.ssh/) or file name (id_ed25519) ,
- or hit enter to accept default values,
- passphrase is optional,

3. Now we can list keys in our .ssh directory:
   ls -l ~/.ssh

4. And read the file with the public key:
   cat ~/.ssh/id_ed25519.pub

5. Copy the content of the public ssh file into Bitbucket / GitHub etc.:
   exapmple of the content:
   "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAw3ml60+tnwfDsRbd9JWxT++/EIF65rJ/8cWizNKmEx my@email.com"

# Versioning

example of version: 1.28.2:

- 1: major (risk of uncompatible changes),
- 28: minor (new, but compatible functionalities),
- 2: patches (bugfixes, security updates etc.)

~ patch / minor version update allowed
(~1.2.3 will match all 1.2.x but not 1.3.x versions),
^ major version update allowed
(^1.2.3 will use releases from 1.2.3 to < 2.0.0),

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
- highlight, then cmd + d -> highlight the same words,

- cmd + / -> comment,
- cmd + b -> hide explorer,
- ctrl + ` -> toggle terminal,
- cmd + shift + p -> search (palette),

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
