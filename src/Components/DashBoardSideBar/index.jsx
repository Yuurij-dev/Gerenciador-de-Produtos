import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser, faBox, faCog, faSignOutAlt, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export function DashBoardSideBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <aside id='dashboardSideBar' className="dashboardSideBar aside w-full max-w-64 shadow-md flex flex-col justify-between p-4">
            
            <div className='h-full'>
                <h2 className="text-2xl ">Dashboard</h2>

                <nav className="nav-sidebar">
                    <ul className="flex flex-col gap-2">
                        <li className="text-sm rounded cursor-pointer" onClick={() => navigate('/dashboard')}>
                            <FontAwesomeIcon icon={faChartBar} className='icon-li' />Dashboard
                        </li>
                        <li className="text-sm rounded cursor-pointer" onClick={() => navigate('/dashboard/usuarios')}>
                            <FontAwesomeIcon icon={faUser}  className='icon-li'/>Usuários
                        </li>
                        <li className="text-sm rounded cursor-pointer" onClick={() => navigate('/dashboard/produtos')}>
                            <FontAwesomeIcon icon={faBox}  className='icon-li'/>Produtos
                        </li>
                        <li className="text-sm rounded cursor-pointer" onClick={() => navigate('/dashboard/config')}>
                            <FontAwesomeIcon icon={faCog}  className='icon-li'/>Configurações
                        </li>
                    </ul>
                </nav>
            </div>
            <button className="button-sidebar flex items-center gap-2 text-red-600 p-2 hover:bg-red-100 rounded cursor-pointer text-sm" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className='icon-button'/> Sair
            </button>
        </aside>
    );
}
