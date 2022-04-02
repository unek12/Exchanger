import React, {useEffect, useState} from 'react';
import ExchangerBlock from "./ExchangerBlock";
import API from "../utils/API"
import CurrencyChange from "./CurrencyChange";

const Exchanger = () => {
    const [currencyList, setCurrencyList] = useState({"USD": 1, "EUR": 1})
    const [currencyLabelList, setCurrencyLabelList] = useState({})
    const [currencySymbols, setCurrencySymbols] = useState({})
    const [yesterdayCurrency, setYesterdayCurrency] = useState({"USD": 1, "EUR": 1})
    const [operationKey, setOperationKey] = useState("from")
    const [exchangedValue, setExchangedValue] = useState({
        operationKey: "from",
        value: 1,
        from: {
            currency: "USD",
        },
        to: {
            currency: "EUR",
        }
    })

    useEffect(() => {
        API.YesterdayCurrency().then(res => setYesterdayCurrency(res))
        API.CurrenciesLabels().then(res => setCurrencyLabelList(res))
        API.Currencies().then(res => setCurrencyList(res))
        setCurrencySymbols(API.CurrenciesSymbols)
    }, [])

    useEffect(() => {
        setExchangedValue({...exchangedValue, operationKey})
    }, [operationKey])

    useEffect(() => {
    }, [])

    const swap = () => {
        setExchangedValue({
            ...exchangedValue,
            "from": {currency: exchangedValue["to"].currency},
            "to": {currency: exchangedValue["from"].currency}
        })
        console.log(exchangedValue)
    }

    return (
        <div className="exchanger">
            <div className="exchangerBlockContainer">
                <ExchangerBlock ExKey="from" currencyList={currencyList} currencyLabelList={currencyLabelList}
                                setOperationKey={setOperationKey} exchangedValue={exchangedValue}
                                setExchangedValue={setExchangedValue} currencySymbols={currencySymbols}/>
                <ExchangerBlock ExKey="to" currencyList={currencyList} currencyLabelList={currencyLabelList}
                                setOperationKey={setOperationKey} exchangedValue={exchangedValue}
                                setExchangedValue={setExchangedValue} currencySymbols={currencySymbols}/>
            </div>
            <div className="exchangerStats">
                <button className="btn btn-swap" onClick={() => swap()}>swap</button>
                <CurrencyChange currencyList={currencyList} exchangedValue={exchangedValue}
                                yesterdayCurrency={yesterdayCurrency}/>
            </div>
        </div>
    );
}

export default Exchanger;
