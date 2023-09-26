import './movies-add-form.css';

const MoviesAddForm = () => {
	return (
		<div className='app-add-form'>
			<h3>새 영화 추가</h3>
			<form className='add-form d-flex'>
				<input type='text' className='form-control new-post-label' placeholder='무슨 영화?' />
				<input type='number' className='form-control new-post-label' placeholder='몇 번이나 조회되었나요?' />

				<button type='submit' className='btn btn-outline-dark'>
					추가
				</button>
			</form>
		</div>
	);
};

export default MoviesAddForm;
