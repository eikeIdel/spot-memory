
// IonicComponents
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
// CSS
import './FilterSettings.css';

interface props {
  setFilterIsOpen: (isOpen: boolean) => void;
}

const FilterSettings: React.FC<props> = ({setFilterIsOpen}) => {
  return (
    <div className='FilterSettings'>
  
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setFilterIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p>
          </IonContent>
    
    </div>
  );
};

export default FilterSettings;