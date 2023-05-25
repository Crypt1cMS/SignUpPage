import './StyleSignUp.css'
import axios from 'axios'
const usuario = { userName: "Juan", userLastName: "Garcia", email: "juan@gmail.com", password: "Unavainabien123" }



function SignUp() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5174/signup/1', {
        usuario,
      });

      console.log(response.data.message);
      setMessage(response.data.message);
    } catch (error) {
      console.log('Amarillo');
      console.log(error);
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a few minutes</h4>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" pattern="" placeholder="" />
        <label>Last name</label>
        <input type="text" placeholder="" />
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input id="button" type="submit" value="Submit" />
      </form>
      {message && <p>{message}</p>}
      <p>
        Already have an account? <a href="#">Login here</a>
      </p>
    </div>
  );
}
  
  export default SignUp;



