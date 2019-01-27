// import React from 'react';

// const EditExpensePage = (props) => {
//     console.log(props);
//     return (
//     <div>
//         Editing the expense with id of 
//     </div>
//     );
// };

// // const EditExpensePage = (props) => (
// //     <div>
// //     Editing the expense with id of {props.match.params.id}
// //     </div>
// //     );


// export default EditExpensePage;



import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense, editExpense } from '../actions/expenses';

// const EditExpensePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       Editing the expense with id of {props.match.params.id}
//     </div>
//   );
// };
const EditExpensePage = (props) => {
  //console.log(props);
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}    
      />
      <button onClick={() =>{ 
          props.dispatch(removeExpense({id: props.expense.id}));
          props.history.push('/');
      }}>
        Remove
      </button>

    </div>
  );
};

// const mapStateToProps = (state, props) => {
//   return {
//     expense: state.expenses.find((expense)=>{
//       return expense.id === props.match.params.id
//     })
//   }
// };

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};
//export default EditExpensePage;
export default connect(mapStateToProps)(EditExpensePage);