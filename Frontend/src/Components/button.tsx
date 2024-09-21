interface buttontitle{
    title:string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Button({title,onClick}:buttontitle){
    return(
        <div className="h-14 w-[200px] md:w-[300px] lg:w-[360px] mx-auto ">
             <button className="h-14 w-[200px] md:w-[300px] lg:w-[360px] rounded-full bg-[#3F2305] text-white font-medium text-2xl"
             onClick={onClick}>
                {title}
            </button>
        </div>
        
    );
}