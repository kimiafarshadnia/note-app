import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const AddNewNoteForm = ({ backToHomeHandler, handleNote }) => {
	const [inputs, setInputs] = useState({
		title: '',
		description: ''
	});

	const changeHandler = (e) => {
		setInputs({...inputs, [e.target.name]: e.target.value})
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!inputs) return null;
		const newNote = {
			inputs,
			id: Date.now(),
			completed: false,
			createAt: new Date().toISOString(),
		}
		handleNote(newNote)
		console.log(newNote)
	};

	
	return (
		<div className='bg-gray-800 w-full h-full absolute top-[2rem] start-0 rounded-t-[2rem]'>
			<button
				type='button'
				className=' text-white flex ms-8 mt-8'
				onClick={backToHomeHandler}>
				<FontAwesomeIcon icon={faChevronLeft} size='2xl' />
			</button>
			<form
				action='#'
				onSubmit={handleSubmit}
				className='flex flex-col gap-8 mt-8 p-8'>
				<input
					type='text'
					name='title'
					className='bg-transparent text-4xl text-white capitalize focus:outline-none'
					placeholder='Title'
					onChange={changeHandler}
				/>

				<textarea
					className='bg-transparent text-white focus:outline-none'
					name='description'
					cols='30'
					rows='10'
					placeholder='Type something...'
					onChange={changeHandler}></textarea>

				<button
					type='submit'
					className='rounded-xl bg-violet-400 text-violet-600 p-3 w-[148px]'>
					add note
				</button>
			</form>
		</div>
	);
};

export default AddNewNoteForm;
