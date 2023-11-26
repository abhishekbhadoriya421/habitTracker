import { Link ,Outlet } from 'react-router-dom'
import style from './style.module.css'

// Navbar Component
export default function NavbarComponent(){
    return(<>
       <nav className={style.navContainer}>
            <div className={style.navbar}>
                <p className={style.Name}>Habit Tracker App</p>
                <div className={style.Links}>
                    <p>
                        <Link to={'/'}>Habits</Link>
                    </p>
                    <p>
                        <Link to={'/weekview'}>WeekView</Link>
                    </p>
                    <p>
                        <Link to={'/about'}>About</Link>
                    </p>
                </div>
            </div>
        </nav> 
      
        <Outlet/>
    </>)
}