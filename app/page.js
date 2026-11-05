import Image from "next/image";
import SiteHeader from "../components/site-header";
import Footer from "../components/footer";
import ActionLink from "../components/action-link";
import { BottleIcon, CalendarIcon, PeopleIcon, SparkleIcon } from "../components/icons";
import heroPhoto from "../src/Esther Shooting Soest 12.11.25-3955.png";

export default function Home() { return <main className="home-page"><SiteHeader /><section className="home-intro page-shell"><p className="eyebrow">ESTHER EBERT</p><h1 className="brand-title">Natürlich unterwegs</h1><div className="pink-rule" /><h2>Schön, dass<br />du da bist.</h2></section><section className="home-hero page-shell" aria-label="Esther Ebert"><div className="hero-orb hero-orb--sage" /><div className="hero-orb hero-orb--pink" /><div className="photo-frame"><Image src={heroPhoto} alt="Esther Ebert lächelt mit einem Produkt in der Hand" priority /></div><div className="hero-note"><SparkleIcon /><span>Für mehr<br />Souveränität</span></div></section><section className="home-actions page-shell" aria-label="Angebote"><ActionLink href="/probe" className="action-link--navy" icon={BottleIcon}>Meine Probe anwenden</ActionLink><ActionLink href="/termin" className="action-link--sage" icon={CalendarIcon}>Termin vereinbaren</ActionLink><ActionLink href="/beratung" className="action-link--pink" icon={PeopleIcon}>Kontakt aufnehmen</ActionLink></section><Footer /></main>; }
