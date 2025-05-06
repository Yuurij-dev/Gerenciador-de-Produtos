import './styles.css'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react';

export function Home() {
    const navigate = useNavigate();
    
    
    return(
        <div className="home-container w-full h-screen flex items-center justify-center flex-col">
            <h1 className="text-neutral-900  text-4xl font-bold">Bem-vindo ao Sistema</h1>
            <button  onClick={() => navigate('/login')} id='button-home' className="cursor-pointer button-home text-sm p-4  rounded-md text-white hover:opacity-80">Acessar Dashboard</button>
            <span className='text-md text-zinc-500'>Sistema de Gerenciamento de Usuários</span>
        </div>
    )
}