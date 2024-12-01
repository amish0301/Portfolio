import React from 'react'
import { Container } from 'react-bootstrap'

const NotFoundLayout = () => {
    return (
        <Container className='notfound-container'>
            <div className="text-center resume-notfound">
                <h1 className="display-1 fw-bold mb-5">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps! Page not found.</span> </p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
            </div>
            <button className='not-found-btn' type="button" aria-label='goBack button' id='btn' onClick={() => window.location.pathname = '/'}>Go Back</button>
        </Container>
    )
}

export default NotFoundLayout