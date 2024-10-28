// src/pages/SignUp.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp = () => {
  const { handleSignUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    await handleSignUp({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Sign Up</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Sign Up</Button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
