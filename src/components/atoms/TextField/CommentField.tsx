import { TextField } from "@material-ui/core"
import styled from "styled-components";

type BooksCommentProps = {
	name: string;
	value: string;
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const CommentField = (props:BooksCommentProps) => {
  const { name,value,label,onChange } = props
    return (
        <STextField
          id="standard-multiline-static"
          name={name}
          label={label}
          value={value}
          onChange={onChange}
          multiline
          rows={4}
          defaultValue=""
        />
    )
}

const STextField = styled(TextField)`
width: 50%;
margin-top: 50px;
`