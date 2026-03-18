import {test , expect} from "@playwright/test"

test.skip("GET API", async function name({request}) {

    const resp = await request.get("https://restful-booker.herokuapp.com/booking/2146")

   const respbody = await resp.body()

   const respStatus = await resp.status()
   console.log(respStatus)

  const respData = await resp.json();
  console.log(respData)

 // const jsonformat = await resp.json()
 // console.log(jsonformat);

//  const respHeader = await resp.headers()
  //  console.log(respHeader);

  //  const respHeaderArray = await resp.headersArray()
  //  console.log(respHeaderArray)
    
})