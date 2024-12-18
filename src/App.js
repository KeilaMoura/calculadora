import {Container, Content, Row, Column} from "./styles"
import Input from "./Components/Input"
import Button from "./Components/Button"
import { useState } from "react"



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')

  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('')

 
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => ` ${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber( String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
      } else{
        console.log(Number(firstNumber) , Number(currentNumber))
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
        
      }

  }
  const handleRemNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber( String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
      } else{
        const rem = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(rem))
        setOperation('')
        
      }

  }

  const handleMultNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber( String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
      } else{
        const mult = Number(firstNumber) *  Number(currentNumber);
        setCurrentNumber(String(mult))
        setOperation('')
        
      }

  }

  const handleDivNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber( String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
      } else{
        const div = Number(firstNumber) /  Number(currentNumber);
        setCurrentNumber(String(div))
        setOperation('')
        
      }

  }


  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
          case '-':{
            handleRemNumbers()
            break;
          }
          case '*':{
            handleMultNumbers()
            break;
          }
          case '/':{
            handleDivNumbers()
            break;
          }
      
      
      
        default:
          break;
      }
      }
    }

 
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label ="*" onClick={ handleMultNumbers} />
          <Button label ="/" onClick={ handleDivNumbers} />
          <Button label ="C" onClick={handleOnClear} />
          <Button label ="0"/>
        </Row>
  
        <Row>
          <Button label ="7" onClick={() => handleAddNumber('7')} />
          <Button label ="8" onClick={() => handleAddNumber('8')} />
          <Button label ="9" onClick={() => handleAddNumber('9')} />
          <Button label ="-" onClick={ handleRemNumbers}/>
        </Row>
  
        <Row>
          <Button label ="4" onClick={() => handleAddNumber('4')} />
          <Button label ="5" onClick={() => handleAddNumber('5')} />
          <Button label ="6" onClick={() => handleAddNumber('6')} />
          <Button label ="+" onClick={handleSumNumbers}/>
        </Row>

        <Row>
          <Button label ="1" onClick={() => handleAddNumber('1')} />
          <Button label ="2" onClick={() => handleAddNumber('2')} />
          <Button label ="3" onClick={() => handleAddNumber('3')} />
          <Button label ="=" onClick={handleEquals}/>
        </Row>
  
  
      </Content>
    </Container>
  );
}

export default App;
