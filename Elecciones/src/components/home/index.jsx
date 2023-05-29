import React, { useEffect, useState } from 'react';
import './assets/css/home.scss'
import { Loader } from '../Loader';
import * as APIDY from '../../helpers/apiDynamo'
export const Home = ({ userLogin }) => {
    const [enable, setEnable] = useState(true)
    useEffect(() => {
        APIDY.getEnable().then((data) => {
            setEnable(data.enable)
        })
    }, [])

    const updateElecciones = () => {
        APIDY.updateEnable({ id: 1, value: !enable }).then((data) => {
            setEnable(data.enable)
        }).catch((error) => {
        })
    }

    return (
        <>
            <section className="page" >
                <header className="header-home">
                    <img src="https://about.fb.com/ltam/wp-content/uploads/sites/14/2020/10/NRP-Elections_in_Mexico_banner_banner_FINAL.jpg"
                        alt="Urna de votación"
                        className="header-image"
                    />
                    <h1 className="title-home">Elecciones 2023
                        {
                            userLogin && userLogin.admin && (
                                <input type="checkbox" name="" id="" onClick={updateElecciones} checked={enable} />
                            )
                        }
                    </h1>
                </header>
                <main className="main-home">
                    <p className="home-intro">
                        Elige a tu próximo candidato.
                    </p>
                    <a className="button" href='https://www.tse.org.gt/'>
                        Más información
                    </a>
                </main>
            </section>
        </>

    );
}
