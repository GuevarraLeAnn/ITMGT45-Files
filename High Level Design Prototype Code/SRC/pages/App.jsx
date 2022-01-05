import Home from './home/index'
import Community from './community/index'
import Navigation from './navigation/index'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </Router>
  )
}

export default App
