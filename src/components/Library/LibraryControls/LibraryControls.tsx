//React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//IonicComponents
import { IonIcon, IonModal } from '@ionic/react';
//Ionicons
import {
  cameraOutline,
  listOutline,
  gridOutline,
  filterOutline,
} from 'ionicons/icons';
//Components
import FilterSettings from '../FilterSettings/FilterSettings';
import SortOrderArrows from '../../General/SortOrderArrows/SortOrderArrows';
//Styles
import './LibraryControls.css';

const LibraryControls: React.FC = () => {
  type SortBy = {
    type: 'date' | 'artist' | 'location'; // replace 'otherType1', 'otherType2' with your actual types
    order: 'asc' | 'desc';
  };
  type ListStyle = 'list' | 'gallery';

  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const [listStyle, setListStyle] = useState<ListStyle>('list');
  const [sortBy, setSortBy] = useState<SortBy>({ type: 'date', order: 'desc' });

function handleSortClick(type: 'date' | 'artist' | 'location') {
  console.log('triggered')
    if (sortBy.type === type) {
      if (sortBy.order === 'asc') {
        setSortBy({ type: type, order: 'desc' });
      } else {
        setSortBy({ type: type, order: 'asc' });
      }
    } else {
      setSortBy({ type: type, order: 'desc' });
    }
}

  return (
    <div className='LibrayControls'>
      <div className='top-controls'>
        <div className='add-new-spot'>
          <Link to='/openCam'>
            <IonIcon icon={cameraOutline} />
          </Link>
        </div>
        <div className='list-style'>
          <IonIcon
            icon={listOutline}
            className={`${listStyle == 'list' && 'selected'}`}
            onClick={() => {
              setListStyle('list');
            }}
          />
          <IonIcon
            icon={gridOutline}
            className={`${listStyle == 'gallery' && 'selected'}`}
            onClick={() => {
              setListStyle('gallery');
            }}
          />
        </div>
        <div className='filter-btn'>
          <IonIcon icon={filterOutline} onClick={() => setFilterIsOpen(true)} />
        </div>
        <IonModal isOpen={filterIsOpen}>
          <FilterSettings setFilterIsOpen={setFilterIsOpen} />
        </IonModal>
      </div>
      <div className='sort-controls'>
        <div>Sort by:</div>
        <div className={`date ${sortBy.type == 'date' && 'selected'}`} onClick={() => { handleSortClick('date') }}>
          <span className='label'>Spot-Date</span>
          <SortOrderArrows
            sortOrder={sortBy.order}
            selected={sortBy.type == 'date' ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default LibraryControls;
