import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = [
    {
      "_id": "61817591b4d42d6741108db9",
      "user": "6180af5060f69229f55371e2",
      "title": "Title",
      "description": "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.",
      "tag": "General",
      "date": "2021-11-02T17:29:53.098Z",
      "__v": 0,
      "bgColor": "primary"
    },
    {
      "_id": "61817591b4d42d6741108db9",
      "user": "6180af5060f69229f55371e2",
      "title": "Title",
      "description": "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.",
      "tag": "General",
      "date": "2021-11-02T17:29:53.098Z",
      "__v": 0,
      "bgColor": "secondary"
    },
    {
      "_id": "61817591b4d42d6741108db9",
      "user": "6180af5060f69229f55371e2",
      "title": "Title",
      "description": "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.",
      "tag": "General",
      "date": "2021-11-02T17:29:53.098Z",
      "__v": 0,
      "bgColor": "success"
    },
    {
      "_id": "61817591b4d42d6741108db9",
      "user": "6180af5060f69229f55371e2",
      "title": "Title",
      "description": "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.",
      "tag": "General",
      "date": "2021-11-02T17:29:53.098Z",
      "__v": 0,
      "bgColor": "danger"
    },
    {
      "_id": "61817591b4d42d6741108db9",
      "user": "6180af5060f69229f55371e2",
      "title": "Title",
      "description": "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.",
      "tag": "General",
      "date": "2021-11-02T17:29:53.098Z",
      "__v": 0,
      "bgColor": "warning"
    },
    {
      "_id": "61817591b4d42d6741108db9",
      "user": "6180af5060f69229f55371e2",
      "title": "Title",
      "description": "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.",
      "tag": "General",
      "date": "2021-11-02T17:29:53.098Z",
      "__v": 0,
      "bgColor": "info"
    },
    {
      "_id": "61817591b4d42d6741108db9",
      "user": "6180af5060f69229f55371e2",
      "title": "Title",
      "description": "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.",
      "tag": "General",
      "date": "2021-11-02T17:29:53.098Z",
      "__v": 0,
      "bgColor": "light"
    },
    {
      "_id": "61817591b4d42d6741108db9",
      "user": "6180af5060f69229f55371e2",
      "title": "Title",
      "description": "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.",
      "tag": "General",
      "date": "2021-11-02T17:29:53.098Z",
      "__v": 0,
      "bgColor": "dark"
    }
  ];

  const [notes, setNotes] = useState(initialNotes);
  //add a note
  const addNote = (title, description, tag, bgColor) => {
    var note = {
      "_id": "61817591b4d42d6741108db9",
      "user": "6180af5060f69229f55371e2",
      "title": "Title1",
      "description": "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.",
      "tag": "General",
      "date": "2021-11-02T17:29:53.098Z",
      "__v": 0,
      "bgColor": "light"
    };
    setNotes(notes.push(note));
  }

  //edit a note
  const editNote = (id) => {

  }

  //delete a note
  const deleteNote = (id) => {

  }


  // const s1 = {
  //     "name": "Himanshu",
  //     "year": "1999"
  // }
  // const [state, setState] = useState(s1);

  // const updateState = () => {
  //     setTimeout(() => {
  //         setState({
  //             "name": "Himanshu updated",
  //             "year": "2001"
  //         })
  //     }, 1000);
  // }

  return (
    // <NoteContext.Provider value={{state, updateState}}>
    <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;