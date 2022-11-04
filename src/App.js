import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

function App() {
	return (
		<BrowserRouter>
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
					path="/About"
					element={<About />}
				/>
				<Route
					path="/Contact"
					element={<Contact />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
