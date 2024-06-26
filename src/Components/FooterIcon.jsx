import PropTypes from 'prop-types'

const FooterIcon = ({ src, alt, link }) => {
 const isSocialMedia = src === '/ig.svg' || src === '/fb.svg'

 return (
  <a
   href={link}
   className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent bg-opacity-75 hover:bg-opacity-100"
   target="_blank"
  >
   <img
    src={src}
    alt={alt}
    className={`h-9 w-9 ${isSocialMedia ? 'p-0' : 'p-1'}`}
   />
  </a>
 )
}

FooterIcon.propTypes = {
 src: PropTypes.string.isRequired,
 alt: PropTypes.string.isRequired,
 link: PropTypes.string.isRequired,
}

export default FooterIcon
