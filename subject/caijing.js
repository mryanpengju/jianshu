import React from "react";
import { Row, Col, Button ,Icon} from 'antd';
import '../sheetstyle/subject.css';
import '../sheetstyle/result.css';
export default class Caijing extends React.Component {
	constructor(props) {
		super(props)
	}
	//组件即将接受新值
	componentWillReceiveProps(a) {

	}
	//进入DOM 用来写ajax函数
	componentDidMount() {

	}
	render() {
		return(
			<div>
				<div className="main-top">
					<Row className="main-title">
						<Col span={3} className="main-title-img">
							<img src={require("../images/caijing1.jpg")}/>
						</Col>
						<Col span={8} offset={1}>
							<h2 style={{fontWeight:"900",marginBottom:"20px"}}>财经·投资·理财</h2>
							<a href="#">简书收录</a>,点击查看简书专题
						</Col>
						<Col span={3} offset={1}>
							 <Button type="danger" className="main-btn">投稿</Button>
						</Col>
						<Col span={4}>
							<Button type="danger">返回主页</Button>
						</Col>
					</Row>
					<div className="main-content">
					<Row className="main-cont">
						<Col span={3} className="mc-img">
							<img src={require("../images/touxiang1.jpg")}/>
						</Col>
						<Col span={2} offset={1} style={{lineHeight:"33px"}}>MC玲儿</Col>
						<Col span={3} style={{lineHeight:"33px",color:"#ddd"}}>1小时前</Col>
						<Col span={13}></Col>
					</Row>
					<Row>
						<Col span={12}>
							<h3 style={{fontWeight:900,fontSize:"20px"}}>微商怎么做好市场定位</h3>
						</Col> 
					</Row>
					<Row style={{width:"627px",marginTop:"10px",lineHeight:"27px"}}>
						有一个关键词被我频繁的使用，这个关键词就是“目标人群”。很多小伙伴会问：究竟什么样的人才是目标人群呢？ 玲儿认为目标人群应该满足三个要素：需求力、购买力和决策力。 一、需求力...
					</Row>
					<Row style={{margin:"10px auto"}}>
						<Col span={2}><Icon type="eye-o"/><span>988</span></Col>
		      			<Col span={2}><Icon type="message"/><span>111</span></Col>
		      			<Col span={2}><Icon type="like"/><span>223</span></Col>
		      			<Col span={18}></Col>
					</Row>
					</div>
				</div>
			</div>
		)
	}
}