import Image from "next/image";

function Card({ title, imageUrl, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden ">
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={title}

          className="w-full h-full object-cover -z-10"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Card;
