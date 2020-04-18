import React from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const extrait = 'Vituperandae si nullo illa Epicureum quae nullo se nullo dissentias cum rem cum philosophia potest ille vituperandae inter cum illa rem probes non indignae potest enim rem potest non esset eius quid non cum contumeliae reprehensiones quid cum mihi eius disputando maledicta non inquam ludus ob philosophia iracundiae praesertim quid pertinaces diceret dissentientium non probes ob contentiones ludus concertationesque pacto tum ut esset non iracundiae si Triari contumeliae quo illa esset pacto probes sunt dissentias tum si maledicta non diceret nullo quae iracundiae tum reprehensiones nullo mihi mihi in diceret iracundiae perdiscere concertationesque me quid perdiscere non non nullo esset.';

const ArticleTable = ({users}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12} sm={6}>
    <MaterialTable
      title="Liste des articles"

      columns={[
        { title: 'Noms des articles', field: 'article_name', filtering: false },
        { title: 'Contenu des articles', field: 'article_content',  filtering: false },
        { title: 'Date de création', field: 'article_date', type: 'date', filtering: false },
        { title: 'Auteurs', field: 'article_author',  filtering: false},
        { 
          title: 'Tags', 
          field: 'article_tag',
          lookup: { monde: 'Monde', club: 'Club', event: 'Event', competition: 'Compétition' },
        },
      ]}

      data={[
        { article_name: 'Un article', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-10-11', article_author:'Toto',article_tag: 'monde'},
        { article_name: 'Toto et tata font leur première compétition', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-12-12', article_author:'Paul', article_tag: 'club'},
        { article_name: 'Pourquoi t\'es nul au judo', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-12-12', article_author:'Paul', article_tag: 'competition'},
        { article_name: 'Le projet o\'judo', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-12-12', article_author:'Pierre', article_tag: 'club'},
        { article_name: 'ABCDEFGH', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-12-31', article_author:'Dan', article_tag: 'event'},
    
      ]}

      detailPanel={rowData => {
        return (
            // Le bouton sert à afficher tout le contenu qui est dans cette div
            <div>
            {rowData.article_content}
            </div>

        )
      }}

      actions={[
        {
          icon: 'edit',
          tooltip: 'Éditer l\'article',
          onClick: (event, rowData) => alert("You saved " + rowData.article_name)
        },
        rowData => ({
          icon: 'delete',
          tooltip: 'Supprimer l\'article ',
          onClick: (event, rowData) => confirm("You want to delete " + rowData.article_name),
         
        }),
        {
          icon: 'add',
          tooltip: 'Ajout d\'un article',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        }
        
      ]}
      options={{
        actionsColumnIndex: -1,
        filtering: true,
      }}
    /> 
    </Grid>

    <Grid item xs={12} sm={6}>
    <MaterialTable
      title="Liste des tags"

      columns={[
        { title: 'Tag', field: 'tag', },
      ]}

      data={[
        { tag: 'Monde'},
        { tag: 'Club'},
        { tag: 'Event'},
        { tag: 'Compétiton'},
      ]}

      actions={[
        {
          icon: 'edit',
          tooltip: 'Éditer un tag',
          onClick: (event, rowData) => alert("You saved " + rowData.article_name)
        },
        rowData => ({
          icon: 'delete',
          tooltip: 'Supprimer un tag ',
          onClick: (event, rowData) => confirm("You want to delete " + rowData.article_name),
         
        }),
        {
          icon: 'add',
          tooltip: 'Ajout d\'un tag',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        }
        
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
    />   
    </Grid>
    </Grid>  
  )
}
export default ArticleTable;