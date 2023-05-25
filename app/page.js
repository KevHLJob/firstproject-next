import React from "react";
import Users from "../components/Users";

//function asincrona para obtener usuarios
async function fecthUsers() {
  const rest = await fetch("https://reqres.in/api/users"); //api de usuarios
  const data = await rest.json(); //datos de la api
  return data.data; // devuelve datos de los datos
}

async function IndexPage() {

  const users = await fecthUsers();
  return <Users users={users} />; // se obtiene la data.data de las funcion fetchUsers y
  //y se llama en el componente Users
}

export default IndexPage;
