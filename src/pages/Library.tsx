import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';

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
          <h1>Hello World</h1>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Library;