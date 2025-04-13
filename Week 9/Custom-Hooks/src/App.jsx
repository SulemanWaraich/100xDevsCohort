import './App.css'
import OnlineHook from './Hooks/onlineHook'
import DataFetchingHook from './Hooks/DataFetchingHook'
import MousePointerHook from './Hooks/MousePointerHook'
import IntervalHook from './Hooks/IntervalHook'
import DebounceHook from './Hooks/DebounceHook'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {/* <DataFetchingHook /> */}
      {/* <OnlineHook /> */}
      {/* <MousePointerHook /> */}
      {/* <IntervalHook /> */}
      {/* <div>
      <button onClick={() => setShow(prev => !prev)}>Toggle Timer</button>
      {show && <IntervalHook />}
    </div> */}
    <DebounceHook />
    </>
  )
}


export default App
