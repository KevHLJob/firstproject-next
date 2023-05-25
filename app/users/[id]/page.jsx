// function asincrona para obtener un id y retornar los datos de ese ID
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json();
  return data.data
}

async function UsersPage({ params }) {
  const user = await getUser(params.id) // en la constante guardamos el ID que obtuvimos de la function



  return (
    // style de Bootstrap, a la etiqueta img le pasamos el avatar donde viene la url de imagen
    // y pasamos los demas parametros ID, Firstname, Lastname y Email
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt={user.email} className="rounded-circle" />

          </div>
          <div className="card-body text-center">

            <div>
              <h3>{user.id} {user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersPage