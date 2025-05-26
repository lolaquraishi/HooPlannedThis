import { useState } from 'react'
import './App.css'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="dashboard">
        <Dashboard />
    </div>
  )
}

export default App
