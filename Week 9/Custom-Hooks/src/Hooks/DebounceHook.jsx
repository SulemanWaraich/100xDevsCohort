import React, { useEffect, useState } from 'react'

function useDebounce(value, timeout){
  const [debounceValue, setDebounceValue] = useState(''); 

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value)
    }, timeout)

    return () => {
      clearTimeout(id)
    }
  }, [value])

  return debounceValue;
}


function DebounceHook() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <>
    Debounce value is: {debouncedValue}
    <input type="text" onChange={(e) => {setValue(e.target.value)}}/>    
    </>
  )
}

export default DebounceHook