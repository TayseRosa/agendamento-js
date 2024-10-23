import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        backgroundColor:COLORS.white,
        flex:1,
        padding:50,
        justifyContent:'space-around'
    },
    containerLogo:{

    },
    logo:{
        width:200,
        height:46
    },
    containerInput:{
        marginBottom:15,
    },
    input:{
        backgroundColor:COLORS.grey500,
        padding:12,
        borderRadius:6,
    },
    footer:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    footerLink:{
        color:COLORS.blue,
        fontWeight:'bold'
    }
}