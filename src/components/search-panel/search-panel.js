import { useState } from 'react';
import './search-panel.css';

const SearchPanel = props => {
	const [term, setTerm] = useState('');
	const updataTermHandle = e => {
		const term = e.target.value.toLowerCase();
		setTerm(term);
		props.updataTermHandle(term);
	};

	return (
		<input
			type='text'
			className='form-control search-input align-center'
			placeholder='영화 검색'
			onChange={updataTermHandle}
			value={term}
		/>
	);
};
// class SearchPanel extends Component {
// constructor(props) {
// 	super(props);
// 	this.state = {
// 		term: '',
// 	};
// }
// updataTermHandle = e => {
// 	const term = e.target.value.toLowerCase();
// 	this.setState({ term });
// 	this.props.updataTermHandle(term);
// };
// 	render() {
// 		return (
// 			<input
// 				type='text'
// 				className='form-control search-input align-center'
// 				placeholder='영화 검색'
// 				onChange={this.updataTermHandle}
// 				value={this.state.term}
// 			/>
// 		);
// 	}
// }

export default SearchPanel;
