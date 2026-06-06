import type { Route } from "./+types/payment";
import { PaymentPage } from "../pages/payment";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pagamento" },
    { name: "description", content: "Pagina de pagamento." },
  ];
}

export default function Payment() {
  return <PaymentPage />;
}