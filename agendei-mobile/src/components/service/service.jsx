import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./service.style";
import Button from "../button/button";

function Service( props ){
    return(
        <TouchableOpacity style={styles.service}>
            <View style={styles.containerText}>
                <Text style={styles.name}> { props.service } </Text>
                <Text style={styles.price}> 
                    {
                        new Intl.NumberFormat("pt-BR", {
                            style:"currency",
                            currency:'BRL'
                        }).format(props.price)
                    }
                    
                </Text>
            </View>

            <View>
                <Button text="Agendar" />
            </View>
        </TouchableOpacity>
    )
}

export default Service;