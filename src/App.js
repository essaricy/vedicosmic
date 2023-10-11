import logo from './logo.svg';
import './App.css';

import SearchAppBar from "./components/SearchAppBar";
import VedicTimeline from './components/VedicTimeline';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <VedicTimeline />
    </div>
  );
}

export default App;
