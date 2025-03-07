import { useNavigate } from "react-router-dom"

export default function NotFound() {

    const navigate = useNavigate()

    return(
        <div>
            <h1>Pagina não encontrada</h1>

            <button onClick={() => navigate('/login')}>Voltar</button>
        </div>
    )
}