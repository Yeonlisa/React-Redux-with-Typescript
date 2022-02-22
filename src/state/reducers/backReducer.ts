const initialState = 0;

interface DepositAction {
    type: "deposit"
    payload: number
}

interface WithdrawAction {
    type: "withdraw"
    payload: number
}

interface BankruptAction {
    type: "backrupt"
}

type Action = DepositAction | WithdrawAction | BankruptAction;

const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        case "backrupt":
            return 0;
        default:
            return state;
    }
}

export default reducer;