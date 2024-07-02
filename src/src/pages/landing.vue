<template>
    <div class="landing">
        <div class="padding">
        </div>
        <div class="logo">
            ROCKZ
        </div>
        <div class="about">
            about us
        </div>
    </div>
    <div class="services">
            services
    </div>
    <div class="contact">
            services
    </div>
    <div class="contact">
            services
    </div>
    <div class="store">
            services
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

.services{
    display: grid;
    color  : var(--font-color);
    padding: 10px;
}
</style>