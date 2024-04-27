import { Link, NavLink } from "react-router-dom";
import userIcon from "../../../public/userIcon.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { LuUser2 } from "react-icons/lu";
import { MdPersonAdd } from "react-icons/md";
import { toast } from "react-toastify";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState('light')



    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    // update state on toggle
    const handleToggle = e => {
        console.log(e.target.checked);
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("Your LogOut successfull")
            })
            .catch()
    }

    const links = <>

        <li><NavLink className="hover:bg-gray-600 hover:text-slate-100" to="/">Home</NavLink></li>
        <li><NavLink className="hover:bg-gray-600 hover:text-slate-100" to="/addcraft">Add Craft Item</NavLink></li>
        <li><NavLink className="hover:bg-gray-600 hover:text-slate-100" to="/allcraft">All Art & craft Items</NavLink></li>
        <li><NavLink className="hover:bg-gray-600 hover:text-slate-100" to="/mycraftlist">My Art&Craft List</NavLink></li>
        <li>
            <div>
                <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller dark:bg-blue-400 bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2" />
            </div>
        </li>
    </>

    return (
        <div >
            <div  className="navbar bg-[#F5F5F5] hover:bg-slate-300 text-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#F5F5F5] hover:bg-slate-300 text-black  rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost font-bold hover:text-yellow-600 hover:bg-pink-950 text-green-700 text-2xl">CraftXtor</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ?
                            <Link to="/">
                                <div className="tooltip tooltip-left " data-tip={user?.displayName || "not found"}>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
                                        <div className="w-10 rounded-full">
                                            <img alt="null" src={user?.photoURL || userIcon} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            :
                            <Link to="/register"><button className="btn btn-active hover:btn-accent  btn-primary rounded-lg"><MdPersonAdd />Register</button></Link>
                    }

                    {
                        user ? <Link to="/"><button onClick={handleSignOut} className="btn btn-active hover:btn-accent btn-primary rounded-lg"> <LuUser2 />Log Out</button></Link> :
                            <Link to="/login"><button className="btn btn-active btn-primary hover:btn-accent rounded-lg"><LuUser2 />Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;