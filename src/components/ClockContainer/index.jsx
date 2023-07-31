import React, { useEffect, useState} from "react"
import Clock from "react-clock/dist/umd/Clock" 

function ClockContainer() {

    const [time, setTime] = useState(new Date())


    useEffect(() => {

        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => {
            clearInterval(interval)
        }

    }, [])


    return(
      <React.Fragment>
         <Clock value={time} />
      </React.Fragment>  
    )

}

export default ClockContainer