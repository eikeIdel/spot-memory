//React
import { useEffect } from 'react';
//Styles
import './LibraryContent.css';
//Components
import ContentList from './ContentList';
import ContentGallery from './ContentGallery';

interface props {
  listStyle: string;
  spotData: {
    artist: string;
    spotDateTimeStamp: number;
    location: string;
    image: string;
  }[];
}

const LibraryContent: React.FC<props> = ({ listStyle, spotData }) => {
  return (
    <div className='LibraryContent'>
      {listStyle === 'list' ? (
        <ContentList spotData={spotData} />
      ) : (
        <ContentGallery spotData={spotData} />
      )}
    </div>
  );
};
export default LibraryContent;