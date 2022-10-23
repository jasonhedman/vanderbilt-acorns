import React from 'react'

import useRegister from '../../../hooks/useRegister'
import AwaitingVerification from './AwaitingVerification';
import MintingPage from './MintingPage';
import RegistrationForm from './RegistrationForm';

const RegisterFlow = () => {

  const { 
    blur, 
    error, 
    registered, 
    handleEmailBlur, 
    handleEmailChange, 
    handleEmailSubmit 
  } = useRegister();

  if(registered) {
    return (
      <MintingPage />
      // <AwaitingVerification 
      //   email={email}
      // />
    )
  }

  return (
    <RegistrationForm 
      blur={blur}
      error={error}
      handleEmailBlur={handleEmailBlur}
      handleEmailChange={handleEmailChange}
      handleEmailSubmit={handleEmailSubmit}
    />
  )
}

export default RegisterFlow