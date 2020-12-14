<template>
    <!-- <vue-element-loading :active="show" spinner="bar-fade-scale" is-full-screen/> -->
    <div class="container">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div class="form_login">
          <h3>Login to dashboard</h3>
             <Form
                ref="formLogin"
                :model="data"
                :rules="ruleValidate"
                label-position="top"
                autocomplete="on"
            >
                <FormItem label="E-mail" prop="email">
                    <Input v-model="data.email" placeholder="Enter your e-mail" autocomplete="email" />
                </FormItem>
                <FormItem label="Password" prop="password">
                    <Input type="password" placeholder="Enter your password" v-model="data.password" autocomplete="current-password"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formLogin')"
                        >Login</Button
                    >
                </FormItem>
            </Form>
        </div>
           
       
    </div>
</template>

<script>
import BlogDataService from "../../services/api";

export default {
    data() {
       return {
            data: {
                email: "",
                password: ""
                   
            },
            ruleValidate: {
                email: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                ],
                password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                ]
            }
        };
    },
    created() {
        this.$store.commit('TOGGLE_AUTH')
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                  BlogDataService.login(this.data)
                  .then(res => {
                    if(res.status == 200) {
                       this.$Message.success("Success!");
                       this.$store.commit('TOGGLE_AUTH', true)
                    //    this.$store.dispatch("user", res.data.user.name);
                       localStorage.setItem('access_token', res.data.token);
                       this.$router.push({name: 'home'})
                    }
                  })
                   
                .catch(err => {
                  console.log(err.response.data);
                     this.$Message.error("Fail!");
                })
                   
                }
            });
        },
    }
};
</script>

<style scoped>
  .form_login {
    margin: 0 auto;
    margin-top: 100px;
    width: 500px
  }
</style>
