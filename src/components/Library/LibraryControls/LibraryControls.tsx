//React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//IonicComponents
import { IonIcon, IonModal, IonItemDivider } from '@ionic/react';
//Ionicons
import {
  cameraOutline,
  listOutline,
  gridOutline,
  filterOutline,
} from 'ionicons/icons';
//Components
import FilterSettings from '../FilterSettings/FilterSettings';
import SortOrderArrows from '../../General/Icons/SortOrderArrows';
import ListViewIcon from '../../General/Icons/ListViewIcon';
import GalleryViewIcon from '../../General/Icons/GalleryViewIcon';
//Styles
import './LibraryControls.css';

interface props {
  listStyle: string;
  setListStyle: React.Dispatch<React.SetStateAction<string>>;
  sortBy: {
    type: 'date' | 'artist' | 'location';
    order: 'asc' | 'desc';
  };
  setSortBy: React.Dispatch<
    React.SetStateAction<{
      type: 'date' | 'artist' | 'location';
      order: 'asc' | 'desc';
    }>
  >;
}

const LibraryControls: React.FC<props> = ({
  listStyle,
  setListStyle,
  sortBy,
  setSortBy,
}) => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  function handleSortClick(type: 'date' | 'artist' | 'location') {
    console.log(sortBy.type === type, type, sortBy.type, sortBy.order);
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
          <ListViewIcon
            selected={listStyle == 'list' ? true : false}
            setState={setListStyle}
            stateValue='list'
          />
          <GalleryViewIcon
            selected={listStyle == 'gallery' ? true : false}
            setState={setListStyle}
            stateValue='gallery'
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

        <div
          className={`sort-group date ${sortBy.type == 'date' && 'selected'}`}
          onClick={() => {
            handleSortClick('date');
          }}
        >
          <span className='label'>Spot-Date</span>
          <SortOrderArrows
            sortOrder={sortBy.order}
            selected={sortBy.type == 'date' ? true : false}
          />
        </div>

        <div
          className={`sort-group artist ${
            sortBy.type == 'artist' && 'selected'
          }`}
          onClick={() => {
            handleSortClick('artist');
          }}
        >
          <span className='label'>Artist/Crew</span>
          <SortOrderArrows
            sortOrder={sortBy.order}
            selected={sortBy.type == 'artist' ? true : false}
          />
        </div>

        <div
          className={`sort-group location ${
            sortBy.type == 'location' && 'selected'
          }`}
          onClick={() => {
            handleSortClick('location');
          }}
        >
          <span className='label'>Location</span>
          <SortOrderArrows
            sortOrder={sortBy.order}
            selected={sortBy.type == 'location' ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default LibraryControls;
