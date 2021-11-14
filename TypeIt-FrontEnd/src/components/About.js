import React from 'react'
// import React, { useContext, useEffect } from 'react'
// import noteContext from '../context/note/noteContext'

const About = () => {
    // const a = useContext(noteContext);
    // useEffect(() => {
    //     a.updateState();
    //     // eslint-disable-next-line
    // }, [])

    return (
        <div className="container my-3">
            <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                    <h5 className="card-title">TypeIt</h5>
                    <p className="card-text">We are an company that provides varous utility mobile-application and web-application for free, mostly.</p>
                </div>
            </div>
        </div>
    )
}

export default About