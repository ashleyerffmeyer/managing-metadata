import './App.css';
import CreateContact from './components/CreateContact';
import ReadContact from './components/ReadContact';
import UpdateContact from './components/UpdateContact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main-page">
        <h2 className="main-page-title">React Metadata Manager</h2>
        <div>
          <Route exact path='/create' component={CreateContact} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={ReadContact} />
        </div>
        <Route path='/update' component={UpdateContact} />
      </div>
    </Router >
  );
}

export default App;
