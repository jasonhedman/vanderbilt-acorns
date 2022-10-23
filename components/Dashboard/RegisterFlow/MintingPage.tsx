import { Button, Text, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Card from '../../utilities/Card'

const MintingPage = () => {

    return (
        <Card>
            <Flex
                justifyContent='space-between'
                alignItems='center'
                gap={4}
            >
                <Flex
                    flexDirection="column"
                    alignItems='flex-start'
                    gap={4}
                >
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color='brand.500'
                    >
                        Mint Your Acorn
                    </Text>
                    <Text>
                        Minting an Acorn grants you access to the Acorns Hub, which includes the Vanderbilt Syndicate Investment Club, Snapshot Governance DAO, token-gated Google Workspace and GitHub, private Discord server, and Telegram messaging group.
                    </Text>
                    <a
                        href='https://app.syndicate.io/collectives/0x1c0D5AAECaD71433eaEEd1c60912A6503d6B549B?chain=mainnet'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button
                            bg="brand.500"
                            colorScheme="brand"
                            _hover={{
                                bg: 'brand.800',
                            }}
                        >
                            Mint
                        </Button>
                    </a>
                </Flex>
                <Image 
                    src="/AcornSQUARE.png"
                    height='200px'
                    alt='acorn card'
                />
            </Flex>
        </Card>
    )
}

export default MintingPage