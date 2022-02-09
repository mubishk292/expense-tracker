import { ThemeContext } from '../../App'
import { useContext, useRef } from 'react'
import './transHistory.css'

export default () => {
    let { transactions, deleteTransaction } = useContext(ThemeContext)
    return <div>
        <h3>Transaction History</h3>
        <ol className='userList'>
            {
                transactions.map((transaction , index) => {
                    return <li  id='perTransaction' className={transaction.amount > 0 ? "positive" : "negative"}>
                        {

                            <span className='amount description'>{transaction.description}</span>}
                        <span className='amount mainAmount'>{transaction.amount}</span>
                        <button className="del-btn" onClick={function delTransac() {

                            transactions.splice(index, 1);
                            deleteTransaction([...transactions]);

                        }}>X</button>
                    </li>

                })
            }
        </ol>

    </div>
}