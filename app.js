/**
 * Created by caipf on 2017/7/13.
 */
require("./css/style.css");
var $=jQuery=require('jquery');
let bsPlugins=require('./src/index');
//init select


$("#roomType_sel").auto_sel_cbx({
    "ctlDataGetUrl":"/data/auto_sel_cbx.json"
});
$(".imglist").myLazyLoad();

// let ctlconfigdata=[
//     {
//         "roomTp":"1",
//         "configData":{
//             "bedWidth":"1.5",
//             "hasWin":"0",
//             "bedNum":"2"
//         }
//     },{
//         "roomTp":"2",
//         "configData":{
//             "bedWidth":"1.8",
//             "hasWin":"1",
//             "bedNum":"2"
//         }
//     },{
//         "roomTp":"3",
//         "configData":{
//             "bedWidth":"2",
//             "hasWin":"0",
//             "bedNum":"3"
//         }
//     }, {
//         "roomTp":"4",
//         "configData":{
//             "bedWidth":"1.8",
//             "hasWin":"0",
//             "bedNum":"2"
//         }
//     },{
//         "roomTp":"5",
//         "configData":{
//             "bedWidth":"1.5",
//             "hasWin":"0",
//             "bedNum":"2"
//         }
//     }
// ];
//
// $(".select_ctl").change(function () {
//     //clear all options
//     $(".autofill_sel_cbx").find(":checked").attr("checked",false);
//     let rt=this.value;
//     for(let i=0;i<ctlconfigdata.length;i++){
//         let item=ctlconfigdata[i];
//         if(rt==item.roomTp){
//             let bedWidth=item.configData.bedWidth,
//                 hasWin=item.configData.hasWin,
//                 bedNum=item.configData.bedNum;
//             $(".autofill_sel_cbx").find(`.bedWidth`).find(`input[value='${bedWidth}']`).attr("checked",true);
//             $(".autofill_sel_cbx").find(`.hasWin`).find(`input[value='${hasWin}']`).attr("checked",true);
//             $(".autofill_sel_cbx").find(`.bedNum`).find(`input[value='${bedNum}']`).attr("checked",true);
//
//             break;
//         }
//     }
// });
