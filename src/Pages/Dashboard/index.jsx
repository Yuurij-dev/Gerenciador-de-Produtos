import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DashBoardSideBar } from "../../Components/DashBoardSideBar";
import DashboardHeader from "../../Components/DashBoardHeader";

import DashboardContainer from "../../Components/DashboardContainer";

export default function Dashboard() {
    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    useEffect(() => {
        // Verifica se o usuário está logado
        const user = localStorage.getItem('user');
        if (!user) {
          // Se não estiver logado, redireciona para a página de login
          navigate('/login');
        } else {
          setIsLoggedIn(true);
        }
      }, [navigate]);


    return(
        <div className="w-full flex">
            <DashBoardSideBar/>

            <div className="w-full">
                <DashboardHeader/>
                <div className="produtos-container">
                    
                    <DashboardContainer/>
                </div>
            </div>

        </div>
    )
}