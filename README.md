# ZION - Network State

Zion is a network state based on Music. We are building a
community which shall be united by a strong ideology of
collectivism with the sole aim to make the people of the
community thrive and live a life full of meaning. There for
we are building an Operative System for the DLT technologies
world.

# In this document

- [About the Repo](#about-the-repo)
- [Constitution](#constitution)
  - [Foundations](#foundations)
- [Technical Secion](#technical-section)
  - [Contents](#contents)
  - [Apps](#apps)
    - [Nft Minter](#nft-minter)
    - [Social](#social)

## About the Repo

This repo contains the open source software which will
constitute a solid base for the relazation of all the
informatic technologies needed by the community to crate,
design, project, develop, produce and distribute contents
and goods. </br>Obviously this repo at the time being is
just a first small step towards the ambitious goal.</br>

> ZION follows the DIY concept. We manifestly do pretend to
> own our contents and not rely on third parties
> data-centers. Our applications will grow with the
> engagement of the community, so expect some plain html on
> some pages!

# Constitution

> Zion constitution will be realized through a collective
> effort and it will be deployed on the blockchain.

## Foundations

- Intellectual Ownership
- Citizencentric
- Creativity - Music
- No-Weapons (full world total disarmament)
- Knowledge - Inventions
- Resource-Sharing
- Strong-supports-weak
- SmartContracts-as-law
- Goal towards highers standards
  - Education
  - Experimentations
  - Inventions
  - Creativity
  - Collectivity
  - Financial Systems
  - Mutual Support
- Build trust
  - amongst groups individuals
  - throught the network connections
- Trustless System
  - extend trust between circles/groups
  - censorship resistant

# Technical Section

## Architectural design

The zion-network-state is set to work on a distributed
server system of Kubernetes Clusters. Therefore, every
application is meant to run in a containerized environement,
where the connection between services happens inside the
Kubernetes cluster environment. There for the structure will
composed of several "stand-alone" applications, which would
communicate with instances of other applications deployed in
the containerized environment.
Static contents are served via the IPFS system.
Dynamic contents need a server who provides the informations
required by the client, therefore Zion uses a distributed
network of master and worker nodes, who will be loading the
state-less applications which will communicate with relay
databases which will hold short-living documents before they
are distributed on the IPFS network.

The design is meant to work with several distributed
computers, initially, to be able to handle the complexity of
installation, we

## Contents

The zion-network-state repo is a Monorepo which uses
[bolt]('https://github.com/boltpkg/bolt) to manage packages
and applications.
Every application and package has its own repo. This means
that by downloading the repo of the application or package
alone, one should be able to work on that part of the code
independently. This can happen as long as the packages are
actually downloadable from the npm package repository.

## Apps

### nft-minter

This application is meant to deal the complexity of the
minting process by providing the interfaces needed by
different smart contracts methods.

Each smart contract has its own functionality. We will
provide a set of smart contracts which are the result of the
composition of several smart contracts standards (EIPs), and
with this application we will distribute user interfaces
which easily enables them to interact with zion smart
contracts.

We will provide also with a simple tool which will enable to
interact with any smart contract by simply providing some
informations (notably address and ABI).

In a first stage this application will serve to showcase the
beta version of Elsewhere, in particular the release of the
first 1000 OG tokens. We will build this application
enabling it to display profiles and collections, and slowly
we will decouple the minting process and the interactions
which actually change the state of the blockchain from the
browsing and displaying parts. This will enable use to be
able to implement some sort of gated access on some features
that we may want to offer with some form of contribution,
fee, stake or whatever the DLT technologies can inspire us
with.

### social

The social application will enable users to interact with
smart contracts in a social network type of vibe.

Users will be able to browse and create several type of
contents:

- digital
  - tweets
  - posts
  - blogposts
  - music releases
  - gfx releases (pfp, covers, photo)
- physical
  - music goods
  - merchandise
  - new and used vinyls (12"/9"/7")
  - 3d printed goods
  - self-made clothes
  - ...
- services
  - tutoring
  - administrative
  - .....

# How it works

## Install bolt

```sh
npm i -g bolt
```

## Start

start bolt which will download the dependencies:

```sh
bolt
```

## Build

then build the applications and packages:

```sh
bolt build
```

## Dev

In order to start the a development server with the target
application at the moment you need to pass one of this two
commands:

```sh
bolt nft-minter
```

or

```sh
bolt social
```

This will start both applcations in development mode and
create a local server.

# Prod

In order to be able to deploy the applications on the
kubernetes system we need to create a `DOCKERFILE` for each
application. Once the docker file has been tested and it
works correctly it can be deployed on the k8s system and
replicated as needed.
