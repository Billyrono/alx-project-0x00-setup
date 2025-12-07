import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`${styles} border bg-blue-500 text-white`}>
      {title}
    </button>
  );
};

export default Button;
