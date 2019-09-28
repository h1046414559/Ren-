<template>
    <div class="LoginApp">
        <div class="LoginCon">
            <h1>
                考试系统
            </h1>
            <p>
                <input type="text" placeholder="请输入用户名" v-model="uName">
            </p>
            <p>
                <input type="text" placeholder="请输入密码" v-model="uPwd">
            </p>
            <p>
                <button @click="login">
                    登录
                </button>
                
            </p>
            <p>
                <button @click="reg">
                    前往注册
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
            login() {
               let uName = this.uName;
                let uPwd = this.uPwd;
                let url = "http://localhost:8888/hello-world/api/login.php?uName="
                +uName+"&uPwd="+uPwd+"&token="+localStorage["uToken"];
                this.$axios.get(url).then(({data})=>{
                    console.log(data)
                    if(data.msg == "Loginok"){
                        this.$router.push("main")
                    }else{
                        alert("密码错误")
                    }
                    
                    if(data.msg == "userfalse"){
                        alert("账户错误")
                    }
                })
            },
            reg(){
                this.$router.push("reg")
            }
        },
    }
</script>
<style scoped>

</style>