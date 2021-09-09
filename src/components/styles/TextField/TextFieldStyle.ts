import { makeStyles } from '@material-ui/core/styles';
export const TextFieldStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
}));