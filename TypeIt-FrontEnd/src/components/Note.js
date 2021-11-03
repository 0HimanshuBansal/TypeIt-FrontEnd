import React from 'react'

function Note(props) {
    return (
        <div class={`card text-${props.textColor} bg-${props.bgColor} mb-3`} style={{ width: '400px', margin: '30px' }}>
            <div class="card-header card-title">Title</div>
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text"><small class="text">Last updated 3 mins ago</small></p>
            </div>
        </div>
    )
}

export default Note
