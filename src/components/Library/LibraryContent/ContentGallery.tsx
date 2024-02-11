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

const ContentGallery: React.FC<props> = ({ sortBy, spotData }) => {
  useEffect(() => {
    console.log('ContentGallery useEffect');
  }, [sortBy]);
  return (
    <div className='ContentGallery'>
      {spotData.map((spot, index) => 
            <IonImg src={spot.image} key={index}/>
      )}
    </div>
  );
};

export default ContentGallery;
