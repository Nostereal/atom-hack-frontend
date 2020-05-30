import React from 'react';
import './App.scss';
import { fetchSWPerson } from '../../api/routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import ContentPage from "../ContentPage/ContentPage";

const App: React.FC = () => {
  React.useEffect(() => {
    fetchSWPerson(1)
  }, [])

  return (
      <div className='App'>
          <Router>
              <Header />
              <Switch>
                  <Route exact path='/' component={ContentPage}/>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
