import React,{useState, useEffect} from "react";
import axios from 'axios';
import "./App.scss";
import ArticleTitle from "./components/header/articleTitle";
// import ArticleDate from "./components/header/articleDate";
import ImageCaller from "./components/mainContent/image";
import MainContent from "./components/mainContent/mainSection";

function App() {
//   date: "2019-07-18"
// ​​
// explanation: "On July 16 the Moon celebrated the 50th anniversary of the launch of Apollo 11 with a lunar eclipse visible from much of planet Earth. In this view part of the lunar disk is immersed in Earth's dark, reddened umbral shadow. Near the maximum eclipse phase, it just touches down along a mountain ridge. The rugged Tyrolean nightscape was recorded after moonrise south of Innsbruck, Austria with a dramatically lit communication tower along the ridgeline. Of course eclipses rarely travel alone. This partial lunar eclipse was at the Full Moon following July 2nd's New Moon and total eclipse of the Sun."
// ​​
// hdurl: "https://apod.nasa.gov/apod/image/1907/moon_eclipse_span.jpg"
// ​​
// media_type: "image"
// ​​
// service_version: "v1"
// ​​
// title: "Shadowed Moon and Mountain"
// ​​
// url: "https://apod.nasa.gov/apod/image/1907/moon_eclipse_span1066.jpg"
  
  const [date,setDate] = useState('')
  const [explanation,setExplanation] = useState('')
  // const [hdurl,setHDUrl] = useState('')
  const [mediaType,setMediaType] = useState()
  const [title,setTitle] = useState()
  const [htmlUrl,setHTMLUrl] = useState()
  const [id,setID] = useState('')
  const [idFromButton, setIDFromButton] = useState('')
  const newDate = () => {
    setDate(id)
  }

  useEffect(()=>{
    
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=5olfyA0wVlICDiERdtzp8hRayBSW2ZhV6zNvijeL&date=${id}`)
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
    
  }, [date, id, idFromButton])

  

  
  
  return (
    <div className="App">
      {/* <h2><time>{date}</time></h2> */}
      <div className ="headerContainer">
        {/* <ArticleDate date = {date}  /> */}
        <div className = 'Date'>
            <h2>
                <div className= 'timer'>
                    {/* <time>{props.date}</time> */}
                    <form>
                        <input type = 'date' value = {id} onChange = { e =>setDate(e.target.value)} placeholder = 'YYYY-MM-DD' min="2014-12-30" />
                        <button onclick ={newDate}> Click Here</button>
                    </form>
                </div>
            </h2>
        </div>
    
        <ArticleTitle title = {title} />
      </div>
      {/* <h2> {title}</h2> */}
      {/* <iframe title = 'video'  type="text/html" width="560" height="315" src={htmlUrl} align ="middle"></iframe> */}
            
      {/* <img src = {hdurl} alt = {mediaType}/> */}
      <div className = 'media'>
        <ImageCaller src = {htmlUrl} alt = {mediaType} videoUrl = {htmlUrl}/>

        <MainContent content = {explanation} />
      </div>
      {/* <iframe title="video" src="https://www.youtube.com/embed/xc1SzgGhMKc?start=850" allowfullscreen="" width="560" height="315" frameborder="0" align="middle"></iframe> */}
      
    </div>
  );
}

export default App;
