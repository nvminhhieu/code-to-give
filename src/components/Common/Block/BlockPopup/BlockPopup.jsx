import styled from 'styled-components'
import QuizLine from '../../../Common/QuizLine/QuizLine'
import Notification from '../../../Common/Notification/Notification'
import { useState } from 'react'
const QuizContainer = styled.div`
    width: 100%;
    gap: 35px;
    overflow-y: auto;
    max-height: 600px;
    position: relative;
`

export default function BlockPopup(props) {
    const [currentWindow,setCurrentWindow] = useState(0)
    


    return (
        <> 
            <Notification pad='5px' top='25px' left='200px' content={props.data.length} />
            <QuizContainer>
                {props.data && props.data.map((element, ind) => {
                    return (<QuizLine key={ind} 
                        quiz_name={element.quiz_name} 
                        date={element.date} 
                        time={element.time} 
                        attempt={element.attempt} 
                        point={element.point}
                        cur={currentWindow} 
                        id = {ind}
                        funcCur={()=>setCurrentWindow(ind)}></QuizLine>)
                })}
            </QuizContainer>
        </>

    )
}