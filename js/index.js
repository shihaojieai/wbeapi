       // tab切换
        $(function() {
            // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
            $(".tab_list li").mouseover(function() {
                // 链式编程操作
                $(this).addClass("current").siblings().removeClass("current");
                // 2.点击的同时，得到当前li 的索引号
                var index = $(this).index();
                console.log(index);
                // 3.让下部里面相应索引号的item显示，其余的item隐藏
                $(".tab_con .item").eq(index).show().siblings().hide();
            });
            // 显示导航栏
            $(".head1 .gwsy").mouseover(function() {
                // $(".head").show();
                $(".head1").siblings("span").show();
            // 隐藏导航栏
            })
            $(".head").mouseout(function() {
                $(".head1").siblings("span").hide();
            })
            // 触摸哪个导航栏 下面出来红线
            $(".head1 .gwsy li").mouseover(function() {
                $(this).addClass("bg").siblings().removeClass("bg");
            })
            $(".head1 .gwsy li").mouseout(function() {
                $(this).removeClass("bg");
            })
    })