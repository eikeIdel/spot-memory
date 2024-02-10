//React
import { Link } from 'react-router-dom';
//IonicComponents
import { IonImg, IonThumbnail } from '@ionic/react';

// Styles
import './RecentSpots.css';

const RecentSpots: React.FC = () => {
  return (
    <div className='RecentSpots'>
      <div className='label'>Recent Spots</div>
      <div className='btn-wrapper flex-between'>
        <Link to='' className='button' aria-label='Recent Spot 1'>
          <IonImg
            className='prev-img'
            src='/src/tempImages/img1.jpg'
            alt='Recent Spot 1'
          />
        </Link>

        <Link to='' className='button' aria-label='Recent Spot 2'>
          <IonImg
            className='prev-img'
            src='/src/tempImages/img2.jpg'
            alt='Recent Spot 2'
          />
        </Link>

        <Link to='' className='button' aria-label='Recent Spot 3'>
          <IonImg
            className='prev-img'
            src='/src/tempImages/img3.jpg'
            alt='Recent Spot 3'
          />
        </Link>
      </div>
    </div>
  );
};

export default RecentSpots;
