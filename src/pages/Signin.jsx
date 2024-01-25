import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Signin = () => {
    return (
        <div className="min-h-screen px-5 py-10">
            <div className="w-full lg:w-1/2 mx-auto">
            <div className="w-full p-5 bg-white border rounded-none space-y-6">
                        <h1 className="text-4xl font-semibold">Welcome Back</h1>
                        <p>Enter Your Credentials to access your account.</p>
                        <button className="btn btn-block rounded-none text-sm bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 border-none outline-none"> <FcGoogle size={20}/> Sign In Google</button>
                        <p className="text-center text-lg">Or used email</p>
                        <form>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none" value="Sign In"/>
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