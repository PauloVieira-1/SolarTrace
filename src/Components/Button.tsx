import { Button } from "react-bootstrap";

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children: string;
    variant: "light" | "secondary" | "outline-secondary" | "outline-light";
}

function ButtonComponent({ className, onClick, children, variant}: ButtonProps) {
    return (
        <Button
            className={`btn btn-${variant} ${className} ${variant === "light" || variant==="secondary" ? "remove-border" : ""} rounded-5 px-5 w-0  py-2 text-center custom-button`}
            onClick={onClick}
            variant={variant}
        >
            {children}
        </Button>
    );
}


export default ButtonComponent