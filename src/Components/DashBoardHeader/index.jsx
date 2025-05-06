import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AlternateEmail } from '@mui/icons-material';


const openMenuBar = (e) => {
    const dashBoardSideBar = document.getElementById('dashboardSideBar')

    dashBoardSideBar.classList.toggle('active')
}
export default function DashboardHeader() {
    return(
        <div className='w-full flex flex-col'>
            <div className="title-dashboard-header">
                <h1>Dashboard</h1>
                <FontAwesomeIcon onClick={openMenuBar} className='icon' icon={faBars}/>
            </div>
            <div className="line-dashboard-header">

            </div>
        </div>
    )
}