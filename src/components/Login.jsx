 
 import Input from "./Input";
 import Button from "./Button";
 import { Link } from "react-router";
function Login() {

  return (
     <div className="w-full max-w-md mx-auto p-4">
        <form action="">
            <h1 className="text-2xl font-bold mb-4">Login </h1>
             <Input type="email" label="Email" placeholder="Enter your email"></Input>
              <Input type="password" label="Password" placeholder="Enter your password"></Input>
              <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</Button>
              <p className="text-sm text-gray-500">Dont have an account? <Link to="/register">Register</Link></p>
        </form>
     </div>
  )
}

export default Login