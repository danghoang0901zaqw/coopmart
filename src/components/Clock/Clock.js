import { useEffect, useState } from "react";
import "./Clock.scss";

const Clock = () => {
  const [times, setTimes] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  });
  useEffect(()=>{
    const destination = new Date("Jul 22, 2023").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (60 * 60 * 24 * 1000));
      const hours = Math.floor(
        (different % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((different % (60 * 1000)) / 1000);

      if (destination <= 0) {
        clearInterval(timer);
      } else {
        setTimes({
          ...times,
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return ()=>clearInterval(timer)
  },[times])
  return (
    <div className="clock__wrapper d-flex align-items-center gap-3 mb-5">
      <div className="clock__data d-flex align-items-center gap-3 ">
        <div className="">
          <h1 className="text-white fs-3 mb-2">{`${times.days}`< 10 ? `0${times.days}`:`${times.days}` }</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3 mb-2">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3 ">
        <div className="">
          <h1 className="text-white fs-3 mb-2">{`${times.hours}`< 10 ? `0${times.hours}`:`${times.hours}`}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3 mb-2">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3 ">
        <div className="">
          <h1 className="text-white fs-3 mb-2">{`${times.minutes}`< 10 ? `0${times.minutes}`:`${times.minutes}`}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3 mb-2">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3 ">
        <div className="">
          <h1 className="text-white fs-3 mb-2">{`${times.seconds}`< 10 ? `0${times.seconds}`:`${times.seconds}`}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
