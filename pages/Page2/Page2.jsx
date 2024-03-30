import React, {useState} from 'react'
import './Page2.css'
import Hint from '../../components/Hint/Hint'
import AnyGuess from '../../components/AnyGuess/AnyGuess'

const Page2 = ({hints, toggleHints}) => {
    // const [hints, setHints] =useState(false)

    // const handleCloseHint = () => {
    //     setHints((prev)=>!prev);
    //   };

      const getMenuStyles = (hints) => {
        // return {opacity: hints && "0.1"}
        return { filter: hints ? "blur(5px)" : "none", opacity: hints ? "0.5" : "1" };

      }

      const notLaptop = window.matchMedia('(max-width: 1100px)').matches;



    return (
    <section className="p2-wrapper">
        <div className=" p2-container">
           {hints && <Hint onClose={toggleHints}/>}

            <div className="flexCol paddings p2-top">

               <span className='primaryText'>Can you figure out the definition of setting from the following examples?</span>
               <span className='secondaryText'>(take a minute to think about this)</span>
            </div>

            <div className="flexCol paddings image-container">
              <div className="flex images">
                <div className="flex left-image">
                  <img src="./p2p1.png" alt="" />
                </div>
                <div className="flex right-image"><img src="./p2p2.png" alt="" /></div>
              </div>
              <div className="flex image-text">
                <div>
                <span className='smallText'>Sunny day at a beach</span>
                </div>
                <div>
                <span className='smallText'>A cold rainy night in a haunted house in October</span>
                </div>
              </div>
            </div>

            <div className='flexCol paddings p2-bottom'>
              <span className='secondaryText'>So, what do you think the definition of setting is? Any guesses?</span>
              <AnyGuess notLaptop={notLaptop} placeHolder={"_______________________________________________________________________________________________________"}/>
              <div className="flex green-box">
                <span className="secondaryText">
                  Setting is the time 
                  <span className="secondaryText"> <img className='p2img' src="./clock.png" alt="" /> </span> 
                  and place
                  <span className="secondaryText"> <img className='p2img' src="./house.png" alt="" /> </span> 
                  of a story. It often answers the questions: when? and where?
                </span>
              </div>
              <span className='smallText'>
              The time of the story could be in the past, future, day, night, summer or winter. A story may take place in a school, a mall, a desert, an airplane or in a variety of other places.
              </span>
            </div>

            <div className="hint-btn" style={getMenuStyles(hints)} >
              <img src='./book.png' onClick={toggleHints}/>
            </div>
        </div>
    </section> 
  )
}

export default Page2