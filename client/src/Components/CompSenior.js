import React from 'react'
import './CompSenior.css';
import {getUsers} from '../JS/actions/user';
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
function CompSenior() {
 const dispatch = useDispatch();
 const users = useSelector ((state) => state.usersReducer.users);
 
 console.log(users);
 useEffect(() => {
   dispatch(getUsers());
  }, []);
  
    return( 
       
        <div className="hero-container">
        
        
        
        {users?users.filter(el=>el.role=="compagnie personne agée").map((el)=><div className="main-container">
          <div className="poster-container">
            <a href="#"><img src="https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-chongyang-festival-to-help-the-elderly-walk-babysitter-in-blue-uniform-png-image_344688.jpg" className="poster" /></a>
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


export default CompSenior
