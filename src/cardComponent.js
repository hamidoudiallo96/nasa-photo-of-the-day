import React from 'react';
import { Card,Image,Container } from 'semantic-ui-react'
import { black } from 'ansi-colors';


const cardStyle = {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'crimson',
    color: '#0a0a0a',
    fontWeight: 'bold',
    fontStyle: 'oblique'

}
const imageStyle = {
    color: 'dodger-blue'
}

const CardComponent = ({date,src,alt,content,title}) =>{
    if (!alt) {
        src =  <p>Loading...</p>
    } else if (alt==="video") {
        src = <iframe title = 'video'  type="text/html" width="100%" height="300px" src={src} align = "middle" allowFullScreen ></iframe>
    }else if(alt === 'image'){
        src = <Image src={src} alt={alt} wrapped/>
    }


   return(
    
        
            <Card style = {cardStyle}
            image={src} 
            header= {title}
            meta= {date}
            description={content}
    
            />
        
   )
}

export default CardComponent;

