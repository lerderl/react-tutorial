import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.firstName}</h1>
      <h2>Last Name: {props.lastname}</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person firstName='Goodnews' lastname='Samuel' age={9} />
      <Person firstName='Egho' lastname='Ozioma' age={22} />
    </div>
  );
}

export default App;
