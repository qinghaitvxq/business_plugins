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
    function AutoSelCbx(target,settings) {
            this.data=[];
            this.ctlDataGetUrl=settings.ctlDataGetUrl;
            this.target=target;
            this.settings=settings;
    };
    AutoSelCbx.prototype={
        init:function(){
            this._initHtml();
        },

        _initHtml:function () {
            var _this=this;
           getMethod(this.ctlDataGetUrl)
               .then(function (data) {

                   var selData=data.roomType,
                       facility=data.facility,
                       rfConfig=data.rfconfig;
                  _this._initSelectOptions(selData);
                  _this._initFacility(facility);
                  _this._eventBind(rfConfig);

               });
           return this;
       },
        _initSelectOptions:function (list) {
            var options=[];
            list.forEach( (data)=> {
              var opt=new Option(data.name,data.id);
                this.target.appendChild(opt);
            });

        },
        _initFacility:function (facility) {

            if(!Array.isArray(facility) || facility.length==0) return;

            var facilityHtml=$("<div class='checkInfo'></div>");
            $.each(facility,(i,item)=>{
                var div_e=$(`<div class="${item.fName}"></div>`);
                var span_e=$(`<span>${item.fDes}</span>`);
                var ul_e=$(`<ul></ul>`);
                var li_e="";
                $.each(item.value,(j,item)=>{
                    li_e+=`<li>
                             <input value="${item}" type="checkbox">${item}</li>`;

                });
                ul_e.append(li_e);
                div_e.append(span_e).append(ul_e);
                facilityHtml.append(div_e);
            });
            $(this.target).parent().parent().append(facilityHtml);
        },
        _eventBind:function (rgConfig) {
            // "rfconfig":[
            //     {"rId":"1","fId":"1","fValue":"1.5"},
            //     {"rId":"1","fId":"2","fValue":"0"},
            //     {"rId":"1","fId":"3","fValue":"2"},
            //
            //     {"rId":"2","fId":"1","fValue":"2"},
            //     {"rId":"2","fId":"2","fValue":"1"},
            //     {"rId":"2","fId":"3","fValue":"1"}
            //
            // ]
          console.log('dd');
          console.log(this.target.value);
        }
    };

    $.fn.auto_sel_cbx=function (options) {
        return this.each(function () {
           let asc=new AutoSelCbx(this,options);
            asc.init();

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
