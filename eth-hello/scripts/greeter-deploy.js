// scripts/greeter-deploy.js
// author: bjr
// last-update:
//     14 aug 2024

async function main () {

  const Greeter = await ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy();
  await greeter.waitForDeployment();
  console.log('Greeter deployed to:', await greeter.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


