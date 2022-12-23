import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import './Translations'
import  {Amplify}  from 'aws-amplify';
import awsmobile from './aws-exports'

Amplify.configure({...awsmobile, ssr: true});



const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationNavigator />
    </PersistGate>
  </Provider>
)

export default App
