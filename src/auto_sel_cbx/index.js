/**
 * Created by caipf on 2017/7/13.
 */
console.log("this is auto_sel_cbxdd js");
var getMethod=require('../get.js');

//发起ajax请求数据
// getMethod('/data/auto_sel_cbx.json').then(function (data) {
//     console.log('test get method');
//     console.log(data);
// });
(function ($) {
    function AutoSelCbx(target,options) {
            this.data=[];
            this.ctlDataGetUrl=options.ctlDataGetUrl;
            this.target=target;
    };
    AutoSelCbx.prototype={

        _initHtml:function (target) {
            var _this=this;
           getMethod(this.ctlDataGetUrl)
               .then(function (data) {

                   var selData=data.roomType,
                       facility=data.facility,
                       rfConfig=data.rfconfig;
                  _this._initSelectOptions(selData);

               });
       },
        _initSelectOptions:function (list) {
            var _this=this;
            var options=[];
            list.forEach(function (data) {
              var opt=new Option(data.name,data.id);
                _this.target.appendChild(opt);
            });

        },
        _initFacility:function (facility) {
            // "facility":[
            //     {"id":"1","fName":"bedWidth","fDes":"床宽","value":[1.5,1.8,2]},
            //     {"id":"2","fName":"hasWin","fDes":"是否有窗","value":[0,1]},
            //     {"id":"3","fName":"bedNum","fDes":"床数","value":[1,2,3]}
            // ],
        }
    };

    $.fn.auto_sel_cbx=function (options) {
        return this.each(function () {
           let asc=new AutoSelCbx(this,options);
           asc._initHtml(this);

        });
    }
})(jQuery);


// (function () {
//
// })(jQuery);
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
