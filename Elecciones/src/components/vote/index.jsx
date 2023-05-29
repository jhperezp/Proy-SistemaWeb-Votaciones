import React, { useState, useEffect } from 'react'

import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

//api 
import * as API from '../../helpers/api'
import * as APILA from '../../helpers/apiDynamo'

//estilos e imagenes
import './assets/css/vote.css'
import candidato from './assets/img/candidato2.png'
import votacion from './assets/img/votacion.png'
import nulo from './assets/img/nulo.png'
import { PageError } from '../PageError'

export const Vote = ({ userLogin, setIsLoading }) => {
    const navigate = useNavigate();
    const [vowsMade, setVowsMade] = useState([])
    const [formState, setFormState] = useState(0)
    const [candidatesPresident, setCandidatesPresident] = useState([]);
    const [newVote, setNewVote] = useState(false)
    const [alcaldes, setAlcaldes] = useState([])
    const [diputados, setDiputados] = useState([])
    const [register, setRegister] = useState({
        dpi: userLogin?.DPI || 0,
        idPresidente: 0,
        idAlcalde: 0,
        idDiputado: 0
    })
    useEffect(() => {
        getCandidates()
    }, [])

    const getCandidates = async () => {
        try {
            setIsLoading(true)
            const response = await API.getCandidatos();
            setCandidatesPresident(response.filter(ele => ele.PUESTO === "PRESIDENTE"));
            let alcadesFilter = response.filter(ele => ele.PUESTO === "ALCALDE" && ele.DEPARTAMENTO === userLogin.DEPARTAMENTO && ele.MUNICIPIO === userLogin.MUNICIPIO);
            let diputadosFilter = response.filter(ele => ele.PUESTO === "DIPUTADOS_DISTRITOS" && ele.DEPARTAMENTO === userLogin.DEPARTAMENTO)
            setAlcaldes(alcadesFilter)
            setDiputados(diputadosFilter)
            if (userLogin.DPI) {
                const responseGetRegisterByUser = await APILA.getRegisterByUser({ dpi: userLogin.DPI });
                if (responseGetRegisterByUser === null) setNewVote(true)
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ya no puedes votar',
                        confirmButtonColor: '#ff7f50'
                    })
                }
            }
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        } catch (error) {
            setIsLoading(false)
        }
    }

    const handleOnChange = (e, id) => {
        e.preventDefault();
        setFormState((state) => state + 1);
        setRegister((prevRegister) => {
            let updatedVowsMade = [...vowsMade];
            let updatedRegister = { ...prevRegister };
            if (formState === 0) {
                if (!updatedVowsMade.includes('votePresidente')) updatedVowsMade.push('votePresidente')
                updatedRegister = { ...updatedRegister, idPresidente: id }
            } else if (formState === 1) {
                if (!updatedVowsMade.includes('voteAlcalde')) updatedVowsMade.push('voteAlcalde')
                updatedRegister = { ...updatedRegister, idAlcalde: id }
            } else if (formState === 2) {
                if (!updatedVowsMade.includes('voteDiputado')) updatedVowsMade.push('voteDiputado')
                updatedRegister = { ...updatedRegister, idDiputado: id }
            }
            setVowsMade(updatedVowsMade)
            return updatedRegister;
        })
    }

    const handleNextPage = () => {
        setFormState(state => {
            if (state == 0 && vowsMade.includes('votePresidente')) {
                return state + 1
            } else if (state == 1 && vowsMade.includes('voteAlcalde')) {
                return state + 1
            } else if (state === 2 && vowsMade.includes('voteDiputado')) {
                return state + 1
            } else {
                showAlert()
            }
            return state
        })
    }

    const handleSubmit = async () => {
        if (!vowsMade.includes('voteDiputado')) return showAlert();
        setIsLoading(true)
        APILA.insertRegister(register).then(() => {
            Swal.fire({
                icon: 'success',
                text: 'Enviado correctamente!',
                confirmButtonColor: '#ff7f50',
                title: 'Enviado'
            })
            setIsLoading(false)
            navigate("/");
        }).catch(() => {
            setIsLoading(false)
        });

    }

    const showAlert = () => {
        return Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Elige a tu candidato',
            confirmButtonColor: '#ff7f50'
        })
    }

    return (
        <>
            {
                userLogin && newVote ? (
                    <div className='form-content'>
                        {formState === 0 && (
                            <form>
                                <h1>Votación de presidente</h1>
                                <label>Escoge una opción</label>
                                <div className="card-container">
                                    {candidatesPresident.map((ele, idx) => (
                                        <div className="card-container-body" key={idx}>
                                            <div className="card-container-header">
                                                <img src={candidato} alt="Avatar" className="card-container-avatar" />
                                                <h3>{ele.NOMBRE_COMPLETO}</h3>
                                            </div>
                                            <div className="card-container-content">
                                                <div className="card-container-info">
                                                    <p><strong>Partido:</strong>  {ele.PARTIDO}</p>
                                                    <p><strong>Municipio: </strong> {ele.MUNICIPIO.charAt(0).toUpperCase() + ele.MUNICIPIO.slice(1).toLowerCase().slice(0, 10)}{ele.MUNICIPIO.length > 10 ? '...' : ''} </p>
                                                </div>
                                                <button style={{ marginTop: "20px" }} onClick={(e) => handleOnChange(e, ele.ID)}>
                                                    Confirmar voto
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="card-container-body" >
                                        <div className="card-container-header">
                                            <img src={nulo} alt="Avatar" className="card-container-avatar" />
                                            {/* <h3>{ele.NOMBRE_COMPLETO}</h3> */}
                                        </div>
                                        <div className="card-container-content">
                                            <div className="card-container-info">
                                                <p>Votacion nula</p>
                                                <p>Tu voto se contara vacio</p>
                                            </div>
                                            <button style={{ marginTop: "20px" }} onClick={(e) => handleOnChange(e, 0)}>
                                                Confirmar voto
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}

                        {formState === 1 && (
                            <form>
                                <h1>
                                    Votación de alcalde
                                </h1>
                                <label>Escoge una opción</label>
                                <div className="card-container">
                                    {alcaldes.map((ele, idx) => (
                                        <div className="card-container-body" key={idx}>
                                            <div className="card-container-header">
                                                <img src={candidato} alt="Avatar" className="card-container-avatar" />
                                                <h3>{ele.NOMBRE_COMPLETO}</h3>
                                            </div>
                                            <div className="card-container-content">
                                                <div className="card-container-info">
                                                    <p><strong>Partido: {ele.PARTIDO}</strong> </p>
                                                    <p><strong>Departamento: {ele.DEPARTAMENTO.charAt(0).toUpperCase() + ele.DEPARTAMENTO.slice(1).toLowerCase().slice(0, 10)}{ele.DEPARTAMENTO.length > 10 ? '...' : ''}</strong> </p>
                                                    <p><strong>Municipio: {ele.MUNICIPIO.charAt(0).toUpperCase() + ele.MUNICIPIO.slice(1).toLowerCase().slice(0, 10)}{ele.MUNICIPIO.length > 10 ? '...' : ''}</strong> </p>
                                                </div>
                                                <button style={{ marginTop: "20px" }} onClick={(e) => handleOnChange(e, ele.ID)}>
                                                    Confirmar voto
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="card-container-body" >
                                        <div className="card-container-header">
                                            <img src={nulo} alt="Avatar" className="card-container-avatar" />
                                            {/* <h3>{ele.NOMBRE_COMPLETO}</h3> */}
                                        </div>
                                        <div className="card-container-content">
                                            <div className="card-container-info">
                                                <p>Votacion nula</p>
                                                <p>Tu voto se contara vacio</p>
                                            </div>
                                            <button style={{ marginTop: "20px" }} onClick={(e) => handleOnChange(e, 0)}>
                                                Confirmar voto
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        )}
                        {formState === 2 && (
                            <form>
                                <h1>
                                    Votación de diputados
                                </h1>
                                <label>Escoge una opción</label>
                                <div className="card-container">
                                    {diputados.map((ele, idx) => (
                                        <div className="card-container-body" key={idx}>
                                            <div className="card-container-header">
                                                <img src={candidato} alt="Avatar" className="card-container-avatar" />
                                                <h3>{ele.NOMBRE_COMPLETO}</h3>
                                            </div>
                                            <div className="card-container-content">
                                                <div className="card-container-info">
                                                    <p><strong>Partido: {ele.PARTIDO}</strong> </p>
                                                    <p><strong>Departamento: {ele.DEPARTAMENTO.charAt(0).toUpperCase() + ele.DEPARTAMENTO.slice(1).toLowerCase().slice(0, 10)}{ele.DEPARTAMENTO.length > 10 ? '...' : ''}</strong> </p>
                                                    <p><strong>Municipio: {ele.MUNICIPIO.charAt(0).toUpperCase() + ele.MUNICIPIO.slice(1).toLowerCase().slice(0, 10)}{ele.MUNICIPIO.length > 10 ? '...' : ''}</strong> </p>
                                                </div>
                                                <button style={{ marginTop: "20px" }} onClick={(e) => handleOnChange(e, ele.ID)}>
                                                    Confirmar voto
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="card-container-body" >
                                        <div className="card-container-header">
                                            <img src={nulo} alt="Avatar" className="card-container-avatar" />
                                            {/* <h3>{ele.NOMBRE_COMPLETO}</h3> */}
                                        </div>
                                        <div className="card-container-content">
                                            <div className="card-container-info">
                                                <p>Votacion nula</p>
                                                <p>Tu voto se contara vacio</p>
                                            </div>
                                            <button style={{ marginTop: "20px" }} onClick={(e) => handleOnChange(e, 0)}>
                                                Confirmar voto
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        )}
                        {formState === 3 && (
                            <div className="card-wrapper">
                                <div className="card-container-body" style={{ maxWidth: "400px" }} >
                                    <div className="card-container-header">
                                        <img src={votacion} alt="Avatar" className="card-container-avatar" />
                                        <h3>Resumen de votacion</h3>
                                    </div>
                                    <div className="card-container-content">
                                        <div className="card-container-info">

                                            <p style={{ textAlign: 'center' }}><strong>{userLogin.NOMBRE_COMPLETO}</strong></p>
                                            <p><strong>Presidente:{register.idPresidente === 0 ? ' Nulo' : candidatesPresident.find(ele => ele.ID === register.idPresidente).NOMBRE_COMPLETO} </strong> </p>
                                            <p><strong>Alcalde: {register.idAlcalde === 0 ? ' Nulo' : alcaldes.find(ele => ele.ID === register.idAlcalde).NOMBRE_COMPLETO}  </strong> </p>
                                            <p><strong>Diputado:  {register.idDiputado === 0 ? ' Nulo' : diputados.find(ele => ele.ID === register.idDiputado).NOMBRE_COMPLETO} </strong> </p>
                                        </div>
                                        <button style={{ marginTop: "20px" }} onClick={handleSubmit}>
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </div>

                        )}

                        <div className='buttons-content' style={formState === 0 ? { justifyContent: 'end' } : {}}>
                            {formState !== 0 &&
                                <button className='buttons-form' onClick={() => setFormState((state) => state - 1)}>
                                    Atrás
                                </button>
                            }
                            {formState !== 3 &&
                                <button className="buttons-form" onClick={handleNextPage} >
                                    Siguiente
                                </button>

                            }

                        </div>

                    </div >

                ) :
                    <PageError />
            }

        </>
    )

}
