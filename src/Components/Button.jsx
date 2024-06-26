import PropTypes from 'prop-types'

const Button = ({ primary, secondary, children, style }) => {
 const primaryClass = primary ? 'primary' : ''
 const secondaryClass = secondary ? 'secondary' : ''
 const styleClass = style ? `${style}` : ''

 return (
  <button className={`btn ${primaryClass} ${secondaryClass} ${styleClass}`}>
   {children}
  </button>
 )
}

Button.propTypes = {
 primary: PropTypes.bool,
 secondary: PropTypes.bool,
 style: PropTypes.object,
 children: PropTypes.string.isRequired,
}

export default Button
