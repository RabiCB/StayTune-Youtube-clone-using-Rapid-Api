
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Videoinfo from './Components/Videoinfo';
import Navbar from './Components/Navbar';
import Channel from './Components/Channel';
import Search from './Components/Search';
import Coding from './Components/Coding'
import Loginpage from './AuthContext/Loginpage';
import Signup from './AuthContext/Signup';
import { AuthProvider } from './AuthContext/AuthProvider';
import Forgetpassword from './AuthContext/Forget';
import About from './Components/About';
import ProtectRoute from './AuthContext/ProtectRoute';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>

     <Route path="/" element={<ProtectRoute><Home/></ProtectRoute>}/>
     <Route path="/coding" element={<Coding/>}/>
     <Route path="/navbar" element={<Navbar/>}/>
     <Route path="v/:id" element={<Videoinfo/>}/>
     <Route path="/forgetpassword" element={<Forgetpassword/>}/>
     <Route path="/search/:search" element={<Search/>}/>
     <Route path="/login" element={<Loginpage/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/about" element={<About/>}/>

    </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
