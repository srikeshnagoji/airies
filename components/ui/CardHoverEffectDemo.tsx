import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-0">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Hybrid Semantic Search",
    description:
      "Intelligent, Context-Aware Searches. Quickly find relevant information across all your documents. Benefit from AI that understands context, not just keywords.",
    link: "https://stripe.com",
  },
  {
    title: "Document Chat",
    description:
      "Interactive Document Assistance. Ask questions directly to your documents and get precise answers. Engage with your data as if you had a subject matter expert on hand.",
    link: "https://netflix.com",
  },
  {
    title: "Document Digitization",
    description:
      "Seamless Transition to Digital. Convert physical documents into digital formats effortlessly. Use OCR technology to make scanned documents searchable and editable.",
    link: "https://google.com",
  },
  {
    title: "Document Manager",
    description:
      "Efficient Organization and Retrieval. Automatically categorize and tag documents for easy access. Keep your team's knowledge base organized and up-to-date.",
    link: "https://meta.com",
  },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
];
