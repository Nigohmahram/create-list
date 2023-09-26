import './app-filter.css';
const AppFilter = () => {
	return (
		<div className='btn-group'>
			<button className='btn btn-lock btn-dark ' type='button'>
				모든 영화
			</button>
			<button className='btn btn-lock btn-outline-dark' type='button'>
				인기 영화
			</button>
			<button className='btn btn-lock btn-outline-dark' type='button'>
				가장 많이 본 영화
			</button>
		</div>
	);
};

export default AppFilter;
