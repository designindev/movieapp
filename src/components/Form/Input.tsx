interface InputProps {
    type: 'email' | 'password' | 'text';
    placeholder?: string;
    value?: string | boolean;
    id: string;
    required?: boolean;
    checked?: boolean;
    maxw?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, maxw, onChange, id, required }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value as string}
            onChange={onChange}
            className="rounded-[10px] py-[10px] px-4 bg-input text-white w-full"
            id={id}
            required={required}
        />
    );
};
export default Input;
