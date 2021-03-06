/**
 * Created by bxBx on 2018/12/27.
 */
import React,{Component} from 'react'
import {NavigatorIOS} from 'react-native'
import WechatListView from './WechatListView'
export default class WechatNavigation extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <NavigatorIOS initialRoute={{
                title:'微信',
                component:WechatListView

            }}

                          automaticallyAdjustContentInsets={false}
                          barTintColor='#282828'
                          interactivePopGestureEnabled={true}
                          titleTextColor={'white'}
                          tintColor={'white'}
                          translucent={false}
                          style={{flex:1}}
            >
            </NavigatorIOS>
        );
    }}