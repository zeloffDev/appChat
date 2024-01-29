import { ButtonSpin } from "@/components/ButtonSpin";
import { InputPassword } from "@/components/InputPassword";
import { LOCAL_STORE_NAME } from "@/constants/LocalStore";
import { STATUS } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { signInThunk } from "@/store/user/userThunk";
import {
  deleteLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/LocalStore";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {};

type Inputs = {
  password: string;
  userName: string;
  remember: boolean;
};

const Index = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();
  const isLoading = useAppSelector((state) => state.userStore.isLoading);
  const userSignIn = getLocalStorageItem(LOCAL_STORE_NAME.USER_SIGN_IN);
  const parseUserSignIn = userSignIn ? JSON.parse(userSignIn) : null;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(signInThunk(data))
      .unwrap()
      .then((res) => {
        const { status } = res.data;
        if (STATUS.STATUS_200 === status) {
          navigate("/");
          toast.success("Logged in successfully");
          if (data.remember) {
            setLocalStorageItem(
              LOCAL_STORE_NAME.USER_SIGN_IN,
              JSON.stringify(data)
            );
          } else {
            deleteLocalStorageItem(LOCAL_STORE_NAME.USER_SIGN_IN);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        const massage = err?.response?.data?.message ?? "Login failed";
        toast.error(massage);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="userName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Account
                </label>
                <input
                  {...register("userName", {
                    required: "Please enter account",
                  })}
                  defaultValue={parseUserSignIn && parseUserSignIn.userName}
                  name="userName"
                  id="userName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <InputPassword
                  {...register("password", { required: true })}
                  defaultValue={parseUserSignIn && parseUserSignIn.password}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      {...register("remember")}
                      id="remember"
                      defaultChecked={
                        parseUserSignIn && parseUserSignIn.remember
                      }
                      name="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 cursor-pointer h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Save information
                    </label>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </p>
              </div>
              <ButtonSpin isLoading={isLoading}>Log in</ButtonSpin>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Do not have an account?
                <NavLink to="/signup">
                  {" "}
                  <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Register
                  </span>
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

// const onSubmit = (event: FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   const payload: { email?: string; password?: string } = {};
//   formData.forEach((value, key) => {
//     payload[key as keyof typeof payload] = value as string;
//   });
//   console.log(payload);
//   axiosInstance.get("user/listUser");
// };

// const onSubmit: SubmitHandler<Inputs> = (data) => {
//   // UserServices.userSignIn(data)
//   //   .then((res) => {
//   //     console.log(res.data.data);
//   //     reduxAuth.signIn(res.data.data);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });
// };
