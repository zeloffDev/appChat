import { ButtonSpin } from "@/components/ButtonSpin";
import { InputPassword } from "@/components/InputPassword";
import { UserServices } from "@/services/user/userService";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {};

type Inputs = {
  name: string;
  userName: string;
  password: string;
  rePassword: string;
};

const Index = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    UserServices.userSignUp(data)
      .then((res) => {
        toast.success("Đăng kí tài khoản thành công");
      })
      .catch((err) => {
        const massage = err?.response?.data?.message ?? "Đặng kí thất bại";
        toast.error(massage);
      })
      .finally(() => {
        console.log("first");
        setLoading(false);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Đăng Kí
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tên người dùng
                </label>
                <input
                  {...register("name", {
                    required: "Vui lòng nhập tên người dùng",
                  })}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="zeloff"
                  required
                />
              </div>
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
                  {...register("password", {
                    required: "Vui lòng nhập mật khẩu",
                  })}
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="rePassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nhập lại mật khẩu
                </label>
                <InputPassword
                  {...register("rePassword", {
                    required: "Vui lòng nhập lại mật khẩu",
                    validate: (value) =>
                      value === getValues("password") || "Mật khẩu không khớp",
                  })}
                  id="rePassword"
                  placeholder="••••••••"
                  required
                />
                {errors.rePassword && (
                  <p className="text-red-500"> {errors.rePassword.message}</p>
                )}
              </div>
              <ButtonSpin isLoading={loading}>Đăng kí</ButtonSpin>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Bạn đã đăng kí tài khoản?{" "}
                <NavLink to="/signin">
                  <span className="font-medium text-blue-600 text-primary-600 hover:underline dark:text-blue-500">
                    Đăng nhập
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
