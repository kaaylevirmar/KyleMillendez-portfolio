import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<div className='flex'>
				<div >
					<Navbar/>
				</div>
				<div className='w-screen h-screen flex justify-center items-center'>
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
