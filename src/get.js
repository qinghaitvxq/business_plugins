/**
 * Created by caipf on 2017/7/27.
 */
function get(url) {
    return new Promise(function (resolve,reject) {
        var xhr=new XMLHttpRequest();
        xhr.open('get',url);
        xhr.onreadystatechange=function (response) {
            if(xhr.readyState==4){
                if((xhr.status>=200 && xhr.status<300)||xhr.status==304){
                    var data=JSON.parse(xhr.responseText);
                    resolve(data);
                }else {
                   reject(xhr.statusText);
                }
            }
        };
        xhr.send();
    });
}
module.exports=get;