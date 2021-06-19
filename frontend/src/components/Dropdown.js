export default function Dropdown({values}){
    return(
        <select>
            {
                values.map((slot)=>{
                    return(
                        <option value={slot}>{slot}</option>
                        )
                })
            }
        </select>
    );
}