const { data: singleCallData = BigInt(0)} = useReadContract({
	address,
	abi,
	functionName: 'balanceOf',
	args: [address],
	query: {
		enabled: true
	},
});


const { data: multiCallData = []} = useReadContracts({
	contracts: contractsTemplates,
	query: {
		enabled: true
	},
});

const multicallDataAsObject = multicallData.reduce((acc, value, index) => {
	return acc[index] = value
}, {})

if (singleCallData && multicallDataAsObject) {
	return singleCallData * multicallDataAsObject[0]
}