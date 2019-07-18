import React from 'react'
import styled from 'styled-components'
// import {Header ,Container} from 'semantic-ui-react'

const headStyle = {
    color: 'blue',
    fontSize:'3rem',
    textAlign:'center'

}
  






function ArticleTitle(props){
    
    return(
        <div style = {headStyle}>{props.title}</div>
                    
               
            
            
        
    )
}

export default ArticleTitle