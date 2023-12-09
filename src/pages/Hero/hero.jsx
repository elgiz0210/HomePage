import React, { useEffect, useState } from 'react'
import './hero.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addHeroes } from '../../featurse/hero/heroesSlice';

const Hero = () => {
    const [DataHero, setDataHero] = useState([])
    const [DataHero2, setDataHero2] = useState([])
    const navigate = useNavigate() 
    const dispatch = useDispatch()
    async function getHero() {
        const response = await axios.get(`https://thronesapi.com/api/v2/Characters`)
        
        setDataHero(response.data)
        dispatch(addHeroes(response.data))
    }
    useEffect(() => {
      getHero()
    }, [])

    const hero = (id) => {
        navigate(`/hero/${id}`)
    }

    const getDataHero2 = async (id) =>{
        const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`)
        setDataHero2(response.data)
    }

  return (
    <div className='character-wrap'>

        <div className='character-loist'>
           {DataHero.map((item,idx) => {
            return (
                <div
                key={idx} 
                className='item-list' 
                onClick={() => getDataHero2(item.id)}
                >
                    {item.fullName}
                </div>
            )
           })}
           </div> 

          <div className='detailed-info'>
              <div>
                <h1>{DataHero2.title}</h1>
                <h2>{DataHero2.fullName}</h2>
                <h3>{DataHero2.family}</h3>
                  <div>
                    <img src={DataHero2.imageUrl} alt={DataHero2.name} />
                  </div>
              </div> 
          </div>
    </div>
  )
}

export default Hero