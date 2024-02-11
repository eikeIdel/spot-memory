//React
import { useEffect } from 'react';
//IonicComponents
import { IonImg, IonThumbnail } from '@ionic/react';
interface props {
  sortBy: {
    type: 'date' | 'artist' | 'location';
    order: 'asc' | 'desc';
  };
  spotData: {
    artist: string;
    spotDateTimeStamp: string;
    location: string;
    image: string;
  }[];
}

const ContentList: React.FC<props> = ({ sortBy, spotData }) => {
  useEffect(() => {
    console.log('ContentList useEffect');
  }, [sortBy]);
  return (
    <div className='ContentList'>
      <IonThumbnail>
        <IonImg src={spotData[0].image} />
      </IonThumbnail>
    </div>
  );
};

export default ContentList;
