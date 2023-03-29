// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const fetchPost = async (endpoint, opts = {}) => {
//     const token = await AsyncStorage.getItem('token')
//     const options = { method: 'post', body: JSON.stringify(opts), headers: { 'Content-Type': 'application/json', 'Authorization': token } }
//     return fetch(`${endpoint}`, options)
//         .then((response) => {
//             const statusCode = response.status;
//             return Promise.all([statusCode, response.json()])
//         })
// }

// export const makeRequest = async (endpoint, params = {}) => {
//     const token = await AsyncStorage.getItem('token')
//     const options = { headers: { 'Content-Type': 'application/json', 'Authorization': token } }
//     return fetch(`${endpoint}`, options)
//         .then((response) => {
//             const statusCode = response.status;
//             return Promise.all([statusCode, response.json()])
//         })
// }
