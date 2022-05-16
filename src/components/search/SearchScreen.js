import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  // Con el navigate vamos a tomar el valor del input search y se lo vamos asignar a la ruta (*1)
  const navigate = useNavigate()
  // Con el location vamos a decirle a react que lea nuestra nueva ruta y como ya tiene el valor del input, nos puede mostrar lo que queremos   const location = useLocation()
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search);

    
    const [formValues, handleInputChange] = useForm({
      searchText: q
    })
    // Con use memo, guardamos el valor de la función y le decimos a react que solamente lo ejecute cuando q cambie
    const heroesFileted = useMemo( () => getHeroByName(q), [q]); 
    
    const { searchText } = formValues;
    
    
  const handleSearch = (e) => {
    e.preventDefault()
    //  (*1)
    navigate(`?q=${searchText}`)
  }
  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input type="text" placeholder='Buscar un heroe' className='form-controle' name='searchText' autoComplete='off' value={searchText} onChange={handleInputChange}/>
            <button type='submit' className='btn btn-outline-primary mt-1'>Buscar...</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            (q === '') 
              ? <div className='alert alert-info'>Buscar un héroe</div>
              : (heroesFileted.length === 0)
                && <div className='alert alert-danger'>No hay resultados: {q}</div>
          }
          {
            heroesFileted.map(heroe => (
              <HeroCard key={heroe.id} {...heroe}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
