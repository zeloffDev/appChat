type Props = {};

export const SvgLight = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="transistion relative m-auto h-4 w-4 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
};
