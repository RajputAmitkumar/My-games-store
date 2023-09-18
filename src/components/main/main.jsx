import { useEffect, useState } from "react";
import axios from 'axios'
import Header from "../header/header";
import Item from "../item/item";


const Main = () => {
    const [action, setAction] = useState([])
    const [strategy, setStrategy] = useState([])
    useEffect(() => {
        axios.get('http://localhost:1337/api/actions').then((action) => {
            setAction(action.data.data)
        }).catch(() => {

        }).finally(() => {

        });
        axios.get('http://localhost:1337/api/strategies').then((strategy) => {
            setStrategy(strategy.data.data)
        }).catch(() => {

        }).finally(() => {

        });
    }, [])
    // console.log(action)
    return (
        <>
            <Header />
            <div>
                <div className="genre-name">Action Games</div>
                {action.map((item, key) => {
                    // console.log(item)
                    return <Item item={item.attributes} key={key}/>
                })}
                <div className="genre-name">Strategy Games</div>
                {strategy.map((item,key)=> {
                    return <Item item={item.attributes} key={key}/>
                    
                })}
            </div>
        </>
    )
}

export default Main;


