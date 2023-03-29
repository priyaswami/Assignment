/**
 * Context state management reducer
 */

export const initialState = {
  loginInfo: null,
  currentFormData: null,
  domainData: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN_DETAILS":
      return {
        ...state,
        loginInfo: action.loginInfo
      }
    case "SET_CURRENT_FORM_DATA":
      return {
        ...state,
        currentFormData: action.currentFormData
      }
    case "SET_DOMAIN_DATA":
      return {
        ...state,
        domainData: action.domainData
      }
    default:
      return state;
  }
}
