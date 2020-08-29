<script type="text/javascript" src="/resorces/js/libs/jquery-1.12.4.min.js"></script>
<!-- <script type="text/javascript" src="/resorces/js/libs/jquery.swiper.min.js"></script> -->
<!-- <script type="text/javascript" src="/resorces/js/libs/jquery.mCustomScrollbar.js"></script> -->
<script>
    // pc,m 분기체크
    function isMobile(){
        var UserAgent = navigator.userAgent;
        if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|Mobile|Tablet/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
        {
            return true;
        }else{
            return false;
        }
    }

    if(isMobile()){ // 모바일일때
        console.log("mobile");
        // css
        // var $ele01	= document.createElement("link");
        // $ele01.href = "/resorces/css/layout_mo.css";
        // $ele01.rel	= "stylesheet";
        // $ele01.type	= "text/css";
        // document.getElementsByTagName("head")[0].appendChild($ele01);

        var $ele02	= document.createElement("link");
        $ele02.href = "/resorces/css/common_mo.css";
        $ele02.rel	= "stylesheet";
        $ele02.type	= "text/css";
        document.getElementsByTagName("head")[0].appendChild($ele02);

        var $ele03	= document.createElement("link");
        $ele03.href = "/resorces/css/contents_mo.css";
        $ele03.rel	= "stylesheet";
        $ele03.type	= "text/css";
        document.getElementsByTagName("head")[0].appendChild($ele03);

        var $ele04	= document.createElement("link");
        $ele04.href = "/resorces/css/main_mo.css";
        $ele04.rel	= "stylesheet";
        $ele04.type	= "text/css";
        document.getElementsByTagName("head")[0].appendChild($ele04);

        // js
        function addJavascript(jsname) {
        var th = document.getElementsByTagName('head')[0];
        var s = document.createElement('script');
        s.setAttribute('type','text/javascript');
        s.setAttribute('src',jsname);
        th.appendChild(s);
        }
        addJavascript('/resorces/js/common_mo.js');

    }else{ // pc일때
        // css
        // var $ele01	= document.createElement("link");
        // $ele01.href = "/resorces/css/layout.css";
        // $ele01.rel	= "stylesheet";
        // $ele01.type	= "text/css";
        // document.getElementsByTagName("head")[0].appendChild($ele01);

        var $ele02	= document.createElement("link");
        $ele02.href = "/resorces/css/common.css";
        $ele02.rel	= "stylesheet";
        $ele02.type	= "text/css";
        document.getElementsByTagName("head")[0].appendChild($ele02);

        var $ele03	= document.createElement("link");
        $ele03.href = "/resorces/css/contents.css";
        $ele03.rel	= "stylesheet";
        $ele03.type	= "text/css";
        document.getElementsByTagName("head")[0].appendChild($ele03);

        var $ele04	= document.createElement("link");
        $ele04.href = "/resorces/css/main.css";
        $ele04.rel	= "stylesheet";
        $ele04.type	= "text/css";
        document.getElementsByTagName("head")[0].appendChild($ele04);

        // js
        function addJavascript(jsname) {
        var th = document.getElementsByTagName('head')[0];
        var s = document.createElement('script');
        s.setAttribute('type','text/javascript');
        s.setAttribute('src',jsname);
        th.appendChild(s);
        }
        addJavascript('/resorces/js/common_pc.js');

        // $(window).resize(function(){
        //     var deviceWidth = $(window).width();
        //     if(deviceWidth < 760){
        //         $(document).one(location.reload());
        //         // console.log("reloadSmall");
        //     }
        //     if(deviceWidth > 761){
        //         $(document).one(location.reload());
        //         // console.log("reloadBig");
        //     }
        // });

}
</script>

<link rel="stylesheet" href="/resorces/css/base.css" type="text/css">
<link rel="stylesheet" href="/resorces/css/jquery.mCustomScrollbar.min.css">
<!-- <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap" rel="stylesheet"> -->

<script type="text/javascript" src="/resorces/js/common.js"></script>
<script type="text/javascript" src="/resorces/js/checkJs.js"></script>

<!--[if lt IE 9]>
<script type="text/javascript" src="/resorces/js/libs/html5shiv-printshiv.js"></script>
<![endif]-->
