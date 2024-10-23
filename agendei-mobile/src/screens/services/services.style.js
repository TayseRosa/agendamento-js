import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        backgroundColor:COLORS.white,
        flex:1,
    },
    banner:{
        backgroundColor:COLORS.blue,
        justifyContent: 'center',
        alignItems:'center',
        paddingtop:10,
        paddingBottom:25,
    },
    name:{
        fontSize: FONT_SIZE.md,
        color:COLORS.white,
        fontWeight:'bold',
        marginTop:5,
    },
    speciality:{
        fontSize: FONT_SIZE.sm,
        color:COLORS.white,
        marginTop:3,
    },

}