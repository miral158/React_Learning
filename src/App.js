import './App.css';
import Firstcomponent from './components/Firstcomponent';

function App() {
  let person = [
    {
      id: 1,
      name: 'Miral',
      email: 'miral@gmail.com'
    },
    {
      id: 2,
      name: 'Ankit',
      email: 'ankit@gmail.com'
    },
    {
      id: 3,
      name: 'Ankit',
      email: 'ankit@gmail.com'
    }
  ]
  return (
    <div>
       <Firstcomponent title = "FirstApp" display = {true} person = {person}/>
    </div>   
  );
}

export default App;
