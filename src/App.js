
import './App.css';
import Tabs from "./components/Tabs/Tabs"
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far)
function App() {
  return (
    <div className="App">
    <Tabs />
    </div>
  );
}

export default App;
