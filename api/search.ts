export class RestApi {
    public async doSearch(s: string) {
        try {

            let payload = { 
                "Success": true, 
                "SearchModel": { 
                    "UserId": 65, 
                    "Criteria": s,
                    "SearchText": s, 
                    "SearchAddress": null, 
                    "SearchLocation": 0, 
                    "Results": [], 
                    "IsLoggedIn": true, 
                    "HasResults": true, 
                    "Display": 0, 
                    "Distance": 25, 
                    "TagCloud": {}, 
                    "CardType": 0 
                }, 
                "TagSearch": false, 
                "SearchText": s,
                "NoResults": false, 
                "UserId": null, 
                "CardType": 1 
            }

            const response = await fetch('https://www.busidexapi.com/api/search/Search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization-Token': 'NjU='
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            return result;
        }
        catch (ex) {
            console.log('ERROR: ' + ex);
        }

    }
}