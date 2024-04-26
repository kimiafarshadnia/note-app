import './App.css';
import Header from './components/Header';
import AddNewNote from './components/newNote/AddNewNote';
import NoteList from './components/NoteList';
import { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([]);

	const handleNote = (newNote) => {
		setNotes((prevNotes) => [...prevNotes, newNote]);
		console.log(newNote);
	};

	const handleDeleteNote = (id) => {
		setNotes(prevNotes => prevNotes.filter((note) => note.id !== id));
	};

	return (
		<div className='container mx-auto'>
			<Header />
			<AddNewNote handleNote={handleNote} />
			<NoteList notes={notes} onDelete={handleDeleteNote} />
		</div>
	);
}

export default App;
