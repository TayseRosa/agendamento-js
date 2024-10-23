import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./appointment.style";
import icon from "../../constants/icon";
import Button from '../../components/button/button.jsx'

function Appointment( props ){
    return(
        <View style={styles.appointment}>
            <Text style={styles.name}> {props.service} - {props.doctor}</Text>
            <Text style={styles.speciality}> {props.speciality}</Text>
            <View style={styles.container}>
                <View style={styles.containerBooking}>
                    <View style={styles.booking}>
                        <Image source={icon.calendar} style={styles.icon} />
                        <Text style={styles.bookingDate}> {props.date}</Text>
                    </View>
                    <View style={styles.booking}>
                        <Image source={icon.clock} style={styles.icon} />
                        <Text style={styles.bookingHour}> {props.hour}</Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button theme="danger" text="Cancelar Reserva" />
                </View>
            </View>
        </View>
    )
}

export default Appointment;