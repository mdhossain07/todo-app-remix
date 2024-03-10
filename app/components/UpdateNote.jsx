/* eslint-disable react/prop-types */
import { Form } from "@remix-run/react";
import { useState } from "react";

export default function UpdateNote({task, onClose}) {
  const [title, setTitle] = useState(task?.task_name);
  const [details, setDetails] = useState(task?.details);
  return (
    <div className="overlay">
      <div className="modal">
        <h2>Update Book</h2>
        <Form method="patch" action={`/notes?id=${task.id}`}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="task_name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <label htmlFor="author">Details</label>
          <input
            type="text"
            id="author"
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
          <br />
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </Form>
      </div>
    </div>
  );
}
