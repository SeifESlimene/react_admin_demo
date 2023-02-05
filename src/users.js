import * as React from "react";
// import { List, Datagrid, TextField, EmailField } from "react-admin";
// import { List, Datagrid, TextField, EmailField, UrlField } from "react-admin";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
      {/* <TextField source="username" /> */}
      {/* <TextField source="address.street" /> */}
      {/* <TextField source="website" /> */}
      {/* <UrlField source="website" /> */}
    </Datagrid>
  </List>
);
