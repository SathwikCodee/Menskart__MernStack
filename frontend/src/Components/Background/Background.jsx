import './Background.css'




const Background = ({video}) => {
    
    return (
        <video className='intro-background fade-in' autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
        )
}

export default Background
