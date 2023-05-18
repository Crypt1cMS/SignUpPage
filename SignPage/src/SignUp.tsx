import './StyleSignUp.css'

function SignUp() {

    return (
      <div className="sign-up">
        <h1>Sign Up</h1>
        <h4>It's free and only takes a few minutes</h4>
        <form>
            <label>First Name</label>
            <input type="text" placeholder=''/>
            <label>Last name</label>
            <input type='text' placeholder=''/>
            <label>Email</label>
            <input type ="email" placeholder=''/>
            <label>Phone Number</label>
            <input type ="number" placeholder=''/>
            <label>Password</label>
            <input type ="password" placeholder=''/>
            <label>Confirm Password</label>
            <input type ="password" placeholder=''/>
            <input id='button' type="button" value="Submit"/>
        </form>
        <p>Already have an account? <a href="#">Login here</a></p>
      </div>
    );
  };
  
  export default SignUp;