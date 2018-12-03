<template>
    <div class='clist'>
        <comment v-for='c in comments' :comment='c' :key='c.id' @deleteOne='deleteDo'>
        </comment>
    </div>
</template>
<script>
    import commentItem from "./comment_item.vue";

    export default {
        props: ["comments"],
        methods: {
            deleteDo(id) {
                this.$emit("deleteOne", id);
            }
        },
        components: {
            comment: commentItem
        }
    };
</script>