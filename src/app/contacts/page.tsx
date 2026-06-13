"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Главная",
          id: "/",
        },
        {
          name: "Номера",
          id: "/rooms",
        },
        {
          name: "Услуги",
          id: "/services",
        },
        {
          name: "Галерея",
          id: "/gallery",
        },
        {
          name: "О нас",
          id: "/about",
        },
        {
          name: "Контакты",
          id: "/contacts",
        },
      ]}
      button={{
        text: "Забронировать номер",
        href: "/rooms",
      }}
      brandName="Merci Hotel"
    />
  </div>

  <div id="contact-page" data-section="contact-page">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Свяжитесь с нами"
      title="Мы всегда рады помочь"
      description="Будь то бронирование, вопросы об услугах или специальные запросы, наша команда готова ответить на все ваши вопросы. Вы можете связаться с нами по телефону, электронной почте или через форму обратной связи. Наш адрес: ул. Шамс Кулол 8А, Ташкент."
      buttons={[
        {
          text: "Позвонить нам",
          href: "tel:+998901234567",
        },
        {
          text: "Написать в WhatsApp",
          href: "https://wa.me/998901234567",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="faq-contacts" data-section="faq-contacts">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-contact-1",
          title: "Как забронировать номер?",
          content: "Вы можете забронировать номер прямо на нашем сайте через форму бронирования, по телефону или отправив запрос по электронной почте.",
        },
        {
          id: "faq-contact-2",
          title: "Время заезда и выезда?",
          content: "Стандартное время заезда — 14:00, время выезда — 12:00. Возможно раннее заселение или поздний выезд по запросу и при наличии свободных номеров.",
        },
        {
          id: "faq-contact-3",
          title: "Есть ли парковка для гостей?",
          content: "Да, для всех гостей Merci Hotel предоставляется бесплатная охраняемая парковка на территории отеля.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/female-tourist-using-mobile-nfc-payment-pos-terminal_482257-98854.jpg"
      imageAlt="Hotel reception desk"
      mediaAnimation="opacity"
      title="Часто задаваемые вопросы"
      description="Здесь вы найдете ответы на самые популярные вопросы о бронировании, заезде/выезде и других моментах проживания в Merci Hotel."
      tag="Помощь"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Merci Hotel"
      leftLink={{
        text: "Политика конфиденциальности",
        href: "#",
      }}
      rightLink={{
        text: "Условия использования",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
