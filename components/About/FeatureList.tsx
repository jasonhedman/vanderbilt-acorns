import React from 'react'

import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'

const items = [
    "Vanderbilt Syndicate Investment Club - a collective investment fund where users can deposit USDC and vote on investment decisions, such as buying ETH.",
    "Vanderbilt Governance Snapshot - a governance platform where Acorn holders can propose and vote on Vanderbilt operational improvements. For instance, “Extend Munchie Mart hours to 2 AM during finals week.”",
    "Acorns Google Workspace - a shared Google Drive with token-gated sharing access. Some possible applications include research papers, alumni records, and school contact lists.",
    "Acorns GitHub Workspace - a shared GitHub workspace with token-gated access control. Could be used for open-source community work, job postings",
    "Vanderbilt Discord - a private communication channel for Acorn holders"
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