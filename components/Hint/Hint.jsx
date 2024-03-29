import React from 'react'
import './Hint.css'
import AnyGuess from '../AnyGuess/AnyGuess'

const Hint = ({onClose}) => {
  return (
    <section className="hint-wrapper" >
        <div className="flexCol hint-container">
         <div className='close-btn' onClick={onClose}>
            <img src="./close.png" alt="" />
          </div>

            <span className='primaryText'>Guide Sheet</span>
            <div>
            <span className='secondaryText'>So, what do you think the definition of setting is? Any guesses?</span>
            <AnyGuess placeHolder={"> Setting is the time and place of a story."}/>
            </div>
        </div>
    </section>
  )
}

export default Hint