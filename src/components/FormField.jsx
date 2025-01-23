import React from 'react'

function FormField(props) {
    const { label, input, register } = props;
  return (
    <div>
    <label htmlFor={input.id}>{label.text}</label>
    <input
      type={input.type}
      id={input.id}
      className={input.className}
      {...register(`${register.name}`, { required: `${register.required}` })}
    />
    {errors[register.name] && (
      <p style={{ color: "red" }}>{errors[register.name].message}</p>
    )}
    </div>
  )
}

export default FormField