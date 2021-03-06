
    var barHtml = '<div class="page-bar">'+
                    '<ul>'+
                        '<li><a v-on:click="btnclick(1)">首页</a></li>'+
                        '<li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>'+
                        '<li v-if="cur==1"><a class="banclick">上一页</a></li>'+
                        '<li v-for="index in indexs"  v-bind:class="{ active: cur == index}">'+
                            '<a v-on:click="btnclick(index)">{{ index }}</a>'+
                        '</li>'+
                        '<li v-if="cur!=all"><a v-on:click="cur++,pageClick()">下一页</a></li>'+
                        '<li v-if="cur == all"><a class="banclick">下一页</a></li>'+
                        '<li><a v-on:click="btnclick(all)">尾页</a></li>'+
                        '<li><a>共<i>{{all}}</i>页</a></li>'+
                         // '<li><span class="page-span" v-on:click="goClick(txt)">前往</span><input v-model="txt" id="tiao" type="text" style="width:40px" /></li>'+
                    '</ul>'+
                '</div>';
    var navBar = Vue.extend({
        template:barHtml,
        props:['all','cur','txt'],
        computed: {
            indexs: function(){
              var left = 1;
              var right = this.all;
              var ar = [];
              if(this.all>= 5){
                if(this.cur > 3 && this.cur < this.all-2){
                        left = this.cur - 2
                        right = this.cur + 2
                }else{
                    if(this.cur<=3){
                        left = 1
                        right = 5
                    }else{
                        right = this.all
                        left = this.all -4
                    }
                }
             }
             // if(this.txt>this.all){
             //    this.txt=this.all
             // }
            while (left <= right){
                ar.push(left)
                left ++
            }
            return ar
           }
        },
        methods: {
            btnclick: function(data){
                if(data != this.cur){
                    this.cur = data;
                    this.$emit('btn-click',data);
                }
            },
            pageClick: function(){
                this.$emit('btn-click',this.cur);
            },
            // goClick: function(txt){
            //     if(txt != this.cur){
            //         this.cur = txt;
            //         this.$emit('btn-click',txt);
            //     }
            // },
        }
    });
    window.pagenav = navBar;