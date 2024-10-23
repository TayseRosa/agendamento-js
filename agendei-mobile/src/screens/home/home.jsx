import { View, Text, Image, FlatList } from "react-native"
import { styles } from "./home.style";
import icon from "../../constants/icon";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor";

function Home(){
    return(
        <View style={styles.container}>

            <Text style={styles.text} >Agende seus serviços </Text>

            <FlatList 
                data={doctors}//de onde vem os dados: API ou data.js(temporario)
                keyExtractor={ ( doc )=> doc.id_doctor } //qual campo nunca se repete
                renderItem={({ item })=>{
                    return(
                        <Doctor
                            icon={item.icon == "M" ? icon.male : icon.female} 
                            name={item.name} 
                            speciality={item.speciality}
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default Home;