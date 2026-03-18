import {test , expect} from "@playwright/test"

test.skip("POST API", async function name({request}) {

    const bookingData = 
    {
        "firstname": "Lloyd",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2026-05-01",
            "checkout": "2026-05-01"
        },
        "additionalneeds": "Dinner"
    }


   const POSTresp = await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type":"application/json"},data:bookingData})

    console.log(POSTresp.status());

    const respData = await POSTresp.json();

    console.log(respData);
})