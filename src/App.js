import Popup from "./components/Popup";
import { useState, useEffect } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [triggerPopup, setTriggerPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTriggerPopup(true);
    }, 5000);
  }, []);
  return (
    <div className="App">
      <main>
        <h1>React Popups!!</h1>
        <br />
        <button onClick={() => setButtonPopup(true)}>Show Popup</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3> Popup </h3>
          <p>Popup from click button</p>
        </Popup>

        <Popup trigger={triggerPopup} setTrigger={setTriggerPopup}>
          <h3> Popup tiggered </h3>
          <p>Popup from trigger</p>
        </Popup>
      </main>
    </div>
  );
}

export default App;
