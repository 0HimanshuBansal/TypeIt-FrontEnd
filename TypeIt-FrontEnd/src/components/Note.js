import React from 'react'

function Note(props) {
    let {note} = props;
    return (
        <div className={`card text-${note.textColor} bg-${note.bgColor} mb-3`} style={{ width: '300px', margin: '15px' }}>
            <div className="card-header card-title">{note.title}</div>
            <div className="card-body">
                <p className="card-text">{note.description}</p>
                <p className="card-text"><small className="text">Last updated 3 mins ago</small></p>
            </div>
        </div>
    )
}

export default Note
