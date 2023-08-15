export function useCheckUserName(_username){
    return _username
}
export function useCheckPwd(_password){
  return  _password.length >= 6 && _password.length <= 20
}
export function useCheckConfirmPwd(_password,_confirmPwd){
    return _password == _confirmPwd
}

