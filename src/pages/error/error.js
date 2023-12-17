export default function Error(){
    return(
        <div className="w-screen flex flex-col items-center justify-center" style={{height:"calc(100vh - 70px)"}}>
            <div>
                <img src="https://www.ionis361.com/images/404-error.png" className="w-[700px] h-[300px] user-select-none" draggable={false}/>
            </div>
            <div className="font-bold text-2xl ">
            Looks like you are lost
            </div>
        </div>
    )
}