"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "../../components/site-header";
import Footer from "../../components/footer";
import BackHome from "../../components/back-home";
import { ArrowRight, BulbIcon, DropIcon } from "../../components/icons";
import { resolveProductImage } from "./product-images";
import applicationPhoto from "../../src/Esther Shooting Soest 12.11.25-3959.png";

function InfoCard({ icon: Icon, title, children, className = "", list = false }) { return <article className={`info-card ${className}`}><span className="info-card__icon"><Icon /></span><div><h3>{title}</h3>{children && (list ? <ul className="ingredient-list">{children.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul> : <p>{children}</p>)}</div></article>; }

function ProductInfoCard({ product }) { const image = resolveProductImage(product.picture); return <article className="info-card product-info-card"><div className="product-photo-placeholder">{image ? <Image src={image} alt={`${product.name} Produktfoto`} fill sizes="(min-width: 760px) 220px, 100vw" /> : <span>Produktfoto<br />folgt</span>}</div><h3>{product.name}</h3><p>{product.description}</p></article>; }

export default function ProbeExperience({ bag }) {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const product = bag?.products[selectedProduct];
  return <main className="inner-page probe-page"><SiteHeader /><div className="page-shell subpage-nav"><BackHome /></div><section className="page-shell inner-heading"><h1>Deine Probe anwenden</h1><p className="lead">Herzlichen Glückwunsch zu deinem Proben-Set. Hier kannst du mehr darüber erfahren!</p>{!bag && <p className="sample-code-message" role="alert">Dein Proben-Code konnte nicht erkannt werden. Bitte öffne die Seite über den QR-Code deiner Proben-Tüte.</p>}</section><section className="application-visual page-shell"><div className="visual-swoop" /><Image src={applicationPhoto} alt="Esther Ebert wendet eine Probe an ihrem Handgelenk an" /></section>{bag && <section className="product-selection page-shell" aria-label="Produkt auswählen"><p className="product-selection__label">Wähle deine Probe</p><div className="product-switch" role="group" aria-label="Produkt auswählen">{bag.products.map((option, index) => <button key={option.id} type="button" className={selectedProduct === index ? "product-switch__option product-switch__option--active" : "product-switch__option"} aria-pressed={selectedProduct === index} onClick={() => setSelectedProduct(index)}>{option.name}</button>)}</div></section>}{product && <><section className="info-cards page-shell"><ProductInfoCard product={product} /><InfoCard icon={DropIcon} title="Anwendung">{product.application}</InfoCard><InfoCard icon={BulbIcon} title="Gut zu wissen" list>{product.ingredients}</InfoCard></section><div className="page-shell bottom-cta"><Link href="/beratung" className="button button--pink">Kontakt aufnehmen <ArrowRight /></Link></div></>}<Footer /></main>;
}
