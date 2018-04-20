export const routes =[
    {
        path : "",
        loadChildren : "./pages/login/login.module#LoginModule"
    },
    {
        path : "profile",
        loadChildren : "./pages/profile/profile.module#ProfileModule"
    }
]
