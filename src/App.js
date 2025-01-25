import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<div className='flex'>
				<div>
					<Navbar/>
				</div>
				<div>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/projects"
						element={<Projects />}
					/>
					<Route
						path="/skills"
						element={<Skills />}
					/>					
			</Routes>
				</div>
			</div>
			

		</BrowserRouter>
	);
}

export default App;
