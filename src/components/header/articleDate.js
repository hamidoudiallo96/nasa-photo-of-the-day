import React from 'react'

function ArticleDate(props){
    return(
        <div className = 'Date'>
            <h2>
                <div className= 'timer'>
                    <time>{props.date}</time>
                </div>
            </h2>
        </div>
    )
}

export default ArticleDate