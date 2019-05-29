import React from 'react'

const LoginField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div className="form-group">
            <input {...input} type={type} className="form-control" placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

export default LoginField