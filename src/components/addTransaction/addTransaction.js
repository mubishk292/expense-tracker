import { useForm } from "react-hook-form"
import {ThemeContext} from '../../App'
import { useState,useContext } from 'react'

export default () => {
    let {transactions , getTransaction} = useContext(ThemeContext)
   
    let { register, handleSubmit } = useForm();
 

    const addTransaction = (data)=> {

        console.log(data);
         getTransaction(data)

        
    }

    return <div>
        <h4>
            Add new Transaction
        </h4>

        <form onSubmit={handleSubmit(addTransaction)}>
            <div>
                <h5>
                    Description
                </h5>
                <input type='text' {...register('description', {required : true})}  />
            </div>
            <div>
                <h5>
                    Transaction Amount
                </h5>
                <input type='number' {...register('amount', {required : true})}/>
            </div>

            <button className="waves-effect waves-light btn">Add the Transaction</button>
        </form>
    </div>
}