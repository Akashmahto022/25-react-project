
export const menu = [
    {
        lable: "Home",
    },
    {
        lable: "Profile",
        children: [
            {
                lable: "Details"
            },
            {
                lable: "Followers"
            },
            {
                lable: "Location",
                children: [
                    {
                        lable: "City",
                        
                    },
                    {
                        lable: "Village",
                    }
                ]
            }
        ]

    },
    {
        lable: "Settings",
        children: [
            {
                lable: "Account"
            },
            {
                lable: "Security",
                children: [
                    {
                        lable: "Login"
                    },
                    {
                        lable: "Register"
                    }

                ]
            }

        ]
    }

]