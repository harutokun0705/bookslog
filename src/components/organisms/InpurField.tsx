import styled from "styled-components"
import { SubmitButton } from "../atoms/Button/Submitbutton"
import { BooksNameField } from "../atoms/TextField/BooksNameField"
import { CommentField } from "../atoms/TextField/CommentField"
import { useState } from "react"
export const InputField = () => {
    const [booksName,setBooksName] = useState('');
    const [booksComment,setBooksComment] = useState('');
		const label = {
			name:"Books Name",
			comment:"Books Comment"
		}
		const submitContents:any = [];
		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const targetName = e.target.name;
        const targetValue = e.target.value;
        switch(targetName) {
					case "booksName":
						setBooksName(targetValue);
						break;
					case "booksComment":
						setBooksComment(targetValue);
						break;
        }
		}
		const handleSubmit = () => {
			console.log(booksName,booksComment);
			const inputContents = {booksName,booksComment};
			submitContents.push(inputContents);
			console.log(submitContents);
			setBooksName("");
			setBooksComment("");
		}
    return (
        <SInputField>
            <BooksNameField
							name={"booksName"}
							value={booksName}
							label={label.name}
							onChange={handleInputChange}
            />
            <CommentField
							name={"booksComment"}
							value={booksComment}
							label={label.comment}
							onChange={handleInputChange}
						/>
            <SubmitButton
						onClick={handleSubmit}
						>
            	登録する
            </SubmitButton>
        </SInputField>
    )
}

const SInputField = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`