```javascript
// pages/index.js

export default function Home() {
  const [showComponent, setShowComponent] = React.useState(true);

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Hide' : 'Show'}
      </button>
      {showComponent && <MyComponent/>}
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('MyComponent mounted');
    return () => {
      console.log('MyComponent unmounted');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```