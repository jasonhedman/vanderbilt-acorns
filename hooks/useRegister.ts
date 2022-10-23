import { sendSignInLinkToEmail } from "firebase/auth";
import { useState, ChangeEvent } from "react";
import { auth } from "../firebase/init";

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.vanderbiltacorns.tech/',
    handleCodeInApp: true,
  };
  

const useRegister = () => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState(true);
    const [blur, setBlur] = useState(false);

    const handleEmailChange = (e : ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleEmailBlur = () => {
        setBlur(true);
        if(email.includes('@vanderbilt.edu')){
            setError(false);
        } else {
            setError(true);
        }
    }

    const handleEmailSubmit = async () => {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                console.log(email);
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                // ...
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
    }

    return {
        error,
        blur,
        handleEmailBlur,
        handleEmailChange,
        handleEmailSubmit
    }

}

export default useRegister;