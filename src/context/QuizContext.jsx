import React, { useState } from "react"

export const QuizContext = React.createContext();

export function QuizProvider({children})
{
    const [dataToDo,setDataToDo] = useState([])
    const [dataFinished,setDataFinished] = useState([])
    const [loadingToDo,setLoadingToDo] = useState(true)
    const [loadingFinished,setLoadingFinished] = useState(true)

    const getDataToDo = async (url) => {
        if(url)
        {
            const responseTodo = await fetch(url,{
                method:"GET",
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const resultTodo = await responseTodo.json()
            //console.log(resultTodo)
            setLoadingToDo(false)
            console.log(resultTodo.quizzes)             //set temp for picquizz
            
            setDataToDo(resultTodo.quizzes)
        }
    }

    const getDataFinished = async(url)=>{
        if(url)
        {
            const responseFinished = await fetch(url,{
                method:"GET",
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const resultFinished = await responseFinished.json()
            setDataFinished(resultFinished.quizzes)
            console.log(resultFinished.quizzes)
            setLoadingFinished(false)
        }
    }

    const resetLoading = ()=>{
        setLoadingToDo(true)
        setLoadingFinished(true)
    }

    //USE FOR MOCK DATA ONLY
    /*const getDataMock = async(url)=>{
        const response = await fetch(url)
        const result = await response.json()
        setLoadingToDo(false)
        setLoadingFinished(false)
        setDataToDo(result)
        setDataFinished([])
    }*/

    const handleGameFetching = (gameType)=>{
        switch (gameType)
        {
            case 'Scribbly':
                {
                    getDataFinished(`${process.env.REACT_APP_DOMAIN}/api/scribbly/finished`)
                    getDataToDo(`${process.env.REACT_APP_DOMAIN}/api/scribbly/need-to-do`)
                    break;
                }
            case 'Quiz':
                {
                    //getDataMock('../mock_data/Quiz.json')
                    getDataFinished(`${process.env.REACT_APP_DOMAIN}/api/quiz/get-list/finished`)
                    getDataToDo(`${process.env.REACT_APP_DOMAIN}/api/quiz/get-list/need-to-do`)
                    break;
                }
            case 'PicQuizz':
                {
                    getDataFinished(`${process.env.REACT_APP_DOMAIN}/api/pic-quiz/get-list/finished`)
                    getDataToDo(`${process.env.REACT_APP_DOMAIN}/api/pic-quiz/get-list/need-to-do`)
                    break;
                }
            default:
                {
                    getDataFinished()
                    getDataToDo()
                    break;
                } 
        }
    }

    /*useEffect(()=>{
        console.log(data)
    },[data])*/

    return(
        <QuizContext.Provider value={{dataToDo,dataFinished,handleGameFetching,loadingToDo,loadingFinished,resetLoading}}>
            {children}
        </QuizContext.Provider>
    )
}