import {IonContent,IonHeader,IonPage,IonTitle,IonToolbar} from '@ionic/react';
//Components
import LibraryControls from '../components/Library/LibraryControls/LibraryControls';

interface LibraryProps {}

const Library: React.FC<LibraryProps> = () => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Spot Memory - Library</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <LibraryControls/>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Library;