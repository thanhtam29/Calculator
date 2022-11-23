import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [firstNumber, setfirstNumber] = React.useState("");
  const [secondNumber, setsecondNumber] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [result, setresult] = React.useState("");

  const handleNumberPress = (buttonValue)=>{
    if(firstNumber.length < 10){
      setfirstNumber(firstNumber + buttonValue);
    }
  }
  const handleOperationPress = (buttonValue)=>{
    setOperator(buttonValue);
    setsecondNumber(firstNumber);
    setfirstNumber("");
  }
  const clear =()=>{
    setfirstNumber("");
    setsecondNumber("");
    setOperator("");
    setresult(null);
  }
  const getResutl = () =>{
    switch (operator){
      case "+":
        clear();
        setresult(parseInt(secondNumber)+ parseInt(firstNumber));
        break;
      case "-":
        clear();
        setresult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setresult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setresult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setresult(0);
        break;
    }
  }

  const firstNumberDisplay = () =>{
    if(result !=null){
      return <Text >{result?.toString()}</Text>
    }
    if(firstNumber && firstNumber.length < 6){
      return <Text>{firstNumber}</Text>
    }
    if(firstNumber === ""){
      return <Text>{"0"}</Text>
    }
    if(firstNumber.length > 5 && firstNumber.length < 8){
      return <Text>{firstNumber}</Text>
    }
    if(firstNumber.length > 7 ){
      return <Text>{firstNumber}</Text>
    }
  }
  console.log(firstNumberDisplay )
  return (
    <View style={styles.container}>
      <Text placeholder='test' style={styles.Bangtinh}>
        {firstNumber.toString()}{operator.toString()}
      </Text>     
      <View style={styles.row}> 
        <Button style={styles.NumberInput} title='C' onPress={() => clear()} />
        <Button style={styles.NumberInput} title='7' onPress={() => handleNumberPress("7")} />
        <Button style={styles.NumberInput} title='8' onPress={() => handleNumberPress("8")} />
        <Button style={styles.NumberInput} title='9' onPress={() => handleNumberPress("9")} />
        <Button style={styles.NumberInput} title='+' onPress={() => handleOperationPress("+")} />
      </View>
      <View style={styles.row}>
      <Button style={styles.NumberInput} title='4' onPress={() => handleNumberPress("4")} />
        <Button style={styles.NumberInput} title='5' onPress={() => handleNumberPress("5")} />
        <Button style={styles.NumberInput} title='6' onPress={() => handleNumberPress("6")} />
        <Button style={styles.NumberInput} title='-' onPress={() => handleOperationPress("-")} />
      </View>
      <View style={styles.row}>
      <Button style={styles.NumberInput} title='3' onPress={() => handleNumberPress("3")} />
        <Button style={styles.NumberInput} title='2' onPress={() => handleNumberPress("2")} />
        <Button style={styles.NumberInput} title='1' onPress={() => handleNumberPress("1")}/>
        <Button style={styles.NumberInput} title='*' onPress={() => handleOperationPress("*")} />
      </View>
      <Button style={styles.NumberInput} title='=' onPress={() => handleOperationPress("=")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
      maxWidth: '100%',
      flexDirection: 'row'
  },
  Bangtinh: {
    width: "90%",
    height: 120,
    justifyContent:"flex-end",
    alignSelf:"center",
    borderWidth: 1,
    borderColor: "#20232a",
  },
  NumberInput: {
    backgroundColor: '#64278f',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
});
