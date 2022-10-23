import React, { ChangeEvent } from 'react'

import { Input, Text, Flex, Button } from '@chakra-ui/react'

import Card from '../../utilities/Card'
import useRegister from '../../../hooks/useRegister'

const RegisterFlow = () => {


  const { blur, error, handleEmailBlur, handleEmailChange, handleEmailSubmit } = useRegister();

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
          onClick={() => handleEmailSubmit()}
        >
          Verify
        </Button>
      </Flex>
    </Card>
  )
}

export default RegisterFlow