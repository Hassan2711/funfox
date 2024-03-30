import React from 'react'
import './Footer.css'

const Footer = ({hints, page, nextPage, prevPage, handlePageChange}) => {

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
                <select value={page} onChange={handlePageChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </select>
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