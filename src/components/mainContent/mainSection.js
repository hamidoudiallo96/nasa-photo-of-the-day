import React from 'react'
import { Container, Divider } from 'semantic-ui-react'



function MainContent(props){
    return(
        <Container textAlign='right'>
            <p>{props.content}</p>
        </Container>
        
      
    )
}

export default MainContent;