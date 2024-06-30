import Image from "next/image";
import featureImg from "@/assets/feature.jpg";
import marketing1 from "@/assets/marketing1.jpg";
import marketing2 from "@/assets/marketing2.jpg";
import marketing3 from "@/assets/marketing3.jpg";
import Card from "@/components/card/Card.jsx";

export default function Home() {
  const cards = [
    {
      title: "Social Media Management",
      description:
        "We handle your social media presence, creating content that engages and grows your audience.",
      imageUrl: marketing1,
    },
    {
      title: "Targeted Advertising",
      description:
        "Our targeted ad campaigns reach the right audience, driving traffic and boosting conversions.",
      imageUrl: marketing2,
    },
    {
      title: "Analytics & Reporting",
      description:
        "Gain insights with our detailed analytics and reporting, allowing you to make data-driven decisions.",
      imageUrl: marketing3,
    },
  ];
  return (
    <main>
      <section className="bg-white py-8 mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-1">
              <Image
                src={featureImg}
                alt="marketing Image"
                width={600}
                height={400}
                className="w-full h-auto rounded shadow-md"
              />
            </div>
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800">
                Boost Your Brand with Expert Social Media Marketing
              </h2>
              <p className="mt-4 text-gray-600">
                Elevate your brand&apos;s online presence with AMRYTT. We create
                custom social media campaigns that engage your audience and
                drive real results. From content creation to targeted ads, our
                experts handle it all to help you reach your business goals.
              </p>
              <p className="mt-4 text-gray-600">
                Whether you need to raise brand awareness, drive traffic, or
                increase sales, our team delivers impactful, measurable
                resultsage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-4xl p-8">
            Latest Articals
          </h3>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                imageUrl={card.imageUrl}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
