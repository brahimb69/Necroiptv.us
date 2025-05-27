import { notFound } from "next/navigation";

// This page should not be rendered as we redirect at the server level
// But in case someone accesses it directly, show 404
export default function BlogPost() {
  notFound();
}
