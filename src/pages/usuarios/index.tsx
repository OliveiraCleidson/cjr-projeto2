import { Container, TableButton, TableContainer, TableHeader, TableRow } from "./styles";

export default function UsuariosPage() {
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

        <TableRow>
          <div>
            Lauren Shaxby
          </div>
          <div>
            lshaxby@php.net
          </div>
          <div>
            16/10/2021
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
        </TableRow>

      </TableContainer>
    </Container>
  )
}