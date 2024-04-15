import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1 className='appName'>CCN</h1>
        <hr style={{borderColor: 'black'}}/>
      </div>
      <Main />
    </div>
  );
}

export default App;
