import './app-filter.css';
const AppFilter = ({ updateFilterHanler, filter }) => {
	return (
		<div className='btn-group'>
			{btnArr.map(btn => (
				<button
					key={btn.name}
					className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
					onClick={() => updateFilterHanler(btn.name)}
					type='button'
				>
					{btn.label}
				</button>
			))}
			{/* <button className='btn btn-lock btn-outline-dark' type='button'>
				인기 영화
			</button>
			<button className='btn btn-lock btn-outline-dark' type='button'>
				가장 많이 본 영화
			</button> */}
		</div>
	);
};

const btnArr = [
	{ name: 'all', label: '모든 영화' },
	{ name: 'popular', label: '인기 영화' },
	{ name: 'mostViewers', label: '가장 많이 본 영화' },
];

export default AppFilter;
