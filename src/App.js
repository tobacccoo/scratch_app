import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

const App = ()=> {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export const appRoute = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  errorElement: <Error/>,
},
{
  path: '/about',
  element: <About/>,
  errorElement: <Error/>,
},
{
  path: '/contact',
  element: <Contact/>,
  errorElement: <Error/>,
}
]);


