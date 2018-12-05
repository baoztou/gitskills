var ajax = {
    createXHR:function(){
        if(typeof XMLHttpRequest !="undefined"){
            return new XMLHttpRequest();
        }else if(typeof ActiveXObject !="undefined"){
            var version = ['MSXML2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP.6.0','MSXML2.XMLHTTP'];
            for(var i = 0;i<version.length; i++){
                try{
                    return new ActiveXObject(version[i])
                }
                catch(e){
                    // throw new Error('您的浏览器不支持AJAX对象')
                }
            }
        }else{
            throw new Error('您的浏览器不支持AJAX对象')
        }
    },
    request:function(obj){
        var _this = this;
        var xhr = this.createXHR();
        obj.url = obj.url+"?rand="+Math.random();
        obj.data = this.formData(obj.data)

        if(obj.method === 'get'){
           obj.url = obj.url+"&"+obj.data;
        } 
        xhr.open(obj.method,obj.url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    // console.log(this)
                    obj.success(xhr.responseText)  //回调
                 }  
            }
        }
        if(obj.method === 'post'){
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(obj.data)
         }else{
            xhr.send(null)
         }
    },
    formData:function(data){
        var dataArr = [];
        for(var i in data){
            dataArr.push(encodeURIComponent(i)+'='+encodeURIComponent(data[i]));
        }
        return dataArr.join('&')
    }
}
