import * as React from "react";

import { NavLink, Route, RouteComponentProps } from "react-router-dom";

const AdminPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1>Admin Page</h1>
            <ul className="admin-sections">
                <li key="users">
                    <NavLink to={`/admin/users`} activeClassName="admin-link-active">
                        Users
                    </NavLink>
                </li>
                <li key="products">
                    <NavLink to={`/admin/products`} activeClassName="admin-link-active">
                        Products
                    </NavLink>
                </li>
            </ul>

            <Route path="/admin/users" component={AdminUsers}/>
            <Route path="/admin/products" component={AdminProducts}/>
        </div>
    );
};

const AdminProducts: React.FC = () => {
    return <div>Some options to administer products</div>;
};

interface IUser {
    id: number;
    name: string;
    isAdmin: boolean;
}

const adminUserData: IUser[] = [
    {id: 1, name: "User1", isAdmin: true} ,
    {id: 10, name: "ElNardo", isAdmin: false},
    {id: 101, name: "Patern", isAdmin: true}
];

const AdminUsers: React.FC = () => {
  return (
      <div>
          <ul className="admin-sections">
              { adminUserData.map( user => (
                  <li>
                      <NavLink to={`/admin/users/${user.id}`} activeClassName="admin-link-active">
                          {user.name}
                      </NavLink>

                  </li>
                  )
              )}
          </ul>
          <Route path="/admin/users/:id" component={AdminUser}/>
      </div>
  );
};

const AdminUser: React.FC<RouteComponentProps<{id: string}>> = props => {
  let user: IUser;
  if(props.match.params.id){
      const id: number = parseInt(props.match.params.id, 10);
      user = adminUserData.filter(u => u.id === id)[0];
  } else {
      return null;
  }

  return (
      <div>
          <div>
              <b>
                  Id:
              </b>
              <span>
                  {user.id.toString()}
              </span>
          </div>
          <div>
              <b>
                  Is Admin:
              </b>
              <span>
                  {user.isAdmin.toString()}
              </span>
          </div>
      </div>
  );

};

export default AdminPage;