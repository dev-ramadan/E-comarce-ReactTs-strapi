import { useSelector } from "react-redux";
import { selectUser, userLogin } from "../../App/features/loginSlice"
import { useAppDispatch } from "../../App/Store"
import { FormEvent, useState } from "react"

export default function Login() {
    const dispatch = useAppDispatch();
    const {loading , data , error} = useSelector(selectUser)
    const [user, setUser] = useState({
        identifier: '',
        password: ''
    })
    
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)

    const onSumintHandelar = ((e: FormEvent) => {
        e.preventDefault();
        console.log(user)
        if (!user.identifier && !user.password) {
            setEmail(true);
            setPassword(true);
            return;
        };
        if (!user.identifier) {
            setEmail(true);
            return;
        };
        if (!user.password) {
            setPassword(true);
            return;
        }
        setEmail(false)
        setPassword(false)
        dispatch(userLogin(user))
        user.identifier = ''
        user.password = ''
    })
    const loginAction = (e: any) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" className="space-y-6" onSubmit={onSumintHandelar}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                {email ?
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="identifier"
                                            type="email"
                                            value={user.identifier}
                                            onChange={loginAction}
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-red-700 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                                        />
                                        <p className="text-red-600">email is required</p>
                                    </div>
                                    :
                                    <input
                                        id="email"
                                        name="identifier"
                                        type="email"
                                        value={user.identifier}
                                        onChange={loginAction}
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                }
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                {password ?
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={user.password}
                                            onChange={loginAction}
                                            autoComplete="current-password"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-red-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:text-sm/6"
                                        />
                                        <p className="text-red-600">password is required</p>
                                    </div>
                                    :
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={user.password}
                                        onChange={loginAction}
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                }


                            </div>
                        </div>
                        <div>
                            {
                                loading ? 
                                <button
                                disabled
                                type="submit"
                                className=" flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                loading...
                            </button>
                                :
                                <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button> 
                            }
                        </div>
                        {error?<p className="text-red-600 mx-auto">{error}</p>:''}
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
