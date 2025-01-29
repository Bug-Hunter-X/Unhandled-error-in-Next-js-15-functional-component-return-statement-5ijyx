```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is an example of an uncommon bug in Next.js 15 related to the use of a function in the return statement that throws an error.</p>
      <MyComponent/>
    </div>
  );
}

function MyComponent(){
  const throwError = () => {
    throw new Error('An error occurred in MyComponent');
  };

  return(
    <div>
      <button onClick={throwError}>Throw Error</button>
    </div>
  );
}
```