import { useState, useEffect, useContext } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { Context } from '../../context';

import './app.css';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { _, dispatch } = useContext(Context);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
			.then(response => response.json())
			.then(json => {
				const newArr = json.map(item => ({
					name: item.title,
					id: item.id,
					viewers: item.id * 10,
					favourite: false,
					like: false,
				}));
				dispatch({ type: 'GET_DATA', payload: newArr });
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				{isLoading && 'Loading..'}
				<MovieList />
				<MoviesAddForm />
			</div>
		</div>
	);
};

// class App extends Component {
// constructor(props) {
// 	super(props);
// 	this.state = {
// 		data: [
// 			{ name: '해운데', viewers: 988, favourite: false, like: false, id: 1 },
// 			{ name: '우리 사랑', viewers: 789, favourite: false, like: true, id: 2 },
// 			{ name: '동네 싸움', viewers: 1016, favourite: true, like: false, id: 3 },
// 		],
// 		term: '',
// 		filter: 'all',
// 	};
// }

// onDelete = id => {
// 	this.setState(({ data }) => {
// 		// const index = data.findIndex(c => c.id !=== id);
// 		// data.splice(index, 1);
// 		const newArr = data.filter(c => c.id !== id);
// 		return {
// 			data: newArr,
// 		};
// 	});
// };

// addForm = item => {
// 	this.setState(({ data }) => {
// 		const newArr = [...data, { ...item, id: uuidv4(), favourite: true, like: true }];
// 		return {
// 			data: newArr,
// 		};
// 	});
// };

// onToggleProp = (id, prop) => {
// 	this.setState(({ data }) => {
// 		const newArr = data.map(item => {
// 			if (item.id === id) {
// 				return { ...item, [prop]: !item[prop] };
// 			}
// 			return item;
// 		});
// 		return {
// 			data: newArr,
// 		};
// 	});
// };

// searchHandler = (arr, term) => {
// 	if (term.length === 0) {
// 		return arr;
// 	}
// 	return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1);
// };

// filterHandler = (arr, filter) => {
// 	switch (filter) {
// 		case 'popular':
// 			return arr.filter(c => c.like);
// 		case 'mostViewers':
// 			return arr.filter(c => c.viewers > 800);
// 		default:
// 			return arr;
// 	}
// };

// updataTermHandle = term => {
// 	this.setState({ term: term });
// };

// updateFilterHanler = filter => this.setState({ filter });

// onToggleLike = id => {
// 	this.setState(({ data }) => {
// 		const newArr = data.map(item => {
// 			if (item.id === id) {
// 				return { ...item, like: !item.like };
// 			}
// 			return item;
// 		});
// 		return {
// 			data: newArr,
// 		};
// 	});
// };

// 	render() {
// 		const { data, term, filter } = this.state;
// 		const allMoviesCount = data.length;
// 		const favouriteMoviesCount = data.filter(c => c.favourite).length;
// 		const visibleData = this.filterHandler(this.searchHandler(data, term), filter);
// 		return (
// 			<div className='app font-monospace'>
// 				<div className='content'>
// 					<AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} />
// 					<div className='search-panel'>
// 						<SearchPanel updataTermHandle={this.updataTermHandle} />
// 						<AppFilter filter={filter} updateFilterHanler={this.updateFilterHanler} />
// 					</div>
// 					<MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
// 					<MoviesAddForm addForm={this.addForm} />
// 				</div>
// 			</div>
// 		);
// 	}
// }
export default App;

// const  = [
// 	{ name: '해운데', viewers: 988, favourite: false, like: false, id: 1 },
// 	{ name: '우리 사랑', viewers: 789, favourite: false, like: true, id: 2 },
// 	{ name: '동네 싸움', viewers: 1016, favourite: true, like: false, id: 3 },
// ];
