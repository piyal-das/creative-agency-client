import React, { createContext, useState } from 'react';
import Home from './Conponents/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Conponents/Login/Login';
import Order from './Conponents/Customar/Order/Order';
import ServiceList from './Conponents/Customar/ServiceList/ServiceList';
import Review from './Conponents/Customar/Review/Review';
import User from './Conponents/Admin/User/User';
import AddService from './Conponents/Admin/AddService/AddService';
import MAkeAdmin from './Conponents/Admin/MakeAdmin/MAkeAdmin';
import ServiceCard from './Conponents/Customar/ServiceCard/ServiceCard';
import PrivateRoute from './Conponents/Login/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
              <Route exact path='/'>
                  <Home />
              </Route>
              <Route path='/home'>
                  <Home />
              </Route>

              <Route path='/login'>
                  <Login />
              </Route>

              <Route path='/order'>
                  <Order />
              </Route>

              {/* <Route path='/serviceOrder/:title'>
                  <Order />
              </Route> */}
              <PrivateRoute path='/serviceOrder/:title'>
                  <Order />
              </PrivateRoute>

              <Route path='/serviceList'>
                  <ServiceList />
              </Route>
              <Route path='/review'>
                  <Review />
              </Route>
              <Route path='/admin'>
                  <User />
              </Route>
              <Route path='/adminService'>
                  <User />
              </Route>
              <Route path='/addService'>
                  <AddService />
              </Route>
              <Route path='/makeAdmin'>
                  <MAkeAdmin />
              </Route>
          </Switch>
          
      </Router>
        
    </UserContext.Provider>
  );
}

export default App;
