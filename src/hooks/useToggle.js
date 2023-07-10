import { useState } from "react"

function useToggle(initialState = true) {
  const [visible, setVisible] = useState(initialState);

  function toggle(){
    setVisible(prevVisible => !prevVisible);
  }

  return [visible, setVisible];
}

export default useToggle