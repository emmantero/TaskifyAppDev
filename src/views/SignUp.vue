<template>
  <div class="signup-form">
      <h1>Sign Up Here!</h1>
      <form action="#" method="post">
          <p>It's quick and easy.</p>
          <input type="text" name="firstname" placeholder="First Name"><br>
          <input type="text" name="lastname" placeholder="Last Name"><br>
          <input type="text" name="email" placeholder="Email Address"><br>
          <input type="password" name="password" placeholder="Password"><br><br>
          <!-- <button type="submit">Sign Up!</button> -->
          <button type="submit"><router-link to="/ToDo">Sign Up!</router-link></button>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .signup-form{
        width: 450px;
        height: 500px;
        border: 10px solid #2b3252;
        background-color: #FFFFFF;
        margin: auto;
        background-color:  #FAD744;
    }

    input[type=text] {
        width: 350px;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border-radius: 12px;
    }

    input[type=password] {
        width: 350px;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border-radius: 12px;
    }

    button[type=submit] {
        width: 90px;
        height: 40px;
        margin: 8px 0;
        border-radius: 12px;
    }

    button[type=submit]:hover {
        background-color: #ef5455; 
        color: white;
    }

    h1 {
        font-size: 36px;
        padding-top: 20px;
    }
</style>