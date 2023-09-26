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
				{ name: '해운데', viewers: 988, favourite: false, id: 1 },
				{ name: '우리 사랑', viewers: 910, favourite: false, id: 2 },
				{ name: '동네 싸움', viewers: 1016, favourite: true, id: 3 },
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
			const newArr = [...data, { ...item, id: uuidv4() }];
			return {
				data: newArr,
			};
		});
		console.log(item);
	};

	render() {
		const { data } = this.state;
		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo />
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList data={data} onDelete={this.onDelete} />
					<MoviesAddForm addForm={this.addForm} />
				</div>
			</div>
		);
	}
}
export default App;
