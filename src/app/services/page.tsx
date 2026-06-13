"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
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

  <div id="features-services" data-section="features-services">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Вкусные завтраки",
          description: "Ежедневный континентальный завтрак в уютном ресторане отеля.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-sitting-bed-holding-glass-juice-texting-message-mobile-phone_23-2148033309.jpg",
          imageAlt: "Delicious breakfast",
        },
        {
          title: "Удобный трансфер",
          description: "Мы организуем встречу и проводы в аэропорт или на вокзал.",
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-getting-taxi-cab_23-2149236689.jpg",
          imageAlt: "Hotel transfer car",
        },
        {
          title: "Бесплатный Wi-Fi",
          description: "Высокоскоростной интернет доступен на всей территории отеля.",
          imageSrc: "http://img.b2bpic.net/free-photo/signal-icon-front-side-with-white-background_187299-39974.jpg",
          imageAlt: "Free Wi-Fi",
        },
        {
          title: "Услуги прачечной",
          description: "Воспользуйтесь нашими услугами прачечной для безупречного вида вашей одежды.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150927738.jpg",
          imageAlt: "Laundry service",
        },
        {
          title: "Экскурсионное бюро",
          description: "Поможем организовать увлекательные экскурсии по Ташкенту и окрестностям.",
          imageSrc: "http://img.b2bpic.net/free-photo/city-sea-coast-mountains-sky-is-reflected-water_169016-9944.jpg",
          imageAlt: "City tours",
        },
        {
          title: "Бесплатная парковка",
          description: "Для гостей отеля предусмотрена охраняемая парковка.",
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-showing-his-boarding-pass-check-counter_107420-85111.jpg",
          imageAlt: "Hotel parking",
        },
      ]}
      title="Наши дополнительные услуги"
      description="Помимо комфортного проживания, Merci Hotel предлагает ряд услуг, которые сделают ваше пребывание еще более приятным и удобным."
      tag="Услуги"
    />
  </div>

  <div id="faq-services" data-section="faq-services">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-service-1",
          title: "Включен ли завтрак в стоимость проживания?",
          content: "Да, для всех гостей Merci Hotel континентальный завтрак включен в стоимость номера и подается ежедневно в нашем ресторане.",
        },
        {
          id: "faq-service-2",
          title: "Предоставляете ли вы услуги трансфера?",
          content: "Да, мы можем организовать трансфер от/до международного аэропорта Ташкента и железнодорожного вокзала. Пожалуйста, сообщите нам о ваших рейсах заранее.",
        },
        {
          id: "faq-service-3",
          title: "Есть ли бесплатный Wi-Fi в отеле?",
          content: "Да, высокоскоростной беспроводной доступ в интернет доступен бесплатно на всей территории отеля, включая номера и общие зоны.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smiley-realtor-signing-contract-new-house-with-couple_23-2148895491.jpg"
      imageAlt="Hotel staff helping a guest with questions"
      mediaAnimation="opacity"
      title="Вопросы об услугах"
      description="Здесь вы найдете ответы на часто задаваемые вопросы о дополнительных услугах Merci Hotel."
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
