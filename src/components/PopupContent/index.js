import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: '#666666',
    background: '#FDA6CB',
    height: 75,
    padding: '0 10px 0 10px'
  }
})

const PopupContent = ({des, address}) => {
  const classes = useStyles();
  return(
    <Paper elevation={0} className={classes.root}>
      <h3>{des}</h3>
      <p>{address}</p>

    </Paper>
  )
}

export default PopupContent;