import { MouseEventHandler } from 'react';
import { cn } from '../lib/utils';

interface IconButtonProps {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
  className?: string;
}
const IconButton: React.FC<IconButtonProps> = ({
  handleClick,
  className,
  icon,
}) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={cn(
          'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition ',
          className
        )}
      >
        {icon}
      </button>
    </div>
  );
};

export default IconButton;
