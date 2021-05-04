import React from 'react'
import {categories} from '../../helpers/data'
import './Card.css'

const Card = () => {
    return (
        <div className='big-container'>
            <p className='title'>Languages</p>
            
            <div className='card-container'>
                        
            {categories.map((card)=> {
                return(
                    <div className='cards'>
                        <div className="imges">
                            <img src={card.img} alt={card.name}/>
                        </div>

                        <div onClick={(setIsV)} className="languageName">
                            <h4>{card.name}</h4>
                        </div>

                        <div className="card-options">   
                            <ul>                   
                                <li>{card.options[0]}</li>
                                <li>{card.options[1]}</li>
                                <li>{card.options[2]}</li>
                            </ul>
                        </div>
                    </div>   
                )
            })}

            </div>
            
        </div>
    )
}

export default Card

