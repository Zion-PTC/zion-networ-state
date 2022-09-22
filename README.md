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
  - [Achitectural Design](#architectural-design)
  - [Contents](#contents)
  - [Apps](#apps)
    - [Nft Minter](#nft-minter)
    - [Scripts](#scripts)
    - [Social](#social)
  - [Packages](#packages)
    - [Blockchain](#blockachain)
    - [Database](#database)
    - [Git](#git)
    - [testpack](#testpack)
    - [Ui](#ui)
    - [Utils](#utils)
- [How it works](#how-it-works)
  - [Install bolt and manypkg](#install-bolt-and-manypkg)
  - [Start](#start)
  - [Build](#build)
  - [Dev](#dev)
  - [Application](#application)
  - [Packages](#packages-1)
  - [Prod](#prod)

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

# Constitution \*

> Zion constitution will be realized through a collective
> effort and it will be deployed on the blockchain.

\* This section can be moved, but I liked the idea of mixing
up the political part of Zion with the actual building of
it. As we shall one day be appearing in the
[networkstate]('thenetworkstate.com') dashboard panel, it
would be nice that our actual constitution could sit in our
Git repo (Github, Gitlab or whatever)

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

### scripts

This application is used to write simple scripts which call
our own packages, in order to quickly test and create some
easy script for users.

Scripts shall be written in a way that they can accept user
inputs when called from the console or when called from a
client script/application.

By script I mean a `async function main(){....` function in
which we perform several action which tehorically shall be
invoked on classes or methods coming from our own packages.
This async function is passed in a `runProcess()` methods
which avoids us the hassle of always wrapping the code into
a `try {} catch {}` statement.

In this way we can also quickly test our code and

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

## Packages

### blockchain

This package has a different folder strcture than the other
as it implements a tool to build TS interfaces for smart
contracts and tools to test smart contract.
It also has a layer of utility classes, functions and
scripts which we will use to easily interact with the
blockchain from frontend applications.

- contracts
- scripts
- src (this one is still a little bit messy)
  - Class
  - lib
  - Models (this should be moved to database probably)
  - types
  - utils

### database

This package contains utilities classes, methods and scripts
to provide easier methos to front-end developers. The
ambitious goal of this package is to enable the
interactions with data systems in a unified way, so that in
order to perform the same action (write a file), in the
moment of creating an actual appication, one can have a
uniform way of calling the same thing.

We will achieve this by creating an abstraction level
between the individual databasbe divers and what the clients
of the package will consume.

At the moment we are working on the definition of the
interface that the Database classe shall have. In the repo
we can put a collection of methods which where used in
different occasions, and, by creating overload for every
function call which actully calls the same type of CRUD
operation, we can provide a broader spectrum of interaction
to each method.

We will work this package in a way that it accept a
middleware function created by the consumer of the package.
This way we enable compasability and extensibility to the
classes provided by the package.

- FS
- IPFS
- RAM

to be added:

- MongodDb
- Neo4j
- Redis
- Elastic Search

### git

This repo contains utility functions to interact with the
git systems. Therefore it starts providing a Git class which
can work as a facade for the several different commands that
git accepts. Then we start building a class which handles
the connection to a git manager system. We start with Github
but we shall build, in the similar manner as for the Database
class, a class which manages several types of git managers.
Then we have some tools which enables an interface to
interact with our own Monorepo and repos, so that we can
build User Interfaces to interact with some aspects of the
repos like:

- dependencies management
- api description
- documentation

At the moment this are the classes / methods exported by the package

- Git\*
- GitManager
  - Github\*
  - Gitlab
- Monorepo\*\*
- Repo\*\*

\* currently implemented\
\*\* not yet working correctly

### testpack

We are using this package to make tests on the behave of
bolt and the way it exports and bundes the code we write. As
soon as we have a decent knowledge on how it works, we will
delete this package.

-

### ui

This package is meant to be and easy access point for
front-end developers to build cool interfaces quickly. At
the moment it contains only React components but I will
share the code I worked on for Telegram bots and we can put
code for Discord bots here.

- bot\*\*
  - telegram
  - discord
- cli\*\*
  - terminal
  - logs
- html\*
  - Next\*
  - React\*
  - VanillaJS\*\*
- max-msp\*\*

\* currently implemented\
\*\* to be implemented, i have some code for it, that I will share

### utils

This package contains utilities which are related to
handling of frequents situation when creating codes. For the
moment it holds helper codes for JS and Node, but we can
extend this to any other language we want. Let's say it is
sort of a \_lodash but DIY.

- js
  - Error
  - Regexp
- node
  - process
  - util
  - crypto\*

\* to be implemented

# How it works

This is a monorepo which, as said earlied, it is managed by
`bolt`. We also use precontruct which basically builds the
endpoints and configures the type of exports for
compatibility with older browsers when dealing with DOM.
Basically it creates node_js packages which can be imported
in both ways: `import` or `require`.

## Install bolt and manypkg \*

Firts thing we need to install bolt which is our monorepo
package manager.

Run this commands in the monorepo root.

```sh
npm i -g bolt
```

```sh
yarn add @manypkg/cli \*\*
```

\* if you are using Linux, use `sudo` before running this
command.
\*\* I am not sure if it is @manypkg/cli or manypkg alone. I
know that to call it we need to do `yarn manypkg fix` for example.

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

## application

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

## Packages

In order to test packages we need to import them

## Prod

In order to be able to deploy the applications on the
kubernetes system we need to create a `DOCKERFILE` for each
application. Once the docker file has been tested and it
works correctly it can be deployed on the k8s system and
replicated as needed.
