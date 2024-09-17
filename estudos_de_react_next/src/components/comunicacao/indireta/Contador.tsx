import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./display";

export default function Contador () {

    const [num, setNum] = useState <number> (0)

    function incrementar () {
        setNum(num + 1)
    }

    return(

        <div className={` flex flex-col p-2
        border border-zinc-400 rounded-lf w-72 h-72`}>
            <Display valor={num}  />
            <Botoes/>
        </div>

    )

} 