import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const getTime = async () => {
      try {
        const time = new Date().toLocaleTimeString();
        setTime(time);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    getTime();
    const intervalId = setInterval(getTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div className="inline">{time}</div>;
};

export default Time;
