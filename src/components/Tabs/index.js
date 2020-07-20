import React, { useState } from 'react'
import classNames from 'classnames';

const Tabs = ({tickets, setTickets}) => {
    const [ratingUp, setRatingUp] = useState(false)
    const [ratingDown, setRatingDown] = useState(false)

    const numberTransfersDown = () => {
        let resultDown = tickets.sort((prev, next) =>  prev.stops - next.stops);
        setTickets(resultDown)
        setRatingDown(!ratingDown)
        setRatingUp(false)
    }

    const ratingPriceDown = () => {
        let resultUp = tickets.sort((prev, next) => prev.price - next.price);
        setTickets(resultUp)
        setRatingUp(!ratingUp)
        setRatingDown(false)
    }

    return(
        <div className='layout tabFilter'>
            <button className={classNames('tabBtn tabBtnDown', { 'tabRatingActive': ratingDown })}
                    onClick={numberTransfersDown}>
                    Самый быстрый
            </button>
            <button className={classNames('tabBtn tabBtnUp', { 'tabRatingActive': ratingUp })}
                    onClick={ratingPriceDown}>
                    Самый дешевый
            </button>
        </div>
    )
}

export { Tabs }