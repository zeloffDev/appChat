type Props = {
  className?: string;
};

export const SvgMassage = (props: Props) => {
  const { className } = props;
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : "dark:stroke-white stroke-black "}
    >
      <path
        d="M4.2565 16.5937C3.13983 14.7097 2.74924 12.4829 3.15804 10.3313C3.56684 8.17977 4.74693 6.2514 6.47677 4.90826C8.2066 3.56511 10.3672 2.89955 12.553 3.03654C14.7388 3.17352 16.7994 4.10362 18.348 5.65222C19.8966 7.20083 20.8267 9.26144 20.9637 11.4472C21.1007 13.633 20.4351 15.7936 19.0919 17.5234C17.7488 19.2533 15.8204 20.4334 13.6689 20.8422C11.5173 21.251 9.29049 20.8604 7.4065 19.7437V19.7437L4.294 20.6249C4.16648 20.6622 4.03128 20.6646 3.90256 20.6316C3.77384 20.5987 3.65635 20.5318 3.5624 20.4378C3.46845 20.3439 3.4015 20.2264 3.36858 20.0976C3.33565 19.9689 3.33796 19.8337 3.37525 19.7062L4.2565 16.5937Z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z"
        fill="white"
      />
      <path
        d="M7.5 13.125C8.12132 13.125 8.625 12.6213 8.625 12C8.625 11.3787 8.12132 10.875 7.5 10.875C6.87868 10.875 6.375 11.3787 6.375 12C6.375 12.6213 6.87868 13.125 7.5 13.125Z"
        fill="white"
      />
      <path
        d="M16.5 13.125C17.1213 13.125 17.625 12.6213 17.625 12C17.625 11.3787 17.1213 10.875 16.5 10.875C15.8787 10.875 15.375 11.3787 15.375 12C15.375 12.6213 15.8787 13.125 16.5 13.125Z"
        fill="white"
      />
    </svg>
  );
};
