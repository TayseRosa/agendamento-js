import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";


function Button( props ){

  function handleClick(){
    Alert.alert('Clicou no nosso botão')
  }

  return (
    <TouchableOpacity 
      onPress={handleClick} 
      style={[styles.btn,
          props.theme === 'danger' ? styles.danger : styles.primary
      ]} 
    >
      <Text style={styles.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
);
}

export default Button;