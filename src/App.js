import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='headContent'>
          <h1 className='appName'>CCN</h1>
          <img className='flag' src='https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg' />
        </div>
        <hr style={{borderColor: 'black'}}/>
      </div>
      <Main />
    </div>
  );
}

export default App;
