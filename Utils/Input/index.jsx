"use client"
const FieldInput = ({placeholder,field, register, errors}) => {
    return (
        <div className="h-[60px]">
            <input
                placeholder={placeholder}
                {...register(field, { required: true })}
                className="border-2 border-skyBlue w-full px-2 py-[2px] shadow-md" 
                />
            {errors[field] && <span className="text-red-400 text-sm">{field} is required</span>}
        </div>
    )
}

export default FieldInput
