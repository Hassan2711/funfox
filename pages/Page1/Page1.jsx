import React from 'react'
import './Page1.css'
import data from '../../utils/clouds.json'


const Page1 = () => {
  return (
    <section className="p1-wrapper">
        <div className="flexCol paddings p1-container">
            <span className="week1">
            <img src="./week1.png" alt="week1" />
            </span>
            <div className="flex p1-heading">
                <span className='primaryText'>Elements of Story Writing</span>
            </div>
            <span className='secondaryText'>
                Welcome to term 2 of Writers Club. Are you excited for this amazing journey? Over the next week, we will be practicing the different elements of story writing. Our aim is to make stories more interesting and exciting.
            </span>
            <div className="flex green-box">
                <span className="secondaryText">
                There are <b>five</b> elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:
                </span>
            <img className='girl' src="./girl.png" alt="" />
            </div>
            <div className="flex clouds">
            {
                    data.map((cloud, i)=>(
                            <div className="flex p1-clouds"  key={i}>
                                <img src={cloud.image} alt="" />
                                <span className="smallText" dangerouslySetInnerHTML={{ __html: cloud.name.replace(/\n/g, '<br>') }} >
                                </span>
                            </div>
                    ))
                }
            </div>
            <span className="secondaryText">
            You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
            </span>
            <div className="pink-box">
                <div className="flex banner">
                    <span className="secondaryText">
                    For today’s lesson, we will try to understand and practice writing the setting for our stories. <br/>The setting is an important element of every fiction story.
                    </span>
                    
                </div>
            </div>

        </div>
    </section>
  )
}

export default Page1