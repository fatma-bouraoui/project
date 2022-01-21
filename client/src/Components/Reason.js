import React from 'react'
import './Reason.css';
function Reason() {
    return (
        <div className='reasonbody'>
           
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <title>Frontend Mentor | Four card feature section</title>
        <link rel="stylesheet" href="styles.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap" rel="stylesheet" />
        <div className="header">
          
          <h1>FAMILY_HELPER est là pour vous aider !</h1>
          <p>Pas facile de trouver de l'aide au quotidien... J'ai donc décidé de créer ce site. Ménage, aide aux personnes âgées, ou garde d'enfant</p>
        </div>
        <div className="row1-container">
          <div className="box box-down cyan">
            <h2>EFFICACE</h2>
            <p>Tous les jours, des centaines de nouvelles annonces.</p>
            <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
          </div>
          <div className="box red">
            <h2>CONFIANCE</h2>
            <p>Profils complets, vérifications, avis : recrutez sereinement.</p>
            <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
          </div>
          <div className="box box-down blue">
            <h2>C'EST GRATUIT</h2>
            <p>Se contacter et se rencontrer gratuitement.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkgK-Z38S0jP3NOinRNKH92XjggWJhHT-Iuj5PLJAfxY1v2Ku&usqp=CAU" alt="" />
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            <h2>OPPORTUNITE DE TRAVAIL</h2>
            <p>Envie d'un métier util et d'un employeur local? Postulez!</p>
            <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
          </div>
        </div>
       
        </div>
    )
}

export default Reason
