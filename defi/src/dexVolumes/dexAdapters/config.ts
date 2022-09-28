export interface IVolumesConfig {
    enabled?: boolean
    includedVolume?: string[]
}

export default {
    "balancer": {
        enabled: true
    },
    "bancor": {
        enabled: true
    },
    "champagneswap": {
        enabled: true
    },
    "katana": {
        enabled: true
    },
    "pancakeswap": {
        enabled: true
    },
    "raydium": {
        enabled: true
    },
    "uniswap": {
        enabled: true
    },
    "traderjoe": {
        enabled: true
    },
    "sushiswap": {
        enabled: true
    },
    "spookyswap": {
        enabled: true
    },
    "spiritswap": {
        enabled: true
    },
    "soulswap": {
        enabled: true
    },
    "klayswap": {
        enabled: true
    },
    "osmosis": {
        enabled: true
    },
    "serum": {
        enabled: true,
        includedVolume: ["raydium"]
    },
    "curve": {
        enabled: true
    },
    "1inch": {
        enabled: false
    },
    "mooniswap": {
        enabled: true
    },
    "dodo": {
        enabled: true
    },
    "velodrome": {
        enabled: true
    },
    "gmx": {
        enabled: true
    },
    "quickswap": {
        enabled: true
    },
    "woofi": {
        enabled: true
    },
    "hashflow": {
        enabled: true
    },
    "zipswap": {
        enabled: true
    },
    "wardenswap": {
        enabled: true
    },
    "kyberswap": {
        enabled: true
    },
    "ref-finance": {
        enabled: true
    },
    "solidly": {
        enabled: true
    },
    "orca": {
        enabled: true
    },
    "saber": {
        enabled: true
    },
    "platypus": {
        enabled: true
    },
    "yoshi-exchange": {
        enabled: true
    },
    "biswap": {
        enabled: true
    },
    "apeswap": {
        enabled: true
    },
    "pangolin": {
        enabled: true
    },
    "minswap": {
        enabled: true
    },
    "wingriders": {
        enabled: true
    },
    "wombat-exchange": {
        enabled: true
    },
    "dfyn": {
        enabled: true
    },
    "flamingo-finance": {
        enabled: true
    },
    "0x": {
        enabled: true
    },
    "baryon": {
        enabled: true
    },
    "cherryswap": {
        enabled: true
    },
    "clipper": {
        enabled: true
    },
    "cryptoswap": {
        enabled: true
    },
    "ellipsis": {
        enabled: true
    },
    "klex-finance": {
        enabled: true
    },
    "koyo": {
        enabled: true
    },
    "pyeswap": {
        enabled: true
    },
    "smbswap": {
        enabled: true
    },
    "sunswap": {
        enabled: true
    },
    "whaleswap": {
        enabled: true
    },
    "nomiswap": {
        enabled: true
    },
    "fstswap": {
        enabled: false
    },
    "beethoven-x": {
        enabled: true
    },
    "defi-swap": {
        enabled: true
    },
    "wanswap-dex": {
        enabled: false
    },
    "solarbeam": {
        enabled: true
    },
    "tomb-swap": {
        enabled: true
    },
    "dfx-finance": {
        enabled: true
    },
    "frax-swap": {
        enabled: true
    },
    "izumi-finance": {
        enabled: true
    },
    "tinyman": {
        enabled: true
    },
    "junoswap": {
        enabled: true
    },
    "knightswap-finance": {
        enabled: true
    },
    "mdex": {
        enabled: true
    },
    "meshswap": {
        enabled: true
    },
    "mm-stableswap-polygon": {
        enabled: true
    },
    "radioshack": {
        enabled: false
    },
    "mojitoswap": {
        enabled: true
    },
    "yieldfields": {
        enabled: true
    },
    "terraswap": {
        enabled: true
    },
    "saros": {
        enabled: true
    },
    "vvs-finance": {
        enabled: true
    },
    "carthage": {
        enabled: false
    },
    "shibaswap": {
        enabled: true
    },
    "viperswap": {
        enabled: true
    },
    "oolongswap": {
        enabled: true
    },
    "swapr": {
        enabled: true
    },
    "cone": {
        enabled: true
    },
    "claimswap": {
        enabled: true
    },
    "spartacus-exchange": {
        enabled: true
    }
} as {
    [name: string]: IVolumesConfig
}
