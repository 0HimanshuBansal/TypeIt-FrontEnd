import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000/api/notes";
  const [notes, setNotes] = useState([]);

  //fetchNotes
  const fetchNotes = async () => {
    const url = host + "/fetchNotes";
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('TypeItToken')
      }
    });
    const json = await response.json();
    setNotes(json);
  }

  //add a note
  const addNote = async (title, description, tag, bgColor) => {
    const url = host + "/addNote";
    const d = new Date();
    const date = d.toLocaleTimeString() + ", " + d.toDateString();
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem('TypeItToken') },
      body: JSON.stringify({ title, description, tag, bgColor, date })
    });
    const apiResponse = await response.json();
    // console.log("apires", apiResponse);
    // console.log("notes", notes);
    if (notes.length > 0) setNotes(notes.concat(apiResponse));
    else setNotes(apiResponse);
  }

  //edit a note
  const editNote = async (id, enote, color) => {
    const url = host + "/updateNote/" + id;
    // console.log(id + color);
    const d = new Date();
    const date = d.toLocaleTimeString() + ", " + d.toDateString();
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('TypeItToken')
      },
      body: JSON.stringify({ title: enote.title, description: enote.description, tag: enote.tag, bgColor: color, date: date })
    });
    //    fetchNotes();
    let newNotee = JSON.parse(JSON.stringify(notes));
    await response.json();
    for (let i = 0; i < newNotee.length; i++) {
      if (newNotee[i]._id === id) {
        newNotee[i].title = enote.title;
        newNotee[i].description = enote.description;
        newNotee[i].tag = enote.tag;
        newNotee[i].date = date;
        newNotee[i].bgColor = color;
        break;
      }
    }
    setNotes(newNotee);
  }

  //delete a note
  const deleteNote = async (id) => {
    const url = host + "/deleteNote/" + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('TypeItToken')
      }
    });
    await response.json();
    // const apiResponse = await response.json();
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;