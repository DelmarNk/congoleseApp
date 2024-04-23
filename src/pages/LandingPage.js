import './landingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='landingPage'>
        <div className='empty'></div>
        <div className='landingContent'>
            <p className='tagline'>Want to be updated about all the congolese activities in Nanjing?</p>
            <Link className='login' to={'/events'}>Login</Link>
            <Link className='createAccount'>create an account</Link>
        </div>
    </div>
  )
}

export default LandingPage