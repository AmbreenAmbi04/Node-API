import TaskList from './components/TaskList';
import { BrowserRoute, Routes, Route } from 'react-router-dom';

const App = () => {
<>
  <BrowserRoute>
    <Routes>
      <Route path='/' element={<TaskList />} />
    </Routes>
  </BrowserRoute>
</>
}

export default App;