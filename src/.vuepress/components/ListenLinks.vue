<template>
	<section>
        <div class="flex">
            <div>
                <span>Слушать на:</span>
            </div>
            <div v-if="yandex">
                <a :href="yandex" target="_blank"><img src="/icon_ya.svg" alt="Яндекс Музыка"> </a>
            </div>
            <div v-if="spotify">
            <a :href="spotify" target="_blank"><img src="/icon_spotify.svg" alt="Spotify"></a>
            </div>
        </div>
        <hr>
    </section>
</template>


<script>
export default {
    name: "ListenLinks",
    props: {
        spotify: {
            type: String,
            required: false,
        },
        yandex: {
            type: String,
            required: false,
        },
    },
};
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: flex-end;
}

img {
    height: 24px;
}

span {
    display: inline-block;
    vertical-align: middle;
}

div {
    height: 24px;
    margin: 0 5px;
}
</style>
