import { DashBoardSideBar } from "../../../Components/DashBoardSideBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Produtos() {

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

            <div>
                <h1>meus produtos</h1>
            </div>
        </div>
    )
}