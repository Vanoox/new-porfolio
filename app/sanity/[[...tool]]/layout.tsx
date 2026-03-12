export default async function Layout(props: LayoutProps<"/sanity/[[...tool]]">) {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
}
