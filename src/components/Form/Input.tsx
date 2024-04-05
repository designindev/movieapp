interface InputProps {
    type: 'email' | 'password' | 'text' | 'date';
    placeholder?: string;
    value?: string | boolean;
    id: string;
    required?: boolean;
    checked?: boolean;
    maxw?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, style, onChange, id, required }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value as string}
            onChange={onChange}
            className="rounded-[10px] py-[10px] px-4 bg-input text-white w-full"
            id={id}
            required={required}
            style={style}
        />
    );
};
export default Input;
