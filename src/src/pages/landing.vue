<template>
    <div class="landing">
        <div class="padding">
        </div>
        <div class="logo">
            ROCKZ
        </div>
        <div class="about">
            Practical tools made by engineers for engineers
        </div>
    </div>
    <div class="section services">
        Services
    </div>
    <div class="section contact">
        Contact
    </div>
    <div class="section contact">
        Github
    </div>
    <div class="section store">
        Store
    </div>
</template>

<style scoped>
.landing{
    position  : relative;
    background: var(--third-bg-color);
    color     : var(--third-font-color);
    font-size : var(--font-lg);
    display   : grid;
    height    : 400px;
}
.padding{
    height    : 20px;
}
.logo{
    justify-self:center;
}
.about{
    justify-self:center;
    font-size: var(--font-md);
}

.section{
    display   : grid;
    color     : var(--font-color);
    padding   : 10px;
    text-align: center;
    font-size : var(--font-md);
}
</style>
