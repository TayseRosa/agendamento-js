import { View, Text, Image, FlatList } from "react-native"
import { styles } from "./services.style";
import icon from "../../constants/icon";
import { doctor_services } from "../../constants/data";
import Doctor from "../../components/doctor/doctor";
import Service from "../../components/service/service";

function Services(){
    return(
        <View style={styles.container}>

            <View style={styles.banner}>
                <Image source={icon.female} />
                <Text style={styles.name} > Tayse Rosa </Text>
                <Text style={styles.speciality} > Cardiologia </Text>
            </View>


            <FlatList 
                data={doctor_services}//de onde vem os dados: API ou data.js(temporario)
                keyExtractor={ ( serv )=> serv.id_service } //qual campo nunca se repete
                renderItem={({ item })=>{
                    return(
                        <Service 
                            service={item.description}
                            price={item.price}
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default Services;