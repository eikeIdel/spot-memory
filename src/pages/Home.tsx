import {IonContent,IonHeader,IonPage,IonTitle,IonToolbar} from '@ionic/react';
import { cameraOutline } from 'ionicons/icons';
import ButtonBubble from '../components/General/ButtonBubble/ButtonBubble';
import './Home.css';

const Home: React.FC = () => {
  const buttons = [
    { label: 'Add New Spot', icon: cameraOutline, route: '/openCam' },
    { label: 'Open Library', icon: 'Camera', route: '/library' },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Spot Memory - Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ButtonBubble buttons={buttons} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
