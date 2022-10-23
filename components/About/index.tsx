import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

import content from './content'
import Card from '../utilities/Card'

const About = () => {
  return (
    <Flex
        flexDirection="column"
        gap={4}
    >
        <Card>
            <Text
                fontSize='4xl'
                fontWeight='bold'
            >
                About
            </Text>
        </Card>
        {
            content.map((section) => (
                <Card>
                    <Flex
                        flexDirection="column"
                        gap={2}
                        key={section.title}
                    >
                        <Text
                            fontSize='2xl'
                            fontWeight='bold'
                        >
                            {section.title}
                        </Text>
                        <Text>
                            {section.description}
                        </Text>
                        {section.content}
                    </Flex>
                </Card>
            ))

        }
    </Flex>
  )
}

export default About