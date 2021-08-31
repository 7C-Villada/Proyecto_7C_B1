import React from 'react'
import { Header } from './style/MapSectionElements'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapSection = () => {

    return (
        <>
            <div className='container py-5'>
                <Header>Mapa Interactivo</Header>
                <div className='row py-5'>
                    {/* <MapContainer /> */}
                    <MapContainer
                        center={[-31.1388288,-64.4520141]} 
                        zoom={13} 
                        style={{ width: '100%', height: '500px'}}
                    >
                        <TileLayer
                            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default MapSection
