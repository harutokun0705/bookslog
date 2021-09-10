// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { ButtonStyles } from '../../styles/Button/ButtonStyle'
type ButtonProps = {
    children: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
		disabled: boolean;
}
export const SubmitButton = (props: ButtonProps) => {
    const classes = ButtonStyles();
    const { children, onClick, disabled } = props;
    return (
        <SButton
					variant="contained"
					className={`${classes.button} ${classes.textColor}`}
					onClick={onClick}
					disabled={disabled}
					>
					{children}
        </SButton>
    )
}

const SButton = styled(Button)`
margin-top: 100px;
width: 20%;
`