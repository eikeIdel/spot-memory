// IonicComponents
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
//Components
import DropDown from '../../General/Inputs/DropDown';
// CSS
import './FilterSettings.css';
import React, { useEffect } from 'react';

interface SelectedFilterOptions {
  artist: string | undefined;
  date: string | undefined;
  location: string | undefined;
}

interface props {
  setFilterIsOpen: (isOpen: boolean) => void;
  filterOptions: {
    artist: string[];
    date: string[];
    location: string[];
  };
  selectedFilterOptions:SelectedFilterOptions,
  setSelectedFilterOptions: React.Dispatch<React.SetStateAction<SelectedFilterOptions>>,
}

const FilterSettings: React.FC<props> = ({
  setFilterIsOpen,
  filterOptions,
  selectedFilterOptions,
  setSelectedFilterOptions
  
}) => {

 
  return (
    <div className='FilterSettings'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Filters</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={() => setFilterIsOpen(false)}>Close</IonButton> 
          </IonButtons>
        </IonToolbar>
        <div className='divider-horizontal'></div>
      </IonHeader>
      <div>
        <h2 className='inputLabel'>Artist | Crew</h2>
        <DropDown
          options={filterOptions.artist}
          placeholder="Don't filter by artist/crew"
          setValue={(value) => setSelectedFilterOptions(prevState => ({ ...prevState, artist: value }))}
          value={selectedFilterOptions.artist}
        />
        <h2 className='inputLabel'>Spot - Date</h2>
        <h2 className='inputLabel'>Spot - Location</h2>
        {/* <DropDown
          options={filterOptions.location}
          placeholder="Don't filter by location"
          setValue={(value) => setSelectedFilterOptions(prevState => ({ ...prevState, location: value }))}
          value={selectedFilterOptions.location}
        /> */}
      </div>
    </div>
  );
};

export default FilterSettings;
