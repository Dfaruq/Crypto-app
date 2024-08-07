import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';


function CryptoCurrencyInfo () {
    const [cryptoData, updateCryptoData] = useState([])
    const [fetchingData, updateFetchingData] = useState(false)

    useEffect(() => {
        fetchCryptoData()
    }, [])

    function fetchCryptoData() {
        updateFetchingData(true);
        axios.get('https://api.coinlore.net/api/tickers/')
            .then(function (response) {
                updateCryptoData(response.data.data);
                updateFetchingData(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

function renderCryptoTable() {
    const selectedKeys = ['symbol', 'name', 'price_usd', 'price_btc']
    if (cryptoData.length) {
        const tableHeadings = [];
        const tableRows = [];
        cryptoData.map((item, index) => {
            const rowItems = [];
            for (let key in item) {
                if (selectedKeys.includes(key)) {
                    if (index === 0) {
                        tableHeadings.push(
                            <th scope="col" className={"text-capitalize"} key={key}>
                                {key.replace('_', ' ')}
                            </th>
                        );
                    }
                    rowItems.push(<td key={item[key] + Math.random()}>{item[key]}</td>)
                }
            }
            tableRows.push(
              <tr>
                {rowItems}
              </tr> 
            )
        });
        return (
            <table className="table table-striped table-dark">
                <thead className="thead-dark">
                    <tr>
                        {tableHeadings}
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        )
    }
}
if(fetchingData) {
    return (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}
    return (
        <div className="container">
            {renderCryptoTable()}
        </div>
    )
}

export default CryptoCurrencyInfo;