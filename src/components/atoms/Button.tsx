import React, { ReactNode } from 'react'
import styled from 'styled-components'
type Props = {
    text: string
    className?: string
    type: "next" | "submit" | "back"
}
export const FCButton: React.FC<Props> = ({ text, className,type }) => {
return (
    <button className={className}>{text}</button>
  )
}
export const Button = styled(FCButton)`
    width: 100px;
    height: 50px;
    border-radius: 35px;
    background-color: ${(props) => props.type === "next" ? 'red' : props.type === "submit" ? 'blue' : 'green'};
    text-align: center;
    color: white;
`