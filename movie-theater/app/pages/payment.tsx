import { useState } from "react";
import { Link } from "react-router";

type PaymentMethod = "credit-card" | "pix";

export function PaymentPage() {
    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethod>("credit-card");

    return (
        <div className="min-h-screen bg-slate-100 py-10 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <Link
                        to="/eventos"
                        className="text-blue-600 hover:text-blue-700"
                    >
                        ← Voltar para eventos
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Formulário */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl bg-white p-8 shadow-sm">
                            <h1 className="mb-8 text-3xl font-bold text-slate-900">
                                Finalizar Compra
                            </h1>

                            {/* Comprador */}
                            <section className="mb-8">
                                <h2 className="mb-4 text-xl font-semibold">
                                    Dados do Comprador
                                </h2>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <input
                                        type="text"
                                        placeholder="Nome completo"
                                        className="rounded-lg border p-3"
                                    />

                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="rounded-lg border p-3"
                                    />

                                    <input
                                        type="text"
                                        placeholder="CPF"
                                        className="rounded-lg border p-3"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Telefone"
                                        className="rounded-lg border p-3"
                                    />
                                </div>
                            </section>

                            {/* Método */}
                            <section className="mb-8">
                                <h2 className="mb-4 text-xl font-semibold">
                                    Método de Pagamento
                                </h2>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setPaymentMethod("credit-card")
                                        }
                                        className={`rounded-lg border px-5 py-3 transition ${paymentMethod === "credit-card"
                                                ? "border-blue-600 bg-blue-50 text-blue-600"
                                                : "bg-white"
                                            }`}
                                    >
                                        Cartão de Crédito
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod("pix")}
                                        className={`rounded-lg border px-5 py-3 transition ${paymentMethod === "pix"
                                                ? "border-green-600 bg-green-50 text-green-600"
                                                : "bg-white"
                                            }`}
                                    >
                                        PIX
                                    </button>
                                </div>
                            </section>

                            {/* Cartão */}
                            {paymentMethod === "credit-card" && (
                                <section>
                                    <div className="grid gap-4">
                                        <input
                                            type="text"
                                            placeholder="Número do cartão"
                                            className="rounded-lg border p-3"
                                        />

                                        <input
                                            type="text"
                                            placeholder="Nome impresso no cartão"
                                            className="rounded-lg border p-3"
                                        />

                                        <div className="grid gap-4 md:grid-cols-3">
                                            <input
                                                type="text"
                                                placeholder="MM/AA"
                                                className="rounded-lg border p-3"
                                            />

                                            <input
                                                type="text"
                                                placeholder="CVV"
                                                className="rounded-lg border p-3"
                                            />

                                            <select className="rounded-lg border p-3">
                                                <option>1x sem juros</option>
                                                <option>2x sem juros</option>
                                                <option>3x sem juros</option>
                                                <option>6x sem juros</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* PIX */}
                            {paymentMethod === "pix" && (
                                <section>
                                    <div className="rounded-xl border bg-green-50 p-6">
                                        <h3 className="mb-3 text-lg font-semibold">
                                            Pagamento via PIX
                                        </h3>

                                        <p className="text-slate-600">
                                            Após clicar em finalizar compra,
                                            um QR Code PIX será gerado para
                                            pagamento imediato.
                                        </p>
                                    </div>
                                </section>
                            )}

                            <button
                                className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Confirmar Pagamento
                            </button>
                        </div>
                    </div>

                    {/* Resumo */}
                    <aside>
                        <div className="sticky top-6 rounded-2xl bg-white p-8 shadow-sm">
                            <h2 className="mb-6 text-xl font-bold">
                                Resumo do Pedido
                            </h2>

                            <div className="mb-6">
                                <h3 className="font-semibold">
                                    Festival Summer Music 2026
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    15 Janeiro 2026 • 20:00
                                </p>

                                <p className="text-sm text-slate-500">
                                    Allianz Parque • São Paulo
                                </p>
                            </div>

                            <div className="space-y-3 border-t border-b py-4">
                                <div className="flex justify-between">
                                    <span>Ingresso Pista Premium</span>
                                    <span>R$ 350,00</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Taxa de serviço</span>
                                    <span>R$ 25,00</span>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between text-xl font-bold">
                                <span>Total</span>
                                <span>R$ 375,00</span>
                            </div>

                            <div className="mt-6 rounded-lg bg-slate-50 p-4">
                                <p className="text-sm text-slate-600">
                                    Após a confirmação do pagamento,
                                    seu ingresso digital será enviado
                                    para o e-mail cadastrado.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}