//React
import { useEffect } from 'react';
//IonicComponents
import { IonImg, IonThumbnail } from '@ionic/react';
//hooks
import useDateConverter from '../../../hooks/useDateConverter';

interface props {
  spotData: {
    artist: string;
    spotDateTimeStamp: number;
    location: string;
    image: string;
  }[];
}

const ContentList: React.FC<props> = ({ spotData }) => {
  function formatDate(timestamp: number) {
    const date = useDateConverter(timestamp, 'dd.mm.yyyy',true);
    return date; 
  }

  return (
    <div className='ContentList'>
      {spotData?.map((spot, index) => (
        <div className='content-item' key={index}>
          <IonImg src={spot.image} />

          <div className='divider-vertical'></div>
          <ul className='spot-details'>
            <li className='artist-name'>{spot.artist}</li>
            <li className='date'>{formatDate(spot.spotDateTimeStamp)}</li>
            <li className='location'>{spot.location}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ContentList;
