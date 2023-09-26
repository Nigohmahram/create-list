import { Component } from 'react';
import './movies-add-form.css';

class MoviesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			views: '',
		};
	}
	changeHandleInput = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		const { name, views } = this.state;
		return (
			<div className='app-add-form'>
				<h3>새 영화 추가</h3>
				<form className='add-form d-flex'>
					<input
						type='text'
						className='form-control new-post-label'
						placeholder='무슨 영화?'
						onChange={this.changeHandleInput}
						name='name'
						value={name}
					/>
					<input
						type='number'
						className='form-control new-post-label'
						placeholder='몇 번이나 조회되었나요?'
						onChange={this.changeHandleInput}
						name='views'
						value={views}
					/>

					<button type='submit' className='btn btn-outline-dark'>
						추가
					</button>
				</form>
			</div>
		);
	}
}

export default MoviesAddForm;
