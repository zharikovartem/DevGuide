import { LoginOutlined } from '@ant-design/icons';
import { CredentialsType } from '../Redux/redmineReducer'
import { instance, url } from './API'

export const redmineAPI = {
  checkCreds(data: CredentialsType) {

  //     return instance.get('/projects.json')
  //   .then(response => {
  //     return response.status === 200 ? response : null;
  //   })
  //   .catch(err => {
  //     if (err.response) {
  //       return err.response;
  //     } else if (err.request) {
  //     } else {
  //     }
  //     return null;
  //   })

  //   return fetch(url + '/projects.json', {
  //     method: 'GET',
  //     // body: JSON.stringify(data),
  //     headers: {
  //       // Authorization: 'Bearer ' + localStorage.getItem('apikey'),
  //       'Content-Type': 'application/json',
  //       'Accept': "application/json"
  //     }
  //   })
  //     .then((data) => {
  //       return data.json()
  //     })
  //     .then((json) => {
  //       console.log(json)
  //       return json
  //     })

  const xhr = new XMLHttpRequest();

  // xhr.withCredentials = true;
  
  xhr.open('GET', 'https://redmine.smartdesign.by', true, 'a.zharikov@krios.by', 'gfhjkm4501')
  // xhr.open('GET', 'https://a.zharikov%40krios.by:gfhjkm4501@redmine.smartdesign.by/projects.json?')

  // xhr.withCredentials = true;
  // xhr.setRequestHeader("Authorization", "Basic " + "a.zharikov@smartdesign.by:gfhjkm4501");

  xhr.send();
  // this.setState({ isLoading: true })

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return false
    }

    if (xhr.status !== 200) {
      console.log(xhr.status + ': ' + xhr.statusText)
    } else {
      console.log(JSON.parse(xhr.responseText)) 
      // this.setState({
      //   data: JSON.parse(xhr.responseText),
      //   isLoading: false,
      // })
    }
  }

  },

  Login() {
    // https://redmine.smartdesign.by/login

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://redmine.smartdesign.by/projects.json', true, 'a.zharikov@krios.by', 'gfhjkm4501')
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return false
      }
  
      if (xhr.status !== 200) {
        console.log(xhr.status + ': ' + xhr.statusText)
      } else {
        console.log(JSON.parse(xhr.responseText)) 
      }
    }

  }
}