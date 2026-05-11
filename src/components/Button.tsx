interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <>
      <h1>These is my button</h1>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </>
  );
};

export default Button;
