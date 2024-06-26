import Button from '../Components/Button'
import logo from '/ron.dev.png'

function Navbar() {
 return (
  <nav className="sticky top-0 z-50 bg-background py-1">
   <div className="flex h-16 items-center justify-between py-8 pl-40 pr-20">
    <div>
     <a href="/">
      <img src={logo} alt="ron.dev" />
     </a>
    </div>
    <div>
     <ul className="flex items-center space-x-6">
      <li>
       <Button style={'hover:text-accent transition-all duration-300'}>
        <a href="#About">About</a>
       </Button>
      </li>
      <li>
       <Button style={'hover:text-accent transition-all duration-300'}>
        <a href="#Experience">Experience</a>
       </Button>
      </li>
      <li>
       <Button
        primary={true}
        style={'hover:text-accent transition-all duration-300'}
       >
        <a href="#Resume">Résumé</a>
       </Button>
      </li>
     </ul>
    </div>
   </div>
  </nav>
 )
}

export default Navbar
