// scripts/hello-test.js
// author: bjr
// last-update: 9 aug 2024
//     14 aug 2024

// file out this value from the output of the deploy script
const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

async function main () {
  const deployedContractAddress = CONTRACT_ADDRESS;
  const Greeter = await ethers.getContractFactory('Greeter');
  const greeter = await Greeter.attach(deployedContractAddress);

  var owner = await greeter.owner();
  var greeting = await greeter.greet();
  console.log(`owner: ${owner}\ngreeting: ${greeting}`);
  
  await greeter.setGreeting('Hello Moon!');
  greeting = await greeter.greet();
  console.log(`greeting: ${greeting}`);  
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


