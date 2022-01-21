import React from 'react'
import { Link } from 'react-router-dom';
import './ListProp.css';
function ListProp() {
    return (
        


        <div className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <a href="#"><img src="https://img.freepik.com/vecteurs-libre/nettoyant-produits-entretien_18591-52060.jpg?size=338&ext=jpg" className="poster" /></a>
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              
              <p className="ticket__movie-slogan">
                 ménage et travaux
              </p>
             
              <Link to='/maison'> <button className="ticket__buy-btn">see more</button></Link>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="poster-container">
            <a href="#"><img src="https://www.pngitem.com/pimgs/m/527-5277565_clipart-baby-sitting-black-and-white-stock-free.png" className="poster" /></a>
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              
              <p className="ticket__movie-slogan">
                Garde enfants
              </p>
              
              <Link to='/gardenfant'> <button className="ticket__buy-btn">see more</button></Link>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="poster-container">
            <a href="#"><img src="https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-chongyang-festival-to-help-the-elderly-walk-babysitter-in-blue-uniform-png-image_344688.jpg" className="poster" /></a>
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <h4 className="ticket__movie-title"></h4>
              <p className="ticket__movie-slogan">
                compagnie personne agée
              </p>
              
              <Link to='/compsenior'> <button className="ticket__buy-btn">see more</button></Link>
            </div>
          </div>
        </div>
        
        
      </div>

    )
}

export default ListProp
