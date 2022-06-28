import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { getProperties } from "./api/property-service";
import CustomRoutes from "./router/custom-routes";
import { useStore } from "./store";
import { setProperties } from "./store/property/propertyActions";
import { getUser } from "./api/user-service";
import { loginSuccess } from "./store/user/userActions";

import "swiper/css/bundle";
import { getUser } from "./api/user-service";
import { loginSuccess } from "./store/user/userActions";



const App=()=> {
  const [loading, setLoading] = useState(true);
  const {dispatchUser,dispatchProperty} = useStore();


  const loadData = async () =>  { 
    try {
     let resp= await getProperties();
     dispatchProperty(setProperties(resp.data))
      console.log(resp.data)

      const token = localStorage.getItem("token");
      if(token){
        resp = await getUser();
        dispatchUser(loginSuccess(resp.data));
      }

      setLoading(false);
      
      // const token=localStorage.getItem("token");
      // if(token){

      // // token i olmayan ya da ilk defa giren kullanici icin yetkisiz giris burada token bekliyor
      // // hata veriyor err gidiyor ve getvehicle e gitmeden err gidiyor bundan dolayi araclar uste yerlestirildi
      //  resp = await getUser();/**sencron yapiya geciyoruz awaite ile cevabi bekle sonra diger asamaya gec await icin async dememiz lazim */
      // dispatchUser(loginSuccess(resp.data));
      // }

     
      
      // setLoading(false);//server a gidip cevap gelince false a cekiyoruz
      
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  // if(loading) 
  //   // return(<LoadingPage/>)
  // // else
      
  return (
<>
      
      <CustomRoutes/>
      <ToastContainer/>

      </>
  );

}

export default App;
