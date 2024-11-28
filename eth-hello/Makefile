#
# Makefile for Greeter/HelloWorld
#   including installing a node project and the hardhat package
#
# https://hardhat.org/hardhat-runner/docs/getting-started
# https://docs.openzeppelin.com/learn/
# https://solidity-by-example.org
#
# author: bjr
# last-update:
#     10 aug 2024
#     14 aug 2024
#

NETWORK= sepolia
NETWORK= localhost

IGNITION_MODULE= none
TEST_SCRIPT= greeter-test.js
DEPLOY_SCRIPT= greeter-deploy.js

all:
	@echo "\t1) make init"
	@echo "\t\ta) npm init will ask package information"
	@echo "\t\tb) hardhat init chose Create an empty hardhat.config.js"
	@echo "\t\tc) add addto-hardhat.config.js to hardhat.config.js"
	@echo "\t\td) https://hardhat.org/hardhat-runner/docs/getting-started#quick-start"
	@echo "\t2) make compile"
	@echo "\t3) run the localhost network"
	@echo "\t\ta) open an new console window"
	@echo "\t\tb) make node"
	@echo "\t4) deploy and test"
	@echo "\t\ta) make deploy"
	@echo "\t\tb) copy the contract address into contracts/test-greeter.js" 
	@echo "\t\tc) make test"

test:
	npx hardhat run --network ${NETWORK} scripts/${TEST_SCRIPT}

deploy:
	npx hardhat run --network ${NETWORK} scripts/${DEPLOY_SCRIPT}

ignition:
	npx hardhat ignition deploy --network ${NETWORK} ignition/modules/${IGNITION_MODULE}

compile:
	npx hardhat compile
	@echo "You might need to make deploy"

node:
	npx hardhat node 

init:
	npm init
	npm install --save-dev hardhat
	npx hardhat init
	npm install --save-dev @nomicfoundation/hardhat-toolbox
	npm install --save-dev @nomicfoundation/hardhat-ethers ethers
	npm install --save-dev @nomicfoundation/hardhat-ignition-ethers
	-rm addto-hardhat.config.js
	echo "require(\"@nomicfoundation/hardhat-ethers\");" >> addto-hardhat.config.js
	echo "require(\"@nomicfoundation/hardhat-toolbox\");" >> addto-hardhat.config.js
	echo "require(\"@nomicfoundation/hardhat-ignition-ethers\");" >> addto-hardhat.config.js


set-config:
	echo "this will prompt for the Infura Key and your wallet private key"
	npx hardhat vars set INFURA_API_KEY
	npx hardhat vars set SEPOLIA_PRIVATE_KEY
	
