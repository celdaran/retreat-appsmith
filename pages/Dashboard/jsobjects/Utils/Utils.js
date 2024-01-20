export default {
	saveSimulations () {
		getSimulations.run()
		return storeValue('simulations', getSimulations.data)
	},
  findSimulation(simulation_id) {
    return appsmith.store.simulations.find(obj => obj.simulation_id === simulation_id);
  },
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}