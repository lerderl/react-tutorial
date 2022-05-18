import './App.css';

const App = () => {
  const name = 'Ozioma';

  return (
    <div className="App">
      <h1>Hello</h1>
      {name ? (
        <>
          <h1>{name}!</h1>
        </>
      ) : (
        <>
          <h2>test</h2>
          <h3>There is no name</h3>
        </>
      )}
    </div>
  );
}

export default App;
