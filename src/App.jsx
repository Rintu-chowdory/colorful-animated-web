import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white flex flex-col items-center justify-center p-6">
      <div className="flex gap-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-20 animate-pulse hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-20 animate-spin-slow hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>

      <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg">
        Colorful Animated Web
      </h1>
      <h2 className="text-2xl font-semibold text-yellow-300 mb-6 animate-pulse">
        by Rintu Chowdory
      </h2>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full animate-bounce transition-all duration-300"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-white/80">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-8 text-white/70 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

