/*
    Youtube Gallery
    Version: 3.4.1
    Release date: Mon Apr 27 2020

    https://elfsight.com

    Copyright (c) 2020 Elfsight, LLC. ALL RIGHTS RESERVED
*/

!function(wp,$){"use strict";let IconBlock=function(e){return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20",viewBox:"0 0 20 20",class:"dashicon"},[wp.element.createElement("path",{id:"a",d:"M15.406 2.636c1.243.845 1.734 2.543 1.734 5.96 0 3.416-.491 5.113-1.734 5.958-.99.693-3.2 1.098-6.825 1.098-2.745 0-4.796-.231-5.93-.643C.88 14.395 0 12.792 0 8.595c0-4.196.881-5.8 2.65-6.414 1.135-.411 3.186-.643 5.93-.643 3.62 0 5.837.405 6.826 1.098zM14.345 13.42c1.04-.686 1.4-2.058 1.408-4.825 0-2.766-.368-4.139-1.408-4.825-.831-.563-2.73-.888-5.764-.888-2.297 0-4.067.188-5.013.52C2.088 3.9 1.394 5.2 1.394 8.595c0 3.395.693 4.695 2.174 5.193.946.333 2.716.52 5.013.52 3.033 0 4.933-.325 5.764-.888zm4.261-7.382c.874.968 1.387 2.608 1.394 5.41 0 3.417-.773 5.114-2.015 5.959-.99.693-2.925 1.098-6.551 1.098-2.745 0-4.515-.231-5.649-.643a3.606 3.606 0 0 1-1.235-.693h6.884c3.04 0 4.658-.325 5.49-.889 1.04-.679 1.682-2.058 1.682-4.825V6.038zM11.26 9.137l-3.582 1.842c-.585.31-1.062-.036-1.062-.477V6.71c0-.578.477-.809 1.062-.477l3.582 1.842c.434.318.39.751 0 1.062z"})])};if(void 0===wp.components||void 0===wp.blocks||void 0===wp.element||void 0===wp.i18n)return!1;const{Component:Component}=window.React,{__:__}=wp.i18n,el=wp.element.createElement,registerBlockType=wp.blocks.registerBlockType,ServerSideRender=wp.components.ServerSideRender;let initTimeout;function initWidget(){clearTimeout(initTimeout),initTimeout=setTimeout(function(){const widgets=document.querySelectorAll("[data-elfsight-youtube-gallery-options]");Array.prototype.slice.call(widgets).forEach(function(widget){const options=widget.getAttribute("data-elfsight-youtube-gallery-options"),data=JSON.parse(decodeURIComponent(options));eval("yottie(widget, data)"),widget.removeAttribute("data-elfsight-youtube-gallery-options"),widget.removeAttribute("data-elfsight-youtube-gallery-version"),widget.closest(".elfsight-block-widget-container").classList.add("elfsight-block-widget-initialized")})},1500)}async function getWidgets(){const e=await $.ajax({type:"GET",url:wpApiSettings.root+"elfsight-youtube-gallery/admin/widgets/list",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",wpApiSettings.nonce)}});return e.status?[e.data,e.data.reduce(function(e,t){return e[t.id]=t,e},{})]:[]}function getWidgetId(e){let t;return e.some(function(e){return"1"===e.active&&(t=parseInt(e.id),!0)}),t}class Widget extends Component{componentDidMount(){initWidget()}componentDidUpdate(){initWidget()}render(){const{id:e}=this.props;return e?el("div",{className:"elfsight-block-widget-container"},el(ServerSideRender,{block:"elfsight-youtube-gallery/block",attributes:{id:e}}),el("div",{className:"elfsight-block-widget-placeholder"},el(IconBlock,{}),el("span",{},"Youtube Gallery"))):null}}class Button extends Component{render(){const{href:e,className:t,text:i}=this.props,o=document.location.origin+document.location.pathname.replace("post.php","admin.php")+"?page=elfsight-youtube-gallery#";return el("a",{href:o+e,target:"_blank",className:t},i)}}class WidgetSelect extends Component{constructor(){super(),this.state={widgets:[]}}setWidget(e){e.preventDefault();const{setAttributes:t}=this.props,i=e.target.querySelector("option:checked");t({id:parseInt(i.value)})}componentDidMount(){const{id:e,setAttributes:t}=this.props;getWidgets().then(i=>{const[o,s]=i;this.setState({widgets:o});const l=!(!s[e]||"1"!==s[e].active);t(!l&&s?{id:getWidgetId(o),exist:!0}:{id:e,exist:l})})}render(){const{widgets:e}=this.state,{id:t}=this.props;return e.length>0?el("div",{className:"components-base-control"},el("div",{className:"components-base-control__field"},el("select",{className:"components-select-control__input",id:"elfsight-youtube-gallery-block-control-id",value:t,onChange:this.setWidget.bind(this)},e.map(({id:e,name:t})=>el("option",{value:e},t))))):null}}registerBlockType("elfsight-youtube-gallery/block",{title:"Youtube Gallery",description:"Increase visitor engagement with stylish YouTube video gallery on your website",icon:{src:IconBlock},category:"widgets",keywords:["Youtube Gallery","Elfsight"],supports:{html:!1},attributes:{id:{type:"number"},exist:{type:"bool",default:!1}},edit:function(e){const{attributes:{id:t,exist:i},setAttributes:o}=e;return getWidgets().then(e=>{const[s,l]=e;o(!i&&s?{id:getWidgetId(s),exist:!0}:{id:t,exist:i})}),el(wp.element.Fragment,{},el(wp.editor.InspectorControls,{},el(wp.components.PanelBody,{className:"elfsight-block-panel",title:"Select widget"},el(WidgetSelect,{id:t,setAttributes:function(t){e.setAttributes(t)}}),i?el("div",{className:"elfsight-block-panel-group"},el(Button,{href:"/edit-widget/"+t,className:"components-button is-button is-default is-large elfsight-block-panel-button",text:__("Edit Widget")}),el(Button,{href:"/add-widget/",className:"elfsight-block-panel-link",text:__("Create new widget")})):el("div",{className:"elfsight-block-panel-group"},el("span",{},__("No widgets yet")),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-panel-button",text:__("Create Widget")})))),i?el(Widget,{id:t,exist:i}):null,i?null:el("div",{className:"elfsight-block-form"},el("div",{className:"elfsight-block-form-header"},el(IconBlock,{}),el("span",{},"Youtube Gallery")),el("div",{className:"elfsight-block-form-text"},__("Increase visitor engagement with stylish YouTube video gallery on your website"),el("br"),el("strong",{},__("Let's create your first widget!"))),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-form-button",text:__("Create Widget")})))},save:function(){return null}})}(wp,jQuery);