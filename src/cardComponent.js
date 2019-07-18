import React from 'react';
import { Card,Image,Container } from 'semantic-ui-react'
import styled from 'styled-components'

const cardStyle = {
    width: '100%'
}

const CardComponent = ({date,src,alt,content,title}) =>{
    if (!alt) {
        src =  <p>Loading...</p>
    } else if (alt==="video") {
        src = <iframe title = 'video'  type="text/html" width="100%" height="100%" src={src} align = "middle" allowFullScreen ></iframe>
    }else if(alt === 'image'){
        src = <Image src={src} alt={alt} wrapped/>
    }


   return(
    
        <cardStyle>
            <Card
            image={src}
            header= {title}
            meta= {date}
            description={content}
    
            />
        </cardStyle>
    
   )
}

export default CardComponent;

