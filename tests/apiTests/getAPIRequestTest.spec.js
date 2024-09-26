const {test, expect}=require('@playwright/test');

var userId;
var authToken="6f902572bc247f7f2875a01601a12290cbce4fa20ea8ad4e7153f3a90986127f";

test("Get Users", async({request})=>{

    const response = await request.get("https://gorest.co.in/public/v2/users",
    {
        headers: {
            "Accept": "application/json",
            "authorization": "Bearer "+authToken
        }
    }
);
    console.log(await response.json())
    expect(response.status()).toBe(200)
    let jsonArrayDataRes = await response.json();
    userId = jsonArrayDataRes[0].id;
    console.log("UserId:"+userId);   
})

test("Get Users with invalid url", async({request})=>{

    const response = await request.get("https://gorest.co.in/public/v2/usersInvalidTest",
    {
        headers: {
            "Accept": "application/json",
            "authorization": "Bearer "+authToken
        }
    }
);
    expect(response.status()).toBe(404)
    
})

test("Get Users with invalid id", async({request})=>{

    const response = await request.get("https://gorest.co.in/public/v2/users/"+"123",
    {
        headers: {
            "Accept": "application/json",
            "authorization": "Bearer "+authToken
        }
    }
);
    expect(response.status()).toBe(404)
    console.log(await response.json())
    // expect(response.body.message).to.eq('Resource not found')  
})

test("Get Users with invalid authToken", async({request})=>{

    const response = await request.get("https://gorest.co.in/public/v2/users",
    {
        headers: {
            "Accept": "application/json",
            "authorization": "Bearer "+authToken+"invalidAuth"
        }
    }
);
    expect(response.status()).toBe(401)
    console.log(await response.json())
    
})

test("Get Users with valid UserId", async({request})=>{

    const response = await request.get("https://gorest.co.in/public/v2/users/"+userId,
    {
        headers: {
            "Accept": "application/json",
            "authorization": "Bearer "+authToken
        }
    }
);
    expect(response.status()).toBe(200)
    console.log(await response.json()) 
})