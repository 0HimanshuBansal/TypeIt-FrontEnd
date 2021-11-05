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
      "textColor": "white",
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
      "textColor": "white",
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
      "textColor": "white",
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
      "textColor": "white",
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
      "textColor": "dark",
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
      "textColor": "dark",
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
      "textColor": "dark",
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
      "textColor": "white",
      "bgColor": "dark"
    }
  ];

  const [notes, setNotes] = useState(initialNotes);
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
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;