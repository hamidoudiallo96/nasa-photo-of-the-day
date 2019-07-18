import React from 'react'

function MainContent(props){
    return(
        <div className = 'main-content'>
            <p>{props.content}</p>
        </div>
      
    )
}

export default MainContent;