import React from "react";
import FeatureList from "./FeatureList";

interface Section {
    title: string,
    description: string,
    content?: React.ReactNode
}

const sections: Section[] = [
    {
        title: "Getting Started",
        description: "To get started, use your Vanderbilt email to mint your Acorn."
    },
    {
        title: "What is an Acorn?",
        description: "An Acorn is a digital certificate that verifies one’s distinction in the Vanderbilt community. An Acorn grants the user access to the Acorn Platform, which serves as a unifying Hub for Vanderbilt identities and communities. Currently, there lacks a central, unified platform for interacting with members of the Vanderbilt community (students, instructors, administrators, alumni, etc.). Acorn addresses this by providing each member of the community a unique and immutable certificate verifying their identity, and granting them access to protected services and communities."
    },
    {
        title: "Acorn Hub",
        description: "The Acorn token is accompanied by our Acorn interface, which serves as the all-in-one hub for leveraging the functionality Acorns provide. The Acorn Hub is essentially a portal for accessing Token-gated community services and groups. These include:",
        content: FeatureList()
    },
    {
        title: "Replacing SSO",
        description: "In the short term, Acorn technology has the potential to replace Single Sign On (SSO) as a mechanism for verifying user identity."
    },
    {
        title: "The Vision",
        description: "Further down the road, Acorns have the potential to take our educational experiences and put them on the public ledger as a proof of work, backed with digital signatures of completing the course. Under this assumption, instructors and students would engage in two-way accountability, where academic tokens serve to accreditate students and teachers both. These academic tokens can be displayed publicly (or not) as an online library or “trophy case” of experiences and courses.This  vision would effectively create a more robust and effective résumé, and also allows for more opportunities to interface with companies. Education could become more \"collectable\" and valued. Institutional education would arguably improve because the individual classes would matter more as opposed to being bundled into a degree and hidden."
    }
]

export default sections;