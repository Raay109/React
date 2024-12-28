import React from 'react'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div>
      {window.innerWidth > 300 && (
        <div>
      <Navbar/>
      </div>
)}
    </div>
  )
}

export default App