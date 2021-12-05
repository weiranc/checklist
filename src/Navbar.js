import Logo from './images/IconBlackTrimmed.png'

export default function Navbar() {
  return (
    <nav>
        <img src={Logo} alt="MM Logo" className='navImg'/>
        <div className="divider"></div>
        <h1 className='navText'>checklist.</h1>
        <h3 className='navSubText'>developed from scratch in React</h3>
    </nav>
  );
}