import { makeStyles } from '@material-ui/core/styles';

export const MultiTextFieldStyle = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
  }));