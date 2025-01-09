```javascript
// pages/index.js

export default function Home() {
  //Instead of direct import try to import it as a module and then use it.
  const dynamicImportModule = dynamic(() => import('./myModule'), { ssr: false });

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {dynamicImportModule && <dynamicImportModule.MyComponent/>}
    </div>
  );
}
```