export default function ToggleableSubTasks(){
    const INITIAL_LIST = {
        "Organize closet": [
          { "Donate old clothes and shoes": false },
          { "Buy new shelf": false },
          { "Put in shelf by color": false },
        ],
        "Finish homework": [
          { "Finish math homework": false },
          { "Finish science homework": false },
          { "Finish Reactjs homework": false },
        ],
        "Achieve nirvana": [
          { "Meditate a little": false },
          { "Gain some wisdom": false },
        ],
      };

      
    return <div>
        <div>
            <h1>{INITIAL_LIST["Organize closet"]}</h1>
        </div>
    </div>
}