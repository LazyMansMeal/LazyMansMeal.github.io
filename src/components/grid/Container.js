import React from 'react';

export const Container = ({ className, children, ...props }) => {
  let classArray = [
      "px-16",
      "py-8",
      className
  ]

  let baseClass = classArray.join(' ');

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: ""
}

export default Container;
