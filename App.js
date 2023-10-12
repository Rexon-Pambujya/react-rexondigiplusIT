import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><div className="App">
      <form>
        <label for="NodeType">NodeType</label>
        <select name="NodeType" id="NodeType">
          <option value="root">Root</option>
          <option value="parent">Parent</option>
          <option value="child">Child</option>
        </select>
        <button type="button" onclick="myFunction()">Try it</button>
        <br></br>

        <br></br>
        <label for="selectnode">Selected Node</label><br></br>
        <input type="text" id="selectnode" name="selectnode"></input><br></br>
        <input type="button" value="Update"></input>
        <input type="button" value=" Delete"></input>

        <br></br>
        <br></br>
        <label for="nodevalue">Node Value</label><br></br>
        <input type="text" id="nodevalue" name="nodevalue"></input><br></br>
        <button type="button" onclick="nodeVale()">Add</button>
      </form>
    </div><script type ="text/javascript">

      function nodeVale(){
       nodeval = 
      }
      </script></>
  );
}

export default App;
