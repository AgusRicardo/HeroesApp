import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'
import { getHeroById } from '../../selectors/getHeroById'


export const HeroScreen = () => {
// El params se utiliza para leer argumentos por la URL
  const {heroeId} = useParams()
  const navigate = useNavigate();

  // Con el memo, memorizamos el valor del hero para no tener que hacer muchas peticiones innecesarias
  // Se le pone como dependencia [heroId] porque indica que si heroeId cambió, debe volver a memorizar el valor de hero
  // *{Caso real de uso}*
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]) 
  
  
  
  // Validamos que el url al escribir otra cosa no devuelva undefined y te devuelva al home
  if (!hero) return <Navigate to='/' />
  
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

  } = hero;
  
  // Una forma mas sencilla de hacer esto es mandarle al navigate(-1) y vuelve a la pestaña anterior
  const handleReturn = (publisher) => {
    console.log(publisher);
    if (publisher === 'DC Comics') {
      console.log('Vuelve a dc');
      navigate('/dc')
    }else {
      console.log('Vuelve a marvel');
      navigate('/marvel')
    }
  
  


  }

  // const imgPath = `/assets/${id}.jpg`;
  const imgPath = heroImages(`./${id}.jpg`);
  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={imgPath} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {publisher}</li>
          <li className='list-group-item'><b>First Appearance:</b> {first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button className='btn btn-outline-info' onClick={() => handleReturn (publisher)}>Regresar</button>
      </div>
      
    </div>
  )
}
