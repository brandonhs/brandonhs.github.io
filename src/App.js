import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages';
import Header from './components/Header';

import headerData from './data/header.json';

function App() {
    return (
        <Router>
            <Header basePath={headerData.basePath} pages={headerData.pages} socials title={headerData.title} />
            <main className="container">
                <section id="content">
                    <Routes>
                        <Route path={headerData.basePath} element={<Home />} />
                    </Routes>
                </section>
            </main>
        </Router>
    );
}

export default App;
