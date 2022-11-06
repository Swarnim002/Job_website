import React, { useEffect } from 'react'
import './styles.css';
import {NavbarViewTwo} from '../../ui/Navbar/index';
import axios from 'axios';
import CardContainer from '../../ui/Card';
import { useNavigate } from 'react-router-dom';
import ApplicationModal from '../../ui/ApplicationModal';



const HomeScreen = () => {


  const navigate = useNavigate();
  const [cards, setCards] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nextPage = () => {
    setPageNumber(2);
  }

 const getCardsData= async (e) => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=${pageNumber}`, { 'headers': { 'Authorization': token } })
    const cardsArray = await res.data.data.data;
    setCards(...cards, cardsArray) 
  } catch (error) {
    console.log(error)
  }
  
}

useEffect(() => {
  
   getCardsData();
}, []);

useEffect(() => {
  if(!localStorage.getItem('token')){
   navigate('/')
  }
}, []);

const renderCards = (cards, index) => {
  return (
    <CardContainer 
    index={index}
    title={cards.title}
    description={cards.description.substr(0, 60) + '...'} 
    onClick={handleShow}
    location={cards.location}
    />
  );
 }
  

  return (
    <div className='homeScreenContainer'>
        <NavbarViewTwo />
        <div className='childContainer'>
            <div className='headings'>
             <div className='home'>
              <img src='assets/home.png' className='homeImg'/>
              <h4>Home</h4>
              </div> 
           
            <h2>Jobs Posted by You</h2>
            </div>
            <div className='jobCardsView'>
           {cards.map((renderCards))}
           </div>
        </div>
        <ApplicationModal 
         handleClose={handleClose}
         show={show}
        />
        </div>
  )
}

export default HomeScreen