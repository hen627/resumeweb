import React from 'react';
import PropTypes from 'prop-types';

export default function Navigators(props) {
  const { children, variant = '', ...rest } = props
  return (
    <h3 className={`btn ${variant}`} {...rest}>
      {children}
    </h3>
  )
}

// Define prop types for the button component.
Navigators.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is provided and is a valid React node
    variant: PropTypes.string, // Variant is optional and should be a string
  };