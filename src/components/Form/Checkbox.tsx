interface CheckboxProps {
    id: string;
    required?: boolean;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, id, required, checked, label }) => {
    return (
        <div className="flex w-full items-center gap-2 justify-center">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                required={required}
                className="bg-[#224957] appearance-none rounded-md w-[18px] h-[18px] checked:bg-[#224957] checked:border-transparent focus:outline-none"
            />
            <label htmlFor={id}>{label}</label>
        </div>
                    
    );
};
export default Checkbox;
