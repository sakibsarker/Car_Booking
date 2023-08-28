type User= {
    "username": string,
    "bio": string,
    "company": {
        "id": number,
        "empolyee_count": number,
        "name":string,
        "bio": string,
    }
} 

// type User={
//     "id": number,
//     "name": string,
//     "username": string,
//     "email": string,
//     "address": {
//     "street": string,
//     "suite": string,
//     "city": string,
//     "zipcode":number,
//     "geo": {
//     "lat": "-37.3159",
//     "lng": string
//     }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": string,
//     "company": {
//     "name": string,
//     "catchPhrase": string,
//     "bs": string
//     }
//     }