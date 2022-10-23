import { Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../../utilities/Card'

interface Props {
  email: string;
}

const AwaitingVerification : React.FC<Props> = ({ email }) => {
  return (
    <Card>
        <Text
          fontSize='xl'
          fontWeight='bold'
        >
          Verify your Email
        </Text>
        <Text>
          Check your email {email} for a verification link
        </Text>
    </Card>
  )
}

export default AwaitingVerification