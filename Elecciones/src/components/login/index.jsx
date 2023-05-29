import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './assets/css/login.css'
import Swal from 'sweetalert2'
import * as API from '../../helpers/api'
import * as APIDY from '../../helpers/apiDynamo'

export const Login = ({ setUserLogin, setIsLoading }) => {
    const navigate = useNavigate();
    const [enable, setEnable] = useState(true);
    const [user, setUser] = useState({
        dpi: '',
        no_empadro: ''
    })
    const [admin, setAdmin] = useState(false)
    const [userAdmin, setUserAdmin] = useState({
        email: '',
        password: ''
    })
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const users = await API.getUsers();
        const responseEnable = await APIDY.getEnable();
        if (responseEnable) setEnable(responseEnable.enable)
        console.log('enable', responseEnable);
        setUsers(users);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let namesAdmin = name === 'email' || name === 'password'
        if (namesAdmin) return setUserAdmin({ ...userAdmin, [name]: value })
        setUser({ ...user, [name]: Number(value) })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!enable && !admin) return showError('Votación cerrada')
        if (!admin) {
            if (user.dpi === '' || user.no_empadro === '' || user.dpi === 0 || user.no_empadro === 0) {
                return showError('Ingresa tu número de dpi y empadronamiento!')
            }
            let idxMatch = users.findIndex(ele => ele.DPI === user.dpi && ele.NO_ENPADRO === user.no_empadro)
            if (idxMatch !== -1) {
                setIsLoading(true)

                setTimeout(() => {
                    setUserLogin(users[idxMatch])
                    navigate("/");
                    setIsLoading(false)
                }, 1000);

            } else {
                showError('Credenciales incorrectas!')
            }
        } else {
            if (userAdmin.email === '' || userAdmin.password === '') return showError('Ingresa tu email y contraseña!')
            setIsLoading(true)
            let usuarioLogin = await APIDY.login(userAdmin)
            if (usuarioLogin.code !== 200) {
                setIsLoading(false)
                return showError(usuarioLogin.mensaje)
            } else {
                setTimeout(() => {
                    setUserLogin(usuarioLogin.user)
                    navigate("/");
                    setIsLoading(false)
                }, 1000);
            }

        }

    }

    const showError = (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            confirmButtonColor: '#ff7f50'
        })
    }



    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input
                        name={admin ? "email" : "dpi"}
                        value={admin ? userAdmin.email : user.dpi}
                        type={admin ? "text" : "number"}
                        placeholder={admin ? "Email" : "DPI"}
                        onChange={handleInputChange}
                    />
                    <input
                        id="no-empadro-input"
                        name={admin ? "password" : "no_empadro"}
                        value={admin ? userAdmin.password : user.no_empadro}
                        type={admin ? "password" : "number"}
                        placeholder={admin ? "Password" : "N° de empadronamiento"}
                        onChange={handleInputChange}
                    />
                    <button
                        onClick={handleSubmit}
                        className='button-login'
                    >
                        Iniciar sesión
                    </button>
                    <a onClick={(e) => { e.preventDefault(); setAdmin(!admin) }}>
                        {admin ? "Eres votante?" : "Eres administrador?"}
                    </a>
                </form>
            </div>
        </div>)
}
