import React, { useRef, useState } from "react";

function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Você Perdeu</p>}
      <p className="challenge-time">
        {targetTime} segundo{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Parar" : "Começar"} desafio
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Cronômetro está correndo..." : "Cronômetro inativo"}
      </p>
    </section>
  );
}

export default TimerChallenge;
