import noteStyles from '../styles/newNotes.css'

const NewNote = () => {

  return (
    <form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="task_name" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="details" rows="5" required />
      </p>
      <div className="form-actions">
        <button type='submit'>Add Note</button>
      </div>
    </form>
  );
};

export function links(){
    return [{rel: "stylesheet", href: noteStyles}]
}

export default NewNote;
