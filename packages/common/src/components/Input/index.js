import React from 'react';

const Input = ({ className, type, icon, iconPosition, ...props }) => {
  const addAllClasses = ['input_element'];
  const inputType = type ? type : 'text';

  if (className) {
    addAllClasses.push(className);
  }
  if (icon && iconPosition) {
    addAllClasses.push(`icon-${iconPosition}`);
  }

  return (
    <div className={addAllClasses.join(' ')}>
      <input type={inputType} {...props} />
      {icon && <span className="input-icon">{icon}</span>}
    </div>
  );
};

export default Input;
