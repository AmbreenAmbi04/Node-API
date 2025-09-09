import TaskList from './components/TaskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<TaskList />} />
    </Routes>
  </BrowserRouter>
</>
}

export default App;