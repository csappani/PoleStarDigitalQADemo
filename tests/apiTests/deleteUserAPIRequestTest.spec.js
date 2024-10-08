const {test, expect}=require('@playwright/test');

var userId;
var authToken="6f902572bc247f7f2875a01601a12290cbce4fa20ea8ad4e7153f3a90986127f";

test("Create User", async({request})=>{

    const response=await request.post("https://gorest.co.in/public/v2/users",
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

test.skip("Get Users", async({request})=>{

    const response=await request.get("https://gorest.co.in/public/v2/users/"+userId,
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

test("Delete User", async({request})=>{

    const response=await request.delete("https://gorest.co.in/public/v2/users/"+userId,
        {
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );
    expect(response.status()).toBe(204)
})

test("Get User details of deleted userId", async({request})=>{

    const response=await request.get("https://gorest.co.in/public/v2/users/"+userId,
        {
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );   
    expect(response.status()).toBe(404)
    // expect(response.body.message).to.eq('Resource not found')
})

test("Delete User more than once", async({request})=>{

    const response=await request.delete("https://gorest.co.in/public/v2/users/"+userId,
        {
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );   
    expect(response.status()).toBe(404)
    // expect(response.message).toContain("Resource not found")
})
