class Ddux
{
	static updateState
	static dataStore
	static methodStore

	static init(updateState){
		this.updateState = updateState
	}

	static initDdux(data){
		this.dataStore = data
		this.methodStore = {}
	}

	static update(key,value,reRender=true){
		if(key in this.dataStore){
			this.dataStore[key] = value
			if(reRender)
				this.updateState()
		}
		else
			throw new Error('Data Doesn\'t exists. Please initialize first.')
	}

	static get(key){
		if(key in this.dataStore)
			return this.dataStore[key]
		throw new Error('Data Doesn\'t exists. Please initialize first.')
	}

	static setMethod(key,value){
		if(key in this.methodStore){
			throw new Error('Method key already exists. Please use another name.')
		}
		else
			this.methodStore[key] = value
	}

	static callMethod(key,data=null){
		if(key in this.methodStore){
			if(data)
				this.methodStore[key](data)
			else
				this.methodStore[key]()
		}
		else
			throw new Error('Method Doesn\'t exists. Please initialize first.')
	}
}

export default Ddux;