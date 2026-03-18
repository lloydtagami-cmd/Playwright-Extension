import {test , expect} from "@playwright/test"

test.skip("PUT API", async function name({request}) {

    const updatebookingData = 
    {
        "firstname": "Lloyd update",
        "lastname": "Tagami",
        "totalprice": 120,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2026-07-01",
            "checkout": "2026-07-01"
        },
        "additionalneeds": "Dinner"
    }


   const PUTresp = await request.put("https://restful-booker.herokuapp.com/booking/2146",{headers:{"Content-Type":"application/json","Accept":"application/json"},data:updatebookingData})

    console.log(PUTresp.status());

    const respData = await PUTresp.json();

    console.log(respData);
})