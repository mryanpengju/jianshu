import React from "react";
import {hashHistory} from "react-router";
import $ from "jquery";
import { Button, Radio, Icon } from 'antd';
import Quill from 'quill';  
import 'quill/dist/quill.snow.css';
import '.././sheetstyle/write.css';
export default class Write extends React.Component{
	constructor(props){
    super(props);
    this.goback=this.goback.bind(this)
    this.state = {  
      'value':'',  
    };  
    this.editor=null;  
   this.onChange = this.onChange.bind(this);
  }
	goback(){
		hashHistory.push("find")
	}
  render(){
    return (
    	<div>
    		<div className="tr-left">
	    		<div className="goback">
	    			<Button type="primary" onClick={this.goback}>
			            <Icon type="left" />返回首页
			         </Button>
	    		</div>
	    		<div className="goback">
	    			<Button type="primary" >
			            <Icon type="add" />新建文集
			         </Button>
	    		</div>
    		</div>
    		<div className="ft-center fl">
    			<h1 className="mytitle">我的文章</h1>
    		
    		</div>
	    	<div className="tr">
	    		<div ref="textarea"></div>
	    	</div>
      	</div>  
    );

  }
  onChange(){
    var receiveData = Store.getState();
    if(receiveData[0] == 'shortcut' || receiveData[0] == 'menu' || receiveData[0] == 'tag'){
      this.editor.root.innerHTML = Store.getState()[1] && Store.getState()[1].cont ? Store.getState()[1].cont:'';
      let {value}=this.state;  
      value = this.editor.root.innerHTML;  
      this.setState({value});
      
    }
    //删除笔记
    if(receiveData[0] == 'del'){
      this.editor.root.innerHTML = '';
      let {value}=this.state;  
      value = this.editor.root.innerHTML;  
      this.setState({value});
    }
  }
  componentDidMount(){
	$(".headerwrap").hide()
    //订阅
 	const textbox = this.refs.textarea;
    // 配置工具条
    const toolbarOptions = [  
     	['bold'],        // toggled buttons  
      [ 'image'],  
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'align': [] }], 
                // outdent/indent  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown  
      [{ 'color': [] }], 
      [ 'video'], 
      [{ 'indent': '-1'}, { 'indent': '+1' }]
      
    ];
    const options = {  
      debug: 'warn',  
      modules: {  
          toolbar: toolbarOptions  
      },  
      placeholder: '请输入内容...',  
      readOnly: false,  
      theme: 'snow'  
    };  

    const editor =this.editor= new Quill(textbox,options);  
    const {value}=this.state;  
    if (value) editor.clipboard.dangerouslyPasteHTML(value);  
    editor.on('text-change', this.handleChange.bind(this));  
  }
  handleChange () {  
  	let {value}=this.state;  
    value = this.editor.root.innerHTML;  
    this.setState({value});
  }  
}
