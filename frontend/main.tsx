import React from 'react'
import { createRoot } from 'react-dom/client'
import { SmartButton } from '../outputs/SmartButton'

const App = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">SmartButton Playground</h1>
      <SmartButton
        label="Test Button"
        action="testAction"
        onClick={() => new Promise(res => setTimeout(res, 1000))}
      />
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
