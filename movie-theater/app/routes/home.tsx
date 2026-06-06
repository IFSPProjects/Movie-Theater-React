import type { Route } from "./+types/home";
import { HomePage } from "../pages/home";
import { Footer } from "../components/footer/Footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Evento Fácil" },
    { name: "description", content: "Seu lugar favorito!" },
  ];
}

export default function Home() {
  return [
  <HomePage />,
  <Footer />
  ]
}
