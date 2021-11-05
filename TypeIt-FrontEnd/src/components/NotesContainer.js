import React, { useContext } from 'react';
import Note from './Note';
import Loading from './Loading';
import contextValue from '../context/note/noteContext'

function NotesContainer() {
    const context = useContext(contextValue);
    const { notes, setNotes } = context;

    return (
        <>
            {/* {<Loading />} */}
            {/* <div className="container"> */}
                <div className="row">
                    {
                        notes.map((note) => {
                            return <Note note={note}/>
                        })
                    }
                </div>
            {/* </div> */}
        </>
    )
}

export default NotesContainer
