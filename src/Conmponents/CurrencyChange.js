import React, {useEffect, useState} from 'react';

const CurrencyChange = ({currencyList, exchangedValue, yesterdayCurrency}) => {
    const [currency, setCurrency] = useState(0)
    const [todayChange, setTodayChange] = useState(0)

    useEffect(() => {
        setTodayChange((currencyList[exchangedValue["to"].currency] / currencyList[exchangedValue["from"].currency] - yesterdayCurrency[exchangedValue["to"].currency] / yesterdayCurrency[exchangedValue["from"].currency]).toFixed(6))
    }, [exchangedValue["from"].currency, currencyList])

    useEffect(() => {
        setCurrency(currencyList[exchangedValue["to"].currency] / currencyList[exchangedValue["from"].currency])
    }, [currencyList, exchangedValue])

    return (
        <>
            <div>
                <label>Today currency</label>
                <div>{(currencyList[exchangedValue["to"].currency] / currencyList[exchangedValue["from"].currency]).toFixed(6)}</div>
            </div>
            <div>
                <div>
                    <label>Today change</label>
                    <div className={todayChange === 0 ? "" : todayChange > 0 ? "Green" : "Red"}>
                        {todayChange} ({(todayChange * 100 / currency).toFixed(2)}%)
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrencyChange;
