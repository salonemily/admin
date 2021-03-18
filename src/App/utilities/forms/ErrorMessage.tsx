import React from 'react'
import {Message} from 'semantic-ui-react'
interface IProps {
    text: string
}
const ErrorMessage:React.FC<IProps> = ({text}) => {
    return (
        <Message negative>
        <Message.Header>Błąd</Message.Header>
        <p>{text}</p>
      </Message>
    )
}

export default ErrorMessage
