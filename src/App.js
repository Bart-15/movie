import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Homepage/Home';
import Movies from './pages/Movies/Movies';
import TvShows from './pages/TvShows/TvShows';
import MovieItem from './components/MovieItem/MovieItem';
import TvShowItem from './components/TvShowItem/TvShowItem';


function App() {
	return (
		<main>
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/movies" element={<Movies />} />
						<Route path="/tv-shows" element={<TvShows />} />
						<Route path="/movie-item/:id" element={<MovieItem />} />
						<Route path="/tv-show/:id" element={<TvShowItem />} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
