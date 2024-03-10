import { json, redirect } from "@remix-run/node";
import NewNote from "../components/NewNote";
import {links as newNoteLinks} from '../components/NewNote'
import {links as noteListLinks} from '../components/NoteList'
import { createTask, getTasks } from "../utils";
import NoteList from "../components/NoteList";
import { useLoaderData } from "@remix-run/react";

const Notes = () => {

    const tasks = useLoaderData();
    return (
        <div>
            <NewNote/>
            <NoteList tasks = {tasks}/>
        </div>
    );
};

export default Notes;


export async function loader () {
    const tasks = await getTasks();
    return tasks;
}

export async function action ({request}) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    console.log(noteData);

    // return noteData

    const makeNote = await createTask(noteData);
    console.log(makeNote);
    return redirect("/notes")

    // const {title, details} = noteData;


    // add database query to post tasks..

    // const postTask = await db.query('insert into tasks (task_name, details) values ($1, $2, $3) returning *', [title, details])
    // console.log(postTask);
    // return redirect('/notes');
}

export function links (){
    return [...newNoteLinks(), ...noteListLinks()]
}