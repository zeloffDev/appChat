import ChatOnboard from "@/components/ChatOnboard";
import { CustomImg } from "@/components/CustomImg";
import { MASSAGE_NOTIFICATION } from "@/constants/MassageToastify";
import { STATUS } from "@/constants/constants";
import { UserServices } from "@/services/user/userService";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { userInfoThunk } from "@/store/user/userThunk";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  about: string;
};

export default function Profile() {
  const dispatch = useAppDispatch();
  const { user, profile } = useAppSelector((state) => state.userStore);
  const { avatar, name, about } = profile;
  const { register, handleSubmit, setValue } = useForm<Inputs>({});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const payload = {
      _id: user._id,
      name: data.name,
      about: data.about,
    };
    UserServices.updateUserInfo(payload)
      .then((res) => {
        const { status } = res.data;
        if (STATUS.STATUS_200 === status) {
          toast.success(MASSAGE_NOTIFICATION.UPDATE_SUCCESSFUL);
        }
      })
      .catch((err) => {
        console.log(err);
        const massage =
          err?.response?.data?.message ?? MASSAGE_NOTIFICATION.UPDATE_FAILED;
        toast.error(massage);
      });
  };

  const getUserInfo = () => {
    const params = {
      userId: user._id,
    };
    dispatch(userInfoThunk(params));
  };

  useEffect(() => {
    setValue("name", name);
    setValue("about", about);
  }, [name, about]);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="flex text-xs w-full">
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Profile" />
        <meta name="keywords" content="Profile"></meta>
      </Helmet>
      <div className="sm:w-[350px] w-full border-r bg-bgChatList dark:border-none dark:bg-gray-800">
        <div className="mx-[20px]">
          <div className="font-bold text-2xl leading-10 mt-[15px]">Profile</div>
          <div className="flex justify-center items-center mt-[50px]">
            <div className="w-[80px]  h-[80px] bg-bgLogo rounded-full overflow-hidden ">
              <CustomImg src={avatar} alt="Avatar" className="h-full w-full" />
            </div>
          </div>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mt-[50px] relative">
              <label className="absolute rounded top-[-8px] left-[10px] bg-bgChatList dark:bg-gray-800 text-blueItem dark:text-white px-[5px]">
                Name
              </label>
              <input
                defaultValue={name}
                {...register("name")}
                name="name"
                className="bg-gray-50 focus:border-blue-500 focus:outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
              />
            </div>
            <div className="mt-[20px]">
              <p className="mb-[20px] text-allChats dark:text-white">
                This name is visible to your contacts
              </p>

              <div className="relative">
                <label className="absolute rounded top-[-8px] left-[10px] bg-bgChatList dark:bg-gray-800 text-blueItem dark:text-white px-[5px]">
                  About
                </label>
                <textarea
                  {...register("about")}
                  name="about"
                  defaultValue={about}
                  className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="About"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-[20px] float-right border border-sky-500 px-5 font-bold py-2 text-allChats text-blueItem dark:text-white  hover:bg-blue-100 dark:hover:bg-gray-500 dark:text-white rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <ChatOnboard />
    </div>
  );
}
