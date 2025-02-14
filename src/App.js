import logo from './logo.svg';
import './App.css';
import TextProvider from './provider/prov';
import Add from './input';
import List from './list';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
return(
<div className="App">
  <TextProvider>
    <Add/>
    <List/>
  </TextProvider>
</div>
);
  
}

export default App;
