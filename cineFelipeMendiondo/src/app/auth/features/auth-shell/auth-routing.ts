import { Routes } from "@angular/router";

export default [
    {
        path: 'sing-up',
        loadComponent: () => import("../auth-sing-up/auth-sing-up"),
    },
    {
        path: 'log-in',
        loadComponent: () => import("../auth-log-in/auth-log-in"),
    },
    {
        path: '**',
        redirectTo: "log-in",
    },
] as Routes;