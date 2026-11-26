
import About from "./components/About";

function App() {
  return (
    <div className="grid grid-cols-3">

      <About name="Gokul" age="20" gender="Male" />

      <About name="Deepika" age="21" gender="Female" />

      <About name="Arun" age="22" gender="Male" />

      <About name="Priya" age="19" gender="Female" />

      <About name="Kumar" age="23" gender="Male" />

      <About name="Divya" age="20" gender="Female" />

    </div>
  );
}

export default App;
