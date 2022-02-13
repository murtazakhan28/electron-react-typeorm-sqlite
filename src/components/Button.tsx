import React from "react";

const Button = ({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <button className={`app-button ${className}`} {...rest} />;
};

export default Button;
