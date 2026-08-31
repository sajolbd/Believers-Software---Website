import type { Metadata } from "next";
import ProposalClient from "./proposal-client";

export const metadata: Metadata = {
  title: "Get a Proposal — Believers Software",
  description:
    "Answer a few questions about your project and we'll put together a written proposal — scope, timeline, and pricing — specific to what you actually need.",
};

export default function ProposalPage() {
  return <ProposalClient />;
}
