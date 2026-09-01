import { notFound } from "next/navigation";

// Captura qualquer rota não mapeada dentro do [locale] e renderiza o 404.
export default function CatchAllPage() {
  notFound();
}
