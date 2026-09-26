import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routs/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
    </>
  )
}

export default App
