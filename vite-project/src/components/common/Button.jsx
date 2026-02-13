function Button({ text, onClick, type, optionalClassName }){
    return(
        <button 
            onClick={onClick}
            className={`rounded-2xl py-2 px-6 ${type==="primary"? "bg-blue-500 text-white" : "text-base"} border-none ${optionalClassName}`}
        >
            {text}
        </button>
    )
}

export default Button;