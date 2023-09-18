const initialValue = {
  report: 0,
  estimated: 0,
  aboutUs: 0,
  connect: 0
};

interface IAction {
  type: string;
  payload: number;
}

const useLocationComponents = (state = initialValue, action: IAction) => {
  if (action.type === "REPORT") {
    return { ...state, report: action.payload };
  }

  if (action.type === "ESTIMATED") {
    return { ...state, estimated: action.payload };
  }

  if (action.type === "ABOUTUS") {
    return { ...state, aboutUs: action.payload };
  }

  if (action.type === "CONNECT") {
    return { ...state, connect: action.payload };
  }

  return state;
};

export default useLocationComponents;
