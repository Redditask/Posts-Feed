import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import AppRouter from "./components/UI/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(()=>{
      if(localStorage.getItem("auth")){
          setIsAuth(true);
      }
    },[])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
