import { startGoogleAuth } from "../services/authService";

export default function useAuthActions(){
  const googleLogin = async()=>{
    return startGoogleAuth();
  };

  return {googleLogin};
}
