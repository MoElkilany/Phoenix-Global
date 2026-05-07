const ShapeButton = ({ 
  children, 
  onClick, 
  className = '', 
  style = {}, 
  variant = 'primary',
  href,
  ...props 
}) => {
  const variantColors = {
    primary: '#d34327',
    secondary: '#ffffff',
    gradient: '#d44000',
    card: 'rgba(255, 255, 255, 0.1)',
  };

  const textColors = {
    primary: '#FFFFFF',
    secondary: '#000000',
    gradient: '#FFFFFF',
    card: '#F0F4FA',
  };

  const color = variantColors[variant] || variantColors.primary;
  const textColor = textColors[variant] || textColors.primary;

  const buttonStyles = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    margin: '0',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ...style,
  };

  const svgStyle = {
    width: 'auto',
    height: 'auto',
    minWidth: '200px',
    minHeight: '52px',
    transition: 'all 0.3s ease',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
    fontWeight: '700',
    fontFamily: 'Cairo, sans-serif',
    color: textColor,
    whiteSpace: 'nowrap',
    padding: '0 1.5rem',
  };

  const svgContent = (
    <svg
      viewBox="0 0 462.55 156.72"
      style={svgStyle}
      className="hover:scale-105"
    >
      <defs>
        <style>{`.btn-shape { fill: ${color}; }`}</style>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <polygon class="btn-shape" points="0 0 0 89.99 21.25 74.57 21.28 74.57 134.47 156.72 462.55 156.72 462.55 0 0 0"/>
          <polygon class="btn-shape" points="0 93.47 0 132.85 19.59 118.64 21.25 117.44 22.9 118.64 71.98 154.25 126.27 154.25 21.26 78.04 0 93.47"/>
          <polygon class="btn-shape" points="21.25 120.92 0 136.33 0 156.72 70.59 156.72 21.25 120.92"/>
        </g>
      </g>
    </svg>
  );

  const buttonProps = {
    onClick,
    className: `cursor-pointer ${className}`,
    style: buttonStyles,
    ...props,
  };

  if (href) {
    return (
      <a href={href} {...buttonProps}>
        {svgContent}
        <span style={textStyle}>{children}</span>
      </a>
    );
  }

  return (
    <button {...buttonProps}>
      {svgContent}
      <span style={textStyle}>{children}</span>
    </button>
  );
};

export default ShapeButton;