import './App.css';

const App = () => {
  const name = 'Goodnews';
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : 'stranger'}!</h1>
    </div>
  );
}

export default App;
