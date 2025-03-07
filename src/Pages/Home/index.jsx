import './styles.css'
import { useNavigate } from 'react-router-dom'

export function Home() {
    const navigate = useNavigate();

    const hangleNavigate = (e) => {
        navigate('/login')
    }
    return(
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <h1 className="text-neutral-900  text-4xl font-bold">Bem-vindo ao Sistema</h1>
            <button onClick={hangleNavigate} className="cursor-pointer button-home text-sm p-4 bg-neutral-900 rounded-md text-white hover:opacity-80">Acessar Dashboard</button>
            <span className='text-md text-zinc-500'>Sistema de Gerenciamento de Usuários</span>
        </div>
    )
}