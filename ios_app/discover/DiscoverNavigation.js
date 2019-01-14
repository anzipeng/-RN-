/**
 * Created by bxBx on 2018/12/27.
 */
import React,{Component} from 'react'
import {NavigatorIOS}  from 'react-native'
import DiscoverView from './DiscoverView'
export default class DiscoverNavigation extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (

            <NavigatorIOS initialRoute={{
                component:DiscoverView,
                title:'发现',

            }}

                          automaticallyAdjustContentInsets={false}
                          barTintColor='#282828'
                          interactivePopGestureEnabled={true}
                          titleTextColor={'white'}
                          tintColor={'white'}
                          translucent={false}
                          style={{flex:1,height:64}}
            >
            </NavigatorIOS>
        )
    }
}