import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 0. pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';

// const port = process.env.PORT || 8003;

// app.get('/', (req, res) => {
// 	res.json('server start');
// });

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* 1. put navbar outside the 'pages' component but inside the 'BrowserRouter', otherwise we can't use the 'Link' component. Cuz everything to do with a router needs to be inside 'BrowserRouter'  */}
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
