interface CardProps {
  name: string;
  stack: string;
  imgsrc: string;
}
import Image from "next/image";

const Card = ({ name, stack, imgsrc }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl border bg-card text-card-foreground shadow-lg">
        <Image
          src={imgsrc}
          alt="Picture of the author"
          width={350}
          height={350}
          className="w-auto h-auto"
          priority={true}
        />

      <h2 className="text-lg font-bold uppercase">{name}</h2>
      <div className="text-lg">{stack}</div>
    </div>
  );
};

export default Card;