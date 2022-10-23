import React from 'react'

import Card from '../../utilities/Card'

import {Image, Text, Flex} from '@chakra-ui/react'

const IntegrationInfo = () => {
  return (
    <Card>
        <Flex
            flexDirection="column"
            gap={4}
        >
            <Text
                fontSize='2xl'
                fontWeight='bold'
                color='brand.500'
            >
                Ecosystem
            </Text>
            <Text>
                Holding an Acorn grants you access to the Vanderbilt Syndicate Investment Club, Snapshot Governance DAO, token-gated Google Workspace and GitHub, private Discord server, and Telegram messaging group.
            </Text>
            <Image 
                src="/LandingFINAL.png"
            />
        </Flex>
    </Card>
  )
}

export default IntegrationInfo