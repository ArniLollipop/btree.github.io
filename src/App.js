import React, { useEffect, useState } from "react";

function App(props) {
  const [minusNumbers, setMinusNumbers] = useState([]);
  const [plusNumbers, setPlusNumbers] = useState([]);
  const [numbersFull, setNumbersFull] = useState(false);
  const max = 100;
  const min = -100;

  const handleKey = (e) => {
    const randomNumber = Math.floor(Math.random(-100, 100) * (max - min) + min);

    if (minusNumbers.length + plusNumbers.length >= 200) {
      setNumbersFull(true);
    }

    if (
      e.keyCode === 32 &&
      !minusNumbers.includes(randomNumber) &&
      !plusNumbers.includes(randomNumber)
    ) {
      if (randomNumber < 0) {
        setMinusNumbers((prev) => [...prev, randomNumber]);
      } else {
        setPlusNumbers((prev) => [...prev, randomNumber]);
      }
    } else {
      handleKey();
    }
  };

  useEffect(() => {
    if (!numbersFull) {
      document.addEventListener("keydown", handleKey, true);
    }
  }, []);

  return (
    <div className="h-full w-full">
      <p className="font-medium text-center text-xl my-5">Нажмите на пробел</p>
      <div className="flex w-full h-full gap-y-5 items-start">
        <div className="w-1/2 flex items-center justify-center flex-col gap-y-5">
          <p className="text-lg font-medium">Minus numbers</p>
          {minusNumbers.map((number) => {
            return (
              <p className="w-10 h-10 flex items-center justify-center rounded-full border border-red-400">
                {number}
              </p>
            );
          })}
        </div>
        <div className="w-1/2 flex items-center justify-center flex-col gap-y-5">
          <p className="text-lg font-medium">Plus numbers</p>
          {plusNumbers.map((number) => {
            return (
              <p className="w-10 h-10 flex items-center justify-center rounded-full border border-red-400">
                {number}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
