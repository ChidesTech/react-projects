import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(3);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(1);
    const [timerInterval, setTimerInterval] = useState(null);
    const [timerStarted, setTimerStarted] = useState(false)
    function decreaseSeconds() {
        setSeconds(prevState => {
            if (prevState === 0) {
                decreaseMinutes();
                return 59;
            } else {
                return prevState - 1;
            }
        });
    };

    function decreaseMinutes() {
        setMinutes(prevState => {
            if (prevState === 0) {

                decreaseHours();
                return 59;
            } else {
                return prevState - 1;
            }

        })
    };

    function decreaseHours() {
        setHours(prevState => {
            if (prevState === 0) {
                return;
            } else {
                return prevState - 1;
            }

        })
    }

    function startTimer() {
        setTimerStarted(true);
        setTimerInterval(setInterval(() => {
            decreaseSeconds()
        }, 1
        ));
    }
    function stopTimer() {
        setTimerStarted(false);
        clearInterval(timerInterval);
    }


    return <div>
        <div className="times d-flex justify-content-center">
            <div className="time text-align-center">{timerStarted ? hours : "00"}</div>
            <div className="time text-align-center">:</div>
            <div className="time text-align-center">{timerStarted ? minutes : "00"}</div>
            <div className="time text-align-center">:</div>
            <div className="time text-align-center">{timerStarted ? seconds : "00"}</div>
        </div>
        <div className="text-center">
            <div className="d-flex justify-content-center timer-buttons"> {timerStarted ?
                <button onClick={stopTimer} className="btn-lg btn-warning px-5">PAUSE</button>
                :
                <button onClick={startTimer} className="btn-lg btn-success px-5">START</button>

            }
                <button className="btn-lg btn-danger px-5">RESET</button>

            </div>

        </div>
    </div>

}