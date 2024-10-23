import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    appointment:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:12,
        borderWidth:1,
        borderColor:COLORS.grey400,
        marginBottom:4,
        borderRadius:8
    },

    name:{
        fontSize:FONT_SIZE.md,
        color: COLORS.grey100,
        marginBottom:2,
    },
    speciality:{
        fontSize:FONT_SIZE.sm,
        color: COLORS.grey300,
        marginBottom:4,
    },
    icon:{
        width:25,
        height:25,
        marginRight:5
    },
    container:{
        flexDirection:'row',
    },
    containerBooking:{
        flex:1,
    },
    booking:{
        flexDirection:'row',
    },
    bookingDate:{
        fontSize:FONT_SIZE.sm,
        color:COLORS.grey300,
        marginTop:3,
    },
    bookingHour:{
        fontSize:FONT_SIZE.sm,
        color:COLORS.grey300,
        marginTop:3,
    },
    containerButton:{
        marginTop:5
    }

}