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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4MGFmNTA2MGY2OTIyOWY1NTM3MWUyIn0sImlhdCI6MTYzNTgyNDczM30.9RonbqOtoDAVWj57RvIDHAlhx0MyGceI9QOXd5_ngOY'
      }
    });
    const json = await response.json();
    setNotes(json);
  }

  //add a note
  const addNote = async (title, description, tag, bgColor, date) => {
    const url = host + "/addNote";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4MGFmNTA2MGY2OTIyOWY1NTM3MWUyIn0sImlhdCI6MTYzNTgyNDczM30.9RonbqOtoDAVWj57RvIDHAlhx0MyGceI9QOXd5_ngOY'
      },
      body: JSON.stringify({ title, description, tag, bgColor })
    });
    const apiResponse = await response.json();
    setNotes(notes.concat(apiResponse));
  }

  //edit a note
  const editNote = async (id, enote, color) => {
    const url = host + "/updateNote/" + id;
    console.log(id + color);
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4MGFmNTA2MGY2OTIyOWY1NTM3MWUyIn0sImlhdCI6MTYzNTgyNDczM30.9RonbqOtoDAVWj57RvIDHAlhx0MyGceI9QOXd5_ngOY'
      },
      body: JSON.stringify({ title: enote.title, description: enote.description, tag: enote.tag, bgColor: color })
    });
    fetchNotes();
    await response.json();
    // const apiResponse = await response.json();
    // const newNotee = notes.map((note) => { if (note._id === id){
    //   note.title = apiResponse.title;
    //   note.description = apiResponse.description;
    //   note.bgColor = apiResponse.bgColor;
    // } })
    // setNotes(newNotee);
  }

  //delete a note
  const deleteNote = async (id) => {
    const url = host + "/deleteNote/" + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4MGFmNTA2MGY2OTIyOWY1NTM3MWUyIn0sImlhdCI6MTYzNTgyNDczM30.9RonbqOtoDAVWj57RvIDHAlhx0MyGceI9QOXd5_ngOY'
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