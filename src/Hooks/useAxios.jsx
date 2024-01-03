import axios from 'axios';


const useAxios = () => {
    const axiosPublic = axios.create({
        // baseURL: 'http://localhost:5010',
        baseURL: 'https://server-recipe-book.vercel.app',
      });
    return axiosPublic;
};

export default useAxios;