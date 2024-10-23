import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import logo from '../../assets/logo.png'
import { styles } from "./login.style";
import Button from '../../components/button/button'
import icon from "../../constants/icon";

function Login(){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View>
                <View style={styles.containerInput}>
                    <TextInput placeholder="E-mail" style={styles.input} />
                </View>

                <View style={styles.containerInput}>
                    <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} />
                </View>
                
                <Button text="Acessar" /> 
            </View>

            <View style={styles.footer}>
                <Text>Não tenho conta. </Text>
                <TouchableOpacity>
                    <Text style={styles.footerLink}>Criar conta agora</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;