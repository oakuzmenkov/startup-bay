<script>
export default {
    name: "BlogPostPreview",
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    computed: {
        formatPublishDate() {
            const dateFormat = new Date(this.item.frontmatter.date);
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
            };

            return dateFormat.toLocaleDateString("en-US", options);
        },
    },
};
</script>

<template>
	<section>
        <div class="blog-post__container">
        <time>{{ formatPublishDate }}</time>
        <h3 class="blog-post__title">{{ item.frontmatter.title }}</h3>
        <p v-if="item.frontmatter.excerpt">{{ item.frontmatter.excerpt }}</p>
        <!-- <p v-if="item.readingTime">Estimated time: {{ item.readingTime.text }}</p> -->
        <router-link class="button blog-post__button" :to="item.path">Read More ></router-link>
        </div>
    </section>
</template>

<style scoped>
.blog-post__container {
    margin: 0 -20px;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid lightgray;

    -webkit-box-shadow: 10px 10px 37px -18px rgba(121, 24, 24, 1);
    -moz-box-shadow: 10px 10px 37px -18px rgba(121, 24, 24, 1);
    box-shadow: 10px 10px 37px -18px rgba(121, 24, 24, 1);
}

.blog-post__container {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
}
/* Transition to a bigger shadow on hover */
.blog-post__container:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.blog-post__button {
    margin-bottom: 1.5rem;
    display: inline-block;
}

.blog-post__title {
    margin-top: 0.5rem;
}

.button {
    border: 1px solid #791818;
    border-radius: 4px;
    color: #791818;
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
    text-transform: uppercase;
    font-weight: 700;
    box-shadow: 0 0;
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.tag-list {
    list-style: none;
    padding-left: 0;
    display: flex;
    margin-bottom: 25px;
}

.tag-list__item {
    margin-left: 10px;
}

.tag-list__item:first-child {
    margin-left: 0;
}

.tag-list__btn {
    padding: 5px;
    font-size: 0.9rem;
    background-color: #fff;
}
</style>
