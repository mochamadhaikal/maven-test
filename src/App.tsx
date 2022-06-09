import { useState } from 'react'
import styled from 'styled-components'

import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'

const StyledItemQuestion = styled.button`
  margin: 10px;
`

const StyledContainer = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`

function App() {
  const [question, setQuestion] = useState(1)

  return (
    <>
      <StyledItemQuestion onClick={() => setQuestion(1)}>Soal 1</StyledItemQuestion>
      <StyledItemQuestion onClick={() => setQuestion(2)}>Soal 2</StyledItemQuestion>
      <StyledContainer>
        <h4>Soal {question}</h4>
        {question === 1 && <QuestionOne />}
        {question === 2 && <QuestionTwo />}
      </StyledContainer>
    </>
  )
}

export default App