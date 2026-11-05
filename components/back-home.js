import Link from "next/link";
import { ArrowRight } from "./icons";

export default function BackHome({ dark = false }) {
  return <Link href="/" className={`back-home ${dark ? "back-home--dark" : ""}`}><ArrowRight /><span>Zur Startseite</span></Link>;
}
