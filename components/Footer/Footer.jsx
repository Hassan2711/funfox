import React from 'react'
import './Footer.css'

const Footer = ({hints, page, nextPage, prevPage}) => {

    const getMenuStyles = (hints) => {
        return {opacity: hints && "0.1"}
      }

  return (
    <section className="f-wrapper" style={getMenuStyles(hints)}>
        <div className="flex paddings f-container">
            <div className="f-left">
                <img src="./audio.png" alt="audio" />
            </div>
            <div className="f-middle">
                <img src="./arrow-left.png" alt="next" onClick={prevPage} />
                
                <span>
                <span>{page}</span>
                <img src="./page.png" alt="page" />
                </span>

                <img src="./arrow-right.png" alt="prev" onClick={nextPage} />
            </div>
            <div className="f-right">
                <img src="./info.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Footer