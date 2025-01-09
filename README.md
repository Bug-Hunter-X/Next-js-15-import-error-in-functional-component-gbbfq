# Next.js 15 import error in functional component

This repository demonstrates a bug encountered in Next.js 15 where a specific import statement within a functional component causes an error.  The error occurs when attempting to import a module that uses dynamic imports or certain types of exports.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console.

## Solution

The solution involves restructuring the import statement or the imported module to avoid the conflict with Next.js 15's build process.  The specifics of the solution are shown in the `bugSolution.js` file.