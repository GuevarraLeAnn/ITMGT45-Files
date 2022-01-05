import notifimg from '../../static/notifications_none.png'
import MountainClimbers from '../../static/mountain-climbers.png'
import Squats from '../../static/squats.png'
import '../../styles/home.css'

const Home = () => {
    return (
        <div id='home'>
            <div className='reminders'>
                <h3 className='greeting'>Welcome Joben,</h3>
                <img className='notif' src={notifimg} />
            </div>
            <p className='message'>Do something today that your future self will thank you for. - Unknown</p>
            <div className='sched'>
                <div className='top'>
                    <h3 className='title'>Today's Schedule</h3>
                    <div className='start'><a href='/'>START</a></div>
                </div>
                <div className='workouts'>
                    <div className='item'>
                        <img src={MountainClimbers} />
                        <div>
                            <h3 className='workout-name'>Mountain Climbers</h3>
                            <p className='description'>15 minutes - Easy</p>
                            <p className='tags'>Legs - Cardio - Beginner Friendly Uptempo</p>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className='item'>
                    <img src={Squats} />
                        <div>
                            <h3 className='workout-name'>Squats</h3>
                            <p className='description'>15 minutes - Easy</p>
                            <p className='tags'>Legs - Cardio - Beginner Friendly Uptempo</p>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Home