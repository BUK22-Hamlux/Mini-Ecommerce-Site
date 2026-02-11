function Button({type, text, onClick, optionalClassName }){
    return(
        <button 
        onClick={onClick}
        type={type}
    className={`rounded-2xl py-2 px-6 border-none ${optionalClassName}`}
        >
            {text}
        </button>
    )
}

export default Button;