interface CardProps {
  name: string;
  stack: string;
}

const Card = ({ name, stack }: CardProps) => {
  return (
    <div
      className="p-4 h-64 rounded-lg shadow-lg gap-2 border-1"
    >
      <h2 className="text-lg font-bold uppercase">{name}</h2>
      <div className="text-lg">
        {stack}
      </div>
    </div>
  );
};

export default Card;