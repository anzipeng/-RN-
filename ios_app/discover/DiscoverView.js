/**
 * Created by bxBx on 2018/12/27.
 */
import React,{Component} from 'react'
import {View, StyleSheet, ScrollView,Text} from 'react-native'
import DiscoverCell from './DiscoverCell'
import Friends from './Friends'
export default class DiscoverView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={{height:10}}></View>
                <DiscoverCell title='朋友圈' imageName='ff_IconShowAlbum' clickItem={()=>{
                    this.props.navigator.push({
                        title:'朋友圈',
                        component:Friends,
                        passProps:{

                        }
                    })
                }}></DiscoverCell>
                <View style={{height:15}}></View>
                <DiscoverCell title='扫一扫' imageName='ff_IconQRCode' clickItem={()=>{

                }}></DiscoverCell>
                <View style={{height:1}}></View>
                <DiscoverCell title='摇一摇' imageName='ff_IconShake' clickItem={()=>{

                }}></DiscoverCell>
                <View style={{height:15}}></View>
                <DiscoverCell title='附近的人' imageName='ff_IconLocationService' clickItem={()=>{

                }}></DiscoverCell>
                <View style={{height:15}}></View>
                <DiscoverCell title='购物' imageName='CreditCard_ShoppingBag' clickItem={()=>{

                }}></DiscoverCell>
                <View style={{height:1}} ></View>
                <DiscoverCell title='游戏' imageName='MoreGame' clickItem={()=>{

                }}></DiscoverCell>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
       container:{
           flex:1,
           backgroundColor:'#EFEFF4'
       }
    })