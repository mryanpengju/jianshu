import React from "react";
import { Row, Col , Menu , Dropdown, Icon , Layout} from 'antd';
import {Link} from "react-router" ;
const { Header, Content, Footer, Sider } = Layout;
//css文件
import '.././sheetstyle/result.css';
import '.././sheetstyle/attention.css';
//下拉菜单
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="javescript:;">全部关注</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="javescript">只看作者</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="javescript">只看专题</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="javescript">只看文集</a>
    </Menu.Item>
    <Menu.Item key="4">
      <a href="javescript">只看推送更新</a>
    </Menu.Item>
  </Menu>
);



export default class News extends React.Component{
	constructor(props){
		super(props)
	}
	
	//组件即将接受新值
	componentWillReceiveProps(a){
		
	}
	//进入DOM 用来写ajax函数
	componentDidMount(){
		
	}
	render(){
		return(
			<div className="child">
				<div className="attionwrap">
					<Layout className="layout">
					    <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: "160px",background:"#fff",marginTop:'32px'}}>
					      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{background:"#fff"}}>
					        <Menu.Item key="1">
						        	<Icon type="message" style={{color:"#ea6f5a",fontSize:'20px'}}/>
						        	<span className="nav-text">评论</span>
						        	<Link to="/news/pinglun"></Link>
						    </Menu.Item>
					        <Menu.Item key="2">
					          <Icon type="phone" style={{color:"#ea6f5a",fontSize:'20px'}}/>
					          <span className="nav-text">简信</span>
					          <Link to="/news/jianxin"></Link>
					        </Menu.Item>
					        <Menu.Item key="3">
					          <Icon type="upload" style={{color:"#ea6f5a",fontSize:'20px'}}/>
					          <span className="nav-text">投稿请求</span>
					          <Link to="/news/qingqiu"></Link>
					        </Menu.Item>
					        <Menu.Item key="4">
					          <Icon type="like-o" style={{color:"#ea6f5a",fontSize:'20px'}}/>
					          <span className="nav-text">喜欢和赞</span>
					          <Link to="/news/like"></Link>
					        </Menu.Item>
					        <Menu.Item key="5">
					          <Icon type="heart-o" style={{color:"#ea6f5a",fontSize:'20px'}}/>
					          <span className="nav-text">关注</span>
					          <Link to="/news/guanzhu"></Link>
					        </Menu.Item>
					        <Menu.Item key="6">
					          <Icon type="bell" style={{color:"#ea6f5a",fontSize:'20px'}}/>
					          <span className="nav-text">其他消息</span>
					        	<Link to="/news/othernews"></Link>
					        </Menu.Item>
					          
					      </Menu>
					    </Sider>
					    <Layout style={{ marginLeft: 200 ,background:"#fff"}}>
					    <Content style={{ overflow: 'initial',background:'#fff' ,marginLeft:'200px',marginTop:"28px",width:"627px"}}>
					      	{this.props.children}
					      </Content>
					    </Layout>
					</Layout>
				</div>
			</div>
		)
	}
}