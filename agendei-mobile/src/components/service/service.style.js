import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
   service:{
        flex:1,
        backgroundColor:COLORS.white,
        paddingTop:8,
        borderWidth:1,
        borderColor:COLORS.grey400,
        margin:5,
        padding:5,
        borderRadius:6,

        flexDirection:'row',
        alignItems:'center'
   },
   containerText:{
      flex:1,
   },
      name:{
      fontSize:FONT_SIZE.md,
      color:COLORS.grey100,
   },
      price:{
      fontSize:FONT_SIZE.sm,
      color: COLORS.grey300
   },
      icon:{
      width:50,
      height:50,
      marginRight:8
   }
}