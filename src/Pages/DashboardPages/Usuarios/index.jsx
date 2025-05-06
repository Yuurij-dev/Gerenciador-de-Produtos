import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import DashboardHeader from "../../../Components/DashBoardHeader";
import { DashBoardSideBar } from "../../../Components/DashBoardSideBar";

import UserContainer from "../../../Components/UserContainer";

import './styles.css'

export default function UsuariosPage() {
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
            <DashBoardSideBar />

            <div className="w-full">
                <DashboardHeader/>
                <div className="dashboard-container">
                    <UserContainer/>
                </div>
            </div>
        </div>
      )
}