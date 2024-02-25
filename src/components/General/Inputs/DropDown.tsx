//React
import React, { useState } from 'react';
//CSS
import './DropDown.css';
//IionIcons
import { IonIcon } from '@ionic/react';
import { chevronDownOutline } from 'ionicons/icons';

interface props {
  options: any[];
  placeholder?: string;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const FilterDropDown: React.FC<props> = ({
  options,
  placeholder='Select an option',
  value,
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`DropDown ${isOpen && 'isOpen'}`} onClick={() => setIsOpen(!isOpen)}>
      <div>
        <span onClick={() => setValue(undefined)}>{value ?? placeholder}</span>
        <IonIcon icon={chevronDownOutline} />
      </div>
      {isOpen && (
        <ul>
          <li key={0}>{placeholder ?? 'Select an option'}</li>
          {options.map((option, index) => (
            <li key={index + 1} value={option} onClick={() => setValue(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropDown;