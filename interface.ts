interface yUser {
    readonly dbId:number,
    email:string,
    userID:number,
    googleId?:string,
    startTrial: ()=> string, // first way of defining method
    startTrial2():string, //second way of defining method
    getCoupon(couponName:string, value:number): number //we are having couponName in string and the return type will be a number
}

interface yUser { //reopening the interface
    githubToken:string
}

interface Admins extends yUser{ //using  inhertiance, extending the functionality of yUser to admin
    role:"admin" | "ta" | "learner"
}

const papai: Admins={
    dbId:296,
    email:"h@h.com",
    userID:2247,
    startTrial:()=>{
        return "trail started!!"
    },
    startTrial2:()=>{
        return "trail 2 started!!!"
    },
    getCoupon:(name:"papai", off=10)=>{
        return 10
    },
    githubToken:"44customerID",
    role:"ta",
}

export{}