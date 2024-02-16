import React from 'react'

const ErrorMessage = ({ refetch ,message }) => {
    return (
        <article className="message is-danger is-flex is-align-items-center p-2" >
            <div className="message-body">
                {message}
            </div>
            {refetch && <button className='button is-danger is-small' onClick={() => refetch()}>Refetch!</button>}
            

        </article>
        
    )
}

export default ErrorMessage