import React from 'react';
import './button.css';

import { ButtonProps } from 'react-bootstrap/Button';

// export interface ButtonProps {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean;
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//    * How large should the button be?
//    */
//   // size?: 'small' | 'medium' | 'large';
//   // Default to medium.
//   size?: 'sm' | 'lg';
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
// }

/**
 * Primary UI component for user interaction
 */
// export const Button: React.FC<ButtonProps> = ({
//   primary = false,
//   size = 'medium',
//   backgroundColor,
//   label,
//   ...props
// }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={{ backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

export const Button: React.FC<ButtonProps> = (label, {...props}) => {
  return (
    <button
      type="button"
      className={'btn foo'}
      {...props}
    >
      {'Temp Button Label'}
    </button>
  )
}
