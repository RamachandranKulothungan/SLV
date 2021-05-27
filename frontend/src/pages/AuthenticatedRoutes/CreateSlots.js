 import react from 'react';
 import SlotDropdown from '../../Components/SlotDropdown';

 export default function CreateSlots(){
    const slots = [1,2,3]
     return(
     <>
        <div>
            <form>
                <table>
                <tr>
                    <td>
                        <label>Date</label>
                    </td>
                    <td>
                        <input type="date"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Time</label>
                    </td>
                    <td>
                        <SlotDropdown slots={slots}/>
                    </td>
                </tr>
                </table>
            </form>
        </div>    
     </>
     );
 }