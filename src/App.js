import './App.css';


function App() {
  const users = [
    {name: '1', lastName: '11', number: "01"},
    {name: '2', lastName: '22', number: "02"},
    {name: '3', lastName: '33', number: "03"},
    {name: '4', lastName: '44', number: "04"}
  ]
  
  return (
    <>
      {users.map(({ name, lastName, number }) => {
        return (
          <> 
          <h3>{name}</h3>
          <h3>{lastName}</h3>
          <h3>{number}</h3>
          </>
        )
      }) }
    </>
  );
}

export default App;
