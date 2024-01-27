import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handleCreateAccount = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Congratulation",
                    text: "Your account has been created",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: "Oops...",
                    text: `${error.message}`,
                    icon: "error"
                });
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-5 py-10">
            <div className="w-full lg:w-1/3 mx-auto">
                <div className="w-full p-5 bg-white border rounded-none space-y-6">
                    <h1 className="text-4xl font-semibold">Create Account</h1>
                    <p>Create your account for easy shopping.</p>
                    <form onSubmit={handleCreateAccount}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter mail" name="email" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter password" name="password" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none" value="Sign Up" />
                        </div>
                    </form>
                    <center>
                        <p className="text-sm font-medium">{`Already have an account?`} <Link to={'/signin'} className="underline">Sign In</Link></p>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default Signup;