import React from 'react'

import useRegister from '../../../hooks/useRegister'
import MintingPage from './MintingPage';
import RegistrationForm from './RegistrationForm';

interface Props {
  useBackdoor: () => void
}


const RegisterFlow : React.FC<Props> = ({ useBackdoor}) => {

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
      <MintingPage 
        useBackdoor={useBackdoor}
      />
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