import { DashBoardSideBar } from "../../../Components/DashBoardSideBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import TableProdutos from "../../../Components/TableProdutos";
import './styles.css'

import DashboardHeader from "../../../Components/DashBoardHeader";

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

            <div className="w-full">
                <DashboardHeader/>
                <div className="produtos-container">
                    <header className="flex items-center justify-between">
                      <h1 className="text-3xl text-neutral-800  font-bold">Produtos</h1>
                      <button className="button-produtos-header bg-neutral-800 rounded text-white text-sm flex items-center gap-3.5 "><FontAwesomeIcon icon={faPlus} className="text-sm" /> Novo Produto</button>
                    </header>

                    <TableProdutos />
                </div>
            </div>
        </div>
    )
}