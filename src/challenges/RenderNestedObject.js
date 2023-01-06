function RenderNestedObject({ nestedObject }) {


    return <>
        {Object.entries(nestedObject).map(([key, value]) => {
            if (typeof value === "object") {
                return <>
                    <h1>
                        {key} :
                        <div className="ps-5">
                            <RenderNestedObject nestedObject={value} />
                        </div>
                    </h1>

                </>
            } else {
                return <h1>{key} : {value}</h1>
            }

        })}
    </>
}


export default RenderNestedObject;