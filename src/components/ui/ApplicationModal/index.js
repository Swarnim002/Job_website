import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './styles.css';
import axios from 'axios';



function ApplicationModal(props) {

  const [applicationCards, setApplicationCards] = useState([])
  const Cards = [
     {
      Name: 'name',
      email: 'email',
      title: 'title',
      subtitle:'gafshek kdjhdsbj kolhsgsgs agafsrs hgstsgsbg djdhydt'
     },
     {
      Name: 'name',
      email: 'email',
      title: 'title',
      subtitle:'gafshek kdjhdsbj kolhsgsgs agafsrs hgstsgsbg djdhydt'
     },
     {
      Name: 'name',
      email: 'email',
      title: 'title',
      subtitle:'gafshek kdjhdsbj kolhsgsgs agafsrs hgstsgsbg djdhydt'
     },
     {
      Name: 'name',
      email: 'email',
      title: 'title',
      subtitle:'gafshek kdjhdsbj kolhsgsgs agafsrs hgstsgsbg djdhydt'
     },
  ];



  const getApplicationCards= async (e) => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('https://jobs-api.squareboat.info/api/v1/recruiters/jobs/3b2e43e6-c20d-4038-a929-0593df468f7f/candidates', { 'headers': { 'Authorization': token } })
      const applicationCardsArray = res.data.data.data;
      console.log(applicationCardsArray);
      setApplicationCards(...applicationCards, applicationCardsArray) 
    } catch (error) {
      console.log(error)
    }
    
  }
  
  useEffect(() => {
    
    getApplicationCards();
  }, []);
  
  const displayModal = (card, index) => {
    return (
      <div className='ApplicationCard'>
      <div className='upperSection'>
        <div className='circle'>E</div>
        <div className='name'>
          <h5>Name</h5>
          <p>email@email.com</p>
        </div>
      </div>
      <div className='lowerSection'>
        <h6>Skills</h6>
        <p>gafshek kdjhdsbj kolhsgsgs agafsrs hgstsgsbg djdhydt</p>
      </div>
  </div>
    );
  }



  return (
    <>

      <Modal   {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header className='ModalView'>
          <Modal.Title>Applications for this jon</Modal.Title>
          <hr />
        </Modal.Header>
        <h6>Total 35 applications</h6>
        <Modal.Body className='modalBody'>
          
           {Cards.map((displayModal))}
        </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ApplicationModal;