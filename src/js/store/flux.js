const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			info: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				const getCharacters = async () => {
					const request = await fetch('https://www.swapi.tech/api/people')
					const data = await request.json()
					console.log(data)
					return data
				}
				getCharacters();
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const info = store.info.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ info: info });
			}
		}
	};
};

export default getState;
