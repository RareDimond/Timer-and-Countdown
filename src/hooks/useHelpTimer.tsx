import { useCallback, useState, useEffect } from "react";

const useHelpTimer = () => {
  const [count, setCount] = useState(0);
  const [stateButton, setStateButton] = useState(0);

  useEffect(() => {
    let newIntervalId: NodeJS.Timeout | null = null;
    if (stateButton === 1) {
      newIntervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 10);
      }, 10);
    }
    return () => {
      if (newIntervalId) {
        clearInterval(newIntervalId);
      }
    };
  }, [stateButton]);

  const resetHandler = useCallback(() => {
    setCount(0);
    setStateButton(0);
  }, []);

  const start = useCallback(() => {
    if (stateButton === 0 || stateButton === 2) {
      setStateButton(1);
    }
  }, [stateButton]);

  const stop = useCallback(() => {
    setStateButton(2);
  }, []);

  const reset = useCallback(() => {
    resetHandler();
  }, [resetHandler]);

  const transform = useCallback(() => {
    const minutes = Math.floor(count / 60000);
    const seconds = Math.floor((count % 60000) / 1000);
    const milliseconds = (count % 1000).toString().padStart(3, "0");

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedMinutes} : ${formattedSeconds} : ${milliseconds}`;
  }, [count]);

  return {
    start,
    stop,
    reset,
    transform,
    stateButton,
  };
};

export default useHelpTimer;

// import { useCallback, useState, useEffect } from "react";
// const useHelpTimer = () => {
//     const [count, setCount] = useState(0);
//     const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//     const [stateButton, setStateButton] = useState(0)
//     useEffect(() => {
//         let newIntervalId: NodeJS.Timeout | null = null;
//         if (stateButton === 1) {
//             newIntervalId = setInterval(() => {
//                 setCount((prevCount) => prevCount + 10);
//             }, 10);
//         }
//         setIntervalId(newIntervalId);
//         return () => {
//             if (newIntervalId) {
//                 clearInterval(newIntervalId);
//             }
//         };
//     }, [stateButton]);
//     const start = useCallback(() => {
//         if (stateButton === 0 || stateButton === 2) {
//             setStateButton(1);
//         }

//     }, [stateButton])
//     const stop = useCallback(() => {
//         if (intervalId) {
//             clearInterval(intervalId);
//             setIntervalId(null);
//             if (stateButton === 1) {
//                 setStateButton(2)
//             }
//         }
//     }, [intervalId, stateButton])
//     const reset = useCallback(() => {
//         if (intervalId) {
//             clearInterval(intervalId);
//             setIntervalId(null);
//         }
//         setCount(0)
//         setStateButton(0)
//     }, [intervalId])
//     const transform = useCallback(() => {
//         const minutes = Math.floor(count / 60000);
//         const seconds = Math.floor((count % 60000) / 1000);
//         const milliseconds = (count % 1000).toString().padStart(3, "0");

//         const formattedMinutes = minutes.toString().padStart(2, "0");
//         const formattedSeconds = seconds.toString().padStart(2, "0");

//         return `${formattedMinutes} : ${formattedSeconds} : ${milliseconds}`;
//     }, [count])
//     return {
//         start, stop, reset, transform, stateButton
//     }
// }
// export default useHelpTimer;