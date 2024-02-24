//React
import React, { useEffect, useState } from 'react';
//IonicComponents
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
} from '@ionic/react';
//Components
import LibraryControls from '../components/Library/LibraryControls/LibraryControls';
import LibraryContent from '../components/Library/LibraryContent/LibraryContent';

const Library: React.FC = () => {
  type SortBy = {
    type: 'date' | 'artist' | 'location'; // replace 'otherType1', 'otherType2' with your actual types
    order: 'asc' | 'desc';
  };

  const spotDataP = [
    {
      artist: 'John',
      spotDateTimeStamp: 1609459200000,
      location: 'New York',
      image: '/src/placeholder/img1.jpg',
    },
    {
      artist: 'Paul',
      spotDateTimeStamp: 1609545600000,
      location: 'Los Angeles',
      image: '/src/placeholder/img2.jpg',
    },
    {
      artist: 'George',
      spotDateTimeStamp: 1609632000000,
      location: 'Chicago',
      image: '/src/placeholder/img3.jpg',
    },
    {
      artist: 'Ringo',
      spotDateTimeStamp: 1609718400000,
      location: 'Miami',
      image: '/src/placeholder/img4.jpg',
    },
    {
      artist: 'Paul',
      spotDateTimeStamp: 1609891200000,
      location: 'Los Angeles',
      image: '/src/placeholder/img5.jpg',
    },
    {
      artist: 'John',
      spotDateTimeStamp: 1609804800000,
      location: 'New York',
      image: '/src/placeholder/img6.jpg',
    },
    {
      artist: 'Paul',
      spotDateTimeStamp: 1609891200000,
      location: 'Los Angeles',
      image: '/src/placeholder/img7.jpg',
    },
    {
      artist: 'George',
      spotDateTimeStamp: 1609977600000,
      location: 'Chicago',
      image: '/src/placeholder/img8.jpg',
    },
    {
      artist: 'Ringo',
      spotDateTimeStamp: 1610064000000,
      location: 'Miami',
      image: '/src/placeholder/img9.jpg',
    },
  ];

  const [listStyle, setListStyle] = useState<string>('list');
  const [sortBy, setSortBy] = useState<SortBy>({ type: 'date', order: 'desc' });
  const [spotData, setSpotData] = useState([
    ...spotDataP,
    ...spotDataP,
    ...spotDataP,
    ...spotDataP,
    ...spotDataP,
    ...spotDataP,
  ]);

  useEffect(() => {
    const sortKey: 'spotDateTimeStamp' | 'artist' | 'location' =
      sortBy.type == 'date' ? 'spotDateTimeStamp' : sortBy.type;

    const sortedSpotData = [...spotData].sort((a: any, b: any) => {
      const aValue = String(a[sortKey]);
      const bValue = String(b[sortKey]);
    
      if (sortBy.order === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
    setSpotData(sortedSpotData);
    console.log(sortedSpotData);
  }, [sortBy]);

  return (
    <>
      <IonPage>
        <IonHeader>
          <LibraryControls
            listStyle={listStyle}
            setListStyle={setListStyle}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </IonHeader>
        <IonContent fullscreen>
          <LibraryContent listStyle={listStyle} spotData={spotData} />
        </IonContent>
        <IonFooter>
          <div className='divider-horizontal'></div>
        </IonFooter>
      </IonPage>
    </>
  );
};

export default Library;
