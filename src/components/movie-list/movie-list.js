import MovieListItem from '../movie-list-item/movie-list-item';
import { useContext } from 'react';
import { Context } from '../../context';
import { filterHandler, searchHandler } from '../../utilites/data';
import './movie-list.css';

const MovieList = ({ onDelete, onToggleProp }) => {
	const { state, dispetch } = useContext(Context);
	const data = filterHandler(searchHandler(state.data, state.term), state.filter);
	return (
		<ul className='movie-list'>
			{data.map(item => (
				<MovieListItem
					key={item.id}
					name={item.name}
					viewers={item.viewers}
					favourite={item.favourite}
					like={item.like}
					id={item.id}
					onToggleProp={e => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
				/>
			))}
		</ul>
	);
};

export default MovieList;
