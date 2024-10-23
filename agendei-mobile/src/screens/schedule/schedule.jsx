import { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./schedule.style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from '../../constants/calendar.js';
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedule( props ){
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedHour, setSelectedHour] = useState("");

    return(
        <View style={styles.container}>
            <View>
                <Calendar 
                    theme={styles.theme} 
                    onDayPress={ (day)=>{
                        setSelectedDate(day.dateString)
                    }} 
                    markedDates={{
                        [selectedDate] : {selected:true}
                    }}
                    minDate={new Date().toDateString()}
                />

            {/* <Text>{selectedDate}</Text>*/}
            <Text>{selectedDate}</Text>

                <View>
                    <Text style={styles.textHour}>Horário: </Text>
                </View>

                <View>
                    <Picker selectedValue={selectedHour} onValueChange={(itemValue, itemIndex)=>{
                        setSelectedHour(itemValue)
                    }}>
                        <Picker.Item label="09:00" value="10:00" />
                        <Picker.Item label="11:00" value="12:00" />
                        <Picker.Item label="15:00" value="15:30" />
                        <Picker.Item label="18:00" value="19:00" />
                    </Picker>
                </View>
            </View>

            <View>
                <Button text="Confirmar reserva" />
            </View>
        </View>
    )
}

export default Schedule;