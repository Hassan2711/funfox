import React from 'react'
import './AnyGuess.css'

const AnyGuess = ({placeHolder, notLaptop}) => {
  return (
    <section className="guess-wrapper">
        <div className="flexAC guess-container">
            <div className="flexAC guess-left">
                <span className='secondaryText'>Any guesses?</span>
                <input type="text" placeholder={placeHolder} />
            </div>
            <div className={`flexAC guess-right  ${notLaptop ? 'tablet' : ''}`}>
                <span className='secondaryText'>Hint:</span>

                <img className='image' src="./hints.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default AnyGuess