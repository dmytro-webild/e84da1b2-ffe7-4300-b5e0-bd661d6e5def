"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

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

  <div id="about-rooms" data-section="about-rooms">
      <MediaAbout
      useInvertedBackground={true}
      title="Ваш идеальный номер ждет вас"
      description="В Merci Hotel мы предлагаем широкий выбор номеров, от уютных стандартов до роскошных люксов, каждый из которых оснащен для вашего максимального комфорта. Позвольте нам сделать ваше пребывание в Ташкенте незабываемым."
      tag="Комфорт и выбор"
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-young-caucasian-female-with-long-blonde-hair-nice-face-bright-earrings-white-suit_132075-9619.jpg"
      imageAlt="A luxurious hotel room"
    />
  </div>

  <div id="product-all-rooms" data-section="product-all-rooms">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "all-room-1",
          brand: "Merci Hotel",
          name: "Стандартный одноместный",
          price: "от $70 / ночь",
          rating: 4,
          reviewCount: "90",
          imageSrc: "http://img.b2bpic.net/free-photo/young-mother-spending-time-with-baby_23-2150569433.jpg",
          imageAlt: "Single standard room",
        },
        {
          id: "all-room-2",
          brand: "Merci Hotel",
          name: "Стандартный двухместный",
          price: "от $80 / ночь",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150956569.jpg",
          imageAlt: "Standard double room",
        },
        {
          id: "all-room-3",
          brand: "Merci Hotel",
          name: "Номер Твин",
          price: "от $95 / ночь",
          rating: 5,
          reviewCount: "45",
          imageSrc: "http://img.b2bpic.net/free-photo/white-pillow-bed_74190-2473.jpg",
          imageAlt: "Twin room",
        },
        {
          id: "all-room-4",
          brand: "Merci Hotel",
          name: "Делюкс с видом",
          price: "от $120 / ночь",
          rating: 5,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-couple-have-fun-bedroom-fighting-with-big-pillows-home_1153-3755.jpg",
          imageAlt: "Deluxe room with a view",
        },
        {
          id: "all-room-5",
          brand: "Merci Hotel",
          name: "Семейный номер",
          price: "от $150 / ночь",
          rating: 5,
          reviewCount: "60",
          imageSrc: "http://img.b2bpic.net/free-photo/family-sitting-bed_1157-16992.jpg",
          imageAlt: "Family room",
        },
        {
          id: "all-room-6",
          brand: "Merci Hotel",
          name: "Бизнес-люкс",
          price: "от $180 / ночь",
          rating: 5,
          reviewCount: "75",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-carrying-their-baby-sitting-bedroom_23-2147923004.jpg",
          imageAlt: "Business suite",
        },
      ]}
      title="Все номера Merci Hotel"
      description="Изучите все доступные типы номеров и забронируйте тот, который идеально подходит для вашего визита. Каждый номер предлагает уникальные удобства и дизайн."
      tag="Галерея номеров"
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
