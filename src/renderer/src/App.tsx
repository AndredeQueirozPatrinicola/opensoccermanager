import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

function App(): JSX.Element {

  return (
    <Routes> 
        <Route path="/" element={<Home/>}/>
    </Routes> 
  )
}

export default App


//  <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/" element={<ProtectedRoute/>} >
//           <Route path="/" element={<Home/>}/>
//       </Route > 