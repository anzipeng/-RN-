/**
 * Created by bxBx on 2018/12/27.
 */
import React ,{Component} from 'react'
import {TouchableOpacity,View,Text, Image, StyleSheet} from 'react-native'
export default class DiscoverCell extends Component{
    render(){
        return (
            <TouchableOpacity onPress={this.props.clickItem}>
                <View style={cellStyle.containor}>
                    <Image style={cellStyle.image} source={{uri:this.props.imageName}}></Image>
                    <Text style={cellStyle.title}>{this.props.title}</Text>
                    <Image style={cellStyle.rightArrow} source={{uri:'arrow-right-copy-copy-copy.png'}}></Image>
                </View>
            </TouchableOpacity>);
    }
}

const cellStyle = StyleSheet.create({
    containor:{
        height:44,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    image:{
        width:25,
        height:25,
        flex:1,
        marginLeft:10,
        resizeMode:'contain'
    },
    title:{
        marginLeft:10,
        fontSize:17,
        flex:8

    },
    rightArrow:{

        flex:1,
        width:18,
        height:18,
        resizeMode:'contain'
    }

})