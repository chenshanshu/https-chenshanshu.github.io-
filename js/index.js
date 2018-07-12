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

        };
        // lizi();
        // $(window).resize(function () {          //当浏览器大小变化时
        // lizi();
        // });
        $('form').submit(function (e) {
            var event = e || window.event,
                $form = $(this);
            event.preventDefault();

            var formData = $form.serializeArray();

            formData = {
                mobile:$form.context.phone.value,
                tpl_id:84516,
                tpl_value:"#code#="+$form.context.message.value,
                key:"ca3bfb4443efb89e1f4c02c2b57b342a"
            };
            $.ajax({
                type:$form.attr('method'),
                url:$form.attr('action'),
                data:formData,
                dataType:'jsonp'
            }).done(function (data) {
                console.log(data);

            }).fail(function (err) {
                console.log(err);

            });
            return ;
        })
    });