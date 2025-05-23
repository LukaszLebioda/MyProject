# CommonJS vs ES Module

- CommonJS (outdated): package.json -> `"type": "commonjs"`,
  `const express = require("express");`
- ES Module (modern): package.json -> `"type": "module"`,
  `import express from "express";`

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
`ls` => lists files (ls -a, ls -l, ls -al, ls -1);
`man grep` => displays manual of a specific command;
`mkdir dogs cats` => creates directory (or directories);
`mkdir cats/wildcats` => creates directory within directory;
`open TestOps/Jenkins` => (mac only?) opens finder;
`pwd` => displays curent working directory;
`rm test1.txt test2.txt` => removes file(s);
`rm -r folder` => removes folders recursively (if not empty);
`rmdir folder` => removes folders (if empty) (same as `rm`);
`touch lala.pdf` => creates file (or adds timestamp to existing one);
`where node`, `which node` => tells where certain app is installed;
`whoami` => tells who’s the currently logged-in user;
