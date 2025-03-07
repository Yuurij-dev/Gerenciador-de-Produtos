import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const logout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/login')
    };

    return(
        <div>
            <h1>dashboard</h1>

            <button onClick={logout}>sair</button>
        </div>
    )
}