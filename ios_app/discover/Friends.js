/**
 * Created by bxBx on 2018/12/28.
 */
import React,{Component} from 'react'
import {View,FlatList, StyleSheet, Modal, TouchableOpacity, Image} from 'react-native'
import ChatListView from './ChatListView'

function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}
function loadDataSources() {
    var dataSource = new Array();
    var ImageArray  = ['1','2','3','4','5','6','7','8','9']
    var peopleArray = ['Heool kitty','YaphetS_','SF','Lion','大酒神','maybe','Burning','敌法师']
    var contentArray = ['约定今晚六点打刀塔!','Ti9比赛地址将会选择在中国上海,这是一个令人激动的时刻啊,' +
    '到时候你们会不会一起邀请小伙伴们去Ti的现场体验dota2带给我们的乐趣呢,当然会有很多的好礼物等待大家,也会' +
    '有精彩的cosplay大赛,全明星大赛,以及各种周边,详细能容请关注更多官网信息,http://www.dota2.com',
        '现在干什么呢,没事可以约黑一起玩啊','快过年啦,大家有什么心愿呢','圣诞节快乐!','悲惨的生活啊',
        '今天天气真不错!','今天日子真好啊','执政为民，不忘初心，全面从严治党，再启新局！为英明的主席点赞',
    '为英明的主席点赞','给总书记点赞！党和政府部门的干部必须牢记总书记的指示！','作风建设是攻坚战，也是持久战。牢记习主席这些话'
        ,'严惩腐败！狠抓队伍，不忘初心为民造福！为习主席英明点赞。','我衷心的相信，我们国家现在行驶在正确的方向上，向习近平致敬。']

    for(i = 0 ;i<10 ;i++){
        var map = new Map();
        map.set('image',ImageArray[randomNum(0,ImageArray.length-1)])
        map.set('title',peopleArray[randomNum(0,peopleArray.length-1)])
        map.set('content',contentArray[randomNum(0,contentArray.length-1)])
        map.set('time',randomNum(1,10)+'分钟前')
        var niceListNum = randomNum(4,peopleArray.length-1);
        var nices = new Array();

        for(let i = 0 ;i <niceListNum;i++){

            nices.push(peopleArray[i])
        }
        map.set('niceList',nices)
        var replays = new Array()
        for(let i = 0;i<randomNum(0,10);i++){
            var replay = new Map();
            replay.set('namefrom',peopleArray[randomNum(0,peopleArray.length-1)])
            replay.set('nameto',peopleArray[randomNum(0,peopleArray.length-1)])
            replay.set('content',contentArray[randomNum(0,contentArray.length-1)])
            replays.push(replay)
        }
        var contentImags = new Array()
        for (let i = 0;i<randomNum(1,ImageArray.length);i++){
            contentImags.push(ImageArray[randomNum(1,ImageArray.length-1)])
        }
        map.set('contentImages',contentImags)
        map.set('replay',replays);
        dataSource.push(map);

    }
    return dataSource;
}
export default class Friends extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        // flatList需要在数据中存在KEY ,当数据中没有时需要自己为数据添加一个KEY
        let key = 0 ;
        var datas = loadDataSources();
       
        datas.forEach(function (item) {
            item.key = key++;
        });
        return(
            <View >
                <FlatList
                    style={{marginTop:0}}
                    data = {datas}
                    renderItem = {({item})=>{
                        return <ChatListView data = {item} iconOnclick={()=>{
                            this.setState({
                                Modalshow:false
                            })
                        }}>
                        </ChatListView>
                    }}
                    ItemSeparatorComponent = {()=>{
                        return(
                            <View style={articleViewStyle.separatorLine}

                            ></View>
                        )
                    }}
                >
                </FlatList>
            </View>
        )

    }
}

let articleViewStyle = StyleSheet.create({
    separatorLine :{
        height:1,
        backgroundColor:'lightgray',
        marginLeft:10,
        opacity:0.5
    }
})