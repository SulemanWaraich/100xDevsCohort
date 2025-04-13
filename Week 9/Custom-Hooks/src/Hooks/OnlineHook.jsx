import React, { useEffect, useState } from 'react'

function useOnline(){
  const [online, setOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    })
    
    window.addEventListener("offline", () => {
      setOnline(false);
    })
  }, [])

  return online;
}

function OnlineHook() {
  const online = useOnline();

  if(online){
    return <div>You are online</div>
  }

  return (
    <div>You are offline please connect ot the internet</div>
  )
}

export default OnlineHook