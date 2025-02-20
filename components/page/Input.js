export default function Input({type, text, id, placeholder}){

    return(
        <div className="flex flex-col items-center space-y-2">  
            <label htmlFor={id} className="text-2xl">{text}</label>
            <input type={type} placeholder={placeholder} className="border px-4 py-2" id={id}/>
        </div>
    )

}