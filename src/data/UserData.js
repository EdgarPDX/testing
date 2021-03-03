import userPhoto1 from '../assets/images/userprofile1.png'
// import userPhoto2 from '../assets/images/userprofile1.png'

let userData = [
    {
        email: "userB@gmail.com",
        profilePhoto: userPhoto1,
        goals:[
            {
                completed:false,
                goal:"lose 20 lbs",
                deadline: "3/2/2021",
                team_members: 
                [
                    {
                        email:"userA@gmail.com"
                    } 
                ],
                total_points:100            
            },
            {
                completed:true,
                goal:"Finish essay",
                deadline: "3/1/2021",
                team_members: 
                [
                    {
                        email:"userA@gmail.com"
                    },
                    {
                        email:"userC@gmail.com"
                    } 
                ],
                total_points:85             
            }
        ],
        goals_completed: 1,


    }

]


export default userData;