import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import MyComponent from './views/Example/Mycomponent'
import MyComponentFrom from './views/Example/MyComponentForm'

function App() {
  return (
    
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Hello world ReactJS with HoiDanIT
          </p>
          <MyComponentFrom />
        </div>
      </div>
    
  )
}

export default App
