const {test, expect}=require('@playwright/test');

var userId;
var authToken="6f902572bc247f7f2875a01601a12290cbce4fa20ea8ad4e7153f3a90986127f";

test("Create User", async({request})=>{

    const response=await request.post('https://gorest.co.in/public/v2/users',
        {
            data: {
                "name": "chiran",
                "gender": "male",
                "email": Math.random().toString(5).substring(2) + "@gmail.com",
                "status": "active"
            },
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(201)
    var res=await response.json()
    userId=res.id;
    console.log("userID:"+userId)
})

test("Create User with same payload more than once", async({request})=>{

    const response=await request.post('https://gorest.co.in/public/v2/users',
        {
            data: {
                "name": "chiran",
                "gender": "male",
                "email": "csappani5@gmail.com",
                "status": "active"
            },
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(422)
})

test("Create User with emptyRequestBody", async({request})=>{

    const response=await request.post('https://gorest.co.in/public/v2/users',
        {
            data: {
                
            },
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(422)
})

test("Create User with invalid requestBody", async({request})=>{

    const response=await request.post('https://gorest.co.in/public/v2/users',
        {
            data: {
                "name": "chiran",
                "gender": "male",
                "status": "active"
            },
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(422)
})

test("get user details By UserId", async({request})=>{

    const response=await request.get('https://gorest.co.in/public/v2/users/'+userId,
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