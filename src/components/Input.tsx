import React from "react";

const Input = ({ className, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
	return <input className={`app-input ${className}`} {...rest} />;
};

export default Input;
