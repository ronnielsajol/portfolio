import PropTypes from 'prop-types'

const Icons = ({ src }) => {
 return (
  <img
   src={src}
   alt="icon"
   className="h-24 w-24 grayscale transition-all duration-300 hover:grayscale-0"
  />
 )
}

Icons.propTypes = {
 src: PropTypes.string.isRequired,
}

export default Icons
