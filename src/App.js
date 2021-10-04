import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchURL={requests.fetchTrending}></Row>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
