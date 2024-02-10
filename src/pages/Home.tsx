//Iionic Components
import {IonContent,IonHeader,IonPage,IonTitle,IonToolbar} from '@ionic/react';
//Ionicons
import { cameraOutline,listOutline } from 'ionicons/icons';
//Compoments
import ButtonBubble from '../components/General/ButtonBubble/ButtonBubble';
import RecentSpots from '../components/Home/RecentSpots';
//Styles
import './Home.css'; 

const Home: React.FC = () => {
  const buttons = [
    { label: 'Add New Spot', icon: cameraOutline, route: '/openCam' },
    { label: 'Open Library', icon: listOutline, route: '/library' },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Spot Memory - Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RecentSpots />
        <ButtonBubble buttons={buttons} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
