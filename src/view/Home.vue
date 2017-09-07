<template>
  <div class="hello">
    这是home页
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        form:{
          username:"",
          tel:"",
          idCard:"",
          username2:""
        },
        validations:{
          form:{
            username:{
              rule:[
                {
                  type:"require",
                  msg:"用户名不能为空"
                },
                {
                  type:"username",
                  msg:"填入的用户名格式不对"
                }
              ]
            },
            tel:{
              rule:[
                {
                  type:"require",
                  msg:"手机号不能为空"
                },
                {
                  type:"tel",
                  msg:"手机号格式不正确"
                }
              ]
            },
            username2:{
              rule:[
                {
                  type:"require",
                  msg:"用户名不能为空1"
                },
                {
                  type:"username",
                  msg:"填入的用户名格式不对2"
                }
              ]
            },
            idCard:{
              rule:[
                {
                  type:"require",
                  msg:"身份证不能为空"
                },
                {
                  type:"idCard",
                  msg:"身份证格式不对"
                }
              ]
            }
          },
        }
      }
    },
    created(){
    },
    methods:{
      submit(){
        this.$observer.emit('form');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
