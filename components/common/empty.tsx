import { CalendarHeartIcon } from "lucide-react"


export const Empty = ({message}:{message:string}) => {
    return (
        <div className="border flex flex-col justify-center items-center p-12 space-y-2">
            <CalendarHeartIcon />
            <p className="text-center p-2">{message}</p>
        </div>
    )
}
