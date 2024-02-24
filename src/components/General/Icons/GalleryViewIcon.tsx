interface props {
  selected: boolean;
  className?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
  stateValue?: string;
}

const GalleryViewIcon: React.FC<props> = ({
  selected,
  className,
  setState,
  stateValue,
}) => {
  function handleClick() {
    if (setState && stateValue) {
      setState(stateValue);
    }
  }
  return (
    <div
      className={`icon GalleryViewIcon ${className}`}
      onClick={() => handleClick()}
    >
      <svg viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9 1.125C10.864 1.125 12.375 2.63604 12.375 4.5V9C12.375 10.864 10.864 12.375 9 12.375H4.5C2.63604 12.375 1.125 10.864 1.125 9V4.5C1.125 2.63604 2.63604 1.125 4.5 1.125H9ZM9 3.375C9.62131 3.375 10.125 3.87868 10.125 4.5V9C10.125 9.62131 9.62131 10.125 9 10.125H4.5C3.87868 10.125 3.375 9.62131 3.375 9V4.5C3.375 3.87868 3.87868 3.375 4.5 3.375H9Z'
          fill={selected ? '#ffffff' : '#969696'}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9 14.625C10.864 14.625 12.375 16.136 12.375 18V22.5C12.375 24.364 10.864 25.875 9 25.875H4.5C2.63604 25.875 1.125 24.364 1.125 22.5V18C1.125 16.136 2.63604 14.625 4.5 14.625H9ZM9 16.875C9.62131 16.875 10.125 17.3787 10.125 18V22.5C10.125 23.1213 9.62131 23.625 9 23.625H4.5C3.87868 23.625 3.375 23.1213 3.375 22.5V18C3.375 17.3787 3.87868 16.875 4.5 16.875H9Z'
          fill={selected ? '#ffffff' : '#969696'}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.875 4.5C25.875 2.63604 24.364 1.125 22.5 1.125H18C16.136 1.125 14.625 2.63604 14.625 4.5V9C14.625 10.864 16.136 12.375 18 12.375H22.5C24.364 12.375 25.875 10.864 25.875 9V4.5ZM23.625 4.5C23.625 3.87868 23.1213 3.375 22.5 3.375H18C17.3787 3.375 16.875 3.87868 16.875 4.5V9C16.875 9.62131 17.3787 10.125 18 10.125H22.5C23.1213 10.125 23.625 9.62131 23.625 9V4.5Z'
          fill={selected ? '#ffffff' : '#969696'}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M22.5 14.625C24.364 14.625 25.875 16.136 25.875 18V22.5C25.875 24.364 24.364 25.875 22.5 25.875H18C16.136 25.875 14.625 24.364 14.625 22.5V18C14.625 16.136 16.136 14.625 18 14.625H22.5ZM22.5 16.875C23.1213 16.875 23.625 17.3787 23.625 18V22.5C23.625 23.1213 23.1213 23.625 22.5 23.625H18C17.3787 23.625 16.875 23.1213 16.875 22.5V18C16.875 17.3787 17.3787 16.875 18 16.875H22.5Z'
          fill={selected ? '#ffffff' : '#969696'}
        />
      </svg>
    </div>
  );
};

export default GalleryViewIcon;
