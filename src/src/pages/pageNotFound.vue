<template>
    <div class="notfound">
        <div class="warning">Hmmmmmm...</div>
        <div class="warning-sec">that page isn't here</div>
        <div class="warning-sec">
            check out the <a href="/">homepage</a> for all the good links
        </div>

    </div>
</template>

<style>
.notfound{
    position        : relative;
    display         : grid;
    color           : var(--third-font-color);
    background-color: var(--third-bg-color);
    height          : 100vh;
    justify-content : center;
    align-content   : center;
    justify-items   : center;
    margin-top      : -60px;
}
.warning{
    font-size: var(--font-lg);
    justify-self: center;
}
.warning-sec{
    font-size: var(--font-md);
}
</style>