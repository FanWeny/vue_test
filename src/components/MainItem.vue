<template>
    <main>
        父層給的數字：{{childNum}}
        <button @click="modify"> 改父層的數字 </button>
        <hr>
        {{info}}
        <button @click="add"> + </button>
        {{childNum}}
        <button @click="reduse"> - </button>
        {{info}}
        <button @click="clear"> clear </button>
    </main>
</template>


<script>
    export default{
        props: ["info", "count"],
        data(){
            return {
                childNum: 0
            }
        },
        methods:{
            add(){
                this.childNum += 1
            },
            reduse(){
                this.childNum -= 1
            },
            clear(){
                this.childNum = 0
            },
            modify(){
                // this.$emit('numadd', this.childNum)
            }
        }
    }
</script>