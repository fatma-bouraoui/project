import React from 'react'
import './GardEnfant.css';
import {getUsers} from '../JS/actions/user';
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
function GardEnfant() {

  const dispatch = useDispatch();
 const users = useSelector ((state) => state.usersReducer.users);
 
 console.log(users);
 useEffect(() => {
   dispatch(getUsers());
  }, []);

    return (
      <div className="hero-container">
      
      
      
      {users?users.filter(el=>el.role=="Garde enfants").map((el)=><div className="main-container">
        <div className="poster-container">
          <a href="#"><img src="https://www.pngitem.com/pimgs/m/527-5277565_clipart-baby-sitting-black-and-white-stock-free.png" className="poster" /></a>
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            
            <p className="ticket__movie-slogan">
               {el.email}
            </p>
           
             <button className="ticket__buy-btn">see more</button>
          </div>
        </div>
      </div>
      
  
  
):<h2>loading...</h2>}
</div>

)
}

export default GardEnfant
