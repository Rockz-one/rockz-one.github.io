<template>
    <div class="navbar">
       <div class="wide" v-if="width>800">
            <!-- left to right -->
            <a href="/" class="option left"><img src="/icon2.webp" class="foo"/></a>
            <a href="#services" class="option left">services</a>
            <!-- center -->
                <!-- <div class="option center">about</div> -->
            <!-- right to left -->
            <a href="#store" class="option right">store</a>
            <a href="#contact" class="option right">contact</a>
            <a href="https://github.com/Rockz-one" target="_blank"  class="option right">github</a>
       </div>
       <div class="skinny" v-else>
            <div class="dropdown">
                <div>lo</div>
                <div>la</div>
                <div>li</div>
            </div>
       </div>
    </div>
</template>

<script>
export default{
    title: "homepage",
    data(){
        return {
            width: 801
        }
    },
    methods: {
        setWidth( oldWidth, newWidth){
            this.width = newWidth;
        }
    }
}
</script>

<style scoped>
.navbar{
    position: relative;
    display    : grid;
    background : var(--sec-bg-color);
    color      : var(--font-color);
    font-size  : var(--font-sm);
    height     : 60px;
    width      : 100%;
    text-align : center;
    align-content  : center;
    /* box-shadow     : 0px 0px 20px 10px rgba(255, 255, 255, 1); */
    box-shadow     : 0 1px 2px 0 #0000001a;
    z-index        : 1;
    overflow       : hidden;
}
.skinny{
    grid-template-columns: 100px auto 100px;
}
.wide{
    padding : 10px;
    overflow: hidden;
    line-height: 36px;
}
.option{
    text-transform: capitalize;
    display       : inline-block;
    opacity       : .8;
    width         : max-content;
    padding       : 0px 8px 0px 8px;
    margin        : 0px 8px 0px 8px;
    font-weight   : 500;
    /* background-color: blue; */
    filter: brightness(120%);
}
.option:hover{
    opacity: .5;
    cursor : pointer;
    transition: all .13s ease-in-out;
}
.left{
    float: left;
}
.center{
    float: center;
}
.right{
    float: right;
}
.foo{
    height:32px;
    width: 32px;
}
</style>