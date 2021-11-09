import React, { useContext, useState } from 'react'
import noteContext from '../context/note/noteContext';

export const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "", bgColor: "light" })
    const saveNote = () => {

    }

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    }

    var textarea = document.querySelector("#description");
    if(textarea = null) textarea.addEventListener('input', autoResize, false);

    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }

    // document.addEventListener('DOMContentLoaded', function () {
    //     autosize(document.querySelectorAll('#story'));
    // }, false);

    return (
        <>
            <div className="addNote modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="addNote-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="addNote-content modal-content">
                        <div className="addNote-header modal-header">
                            <input id="title" name="title" placeholder="Title" onChange={onChange} />
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/* <div id="description" name="description" className="addNote-body modal-body" data-text="Add Note" contenteditable="true" role="textbox" onChange={onChange}></div> */}
                        <div className="addNote-body modal-body">
                            <textarea id="description" name="description" placeholder="Add note.." onChange={onChange} autofocus rows="4"></textarea>
                        </div>
                        <div className="addNote-footer modal-footer">
                            <button type="button" className="btn btn-dark" onClick={saveNote}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="addNote">
                <div className="addNote-dialog">
                    <div className="addNote-content">
                        <div className="addNote-header">
                            <input placeholder="Title" />
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="addNote-body">
                            <input placeholder="Note" />
                        </div>
                        <div className="addNote-footer">
                            <button type="button" className="btn btn-dark">Understood</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
