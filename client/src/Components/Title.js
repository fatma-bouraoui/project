import React from 'react'
import { Link } from 'react-router-dom';
import './Title.css';
function Title() {
    return (
        <div className='title'>
            <img src='https://icons-for-free.com/iconfiles/png/128/family+heart+home+love+peace+warmth+icon-1320165901988328242.png' alt='titleimg'></img>
            <h1>FAMILY_HELPER</h1>
             <button><Link to='/signup'><h4>Je me propose pour l'aide</h4></Link></button>
            <button><Link to='/listprop'><h4>j'ai besoin d'aide</h4></Link></button>
   
        </div>
    )
}

export default Title
