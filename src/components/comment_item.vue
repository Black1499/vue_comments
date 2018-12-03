<template>
    <el-container>
        <el-main><el-row>
            <el-col :span="6">{{comment.author}}</el-col>
            <el-col :span="12">{{comment.content}}</el-col>
            <el-col :span="6"><a class="el-icon-delete" @click="deleteMe"></a></el-col>
        </el-row></el-main>
    </el-container>
</template>
<script>
export default {
    props: ["comment"],
    methods: {
        deleteMe() {
        this.$emit("deleteOne", this.comment.id);
        }
    }
};
</script>