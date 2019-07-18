import React,{useState, useEffect} from "react";
import axios from 'axios';
import "./App.scss";
import ArticleTitle from "./components/header/articleTitle";
import ImageCaller from "./components/mainContent/image";
import MainContent from "./components/mainContent/mainSection";

function App() {
  const [date,setDate] = useState()
  const [explanation,setExplanation] = useState('')
  const [mediaType,setMediaType] = useState()
  const [title,setTitle] = useState()
  const [htmlUrl,setHTMLUrl] = useState()
  const [id,setID] = useState('')
  // const [idFromButton, setIDFromButton] = useState('')
  // const newDate = () => {
    
  //   setIDFromButton(id)

  
  //  }

  useEffect(()=>{
    
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=5olfyA0wVlICDiERdtzp8hRayBSW2ZhV6zNvijeL&date=${date}`)
    .then(data =>{
      
      // console.log(data.data.url)
      setDate(data.data.date); // date

      setExplanation(data.data.explanation); // main-content
      // setHDUrl(data.data.hdurl); // image
      setMediaType(data.data.media_type) //image type
      setTitle(data.data.title) //title of document
      setHTMLUrl(data.data.url) // image or video depending on the date
    })
    .catch(err =>{
      console.log(err)
    })

    
  },[date, id])

  

  
  
  return (
    <div className="App">
      
      <div className ="headerContainer">
        
        <div className = 'Date'>
            <h2>
                <div className= 'timer'>
                    
                    <form>
                        <input type = 'date' value = {date} onChange = { e =>setDate(e.target.value)}   min="2014-12-30" />
                        {/* <button onClick ={newDate}> Click Here </button> */}
                    </form>
                </div>
            </h2>
        </div>
    
        <ArticleTitle title = {title} />
      </div>
      
      <div className = 'media'>
        <ImageCaller src = {htmlUrl} alt = {mediaType} videoUrl = {htmlUrl}/>

        <MainContent content = {explanation} />
      </div>
      
      
    </div>
  );
}


export default App;
