import React from 'react'

const notFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='text-center p-5 bg-dark text-light border border-2 rounded-5'>
                <h1 className='display-1'>404</h1>
                <h3 className='display-1 fw-bold'>Not-Found</h3>
            </div>
        </div>
    )
}

export default notFound;