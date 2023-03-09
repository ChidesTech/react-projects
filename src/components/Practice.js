import { useState } from "react"


export default function Practice() {
 const [players , setPlayers] = useState(
    ["Messi", "Ronaldo", "Neymar", "Benzema", "Lewandowski", "Mbappe", "Modric"]
    )

  const  newPlayers = [...players , "Lukaku", "Pulisic"];
  console.log(newPlayers)
    return <>
        <div className="todolist-body w-75 mx-auto mt-3">
           {players.map(player => {
            return   <div className="todo p-3 fs-5 bg-primary text-white mb-1 rounded">{player}</div>
           })}

        </div>
    </>
}