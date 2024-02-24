import dateFormater from 'dateformat';
import { useEffect, useState } from 'react';

export default function useDateConverter(dateInput:number | Date,dateFormat:string,inputIsTimestamp:boolean=false):string|null{
    const [formatedDate, setFormatedDate] = useState< string | null>(null)
     
    useEffect(() => {
        const date = inputIsTimestamp ? new Date(dateInput) : dateInput;
        setFormatedDate(dateFormater(date, 'dd.mm.yyyy'));
    }, [dateInput, dateFormat, inputIsTimestamp]);

return formatedDate;
}