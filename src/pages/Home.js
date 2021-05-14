import React from 'react'
import SidePage from '../components/SidePage'
import MainPage from '../components/MainPage'
import DataPembeli from '../components/DataPembeli'
const Home = () => {
    return (
        <div className="App">
            <SidePage />
            <DataPembeli />
            <MainPage />
        </div>
    )
}

export default Home
