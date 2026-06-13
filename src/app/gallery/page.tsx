"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import MediaAbout from '@/components/sections/about/MediaAbout';
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

  <div id="about-gallery" data-section="about-gallery">
      <MediaAbout
      useInvertedBackground={true}
      title="Наша фотогалерея"
      description="Окунитесь в атмосферу Merci Hotel через нашу галерею. Здесь представлены фотографии номеров, интерьеров, экстерьера и моментов из жизни отеля."
      tag="Визуальный тур"
      imageSrc="http://img.b2bpic.net/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg"
      imageAlt="Luxurious hotel room interior"
    />
  </div>

  <div id="blog-gallery-categories" data-section="blog-gallery-categories">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      title="Изучите наши фотоколлекции"
      description="Выберите категорию, чтобы увидеть больше изображений Merci Hotel."
      tag="Категории"
      blogs={[
        {
          id: "gallery-cat-1",
          category: "Номера",
          title: "Комфорт и дизайн наших номеров",
          excerpt: "Посмотрите на уют и стиль, которые ждут вас в каждом номере.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150956525.jpg",
          imageAlt: "Hotel room",
          authorName: "Merci Hotel",
          authorAvatar: "http://img.b2bpic.net/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg",
          date: "2023-10-26",
        },
        {
          id: "gallery-cat-2",
          category: "Интерьеры",
          title: "Элегантность общих зон",
          excerpt: "Изысканный декор и расслабляющая атмосфера наших интерьеров.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-hotel-reception-entryway-with-glamorous-decorations_482257-87376.jpg",
          imageAlt: "Hotel interior lobby",
          authorName: "Merci Hotel",
          authorAvatar: "http://img.b2bpic.net/free-photo/half-body-portrait-proud-guy-enjoying-his-success_179666-2026.jpg",
          date: "2023-10-26",
        },
        {
          id: "gallery-cat-3",
          category: "Экстерьер",
          title: "Внешний вид отеля",
          excerpt: "Архитектура и красота здания Merci Hotel.",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-modern-building-with-glass-windows-sunlight_181624-11971.jpg",
          imageAlt: "Hotel exterior",
          authorName: "Merci Hotel",
          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-young-male-crossing-his-fingers-classic-strict-suit-white-background-emotions-human-fashion-model-suit-male_140725-71037.jpg",
          date: "2023-10-26",
        },
        {
          id: "gallery-cat-4",
          category: "Услуги",
          title: "Моменты сервиса и удобств",
          excerpt: "Фотографии наших услуг, созданных для вашего комфорта.",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-giving-room-access-card-passport-client_482257-82846.jpg",
          imageAlt: "Hotel services",
          authorName: "Merci Hotel",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg",
          date: "2023-10-26",
        },
      ]}
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
