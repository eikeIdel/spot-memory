//React
import {useEffect} from 'react';
//Styles
import './LibraryContent.css';
//Components
import ContentList from './ContentList';
import ContentGallery from './ContentGallery';

interface props {
    listStyle: string;
    sortBy: {
      type: 'date' | 'artist' | 'location';
      order: 'asc' | 'desc';
    };
    spotData:{
        artist: string;
        spotDateTimeStamp: string;
        location: string;
        image: string;
      }[];
}

const LibraryContent: React.FC<props> = ({listStyle,sortBy,spotData}) => {

return (
<div className="LibraryContent">
    <div className="divider"></div>
      {listStyle === 'list' ? <ContentList sortBy={sortBy} spotData={spotData}/> : <ContentGallery sortBy={sortBy} spotData={spotData}/>}
    <div className="divider"></div>
    </div>
)
}
export default LibraryContent;