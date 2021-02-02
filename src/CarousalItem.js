import React from 'react'
import './CarousalItem.css'

function CarousalItem(props) {
    return (
        <div className="carousal__item animate-right">   
            <img src={props.imgUrl} alt="" className="carousal__image"/>
            <div className="temp">
                <div className="carousal__content">
                    <span>{props.content}</span>
                </div>
                    <div>
                        <button className="carousal__button">See More</button>
                    </div>
            </div>
        </div>


    )
}

export default CarousalItem
