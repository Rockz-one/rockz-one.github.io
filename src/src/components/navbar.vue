<template>
    <div class="navbar">
       <div class="wide" >
            <!-- left to right -->
            <a href="/" class="option left"><img src="/icon2.webp" class="foo"/></a>
            <!-- <a href="#services" class="option left">services</a> -->
            <!-- center -->
                <!-- <div class="option center">about</div> -->
            <!-- right to left -->
            <!-- <a href="#store" class="option right">store</a>
            <a href="#contact" class="option right">contact</a> -->
            <!-- Wierd its displayedout of order... -->
            <a style="display: grid;grid-template-columns: 20% 80%; grid-gap:6px;" href="#store"  class="option right">
                <svg style="align-self:center;margin-bottom:2px" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_blackgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5" stroke="black" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21 22H9M3 22H5.5" stroke="black" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19 22V15" stroke="black" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5 22V15" stroke="black" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11.9999 2H7.47214C6.26932 2 5.66791 2 5.18461 2.2987C4.7013 2.5974 4.43234 3.13531 3.89443 4.21114L2.49081 7.75929C2.16652 8.57905 1.88279 9.54525 2.42867 10.2375C2.79489 10.7019 3.36257 11 3.99991 11C5.10448 11 5.99991 10.1046 5.99991 9C5.99991 10.1046 6.89534 11 7.99991 11C9.10448 11 9.99991 10.1046 9.99991 9C9.99991 10.1046 10.8953 11 11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 10.1046 14.8953 11 15.9999 11C17.1045 11 17.9999 10.1046 17.9999 9C17.9999 10.1046 18.8953 11 19.9999 11C20.6373 11 21.205 10.7019 21.5712 10.2375C22.1171 9.54525 21.8334 8.57905 21.5091 7.75929L20.1055 4.21114C19.5676 3.13531 19.2986 2.5974 18.8153 2.2987C18.332 2 17.7306 2 16.5278 2H16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                store
            </a>
            <a style="display: grid;grid-template-columns: 20% 80%; grid-gap:6px;" href="#contact"  class="option right">
                <svg style="align-self:center;margin-bottom:2px" width="22px" height="22px" fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"></path> </g></svg>
                Contact
            </a>
            <a style="display: grid;grid-template-columns: 20% 80%; grid-gap:6px;" href="https://github.com/Rockz-one" target="_blank"  class="option right">
                <svg style="align-self:center;margin-bottom:2px" width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                github
            </a>

       </div>
    </div>
</template>

<script>
export default{
    title: "homepage",
    data(){
        return {
            width: 802
        }
    }
}
</script>

<style scoped>
.navbar{
    /* position: relative; */
    /* display    : grid; */
    background : var(--sec-bg-color);
    color      : var(--font-color);
    font-size  : var(--font-md);
    height     : 60px;
    width      : 100%;
    text-align : center;
    align-content  : center;
    /* box-shadow     : 0px 0px 20px 10px rgba(255, 255, 255, 1); */
    box-shadow     : 0 1px 2px 0 #0000001a;
    z-index        : 1;
    overflow       : hidden;
    /* border-radius  : 0px 0px 10px 10px;
    border: 1px solid black; */
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
@media (max-width: 800px) {
    .option{
        margin        : 0px 2px 0px 2px;
    }
}

@media (hover: hover) {
    .option:hover{
        opacity: .5;
        cursor : pointer;
        transition: all .13s ease-in-out;
    }
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