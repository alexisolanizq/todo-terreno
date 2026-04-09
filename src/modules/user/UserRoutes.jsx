import React from 'react'
import SocialAuth from './auth/pages/SocialAuth'


const UserRoutes = {
    path: 'auth',
    children: [
        {
            path: 'social',
            element: <SocialAuth />,
        }
    ]
}

export default UserRoutes