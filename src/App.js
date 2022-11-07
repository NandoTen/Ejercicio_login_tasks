import logo from './logo.svg';
import './App.css';
import ComponentA from './components/container/componentA';
import Ejemplo1 from './components/hooks/Ejemplo1';
import Test from './components/hooks/test'
import Ejemplo2 from './components/hooks/Ejemplo2';
import ComponentContext from './components/hooks/Ejemplo3';
import Ejemplo4 from './components/hooks/Ejemplo4';
import Allcycles from './components/hooks/allcycles';
import TaskComponent from './components/pure/task';
import TaskListComponent from './components/container/task_list';
import GreetingStyle from './components/pure/forms/greetingStyle';
import Clock from './components/container/clock';

function App() {
  return (
    <div className="App">
        {/*<ComponentA contact={['Miguel','García','migueñ@npm.com',false]}></ComponentA>*/}
        
        {/*<Ejemplo4 nombre ='Martin'>
          <h3>Contenido de props.children</h3>
        </Ejemplo4>*/}

        {/*<Allcycles></Allcycles>*/}
        {/*<Clock></Clock>*/}
        {/*<GreetingStyle nombre='Robot'></GreetingStyle>*/}
        
        <TaskListComponent></TaskListComponent>

    </div>
  );
}

export default App;
