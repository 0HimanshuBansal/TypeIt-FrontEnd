import React from 'react'
import NotesContainer from './NotesContainer'

const Home = () => {
    return (
        <div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-dark" type="button">Add Note</button>
            </div>
            <NotesContainer />
        </div>
    )
}

export default Home
