import React from 'react'

import { SyncLoader } from 'react-spinners'

export const PageLoader = () => {
    const override = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        borderColor: "red",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
    };
    return (
        <SyncLoader size={100} cssOverride={override} color='#ff7f50' />
    )
}
