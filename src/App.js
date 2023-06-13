import logo from './logo.svg';
import './App.css';

function App(props) {
  //const subject = 'React'; //variable 
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p>{props.greeting} {props.subject}!</p>
      </header>
    </div>
  );
}

export default App;
