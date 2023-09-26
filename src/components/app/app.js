import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: '해운데', viewers: 988, favourite: false, like: false, id: 1 },
				{ name: '우리 사랑', viewers: 910, favourite: false, like: true, id: 2 },
				{ name: '동네 싸움', viewers: 1016, favourite: true, like: false, id: 3 },
			],
		};
	}

	onDelete = id => {
		this.setState(({ data }) => {
			// const index = data.findIndex(c => c.id !=== id);
			// data.splice(index, 1);
			const newArr = data.filter(c => c.id !== id);
			return {
				data: newArr,
			};
		});
	};

	addForm = item => {
		this.setState(({ data }) => {
			const newArr = [...data, { ...item, id: uuidv4(), favourite: true, like: true }];
			return {
				data: newArr,
			};
		});
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => {
			const newArr = data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			});
			return {
				data: newArr,
			};
		});
	};

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

	render() {
		const { data } = this.state;
		const allMoviesCount = data.length;
		const favouriteMoviesCount = data.filter(c => c.favourite).length;
		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} />
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList onToggleProp={this.onToggleProp} data={data} onDelete={this.onDelete} />
					<MoviesAddForm addForm={this.addForm} />
				</div>
			</div>
		);
	}
}
export default App;
