# Sample Upgradeable Contract

## To deploy proxy contract Box
```
npx hardhat run scripts/deploy.ts
```

## To Upgrade contract by Box2
Change contract address at [upgrade.ts](./scripts/upgrade.ts)
```
npx hardhat run scripts/upgrade.ts
```

## To verify proxy contract
```
npx hardhat verify <CONTRACT ADDRESS>
```
