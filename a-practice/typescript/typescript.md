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
