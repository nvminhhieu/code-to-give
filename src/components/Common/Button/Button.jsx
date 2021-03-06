import styled from "styled-components"
const Btn = styled.button`
        padding: ${(props) => {
        if (props.pad !== undefined) { return props.pad }
        else { return `10px` }
    }} 30px;
        border:none;
        background: #FFD652;
        height: fit-content;
        width:100%;
        border-radius: 10px;
        text-transform:uppercase;
        cursor:pointer;
        color: var(--blackColor);
        transition:0.5s;
        font-style: normal;
        font-weight: bold;
        font-size: 1.1rem;
        &:hover {
            background:#FF9500;
        }
        `
export default function Button(props) {
    return (
        <Btn onClick={props.func} pad={props.pad}>{props.content}</Btn>
    )
}