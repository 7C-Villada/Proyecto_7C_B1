import React from 'react'
import { MapContainer, Header } from './style/MapSectionElements'

const MapSection = () => {
    return (
        <>
            <div className='container py-5'>
                <Header>Mapa Interactivo</Header>
                <div className='row py-5'>
                    <MapContainer />
                </div>
            </div>
        </>
    )
}

export default MapSection
