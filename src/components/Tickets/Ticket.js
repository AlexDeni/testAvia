import React from "react";
import { CompanyEmblem } from './companyEmblem'

const formatDate = date => {

}

const CountTransfer = transfer => {
    if(transfer.transfer === 0){
        return <span className="transfer" />
    }
    return <p className="transfer">{transfer.transfer} Пересадки</p>
}


const Ticket = ({items}) => {
    return (
        <div>
            {items.map((item)=>{
                return (
                    <div key={item.id} className='ticket layout'>
                        <div className='logoAndPrice layout layoutColumn'>
                            <div className='logoCarrier'>
                                <CompanyEmblem carrier={item.carrier} />
                            </div>
                            <button className="btnBuyTicket">
                                Купить за <br/>
                                {item.price} грн
                            </button>
                        </div>

                        <div className="ticketInfo layout">
                            <div className="infoTime">
                                <p className='mainTime'>{item.departure_time}</p>
                                <p className='cityInfo'>{item.origin}, {item.origin_name}</p>
                                <p className='dateTime'>{item.departure_date}</p>
                            </div>
                            <CountTransfer transfer={item.stops} />
                            <div className="infoTime">
                                <p className='mainTime'>{item.arrival_time}</p>
                                <p className='cityInfo'>{item.destination}, {item.origin_name}</p>
                                <p className='dateTime'>{item.arrival_date}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export { Ticket }