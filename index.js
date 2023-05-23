import { registerRootComponent } from 'expo'

import App from './App'
import BookList from './src/page/BookList'
import HomeScreen from './src/page/HomeScreen'
import Login from './src/page/Login'
import Register from './src/page/Register'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
