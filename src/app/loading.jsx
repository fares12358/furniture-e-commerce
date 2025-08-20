import React from 'react'

const Loading = () => {
    return (
        <div className='w-screen h-screen absolute tpo-0 left-0 flex items-center justify-center z-50 bg-white'>
            <div className="loader">
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
            </div>
        </div>
    )
}

export default Loading