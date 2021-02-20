import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Nav from './Nav'
import requests from './Requests'
import Row from './Row'
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />

            <Row 
                title="NETFLIX ORIGINALS" 
                fetchURL={requests.fetchNetflixOriginals} 
                isLargeRow={true} /> 
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title ="Top Reated" fetchURL ={requests.featchTopRated}/>
            <Row title ="Action Movies" fetchURL ={requests.featchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} /> 
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} /> 
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen
