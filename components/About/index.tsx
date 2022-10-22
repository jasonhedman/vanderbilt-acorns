import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

import content from './content'

const About = () => {
  return (
    <Flex
        flexDirection="column"
        gap={8}
    >
        <Text
            fontSize='4xl'
            fontWeight='bold'
        >
            About
        </Text>
        {
            content.map((section) => (
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
            ))

        }
    </Flex>
  )
}

export default About