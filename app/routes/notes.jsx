import { json, redirect } from "@remix-run/node";
import NewNote from "../components/NewNote";
import { links as newNoteLinks } from "../components/NewNote";
import { links as noteListLinks } from "../components/NoteList";
import { createTask, deleteTask, getTasks } from "../utils";
import NoteList from "../components/NoteList";
import { useLoaderData } from "@remix-run/react";

const Notes = () => {
  const tasks = useLoaderData();
  return (
    <div>
      <NewNote />
      <NoteList tasks={tasks} />
    </div>
  );
};

export default Notes;

export async function loader() {
  const tasks = await getTasks();
  return tasks;
}

export async function action({ request }) {
  if (request.method === "DELETE") {
    const url = new URL(request.url);
    const taskId = url.searchParams.get("id");
    await deleteTask(taskId);
  } else {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    await createTask(noteData);
  }
  return redirect("/notes");
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
