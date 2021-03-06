import styled from 'styled-components'
import Avatar from '../../../Avatar/Avatar'


const BlockCardDiv = styled.div`
    width: 100%;
    display: flex;
    gap: 5%;
    overflow-x: auto;
    @media screen and (max-width:500px)
    {
        flex-direction: column;
        gap: 30px;
        height: auto;
        overflow: visible;
    }
    
`

/*const Test = styled.div`
        min-width:250px;
        max-width: 260px;
        height:250px;
        background:red;
        flex: 1;
    `*/

export default function BlockCards(props)
{
    return (
        <BlockCardDiv>
            {props.data && props.data.map((ele,ind)=>{return <Avatar key={ind} name={ele.name} point={ele.point}/>})}
        </BlockCardDiv>
    )
}