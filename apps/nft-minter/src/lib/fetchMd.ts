export async function fetchMd(props: { src: string }) {
  const { src } = props;
  const response = await fetch(src);
  return response.text();
}
