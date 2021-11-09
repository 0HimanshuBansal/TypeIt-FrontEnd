import React, { useContext } from 'react'

function Note(props) {
    let { note } = props;
    if (note.bgColor === "warning" || note.bgColor === "info" || note.bgColor === "light")
        var textColor = 'text-dark';
    else
        var textColor = 'text-white';

    return (
        <div className={`card ${textColor} bg-${note.bgColor} mb-3`} style={{ width: '300px', margin: '15px' }}>
            <div className="card-header card-title">{note.title}</div>
            <div className="card-body">
                <p className="card-text">{note.description}</p>
                <p className="card-text"><small className="text">Last updated 3 mins ago</small></p>
            </div>
            <div className="card-footer d-flex">
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default Note
