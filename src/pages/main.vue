<template>
    <div class="MainApp">
        <div class="Main_Top">
            <p>
                八维考试系统
            </p>
            <span>
                退出
            </span>
        </div>
        <div class="Main_Con">
            <div class="Main_Con_Left">
                <p>人员管理</p>
                <p>成绩管理</p>
                <p>阅卷明细</p>
                <p>学生管理</p>
                <p>批卷系统</p>
                <span></span>
                <font>
                    退出
                </font>
            </div>
            <div class="Main_Con_Rig">
                <table border="1px solid #333" width="100%" cellpadding="0">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>姓名</td>
                            <td>性别</td>
                            <td>年龄</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>杨波波</td>
                            <td>女</td>
                            <td>18</td>
                            <td>
                                <button>
                                    删除
                                </button>
                                &emsp;
                                <button>
                                    编辑
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import "../pages/style.css"
    export default {
        
    }
</script>

<style scoped>

</style>