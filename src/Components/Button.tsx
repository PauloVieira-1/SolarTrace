import { Button } from "react-bootstrap";

interface ButtonProps {
    className?: string;
    onClick: () => void;
    children: string;
    variant: "light" | "secondary";
}

function ButtonComponent({ className, onClick, children, variant}: ButtonProps) {
    return (
        <Button
            className={`btn btn-${variant} ${className} rounded-5 px-5 text-white py-2`}
            onClick={onClick}
            variant={variant}
        >
            {children}
        </Button>
    );
}


export default ButtonComponent