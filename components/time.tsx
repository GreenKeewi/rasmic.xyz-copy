import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const getTime = async () => {
      const response = await fetch(
        "http://worldtimeapi.org/api/timezone/Canada/Eastern"
      );
      const data = await response.text();
      const datetime = JSON.parse(data).datetime;
      const time = new Date(datetime).toLocaleTimeString();
      setTime(time);
    };

    getTime();
    const intervalId = setInterval(getTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div className="inline">{time}</div>;
};

export default Time;
