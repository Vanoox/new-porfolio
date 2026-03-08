type Props = {
  img?: string;
  alt?: string;
  title: string;
  description: string;
};

export default function TitleWithDescription(props: Props) {
  return (
    <div className="flex flex-col items-center text-center max-w-xl">
      {props.img && (
        <div className="w-28 h-28 rounded-full overflow-hidden mb-6 bg-foreground/15 ring-2 ring-ring">
          <img src={props.img} alt={props.alt || ""} className="w-full h-full object-cover" />
        </div>
      )}

      <h1 className="text-4xl text-foreground font-semibold mb-4">{props.title}</h1>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{props.description}</p>
    </div>
  );
}
