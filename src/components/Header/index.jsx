import React, { useEffect, useState } from "react"
import Clock from "react-clock"
import InfoFrame from "../InfoFrame";
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
             <div className="stats-wrapper">
                <InfoFrame key="info-1" text={{var:params.numOfFollowers, const: "personnes suivent déjà la chaine" }} />
                <InfoFrame  key="info-2" text={{var: params.lastFollower, const: "nous a rejoint dernièrement"}} />
             </div>
        </header>
    )
}

export default Header