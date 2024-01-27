import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
const Signin = () => {
    const { logIn } = useContext(AuthContext);
    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "Congratulation",
                text: "You logged in successfully",
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
                    <h1 className="text-4xl font-semibold">Welcome Back</h1>
                    <p>Enter Your Credentials to access your account.</p>
                    <button className="btn btn-block rounded-none text-sm bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 border-none outline-none"> <FcGoogle size={20} /> Sign In Google</button>
                    <p className="text-center font-bold text-slate-600">Or used email</p>
                    <form onSubmit={handleLogIn}>
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
                            <input type="submit" className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none" value="Sign In" />
                        </div>
                    </form>
                    <center>
                        <p className="text-sm font-medium">{`Don't have an account?`} <Link to={'/signup'} className="underline">Create an account</Link></p>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default Signin;