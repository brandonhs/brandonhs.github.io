import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Header from './components/Header';
import About from './pages/about';

function App() {
    return (
        <Router>
            <Header basePath="/" title="brandonhs" />
            <main className="container">
                <section id="content">
                    <Routes>
                        <Route path='/' element={<Home name="Brandon Stevens" bio="I am a high school Software Engineer and Full Stack Developer with 6 years of experience in advanced programming and IT, along with over 3 years of experience in electrical engineering. I am currently the Chief Technology Officer (CTO) and Co-Founder in a profitable underwater technology startup called DeepWater Exploration." />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </section>
            </main>
        </Router>
    );
}

export default App;
