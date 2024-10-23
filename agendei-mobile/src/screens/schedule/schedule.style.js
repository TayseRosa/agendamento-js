import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
   container:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:20,
        justifyContent:'space-between',
        marginBottom:20
   },
   theme:{
      todayTextColor: COLORS.blue,
      selectedDayBackgroundColor: COLORS.blue,
      selectedDayTextColor: COLORS.white,
      arrowColor:COLORS.blue,
      
   },
   textHour:{
      fontSize:FONT_SIZE.lg,
      fontWeight:'bold',
      color:COLORS.grey200,
      marginTop:20
   }  
}