import React from 'react';

function ImageCaller({src,alt, videourl}){
    
         if (!alt) {
            return <p>Loading...</p>
        } else if (alt==="video") {
            return <iframe title = 'video'  type="text/html" width="560" height="315" src={src} align = "middle"></iframe>
        }else if(alt === 'image'){
            return <div className ="main-img"><img src={src} alt={alt} /></div>
        }
    
        
    
}

export default ImageCaller