import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import BestSellers from "./components/pages/BestSellers/BestSellers";

function App() {
  return (
    <Provider store={store}>
      <div></div>
      <Router>
        <Switch>
          <Route path="/" exact component={BestSellers} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
