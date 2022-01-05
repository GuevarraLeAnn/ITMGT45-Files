import DisplayPic from '../../static/community/display-pic.png'
import ProgressBar from '../../static/community/progress-bar.png'
import Challenges from '../../static/community/challenges.png'
import Post1 from '../../static/community/post1.png'
import Post2 from '../../static/community/post2.png'
import '../../styles/community.css'

const Community = () => {
    return (
        <div id='community'>
            <div className="group-profile">
                <img src={DisplayPic} className='group-dp'/>
                <div className='group-details'>
                    <h4>Let's Get Moving</h4>
                    <p>Members: 20</p>
                    <a>View Details</a>
                    <p className='num1'>1</p>
                    <p className='num2'>2</p>
                    <p className='num3'>3</p>
                </div>
            </div>
            <img src={ProgressBar} className='progress-bar' />
            <img src={Challenges} className='monthly-challenges' />
            <div className='feed'>
                <img src={Post1} />
                <img src={Post2} />
            </div>
        </div>
    )
}

export default Community