import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete }) => {
	console.log(notes)
	return(

	<div className="flex flex-col justify-center">
		{notes.map((note) => (
           <NoteItem key={note.id} note={note}/>
        ))}
	</div>
    )
};

export default NoteList;
