/**
 * Created by bxBx on 2018/12/27.
 */
import React ,{Component} from 'react'
import {TabBarIOS,View,Text} from 'react-native'
import WechatNavigation from './/wechat/WechatNavigation'
import DiscoverNavigation from './/discover/DiscoverNavigation'
import MeNavigation from './/me/MeNavigation'
import ConnectNavigation from './/connect/ConnectNavigation'
export default class TabbarView extends Component{
    constructor(props){
        super(props)
        this.state={
            itemWechatSelected:true,
            itemContactSelected:false,
            itemDiscoverSelected:false,
            itemMeSelected:false
        }
    }
    render(){
        return(
            <TabBarIOS
                translucent={false}
                unselectedTintColor={'#AAAAAA'}
                tintColor={'#22BF0A'}
                unselectedItemTintColor={'#AAAAAA'}>

                <TabBarIOS.Item
                    selected={this.state.itemWechatSelected}
                    title="微信"
                    badge={'22'}
                    icon= {{uri:'tabbar_mainframe',scale:2}}
                    selectedIcon={{uri:'tabbar_mainframeHL',scale:2}}
                    onPress={()=>{
                        this.setState({
                            itemWechatSelected:true,
                            itemContactSelected:false,
                            itemDiscoverSelected:false,
                            itemMeSelected:false
                        })
                    }}>
                    <WechatNavigation></WechatNavigation>

                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.itemContactSelected}
                    title="通讯录"
                    icon= {{uri:'tabbar_contacts',scale:2}}
                    selectedIcon={{uri:'tabbar_contactsHL',scale:2}}
                    onPress={()=>{
                        this.setState({
                            itemWechatSelected:false,
                            itemContactSelected:true,
                            itemDiscoverSelected:false,
                            itemMeSelected:false
                        })
                    }}>
                    {/*<ConnectNavigation></ConnectNavigation>*/}
                    <View><Text>11</Text></View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.itemDiscoverSelected}
                    title="发现"
                    badge={'2'}
                    icon= {{uri:'tabbar_discover',scale:2}}
                    selectedIcon={{uri:'tabbar_discoverHL',scale:2}}
                    onPress={()=>{
                        this.setState({
                            itemWechatSelected:false,
                            itemContactSelected:false,
                            itemDiscoverSelected:true,
                            itemMeSelected:false
                        })
                    }}>
                    <DiscoverNavigation></DiscoverNavigation>

                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.itemMeSelected}
                    title="我"
                    icon= {{uri:'tabbar_me',scale:2}}
                    selectedIcon={{uri:'tabbar_meHL',scale:2}}
                    onPress={()=>{
                        this.setState({
                            itemWechatSelected:false,
                            itemContactSelected:false,
                            itemDiscoverSelected:false,
                            itemMeSelected:true
                        })
                    }}>
                    {/*<MeNavigation></MeNavigation>*/}
                    <View><Text>11</Text></View>
                </TabBarIOS.Item>

            </TabBarIOS>
        )
    }
}