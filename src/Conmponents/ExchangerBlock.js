import React, {useEffect, useState} from 'react';

const ExchangerBlock = (props) => {
    const changeCurrencyHandler = () => (e) => props.setExchangedValue({...props.exchangedValue, [props.ExKey]: {currency: e.target.value}})
    const changeValueHandler = () => (e) => {
        props.setOperationKey(props.ExKey)
        props.setExchangedValue({...props.exchangedValue, value: e.target.value})
    }
        // value: props.exchangedValue[props.ExKey].value / props.currencyList[props.exchangedValue.currency] * props.currencyList[props.exchangedValue["from"].currency]

    useEffect(() => {
    }, [props.exchangedValue[props.exchangedValue[props.ExKey].currency]])

    return (
        <div className="exchangeBlock">
            <div className="exchangeTitle">
                <span>
                    <label>{props.ExKey}</label>
                </span>
                <select className="select" value={props.exchangedValue[props.ExKey].currency} onChange={changeCurrencyHandler()} >
                    {Object.keys(props.currencyList).map(item => <option key={item} value={item}>{item} - {props.currencyLabelList[item]} - {props.currencySymbols[item]}</option>)}
                </select>
            </div>
            <div className="exchangeValue">
                <input
                    type="number"
                    value={props.exchangedValue.operationKey === props.ExKey ? props.exchangedValue.value :
                        (props.exchangedValue.value * props.currencyList[props.exchangedValue[props.ExKey].currency] /
                        props.currencyList[props.exchangedValue[props.ExKey === "from" ? "to" : "from"].currency]).toFixed(4)}
                    onChange={changeValueHandler()}/>
            </div>
        </div>
    );
}

export default ExchangerBlock;
