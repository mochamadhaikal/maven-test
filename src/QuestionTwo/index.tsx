import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styled from 'styled-components'

const StyledContainerItems = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  height: 200px;
  align-items: end;
`

interface StyledItemProps {
    height: number
}

const StyledItem = styled.div<StyledItemProps>`
  height: ${props => props.height * 2}px;
  width: 20px;
  background-color:  ${props => 
    props.height >= 0 && props.height <= 25 ? 'green' :
    props.height >= 26 && props.height <= 50 ? 'yellow' :
    props.height >= 51 && props.height <= 75 ? 'red' :
    props.height >= 76 && props.height <= 100 && 'blue'};
`

const StyledNumber = styled.p`
    margin: 0
`



const QuestionTwo = () => {
  const [numberData, setNumberData] = useState<number>(0)
  const [isStarted, setIsStarted] = useState(false)
  const [incrementChange, setIncrementChange] = useState(1)
  const [dataChart, setDataChart] = useState<number[]>([])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsStarted(!isStarted)
  }

  const handleChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setIsStarted(false)
    setNumberData(+e.target.value)
  }

  useEffect(() => {
    if(numberData && isStarted) {
        setDataChart(
            Array.from({ length: numberData }, () => Math.floor(Math.random() * 101))
        )
    }
  }, [numberData, isStarted, incrementChange])

  useEffect(() => {
    if(isStarted && numberData) {
        setTimeout(() => {
            setIncrementChange(incrementChange + 1)
        }, 3000)
    }
  }, [isStarted, incrementChange])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeNumber} value={`${numberData}`} type="number" />
        <button type="submit">{isStarted ? 'Stop' : 'Start' }</button>
      </form>
      <StyledContainerItems>
        {dataChart.map((el, index) => (
            <div key={index}>
                <StyledNumber>{el}</StyledNumber>
                <StyledItem height={el} />
            </div>
        ))}
      </StyledContainerItems>
    </div>
  )
}

export default QuestionTwo