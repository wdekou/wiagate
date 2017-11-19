import Api from "../../../Api";

let api;

export const createWisp = ({name, slug, welcomeMessage}) => (dispatch, getState) => {
  const { token } = getState();
  
  api = new Api(token);

  api.post('/wisps/create', {name, slug, welcomeMessage}).then((res) => {
    res.json().then((data) => {
      console.log(data)
    })
  }, (err) => {

  })
  

  
}
