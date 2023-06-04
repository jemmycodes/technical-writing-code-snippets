import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  console.log("counter");
  return (
    <>
      <p>You clicked this button {counter} times!</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Count
      </button>
    </>
  );
}
export default App;
