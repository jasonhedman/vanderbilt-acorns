import React, { ChangeEvent } from 'react'

import { Input, Text, Flex, Button } from '@chakra-ui/react'

import Card from '../../utilities/Card'

const RegisterFlow = () => {


  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState(true);
  const [blur, setBlur] = React.useState(false);

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

  return (
    <Card>
      <Flex
        flexDirection="column"
        gap={4}
        alignItems="flex-start"
      >
        <Text
          fontSize='xl'
          fontWeight='bold'
        >
          Enter your Vanderbilt email:
        </Text>
        <Text>
          We will send you a verification email to verify your account.
        </Text>
        <Input
          placeholder="Email"
          type="email"
          focusBorderColor='brand.500'
          color='white'
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          isInvalid={blur && error}
        />
        <Button
          disabled={error}
          colorScheme='brand'
          bg='brand.500'
          onClick={() => console.log('clicked')}
        >
          Verify
        </Button>
      </Flex>
    </Card>
  )
}

export default RegisterFlow