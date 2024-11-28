
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import Userauth from './components/contextapi/Userauth.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//    <Userauth>
//    <App />
//    </Userauth>
//   </BrowserRouter>,
// )
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Userauth from './components/contextapi/Userauth.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Userauth>
      <App />
    </Userauth>
  </BrowserRouter>
);
