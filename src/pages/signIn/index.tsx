import { InputPassword } from "@/components/InputPassword";
import { STATUS } from "@/constants/constants";
import { useAppDispatch } from "@/store/Hook";
import { signInThunk } from "@/store/user/userThunk";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(signInThunk(data))
      .unwrap()
      .then((res) => {
        const { status } = res.data;
        if (STATUS.STATUS_200 === status) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Đăng nhập
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
                  Tài khoản
                </label>
                <input
                  {...register("userName", {
                    required: "Vui lòng nhập tài khoản",
                  })}
                  name="userName"
                  id="userName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu
                </label>
                <InputPassword
                  {...register("password", { required: true })}
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
                      Lưu thông tin
                    </label>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Quên mật khẩu?
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Đăng nhập
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Bạn chưa có tài khoản?{" "}
                <NavLink to="/signup">
                  {" "}
                  <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Đăng kí
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
