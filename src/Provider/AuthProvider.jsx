import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

// import userAxiosSecure from "../hook/userAxiosSecure";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const googleProvider  = new GoogleAuthProvider();
    // const axiosPublic = userAxiosSecure();

    // create user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user
    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // update profile
    const updateUser = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
        })
        }

        // google provider
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    } 



    // current user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            // const userInfo ={ email: currentUser?.email}
            // if(currentUser){
            //     axiosPublic.post('/jwt', userInfo)
            //     .then(res =>{
            //         if(res.data?.token){
            //             localStorage.setItem('access-token', res.data.token)
            //             setLoading(false)
            //         }
            //     })
            // }
            // else{
            //     localStorage.removeItem('access-token')
            //     setLoading(false)
            // }
           
        });
        return () =>{
            return unsubscribe();
        }
    },[])

    // logout user
    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        updateUser,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;