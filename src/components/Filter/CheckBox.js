import React from 'react'

const Checkbox = ({ value, onChange, chooseOne, active }) => (
    <div className='blockCheckbox'>
        <label>
            <input
                type="checkbox"
                data-value={value}
                checked={active}
                onChange={onChange}
                className='filterCheckbox'
            />
            <span className="psevdoCheckbox">{value}</span>
        </label>
        <button value={value} onClick={chooseOne}>только</button>
    </div>
)

export { Checkbox }