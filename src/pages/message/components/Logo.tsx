import { SvgLogo } from "@svg/SvgLogo";

type Props = {};

export const Logo = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-center h-12 w-full">
      <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
        <SvgLogo />
      </div>
      <div className="ml-2 font-bold text-2xl">AppChat</div>
    </div>
  );
};
