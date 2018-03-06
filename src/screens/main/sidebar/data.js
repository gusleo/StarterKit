export default [
    {
        key: 1,
        name: "Home",
        route: "Home",
        icon: "home",
        bg: "#C5F442"
    },
    {
        key: 2,
        name: "Perkuliahan",
        route: "about",
        icon: "ios-information-circle",
        bg: "#C5F442",
        collapsed: true,
        submenu: [
            {
                key: 21,
                name: "Pasca",
                route: "about",
                icon: "ios-information-circle-outline",
                param: {
                    id: 1,
                    title: "Pasca"
                }
            },
            {
                key: 22,
                name: "MM",
                route: "mm",
                icon: "ios-information-circle-outline",
                param: {
                    id: 2,
                    title: "Magister Management"
                }
            },
            {
                key: 23,
                name: "MAP",
                route: "map",
                icon: "ios-information-circle-outline",
                param: {
                    id: 3,
                    title: "Magister MAP"
                }
            },
            {
                key: 24,
                name: "MH",
                route: "mh",
                icon: "ios-information-circle-outline",
                param: {
                    id: 4,
                    title: "Magister H"
                }
            }
        ]
    },
    {
        key: 3,
        name: "Penilaian",
        route: "pendaftaran",
        icon: "ios-paper",
        bg: "#C5F442"
    },
    {
        key: 4,
        name: "Profile",
        route: "contact",
        icon: "person",
        bg: "#C5F442"
    },
    {
        key: 5,
        name: "Log In",
        route: "Login",
        icon: "log-in",
        bg: "#C5F442"
    }
];
