import Link from "next/link";
import SiteHeader from "../../components/site-header";
import Footer from "../../components/footer";
import BackHome from "../../components/back-home";
import { CalendarIcon, ArrowRight } from "../../components/icons";

export default function AppointmentPage() { return <main className="inner-page appointment-page"><SiteHeader /><div className="page-shell subpage-nav"><BackHome /></div><section className="page-shell centered-content"><p className="eyebrow">Ich nehme mir Zeit für dich</p><h1>Termin<br />vereinbaren</h1><p className="lead">Die Online-Terminbuchung ist schon bald für dich da. Bis dahin freue ich mich, von dir persönlich zu hören.</p><div className="calendar-art" aria-hidden="true"><CalendarIcon /><span className="calendar-dot calendar-dot--1" /><span className="calendar-dot calendar-dot--2" /><span className="calendar-dot calendar-dot--3" /></div><p className="placeholder-label">ONLINE-BUCHUNG · IN VORBEREITUNG</p><div className="appointment-actions"><Link href="/" className="button button--navy">Zur Startseite <ArrowRight /></Link><Link href="/beratung" className="text-link">Kontakt aufnehmen <ArrowRight /></Link></div></section><Footer /></main>; }
