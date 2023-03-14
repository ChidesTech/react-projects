import { useState } from "react"
// Learn these array methods
// map, filter, reduce
export default function Budget() {
    const [item, setItem] = useState("");
    const [price, setPrice] = useState();
    const [items, setItems] = useState([]);


    function submitHandler(e){
       e.preventDefault(); //Prevent the form from submitting and forcefully reloading the page
       setItems([...items , {id : Date.now(), item : item , price : Number(price)}]);
       setItem("");
       setPrice("");

    }

    return <>
        <div>
            <form onSubmit={submitHandler} className="budget-header form d-flex m-5 p-4 border border-warning rounded">
                <input value={item} onChange={e => setItem(e.target.value)} type="text" className="form-control py-4 fs-5" placeholder="Enter Budget Item" />
                <input value={price} onChange={e => setPrice(e.target.value)} type="number" className="form-control mx-4 fs-5" min="0" placeholder="Enter Budget Price" />
                <button className="form-control btn btn-warning fs-5">Add Budget</button>
            </form>
     
               <div className="total-budget">Total = ₦400000000</div>     
             
            <div className="budget-body mx-5">
                {items.map(x => {
                  return <div key={x.id} className="budget bg-warning  p-3 fs-4 mx-auto rounded mb-1">
                  <span > {x.item} </span>
                  <span>₦{x.price && x.price.toLocaleString()}</span>
                  <span className="btn btn-danger">Delete</span>
              </div>
                })}
                
            </div>
        </div>
    </>
}