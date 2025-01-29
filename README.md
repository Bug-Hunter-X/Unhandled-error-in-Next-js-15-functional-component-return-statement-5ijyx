# Unhandled error in Next.js 15 functional component return statement

This repository demonstrates a scenario where an unhandled error within a functional component's return statement in Next.js 15 can lead to unexpected behavior. The error occurs when a function called within the return statement throws an exception.

## Problem

The provided `bug.js` demonstrates this issue. Clicking the button triggers an error within the `MyComponent` which is not properly handled, causing silent failure. This issue stems from the fact the error is not thrown in the traditional try-catch block manner, but within the return statement's function call causing the error to be swallowed by the rendering mechanism.

## Solution

The `bugSolution.js` file provides a solution using error boundaries to gracefully handle this type of error. Error boundaries can catch errors that happen in their child component tree.  This method ensures the entire app doesn't crash, displaying a fallback UI instead.

## Steps to reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Click the "Throw Error" button on the page.

Note that the error might not be immediately visible in the console, depending on the Next.js version and development setup. Error boundaries provide a robust and user-friendly way to mitigate this particular issue.