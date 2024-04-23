import { RouterProvider } from 'react-router-dom';
import '../lib/styles/main.scss';
import { router } from './routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
