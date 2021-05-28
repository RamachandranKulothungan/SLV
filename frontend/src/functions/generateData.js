export function createSlots(){
    let start_time = 0;
    let slots=[];
    while(start_time < 2400){
        slots.push(createTimeString(start_time)+" to "+createTimeString(start_time+100));
        start_time+=100;
    }
    return slots;
}

function createTimeString(time){
    let time_string;
    let no_of_leading_zeroes;
    time === 0 ? no_of_leading_zeroes = 3 : no_of_leading_zeroes = 3 - Math.floor(Math.log10(time));
    time_string = "0".repeat(no_of_leading_zeroes) + time;
    return time_string;
}