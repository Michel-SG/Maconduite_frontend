import logo from './logo.svg';
import './App.css';

function App() {

  const apifetch = async()=>{
    const details = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        {email: "jacksonmiller@gmail.com",
         password: "millerjack", 
         first_name:"jackson",
         last_name : "miller"}),
    };
    const route = "http://10.0.0.10:8080/auth/register"
    const response = await fetch(route, details);
    if (!response.ok){
      return response;
    }
    const {access_token} = await response.json();

    console.log(access_token);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Bonjour et bienvenue pour un test avec michel</h2>
        <button className="square" onClick={apifetch}>
          button
        </button>
      </header>
    </div>
  );
}

export default App;
