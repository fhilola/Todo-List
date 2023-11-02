import './Nav.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav__wrapper'>
        <ul>
            <li>
                <Link to='todocontainer'>Tasks</Link>
            </li>
            <li>
                <Link to='active'>Active</Link>
            </li>
            <li>
                <Link to='archive'>Archive</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav