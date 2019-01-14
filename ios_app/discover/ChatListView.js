/**
 * Created by bxBx on 2018/12/29.
 */
import React,{Component} from 'react'
import {View, Image, Text, TouchableOpacity, Animated, Easing,Button, Dimensions, Modal, TouchableWithoutFeedback} from 'react-native'
var scrWidth = Dimensions.get('window').width;
var iconMargin = 10;
export default class ChatListView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showView:false,
            showLoadMore:true,
            numberLines :3,
            showLoadTitle:'全文',
        }
    }
    render(){
        return(

            <View style={{flexDirection:'row',margin:10,marginTop:5}}>

                <View style={{marginLeft:0,flex:1}}>
                    <Image source={{uri:this.props.data.get('image')}} style={{width: 38,height: 38}}></Image>
                </View>
                <View style={{marginLeft:10,marginRight:10,flex:7}}>
                    <Text style={{fontSize:15,color:'mediumpurple'}}>{this.props.data.get('title')}</Text>
                    <Text style={{marginTop:8,fontSize:15}}
                          numberOfLines={this.state.numberLines}
                          onLayout={({
                                nativeEvent:{
                                    layout:{x,y,width, height}}})=>{
                                    if(height>=45){
                                        this.setState({
                                            showLoadMore:true
                                        })
                                    }else {
                                        this.setState({
                                            showLoadMore:false
                                        })
                                    }
                          }}
                          >{this.props.data.get('content')}</Text>
                    {
                        this.state.showLoadMore == true ? (
                            <TouchableOpacity onPress={()=>{
                                if(this.state.showLoadTitle === '全文'){
                                    this.setState({
                                        showLoadMore:true,
                                        numberLines:100,
                                        showLoadTitle:'收起'
                                    })
                                }else {
                                    this.setState({
                                        showLoadMore:true,
                                        numberLines:3,
                                        showLoadTitle:'全文'
                                    })
                                }

                            }}>
                                <Text style={{fontSize:14,color:'blue',marginTop:5}}>{this.state.showLoadTitle}</Text>
                            </TouchableOpacity>
                        ):null
                    }
                    <View>
                    <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:10}}>
                        {this.renderAllContentImages(this.props.data.get('contentImages'))}
                    </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
                        <Text style={{color:'grey'}}>{this.props.data.get('time')}</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                            {
                                this.state.showView == true?( <Animated.View style={{flexDirection:'row',backgroundColor:'#454A4C',width:151,height:35,alignItems:'center',borderRadius:5}}>
                                    <TouchableOpacity>
                                        <View style={{width:75,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                            <Image source={{uri:'AlbumLike',width:20,height:20}}></Image>
                                            <Text style={{color:'white',marginLeft:3}}>赞</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{width:1,height:15,backgroundColor:'white'}}></View>
                                    <TouchableOpacity >
                                        <View style={{width:75}}>
                                            <View style={{width:55,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                                <View style={{width:18}}></View>
                                                <Image source={{uri:'AlbumComment',width:15,height:20}}></Image>
                                                <Text style={{color:'white',marginLeft:3}}>评论</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Animated.View>):null
                            }

                            <TouchableOpacity onPress={()=>{
                                if(this.state.showView == true){
                                    this.setState({
                                        showView : false
                                    })
                                }else {
                                    this.setState({
                                        showView : true
                                    })
                                }

                            }}><Image source={{uri:'AlbumOperateMore'}}
                                                     style={{width:25,height:20,marginTop:7}}>

                            </Image></TouchableOpacity>
                        </View>

                    </View>
                    <View style={{marginTop:8,backgroundColor:'#E6E6E6'}}>
                        <View style={{margin:10}}>
                            <View style={{borderBottomColor:'#D9D9D9',
                                borderBottomWidth:1,margin:3}}>
                                {

                                    <Text style={{marginBottom:3}}>{this.props.data.get('niceList').join(',')}</Text>
                                }

                            </View>

                            <View>
                                {this.renderAllChatItem(this.props.data.get('replay'))}
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        )

    }
    renderAllChatItem = (chatLists)=>{
        var chatListView =[];
        for(var i = 0;i<chatLists.length;i++){
            let chat = chatLists[i];
            chatListView.push(
                <ChatItem nameFrom={chat.get('namefrom')} nameTo={chat.get('nameto')}
                          content={chat.get('content')} ></ChatItem>
            )
        }
        return chatListView;
    }
    renderAllContentImages = (contentImages) =>{
        var imageContents = [];
        for(let i= 0;i<contentImages.length;i++){
            let image = contentImages[i];
            imageContents.push(
                <TouchableWithoutFeedback onPress={this.props.iconOnclick}>
                    <Image source={{uri:image}} style={{width: (scrWidth-iconMargin*4-10)/3,height:
                     (scrWidth-iconMargin*4)/3,margin:2.5}}></Image>
                </TouchableWithoutFeedback>
            )
        }
        return imageContents
    }
}
class ChatItem extends Component{
    render(){
        return(
            <View style={{flexDirection:'row',margin:2}}>
                <Text>
                    <Text style={{color:'#6991C3'}}>{this.props.nameFrom}</Text>
                    <Text>回复</Text>
                    <Text style={{color:'#6991C3'}}>{this.props.nameTo}</Text>
                    <Text style={{color:'#6991C3'}}>:</Text>
                    <Text>{this.props.content}</Text>
                </Text>
            </View>
        )
    }
}