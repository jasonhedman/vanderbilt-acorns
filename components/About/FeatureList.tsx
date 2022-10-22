import React from 'react'

import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'

const items = [
    "Token-gated Discord and Telegram servers for community management, messaging, and video conferencing",
    "Participate in exclusive workspaces through Google Suite and GitHub integrations",
    "Gain exposure to and attend Token-gated events (virtual and IRL) through Luma and Gatekeeper integrations",
    "Access exclusive knowledge bases through Lobby Wiki integrations"
]

const FeatureList = () => {
  return (
    <UnorderedList>
        {
            items.map((item, index) => (
                <ListItem
                    key={index}
                    color='white'
                >
                    {item}
                </ListItem>
            ))
        }
    </UnorderedList>
  )
}

export default FeatureList