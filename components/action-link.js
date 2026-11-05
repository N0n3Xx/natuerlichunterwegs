import Link from "next/link";
import { ArrowRight } from "./icons";
export default function ActionLink({ href, className = "", icon: Icon, children }) { return <Link href={href} className={`action-link ${className}`}><span className="action-icon"><Icon /></span><span>{children}</span><ArrowRight /></Link>; }
