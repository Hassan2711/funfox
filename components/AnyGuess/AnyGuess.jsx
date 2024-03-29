import React from 'react'
import './AnyGuess.css'

const AnyGuess = ({placeHolder}) => {
  return (
    <section className="guess-wrapper">
        <div className="flexAC guess-container">
            <div className="flexAC guess-left">
                <span className='secondaryText'>Any guesses?</span>
                <input className='secondaryText' type="text" placeholder={placeHolder} />
            </div>
            <div className="flexAC guess-right">
                <span className='secondaryText'>Hint:</span>

                <img src="./hints.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default AnyGuess