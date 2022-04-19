import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`

export const TableContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1.4fr;
  background: var(--table-head-bg);
  padding: 0.5rem;
  margin-top: 1rem;
`

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 0.7fr 0.7fr;
  padding: 0.5rem;

  .buttonCell {
    margin: 0 auto;
  }
`

type TableButtonProps = {
 variant: 'editar' | 'excluir' 
}

export const TableButton = styled.button<TableButtonProps>`
  color: ${({variant}) => variant == 'editar' ? 'var(--edit-button-color)' : 'var(--delete-button-color)'};
  border: none;
  text-decoration: none;
  background: none;
  cursor: pointer;
  transition-duration: 0.4s;
  font-weight: bold;
  
  :hover {
    color: var(--button-hover-color);
  }
`