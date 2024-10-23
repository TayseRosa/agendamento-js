import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
   doctor:{
        flex:1,
        backgroundColor:COLORS.white,
        paddingTop:8,
        borderWidth:1,
        borderColor:COLORS.grey400,
        marginTop:3,
        marginBottom:3,
        borderRadius:6,

        flexDirection:'row',
        alignItems:'center'
   },
   name:{
    fontSize:FONT_SIZE.md,
    color:COLORS.grey100,
   },
   speciality:{
    fontSize:FONT_SIZE.sm,
    color: COLORS.grey300
   },
   icon:{
    width:50,
    height:50,
    marginRight:8
   }
}