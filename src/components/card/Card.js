import React from 'react'
import {categories} from '../../helpers/Data'
import './Card.css'

const Card = () => {
    return (
        <div className='big-container'>
            <div className='card-container'>
            {data.map((card)=> {
                return(
                    <div className='cards'>
                    <div className="languageName">
                        <h4>{card.name}</h4>
                    </div>

                    </div>
                )
            })}

            </div>
            
        </div>
    )
}

export default Card
