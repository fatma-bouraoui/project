import React from 'react'
import { Link } from 'react-router-dom';
import './service.css';
const Service = () => {
    return (
        <div>
            
        
        <main>
          <ul id="cards">
            <li className="card" id="card_1">
              <div className="card__content">
                <div>
                  <h2>Garde enfants</h2>
                  <p>garde enfant ,nounours ,babysitters.</p>
                  <Link to='/signup'> <p><a  className="btn btn--accent">je me propose pour l'aide</a></p></Link>
                  <Link to='/listprop'> <p><a  className="btn btn--accent">j'ai besoin d'aide</a></p></Link>
                </div>
                <figure>
                  <img src="https://www.canetenroussillon.fr/wp-content/uploads/garde-enfant.jpg" alt="Image description" />
                </figure>
              </div>
            </li>
            <li className="card" id="card_2">
              <div className="card__content">
                <div>
                  <h2>Compagnie Séniors</h2>
                  <p>compagnie ,soin ,aide.</p>
                  <Link to='/signup'> <p><a  className="btn btn--accent">je me propose pour l'aide</a></p></Link>
                  <Link to='/listprop'> <p><a  className="btn btn--accent">j'ai besoin d'aide</a></p></Link>
                </div>
                <figure>
                  <img src="https://img.freepik.com/vecteurs-libre/benevoles-aidant-personnes-agees_23-2148564425.jpg?size=626&ext=jpg" alt="Image description" />
                </figure>
              </div>
            </li>
            <li className="card" id="card_3">
              <div className="card__content">
                <div>
                  <h2>Maison</h2>
                  <p>ménage ,jardinage ,travaux.</p>
                  <Link to='/signup'> <p><a  className="btn btn--accent">je me propose pour l'aide</a></p></Link>
                  <Link to='/listprop'> <p><a  className="btn btn--accent">j'ai besoin d'aide</a></p></Link>
                </div>
                <figure>
                  <img src="https://mana-garden.com/wp-content/uploads/2021/01/disinfecting-home.png" alt="Image description" />
                </figure>
              </div>
            </li>
           
          </ul>
        </main>
        <aside>
	<p>helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.</p>
	
	<p>helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.</p>
	<p>helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.</p>
	
	<p>helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.</p>
	<p>helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.</p>
	
	<p>helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.helper family.</p>
</aside>
        </div>
    )
}

export default Service

