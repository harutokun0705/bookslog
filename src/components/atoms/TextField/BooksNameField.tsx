import { TextField } from '@material-ui/core';
import styled from 'styled-components';

type BooksNameProps = {
	name: string;
	value: string;
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const BooksNameField = (props:BooksNameProps) => {
	const { name,value,label,onChange } = props;
	return (
			<STextField
				name={name}
				id="standard-basic"
				label={label}
				value={value}
				onChange={onChange}
			/>
	)
}

const STextField = styled(TextField)`
width: 50%;
margin-top: 30px;
`