class APIClient {
    url: string;

    constructor(apiUrl : string) {
        this.url = apiUrl;

    }

    async AddCategory(name: string, description: string) {
        return this.FetchRemote(`
            mutation AddCategory($name: String!, $description: String!) {
                AddCategory(name: $name, description: $description) {
                    id,
                    name,
                    description
                }
            }
        `,
        {
            name,
            description
        });
    }

    async AddLocation(name: string, description: string) {
        return this.FetchRemote(`
            mutation AddLocation($name: String!, $description: String!) {
                AddLocation(name: $name, description: $description) {
                    id,
                    name,
                    description
                }
            }
        `,
        {
            name,
            description
        });
    }

    async AddItem(name: string, description: string, locationId: number, categoryId: number) {
        return this.FetchRemote(`
            mutation AddItem($name: String!, $description: String!, locationId: Int!, categoryId: Int!) {
                AddItem(name: $name, description: $description, locationId: $locationId, categoryId: $categoryId) {
                    id,
                    name,
                    description
                }
            }
        `,
        {
            name,
            description,
            locationId,
            categoryId
        });
    }

    async GetAllCategories() {
        return this.FetchRemote(`
            query GetAllCategories {
                GetAllCategories {
                    id,
                    name,
                    description
                }
            }`
        );
    }

    async GetAllLocations() {
        return this.FetchRemote(`
            query GetAllLocations {
                GetAllLocations {
                    id,
                    name,
                    description
                }
            }`
        );
    }

    async GetAllItems() {
        return this.FetchRemote(`
            query GetAllItems {
                GetAllItems {
                    id,
                    name,
                    description,
                    locationId,
                    categoryId
                }
            }`
        );
    }

    async RemoveCategory(id: number) {
        return this.FetchRemote(`
            mutation RemoveCategory($id: Int!) {
                RemoveCategory($id: Int!) {

                }
            }
        `,
        {
            id
        });
    }

    async RemoveLocation(id: number) {
        return this.FetchRemote(`
            mutation RemoveLocation($id: Int!) {
                RemoveLocation($id: Int!) {

                }
            }
        `,
        {
            id
        });
    }

    async RemoveItem(id: number)  {
        return this.FetchRemote(`
            mutation RemoveItem($id: Int!) {
                RemoveItem($id: Int!) {

                }
            }
        `,
        {
            id
        });
    }

    /**
     * Fetch data from the apiURL with data in the form of a JSON object.
     * @param {string} string Query in the form of a string.
     * @param {...Object} object Object containing the variables specified in the query string. These must match exactly.
     * @returns {Object} Returns a JSON object with the response data.
     */
    async FetchRemote(query: string, variables?: Object) {

        let data;
        
        if (variables) {
            data = JSON.stringify({query: query, variables: variables });
            
        } else {
            data = JSON.stringify({query: query});
        }

        return await fetch(this.url, {
            method: 'POST',
            credentials: 'omit', // Same reasoning as above.
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // This might be useless, but I'm unsure how graphql will treat requests in every situation.
            body: data
        });
    }
}

export default APIClient;