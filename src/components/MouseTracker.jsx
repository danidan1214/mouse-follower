import { useEffect, useState } from 'react'
import { MouseFollower } from './MouseFollower'
import { ToggleButton } from './ToggleButton'

export function MouseTracker() {
    const [enable, setEnable] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMove = (event) => setPosition({ x: event.clientX, y: event.clientY })
        if (enable) window.addEventListener('pointermove', handleMove)
        return () => window.removeEventListener('pointermove', handleMove)
    }, [enable])

    return (
        <main>
            {enable && <MouseFollower position={position} />}
            <ToggleButton enable={enable} setEnable={setEnable} />
        </main>
    )
}
