import React from 'react';

export const Card = ({ children, className, size, shadowSize, ...props }) => {
  let classArray = [
    `max-w-${size}`,
    'rounded',
    `shadow-${shadowSize}`,
    'p-3',
    className
  ]
  let baseClass = classArray.join(' ');

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  size: "md",
  shadowSize: "md"
}

export default Card;
