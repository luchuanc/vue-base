//初始化配置操作根据生产环境还是线上环境
import axios from 'axios'
const ajax=function(url,data,callback,errorcallback){
	let BASE_URL="";
	if(process.env.NODE_ENV==='development'){
	  BASE_URL='http://localhost:8083/mock/'
	}else{
	   BASE_URL='http://dev.sentree.com.cn/mts-kmz/kmz-nsc/'
	}
	url = BASE_URL + url;
	axios.get(url,data)
	  .then(function (response) {
	  	if(response.status==200){
	  		callback && callback(response.data);
	  	}else{
	  		errorcallback && errorcallback(response.data);
	  	}
	    
	  })
	  .catch(function (error) {
	    errorcallback && errorcallback(response.data);
	  });
}
const Api={
	login(data,callback,errorcallback){
		ajax("login.json",data,callback,errorcallback)
	}
}
export default Api;