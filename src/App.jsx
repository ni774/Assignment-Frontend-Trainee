import React, { useState } from 'react'
import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard'

function App() {
  const [searchKeywords, setSearchKeywords] = useState('');
  return (
    <div>
      <Nav searchKeywords={searchKeywords} setSearchKeywords={setSearchKeywords}/>
      <Dashboard searchKeywords={searchKeywords}/>
    </div>
  )
}

export default App