interface StackItem {
  icon: React.ReactNode;
  name: string;         
}

interface CardProps {
  name: string;
  stack: StackItem[];
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
      <div className="flex flex-row gap-4 text-xl">
        {stack.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="text-4xl">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;