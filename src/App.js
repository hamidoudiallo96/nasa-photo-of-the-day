// imports
import React,{useState, useEffect} from "react";
import axios from 'axios';
// import ArticleTitle from "./components/header/articleTitle";
// import ImageCaller from "./components/mainContent/image";
// import MainContent from "./components/mainContent/mainSection";
import { Container,Input,Header,Divider } from 'semantic-ui-react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
import CardComponent from './cardComponent'





const FlexDiv = styled.div `
  margin-bottom: 50px;
  font-style: oblique;
  font-size: 2rem;
  text-align: center;
  background-color: whitesmoke;
  
`
const newStyle = {
  color: 'crimson',
  fontSize: '4rem',
  fontWeight: 'bold',
  fontStyle: 'oblique'
}



// Parent Component
function App() {
  const original = '2019-07-18'
  const [date,setDate] = useState(original)
  const [explanation,setExplanation] = useState('')
  const [mediaType,setMediaType] = useState()
  const [title,setTitle] = useState()
  const [htmlUrl,setHTMLUrl] = useState()
  const [id,setID] = useState('')
  

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
    
    <Container text textAlign = 'center'>
      <FlexDiv>
        <Header as = 'h1' style ={newStyle}>NASA APOD </Header>
      
      
          <form>
            <Input type = 'date' value = {date} onChange = { e =>setDate(e.target.value)}   min="2014-12-30" />
            {/* <button onClick ={newDate}> Click Here </button> */}
          </form>
      
        <Divider />
        
          
        </FlexDiv>

        {/* <ArticleTitle title = {title} />

        <Divider />  
        <ImageCaller src = {htmlUrl} alt = {mediaType} videoUrl = {htmlUrl}/>
        <Divider />
        <MainContent content = {explanation} /> */}
        <CardComponent  date = {date} src={htmlUrl} alt = {mediaType} content = {explanation} title ={title} />


      
      
      
    </Container>
  );
}


export default App;
