import React from 'react'
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
  const imgPath = heroImages(`./${id}.jpg`);
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className='card'>
        <div className='row no-gutters'>
          <div className="col-xl-4 col-md-12">
            <img src={imgPath} alt={superhero} className="card-img" />
          </div>
          <div className="col-xl-4 col-md-12">
            <div className="card-body">
              <h5 className='card-title'>{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {
                (alter_ego !== characters) &&
                <p className='text-muted'>{characters}</p>
              }
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
