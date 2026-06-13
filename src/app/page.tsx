"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Home, Smile, Star } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "radial-gradient",
      }}
      title="Merci Hotel"
      description="Ваш идеальный отдых в самом сердце Ташкента. Роскошь, комфорт и гостеприимство."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-elegant-joyful-guy-grey-jacket-shirt-wears-glasses-gray_291650-1303.jpg",
          alt: "Satisfied Guest 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-young-redhead-woman-wearing-grey-checkered-shirt-laughing-out-loud-while-having-fun-indoors_273609-9041.jpg",
          alt: "Satisfied Guest 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg",
          alt: "Satisfied Guest 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",
          alt: "Satisfied Guest 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-attractive-afroamerican-man_23-2148508906.jpg",
          alt: "Счастливый гость 5",
        },
      ]}
      avatarText="Гости говорят о нас"
      buttons={[
        {
          text: "Забронировать номер",
          href: "/rooms",
        },
        {
          text: "Позвонить",
          href: "tel:+998901234567",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Отличный сервис",
          icon: Star,
        },
        {
          type: "text",
          text: "Идеальное расположение",
        },
        {
          type: "text-icon",
          text: "Комфортные номера",
          icon: Home,
        },
        {
          type: "text",
          text: "Вкусные завтраки",
        },
        {
          type: "text-icon",
          text: "Гостеприимный персонал",
          icon: Smile,
        },
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="about-home" data-section="about-home">
      <MediaAbout
      useInvertedBackground={true}
      title="О гостинице Merci Hotel"
      description="Merci Hotel – это оазис комфорта и элегантности в центре Ташкента. Мы предлагаем высококлассный сервис, уютные номера и незабываемые впечатления, чтобы ваше пребывание было максимально приятным и продуктивным."
      tag="О нас"
      imageSrc="http://img.b2bpic.net/free-photo/elderly-person-paying-coffee-cup_482257-87199.jpg"
      imageAlt="Exterior view of Merci Hotel in Tashkent"
    />
  </div>

  <div id="features-advantages" data-section="features-advantages">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Бесплатный Wi-Fi",
          description: "Оставайтесь на связи с высокоскоростным интернетом во всех зонах отеля.",
          imageSrc: "http://img.b2bpic.net/free-photo/customer-using-nfc-mobile-payment-buy-coffee-from-bar_482257-101079.jpg",
          imageAlt: "Free Wi-Fi icon",
        },
        {
          title: "Завтрак включен",
          description: "Начните свой день с вкусного и питательного завтрака, включенного в стоимость.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-man-having-breakfast-eating-sausage_176474-3996.jpg",
          imageAlt: "Hotel breakfast",
        },
        {
          title: "Удобное расположение",
          description: "Мы находимся в самом центре города, рядом с ключевыми достопримечательностями.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-bench-full-shot_23-2149651996.jpg",
          imageAlt: "Map pin icon",
        },
        {
          title: "Круглосуточная стойка регистрации",
          description: "Наша команда готова помочь вам в любое время дня и ночи.",
          imageSrc: "http://img.b2bpic.net/free-photo/doorman-bellhop-hotel-staff-checks-time-studio-while-holding-indoor-clock-see-hour-trying-be-time-young-adult-employee-stands-formal-attire-with-watch-hand_482257-70220.jpg",
          imageAlt: "24/7 reception desk",
        },
        {
          title: "Трансфер",
          description: "Организуем комфортный трансфер от/до аэропорта и вокзала.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-valet-parking-car_23-2149901433.jpg",
          imageAlt: "Airport transfer car",
        },
        {
          title: "Комфортные номера",
          description: "Насладитесь безупречным комфортом и стильным дизайном наших номеров.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-pregnant-woman-laying-bed_23-2149072928.jpg",
          imageAlt: "Comfortable hotel room",
        },
      ]}
      title="Наши преимущества"
      description="Мы стремимся сделать ваше пребывание в Merci Hotel по-настоящему комфортным и беззаботным, предлагая широкий спектр услуг."
      tag="Удобства"
    />
  </div>

  <div id="product-popular-rooms" data-section="product-popular-rooms">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="buttons"
      products={[
        {
          id: "product-1",
          brand: "Merci Hotel",
          name: "Стандартный двухместный",
          price: "от $80 / ночь",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-bedroom-design-overlooking-city-through-window-generated-by-ai_188544-16923.jpg",
          imageAlt: "Standard double room",
        },
        {
          id: "product-2",
          brand: "Merci Hotel",
          name: "Делюкс с видом",
          price: "от $120 / ночь",
          rating: 5,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150956527.jpg",
          imageAlt: "Deluxe room with a view",
        },
        {
          id: "product-3",
          brand: "Merci Hotel",
          name: "Семейный номер",
          price: "от $150 / ночь",
          rating: 5,
          reviewCount: "60",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-young-friends-hostel_23-2150598852.jpg",
          imageAlt: "Family room",
        },
        {
          id: "product-4",
          brand: "Merci Hotel",
          name: "Бизнес-люкс",
          price: "от $180 / ночь",
          rating: 5,
          reviewCount: "75",
          imageSrc: "http://img.b2bpic.net/free-photo/fiance-with-friends-drining-wedding-day-indoors_8353-12087.jpg",
          imageAlt: "Business suite",
        },
        {
          id: "product-5",
          brand: "Merci Hotel",
          name: "Одноместный стандарт",
          price: "от $70 / ночь",
          rating: 4,
          reviewCount: "90",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-bed-with-strawberry-her-hand_23-2147601314.jpg",
          imageAlt: "Single standard room",
        },
        {
          id: "product-6",
          brand: "Merci Hotel",
          name: "Номер Твин",
          price: "от $95 / ночь",
          rating: 5,
          reviewCount: "45",
          imageSrc: "http://img.b2bpic.net/free-photo/bed-pillow_74190-129.jpg",
          imageAlt: "Twin room",
        },
      ]}
      title="Наши популярные номера"
      description="Откройте для себя широкий выбор номеров, каждый из которых спроектирован для вашего максимального комфорта и уюта."
      tag="Номера"
    />
  </div>

  <div id="testimonials-home" data-section="testimonials-home">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "testimonial-1",
          name: "Анна Смирнова",
          role: "Турист",
          testimonial: "Отличный отель! Чистота, комфорт и очень внимательный персонал. Расположение идеальное для осмотра Ташкента.",
          imageSrc: "http://img.b2bpic.net/free-photo/traveller-browsing-tablet-lobby_482257-76754.jpg",
          imageAlt: "Anna Smirnova",
        },
        {
          id: "testimonial-2",
          name: "Иван Петров",
          role: "Деловой путешественник",
          testimonial: "Регулярно останавливаюсь здесь во время командировок. Всегда высокий уровень сервиса, быстрый Wi-Fi и вкусные завтраки.",
          imageSrc: "http://img.b2bpic.net/free-photo/enchanting-white-girl-pink-sunglasses-posing-with-wineglass-hand-laughing-charming-woman-striped-dress-relaxing-cafe_197531-9593.jpg",
          imageAlt: "Ivan Petrov",
        },
        {
          id: "testimonial-3",
          name: "Екатерина Кузнецова",
          role: "Семейный отдых",
          testimonial: "Были с семьей, очень понравилось! Номера просторные, детям было комфортно, а взрослым — спокойно и уютно.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-reading-cell-phone-messages_23-2150409991.jpg",
          imageAlt: "Ekaterina Kuznetsova",
        },
        {
          id: "testimonial-4",
          name: "Алишер Назаров",
          role: "Местный гость",
          testimonial: "Часто рекомендую этот отель своим друзьям и партнерам из-за границы. Ни разу не подводил. Сервис на высоте!",
          imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-businessman-sitting-chair-waiting-area_107420-95803.jpg",
          imageAlt: "Alisher Nazarov",
        },
        {
          id: "testimonial-5",
          name: "Ольга Васильева",
          role: "Отдыхающая",
          testimonial: "Прекрасный отель! Красивый интерьер, дружелюбный персонал и идеальное расположение. Обязательно вернусь снова.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-senior-friends-spending-time-together-beach_23-2149014577.jpg",
          imageAlt: "Olga Vasilyeva",
        },
      ]}
      title="Что говорят наши гости"
      description="Почитайте отзывы от тех, кто уже насладился гостеприимством Merci Hotel. Мы гордимся высоким уровнем удовлетворенности наших посетителей."
      tag="Отзывы"
    />
  </div>

  <div id="contact-home" data-section="contact-home">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Забронируйте сейчас"
      title="Готовы забронировать свой идеальный номер?"
      description="Наша команда готова ответить на все ваши вопросы и помочь с бронированием. Свяжитесь с нами сегодня!"
      buttons={[
        {
          text: "Забронировать номер",
          href: "/rooms",
        },
        {
          text: "Позвонить нам",
          href: "tel:+998901234567",
        },
      ]}
      buttonAnimation="slide-up"
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
