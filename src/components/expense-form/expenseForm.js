import { ThemeContext } from '../../App'
import { useContext } from 'react'
import './form.css'
export default () => {
    let { transactions } = useContext(ThemeContext)
    let currentBalance = 0.00
    let income = 0.00
    let expense = 0.00

    transactions.forEach((transaction) => {
        currentBalance += +transaction.amount;
    })

    transactions.filter((transaction) => {
        if (transaction.amount[0] == '-') {
            expense += +transaction.amount
        } else {
            income += +transaction.amount
        }
    })


    return <div className='mainDiv'>
        <h3>Expense Tracker by Mubeen Ahmad</h3>

        <h4>
            Current Balance <br /> {'$'} {currentBalance}
        </h4>

        <div className='mainIncomeBox'>

            <div className='incomeDiv'>
                <h5>Income</h5>
                <p className='money'> {income} </p>
            </div>
            <div className='expenseDiv'>
                <h5> Expense </h5>
                <p className='money'> {expense} </p>
            </div>
        </div>
        <div>

        </div>


    </div>
}