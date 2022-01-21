import React from 'react'
import Cards from './Cards';
import FirstC from './FirstC';
import './Home.css';
import Reason from './Reason';
import Title from './Title';
function Home() {
    return (
<div  className='homebody'>
      <Title/>
       <FirstC/>
      <Reason/>
      <Cards></Cards>
        </div>
        
        
    )
}

export default Home

