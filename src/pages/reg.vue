<template>
    <div class="LoginApp">
        <div class="LoginCon">
            <h1>
                考试系统
            </h1>
            <p>
                <input type="text" placeholder="请输入用户名" name="uName" v-model="uName">
            </p>
            <p>
                <input type="text" placeholder="请输入密码" name="uPwd" v-model="uPwd">
            </p>
            <p>
                <button @click="reg">
                    注册
                </button>
            </p>
        </div>
    </div>
</template>

<script>
    import "./style.css"
    export default {
        data() {
            return {
                uName:"",
                uPwd:""
            }
        },
        methods: {
            reg() {
                let uName = this.uName;
                let uPwd = this.uPwd;
                let url = "http://localhost:8888/hello-world/api/test.php?uName="+uName+"&uPwd="+uPwd;
                this.$axios.get(url).then(({data})=>{
                    if(data.msg=="ok"){
                        console.log(data.token)
                        localStorage["uToken"] = data.token
                        this.$router.push("/")
                    }
                })
            }
        },
    }
</script>
<style scoped>

</style>