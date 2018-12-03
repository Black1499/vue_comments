<template>
    <el-container>
        <el-header><h1>自己与自己聊天</h1></el-header>
        <el-main>
            <el-row>
                <el-col :span="9"><div class="grid-content bg-purple">用户名</div></el-col>
                <el-col :span="15">
                    <div class="grid-content bg-purple-light">
                        <el-input v-model="author" placeholder="用户名"></el-input>
                    </div>
                </el-col>
            </el-row>
            
            <el-row>
                <el-col :span="9"><div class="grid-content bg-purple">评论内容</div></el-col>
                <el-col :span="15">
                    <div class="grid-content bg-purple-light">
                        <el-input v-model="content" placeholder="评论内容"></el-input>
                    </div>
                </el-col>
            </el-row> 
        </el-main>
        <el-foot>
            <el-button type="primary" @click="doSave">发布</el-button>
        </el-foot>
    </el-container>
</template>

<script>
  export default {
    data() {
        return {
            author: '',
            content: ''
        }
    },
    methods: {
        doSave() {
            if (!this.author) {
                return alert('用户名不能为空');
            }
            if (!this.content) {
                return alert('内容不能为空');
            }

            // 更新保存在 localStorage 里的作者名
            localStorage.setItem('vvv-authorname', this.author);

            // 发射、广播出去
            this.$emit('save', {
                id: +new Date(),
                author: this.author,
                content: this.content
            });

            // clear
            this.content = '';
        }
    },
    created() {
        const authorname = localStorage.getItem('vvv-authorname');
        if (authorname) {
            this.author = authorname;
        }
    }
  }
</script>


