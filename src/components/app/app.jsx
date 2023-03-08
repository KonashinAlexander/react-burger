import { getIngredients } from "../../utils/api"

getIngredients()
    .then(data => console.log(data))


export const Application = () => {
    return <>
    <p>APPLICATION</p>
    </>
}