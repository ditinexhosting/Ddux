class Ddux
{
	constructor(){
		this.updateState = null;
		this.dataStore = null;
		this.methodStore = null;
	}

	init(updateState){
		this.updateState = updateState
	}

	initDdux(data){
		this.dataStore = data
		this.methodStore = {}
	}

	update(key,value,reRender=true){
		if(key in this.dataStore){
			this.dataStore[key] = value
			if(reRender)
				this.updateState()
		}
		else
			throw new Error('Data Doesn\'t exists. Please initialize first.')
	}

	get(key){
		if(key in this.dataStore)
			return this.dataStore[key]
		throw new Error('Data Doesn\'t exists. Please initialize first.')
	}

	setMethod(key,value){
		if(key in this.methodStore){
			throw new Error('Method key already exists. Please use another name.')
		}
		else
			this.methodStore[key] = value
	}

	unsetMethod(key){
		if(key in this.methodStore){
			delete this.methodStore[key]
		}
		else
			throw new Error('Method doesn\'t exists.')
	}

	callMethod(key,data=null){
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

export default new Ddux();