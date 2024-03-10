import ChatOnboard from "@/components/ChatOnboard";
import { CustomImg } from "@/components/CustomImg";
import { SvgEye } from "@svg/SvgEye";
import { SvgUpload } from "@svg/SvgUpload";
import { MASSAGE_NOTIFICATION } from "@/constants/MassageToastify";
import { STATUS } from "@/constants/constants";
import { UserServices } from "@/services/user/userService";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { userInfoThunk } from "@/store/user/userThunk";
import { ChangeEvent, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  about: string;
};

export default function Profile() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userStore);
  const { avatar, name, about, _id } = user;
  const { register, handleSubmit, setValue } = useForm<Inputs>({});
  const [srcAvatar, setSrcAvatar] = useState<string>(avatar);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const payload = {
      _id: _id,
      name: data.name,
      about: data.about,
      avatar: srcAvatar,
    };
    UserServices.updateUserInfo(payload)
      .then((res) => {
        const { status } = res.data;
        if (STATUS.STATUS_200 === status) {
          toast.success(MASSAGE_NOTIFICATION.UPDATE_SUCCESSFUL);
          getUserInfo();
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
      userId: _id,
    };
    dispatch(userInfoThunk(params));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      UserServices.updateFile(formData).then((res) => {
        const newSrc = res.data.data;
        setSrcAvatar(newSrc);
      });
    }
  };

  useEffect(() => {
    setValue("name", name);
    setValue("about", about);
  }, [name, about]);

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
            <div className="w-[100px]  h-[100px] bg-bgLogo rounded-full overflow-hidden relative group  ">
              <CustomImg
                src={srcAvatar}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
              <div className="absolute h-full w-full top-0 text-center opacity-0 group-hover:opacity-80 text-white  transition-opacity duration-500 ">
                <div className="h-[50%] flex justify-center items-center"></div>
                <div className="h-[50%] flex justify-center items-center bg-bgHoverAvatar5 cursor-pointer">
                  <label className="cursor-pointer" htmlFor="formId">
                    <input
                      name=""
                      type="file"
                      id="formId"
                      accept="image/*"
                      hidden
                      onChange={handleFileChange}
                    />
                    <SvgUpload />
                  </label>
                  <SvgEye className="w-5 h-5 fill-white ml-[10px]" />
                </div>
              </div>
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
