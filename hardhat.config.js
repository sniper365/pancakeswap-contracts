require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.0"
      },
      {
        version: "0.5.16"
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.7.0",
      }
    ],
    // overrides: {
    //   "@pancakeswap/pancake-swap-lib/contracts/GSN/Context.sol": {
    //     version: "0.4.1",
    //   },
    //   "@pancakeswap/pancake-swap-lib/contracts/access/Ownable.sol": {
    //     version: "0.4.1",
    //   }
    // }
  }
};

