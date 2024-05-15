import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewGame } from "./pages/NewGame";

function App(): JSX.Element {

  return (
    <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/v1/new-game" element={<NewGame/>}/>
    </Routes> 
  )
}

export default App
