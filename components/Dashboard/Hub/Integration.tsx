import React from 'react'

import { Flex, Image, Text, Button } from '@chakra-ui/react'

import Card from '../../utilities/Card'
import { Integration } from '../../../data/integrations'
import Link from 'next/link'

interface Props {
    integration: Integration
}

const Integration : React.FC<Props> = ({ integration }) => {
    return (
        <Card>
            <Flex
                flexDirection="column"
                gap={4}
                h='100%'
                justifyContent='space-between'
            >
                <Flex
                    gap={8}
                    alignItems='center'
                >
                    <Image
                        src={integration.icon}
                        alt={integration.name}
                        width="50px"
                        height="50px"
                        rounded='full'
                    />
                    <Flex
                        flexDirection="column"
                    >
                        <Text
                            fontWeight="bold"
                        >
                            {integration.name}
                        </Text>
                        <Text>
                            {integration.description}
                        </Text>
                    </Flex>
                </Flex>
                <a
                    href={integration.link}
                    target='_blank'
                >
                    <Button
                        colorScheme="whiteAlpha"
                    >
                        {integration.callToAction}
                    </Button>
                </a>
            </Flex>
        </Card>
    )
}

export default Integration