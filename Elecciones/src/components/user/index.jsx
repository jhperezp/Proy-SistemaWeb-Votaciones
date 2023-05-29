import React from 'react'
import './assets/css/user.css'
import img from './assets/img/user.png'
import { useNavigate } from "react-router-dom";

export const UserInfo = ({ user, setUserLogin }) => {
    const navigate = useNavigate();

    const logout = () => {

        setUserLogin();
        navigate("/login");

    }

    return (
        <div className="user-profile-container">
            <div className="user-profile-header">
                <img src={img} alt="Avatar" className="user-profile-avatar" />
                <h3>{user.name}</h3>
            </div>
            <div className="user-profile-content">
                <div className="user-profile-info">
                    <p><strong>Nombre completo:</strong> {user.NOMBRE_COMPLETO}</p>
                    <p><strong>DPI:</strong> {user.DPI}</p>
                    <p><strong>Municipio:</strong> {user.MUNICIPIO}</p>
                    <p><strong>N° de empadronamiento:</strong> {user.NO_ENPADRO}</p>
                </div>
            </div>
            <button onClick={logout}>
                cerrar sesión
            </button>
        </div>
    )

}
