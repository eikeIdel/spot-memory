import { useEffect, useRef } from 'react';
import ArrowsNonSelected from '../../../assets/icons/arrow_non_selected.svg';
import ArrowsAsc from '../../../assets/icons/arrow_asc.svg';
import ArrowsDesc from '../../../assets/icons/arrow_desc.svg';

interface props {
  sortOrder: 'asc' | 'desc';
  selected: boolean;
}

const SortOrderArrows: React.FC<props> = ({ sortOrder, selected }) => {
  type arrowsColor = { asc: string; desc: string };
  const arrowsColor = useRef<arrowsColor>({ asc: '#969696', desc: '#969696' });

  useEffect(() => {
    if (selected && sortOrder === 'asc') {
      arrowsColor.current = { asc: '#ffffff', desc: '#969696' };
    } else if (selected && sortOrder === 'desc') {
      arrowsColor.current = { asc: '#969696', desc: '#ffffff' };
    } else {
      arrowsColor.current = { asc: '#969696', desc: '#969696' };
    }
  }, [selected,sortOrder]);

  return (
    <span className='SortOrderArrows'>
      <svg
        viewBox='0 0 14 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3.5 12C3.5 12.2761 3.72386 12.5 4 12.5C4.27614 12.5 4.5 12.2761 4.5 12L3.5 12ZM4.35355 0.646447C4.15829 0.451184 3.84171 0.451184 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.97631 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM4.5 12L4.5 1L3.5 1L3.5 12L4.5 12Z'
          fill={arrowsColor.current.asc}
        />
        <path
          d='M10.5 1C10.5 0.723858 10.2761 0.5 10 0.5C9.72386 0.5 9.5 0.723858 9.5 1L10.5 1ZM9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536L13.5355 9.17157C13.7308 8.97631 13.7308 8.65973 13.5355 8.46447C13.3403 8.2692 13.0237 8.2692 12.8284 8.46447L10 11.2929L7.17157 8.46447C6.97631 8.2692 6.65973 8.2692 6.46447 8.46447C6.2692 8.65973 6.2692 8.97631 6.46447 9.17157L9.64645 12.3536ZM9.5 1L9.5 12L10.5 12L10.5 1L9.5 1Z'
          fill={arrowsColor.current.desc}
        />
      </svg>
    </span>
  );
};

export default SortOrderArrows;
