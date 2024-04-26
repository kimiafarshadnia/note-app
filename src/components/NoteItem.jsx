const NoteItem = ({ onDelete }) => {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	return (
		<div className='border rounded-md flex flex-col p-2'>
			<h2 className='text-xl font-bold'>title</h2>
			<p className='text-gray-700 font-light'>description</p>
			<div className='flex items-center gap-4'>
				<button type='button' onClick={() => onDelete(note.id)}>
					x
				</button>
				<input type='checkbox' name='complete' id='complete' />
			</div>
			<hr />
			<div className='text-gray-300 text-center'>
				{new Date(note.createAt).toLocaleString('en-Us', options)}
			</div>
		</div>
	);
};

export default NoteItem;
