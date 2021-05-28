 import Dropdown from '../../components/Dropdown';
 import {createSlots} from '../../functions/generateData';

 export default function CreateSlots(){
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
                        <Dropdown values={createSlots()}/>
                    </td>
                </tr>
                </table>
            </form>
        </div>    
     </>
     );
 }