import './styles.css'

export default function UserContainer() {
    return(
        <div className='container-user'>
            <div class="sem-usuario">
            <p>Nenhum usuário encontrado</p>
            <button class="btn-novo-usuario">
                <span>＋</span> Novo Usuário
            </button>
            </div>
        </div>
    )
}