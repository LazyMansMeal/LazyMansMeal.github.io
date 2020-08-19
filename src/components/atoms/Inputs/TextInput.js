import React from 'react';

export const TextInput = ({ className, ...props }) => {
  let classArray = [
    "flex-shrink",
    "flex-grow",
    "flex-auto",
    "leading-normal",
    "w-px",
    "flex-1",
    "border",
    "h-10",
    "border-grey-light",
    "rounded",
    "rounded-l-none",
    "px-3",
    "relative",
    "focus:border-blue",
    "focus:shadow",
    "mt-1",
    "mb-2",
    className
  ]
  let baseClass = classArray.join(' ');

  return (
		<input
      type="text"
      className={baseClass}
      {...props}
    />
  );
}

export default TextInput;
