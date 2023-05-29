import React, { useState, useEffect } from 'react'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

//components
import { Home } from './components/home'
import Nav from './components/nav'
import { Login } from './components/login'
import { UserInfo } from './components/user'
import { Vote } from './components/vote'
import { Loader } from './components/Loader'
import { Candidates } from './components/candidates'
import { PageError } from './components/PageError'
import { Report } from './components/report'

export const App = () => {
    const [userLogin, setUserLogin] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const routs = createBrowserRouter([
        {
            path: '/',
            element:
                <>
                    <Nav userLogin={userLogin} />
                    < Home userLogin={userLogin} setIsLoading={setIsLoading} />
                    <Loader isLoading={isLoading} />
                </>

        },
        {
            path: '/login',
            element:
                <>
                    <Nav userLogin={userLogin} />
                    <Login setUserLogin={setUserLogin} setIsLoading={setIsLoading} />
                    <Loader isLoading={isLoading} />

                </>
        },
        {
            path: '/logout',
            element:
                <>
                    <Nav userLogin={userLogin} />
                    <UserInfo user={userLogin} setUserLogin={setUserLogin} setIsLoading={setIsLoading} />
                    <Loader isLoading={isLoading} />

                </>
        },
        {
            path: '/vote',
            element:
                <>
                    <Nav userLogin={userLogin} />
                    <Vote userLogin={userLogin} setIsLoading={setIsLoading} />
                    <Loader isLoading={isLoading} />

                </>
        },
        {
            path: '/Candidates',
            element:
                <>
                    <Nav userLogin={userLogin} />
                    <Candidates userLogin={userLogin} />
                    <Loader isLoading={isLoading} />

                </>
        },
        ,
        {
            path: '/report',
            element:
                <>
                    <Nav userLogin={userLogin} />
                    <Report userLogin={userLogin} setIsLoading={setIsLoading} />
                    <Loader isLoading={isLoading} />
                </>
        },
        {
            path: '*',
            element:
                <>
                    <Nav userLogin={userLogin} />
                    <PageError />
                </>
        }
    ])

    return (
        <RouterProvider router={routs}>
        </RouterProvider>
    )
}