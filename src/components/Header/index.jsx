import React, { useEffect, useState } from "react"
import Clock from "react-clock"
import 'react-clock/dist/Clock.css';
import "./header.css"

function Header({params}) {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => {
        clearInterval(interval)
        }

    }, [])

    return (
        <header className="header">
             <Clock value={time} />
             <h1>PopAndRepop</h1>
             <div className="stats-wrapper">
                <p>{`${params.numOfFollowers} personnes suivent déjà la chaine`}</p>
                <p>{`${params.lastFollower} nous a rejoint dernièrement`}</p>
             </div>
        </header>
    )
}

export default Header