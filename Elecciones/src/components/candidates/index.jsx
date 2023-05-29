import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import './assets/css/candidates.css'
import * as API from '../../helpers/api'
import { PageError } from '../PageError';

export const Candidates = ({ userLogin }) => {
    const [data, setData] = useState([])
    const [filteredText, setFilteredText] = useState([])
    const [state, setState] = useState(0)
    const [columns, setColumns] = useState([
        {
            name: 'Nombre completo',
            selector: row => row.NOMBRE_COMPLETO,
        },
        {
            name: 'Puesto',
            selector: row => row.PUESTO,
        },
        {
            name: 'Partido',
            selector: row => row.PARTIDO
        }
    ])


    useEffect(() => {
        getCandidates()
    }, [])

    const getCandidates = async () => {
        const response = await API.getCandidatos()
        setData(response)
        setFilteredText(response)
    }

    const handleChangeOptions = (e) => {
        const { value } = e.target;
        let filteredData = data;

        if (value === '1') {
            filteredData = data.filter((ele) => ele.PUESTO === 'PRESIDENTE');
        } else if (value === '2') {
            filteredData = data.filter((ele) => ele.PUESTO === 'ALCALDE');
        } else if (value === '3') {
            filteredData = data.filter(
                (ele) => ele.PUESTO === 'DIPUTADOS_DISTRITOS'
            );
        }

        setFilteredText(filteredData);
    };


    return (
        <>
            {
                userLogin ? (
                    <div className='table' >
                        <select onChange={handleChangeOptions}>
                            <option value="1">Todos</option>
                            <option value="1">Presidentes</option>
                            <option value="2">Alcaldes</option>
                            <option value="3">Diputados</option>
                        </select>
                        <DataTable
                            columns={columns}
                            data={filteredText}
                            fixedHeader
                            customStyles={{
                                headCells: {
                                    style: {
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        padding: '0.8rem',
                                        justifyContent: 'center',
                                        backgroundColor: '#ff7f50',
                                        color: '#fff',
                                        // border: 'none',
                                        borderTop: '3px solid #fff',
                                        borderBottom: '3px solid #fff',
                                        textTransform: 'uppercase',
                                        border: '1px solid #ddd',

                                    },
                                    activeSortStyle: {
                                        color: '#fff',
                                        textDecoration: 'underline',
                                    },
                                    inactiveSortStyle: {
                                        color: '#fff',
                                    },
                                },
                                cells: {
                                    style: {
                                        border: 'none',
                                        borderBottom: '1px solid #ddd',
                                        padding: '0.8rem',
                                        fontSize: '1rem',
                                    },
                                },
                            }}
                        />

                    </div >
                ) :
                    <PageError />
            }
        </>


    )
}
