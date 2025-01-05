import { useEffect, useState } from 'react'
import axios from 'axios'

function CanliSonuclar() {

    const [data, setData] = useState([]);
    const [choice, setChoice] = useState();
    let league = "";
    let header = "";

    useEffect(() => {
        getResult();
    }, [choice])

    switch (choice) {
        case "0":
            league = "super-lig"
            header = "Trendyol Süper Lig"
            break;
        case "1":
            league = "tff-1-lig"
            header = "TFF 1. Lig"
            break;
        case "2":
            league = "ingiltere-premier-ligi"
            header = "İngiltere Premier Ligi"
            break;
        case "3":
            league = "fransa-ligue-1"
            header = "Fransa Ligue 1"
            break;
        case "4":
            league = "almanya-bundesliga"
            header = "Almanya Bundesliga"
            break;
        case "5":
            league = "ispanya-la-liga"
            header = "İspanya La Liga"
            break;
        case "6":
            league = "italya-serie-a-ligi"
            header = "İtalya Serie A"
            break;
        default:
            league = "super-lig"
            header = "Trendyol Süper Lig"
    }

    const getResult = async () => {
        const response = await axios.get(`https://api.collectapi.com/football/results?data.league=${league}`, {

            headers: {
                'authorization': 'YOUR-API-KEY',
                'content-type': 'application/json'
            }
        });
        setData(response.data.result)
    }

    return (
        <div className='container mt-4'>
            <div className='selector'>
                <h2 className='mb-2 '>{header}</h2>
                <select className="form-select mb-4 w-25" defaultValue="choose"
                    onChange={e => setChoice(e.target.value)}>
                    <option value="choose">Lig Seçiniz...</option>
                    <option value="0">Trendyol Süper Lig</option>
                    <option value="1">TFF 1. Lig</option>
                    <option value="2">İngiltere Premier Lig</option>
                    <option value="3">Fransa Ligue 1</option>
                    <option value="4">Almanya Bundesliga</option>
                    <option value="5">İspanya La Liga</option>
                    <option value="6">İtalya Serie A</option>
                </select>
            </div>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="colSpan">Tarih</th>
                        <th scope="colSpan">Ev Sahibi</th>
                        <th scope="colSpan">Skor</th>
                        <th scope="colSpan">Deplasman</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, index) =>
                        (
                            <tr key={index}>
                                <td>{new Date(item.date).toLocaleString()}</td>
                                <td>{item.home}</td>
                                <td>{item.skor}</td>
                                <td>{item.away}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CanliSonuclar