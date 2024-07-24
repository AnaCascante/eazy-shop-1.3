import { useState } from 'react'
import eazyshop from '../../assets/eazyshop.svg'
import '../../index.css'
import Layout from '../Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world</h1>
        <img src={eazyshop} className="logo eazyshop" alt="eazyshop logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Layout />
    </>
  )
}

export default App
