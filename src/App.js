
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Dashboard } from './examples/routings/example_1';
import { Modal, ComponentPortalExample } from './examples/portals/example_1';
import { Theme } from './examples/persist/Theme';


function App() {
  return (
    <>
      <ToastContainer/>
     <ComponentPortalExample />
    </>
  );
}

export default App;
