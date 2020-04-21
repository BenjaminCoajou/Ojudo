import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  

  
const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
const ArticleTable = ({list, deleteArticle, submitDelete}) => {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>titre</StyledTableCell>
              <StyledTableCell>Contenu</StyledTableCell>
              <StyledTableCell>Photo</StyledTableCell>
              <StyledTableCell>date de création</StyledTableCell>
              <StyledTableCell>date de mise à jour</StyledTableCell>
              <StyledTableCell>Utilisateur</StyledTableCell>
              <StyledTableCell>Modifier</StyledTableCell>
              <StyledTableCell>Supprimer</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((articles) => (
              <StyledTableRow key={articles.id}>
                <StyledTableCell>{articles.id}</StyledTableCell>
                <StyledTableCell>{articles.title}</StyledTableCell>
                <StyledTableCell>{`${articles.content.substring(0, 40)}...`}</StyledTableCell>
                <StyledTableCell>{articles.picture}</StyledTableCell>
                <StyledTableCell>{articles.createdAt}</StyledTableCell>
                <StyledTableCell>{articles.updatedAt}</StyledTableCell>
                <StyledTableCell>{''}</StyledTableCell>

                <StyledTableCell> <EditIcon/></StyledTableCell>
                <StyledTableCell><DeleteIcon onClick={() => {deleteArticle(articles.id), submitDelete()}} /> </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default ArticleTable;