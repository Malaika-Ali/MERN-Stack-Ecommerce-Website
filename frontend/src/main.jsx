import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/MainRoutes.jsx'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux'
import ComponentLoader from './utils/ComponentLoader.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<ComponentLoader/>} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
)
