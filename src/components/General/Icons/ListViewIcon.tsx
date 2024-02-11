interface props {
  selected: boolean;
  className?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
  stateValue?: string;
}

const ListViewIcon: React.FC<props> = ({
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
    <div className={`icon ListViewIcon ${className}`} onClick={() => handleClick()}>
      <svg viewBox='0 0 34 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M16 10C16 9.44772 16.6342 9 17.4167 9H31.5833C32.3658 9 33 9.44772 33 10C33 10.5523 32.3658 11 31.5833 11H17.4167C16.6342 11 16 10.5523 16 10Z'
          fill={selected ? '#ffffff' : '#969696'}
        />
        <path
          d='M16 23C16 22.4477 16.6342 22 17.4167 22H31.5833C32.3658 22 33 22.4477 33 23C33 23.5523 32.3658 24 31.5833 24H17.4167C16.6342 24 16 23.5523 16 23Z'
          fill={selected ? '#ffffff' : '#969696'}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M8.875 17C10.739 17 12.25 18.511 12.25 20.375V24.875C12.25 26.739 10.739 28.25 8.875 28.25H4.375C2.51099 28.25 1 26.739 1 24.875V20.375C1 18.511 2.51099 17 4.375 17H8.875ZM8.875 19.25C9.49634 19.25 10 19.7537 10 20.375V24.875C10 25.4963 9.49634 26 8.875 26H4.375C3.75366 26 3.25 25.4963 3.25 24.875V20.375C3.25 19.7537 3.75366 19.25 4.375 19.25H8.875Z'
          fill={selected ? '#ffffff' : '#969696'}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M8.875 4C10.739 4 12.25 5.51099 12.25 7.375V11.875C12.25 13.739 10.739 15.25 8.875 15.25H4.375C2.51099 15.25 1 13.739 1 11.875V7.375C1 5.51099 2.51099 4 4.375 4H8.875ZM8.875 6.25C9.49634 6.25 10 6.75366 10 7.375V11.875C10 12.4963 9.49634 13 8.875 13H4.375C3.75366 13 3.25 12.4963 3.25 11.875V7.375C3.25 6.75366 3.75366 6.25 4.375 6.25H8.875Z'
          fill={selected ? '#ffffff' : '#969696'}
        />
      </svg>
    </div>
  );
};
export default ListViewIcon;
