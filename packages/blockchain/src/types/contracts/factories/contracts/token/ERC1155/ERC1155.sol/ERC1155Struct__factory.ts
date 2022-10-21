/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1155Struct,
  ERC1155StructInterface,
} from "../../../../../contracts/token/ERC1155/ERC1155.sol/ERC1155Struct";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a8e38038062002a8e8339818101604052810190620000379190620002b8565b62000048816200004f60201b60201c565b506200036e565b8060029080519060200190620000679291906200006b565b5050565b828054620000799062000338565b90600052602060002090601f0160209004810192826200009d5760008555620000e9565b82601f10620000b857805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e8578251825591602001919060010190620000cb565b5b509050620000f89190620000fc565b5090565b5b8082111562000117576000816000905550600101620000fd565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001848262000139565b810181811067ffffffffffffffff82111715620001a657620001a56200014a565b5b80604052505050565b6000620001bb6200011b565b9050620001c9828262000179565b919050565b600067ffffffffffffffff821115620001ec57620001eb6200014a565b5b620001f78262000139565b9050602081019050919050565b60005b838110156200022457808201518184015260208101905062000207565b8381111562000234576000848401525b50505050565b6000620002516200024b84620001ce565b620001af565b90508281526020810184848401111562000270576200026f62000134565b5b6200027d84828562000204565b509392505050565b600082601f8301126200029d576200029c6200012f565b5b8151620002af8482602086016200023a565b91505092915050565b600060208284031215620002d157620002d062000125565b5b600082015167ffffffffffffffff811115620002f257620002f16200012a565b5b620003008482850162000285565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035157607f821691505b6020821081141562000368576200036762000309565b5b50919050565b612710806200037e6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f414610138578063a22cb46514610168578063e985e9c514610184578063f242432a146101b457610087565b8062fdd58e1461008c57806301ffc9a7146100bc5780630e89341c146100ec5780632eb2c2d61461011c575b600080fd5b6100a660048036038101906100a19190611504565b6101d0565b6040516100b39190611553565b60405180910390f35b6100d660048036038101906100d191906115c6565b610299565b6040516100e3919061160e565b60405180910390f35b61010660048036038101906101019190611629565b61037b565b60405161011391906116ef565b60405180910390f35b6101366004803603810190610131919061190e565b61040f565b005b610152600480360381019061014d9190611aa0565b6104b0565b60405161015f9190611bd6565b60405180910390f35b610182600480360381019061017d9190611c24565b6105c9565b005b61019e60048036038101906101999190611c64565b6105df565b6040516101ab919061160e565b60405180910390f35b6101ce60048036038101906101c99190611ca4565b610673565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610241576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023890611dad565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061036457507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610374575061037382610714565b5b9050919050565b60606002805461038a90611dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546103b690611dfc565b80156104035780601f106103d857610100808354040283529160200191610403565b820191906000526020600020905b8154815290600101906020018083116103e657829003601f168201915b50505050509050919050565b61041761077e565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061045d575061045c8561045761077e565b6105df565b5b61049c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049390611ea0565b60405180910390fd5b6104a98585858585610786565b5050505050565b606081518351146104f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ed90611f32565b60405180910390fd5b6000835167ffffffffffffffff81111561051357610512611716565b5b6040519080825280602002602001820160405280156105415781602001602082028036833780820191505090505b50905060005b84518110156105be5761058e85828151811061056657610565611f52565b5b602002602001015185838151811061058157610580611f52565b5b60200260200101516101d0565b8282815181106105a1576105a0611f52565b5b602002602001018181525050806105b790611fb0565b9050610547565b508091505092915050565b6105db6105d461077e565b8383610aa8565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61067b61077e565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806106c157506106c0856106bb61077e565b6105df565b5b610700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f79061206b565b60405180910390fd5b61070d8585858585610c15565b5050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b81518351146107ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c1906120fd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561083a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108319061218f565b60405180910390fd5b600061084461077e565b90506000610856828789888888610ea5565b905061086181610f86565b60005b8551811015610a1257600086828151811061088257610881611f52565b5b6020026020010151905060008683815181106108a1576108a0611f52565b5b60200260200101519050600080600084815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610942576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093990612221565b60405180910390fd5b81810360008085815260200190815260200160002060008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109f79190612241565b9250508190555050505080610a0b90611fb0565b9050610864565b508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8888604051610a89929190612297565b60405180910390a4610a9f828888888888610f89565b50505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0e90612340565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610c08919061160e565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610c85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7c9061218f565b60405180910390fd5b6000610c8f61077e565b90506000610cb1828789610ca289611170565b610cab89611170565b88610ea5565b9050610cbc81610f86565b600080600087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905084811015610d53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4a90612221565b60405180910390fd5b84810360008088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460008088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e089190612241565b925050819055508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628989604051610e85929190612360565b60405180910390a4610e9b8389898989896111ea565b5050505050505050565b610ead6113e4565b610eb56113e4565b87816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505085816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505086816040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050848160600181905250838160800181905250828160a00181905250809150509695505050505050565b50565b610fa88473ffffffffffffffffffffffffffffffffffffffff166113d1565b15611168578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401610fee9594939291906123ed565b602060405180830381600087803b15801561100857600080fd5b505af192505050801561103957506040513d601f19601f82011682018060405250810190611036919061246a565b60015b6110df576110456124a4565b806308c379a014156110a2575061105a6124c6565b8061106557506110a4565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109991906116ef565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d6906125ce565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115d90612660565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff81111561118f5761118e611716565b5b6040519080825280602002602001820160405280156111bd5781602001602082028036833780820191505090505b50905082816000815181106111d5576111d4611f52565b5b60200260200101818152505080915050919050565b6112098473ffffffffffffffffffffffffffffffffffffffff166113d1565b156113c9578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b815260040161124f959493929190612680565b602060405180830381600087803b15801561126957600080fd5b505af192505050801561129a57506040513d601f19601f82011682018060405250810190611297919061246a565b60015b611340576112a66124a4565b806308c379a0141561130357506112bb6124c6565b806112c65750611305565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112fa91906116ef565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611337906125ce565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146113c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113be90612660565b60405180910390fd5b505b505050505050565b600080823b905060008111915050919050565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061149b82611470565b9050919050565b6114ab81611490565b81146114b657600080fd5b50565b6000813590506114c8816114a2565b92915050565b6000819050919050565b6114e1816114ce565b81146114ec57600080fd5b50565b6000813590506114fe816114d8565b92915050565b6000806040838503121561151b5761151a611466565b5b6000611529858286016114b9565b925050602061153a858286016114ef565b9150509250929050565b61154d816114ce565b82525050565b60006020820190506115686000830184611544565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6115a38161156e565b81146115ae57600080fd5b50565b6000813590506115c08161159a565b92915050565b6000602082840312156115dc576115db611466565b5b60006115ea848285016115b1565b91505092915050565b60008115159050919050565b611608816115f3565b82525050565b600060208201905061162360008301846115ff565b92915050565b60006020828403121561163f5761163e611466565b5b600061164d848285016114ef565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611690578082015181840152602081019050611675565b8381111561169f576000848401525b50505050565b6000601f19601f8301169050919050565b60006116c182611656565b6116cb8185611661565b93506116db818560208601611672565b6116e4816116a5565b840191505092915050565b6000602082019050818103600083015261170981846116b6565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61174e826116a5565b810181811067ffffffffffffffff8211171561176d5761176c611716565b5b80604052505050565b600061178061145c565b905061178c8282611745565b919050565b600067ffffffffffffffff8211156117ac576117ab611716565b5b602082029050602081019050919050565b600080fd5b60006117d56117d084611791565b611776565b905080838252602082019050602084028301858111156117f8576117f76117bd565b5b835b81811015611821578061180d88826114ef565b8452602084019350506020810190506117fa565b5050509392505050565b600082601f8301126118405761183f611711565b5b81356118508482602086016117c2565b91505092915050565b600080fd5b600067ffffffffffffffff82111561187957611878611716565b5b611882826116a5565b9050602081019050919050565b82818337600083830152505050565b60006118b16118ac8461185e565b611776565b9050828152602081018484840111156118cd576118cc611859565b5b6118d884828561188f565b509392505050565b600082601f8301126118f5576118f4611711565b5b813561190584826020860161189e565b91505092915050565b600080600080600060a0868803121561192a57611929611466565b5b6000611938888289016114b9565b9550506020611949888289016114b9565b945050604086013567ffffffffffffffff81111561196a5761196961146b565b5b6119768882890161182b565b935050606086013567ffffffffffffffff8111156119975761199661146b565b5b6119a38882890161182b565b925050608086013567ffffffffffffffff8111156119c4576119c361146b565b5b6119d0888289016118e0565b9150509295509295909350565b600067ffffffffffffffff8211156119f8576119f7611716565b5b602082029050602081019050919050565b6000611a1c611a17846119dd565b611776565b90508083825260208201905060208402830185811115611a3f57611a3e6117bd565b5b835b81811015611a685780611a5488826114b9565b845260208401935050602081019050611a41565b5050509392505050565b600082601f830112611a8757611a86611711565b5b8135611a97848260208601611a09565b91505092915050565b60008060408385031215611ab757611ab6611466565b5b600083013567ffffffffffffffff811115611ad557611ad461146b565b5b611ae185828601611a72565b925050602083013567ffffffffffffffff811115611b0257611b0161146b565b5b611b0e8582860161182b565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611b4d816114ce565b82525050565b6000611b5f8383611b44565b60208301905092915050565b6000602082019050919050565b6000611b8382611b18565b611b8d8185611b23565b9350611b9883611b34565b8060005b83811015611bc9578151611bb08882611b53565b9750611bbb83611b6b565b925050600181019050611b9c565b5085935050505092915050565b60006020820190508181036000830152611bf08184611b78565b905092915050565b611c01816115f3565b8114611c0c57600080fd5b50565b600081359050611c1e81611bf8565b92915050565b60008060408385031215611c3b57611c3a611466565b5b6000611c49858286016114b9565b9250506020611c5a85828601611c0f565b9150509250929050565b60008060408385031215611c7b57611c7a611466565b5b6000611c89858286016114b9565b9250506020611c9a858286016114b9565b9150509250929050565b600080600080600060a08688031215611cc057611cbf611466565b5b6000611cce888289016114b9565b9550506020611cdf888289016114b9565b9450506040611cf0888289016114ef565b9350506060611d01888289016114ef565b925050608086013567ffffffffffffffff811115611d2257611d2161146b565b5b611d2e888289016118e0565b9150509295509295909350565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b6000611d97602b83611661565b9150611da282611d3b565b604082019050919050565b60006020820190508181036000830152611dc681611d8a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e1457607f821691505b60208210811415611e2857611e27611dcd565b5b50919050565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b6000611e8a603283611661565b9150611e9582611e2e565b604082019050919050565b60006020820190508181036000830152611eb981611e7d565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b6000611f1c602983611661565b9150611f2782611ec0565b604082019050919050565b60006020820190508181036000830152611f4b81611f0f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611fbb826114ce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611fee57611fed611f81565b5b600182019050919050565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b6000612055602983611661565b915061206082611ff9565b604082019050919050565b6000602082019050818103600083015261208481612048565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b60006120e7602883611661565b91506120f28261208b565b604082019050919050565b60006020820190508181036000830152612116816120da565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612179602583611661565b91506121848261211d565b604082019050919050565b600060208201905081810360008301526121a88161216c565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b600061220b602a83611661565b9150612216826121af565b604082019050919050565b6000602082019050818103600083015261223a816121fe565b9050919050565b600061224c826114ce565b9150612257836114ce565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561228c5761228b611f81565b5b828201905092915050565b600060408201905081810360008301526122b18185611b78565b905081810360208301526122c58184611b78565b90509392505050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b600061232a602983611661565b9150612335826122ce565b604082019050919050565b600060208201905081810360008301526123598161231d565b9050919050565b60006040820190506123756000830185611544565b6123826020830184611544565b9392505050565b61239281611490565b82525050565b600081519050919050565b600082825260208201905092915050565b60006123bf82612398565b6123c981856123a3565b93506123d9818560208601611672565b6123e2816116a5565b840191505092915050565b600060a0820190506124026000830188612389565b61240f6020830187612389565b81810360408301526124218186611b78565b905081810360608301526124358185611b78565b9050818103608083015261244981846123b4565b90509695505050505050565b6000815190506124648161159a565b92915050565b6000602082840312156124805761247f611466565b5b600061248e84828501612455565b91505092915050565b60008160e01c9050919050565b600060033d11156124c35760046000803e6124c0600051612497565b90505b90565b600060443d10156124d657612559565b6124de61145c565b60043d036004823e80513d602482011167ffffffffffffffff82111715612506575050612559565b808201805167ffffffffffffffff8111156125245750505050612559565b80602083010160043d038501811115612541575050505050612559565b61255082602001850186611745565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b60006125b8603483611661565b91506125c38261255c565b604082019050919050565b600060208201905081810360008301526125e7816125ab565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b600061264a602883611661565b9150612655826125ee565b604082019050919050565b600060208201905081810360008301526126798161263d565b9050919050565b600060a0820190506126956000830188612389565b6126a26020830187612389565b6126af6040830186611544565b6126bc6060830185611544565b81810360808301526126ce81846123b4565b9050969550505050505056fea264697066735822122050abfa98cb747c6f2c48073c209a1040c5be1f82f0d5a0e4ee1a94742aab097064736f6c63430008090033";

type ERC1155StructConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155StructConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Struct__factory extends ContractFactory {
  constructor(...args: ERC1155StructConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155Struct> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155Struct>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): ERC1155Struct {
    return super.attach(address) as ERC1155Struct;
  }
  override connect(signer: Signer): ERC1155Struct__factory {
    return super.connect(signer) as ERC1155Struct__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155StructInterface {
    return new utils.Interface(_abi) as ERC1155StructInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Struct {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Struct;
  }
}
