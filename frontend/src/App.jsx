import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes will be added here */}
        <Route path="/" element={<div>Batch Fund Collection System</div>} />
      </Routes>
    </Router>
  )
}

export default App
