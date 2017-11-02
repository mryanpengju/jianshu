//已安装的依赖引入
import React from "react";
import ReactDOM from "react-dom" ;
import {Link,hashHistory,IndexRedirect,Router,Route} from "react-router" ;
import { Layout ,Menu,Breadcrumb,Icon,Button,Input, AutoComplete,Dropdown,message } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const Option = AutoComplete.Option;
//css样式
import 'antd/dist/antd.css'
import './sheetstyle/style.css';
import './sheetstyle/result.css';
import './sheetstyle/swiper.min.css';
//js文件
import $ from "jquery";
import Swiper from "./components/swiper-3.3.1.jquery.min.js";

//组件
import Find from "./components/find.js";
import Attention  from "./components/attention.js";
import News from "./components/news.js";
//关注下的子路由
import Jianyou from "./subject/jianyou.js";
import Caijing from "./subject/caijing.js";
//消息下的子路由
import Guanzhu from "./news/jianxin.js";
import  Like from "./news/like.js";
import Jianxin from "./news/othernews.js";
import Pinglun from "./news/pinglun.js";
import Qingqiu from "./news/qingqiu.js";
import Othernews from "./news/othernews.js";
//发现下的路由
import Detail from "./find/detail.js";

//头部的路由
import Login from "./user/login.js";
import Register from "./user/register.js";
import Write from "./user/write.js";

const active= {color:"#eb6f6e",borderBottom:"0"}
const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">打赏</Menu.Item>
    <Menu.Item key="2">登出</Menu.Item>
  </Menu>
);
const onClick = function ({key}) {
   message.info(`Click on item ${key}`);
   console.log(1)
}
function onSelect(value) {
    console.log('onSelect', value);
}
var i=0;
function renderOption(item) {
	return (
        <Option key={i++} text={item.title}>
            <a  style={{color:'#333',width:"98px"}}
                href={`https://www.douban.com/search?q=${item.title}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {item.title}
            </a>
        </Option>
    );
}


class Webapp extends React.Component{
	constructor(props){
		super(props)
		this.state = {
            dataSource: [],
            userinfo:'',
            yes:"block",
            no:"none"
        };
        
        this.timer=null;
        this.handleSearch=this.handleSearch.bind(this);
        this.login=this.login.bind(this)
        
	}
	handleSearch (value)  {
	    var _this=this;
	    var aData=null;
	    clearTimeout(this.timer);
	    this.timer=setTimeout(function () {
            $.ajax({
                type: 'get',
                dataType: 'jsonp',
                url: "https://api.douban.com/v2/book/search?q="+value,
                success: function (data) {
                    console.log(data);
                    aData=data.books;
                    if(aData){
                        _this.setState({
                            dataSource: value ? aData : [],
                        });
                    }else{
                        _this.setState({
                            dataSource: aData ? ['没有结果'] : [],
                        });
                    }

                }
            })
        },400)
	}
	
	componentwillReceiveProps(){
		
	}
	//即将进入DOM查找用户信息
	componentWillMount(){
		var str=localStorage.getItem('info');
		var strs = JSON.parse(str)
		this.setState({'userinfo':str})
	}
	//进入DOM改变状态
	componentDidMount(){
		if(this.state.userinfo == null){
			//登录显示
			$(".noShow").show();
			$(".yesshow").hide();
			console.log($(".noShow"))
		}else{
			//用户显示
			$(".yesshow").show();
			$(".noShow").hide();
		}
	}
	
	
	
	
	
	
	//自定义函数
	login(){
		hashHistory.push("login")
	}
	register(){
		hashHistory.push("register")
	}
	render(){
		const { dataSource } = this.state;
		return(
			<div>
				<div className="headerwrap">
					<div className="fl logo">
						<img src={require("./images/logo.jpg")}/>
					</div>
					<div className="header-cont fl">
						<nav>
							<ul className="header-nav">
								<li><Link to ="/find" activeStyle={active} style={{borderBottom:"0"}}>发现</Link></li>
								<li><Link to ="/attention" activeStyle={active}>关注</Link></li>
								<li><Link to ="/news" activeStyle={active}>消息</Link></li>
								<li className="search">
									<form>
										<AutoComplete
						                    className="global-search"
						                    size="large"
						                    style={{ width: '100%' }}
						                    dataSource={dataSource.map(renderOption)}
						                    onSelect={onSelect}
						                    onSearch={this.handleSearch}
						                    placeholder="搜索-请点击文字"
						                    optionLabelProp="text"
						                >
						                 <Input
						                     suffix={(
						                        <Button className="search-btn" size="large" type="primary">
						                            <Icon type="search" />
						                        </Button>
						                        )}
						                    />
						                </AutoComplete>
									</form>
								</li>
							</ul>
						</nav>
					</div>
					{/* 如果用户为登录 显示登陆*/}
					<div className="header-right fr">
						<div>
							<div className="yesshow fr" style={{display:this.state.no}}>
								<div className="fl">
									<Dropdown overlay={menu}>
									    <a className="ant-dropdown-link imgcon" href="#">
									      <div className="himg">
									      	<img src={require("./images/antuor2.jpg")}/>
									      </div>
									      <Icon type="down" className="hionic"/>
									    </a>
									</Dropdown>
									
								</div>
								<Link to='/write'>
									<div className="writediv fl">
										<Button type="dashed" icon="edit" id="write">写文章</Button>
									</div>
								</Link>
							</div>
						</div>
						<div className="noShow" style={{display:this.state.yes}}>
							<div>
								<Link to='/login'>
									<Button id="login" >登录</Button>
								</Link>	
							</div>
							<div className="regdiv">
								<Link to='/register'>
									<Button id="register" onClick={this.register}>注册</Button>
								</Link>		
							</div>
						</div>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
}
//路由
ReactDOM.render(
		<Router history={hashHistory}>
					<Route path="/" component={Webapp}>
						<IndexRedirect to="/find"/>
						{/*find*/}
						<Route path="/find" component={Find}>
						</Route>
						<Route path="/datail" component={Detail}></Route>
						{/*头部路由*/}
						<Route path="/login" component={Login}></Route>
						<Route path="/register" component={Register}></Route>
						
						<Route path="/write" component={Write}></Route>
						
						{/*attention*/}
						<Route path="/attention" component={Attention}>
							<Route path="/attention/jianyou" component={Jianyou}></Route>
							<Route path="/attention/caijing" component={Caijing}></Route>
						</Route>
						
						
						
						{/*news的路由*/}
						<Route path="/news" component={News}>
							<IndexRedirect to="/news/like"/>
							<Route path="/news/guanzhu" component={Guanzhu}></Route>
							<Route path="/news/jianxin" component={Jianxin}></Route>
							<Route path="/news/like" component={Like}></Route>
							<Route path="/news/pinglun" component={Pinglun}></Route>
							<Route path="/news/qingqiu" component={Qingqiu}></Route>
							<Route path="/news/othernews" component={Othernews}></Route>
						</Route>
					</Route>
		</Router>,document.getElementById("wrap"))