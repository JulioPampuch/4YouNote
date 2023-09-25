import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/home'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages