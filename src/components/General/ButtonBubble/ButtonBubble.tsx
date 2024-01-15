import './ButtonBubble.css';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';


interface ButtonBubbleProps {
  buttons: { label: string; icon: string; route: string }[];
}

const ButtonBubble: React.FC<ButtonBubbleProps> = ({ buttons }) => {
  return (
    <div
      className='ButtonBubble'
      style={{ '--column-count': `${buttons.length}` } as React.CSSProperties}
    >
      {buttons.map((button,index) => (
        <div className='label' key={index}>{button.label}</div>
      ))}

      <div className='btn-wrapper'>
        {buttons.map((button,index) => (
          <Link to={button.route} className="button" aria-label={button.label} key={index}>
            <IonIcon class="btn-icon" icon={button.icon} aria-hidden="true" ></IonIcon>
            </Link>
        ))}
      </div>
    </div>
  );
};
export default ButtonBubble;
