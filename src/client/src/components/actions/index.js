export const type = 'login';


export const login = text => {
  return { 
    type, 
    payload: text,
  };
};
