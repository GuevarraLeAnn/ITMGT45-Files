import Community from '../../static/navigation/community-icon.png'
import Home from '../../static/navigation/home-icon.png'
import Profile from '../../static/navigation/profile-icon.png'
import Search from '../../static/navigation/search-icon.png'
import Workout from '../../static/navigation/workout-icon.png'
import '../../styles/navigation.css'

const Navigation = () => {
    return (
        <div id='taskbar'>
            <a className='item' href='/'>
                <img src={Home}/>
                <p className='label'>Home</p>
            </a>
            <a className='item' href='/explore'>
                <img src={Search}/>
                <p className='label explore'>Explore</p>
            </a>
            <a className='item' href='/workout'>
                <img src={Workout}/>
                <p className='label'>Workout</p>
            </a>
            <a className='item' href='/community'>
                <img src={Community}/>
                <p className='label community'>Community</p>
            </a>
            <a className='item' href='/profile'>
                <img src={Profile}/>
                <p className='label'>Profile</p>
            </a>
        </div>
    )
}

export default Navigation