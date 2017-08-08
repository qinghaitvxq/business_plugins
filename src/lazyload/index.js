(function ($) {
    function myLazyLoad(target,settings) {
       this.imgList=[];
       this.target=target;
       this.settings=settings;

    };
    myLazyLoad.prototype={
         _lazyload:function () {
             //console.log('hi');
             var seeHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight, //可见区域高度
                 scrollTop=document.documentElement.scrollTop || document.body.scrollTop, //滚动高度
                 imgList=this.target.getElementsByTagName("img"),
                 imgnum=imgList.length,
                 index=0; //存储图片加载的位置，避免每次都从第一张图片开始遍历

             for(var i=index;i<imgnum;i++){
                     var elem=imgList[i];
                     console.log('------');
                     console.log(elem.offsetTop);
                     console.log(seeHeight);
                     console.log(scrollTop);

                     if(elem.offsetTop < seeHeight+scrollTop){
                         if(!elem.getAttribute("src") || elem.getAttribute("src")===this.settings.defaultImg){
                             console.log('替换');
                             elem.src=elem.getAttribute("data-src");
                         }
                         index=i+1;
                     }
             }

         }
    };

    //节流函数
    function throttle(fun) {
        var _this=this;
        clearTimeout(fun.tId);
        fun.tId=setTimeout(function(){
            console.log("scroll");
            fun.call(_this);
        },100);
    };

    $.fn.myLazyLoad=function (options) {
        console.log("this is mylazyloading");
        var defaults={
          defaultImg:"default.jpg"
        };
        var settings=$.extend({},defaults,options);
        return this.each(function () {
            var loadImg=new myLazyLoad(this,settings);
            loadImg._lazyload();
            window.addEventListener('scroll',throttle.bind(loadImg,loadImg._lazyload));

        });
    }
})(jQuery);