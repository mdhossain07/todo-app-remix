/* eslint-disable react/prop-types */
import { Form } from "@remix-run/react";
import styles from "../styles/noteList.css";

const NoteList = ({ tasks }) => {
  return (
    <ul id="note-list">
      {tasks?.map((task, index) => (
        <li key={task?.id} className="note">
          <article>
            <header>
              <ul className="note-meta">
                <li>#{index + 1}</li>
                <li>
                  {/* <time dateTime={note.id}>
                      {new Date(note.id).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </time> */}
                </li>
              </ul>
              <h2>{task?.task_name}</h2>
            </header>
            <p>{task?.details}</p>

            <div className="btn-actions">
              <Form method="delete" action={`/notes?id=${task.id}`}>
                <button type="submit">Delete</button>
              </Form>
              <button>Update</button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
