import { View, Image, FlatList } from "react-native"
import { styles } from "./calendar.style";
import icon from "../../constants/icon";
import { appointments } from '../../constants/data.js'
import Appointment from "../../components/appointment/appointment.jsx";

function Calendar(){
    return(
        <View style={styles.container}>

            <FlatList 
                data={appointments}//de onde vem os dados: API ou data.js(temporario)
                keyExtractor={ ( appoint )=> appoint.id_appointment } //qual campo nunca se repete
                renderItem={({ item })=>{
                    return(
                        <Appointment 
                            service={item.service}
                            doctor={item.doctor}
                            speciality={item.speciality}
                            date={item.booking_date}
                            hour={item.booking_hour}
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default Calendar;