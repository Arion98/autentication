import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Login from "./components/Login"
import Home from "./components/home"
import Register from "./components/register";
import PrivateRoute from './components/privateroute';

const App = () => {
  return (
     <div>
        <Router>
       
          <Routes>
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route exact path="/login" element={<Login/>} />
                <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
                <Route path="/register" element={<Register />}></Route>
          </Routes>
      </Router>
     </div>
  );
};


export default App;

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Router>
//     <NavBar/>
//     <Routes>
//       <Route path="/login" element={<Login />}/>
//       <Route path="/" element={<Tarefas />} />
//       <Route path="/tarefas" element={<RegisterTarefas />} />
//       <Route path="/Registrar" element={<Register />}/>
//     </Routes>
//   </Router>
// )