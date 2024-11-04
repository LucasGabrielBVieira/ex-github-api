import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import InitialPage from "./routes/Home/InitialPage/indes"
import SearchPage from "./routes/Home/SearchPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<InitialPage/>}/>
          <Route path="search" element={<SearchPage/>} />
       </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
