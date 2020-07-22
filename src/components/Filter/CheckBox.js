import React from 'react'

const Checkbox = ({ value, onChange, chooseOne, active }) => (
    <div className='blockCheckbox layout'>
        <label>
            <input
                type="checkbox"
                data-value={value}
                checked={active}
                onChange={onChange}
            />
            <span className="psevdoCheckbox">{value}</span>
        </label>
        {value !== 'Все' ?
            <button
                value={value}
                onClick={chooseOne}>
                только
            </button> : ''}
    </div>
)

export { Checkbox }