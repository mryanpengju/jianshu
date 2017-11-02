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



export default class Attention extends React.Component{
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
					    <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: "160px",background:"#fff"}}>
					      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{background:"#fff"}}>
					        <Menu.Item key="100" style={{height:'65px',borderBottom:"1px solid #ddd"}}>
					          <span className="nav-text">全部关注</span>
					          <Icon type="down" />
					        </Menu.Item>
					        {/*专题*/}
					        <Menu.Item key="1">
						        	<Icon type="user" />
						        	<span className="nav-text">简友圈</span>
						        	<Link to ="/attention/jianyou">
						          	</Link>
						    </Menu.Item>
					        <Menu.Item key="2">
					          <Icon type="video-camera" />
					          <span className="nav-text">财经·投资·理财</span>
					          	<Link to ="/attention/caijing">
						          	</Link>
					        </Menu.Item>
					        
					        <Menu.Item key="3">
					          <Icon type="upload" />
					          <span className="nav-text">@IT·互联网</span>
					        </Menu.Item>
					        <Menu.Item key="4">
					          <Icon type="bar-chart" />
					          <span className="nav-text">创业</span>
					        </Menu.Item>
					        <Menu.Item key="5">
					          <Icon type="cloud-o" />
					          <span className="nav-text">设计</span>
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