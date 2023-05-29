import React, { useEffect, useState } from 'react'
import { PageError } from '../PageError'
import DataTable from 'react-data-table-component'

//helpers 
import * as API from '../../helpers/api'

export const ViewUser = ({ userLogin, setIsLoading }) => {

    const [registers, setRegisters] = useState([])
    const [columns, setColumns] = useState([
        {
            id: 'no',
            name: 'Empadronado',
            selector: row => row.NO_ENPADRO
        },
        {
            id: 'dpi',
            name: 'DPI',
            selector: row => row.DPI,
        },
        {
            id: 'municipio',
            name: "Municipio",
            selector: row => row.MUNICIPIO
        },
        {
            id: 'name',
            name: "Nombre completo",
            selector: row => row.NOMBRE_COMPLETO
        }
    ])


    useEffect(() => {
        getRegister();
    }, [])

    const getRegister = async () => {
        let responserRegister = await API.getUsers();
        console.log('response', responserRegister);
        setRegisters(responserRegister);
    }

    return (
        <>
            {
                userLogin ? (
                    <div className='table' >
                        <DataTable
                            columns={columns}
                            data={registers}
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
