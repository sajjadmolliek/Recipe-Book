import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const usePrivateHook = () => {

    const All = useContext(AuthContext);
    
    return (All);
};


export default usePrivateHook;