"use client";
import { DooglyButton } from "@doogly/react";
import { ethers } from "ethers";
import { useState } from "react";

export default function Page() {
  const [recipient, setRecipient] = useState<`0x${string}`>();
  const fourAbi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "base",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "offers",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "quote",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
      ],
      name: "LiquidityAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "creator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "requestId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "symbol",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalSupply",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "launchTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "launchFee",
          type: "uint256",
        },
      ],
      name: "TokenCreate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "cost",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "offers",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
      ],
      name: "TokenPurchase",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "origin",
          type: "uint256",
        },
      ],
      name: "TokenPurchase2",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "cost",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "offers",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
      ],
      name: "TokenSale",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "origin",
          type: "uint256",
        },
      ],
      name: "TokenSale2",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "TradeStop",
      type: "event",
    },
    {
      inputs: [],
      name: "STATUS_ADDING_LIQUIDITY",
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
      inputs: [],
      name: "STATUS_COMPLETED",
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
      inputs: [],
      name: "STATUS_HALT",
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
      inputs: [],
      name: "STATUS_TRADING",
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
      inputs: [],
      name: "_launchFee",
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
      inputs: [],
      name: "_referralRewardKeeper",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_referralRewardRate",
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
      inputs: [],
      name: "_templateCount",
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
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "_templates",
      outputs: [
        {
          internalType: "address",
          name: "quote",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "initialLiquidity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxRaising",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalSupply",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxOffers",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minTradingFee",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_tokenCount",
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
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "_tokenInfoEx1s",
      outputs: [
        {
          internalType: "uint256",
          name: "launchFee",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "pcFee",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserved2",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserved3",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserved4",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "_tokenInfoExs",
      outputs: [
        {
          internalType: "address",
          name: "creator",
          type: "address",
        },
        {
          internalType: "address",
          name: "founder",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "reserves",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "_tokenInfos",
      outputs: [
        {
          internalType: "address",
          name: "base",
          type: "address",
        },
        {
          internalType: "address",
          name: "quote",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "template",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalSupply",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxOffers",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxRaising",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "launchTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "offers",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "lastPrice",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "K",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "T",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "status",
          type: "uint256",
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
      name: "_tokens",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_tradingFeeRate",
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
      inputs: [],
      name: "_tradingHalt",
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
          name: "origin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxFunds",
          type: "uint256",
        },
      ],
      name: "buyToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxFunds",
          type: "uint256",
        },
      ],
      name: "buyToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "origin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxFunds",
          type: "uint256",
        },
      ],
      name: "buyToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxFunds",
          type: "uint256",
        },
      ],
      name: "buyToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "origin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minAmount",
          type: "uint256",
        },
      ],
      name: "buyTokenAMAP0",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minAmount",
          type: "uint256",
        },
      ],
      name: "buyTokenAMAP1",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minAmount",
          type: "uint256",
        },
      ],
      name: "buyTokenAMAP2",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "origin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minAmount",
          type: "uint256",
        },
      ],
      name: "buyTokenAMAP3",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "base",
              type: "address",
            },
            {
              internalType: "address",
              name: "quote",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "template",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxOffers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxRaising",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "launchTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "offers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "funds",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lastPrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "K",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "T",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "status",
              type: "uint256",
            },
          ],
          internalType: "struct TokenManager3.TokenInfo",
          name: "ti",
          type: "tuple",
        },
        {
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
      ],
      name: "calcBuyAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "base",
              type: "address",
            },
            {
              internalType: "address",
              name: "quote",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "template",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxOffers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxRaising",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "launchTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "offers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "funds",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lastPrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "K",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "T",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "status",
              type: "uint256",
            },
          ],
          internalType: "struct TokenManager3.TokenInfo",
          name: "ti",
          type: "tuple",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "calcBuyCost",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "maxRaising",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalSupply",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "offers",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "reserves",
          type: "uint256",
        },
      ],
      name: "calcInitialPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "base",
              type: "address",
            },
            {
              internalType: "address",
              name: "quote",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "template",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxOffers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxRaising",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "launchTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "offers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "funds",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lastPrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "K",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "T",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "status",
              type: "uint256",
            },
          ],
          internalType: "struct TokenManager3.TokenInfo",
          name: "ti",
          type: "tuple",
        },
      ],
      name: "calcLastPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "base",
              type: "address",
            },
            {
              internalType: "address",
              name: "quote",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "template",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxOffers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxRaising",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "launchTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "offers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "funds",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lastPrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "K",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "T",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "status",
              type: "uint256",
            },
          ],
          internalType: "struct TokenManager3.TokenInfo",
          name: "ti",
          type: "tuple",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "calcSellCost",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "base",
              type: "address",
            },
            {
              internalType: "address",
              name: "quote",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "template",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxOffers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxRaising",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "launchTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "offers",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "funds",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lastPrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "K",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "T",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "status",
              type: "uint256",
            },
          ],
          internalType: "struct TokenManager3.TokenInfo",
          name: "ti",
          type: "tuple",
        },
        {
          internalType: "uint256",
          name: "funds",
          type: "uint256",
        },
      ],
      name: "calcTradingFee",
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
          internalType: "bytes",
          name: "args",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "signature",
          type: "bytes",
        },
      ],
      name: "createToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "origin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minFunds",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "feeRate",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "feeRecipient",
          type: "address",
        },
      ],
      name: "sellToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "origin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minFunds",
          type: "uint256",
        },
      ],
      name: "sellToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "origin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "sellToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minFunds",
          type: "uint256",
        },
      ],
      name: "sellToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "origin",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minFunds",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "feeRate",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "feeRecipient",
          type: "address",
        },
      ],
      name: "sellToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "sellToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const adapterAbi = [
    {
      inputs: [{ internalType: "bytes", name: "reason", type: "bytes" }],
      name: "CallFailed",
      type: "error",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256[]", name: "", type: "uint256[]" },
        { internalType: "uint256[]", name: "", type: "uint256[]" },
        { internalType: "bytes", name: "", type: "bytes" },
      ],
      name: "onERC1155BatchReceived",
      outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "bytes", name: "", type: "bytes" },
      ],
      name: "onERC1155Received",
      outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "bytes", name: "", type: "bytes" },
      ],
      name: "onERC721Received",
      outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes", name: "adapterCallData", type: "bytes" },
      ],
      name: "runAdapter",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "pure",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  ];

  const abiInterface = new ethers.Interface(fourAbi);
  const callData = abiInterface.encodeFunctionData("buyTokenAMAP1", [
    "0x2Cd21Fd034C10a4eAc2F95eE7279679dE9Fce4a5",
    recipient ?? "0x0000000000000000000000000000000000000000",
    7931297971561051,
    0,
  ]);
  const abiCoderInterface = new ethers.AbiCoder();
  const payloadCoder = new ethers.AbiCoder();
  const payload = payloadCoder.encode(
    ["address", "uint256"],
    ["0x0000000000000000000000000000000000000000", 2]
  );
  const abiEncodedCalldata = abiCoderInterface.encode(
    ["uint8", "address", "uint256", "bytes", "bytes", "bool"],
    [
      2,
      "0x5c952063c7fc8610FFDB798152D69F0B9550762b",
      0,
      callData,
      payload,
      true,
    ]
  );

  const adapterAbiInterface = new ethers.Interface(adapterAbi);
  const adapterCallData = adapterAbiInterface.encodeFunctionData("runAdapter", [
    abiEncodedCalldata,
  ]);

  const hookData = [
    {
      target: "0x578Ba68Dfdd446ec306b4fEB4564055135F98982" as `0x${string}`, // Four TokenManager2 contract
      callData: adapterCallData as `0x${string}`, // BuyToken function call
      callType: 2, // Utlize full native balance after previous function
      tokenAddress:
        "0x0000000000000000000000000000000000000000" as `0x${string}`, // native used
      inputPos: 2, // Modify amount in 3rd position
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-2xl text-[#AF3BC9] mt-5">
          Earn 4.83% on USDC with Arcadia
        </div>
        <div className="text-md text-[#AF3BC9] mt-5">
          Pay with any token, any chain and all funds and bridged and deposited
          as USDC on Arcadia contract deployed on Base. Deposited funds earn
          passive yield by providing liquidity for margin accounts
        </div>
        <div className="text-md text-[#AF3BC9] mt-5">
          Enter $SKOPFAM recipient address
        </div>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value as `0x${string}`)}
          placeholder="0x..."
          className="border-2 border-[#AF3BC9] p-2 rounded-md text-black"
        />
        <div className="text-md text-[#AF3BC9] mt-1">
          For more details, checkout Arcadia Protocol -
          https://arcadia.finance/pool/8453/0x3ec4a293Fb906DD2Cd440c20dECB250DeF141dF1
        </div>

        <DooglyButton
          // Checkout button text to trigger modal
          buttonText="Checkout"
          // Add tailwind css classname for the checkout button
          buttonClassName="bg-purple-600 text-white border-none py-2 px-4 text-center text-lg rounded transition duration-300 ease-in-out hover:bg-purple-700"
          modalTitle="Checkout with Doogly"
          apiUrl="https://api.doogly.org"
          config={{
            destinationChain: "56",
            destinationAddress: "0xA968ded9904E0fcB878fa8A0621227BC676e58Fe",
            destinationOutputTokenAddress:
              "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          }}
          postSwapHook={hookData}
          modalStyles={{
            backgroundColor: "#FFFFFF",
            buttonColor: "#AF3BC9",
            textColor: "#FFFFFF",
            headingColor: "#AF3BC9",
          }}
        />
      </main>
    </div>
  );
}
