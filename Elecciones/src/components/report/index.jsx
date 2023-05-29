import React, { useEffect, useState } from 'react'
import './assets/css/report.scss'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import * as API from '../../helpers/api'
import * as APIDY from '../../helpers/apiDynamo'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const generarColoresAleatorios = (cantidad) => {
    const colores = [];
    for (let i = 0; i < cantidad; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const colorHexadecimal = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        colores.push(colorHexadecimal);
    }
    return colores;
}
export const Report = ({ userLogin, setIsLoading }) => {
    const [votes, setVotes] = useState([]);
    const [labels, setLabels] = useState(['']);
    const [dataResponse, setDataResponse] = useState([]);
    const [dataResponseRegister, setDataResponseRegister] = useState([]);

    useEffect(() => {
        getCandidates()
    }, [])

    const getCandidates = async () => {
        setIsLoading(true)
        const response = await API.getCandidatos();
        const responseRegister = await APIDY.getRegisterAll();
        let contadores = [];
        setDataResponse(response)
        setDataResponseRegister(responseRegister)

        let arrayForLabels = response.map(ele => {
            if (ele.PUESTO === 'PRESIDENTE') {
                return ele.NOMBRE_COMPLETO
            }
        }).filter(Boolean).concat('nulo')
        response.filter(ele => ele.PUESTO === 'PRESIDENTE').map(ele => {
            let found = responseRegister.filter(labe => labe.idPresidente === ele.ID).length;
            contadores.push(found)
        })
        let voteNull = responseRegister.filter(ele => ele.idPresidente === 0).length;
        contadores.push(voteNull)
        setVotes(contadores)
        setLabels(arrayForLabels)
        setIsLoading(false)
    }

    const handleChange = (e) => {
        let { value } = e.target;
        let contadores = [];
        let filtroPuesto = '';
        let filtroID = '';

        if (value === '1') {
            filtroPuesto = 'PRESIDENTE';
            filtroID = 'idPresidente';
        } else if (value === '2') {
            filtroPuesto = 'ALCALDE';
            filtroID = 'idAlcalde';
        } else if (value === '3') {
            filtroPuesto = 'DIPUTADOS_DISTRITOS';
            filtroID = 'idDiputado';
        }

        setLabels(
            dataResponse
                .filter(ele => ele.PUESTO === filtroPuesto)
                .map(ele => ele.NOMBRE_COMPLETO)
                .concat('nulo')
        );

        let dataFilter = dataResponse.filter(ele => ele.PUESTO === filtroPuesto);
        dataFilter.forEach(ele => {
            let found = dataResponseRegister.filter(labe => labe[filtroID] === ele.ID).length;
            contadores.push(found);
        });

        let voteNull = dataResponseRegister.filter(ele => ele[filtroID] === 0).length;
        contadores.push(voteNull);
        setVotes(contadores);
    };

    const data = {
        labels,
        datasets: [{
            label: 'Votantes',
            backgroundColor: generarColoresAleatorios(1),
            data: votes
        }]
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Grafica electoral',
            },
        },
    };

    return (
        <section className='body-container'>
            <select onChange={handleChange}>
                <option value="1">Presidentes</option>
                <option value="2">Alcaldes</option>
                <option value="3">Diputados</option>
            </select>
            <Bar options={options} data={data} />
        </section>
    )

}
