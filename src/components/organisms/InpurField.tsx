import styled from "styled-components"
import { SubmitButton } from "../atoms/Button/Submitbutton"
import { BooksNameField } from "../atoms/TextField/BooksNameField"
import { CommentField } from "../atoms/TextField/CommentField"
import { useState, useEffect } from "react"
type submitContentsType = {
	Name: string;
	Comment: string
}
export const InputField = () => {
	const [booksName, setBooksName] = useState('');
	const [booksComment, setBooksComment] = useState('');
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const label = {
		name: "Books Name",
		comment: "Books Comment"
	}
	const [submitContents, setSubmitContents] = useState<submitContentsType[]>([]);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const targetName = e.target.name;
		const targetValue = e.target.value;
		switch (targetName) {
			case "booksName":
				setBooksName(targetValue.trim());
				break;
			case "booksComment":
				setBooksComment(targetValue.trim());
				break;
		}
		console.log(submitContents);
	}
	const handleSubmit = () => {
		console.log(booksName, booksComment);
		setSubmitContents([...submitContents, { Name: booksName, Comment: booksComment }])
		setBooksName("");
		setBooksComment("");
	}
	useEffect(() => {
		if (booksName !== ""  && booksComment !== "" ) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [booksName, booksComment])
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
				disabled={buttonDisabled}
			>
				登録する
			</SubmitButton>
			<SFlex>
				{submitContents.map((item, i) =>
					<SListWrappar>
						<li key={i}><STitle>書籍名</STitle><br />{item.Name}</li>
						<li key={i}><STitle>コメント<br /></STitle>{item.Comment}</li>
					</SListWrappar>
				)}
			</SFlex>
		</SInputField>
	)
}

const SInputField = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const SListWrappar = styled.div`
width: 300px;
height: 150px;
overflow: scroll;
word-wrap: break-word;
border: solid 3px #2d76ca;
border-radius: 5px;
margin-top: 20px;
/* margin-right: 68px; */
padding: 10px;
:nth-child(even) {
	margin-right: 0;
}
li {
	list-style: none;
	color: #595757;
}
`

const SFlex = styled.div`
width: 720px;
margin-top: 30px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const STitle = styled.span`
font-weight: 500;
font-size: large;
color: #595757;
`