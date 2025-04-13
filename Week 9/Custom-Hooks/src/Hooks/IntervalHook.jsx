import React, { useCallback, useEffect, useState } from 'react'

function useInterval(fn, timeout){
  
  useEffect(() => {
    const value = setInterval(() => {
      fn();
    }, timeout)

    return () => {
      console.log('interval cleared');
      clearInterval(value);
    }
  }, [fn, timeout]);
}

function IntervalHook() {
  const [count,setCount] = useState(0);

  const callback = useCallback(() => {
    setCount(c => c + 1)
  }, [])

  useInterval(callback, 1000)

  return (
    <>
    <div>Timer is at {count}</div>
    </>
  )
}

export default IntervalHook