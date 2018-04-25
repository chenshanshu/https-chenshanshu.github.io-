    $(function(){
        var lizi = function(){
            if(/Android|webOS|iphone|ipod|BlackBerry/i.test(navigator.userAgent)){
                console.log(navigator.userAgent);
                $("body").removeJParticle();
                return;
            }
            if($("body").hasClass("respond")){
                $("body").removeJParticle();
                return;
            }
            $("body").jParticle({
                background: "transparent",
                color: "rgba(0,0,0,0.5)",
                particlesNumber:"150"
            });

        }
        lizi();
        $(window).resize(function () {          //当浏览器大小变化时
		lizi();
        });
    });