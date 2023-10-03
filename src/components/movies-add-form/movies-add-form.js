import { useState } from 'react';
import './movies-add-form.css';

const MoviesAddForm = ({ addForm }) => {
	const [state, setState] = useState({ name: '', views: '' });

	const changeHandleInput = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const addFormHandler = e => {
		e.preventDefault();
		if (state.name === '' || state.views === '') return;
		const data = { name: state, viewers: state.views };
		addForm(data);
		setState({ name: '', views: '' });
	};

	return (
		<div className='app-add-form' onSubmit={addFormHandler}>
			<h3>새 영화 추가</h3>
			<form className='add-form d-flex'>
				<input
					type='text'
					className='form-control new-post-label'
					placeholder='무슨 영화?'
					onChange={changeHandleInput}
					name='name'
					value={state.name}
				/>
				<input
					type='number'
					className='form-control new-post-label'
					placeholder='몇 번이나 조회되었나요?'
					onChange={changeHandleInput}
					name='views'
					value={state.views}
				/>

				<button type='submit' className='btn btn-outline-dark'>
					추가
				</button>
			</form>
		</div>
	);
};
// class MoviesAddForm extends Component {
// constructor(props) {
// 	super(props);
// 	this.state = {
// 		name: '',
// 		views: '',
// 	};
// }
// changeHandleInput = e => {
// 	this.setState({
// 		[e.target.name]: e.target.value,
// 	});
// };

// addFormHandler = e => {
// 	e.preventDefault();
// 	this.props.addForm({ name: this.state.name, viewers: this.state.views });
// 	this.setState({
// 		name: '',
// 		views: '',
// 	});
// };

// 	render() {
// 		const { name, views } = this.state;
// 		return (
// 			<div className='app-add-form' onSubmit={this.addFormHandler}>
// 				<h3>새 영화 추가</h3>
// 				<form className='add-form d-flex'>
// 					<input
// 						type='text'
// 						className='form-control new-post-label'
// 						placeholder='무슨 영화?'
// 						onChange={this.changeHandleInput}
// 						name='name'
// 						value={name}
// 					/>
// 					<input
// 						type='number'
// 						className='form-control new-post-label'
// 						placeholder='몇 번이나 조회되었나요?'
// 						onChange={this.changeHandleInput}
// 						name='views'
// 						value={views}
// 					/>

// 					<button type='submit' className='btn btn-outline-dark'>
// 						추가
// 					</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

export default MoviesAddForm;
