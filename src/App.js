import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from "./components/Watchlist";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div>
                <Header></Header>

                <Router>
                    <nav>
                        <ul>
                            <li>
                                <link to="/">Home</link>
                            </li>
                            <li>
                                <link to="/watchlist">Watchlist</link>
                            </li>
                        </ul>

                    </nav>

                    <Routes>
                        <Route path="/" element={<MoviesGrid />}></Route>
                        <Route path="/watchlist" element={<Watchlist />}></Route>
                    </Routes>
                </Router>

            </div>

            <Footer></Footer>
        </div>
    )
        ;
}

export default App;
