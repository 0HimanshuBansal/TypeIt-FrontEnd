import React from 'react'

export const Alert = (props) => {
    return (
        <div className="alert alert-success fixed-bottom mx-3" role="alert">
            Your not has been <strong>{props.message}</strong> successflly.
        </div>
    )
}
