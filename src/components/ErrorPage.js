import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage () {
    return(
        <div className="mt-80px">

        <h1 className="h1-mod">Page Not Found</h1>
        <Link to='/'>
        <p className="p-mod">Back to Home</p>
        </Link>
        </div>
    )
}

export default ErrorPage