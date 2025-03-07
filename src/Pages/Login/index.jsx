import './styles.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faEyeSlash, faCheck, faBolt } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

export function Login() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect( () => {
        const userLogged = localStorage.getItem('user')

        if(userLogged){
            setIsLoggedIn(true)
            navigate('/dashboard')
        }
    }, [])

    const [showPassword, setShowPassword] = useState(false)

    const handleVisiblePass = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    const [userLogin, setUserLogin] = useState('')
    const [passLogin, setPassLogin] = useState('')

    const handleUser = (e) => {
        let user = e.target.value
        setUserLogin(user)
    }
    const handlePassword = (e) => {
        let password = e.target.value
        setPassLogin(password)
    }

    function makeLogin(event) {
        event.preventDefault();
        const erro = document.getElementById('erro')
        const loginButton = document.getElementById('login-button')

        let user = 'admin'
        let pass = 'admin123'

        if(userLogin === user & passLogin === pass) {
            erro.style.display = 'none'

            setIsLoading(true)
            loginButton.innerHTML = 'carregando...'
            setTimeout( () => {
                localStorage.setItem('user', 'loggedIn');
                setIsLoggedIn(true)
                navigate('/dashboard')
            }, 1000)
            
        }else{
            loginButton.innerHTML = 'carregando...'
            setTimeout(() => {
                erro.style.display = 'block'
                loginButton.innerHTML = 'Login'    
            }, 1000)
        }
    }


    return(
        <div className="container-login w-full h-screen flex ">
            <div className="left-side-login w-1/2 h-screen bg-neutral-900 text-white">
                <div className="w-13 h-13 rounded-2xl bg-neutral-600 flex items-center justify-center"> <FontAwesomeIcon className='text-2xl' icon={faBolt}/> </div>

                <div>
                    <h1 className='title-login text-4xl font-bold'>Bem-vindo!</h1>
                    <span className='span-title-login text-md text-neutral-400'>Acesse o painel administrativo para gerenciar seus produtos e vendas.</span>
                </div>

                <div className='recursos-login'>
                    <h3 className=''>Recursos disponiveis:</h3>
                    <div className='recursos-login-div flex items-center'><div className='w-7 h-7 bg-neutral-600 rounded-full flex items-center justify-center '><FontAwesomeIcon className='text-sm' icon={faCheck}/></div><span >Gestão completa de produtos</span></div>
                    <div className='recursos-login-div flex items-center'><div className='w-7 h-7 bg-neutral-600 rounded-full flex items-center justify-center'><FontAwesomeIcon className='text-sm' icon={faCheck}/></div><span>Controle de estoque em tempo real</span></div>
                    <div className='recursos-login-div flex items-center'><div className='w-7 h-7 bg-neutral-600 rounded-full flex items-center justify-center '><FontAwesomeIcon className='text-sm' icon={faCheck}/></div><span>Relatórios e análises avançadas</span></div>
                </div>

                <div className='ajuda-box-login bg-neutral-600 rounded flex flex-col'>
                    <h3 className='font-bold'>Precisa de ajuda?</h3>
                    <span className='text-sm'>Entre em contato com nosso suporte:</span>
                    <span className='text-sm'>suporte@empresa.com</span>
                </div>

                <footer className='footer-login flex justify-between'>
                    <div>
                        <span className='text-sm'>© 2024 Sua Empresa</span>
                    </div>

                    <div>
                        <a href="#" className='text-sm hover:opacity-80'>Termos</a>
                        <a href="#" className='text-sm hover:opacity-80 a-margin'>Privacidade</a>
                    </div>
                </footer>
            </div>

            <div className="right-side-login w-1/2 h-screen flex flex-col items-center justify-center">
                <h1 className='text-2xl font-bold'>Login</h1>
                <span className='span-title text-zinc-500 text-md'>Entre com suas credenciais para continuar</span>

                <div className='erro-login' id='erro'>
                    <span className='text-sm'>Usuário ou senha incorretos</span>
                </div>

                <form className='form-login w-full flex flex-col items-center gap-5'>
                    <div className='flex flex-col'>
                        <span className='text-sm font-bold'>Usuário</span>
                        <input onChange={handleUser} type="text" name="user" placeholder='admin' />
                    </div>

                    <div className='flex flex-col relative'>
                        <span className='text-sm font-bold'>Senha</span>
                        <input onChange={handlePassword} type={showPassword ? 'text' : 'password'} name="password" placeholder='admin123' id='password'/>
                        <div onClick={handleVisiblePass} className="button-visible absolute top-8 right-5 cursor-pointer "> <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> </div>
                    </div>
                    <button onClick={makeLogin} className='button-submit-login bg-neutral-900 text-white' id='login-button'>Login</button>
                </form>
            </div>
        </div>
    )
}