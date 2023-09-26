import './app-info.scss';
const AppInfo = ({ allMoviesCount, favouriteMoviesCount }) => {
	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>모든 영화 번호: {allMoviesCount}</p>
			<p className='fs-4 text-uppercase'>좋아하는 영화: {favouriteMoviesCount}</p>
		</div>
	);
};

export default AppInfo;
