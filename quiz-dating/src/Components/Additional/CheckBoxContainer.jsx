import React, { useState } from 'react';
import s from '../../Style/CheckboxComponent.module.scss';

const CheckboxComponent = ({checkboxes}) => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        const newSelectedCheckboxes = selectedCheckboxes.includes(value)
            ? selectedCheckboxes.filter((item) => item !== value)
            : [...selectedCheckboxes, value];

        if (newSelectedCheckboxes.length <= 3) {
            setSelectedCheckboxes(newSelectedCheckboxes);
        }
    };



    return (
        <div className={s.checkboxContainer}>
            {checkboxes.map((checkbox) => (
                <label key={checkbox.id} className={s.checkboxLabel}>
                    <input
                        type="checkbox"
                        id={checkbox.id}
                        value={checkbox.label}
                        checked={selectedCheckboxes.includes(checkbox.label)}
                        onChange={handleCheckboxChange}
                    />
                    {checkbox.label}
                </label>
            ))}
        </div>
    );
};

export default CheckboxComponent;
