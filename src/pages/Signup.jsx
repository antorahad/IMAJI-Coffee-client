import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <div className="min-h-screen px-5 py-10">
            <div className="w-full lg:w-1/2 mx-auto">
            <div className="w-full p-5 bg-white border rounded-none space-y-6">
                        <h1 className="text-4xl font-semibold">Create Account</h1>
                        <p>Create your account for easy shopping.</p>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter name" name="name" className="input input-bordered rounded-none" required />
                            </div>
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