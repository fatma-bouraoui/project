

import React ,{ useEffect } from 'react';
import './Maison.css';



import {getUsers} from '../JS/actions/user';
import { useDispatch, useSelector } from 'react-redux';

function Maison() {
    const dispatch = useDispatch();
    const users = useSelector ((state) => state.usersReducer.users);
    
    console.log(users);
    useEffect(() => {
      dispatch(getUsers());
     }, []);
  


  
  
    return (
      
      <div className="hero-container">
        
        
        
      {users?users.filter(el=>el.role=="ménage et travaux").map((el)=><div className="main-container">
        <div className="poster-container">
          <a href="#"><img src="https://img.freepik.com/vecteurs-libre/nettoyant-produits-entretien_18591-52060.jpg?size=338&ext=jpg" className="poster" /></a>
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
export default Maison


