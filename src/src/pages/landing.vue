<template>
    <!-- Landing Page For Rockz -->
    <div class="landing">
        <div class="padding"></div>
        <div class="logo">
            <pre >                                      
                                                      __///\\__
                                                     ////////._\ 
  __________               __    __________         /\////////..\    
  \______   \ ____   ____ |  | __\____    /        /..\////_|....\  
   |       _//  _ \_/ ___\|  |/ /  /     /         |...|    /.....\    
   |    |   (  &lt;_&gt; )  \___|    &lt;  /     /_         /../     \.....| 
   |____|_  /\____/ \___  &gt;__|_ \/_______ \       /___\_   _\..../     
          \/            \/     \/        \/       \     \_/#|.../ 
                                                   \     |#||__/      
                                                    \ __/#### /     
                                                     \#######/
            </pre>
            <div class="shrinking-containter">
                <div class="cursor-1"></div>
                <div class="screen-cover"></div>
            </div>
        </div>
        <div class="terminal-animation-prompt">
            <div class="static-containter">
                <div class="prompt-text">
                    {{prompt}}
                </div>
                <div class="cursor-2"></div>
            </div>
        </div>

        <pre class="terminal-animation-output">
{{result}}
        </pre>
        <!-- In fututre releases put hidden hover ascii messages -->
        <!-- <div class="about">
            Practical tools made by engineers for engineers
        </div> -->
    </div>
    <div id="services" class="section services">What We Do</div>
    <div class="content">

    </div>
    <div id="contact"  class="section contact">contact</div>
    <div class="content">

    </div>
    <div id="store"  class="section store">store</div>
    <div class="content">

    </div>
</template>

<script>
let prompts = [`> make BLD_DIR="stuff"`, `> echo "making stuff"`]
let results = ["Making stuff...","Making stuff..."]

export default{
    data(){
        return {
            prompt : "",
            result : ""
        }
    },
    created(){
        let max     = prompts.length
        let index   = Math.floor(Math.random() * max);
        this.prompt = prompts[index]
        this.result = results[index]
    }
}
</script>
<style scoped>
.landing{
    background: var(--third-bg-color);
    color     : var(--third-font-color);
    font-size : var(--font-lg);
    height    : 400px;
    width     : 100%;
    overflow  : hidden;
}
.padding{
    height    : 20px;
}
.logo{
    position    : relative;
    display     : block; 
    font-size   : var(--font-xsm);
    width       : min-content;
    margin-left : auto;
    margin-right: auto;
    margin-top  : 60px;
}
.section{
    font-family   : monospace;
    text-transform: uppercase;
    margin-top    : 20px;
    display       : grid;
    color         : var(--font-color);
    padding       : 10px;
    text-align    : center;
    font-size     : var(--font-sm);
    border-bottom : 1px dashed lightgrey;
    margin-left   : 40px;
    margin-right  : 49px;
}
.content{
    display   : grid;
    min-height: 300px;
}
.terminal-animation-prompt{
    display     : block;
    width       : 427px;
    margin-right: auto;
    margin-left : auto;
}
.terminal-animation-output{
    display     : block;
    width       : 100%;
    font-size   : var(--font-xsm);
    text-align  : center;
    animation   : waiting 7.2s;
    opacity     : 1;
    margin-right:20px;
    margin-left:0px;
    padding    :0px;
}
.static-containter{
	position   : relative;
	height     : 25px;
	display    : block;
    width      : max-content;
    white-space: nowrap;
    margin     : 0;
    padding    : 0px;
    overflow   : hidden;
    font-size  : var(--font-xsm);
}
.prompt-text{
    height          : 0px;
    top             : 0px;
    left            : 0px;
    animation       : showForASecond 2s linear;
    overflow        : hidden;
    padding-left    : 10px;
    animation-delay : 5s;
}
.cursor-2{
    position        : absolute;
    top             : 0px;
    width           : 100%;
    min-height      : 15px;         
    margin-left     : 100%;
    background-color: var(--third-bg-color);
    border-left     : .15em solid white;
    animation       : 
    typing2 1.5s steps(20, end),
    blink-caret .15s step-end infinite;
    animation-delay: 5s;
    opacity        : 1;
}
.screen-cover{
    background-color: var(--third-bg-color);
    height: 100%;
}
.shrinking-containter{
    position: absolute;
    display: block;
    width: 100%;
    height:  0;
    bottom: 0;
    left:0;
    animation: 
    shrink 5s steps(11, end);
}
.cursor-1{
    background-color: var(--third-bg-color);
    height:  1em;
    min-height: 15px; 
    border-left: 1px solid var(--third-bg-color);        
    animation: 
    typing2 .45s steps(20, end) 11,
    blink-caret2 .15s step-end 30;
}
@keyframes waiting{
    0%{opacity: 0;height:0px} 
    100%{opacity: 0;height:0px} 
}
@keyframes showForASecond {
  0% {
    height: 25px;
  }
  100% {
    height: 25px;
  }
}
@keyframes blink-caret {
  from, to { border-color: transparent;}
  50% { border-color: white; }
}
@keyframes typing2 {
  from { margin-left: 0% }
  to { margin-left: 100%; }
} 
@keyframes shrink {
  from { height: calc(100% - 1em)}
  to { height: 0; }
} 
@keyframes blink-caret2 {
  from, to { border-color: transparent;}
  50% { border-color: white; }
}
</style>
