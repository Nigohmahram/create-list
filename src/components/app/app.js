import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
const App = () => {
	const data = [
		{ name: '해운데', viewers: 988, favourite: false },
		{ name: '우리 사랑', viewers: 910, favourite: false },
		{ name: '동네 싸움', viewers: 1016, favourite: true },
	];
	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<MovieList data={data} />
				<MoviesAddForm />
			</div>
		</div>
	);
};
export default App;
