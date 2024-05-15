import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Service from './Pages/service/Service';
import Projects from './Pages/projects/Projects';
import Contact from './Pages/contact/Contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './ScrollTop'

function App() {
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 1500,
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/projects/:projectId" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
