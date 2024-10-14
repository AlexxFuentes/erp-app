import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

interface Props<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: React.ReactNode;
    label: Path<T>;
    required: boolean;
    register: UseFormRegister<T>;
}

export function Input<T extends FieldValues>({ label, register, required, icon, ...props }: Props<T>) {

    return (
        <label className='input input-bordered flex items-center gap-2'>
            {icon}
            <input
                className='grow'
                {...props}
                {
                    ...register(label, {
                        required: required ? 'Este campo es requerido' : false,
                    })
                }
            />
        </label>
    )
}