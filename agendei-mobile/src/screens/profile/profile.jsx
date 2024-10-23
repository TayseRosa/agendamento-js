import { Text, View } from "react-native";
import { styles } from "./profile.style";

function Profile(){
    return(
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>Nome</Text>
                <Text style={styles.text}>Tayse Rosa</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.title}>E-mail</Text>
                <Text style={styles.text}>tayserosa@email.com</Text>
            </View>
        </View>
    )
}

export default Profile;