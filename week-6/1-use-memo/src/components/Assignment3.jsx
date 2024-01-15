import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Pepper', value: 20},
        { name: 'Gobi', value: 15}
    ]);

    // Your code starts here

    // const expensiveTask = useMemo(()=>{
    //     let totalValue = 0;
    //     items.forEach((item) =>{
    //         totalValue += item.value; 
    //     })
    //     return totalValue;
    // } ,[items])


    // Using reduce function
    const expensiveTask = useMemo(() => {
        const task = items.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.value;
        },0)
        return task;
    }, [items])

    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {expensiveTask}</p>
        </div>
    );
};

export default Assignment3;