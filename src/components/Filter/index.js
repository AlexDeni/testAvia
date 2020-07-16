import React, { useState, useEffect } from 'react';
import {Checkbox} from './CheckBox'

const filterItem = ['1 Пересадка', '2 Пересадки', '3 Пересадки'];

function Filter ({tickets, filterTickets}){
    const [filters, setFilter] = useState([])
    const [stateTickets, setStateTickets] = useState([])

    useEffect(()=>{
        let filters = [...new Set(['Все', 'Без пересадки', ...filterItem])]
        setFilter(filters.map((item, i) => ({
            value: item, id: i-1, active: true
        })))
        setStateTickets(tickets)
    }, [ filterItem ])

    const handleFilterChange = ({ target: { checked: active, dataset: { value }}}) => {
        let statusCheckBox = filters.map(item => [ item.value, 'Все' ].includes(value) ? { ...item, active } : item);
        let allChoose = statusCheckBox.filter(item => item.value !== 'Все').every(item => item.active);
        statusCheckBox.find(item => item.value === 'Все').active = allChoose;
        setFilter(statusCheckBox);
        let arrChooseId = statusCheckBox.filter(item => item.active).map(item => item.id)
        let filteredTickets = stateTickets.filter(item => arrChooseId.includes(item.stops))
        filterTickets(filteredTickets)
    }

    const chooseOne = value => {
        let chooseTicket = filters.find(item => item.value === value.target.value)
        let abc = filters.map(item => item.active === false)
        console.log('hello', chooseTicket)
        console.log('allChoose', abc)
    }

    return(
        <div className='filter'>
            <p>Количество пересадок</p>
            {filters.map(item => <Checkbox
                key={item.id}
                active={item.active}
                value={item.value}
                onChange={handleFilterChange}
                chooseOne={chooseOne}
            />)}
        </div>
    )
}

export {Filter}
