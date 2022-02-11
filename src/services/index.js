import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const config = {
    apiKey: "AIzaSyCTLzcSRfDnr9SuL0wnfldh23Df2kRmtMw",
    authDomain: "e-commerce-94e60.firebaseapp.com",
    projectId: "e-commerce-94e60",
    storageBucket: "e-commerce-94e60.appspot.com",
    messagingSenderId: "269187709311",
    appId: "1:269187709311:web:0a3d0db97196e8e5a8024a",
  };

  const app = initializeApp(config);
  const db = getFirestore(app)




  //const user = signInWithEmailAndPassword({email:"jovanes.web@gmail.com",password:"hovo1234"})


  export default db
  