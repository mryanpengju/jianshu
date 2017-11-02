import React from "react";
import $ from "jquery";
import {Link,hashHistory} from "react-router";
import Swiper from ".././components/swiper-3.3.1.jquery.min.js";
import { Row, Col ,Icon,BackTop} from 'antd';
import Data from ".././data/read.json";


//css文件
import '.././sheetstyle/result.css';
import '.././sheetstyle/find.css';
import '.././sheetstyle/swiper.min.css';
//js文件

//html文件
//轮播插件
export default class Find extends React.Component{
	constructor(props){
		super(props)
		//事件this指向
		this.skip=this.skip.bind(this)
		this.more=this.more.bind(this)
		this.state={
			wenzhangarr:[],
			i:3
		}
	}
	//即将进入DOM
	componentWillMount(){
		this.setState({wenzhangarr:Data.arr})
	}
	//组件即将接受新值
	componentWillReceiveProps(a){ 
		
	}
	//进入DOM用来写ajax函数
	componentDidMount(){
		$(".headerwrap").show()
		var mySwiper = new Swiper('.swiper-container', {
        			direction: 'horizontal',
        			loop: true,
        			speed:300,
					autoplayDisableOnInteraction : true,
					paginationClickable:true,
        			// 如果需要分页器
        			pagination: '.swiper-pagination',
					// 如果需要前进后退按钮
        			nextButton: '.swiper-button-next',
        			prevButton: '.swiper-button-prev',
		})
		//获取所有连接
		var taps = $(".subject-class");
		for(var i =0;i>taps.length;i++){
			taps[i].bind("click",function(){
				console.log(1)
			})
		}
		//文章渲染
}
	//自定义函数
	//点击跳转事件
	skip(){
		hashHistory.push("datail")
	}
	//加载更多
	more(){
		this.setState({i:this.state.i+1})
	}
	
