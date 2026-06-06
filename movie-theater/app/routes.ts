import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("pagamento", "routes/payment.tsx")
] satisfies RouteConfig;