import './styles.css'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react';

export function Home() {
    const navigate = useNavigate();
    
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const hangleNavigate = (e) => {
        const buttonHome = document.getElementById('button-home')

        buttonHome.innerText = 'Carregando...'
        setTimeout( () => {
            localStorage.setItem('user', 'loggedIn');
            setIsLoggedIn(true)
            navigate('/login')
            buttonHome.innerText = 'Acessar dashboard'

        }, 1000)
    }
    return(
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <h1 className="text-neutral-900  text-4xl font-bold">Bem-vindo ao Sistema</h1>
            <button onClick={hangleNavigate} id='button-home' className="cursor-pointer button-home text-sm p-4 bg-neutral-900 rounded-md text-white hover:opacity-80">Acessar Dashboard</button>
            <span className='text-md text-zinc-500'>Sistema de Gerenciamento de Usuários</span>
        </div>
    )
}