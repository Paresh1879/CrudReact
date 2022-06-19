import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Products from "./components/Products";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import { UserProvider } from "./components/UserContext";
import { ProductProvider } from "./components/ProductContext";

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Switch>
                <UserProvider>
                  <Route path="/" component={Dashboard} exact="true" />
                  <Route path="/users" component={Users} exact="true" />
                  <Route
                    path="/create-user"
                    component={CreateUser}
                    exact="true"
                  />
                  <Route
                    path="/edit-user/:id"
                    component={EditUser}
                    exact="true"
                  />
                  <ProductProvider>
                    <Route path="/products" component={Products} exact="true" />
                    <Route
                      path="/create-product"
                      component={CreateProduct}
                      exact="true"
                    />
                    <Route
                      path="/edit-product/:id"
                      component={EditProduct}
                      exact="true"
                    />
                  </ProductProvider>
                </UserProvider>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
