import PropTypes from 'prop-types'

const Icons = ({ src }) => {
 return (
  <img
   src={src}
   alt="icon"
   className="h-[20vw] w-[20vw] grayscale transition-all duration-300 hover:grayscale-0 md:h-24 md:w-24"
  />
 )
}

Icons.propTypes = {
 src: PropTypes.string.isRequired,
}

export default Icons
