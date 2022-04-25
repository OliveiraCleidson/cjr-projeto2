import { Container, TableButton, TableContainer, TableHeader, TableRow } from "./styles";
import { useEffect, useState } from "react";
import { User, useUserService } from "../../contexts/user.context";

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>([]);
  const { get } = useUserService();

  useEffect(() => {
    get()
      .then((result) => setUsers(result))
      .catch(err => alert(err))
  }, [setUsers])
  return (
    <Container>
      <TableContainer>
        <TableHeader>
          <div>
            Nome
          </div>
          <div>
            Email
          </div>
          <div>
            Cadastrado em
          </div>
          <div>

          </div>
        </TableHeader>

        {users.map(user => (<TableRow key={user.id}>
          <div>
            {user.name}
          </div>
          <div>
            {user.email}
          </div>
          <div>
            {user.dtCreatedAt.toISOString()}
          </div>
          <div className="buttonCell">
            <TableButton variant='editar'>
              editar
            </TableButton>
          </div>
          <div className="buttonCell">
            <TableButton variant='excluir'>
              excluir
            </TableButton>
          </div>
        </TableRow>))}

      </TableContainer>
    </Container>
  )
}