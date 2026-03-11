type Props = {
  title: string;
  description: string;
};

export default function TitleWithDescription(props: Props) {
  return (
    <div className="flex flex-col items-center text-center max-w-xl">
      <h1 className="text-4xl text-foreground font-semibold mb-4">{props.title}</h1>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-lg text-balance">{props.description}</p>
    </div>
  );
}
