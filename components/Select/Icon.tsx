type PropsType = {
  isSelected: boolean;
};

function Icon({ isSelected }: PropsType) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z"
        className={isSelected ? 'fill-grey-dark' : 'fill-grey'}
      />
    </svg>
  );
}

export default Icon;
