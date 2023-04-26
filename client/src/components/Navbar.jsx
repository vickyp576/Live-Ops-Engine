import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div className='nav-wrapper red'>
            <Link to="/signin" className='brand-logo left'>Live Engine</Link>
            <ul id="nav-mobile" className='right'>
                <li keys="signin"><Link to="signin">SignIn</Link></li>
                <li keys="signup"><Link to="signup">SignUp</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar