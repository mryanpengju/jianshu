//css文件
import $ from "jquery";
import React from "react";
import {hashHistory} from "react-router";
import { Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
import '.././sheetstyle/result.css';
import '.././sheetstyle/login.css';
export default class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
		}
		this.regis=this.regis.bind(this)
	}
	
	componentDidMount(){
		console.log("进入Dom")
		$(".headerwrap").hide()
	}
	regis(){
		hashHistory.push("register")
	}
	render(){
		 
		return(
			<div className="login-wrap">
				<div className="login-logo">
					<img src={require(".././images/logo2.png")}/>
				</div>
				<div className="login">
					<div className="login-title">
						<div className="login-btn fl">登录</div>
						<b className="fl dianb">.</b>
						<div className="regis-btn fl" onClick={this.regis}>注册</div>
					</div>
					<div style={{margin:"60px"}}>
						<WrappedNormalLoginForm/>
					</div>
					
				</div>
			</div>
		)
	}
}
//表单组件
class NormalLoginForm extends React.Component {
	constructor(props){
		super(props)
		this.handleSubmit=this.handleSubmit.bind(this)
		this.state={
			
		}
	}
	
	componentDidMount(){
		
		
	}
	
	handleSubmit(e){
	    e.preventDefault();
	    this.props.form.validateFields(function(err, values){
	      if (!err) {
	        /*console.log('Received values of form: ', values);*/
	        //获取数据
	        $.ajax({
			type: 'get',
			dataType:'json',
	        url:"http://datainfo.duapp.com/shopdata/userinfo.php",
	        data:{status:"login",userID:values.userName,password:values.password},
	        success:function(data){
	        	if(data == 0||data ==2){
	        		$(".login-form-forgot").show()
	        	}else{
	        		$(".login-form-forgot").hide();
	        		//存储数据
	        		var obj ={
	        			uesrname:values.userName,
	        			password:values.password
	        		}
	        		var objs = JSON.stringify(obj)
	        		localStorage.setItem("info",objs)
	        		hashHistory.push("/#/find")
	        	}
	        }
	    });
	      }
	    })
    }
	render(){
	    const { getFieldDecorator } = this.props.form;
	    return (
	      <Form onSubmit={this.handleSubmit} className="login-form">
	        <FormItem>
	          {getFieldDecorator('userName', {
	            rules: [{ required: true, message: 'Please input your username!' }],
	          })(
	            <Input prefix={<Icon type="user" style={{ fontSize: 16 }} />} placeholder="Username" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: 'Please input your Password!' }],
	          })(
	            <Input prefix={<Icon type="lock" style={{ fontSize: 16 }} />} type="password" placeholder="Password" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('remember', {
	            valuePropName: 'checked',
	            initialValue: true,
	          })(
	            <Checkbox>Remember me</Checkbox>
	          )}
	          <div className="login-form-forgot" style={{color:"#f04134",lineHeight:'30px',display:'none'}}>*账号或密码错误</div>
	          <Button type="primary" htmlType="submit" className="login-form-button">
	            	登录
	          </Button>
	        </FormItem>
	      </Form>
	    );
	  }
	}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
