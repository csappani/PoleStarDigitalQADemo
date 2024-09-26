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

test("Update User Details", async({request})=>{

    const response=await request.put("https://gorest.co.in/public/v2/users/"+userId,
        {
            data: {
                "name": "scott-modifyName",
                "gender": "female",
                "status": "inactive"
            },
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(200)
    var res=await response.json()
    userId=res.id;
    console.log("userID:"+userId)
    // expect(res.name).to.eq('scott-modifyName')
    // expect(res.gender).to.eq('female')
    // expect(res.status).to.eq('inactive')
})

test("Get User details by UserId", async({request})=>{

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
    
})

test("Update User details with invalid UserId", async({request})=>{

    const response=await request.put("https://gorest.co.in/public/v2/users/"+userId+"123",
        {
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(404)
    
})