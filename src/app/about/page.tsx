"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TeamCardSix from '@/components/sections/team/TeamCardSix';

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

  <div id="about-us" data-section="about-us">
      <MediaAbout
      useInvertedBackground={true}
      title="Наша история и миссия"
      description="Merci Hotel был основан с целью предложить гостям Ташкента непревзойденный уровень комфорта и гостеприимства. Мы стремимся создать дом вдали от дома, где каждый гость чувствует себя особенным."
      tag="О нас"
      imageSrc="http://img.b2bpic.net/free-photo/beige-colored-interior-dining-room_114579-2540.jpg"
      imageAlt="Merci Hotel building at dusk"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "team-1",
          name: "Азиз Каримов",
          role: "Генеральный менеджер",
          imageSrc: "http://img.b2bpic.net/free-photo/old-tourist-using-mobile-nfc-technology_482257-76765.jpg",
          imageAlt: "Aziz Karimov, General Manager",
        },
        {
          id: "team-2",
          name: "Мадина Ибрагимова",
          role: "Шеф-повар",
          imageSrc: "http://img.b2bpic.net/free-photo/chef-working-together-professional-kitchen_23-2149728025.jpg",
          imageAlt: "Madina Ibragimova, Head Chef",
        },
        {
          id: "team-3",
          name: "Шухрат Рахимов",
          role: "Руководитель службы приема",
          imageSrc: "http://img.b2bpic.net/free-photo/friendly-doorkeeper-five-star-hotel-greeting-guests-offering-his-services_482257-106907.jpg",
          imageAlt: "Shuhrat Rakhimov, Front Office Manager",
        },
      ]}
      title="Наша команда"
      description="Познакомьтесь с профессионалами, которые ежедневно работают над созданием незабываемых впечатлений для каждого гостя Merci Hotel."
      tag="Лица гостеприимства"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "metric-1",
          value: "5 лет",
          description: "На рынке гостеприимства Ташкента",
        },
        {
          id: "metric-2",
          value: "9.2/10",
          description: "Средний рейтинг по отзывам гостей",
        },
        {
          id: "metric-3",
          value: "20000+",
          description: "Довольных гостей в год",
        },
      ]}
      title="Наши достижения и ценности"
      description="Мы гордимся тем, что предлагаем нашим гостям исключительный сервис и комфорт, что подтверждается нашими показателями."
      tag="Цифры говорят"
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
