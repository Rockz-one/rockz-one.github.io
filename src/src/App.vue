<template>
  <navbar/>
  <router-view></router-view>
</template>

<script>
import navbar from './components/navbar.vue'
export default{
  components: {navbar},
  title : ""
}
</script>

<style>
/* :root{
  --bg-color      : #010508;
  --sec-bg-color  : #0C1116;
  --font-color    : #E6EDF3;
  --sec-font-color: #858C96;
  --link-color    : #4493F8;
  --button-color  : #050b06;
  --text-box-color: #171A22;
  --filter-button-color : #21242F;
}  */
:root{
  --bg-color             : #1D1F21; 
  --sec-bg-color         : #252425;
  --third-bg-color       : #CEB22A;
  --font-color           : #EAECF0;
  --sec-font-color       : #666666;
  --third-font-color     : #010100;
  --link-color           : #408DED;
  --button-color         : white;
  --text-box-color       : #3B3A3B;
  --filter-button-color  : #3B3A3B;
  /* --font-family-base: system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
  --font-family-base     : -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  --font-sm              : 18px;
  --font-md              : 24px;
  --font-lg              : 48px;
}

* {
  box-sizing: border-box;
}
/* https://stackoverflow.com/questions/5102820/scrolling-of-whole-page-instead-of-inner-div-only */
html, body { height: 100%; } 
html,body{
  margin     : 0px;
  top        : 0px;
  background : var(--bg-color);
  overflow-x : hidden;
  font-family: var(--font-family-base);
  font-size  : var(--font-md);
  
}
a{
  text-decoration: none;
  color          : var(--link-color);
  font-weight    : 700;
}

.padding{
  height: 80px;
}
.small-padding{
  height: 10px;
}

</style>
