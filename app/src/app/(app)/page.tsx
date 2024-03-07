import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "@/components/CardV";
import CardH from "@/components/CardH";
import Tabs from "@/components/Tabs";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-slate-300">
        <div className="container flex mx-auto">
          <div className="flex items-center justify-center w-1/3">
            <div>
              <h1 className="mb-4 font-bold text-7xl text-slate-900">
                Rémy Pelletier <br />
              </h1>
              <p className="mb-2 text-xl text-gray-700">
                An open source component library optimized for fast development,
                easy maintenance, and accessibility. Just import and go—no
                configuration required.
              </p>
              <p>(Heartbeat && openToWork)</p>
              <Button variant="primary">
                🤝 Profitons-en pour collaborer ensemble
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center w-2/3">
            <Image
              src="/profile.webp"
              alt="profile"
              width={700}
              height={700}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="py-16 bg-slate-100">
        <div className="container mx-auto">
          <h2 className="mb-4 text-6xl font-bold text-gray-900">
            Core building blocks <br />
            for your design system
          </h2>
          <p className="mb-8 text-xl text-gray-500">
            Unstyled, accessible, open source React primitives
            <br />
            for high-quality web apps and design systems.
          </p>
        </div>
        <ul className="flex max-w-full overflow-x-scroll">
          <li className="m-2 min-w-[400px]">
            <Card
              image={{ src: "/profile.webp", alt: "Image de profile" }}
              width={400}
              height={400}
              description="Description de l'image"
              title="Titre de la description"
            />
          </li>
          <li className="m-2 min-w-[400px]">
            <Card
              image={{ src: "/profile.webp", alt: "Image de profile" }}
              width={400}
              height={400}
              description="Description de l'image"
              title="Titre de la description"
            />
          </li>
          <li className="m-2 min-w-[400px]">
            <Card
              image={{ src: "/profile.webp", alt: "Image de profile" }}
              width={400}
              height={400}
              description="Description de l'image"
              title="Titre de la description"
            />
          </li>
          <li className="m-2 min-w-[400px]">
            <Card
              image={{ src: "/profile.webp", alt: "Image de profile" }}
              width={400}
              height={400}
              description="Description de l'image"
              title="Titre de la description"
            />
          </li>
          <li className="m-2 min-w-[400px]">
            <Card
              image={{ src: "/profile.webp", alt: "Image de profile" }}
              width={400}
              height={400}
              description="Description de l'image"
              title="Titre de la description"
            />
          </li>
          <li className="m-2 min-w-[400px]">
            <Card
              image={{ src: "/profile.webp", alt: "Image de profile" }}
              width={400}
              height={400}
              description="Description de l'image"
              title="Titre de la description"
            />
          </li>
          <li className="m-2 min-w-[400px]">
            <Card
              image={{ src: "/profile.webp", alt: "Image de profile" }}
              width={400}
              height={400}
              description="Description de l'image"
              title="Titre de la description"
            />
          </li>
        </ul>
      </div>
      <div className="py-16 bg-slate-300">
        <div className="container mx-auto">
          <h2 className="mb-4 text-6xl font-bold text-gray-900">
            Core building blocks <br />
            for your design system
          </h2>
          <p className="mb-8 text-xl text-gray-500">
            Unstyled, accessible, open source React primitives
            <br />
            for high-quality web apps and design systems.
          </p>
          <div className="flex-col">
            <div className="flex">
              <div className="w-1/2 p-2">
                <CardH
                  image={{ src: "/profile.webp", alt: "Image de profile" }}
                  width={400}
                  height={400}
                  description="Description de l'image"
                  title="Titre de la description"
                />
              </div>
              <div className="w-1/2 p-2">
                <CardH
                  image={{ src: "/profile.webp", alt: "Image de profile" }}
                  width={400}
                  height={400}
                  description="Description de l'image"
                  title="Titre de la description"
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3 p-2">
                <Card
                  image={{ src: "/profile.webp", alt: "Image de profile" }}
                  width={400}
                  height={400}
                  description="Description de l'image"
                  title="Titre de la description"
                />
              </div>
              <div className="w-1/3 p-2">
                <Card
                  image={{ src: "/profile.webp", alt: "Image de profile" }}
                  width={400}
                  height={400}
                  description="Description de l'image"
                  title="Titre de la description"
                />
              </div>
              <div className="w-1/3 p-2">
                <Card
                  image={{ src: "/profile.webp", alt: "Image de profile" }}
                  width={400}
                  height={400}
                  description="Description de l'image"
                  title="Titre de la description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-slate-100">
        <div className="container mx-auto">
          <div className="container mx-auto">
            <h2 className="mb-4 text-6xl font-bold text-gray-900">
              Core building blocks <br />
              for your design system
            </h2>
            <p className="mb-8 text-xl text-gray-500">
              Unstyled, accessible, open source React primitives
              <br />
              for high-quality web apps and design systems.
            </p>
          </div>
          <div className="flex justify-center">
            <Tabs />
          </div>
        </div>
      </div>
      <div className="py-16 bg-slate-300">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-6xl font-bold text-gray-900">
            Core building blocks <br />
            for your design system
          </h2>
          <p className="mb-8 text-xl text-gray-500">
            Unstyled, accessible, open source React primitives
            <br />
            for high-quality web apps and design systems.
          </p>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}
