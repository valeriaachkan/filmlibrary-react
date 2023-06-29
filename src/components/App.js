import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movie from '../pages/Movie.jsx';
import { SharedLayout } from './SharedLayout/SharedLayout';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<div>Movies</div>} />
					<Route path="movies/:movieId" element={<Movie />}>
						<Route path="cast" element={<div>Actors</div>} />
						<Route path="reviews" element={<div>Reviews</div>} />
					</Route>
					<Route path="*" element={<div>Not Found</div>} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
