import React, { useState } from 'react';
import s from '../../Style/CheckboxComponent.module.scss';

const CheckboxComponent = () => {
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

    const checkboxes = [
        { id: 'checkbox1', label: 'Mager' },
        { id: 'checkbox2', label: 'Store pupper er et must' },
        { id: 'checkbox3', label: 'Regelmessig' },
        { id: 'checkbox4', label: 'Sexy rumpa er et must' },
        { id: 'checkbox5', label: 'BBW' },
    ];

    return (
        <div className={s.checkboxContainer6}>
            {checkboxes.map((checkbox) => (
                <label key={checkbox.id} className={s.checkboxLabel6}>
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
