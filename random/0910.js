 var i = -1;
        var ms = 200;
        var index;
        var app = $('#app');
        app.append('<ul></ul>');
        var user = [
        {
            name: "王璐"
        },
        {
            name: "徐倩茹"
        },
        {
            name: "楼佳琦"
        },
        {
            name: "周思彤"
        },
        {
            name: "蔡天炜"
        },
        {
            name: "阮春峰"
        },
        {
            name: "冯文本"
        },
        {
            name: "黄德涛"
        },
        {
            name: "余鲲"
        },
        {
            name: "刘秀丽"
        },
        {
            name: "尹纯洁"
        },
        {
            name: "戴儒航"
        },
        {
            name: "何俊克"
        },
        {
            name: "郭德鹏"
        },
        {
            name: "陶维祥"
        },
        {
            name: "蒋圣福"
        },
        {
            name: "姚国亮"
        },
        {
            name: "刘小凡"
        },        
        {
            name: "应煜鑫"
        },        
        {
            name: "谢航"
        },        
        {
            name: "陈晶"
        }
        ];
        console.log(user.length)
        var game = [
            '最喜欢在座哪位异性同学',
            '和男/女朋友进行到哪一步了',
            '初吻年龄',
            '自己最丢人的事',
            '神情的吻墙10秒',
            '唱青藏高原第一句',
            '小时候第一次挨揍或被老师狠批的具体经过？ ',
            '当你最不知道穿什么颜色的时候，你会选择什么颜色？',
            '曾经有过最被感动的事是什么？',
            '最后一次发自内心的笑是什么时候？ ',
            '你心目中理想的爱人是什么样子呢？',
            '如何向喜欢的人表白？ ',
            '现在你最喜欢的人是谁？',
            '如果跟你喜欢的人约会，碰到前任的男（女）朋友，会有什么表现？',
            '什么都别说了，给我加个作业吧',
            '对窗外大喊：“我好寂寞阿。” ',
            '你最近让你最烦恼的事情是什么？',
            '唱一首歌！不能低于1分钟',
            '你觉得今天谁的穿着最有气质？',
            '情人节最想收到什么礼物？',
            '在你洗澡时，有一个非常丑的异性冲了进来，你会怎么样？',
            '在你洗澡时，有一个非常帅的异性冲了进来，你会怎么样？',
            '男生做5个俯卧撑,女生唱歌！如果女生不想唱歌。也可以做5个俯卧撑',
            '你觉得我们同学当中，异性当中谁最好看！',
            '谁是我们班油腻腻的中年大叔'
        ]

        function shuffle(arr) {
            var length = arr.length,
                randomIndex,
                temp;
            while (length) {
                randomIndex = Math.floor(Math.random() * (length--));
                temp = arr[randomIndex];
                arr[randomIndex] = arr[length];
                arr[length] = temp
            }
            return arr;
        }
        shuffle(user)
        var color = function (a) {
            var rgba = parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() *
                255) + "," + a;
            return rgba
        }
        var random = function (n) {
            var num = Math.random();
            return num;
        }
        var randomSize = function (m) {
            if (arguments.length == 0) {
                m = 10;
            }
            var n = Math.floor(Math.random() * m + 1)
            return n
        }
        var span = $('<span></span>')
        $.each(user, function (index, el) {
            var li = $('<li>' + el.name + '</li>');
            li.css('background', 'rgba(' + color(1) + ')')
            $('ul').append(li)
        })
        $('li').append(span)
        var timer = null;
        $('button').on('click', init);
        function init(e) {
            $('h1').html("0910作业系统")
            $(".game").html('')
            // console.log(e)
            e.stopPropagation()
            shuffle(user)
            // 按扭锁定
            $('button').attr('disabled');
            $('button').css({
                "opacity": "0"
            });
            var cur = 0;
            clearInterval(timer)
            timer = setInterval(function () {
                ++i;
                ++cur;
                $('li').each(function (index, el) {
                    if (i === index) {
                        $(this).css({
                            "transform": "scale(1.1)",
                            "background": "rgba(" + color(randomSize()) + ")",
                        }).children().css({
                            "height": "100%",
                        })
                    } else {
                        $(this).css({
                            "transform": "scale(1) ",
                            "background": "rgba(" + color(randomSize()) + ")",
                        }).children().css({
                            "height": "0%",
                        })
                    }
                })

                var left = Math.random();
                var right = Math.random();
                // console.log(cur)
                if (cur >= randomSize(30) && !(cur < user.length)) {
                    if (left > right) {
                        // console.log(left+">"+right);
                        stop()
                        i = -1;
                        cur = 0;
                    }
                }
                if (i >= user.length) {
                    i = -1;
                }
            }, ms)
        }

        function stop() {
            clearInterval(timer)
            var ins = randomSize(user.length);
            // console.log(ins)
            if (ins === user.length) {
                ins = 0;
            }
            $('h1').html("")

            $('li').each(function (index, el) {
                $(this).css({
                    "transform": "scale(1)",
                    "background": "rgba(" + color(randomSize()) + ")",
                    "z-index": "1"
                }).children().css({
                    "width": "0%",
                })
            })

            
            $('li').eq(ins).css({
                "transform": "scale(1.5)",
                "background": "rgba(" + color(randomSize()) + ")",
                "z-index": "999999"
            }).children().css({
                "width": "100%",
            })

            var name = "<span>" + $('li').eq(ins).text() + "</span>"
            $('h1').html(name)
            $('button').removeAttr('disabled');
            $('button').css({
                "opacity": "1"
            });
            
            gameSize = randomSize(game.length);
            if (gameSize === game.length) {
                gameSize = 0;
            }
            console.log(gameSize,game[gameSize])

            // $('.game').css({
            // 	"opacity":1,
            // 	"display":"block"
            // }).html(game[gameSize])


			$(".game").css({
				"height":"40px",
				"transform":" scale(1)",
				"transition": "all 1000ms"
			}).html(game[gameSize]);


        }

        // $(document).click(function () {
        //     stop()
        // })