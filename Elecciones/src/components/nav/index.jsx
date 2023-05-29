import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./assets/css/nav.scss";
import * as APILA from '../../helpers/apiDynamo'

export default function Nav({ userLogin }) {
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState()
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setUser(userLogin)
    }, [userLogin])

    const validateUser = () => {

    }

    return (
        <header className={`section-container-nav ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar-container">
                <NavLink to={'/'} className="navbar-link">
                    <i className="fa-solid fa-house icons" />
                    Home
                </NavLink>

                {/* <a className="navbar-link">
                    <i className="fa-solid fa-circle-info icons" />
                    Historial
                </a> */}
                {user ?
                    <>
                        {user.admin && (
                            <>
                                <NavLink to={'/Candidates'}
                                    className={({ isActive }) =>
                                        isActive ? 'navbar-link active' : 'navbar-link'
                                    }
                                >
                                    <i className="fa-solid fa-users icons" />
                                    Candidatos
                                </NavLink>
                                <NavLink to={'/report'}
                                    className={({ isActive }) =>
                                        isActive ? 'navbar-link active' : 'navbar-link'
                                    }
                                >
                                    <i className="fa-regular fa-flag icons" />
                                    Reporte
                                </NavLink>
                                <NavLink to={'/viewUser'}
                                    className={({ isActive }) =>
                                        isActive ? 'navbar-link active' : 'navbar-link'
                                    }
                                >
                                    <i className="fa-regular fa-flag icons" />
                                    Ver usuarios
                                </NavLink>
                            </>
                        )}
                        {
                            !user.admin && (
                                <NavLink to={'/vote'}
                                    className={({ isActive }) =>
                                        isActive ? 'navbar-link active' : 'navbar-link'
                                    }
                                >
                                    <i className="fa-solid fa-circle-plus fa-beat icons" style={{ "--fa-animation-duration": "2s" }} />
                                    Vota aquí
                                </NavLink>
                            )
                        }
                        <NavLink to={'/logout'}
                            className={({ isActive }) =>
                                isActive ? 'navbar-link active' : 'navbar-link'
                            }
                        >
                            <i className="fa-solid fa-user icons" />
                            {user.NOMBRE_COMPLETO}
                        </NavLink>
                    </>

                    :
                    <NavLink to={'/login'}
                        className={({ isActive }) =>
                            isActive ? 'navbar-link active' : 'navbar-link'
                        }
                    >
                        <i className="fa-solid fa-right-from-bracket icons" />
                        inicar sesion
                    </NavLink>
                }

                <span className="et-hero-tab-slider" />
            </nav>
        </header>

    );
};
