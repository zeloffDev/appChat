import { SvgPhone } from "@svg/SvgPhone";

type Props = {};

export const HeaderMassage = (props: Props) => {
  return (
    <div className="flex flex-row justify-between items-center h-16 rounded-xl bg-white dark:bg-gray-900/20  w-full px-4">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          A
        </div>
        <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
      </div>
      <div>
        <SvgPhone />
      </div>
    </div>
  );
};
