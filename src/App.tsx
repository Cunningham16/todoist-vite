import TaskList from './components/TaskList'
import { store } from './store'
import './styles/App.scss'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <TaskList />
      </div>
    </Provider>
  )
}

export default App
