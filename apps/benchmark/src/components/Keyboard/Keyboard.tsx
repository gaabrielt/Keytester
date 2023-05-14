import { mount } from 'keyboard/Keyboard'

import React, { useRef, useEffect } from 'react'

const Keyboard = () => {
  const keyboardRef = useRef(null);

  const mountKeyboardApp = () => mount(keyboardRef.current)

  useEffect(mountKeyboardApp, [])

  return <div id="keyboard" ref={keyboardRef} />
}

export default Keyboard