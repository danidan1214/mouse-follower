import './MouseFollower.css'

export function MouseFollower({ position }) {
    return (
        <div
            className='mouse-follower'
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        />
    )
}
