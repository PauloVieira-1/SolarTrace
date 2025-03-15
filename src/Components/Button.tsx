import { Button } from "react-bootstrap";

interface ButtonProps {
    className?: string;
    onClick: () => void;
    children: string;
    variant: "light" | "secondary" | "outline-secondary" | "outline-light";
}

function ButtonComponent({ className, onClick, children, variant}: ButtonProps) {
    return (
        <Button
            className={`btn btn-${variant} ${className} rounded-5 px-5 w-50 text-white py-2`}
            onClick={onClick}
            variant={variant}
        >
            {children}
        </Button>
    );
}


export default ButtonComponent