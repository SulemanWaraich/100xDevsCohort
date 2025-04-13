import React, { useEffect, useState } from 'react'

function useMousePointer(){
  const [position, setPosition] = useState({x:0 , y:0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({x: e.clientX, y: e.clientY})
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [])

  return position;
}

function MousePointerHook() {
  const value = useMousePointer();
  return (
    <div style={{fontWeight: 700}}>"Horizontal": {value.x} "Vertical": {value.y}</div>
  )
}

export default MousePointerHook