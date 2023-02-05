import * as React from "react";
// import { Admin } from "react-admin";
// import { Admin, Resource, ListGuesser } from 'react-admin';
// import { Admin, Resource } from "react-admin";
// import { Admin, Resource, ListGuesser } from "react-admin";
// import { Admin, Resource } from "react-admin";
import { Admin, Resource, EditGuesser } from "react-admin";
import { PostList } from "./posts";
import { UserList } from "./users";
import jsonServerProvider from "ra-data-json-server";
import authProvider from './authProvider';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

// const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={PostList} /> */}
    {/* <Resource name="users" list={UserList} /> */}
    <Resource name="posts" list={PostList} edit={EditGuesser} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
);

export default App;
