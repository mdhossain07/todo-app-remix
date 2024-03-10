import { json, redirect } from "@remix-run/node";
import NewNote from "../components/NewNote";
import { links as newNoteLinks } from "../components/NewNote";
import { links as noteListLinks } from "../components/NoteList";
import { createTask, deleteTask, getTasks, updateTask } from "../utils";
import NoteList from "../components/NoteList";
import { useLoaderData } from "@remix-run/react";
import UpdateNote from "../components/UpdateNote";
import { useState } from "react";

const Notes = () => {
  const tasks = useLoaderData();
  
    const [showModal, setshowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

  const handleUpdateTask = (task) => {
    setshowModal(true);
    setSelectedTask(task);
  }

  return (
    <div>
      <NewNote />
      <NoteList tasks={tasks} onUpdate={handleUpdateTask}/>
      {showModal && <UpdateNote task={selectedTask} onClose={() => setshowModal(false)}/>}
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
  } 
  
  else if(request.method === 'PATCH'){
    const url = new URL(request.url);
    const taskId = url.searchParams.get("id");
    const formData = await request.formData();
    const taskData = Object.fromEntries(formData);
    await updateTask(taskId, taskData);
  }
  
  else {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    await createTask(noteData);
  }
  return redirect("/notes");
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
