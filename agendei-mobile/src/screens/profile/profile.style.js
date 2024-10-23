import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        paddingTop:12
    },
    item:{
        borderWidth:1,
        borderColor:COLORS.grey400,
        paddingLeft:8,
        paddingTop:15,
        paddingBottom:15,
    },
    title:{
        fontSize:FONT_SIZE.sm,
        color:COLORS.grey100,
        
    },
    text:{
        fontSize:FONT_SIZE.sm,
        color:COLORS.grey100,
    }
    
}