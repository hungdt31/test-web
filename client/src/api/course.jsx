import axios from "../../axios"
export const getCourse = async() => {
  try {
      return await axios({
          url: '/courses',
          method: 'get',
      })
  
      // Work with the response...
  } catch (err) {
      // Handle error
      // console.log(err.message)
      return Promise.reject(err);
  }
}
export default getCourse