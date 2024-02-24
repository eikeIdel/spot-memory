//React
import { useEffect } from 'react';
//IonicComponents
import { IonImg, IonThumbnail } from '@ionic/react';
interface props {
  spotData: {
    artist: string;
    spotDateTimeStamp: number;
    location: string;
    image: string;
  }[];
}

const ContentGallery: React.FC<props> = ({ spotData }) => {

  return (
    <div className='ContentGallery'>
      {spotData.map((spot, index) => (
        <IonImg src={spot.image} key={index} />
      ))}
    </div>
  );
};

export default ContentGallery;
