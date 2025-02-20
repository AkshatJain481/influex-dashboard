import { ClipLoader } from "react-spinners";

const Button = ({
  text,
  loading,
  onClick = () => {},
  className = "",
  LoaderSize = 20,
  icon,
  type = "button",
  disabled = false,
}: {
  text: string;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  LoaderSize?: number;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={loading || disabled}
      onClick={onClick}
      type={type}
      className={`${className} disabled:cursor-not-allowed hover:bg-slate-700 text-lg font-semibold bg-black cursor-pointer text-white disabled:bg-purple-400 flex space-x-2 items-center`}
    >
      {loading != null ? (
        <>
          {loading ? (
            <ClipLoader color="white" size={LoaderSize} speedMultiplier={1} />
          ) : (
            icon
          )}
        </>
      ) : (
        icon
      )}
      <span>{text}</span>
    </button>
  );
};

export default Button;
