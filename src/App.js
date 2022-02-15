import Controls from "./components/Controls";
import MusicChannels from "./components/MusicChannels";

function App() {
  return (
    <div className="App">
      <h1 className="pageTitle">Loop Machine</h1>
      <MusicChannels />
      <Controls />
    </div>
  );
}

export default App;
