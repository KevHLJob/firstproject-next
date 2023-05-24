import React from "react";
import Users from "../components/Users";

async function fecthUsers() {
  const rest = await fetch("https://reqres.in/api/users"); //api de usuarios
  const data = await rest.json(); //datos de la api
  return data.data; // devuelve datos de los datos
}

async function IndexPage() {
  const users = await fecthUsers();
  console.log(users);
  return <Users users={users} />;
}

export default IndexPage;
