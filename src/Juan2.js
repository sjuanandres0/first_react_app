import {useState} from 'react'

const Juan2 = () => {
  const [showMsg, setShowMsg] = useState(false)
  const youHaveClickedMe = () => {
    console.log("HELLO...");
    setShowMsg(true)
    // showMsg = true
  };
  return (
    <div>
      {showMsg && <p>YOU HAVE CLICKED ME</p>}
      <button onClick={youHaveClickedMe}>CLICK ME</button>
    </div>
  );
};

export default Juan2;
