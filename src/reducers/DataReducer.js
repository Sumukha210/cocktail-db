export const ADDDATA = "ADDDATA";
export const ADDSINGLEDATA = "ADDSINGLEDATA";
export const ISLOADING = "ISLOADING";
export const ISERROR = "ISERROR";

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ADDDATA:
      return {
        ...state,
        alldata: [...action.payload],
        loading: false,
        error: "",
      };

    case ADDSINGLEDATA:
      const result = state.alldata.filter(
        item => item.idDrink == action.payload
      );
      console.log(result);
      return {
        ...state,
        specificdata: [...result],
      };

    case ISLOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case ISERROR:
      return {
        alldata: [],
        specificdata: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
