import react from 'react';

export default function SlotDropdown({slots}){
    return(
        <select>
            {
                slots.map((slot)=>{
                    return(
                        <option value={slot}>{slot}</option>
                        )
            })
            }
        </select>
    );
}