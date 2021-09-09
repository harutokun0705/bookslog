// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { ButtonStyles } from '../../styles/Button/ButtonStyle'
type ButtonProps = {
    children: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const SubmitButton = (props: ButtonProps) => {
    const classes = ButtonStyles();
    const { children, onClick } = props;
    return (
        <SButton
					variant="contained"
					className={`${classes.button} ${classes.textColor}`}
					onClick={onClick}
					>
					{children}
        </SButton>
    )
}

const SButton = styled(Button)`
margin-top: 100px;
width: 20%;
`