	render(){
		var jsx =[];
		for(var i=0;i<this.state.i;i++){
			jsx.push(
				<li key={i}>
					 <Row>
					    {/*文章左边*/}
					    <Col span={17} className="none-li-left">
					      	<Row>
					      		<a href="#">
						      		<Col span={2} className="headerimg">
						      				<img src={this.state.wenzhangarr[i].headimg}/>
						      		</Col>
								    <Col span={4} id="antuor-username">{this.state.wenzhangarr[i].user}</Col>
							      		</a>
		      								<Col span={3}>
		      									<span id="showtime">{this.state.wenzhangarr[i].time}</span>
		      								</Col>
		      								<Col span={16}></Col>
		      								</Row>
							      			<Row>
							      			<Col span={2}>
							      			</Col>
							      			<Col span={22} className="title">
							      				<Link to='/datail'>
							      					<h2 style={{fontWeight:"900"}}>{this.state.wenzhangarr[i].title}</h2>
							      				</Link>
							      			</Col>
							    </Row>
								<Row>
									<Col span={24} className="content">
     								{this.state.wenzhangarr[i].cont}
   									</Col>
							    </Row>
							    <Row>
							      	<Col span={5}>
							      		<a href="#" className="classauto">
							      			<span>{this.state.wenzhangarr[i].class}</span>
							      		</a>
							      	</Col>
		      						<Col span={3}><Icon type="eye-o"/><span>{this.state.wenzhangarr[i].kan}</span></Col>
		      						<Col span={3}><Icon type="message"/><span>{this.state.wenzhangarr[i].liu}</span></Col>
		      						<Col span={3}><Icon type="like-o"/><span>{this.state.wenzhangarr[i].zan}</span></Col>
		      						<Col span={10}></Col>
							    </Row>
					      	</Col>
					      	{/*文章右边*/}
					    <Col span={6} offset={1}>
					      	<div className="noteimg">
					      		<img src={this.state.wenzhangarr[i].simg}/>
					      	</div>
					    </Col>
					</Row>
				</li>
			)
		}
return(
			<div className="child">
				<div className="gotop">
					<div>
					    <BackTop>
					      <div className="ant-back-top-inner"><Icon type="up" /></div>
					    </BackTop>
					</div>
				</div>
			
				<div className="listwrap">
					{/*轮播*/}
						<div className="autoplay">
							<div className="box">
								<div className="box1">
									<div className="swiper-container">
							    		<div className="swiper-wrapper">
									        <div className="swiper-slide"><img src={require("../imgs/big1.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big2.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big3.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big4.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big5.jpg")}/></div>
									       
									        <div className="swiper-slide"><img src={require("../imgs/big7.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big8.jpg")}/></div>
									     </div>
											     
									    <div className="swiper-button-prev swiper-button-white"></div>
									    
									 </div>
								</div>
								<div className="box2">
									<div className="swiper-container">
							    		<div className="swiper-wrapper">
							    			<div className="swiper-slide"><img src={require("../imgs/big4.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big5.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big7.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big8.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big1.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big2.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big3.jpg")}/></div>
									      </div>
									 </div>
								</div>
								<div className="box3">
									<div className="swiper-container swiper-container2">
							    		<div className="swiper-wrapper">
									        <div className="swiper-slide"><img src={require("../imgs/big2.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big3.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big4.jpg")}/></div>
									       
									        <div className="swiper-slide"><img src={require("../imgs/big8.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big7.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big1.jpg")}/></div>
									        <div className="swiper-slide"><img src={require("../imgs/big5.jpg")}/></div>
									        
									     </div>
									   
									 </div>
									 <div className="swiper-button-next right swiper-button-white"></div>
								</div>
							</div>
					</div>
					<div className="kong1"></div>
					<div className="cont">
						<Row>
					      <Col span={16}>
					      	<div className="subject">
					      		<a href="javescript:;" className="subject-class fl" onClick={this.skip}>
					      			<div className="subjectimg fl" >
					      				<img src={require("../images/sub1.jpg")}/>
					      			</div>
					      			<div className="subjectspan fl">摄影</div>
					      		</a>
					      		<a href="javescript:;" className="subject-class fl" onClick={this.skip}>
					      			<div className="subjectimg fl">
					      				<img src={require("../images/sub2.jpg")}/>
					      			</div>
					      			<div className="subjectspan fl">谈谈情,说说爱</div>
					      		</a>
					      		<a href="javescript:;" className="subject-class fl" onClick={this.skip}>
					      			<div className="subjectimg fl">
					      				<img src={require("../images/sub3.jpg")}/>
					      			</div>
					      			<div className="subjectspan fl">短篇小说</div>
					      		</a>
					      		<a href="javescript:;" className="subject-class fl" onClick={this.skip}>
					      			<div className="subjectimg fl">
					      				<img src={require("../images/sub6.jpg")}/>
					      			</div>
					      			<div className="subjectspan fl">简书交友</div>
					      		</a>
					      		<a href="javescript:;" className="subject-class fl" onClick={this.skip}>
					      			<div className="subjectimg fl">
					      				<img src={require("../images/sub5.jpg")}/>
					      			</div>
					      			<div className="subjectspan fl">散文</div>
					      		</a>
					      		<a href="javescript:;" className="subject-class fl" onClick={this.skip}>
					      			<div className="subjectimg fl">
					      				<img src={require("../images/sub4.jpg")}/>
					      			</div>
					      			<div className="subjectspan fl">短篇小说</div>
					      		</a>
					      		<a href="javescript:;" className="subject-class fl" onClick={this.skip}>
					      			<div className="subjectimg fl">
					      				<img src={require("../images/sub3.jpg")}/>
					      			</div>
					      			<div className="subjectspan fl">简书交友</div>
					      		</a>
					      		<a href="javescript:;" className="subject-class fl" onClick={this.skip}>
					      			<div className="subjectimg fl">
					      				<img src={require("../images/sub2.jpg")}/>
					      			</div>
					      			<div className="subjectspan fl">散文</div>
					      		</a>
					      		<a href="javescript:;" id="moresub" className="fl" onClick={this.skip}>更多专题   ></a>
					      	</div>
					      	<div className="find-cont">
					      		<ul className="note-list">
					      			
					      			{jsx}
					      		</ul>
					      		<button className="more" id="more" onClick={this.more}>加载更多</button>
					      	</div>
					      </Col>
					      {/*文章列表右边结束*/}
					       {/*文章列表左边开始*/}
					      <Col span={6} offset={2}>
					      		<Row>
					      			<Col span={24}>
					      				<a href="#" className="board">
					      					<img src={require("../images/board1.png")}/>
					      				</a>
					      			</Col>
					      			<Col span={24}>
					      				<a href="#" className="board">
					      					<img src={require("../images/board2.png")}/>
					      				</a></Col>
					      			<Col span={24}>
					      				<a href="#" className="board">
					      					<img src={require("../images/board3.png")}/>
					      				</a>
					      			</Col>
					      			<Col span={24}>
					      				<a href="#" className="board">
					      					<img src={require("../images/board4.png")}/>
					      				</a>
					      			</Col>
					      			<Col span={24}>
					      				<a href="#" className="board">
					      					<img src={require("../images/board5.png")}/>
					      				</a>
					      			</Col>
					      			<Col span={24} className="myapp">
					      				<img src={require("../images/QR.jpg")}/>
					      				<div className="bigQR">
					      					<img src={require("../images/QRbig.png")}/>
					      					<div className="sanjiao"></div>
					      				</div>
					      			</Col>
					      			<Col span={24} className="day">
					      				<h4 className="fl">简书日报</h4>
					      				<a href="#" className="fr">查看往期</a>
					      			</Col>
					      			<Col span={24} className="day1">
					      				<img src={require("../images/day1.jpg")} className="fl day-img"/>
					      				<div className="day-title">
					      					简影喵008——为什么女生看偶像剧，喜欢男二多过男主？
					      				</div>
					      			</Col>
					      			<Col span={24}>
					      				<img src={require("../images/day1.jpg")} className="fl day-img"/>
					      				<div className="day-title">
					      					简影喵008——为什么女生看偶像剧，喜欢男二多过男主？
					      				</div>
					      			</Col>
					      			<Col span={24} className="antureer">
					      				<h4 className="fl">推荐作者</h4>
					      				<div className="fr huan">
					      					<Icon type="reload"/><span>换一批</span>
					      				</div>
					      			</Col>
					      			<Col span={24}>
					      				<div className="Recommend fl">
					      					<img src={require("../images/sub1.jpg")}/>
					      				</div>
					      				<div className="fl a-name">
					      					念远怀人
      									</div>
      									<div className="concern fr">
      										<Icon type="plus"/><span>关注</span>
      									</div>
					      			
					      			</Col>
					      			<Col span={24}>
					      				<div className="Recommend fl">
					      					<img src={require("../images/sub1.jpg")}/>
					      				</div>
					      				<div className="fl a-name">
					      					念远怀人
      									</div>
      									<div className="concern fr">
      										<Icon type="plus"/><span>关注</span>
      									</div>
					      			</Col>
					      			<Col span={24}>
					      				<div className="Recommend fl">
					      					<img src={require("../images/sub1.jpg")}/>
					      				</div>
					      				<div className="fl a-name">
					      					念远怀人
      									</div>
      									<div className="concern fr">
      										<Icon type="plus"/><span>关注</span>
      									</div>
					      			</Col>
					      			<Col span={24}>
					      				<div className="Recommend fl">
					      					<img src={require("../images/sub1.jpg")}/>
					      				</div>
					      				<div className="fl a-name">
					      					念远怀人
      									</div>
      									<div className="concern fr">
      										<Icon type="plus"/><span>关注</span>
      									</div>
					      			</Col>
					      			<Col span={24} className="allc">
					      				<a href="#" className="all">
					      				查看全部  >
					      				</a>
					      			</Col>
					      		</Row>
					      </Col>
					    </Row>
				    </div>
				</div>
			</div>
		)
	}
}