import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddNewNoteForm from './AddNewNoteForm';

const AddNewNote = () => {
	const [activeForm, setActiveForm] = useState(false);
    const backToHomeHandler =()=>{
        setActiveForm(false)
    }
	return (
		<div>
			<button
				className='bg-gray-800 hover:bg-gray-700 text-white
             rounded-full text-xl w-[50px] h-[50px] flex items-center justify-center absolute bottom-[2rem] right-[2rem]'
				onClick={() => setActiveForm(!activeForm)}>
				<FontAwesomeIcon icon={faPlus} />
			</button>

			{activeForm && (
				<AddNewNoteForm backToHomeHandler={backToHomeHandler}/>
			)}
		</div>
	);
};   

export default AddNewNote;
