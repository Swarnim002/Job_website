import React from 'react'
import './styles.css';

const pagination = (props) => {
  return (
        <div className='paginationContainer'>
            <button className='prevBtn'>Prev</button>
             <h5>0 of 2</h5>
             <button 
             onClick={props.onClickNext}
             className='prevBtn'>Next</button>
        </div>
    
  )
}

export default pagination;