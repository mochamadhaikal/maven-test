import { useState, useMemo, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'

const StyledContainerItems = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StyledItem = styled.div`
  background-color: #a6a6de;
  border: 1px solid #000000;
  padding: 6px;
`



const QuestionOne = () => {
  const [numberData, setNumberData] = useState<number>(0)
  const [assignNumber, setAssignNumber] = useState<number>(0)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(`${numberData}`.indexOf('0') >= 0) {
      setAssignNumber(0)
      alert('Tidak diizinkan ada nilai 0')
    } else {
      setAssignNumber(numberData)
    }
  }

  const handleChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberData(+e.target.value)
  }

  const dataRender = useMemo(() => {
    const data = []

    if(assignNumber) {
      const numberAsssign = `${assignNumber}`.split('')
      
      for(let i = 0; i < numberAsssign.length; i++) {
        let currentNumber = numberAsssign[i]

        if(i < numberAsssign.length - 1) {
          const totalZero = numberAsssign.length - i - 1
          currentNumber+= Array(totalZero).fill('0').join('')
        }
        data.push(currentNumber)
      }
    }

    return data
  }, [assignNumber])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeNumber} value={`${numberData}`} type="number" />
        <button type="submit">Generate</button>
      </form>
      <StyledContainerItems>
        {dataRender.map((el, index) => (
          <StyledItem key={index}>{el}</StyledItem>
        ))}
      </StyledContainerItems>
    </div>
  )
}

export default QuestionOne