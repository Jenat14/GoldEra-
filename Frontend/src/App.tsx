import './App.css'
import Navigator from './Routes/index'
import { BrowserRouter } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  )
}

export default App
