import React from 'react';
import { Container, Divider } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

function ImageCaller({src,alt}){
    
    
         if (!alt) {
            return <Container textAlign='left'><p>Loading...</p></Container>
        } else if (alt==="video") {
            return <iframe title = 'video'  type="text/html" width="560" height="315" src={src} align = "middle"></iframe>
        }else if(alt === 'image'){
            return <Container textAlign='left'><Image src={src} alt={alt} wrapped/></Container>
        }

        
    
        
    
}

export default ImageCaller